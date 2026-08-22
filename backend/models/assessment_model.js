import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  primary_concern: { type: String, required: true, trim: true },
  preferred_format: { type: String, required: true, trim: true },
  urgency: { type: String, required: true, trim: true },
  status: { type: String, enum: ['new', 'reviewed'], default: 'new' },
}, { timestamps: true });

const Assessment = mongoose.model('Assessment', assessmentSchema);
export default Assessment;
