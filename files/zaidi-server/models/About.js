const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    trim: true
  },
  nickname: {
    type: String,
    default: '',
    trim: true
  },
  title: {
    type: String,
    default: '',
    trim: true
  },
  bio: {
    type: String,
    default: '',
    trim: true
  },
  location: {
    type: String,
    default: '',
    trim: true
  },
  university: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  github: {
    type: String,
    default: '',
    trim: true
  },
  linkedin: {
    type: String,
    default: '',
    trim: true
  },
  htb: {
    type: String,
    default: '',
    trim: true
  },
  twitter: {
    type: String,
    default: '',
    trim: true
  },
  cv_url: {
    type: String,
    default: '',
    trim: true
  },
  avatar: {
    type: String,
    default: '',
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('About', aboutSchema);