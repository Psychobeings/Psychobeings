import express from 'express';
import dotenv from 'dotenv';

import sessionRoute from './routes/sessionRoute.js';
import {Connection} from './config/connection.js';

const app= express();

app.use(express.urlencoded({extended: false}));

dotenv.config();
Connection();

app.use('/session-form', sessionRoute);

app.listen(8080, ()=>{
    console.log("Server started!");
})