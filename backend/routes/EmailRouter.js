import express from 'express';
const route = express.Router();
import { SendMessage } from '../controllers/Email.js';
import {
  saveContactMessage,
  getContactMessages,
  updateContactMessageStatus,
} from '../controllers/contact_message_controller.js';
import { requireRole } from '../middleware/auth.js';

route.post('/sendmessage', SendMessage);
route.post('/messages', saveContactMessage);
route.get('/messages', requireRole('admin'), getContactMessages);
route.patch('/messages/:id/status', requireRole('admin'), updateContactMessageStatus);

export default route;