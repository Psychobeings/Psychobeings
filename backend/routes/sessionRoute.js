import express from 'express';
import { registerSession, getSessionDetails, deleteSession } from '../controllers/session_controller.js';

const router=express.Router();

router.post('/register', registerSession);

router.get('/details', getSessionDetails);

router.delete('delete', deleteSession);

export default router;