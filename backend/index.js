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
  origin: [process.env.SOURCE_URL, process.env.ADMIN_URL].filter(Boolean),
};

app.get('/', (req, res) => {
  res.send('Ping from the server!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, service: 'psychobeings-backend' });
});

app.use(cors(corsOptions));

app.use('/admin', admin_user);
app.use('/session-form', sessionRoute);
app.use('/email', emailRoute);

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});