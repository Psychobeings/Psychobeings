import express from 'express';
const route = express.Router();
import { SendMessage } from '../controllers/Email.js';
import {
  saveContactMessage,
  getContactMessages,
  updateContactMessageStatus,
} from '../controllers/contact_message_controller.js';

route.post('/sendmessage', SendMessage);
route.post('/messages', saveContactMessage);
route.get('/messages', getContactMessages);
route.patch('/messages/:id/status', updateContactMessageStatus);

export default route;