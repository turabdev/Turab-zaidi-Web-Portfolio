const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  category: {
    type: String,
    default: 'Dev',
    trim: true
  },
  excerpt: {
    type: String,
    default: '',
    trim: true
  },
  body: {
    type: String,
    default: '',
    trim: true
  },
  tags: {
    type: String,
    default: '',
    trim: true
  },
  status: {
    type: String,
    default: 'draft',
    enum: ['draft', 'published', 'archived']
  },
  date: {
    type: Date,
    default: Date.now
  },
  read_time: {
    type: Number,
    default: 5,
    min: 1
  }
}, {
  timestamps: true
});

// Index for slug and status
blogSchema.index({ slug: 1 });
blogSchema.index({ status: 1, date: -1 });

// Pre-save middleware to generate slug from title
blogSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

module.exports = mongoose.model('Blog', blogSchema);