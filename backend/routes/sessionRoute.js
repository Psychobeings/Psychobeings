import express from 'express';
import { registerSession } from '../controllers/session_controller.js';

const router=express.Router();

router.post('/register', registerSession);

export default router;