import express from 'express';
import { registerSession, getSessionDetails, deleteSession, bookSession} from '../controllers/session_controller.js';

const router=express.Router();

router.post('/register', registerSession);
router.put('/book', bookSession);

router.get('/details', getSessionDetails);

router.delete('/:id', deleteSession);

export default router;