import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {SendMessage} from './controllers/Email.js'
import sessionRoute from './routes/sessionRoute.js';
import admin_user from './routes/admin_user.js';
import emailRoute from './routes/EmailRouter.js';
import inboxRoute from './routes/inboxRoute.js';
import {Connection} from './config/connection.js';
import User from './models/admin_users.js';

const app= express();

app.use(express.urlencoded({extended: false}));
app.use(express.json())

dotenv.config();
Connection();

if (process.env.ADMIN_OTP_EMAIL && process.env.ADMIN_OTP_PHONE) {
  User.findOneAndUpdate(
    { email: process.env.ADMIN_OTP_EMAIL },
    { phone: process.env.ADMIN_OTP_PHONE }
  ).catch((error) => console.log('Could not link admin OTP phone:', error.message));
}

app.use(cors());

// console.log(process.env.SOURCE_URL)

const corsOptions = {
  origin: [process.env.SOURCE_URL , process.env.ADMIN_URL], 
};


// Use configured CORS options
app.get('/', (req, res)=>{
  res.send("Ping from the server !")
})

app.use(cors(corsOptions));

app.use('/admin', admin_user);
app.use('/session-form', sessionRoute);
app.use('/email', emailRoute);
app.use('/admin-inbox', inboxRoute);


app.listen(8080, ()=>{
    console.log("Server started!");
})