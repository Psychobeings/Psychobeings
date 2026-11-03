import bcrypt from 'bcrypt';
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import AdminUser from '../models/admin_users.js';
import ClientUser from '../models/client_user.js';
import PasswordReset from '../models/password_reset.js';
import AuditLog from '../models/audit_log.js';
import { adminSessionCookie, clientSessionCookie, clearSessionCookie } from '../middleware/auth.js';
import { sendPasswordResetEmail } from '../services/email.js';

const LOCKOUT_MS = 15 * 60 * 1000;
const PASSWORD_MIN_LENGTH = 12;

function normalizeEmail(email) {
  return typeof email === 'string' ? email.trim().toLowerCase() : '';
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email);
}

function validPassword(password) {
  return typeof password === 'string' && password.length >= PASSWORD_MIN_LENGTH && password.length <= 128;
}

async function checkLockout(user) {
  if (!user.lockedUntil) return false;
  if (user.lockedUntil > new Date()) return true;
  user.failedLoginAttempts = 0;
  user.lockedUntil = null;
  await user.save();
  return false;
}

async function registerFailure(user) {
  const UserModel = user.role === 'admin' ? AdminUser : ClientUser;
  const lockedUntil = new Date(Date.now() + LOCKOUT_MS);
  const updatedUser = await UserModel.findOneAndUpdate(
    {
      _id: user._id,
      $or: [{ lockedUntil: null }, { lockedUntil: { $exists: false } }]
    },
    [
      {
        $set: {
          failedLoginAttempts: {
            $add: [{ $ifNull: ['$failedLoginAttempts', 0] }, 1]
          }
        }
      },
      {
        $set: {
          lockedUntil: {
            $cond: [
              { $gte: ['$failedLoginAttempts', 5] },
              lockedUntil,
              '$lockedUntil'
            ]
          },
          failedLoginAttempts: {
            $cond: [
              { $gte: ['$failedLoginAttempts', 5] },
              0,
              '$failedLoginAttempts'
            ]
          }
        }
      }
    ],
    { new: true }
  ).select('+lockedUntil');

  return !updatedUser || Boolean(updatedUser.lockedUntil);
}

async function resetFailures(user) {
  user.failedLoginAttempts = 0;
  user.lockedUntil = null;
  await user.save();
}

export async function clientSignup(req, res, next) {
  try {
    const email = normalizeEmail(req.body.email);
    const { password, consent } = req.body;

    if (!validEmail(email) || !validPassword(password)) {
      return res.status(400).json({ message: 'Enter a valid email and a password of at least 12 characters.' });
    }
    if (consent !== true) {
      return res.status(400).json({ message: 'Consent is required to create an account.' });
    }
    if (await ClientUser.exists({ email })) {
      return res.status(409).json({ message: 'An account with this email already exists.' });
    }

    const user = await ClientUser.create({
      email,
      password: await bcrypt.hash(password, 12),
      consentAt: new Date(),
      consentVersion: process.env.CONSENT_VERSION || '1'
    });

    clientSessionCookie(res, user);
    return res.status(201).json({ message: 'Account created.', user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ message: 'An account with this email already exists.' });
    return next(error);
  }
}

export async function clientSignin(req, res, next) {
  try {
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;
    if (!validEmail(email) || typeof password !== 'string') {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await ClientUser.findOne({ email }).select('+password +failedLoginAttempts +lockedUntil +tokenVersion');
    if (!user) return res.status(401).json({ message: 'Invalid email or password.' });
    if (await checkLockout(user)) {
      return res.status(423).json({ message: 'Account temporarily locked after failed sign-in attempts.' });
    }
    if (!await bcrypt.compare(password, user.password)) {
      const locked = await registerFailure(user);
      return res.status(locked ? 423 : 401).json({
        message: locked ? 'Account temporarily locked after failed sign-in attempts.' : 'Invalid email or password.'
      });
    }

    await resetFailures(user);
    clientSessionCookie(res, user);
    return res.json({ message: 'Signed in.', user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    return next(error);
  }
}

export async function adminSignup(req, res, next) {
  try {
    const bootstrapKey = process.env.ADMIN_BOOTSTRAP_KEY;
    const suppliedKey = req.get('x-admin-bootstrap-key') || '';
    if (!bootstrapKey || bootstrapKey.length < 32) {
      return res.status(503).json({ message: 'Admin account provisioning is not configured.' });
    }

    const expected = Buffer.from(bootstrapKey);
    const supplied = Buffer.from(suppliedKey);
    if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) {
      return res.status(403).json({ message: 'Admin account provisioning is not authorized.' });
    }

    const email = normalizeEmail(req.body.email);
    const { password } = req.body;
    if (!validEmail(email) || !validPassword(password)) {
      return res.status(400).json({ message: 'Enter a valid email and a password of at least 12 characters.' });
    }
    if (await AdminUser.exists({ email })) {
      return res.status(409).json({ message: 'An admin account with this email already exists.' });
    }

    await AdminUser.create({ email, password: await bcrypt.hash(password, 12), role: 'admin' });
    return res.status(201).json({ message: 'Admin account created.' });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ message: 'An admin account with this email already exists.' });
    return next(error);
  }
}

