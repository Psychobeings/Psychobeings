import mongoose from 'mongoose';

const clientUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    enum: ['customer'],
    default: 'customer',
    immutable: true
  },
  consentAt: {
    type: Date,
    required: true
  },
  consentVersion: {
    type: String,
    required: true
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
  }
}, { timestamps: true });

const ClientUser = mongoose.models.ClientUser || mongoose.model('ClientUser', clientUserSchema);

export default ClientUser;
