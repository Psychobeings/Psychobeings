import { createHash, randomBytes } from 'node:crypto';
import AdminUser from '../models/admin_users.js';
import ClientUser from '../models/client_user.js';
import ClientInvitation from '../models/client_invitation.js';
import PasswordReset from '../models/password_reset.js';
import CrisisAlert from '../models/crisis_alert.js';
import Session from '../models/session_model.js';
import AuditLog from '../models/audit_log.js';
import { sendClientInvitationEmail } from '../services/email.js';

function normalizeEmail(email) {
  return typeof email === 'string' ? email.trim().toLowerCase() : '';
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email);
}

export async function getAdminOverview(req, res, next) {
  try {
    const [clientCount, adminCount, pendingBookings, openCrisisAlerts] = await Promise.all([
      ClientUser.countDocuments(),
      AdminUser.countDocuments(),
      Session.countDocuments({ status: false }),
      CrisisAlert.countDocuments({ status: 'open' })
    ]);

    return res.json({ clientCount, adminCount, pendingBookings, openCrisisAlerts });
  } catch (error) {
    return next(error);
  }
}

export async function getClients(req, res, next) {
  try {
    const clients = await ClientUser.find()
      .select('email createdAt consentAt')
      .sort({ createdAt: -1 })
      .limit(500)
      .lean();
    return res.json({ clients });
  } catch (error) {
    return next(error);
  }
}

export async function inviteClient(req, res, next) {
  try {
    const email = normalizeEmail(req.body.email);
    if (!validEmail(email)) return res.status(400).json({ message: 'Enter a valid email address.' });
    if (await ClientUser.exists({ email })) {
      return res.status(409).json({ message: 'A client account with this email already exists.' });
    }

    const rawToken = randomBytes(32).toString('hex');
    const tokenHash = createHash('sha256').update(rawToken).digest('hex');
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);
    await ClientInvitation.findOneAndUpdate(
      { email },
      { email, tokenHash, expiresAt },
      { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
    );

    const appUrl = process.env.SOURCE_URL;
    if (!appUrl) {
      await ClientInvitation.deleteOne({ email, tokenHash });
      return res.status(503).json({ message: 'Client invitations are not configured on this server.' });
    }

    const invitationUrl = new URL('/reset-password', appUrl);
    invitationUrl.searchParams.set('invite', rawToken);
    try {
      await sendClientInvitationEmail({ to: email, url: invitationUrl.toString() });
    } catch (error) {
      await ClientInvitation.deleteOne({ email, tokenHash });
      console.error('Client invitation email delivery failed:', error.message);
      return res.status(503).json({ message: 'The invitation email could not be sent. Check the email service configuration and try again.' });
    }

    await AuditLog.create({
      actorId: req.auth.userId,
      actorRole: 'admin',
      action: 'client.invited',
      details: { email }
    });
    return res.status(201).json({ message: 'Client invitation sent.' });
  } catch (error) {
    return next(error);
  }
}

export async function deleteClient(req, res, next) {
  try {
    if (!/^[a-f\d]{24}$/iu.test(req.params.id)) {
      return res.status(400).json({ message: 'Invalid client account ID.' });
    }

    const client = await ClientUser.findByIdAndDelete(req.params.id).select('email');
    if (!client) return res.status(404).json({ message: 'Client account not found.' });

    await Promise.all([
      ClientInvitation.deleteOne({ email: client.email }),
      PasswordReset.deleteMany({ userId: client._id, userType: 'customer' })
    ]);
    await AuditLog.create({
      actorId: req.auth.userId,
      actorRole: 'admin',
      action: 'client.deleted',
      resourceId: client._id
    });
    return res.json({ message: 'Client account deleted. Associated wellness records were retained.' });
  } catch (error) {
    return next(error);
  }
}

export async function getCrisisAlerts(req, res, next) {
  try {
    const status = req.query.status || 'open';
    if (!['open', 'reviewed', 'resolved', 'all'].includes(status)) {
      return res.status(400).json({ message: 'Invalid crisis alert status filter.' });
    }

    const alerts = await CrisisAlert.find(status === 'all' ? {} : { status })
      .populate('userId', 'email')
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();
    return res.json({ alerts });
  } catch (error) {
    return next(error);
  }
}

export async function updateCrisisAlert(req, res, next) {
  try {
    const { status } = req.body;
    if (!['reviewed', 'resolved'].includes(status)) {
      return res.status(400).json({ message: 'Crisis alert status must be reviewed or resolved.' });
    }

    const alert = await CrisisAlert.findByIdAndUpdate(
      req.params.id,
      {
        status,
        reviewedBy: req.auth.userId,
        reviewedAt: new Date()
      },
      { new: true, runValidators: true }
    );
    if (!alert) return res.status(404).json({ message: 'Crisis alert not found.' });

    await AuditLog.create({
      actorId: req.auth.userId,
      actorRole: 'admin',
      action: `crisis_alert.${status}`,
      resourceId: alert._id
    });
    return res.json({ alert });
  } catch (error) {
    return next(error);
  }
}

export async function getAuditLog(req, res, next) {
  try {
    const logs = await AuditLog.find()
      .populate('actorId', 'email')
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();
    return res.json({ logs });
  } catch (error) {
    return next(error);
  }
}
