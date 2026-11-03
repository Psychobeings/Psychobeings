import jwt from 'jsonwebtoken';
import AdminUser from '../models/admin_users.js';
import ClientUser from '../models/client_user.js';

const SESSION_COOKIE = {
  admin: 'admin_session',
  customer: 'client_session'
};

export function getAllowedOrigins() {
  return [
    process.env.SOURCE_URL,
    process.env.ADMIN_URL,
    'http://localhost:3000',
    'http://localhost:3001'
  ].filter(Boolean);
}

export function sessionCookieOptions() {
  const configuredSameSite = (process.env.COOKIE_SAME_SITE || 'lax').toLowerCase();
  const sameSite = ['strict', 'lax', 'none'].includes(configuredSameSite) ? configuredSameSite : 'lax';
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' || sameSite === 'none',
    sameSite,
    path: '/',
    maxAge: 30 * 60 * 1000
  };
}

export function setSessionCookie(res, role, token) {
  res.cookie(SESSION_COOKIE[role], token, sessionCookieOptions());
}

export function clearSessionCookie(res, role) {
  const { maxAge, ...options } = sessionCookieOptions();
  res.clearCookie(SESSION_COOKIE[role], options);
}

function getCookie(req, name) {
  const cookieHeader = req.headers.cookie || '';
  for (const segment of cookieHeader.split(';')) {
    const separator = segment.indexOf('=');
    if (separator < 0) continue;
    if (segment.slice(0, separator).trim() === name) {
      try {
        return decodeURIComponent(segment.slice(separator + 1).trim());
      } catch {
        return null;
      }
    }
  }
  return null;
}

function createSessionToken(user, role) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is required to issue authentication tokens');
  }
  return jwt.sign(
    { role, tokenVersion: user.tokenVersion || 0 },
    process.env.JWT_SECRET,
    {
      subject: String(user._id),
      issuer: 'psychobeings',
      audience: role,
      expiresIn: '30m'
    }
  );
}

export const adminSessionCookie = (res, user) => setSessionCookie(res, 'admin', createSessionToken(user, 'admin'));
export const clientSessionCookie = (res, user) => setSessionCookie(res, 'customer', createSessionToken(user, 'customer'));

export function requireRole(role) {
  return async (req, res, next) => {
    const origin = req.get('origin');
    if (origin && !getAllowedOrigins().includes(origin)) {
      return res.status(403).json({ message: 'Request origin is not allowed.' });
    }

    const cookieRole = role === 'admin' ? 'admin' : 'customer';
    const token = getCookie(req, SESSION_COOKIE[cookieRole]);

    if (!token) return res.status(401).json({ message: 'Authentication required.' });
    if (!process.env.JWT_SECRET) {
      return res.status(503).json({ message: 'Authentication is not configured on this server.' });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET, {
        issuer: 'psychobeings',
        audience: cookieRole
      });

      if (payload.role !== role || payload.sub === undefined) {
        return res.status(403).json({ message: 'Access denied.' });
      }

      const UserModel = role === 'admin' ? AdminUser : ClientUser;
      const user = await UserModel.findById(payload.sub).select('+tokenVersion');
      if (!user || (user.tokenVersion || 0) !== payload.tokenVersion) {
        return res.status(401).json({ message: 'Session is no longer valid.' });
      }

      if (role === 'admin' && !user.twoFactorEnabled) {
        return res.status(403).json({ message: 'Admin two-factor authentication is required.' });
      }

      req.auth = { userId: user._id, role, user };
      setSessionCookie(res, cookieRole, createSessionToken(user, cookieRole));
      return next();
    } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Session is invalid or expired.' });
      }
      return next(error);
    }
  };
}
