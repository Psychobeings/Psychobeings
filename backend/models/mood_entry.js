import mongoose from 'mongoose';

const moodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ClientUser',
    index: true
  },
  mood: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  note: {
    type: String,
    trim: true,
    maxlength: 2000,
    default: ''
  }
}, { timestamps: true });

const MoodEntry = mongoose.models.MoodEntry || mongoose.model('MoodEntry', moodEntrySchema);

export default MoodEntry;
