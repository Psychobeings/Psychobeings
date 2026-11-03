import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin',
    immutable: true
  },
  twoFactorSecret: {
    type: String,
    default: null,
    select: false
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  failedLoginAttempts: {
    type: Number,
    default: 0,
    select: false
  },
  lockedUntil: {
    type: Date,
    default: null,
    select: false
  },
  tokenVersion: {
    type: Number,
    default: 0,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;