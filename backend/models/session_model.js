import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
    enum: ['morning', 'evening'],
  },
  concern: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;
