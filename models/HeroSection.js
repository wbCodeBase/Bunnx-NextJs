const mongoose = require('mongoose');

const heroSectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  linkUrl: {
    type: String,
    required: true
  },
  primaryKey: {
    type: String,
    required: true,
    unique: true  // Ensure the slug is unique to prevent duplicates
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const HeroSection = mongoose.model('HeroSection', heroSectionSchema);

module.exports = HeroSection;
