import express from 'express';
import {
  clientSignup,
  acceptClientInvitation,
  clientSignin,
  clientLogout,
  clientForgotPassword,
  clientResetPassword,
  currentSession
} from '../controllers/auth_controller.js';
import { requireRole } from '../middleware/auth.js';
import { rateLimit } from '../middleware/rate_limit.js';
import { sendChatMessage } from '../controllers/chat_controller.js';
import {
  completeClientOnboarding,
  createMoodEntry,
  getMoodEntries
} from '../controllers/client_data_controller.js';

const router = express.Router();
const authRateLimit = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, keyPrefix: 'client-auth' });
const chatRateLimit = rateLimit({ windowMs: 60 * 1000, max: 20, keyPrefix: 'client-chat' });

router.post('/client/signup', authRateLimit, clientSignup);
router.post('/client/invitation/accept', authRateLimit, acceptClientInvitation);
router.post('/client/signin', authRateLimit, clientSignin);
router.post('/client/password/forgot', authRateLimit, clientForgotPassword);
router.post('/client/password/reset', authRateLimit, clientResetPassword);
router.post('/client/logout', requireRole('customer'), clientLogout);
router.get('/client/session', requireRole('customer'), currentSession);
router.put('/client/onboarding', requireRole('customer'), completeClientOnboarding);

router.post('/chat', requireRole('customer'), chatRateLimit, sendChatMessage);
router.get('/mood', requireRole('customer'), getMoodEntries);
router.post('/mood', requireRole('customer'), createMoodEntry);

export default router;
