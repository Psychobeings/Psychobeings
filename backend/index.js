import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sessionRoute from './routes/sessionRoute.js';
import admin_user from './routes/admin_user.js';
import emailRoute from './routes/EmailRouter.js';
import authRoutes from './routes/auth_routes.js';
import {Connection} from './config/connection.js';
import { getAllowedOrigins } from './middleware/auth.js';

const app= express();

dotenv.config();

app.use(express.urlencoded({ extended: false, limit: '16kb' }));
app.use(express.json({ limit: '16kb' }));
app.use((req, res, next) => {
  const origin = req.get('origin');
  if (origin && !getAllowedOrigins().includes(origin)) {
    return res.status(403).json({ message: 'Request origin is not allowed.' });
  }
  return next();
});
app.use(cors({
  origin(origin, callback) {
    if (!origin || getAllowedOrigins().includes(origin)) return callback(null, true);
    return callback(new Error('Origin is not allowed by CORS.'));
  },
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Ping from the server!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, service: 'psychobeings-backend' });
});

app.use('/admin', admin_user);
app.use('/auth', authRoutes);
app.use('/session-form', sessionRoute);
app.use('/email', emailRoute);

app.use((error, req, res, next) => {
  console.error('Request failed:', error.message);
  if (res.headersSent) return next(error);
  return res.status(500).json({ message: 'The request could not be completed.' });
});

const PORT = Number(process.env.PORT) || 8080;

async function start() {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must contain at least 32 characters before starting the backend.');
  }
  await Connection();
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

start().catch((error) => {
  console.error('Backend startup failed:', error.message);
  process.exitCode = 1;
});