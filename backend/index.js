import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import sessionRoute from './routes/sessionRoute.js';
import admin_user from './routes/admin_user.js';
import emailRoute from './routes/EmailRouter.js';
import {Connection} from './config/connection.js';

const app= express();

app.use(express.urlencoded({extended: false}));
app.use(express.json())

dotenv.config();
Connection();

app.use(cors());


const corsOptions = {
  origin: [process.env.SOURCE_URL , process.env.ADMIN_URL], 
};

// Use configured CORS options
app.use(cors(corsOptions));

app.use('/admin', admin_user);
app.use('/session-form', sessionRoute);
app.use('/email', emailRoute);

app.listen(8080, ()=>{
    console.log("Server started!");
})