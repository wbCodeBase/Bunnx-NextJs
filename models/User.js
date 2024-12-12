import mongoose from 'mongoose';
import { hash } from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: { type: String, select: false },
    googleId: { type: String },
    // isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await hash(this.password, 12);
    next();
  } catch (err) {
    next(err);
  }
});

// Optional: Hash password during updates
UserSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    try {
      update.password = await hash(update.password, 12);
    } catch (err) {
      return next(err);
    }
  }
  next();
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
