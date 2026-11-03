import mongoose from 'mongoose';

const crisisAlertSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ClientUser',
    index: true
  },
  message: {
    type: String,
    required: true,
    maxlength: 4000
  },
  detectedSignals: {
    type: [String],
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'reviewed', 'resolved'],
    default: 'open',
    index: true
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  reviewedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

const CrisisAlert = mongoose.models.CrisisAlert || mongoose.model('CrisisAlert', crisisAlertSchema);

export default CrisisAlert;
