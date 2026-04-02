const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    default: 'Other',
    trim: true
  },
  level: {
    type: Number,
    default: 50,
    min: 0,
    max: 100
  },
  icon: {
    type: String,
    default: '',
    trim: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for ordering
skillSchema.index({ order: 1 });

module.exports = mongoose.model('Skill', skillSchema);