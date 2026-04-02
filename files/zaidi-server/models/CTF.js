const mongoose = require('mongoose');

const ctfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    default: 'HTB',
    trim: true
  },
  os: {
    type: String,
    default: 'Linux',
    trim: true
  },
  difficulty: {
    type: String,
    default: 'easy',
    enum: ['easy', 'medium', 'hard', 'insane']
  },
  tags: {
    type: String,
    default: '',
    trim: true
  },
  writeup: {
    type: String,
    default: '',
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  points: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for platform and date
ctfSchema.index({ platform: 1, date: -1 });

module.exports = mongoose.model('CTF', ctfSchema);