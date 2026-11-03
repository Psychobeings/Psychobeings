import mongoose from 'mongoose';

const passwordResetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userType: {
    type: String,
    enum: ['admin', 'customer'],
    required: true
  },
  tokenHash: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true,
    expires: 0
  }
}, { timestamps: true });

passwordResetSchema.index({ userId: 1, userType: 1 });

const PasswordReset = mongoose.models.PasswordReset || mongoose.model('PasswordReset', passwordResetSchema);

export default PasswordReset;
