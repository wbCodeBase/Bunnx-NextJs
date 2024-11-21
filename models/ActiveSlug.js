// models/User.js
import mongoose from 'mongoose';


const ActiveSlugSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true }, // Slug value
  label: { type: String, required: true }, // Slug label
  isActive: { type: Boolean, default: true }, // Whether the slug is active
});


export default mongoose.model('ActiveSlug', ActiveSlugSchema)