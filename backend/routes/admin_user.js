import {Signin, Signup, Reset} from '../controllers/admin_users.js'
import {Verify, Send, SendMobile, VerifyMobile} from '../controllers/admin_email.js'
import express from 'express';

const router = express.Router();




router.post('/signup', Signup);
router.post('/signin', Signin);
router.post('/reset-password', Reset)

router.post('/email/verify', Verify)
router.post('/email/send', Send)
router.post('/mobile/send', SendMobile)
router.post('/mobile/verify', VerifyMobile)


export default router;