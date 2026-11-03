import express from 'express';
import {
  adminSignup,
  adminSignin,
  adminLogout,
  adminForgotPassword,
  adminResetPassword,
  currentSession
} from '../controllers/auth_controller.js';
import { requireRole } from '../middleware/auth.js';
import { rateLimit } from '../middleware/rate_limit.js';
import {
  getAdminOverview,
  getClients,
  getCrisisAlerts,
  updateCrisisAlert,
  getAuditLog
} from '../controllers/admin_controller.js';

const router = express.Router();
const authRateLimit = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, keyPrefix: 'admin-auth' });

router.post('/signup', authRateLimit, adminSignup);
router.post('/signin', authRateLimit, adminSignin);
router.post('/password/forgot', authRateLimit, adminForgotPassword);
router.post('/password/reset', authRateLimit, adminResetPassword);

router.post('/logout', requireRole('admin'), adminLogout);
router.get('/session', requireRole('admin'), currentSession);

router.use(requireRole('admin'));
router.get('/overview', getAdminOverview);
router.get('/users', getClients);
router.get('/crisis-alerts', getCrisisAlerts);
router.patch('/crisis-alerts/:id', updateCrisisAlert);
router.get('/audit-log', getAuditLog);

export default router;