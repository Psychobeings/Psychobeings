import express from 'express';
import { registerSession, getSessionDetails, deleteSession, bookSession} from '../controllers/session_controller.js';
import { requireRole } from '../middleware/auth.js';

const router=express.Router();

router.post('/register', registerSession);
router.put('/book', requireRole('admin'), bookSession);
router.get('/details', requireRole('admin'), getSessionDetails);
router.post('/delete', requireRole('admin'), deleteSession);

export default router;