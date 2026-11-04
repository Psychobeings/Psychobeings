import mongoose from 'mongoose';

export const CLIENT_GOALS = [
  'Manage stress',
  'Ease anxiety',
  'Sleep better',
  'Lift my mood',
  'Build confidence',
  'Improve relationships',
  'Work-life balance',
  'Process grief'
];

export const CLIENT_PREFERENCES = [
  'Guided meditations',
  'Breathing exercises',
  'Journaling',
  'Articles',
  'Podcasts',
  'Talking to a therapist'
];

export const CLIENT_AGE_GROUPS = ['13-17', '18-24', '25-34', '35-44', '45-59', '60+'];

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
  displayName: {
    type: String,
    trim: true,
    maxlength: 60,
    default: ''
  },
  ageGroup: {
    type: String,
    enum: ['', ...CLIENT_AGE_GROUPS],
    default: ''
  },
  language: {
    type: String,
    enum: ['en', 'hi'],
    default: 'en'
  },
  goals: {
    type: [{ type: String, enum: CLIENT_GOALS }],
    default: []
  },
  preferences: {
    type: [{ type: String, enum: CLIENT_PREFERENCES }],
    default: []
  },
  onboarded: {
    type: Boolean,
    default: false
  },
  profileConsents: {
    privacyPolicyAccepted: { type: Boolean, default: false },
    dataStorageAcknowledged: { type: Boolean, default: false },
    aiAcknowledged: { type: Boolean, default: false }
  },
  onboardingConsentAt: {
    type: Date,
    default: null
  },
  onboardingConsentVersion: {
    type: String,
    default: ''
  },
  currentStreak: {
    type: Number,
    default: 0,
    min: 0
  },
  longestStreak: {
    type: Number,
    default: 0,
    min: 0
  },
  lastCheckInDate: {
    type: String,
    default: undefined
  },
  totalCheckIns: {
    type: Number,
    default: 0,
    min: 0
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
