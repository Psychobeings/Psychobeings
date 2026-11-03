import AdminUser from '../models/admin_users.js';
import ClientUser from '../models/client_user.js';
import CrisisAlert from '../models/crisis_alert.js';
import Session from '../models/session_model.js';
import AuditLog from '../models/audit_log.js';

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
