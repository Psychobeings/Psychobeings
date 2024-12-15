import express from 'express'
const route = express.Router();
import {SendMessage } from '../controllers/Email.js';


route.post('/sendmessage', SendMessage);

export default route;