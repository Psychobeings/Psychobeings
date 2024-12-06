import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import sessionRoute from './routes/sessionRoute.js';
import EmailRouter from './routes/EmailRouter.js';
import {Connection} from './config/connection.js';

const app= express();
// Enable CORS
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json())

dotenv.config();
Connection();
// app.use('/',(req, res, next)=>{
//     res.send("this is from server side")
//     next()
// })
app.use('/session-form', sessionRoute);
app.use('/api/email', EmailRouter)

app.listen(8080, ()=>{
    console.log("Server started!");
})