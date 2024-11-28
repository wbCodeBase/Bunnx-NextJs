// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false },
  googleId: { type: String },
  // isVerified: { type: Boolean, default: false }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

