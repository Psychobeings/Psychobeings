import express from 'express';
import { createAssessment, listAssessments, listContacts } from '../controllers/admin_inbox.js';

const route = express.Router();
route.get('/contacts', listContacts);
route.get('/assessments', listAssessments);
route.post('/assessments', createAssessment);

export default route;