export async function adminSignin(req, res, next) {
  try {
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;
    if (!validEmail(email) || typeof password !== 'string') {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await AdminUser.findOne({ email }).select('+password +failedLoginAttempts +lockedUntil +tokenVersion');
    if (!user) return res.status(401).json({ message: 'Invalid email or password.' });
    if (await checkLockout(user)) {
      return res.status(423).json({ message: 'Account temporarily locked after failed sign-in attempts.' });
    }
    if (!await bcrypt.compare(password, user.password)) {
      const locked = await registerFailure(user);
      return res.status(locked ? 423 : 401).json({
        message: locked ? 'Account temporarily locked after failed sign-in attempts.' : 'Invalid email or password.'
      });
    }

    await resetFailures(user);
    adminSessionCookie(res, user);
    await AuditLog.create({ actorId: user._id, actorRole: 'admin', action: 'admin.signed_in' });
    return res.json({ message: 'Signed in.', user: { id: user._id, email: user.email, role: 'admin' } });
  } catch (error) {
    return next(error);
  }
}

export async function adminLogout(req, res, next) {
  try {
    await AdminUser.findByIdAndUpdate(req.auth.userId, { $inc: { tokenVersion: 1 } });
    clearSessionCookie(res, 'admin');
    return res.json({ message: 'Signed out.' });
  } catch (error) {
    return next(error);
  }
}

export async function clientLogout(req, res, next) {
  try {
    await ClientUser.findByIdAndUpdate(req.auth.userId, { $inc: { tokenVersion: 1 } });
    clearSessionCookie(res, 'customer');
    return res.json({ message: 'Signed out.' });
  } catch (error) {
    return next(error);
  }
}

export function currentSession(req, res) {
  const { user } = req.auth;
  return res.json({ user: { id: user._id, email: user.email, role: req.auth.role } });
}

export function requestPasswordReset(role) {
  return async (req, res, next) => {
    try {
      const email = normalizeEmail(req.body.email);
      if (!validEmail(email)) return res.status(400).json({ message: 'Enter a valid email address.' });

      const UserModel = role === 'admin' ? AdminUser : ClientUser;
      const user = await UserModel.findOne({ email });
      if (user) {
        const rawToken = randomBytes(32).toString('hex');
        const tokenHash = createHash('sha256').update(rawToken).digest('hex');
        await PasswordReset.deleteMany({ userId: user._id, userType: role });
        await PasswordReset.create({
          userId: user._id,
          userType: role,
          tokenHash,
          expiresAt: new Date(Date.now() + 30 * 60 * 1000)
        });

        const appUrl = role === 'admin' ? process.env.ADMIN_URL : process.env.SOURCE_URL;
        if (!appUrl) return res.status(503).json({ message: 'Password recovery is not configured on this server.' });
        const resetUrl = new URL(role === 'admin' ? '/reset-password' : '/reset-password', appUrl);
        resetUrl.searchParams.set('token', rawToken);
        try {
          await sendPasswordResetEmail({ to: user.email, url: resetUrl.toString(), role });
        } catch (error) {
          await PasswordReset.deleteMany({ userId: user._id, userType: role });
          console.error('Password reset email delivery failed:', error.message);
          return res.status(503).json({ message: 'Password recovery email could not be sent. Check the email service configuration and try again.' });
        }
      }

      return res.json({ message: 'If an account exists for that email, a password reset link will be sent.' });
    } catch (error) {
      return next(error);
    }
  };
}

export async function completePasswordReset(role, req, res, next) {
  try {
    const { token, password } = req.body;
    if (typeof token !== 'string' || !validPassword(password)) {
      return res.status(400).json({ message: 'A valid reset token and a password of at least 12 characters are required.' });
    }

    const tokenHash = createHash('sha256').update(token).digest('hex');
    const reset = await PasswordReset.findOne({ userType: role, tokenHash, expiresAt: { $gt: new Date() } });
    if (!reset) return res.status(400).json({ message: 'The reset link is invalid or expired.' });

    const UserModel = role === 'admin' ? AdminUser : ClientUser;
    const user = await UserModel.findById(reset.userId).select('+tokenVersion');
    if (!user) return res.status(400).json({ message: 'The reset link is invalid or expired.' });

    user.password = await bcrypt.hash(password, 12);
    user.tokenVersion = (user.tokenVersion || 0) + 1;
    await user.save();
    await PasswordReset.deleteMany({ userId: user._id, userType: role });
    clearSessionCookie(res, role);
    return res.json({ message: 'Password updated. Please sign in again.' });
  } catch (error) {
    return next(error);
  }
}

export async function adminForgotPassword(req, res, next) {
  return requestPasswordReset('admin')(req, res, next);
}

export async function clientForgotPassword(req, res, next) {
  return requestPasswordReset('customer')(req, res, next);
}

export async function adminResetPassword(req, res, next) {
  return completePasswordReset('admin', req, res, next);
}

export async function clientResetPassword(req, res, next) {
  return completePasswordReset('customer', req, res, next);
}
