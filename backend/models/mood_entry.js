import mongoose from 'mongoose';

export const MOOD_FEELINGS = [
  'Calm',
  'Grateful',
  'Hopeful',
  'Tired',
  'Anxious',
  'Stressed',
  'Lonely',
  'Sad',
  'Angry',
  'Motivated',
  'Overwhelmed',
  'Content'
];

const moodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ClientUser',
    index: true
  },
  date: {
    type: String,
    match: /^\d{4}-\d{2}-\d{2}$/u
  },
  mood: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  feelings: {
    type: [{ type: String, enum: MOOD_FEELINGS }],
    default: []
  },
  note: {
    type: String,
    trim: true,
    maxlength: 2000,
    default: ''
  }
}, { timestamps: true });

const MoodEntry = mongoose.models.MoodEntry || mongoose.model('MoodEntry', moodEntrySchema);

MoodEntry.schema.index(
  { userId: 1, date: 1 },
  { unique: true, partialFilterExpression: { date: { $type: 'string' } } }
);

export default MoodEntry;
