import mongoose from 'mongoose';

const clientInvitationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  tokenHash: {
    type: String,
    required: true,
    unique: true
  },
  expiresAt: {
    type: Date,
    required: true,
    expires: 0
  }
}, { timestamps: true });

const ClientInvitation = mongoose.models.ClientInvitation
  || mongoose.model('ClientInvitation', clientInvitationSchema);

export default ClientInvitation;
