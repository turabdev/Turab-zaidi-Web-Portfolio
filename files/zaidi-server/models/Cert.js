const mongoose = require('mongoose');

const certSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  org: {
    type: String,
    required: true,
    trim: true
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  status: {
    type: String,
    default: 'planned',
    enum: ['planned', 'in-progress', 'completed', 'expired']
  },
  credential_url: {
    type: String,
    default: '',
    trim: true
  },
  date: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for status and creation date
certSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Cert', certSchema);