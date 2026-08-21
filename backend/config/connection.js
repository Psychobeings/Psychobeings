import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const buildMongoUri = () => {
  if (process.env.MONGO_URI) {
    return process.env.MONGO_URI;
  }

  if (process.env.DB_USER && process.env.DB_PASSWORD) {
    return `mongodb+srv://support:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_USER}.h2llo.mongodb.net/?appName=Psychobeings`;
  }

  return 'mongodb+srv://support:<db_password>@psychobeings.h2llo.mongodb.net/?appName=Psychobeings';
};

export const Connection = () => {
  const mongoUri = buildMongoUri();

  console.log(
    mongoUri.includes('<db_password>')
      ? 'Mongo DB URI is missing the real password. Add MONGO_URI in backend/.env.'
      : 'Connecting to MongoDB...'
  );

  mongoose.connect(mongoUri);

  mongoose.connection.on('connected', () => {
    console.log('Database connected');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error occured! ', err);
  });
};