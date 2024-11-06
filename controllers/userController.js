// controllers/userController.js
import User from '../models/User';

// Get all users
export const getUsers = async () => {
  return await User.find({});
};

// Create a new user
export const createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

// Update a user
export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Delete a user
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
