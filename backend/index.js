import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import sessionRoute from './routes/sessionRoute.js';
import {Connection} from './config/connection.js';

const app= express();

app.use(express.urlencoded({extended: false}));
app.use(express.json())

dotenv.config();
Connection();

app.use(cors());


const corsOptions = {
  origin: process.env.SOURCE_URL, 
};

// Use configured CORS options
app.use(cors(corsOptions));

app.use('/session-form', sessionRoute);

app.listen(8080, ()=>{
    console.log("Server started!");
})