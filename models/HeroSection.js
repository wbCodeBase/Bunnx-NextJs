const mongoose = require('mongoose');

const HeroSectionSchema = new mongoose.Schema({
  titlePrefix: {
    type: String,
    required: true
  },
  title: {
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
  ctaRedirectUrl: {
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



export default mongoose.models.HeroSection || mongoose.model('HeroSection', HeroSectionSchema);