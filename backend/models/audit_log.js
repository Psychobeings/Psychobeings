import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
  actorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  actorRole: {
    type: String,
    enum: ['admin'],
    required: true
  },
  action: {
    type: String,
    required: true,
    maxlength: 100
  },
  resourceId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  details: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, { timestamps: true });

const AuditLog = mongoose.models.AuditLog || mongoose.model('AuditLog', auditLogSchema);

export default AuditLog;
