import {Signin, Signup, Reset} from '../controllers/admin_users.js'
import {Verify, Send} from '../controllers/admin_email.js'
import express from 'express';

const router = express.Router();




router.post('/signup', Signup);
router.post('/signin', Signin);
router.post('/reset-password', Reset)

router.post('/email/verify', Verify)
router.post('/email/send', Send)


export default router;