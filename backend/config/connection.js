import mongoose from 'mongoose';

export async function Connection() {
  let uri = process.env.MONGODB_URI;
  if (!uri) {
    const cluster = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    if (!cluster || !password) {
      throw new Error('Set MONGODB_URI or both DB_USER and DB_PASSWORD before starting the backend.');
    }
    uri = `mongodb+srv://support:${encodeURIComponent(password)}@${cluster}.h2llo.mongodb.net/?retryWrites=true&w=majority&appName=Psychobeings`;
  }

  await mongoose.connect(uri);
  console.log('Database connected');

  mongoose.connection.on('disconnected', () => {
    console.warn('Database disconnected');
  });
  mongoose.connection.on('error', (error) => {
    console.error('Database connection error:', error.message);
  });
}