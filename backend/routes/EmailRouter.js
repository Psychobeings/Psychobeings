import express from 'express';
const route = express.Router();
import { SendMessage } from '../controllers/Email.js';
import { saveContactMessage } from '../controllers/contact_message_controller.js';

route.post('/sendmessage', SendMessage);
route.post('/messages', saveContactMessage);

export default route;