
import User from '../models/User';
// import { hash } from "bcryptjs";

// Get all users
export const getUsers = async () => {
  return await User.find({});
};


// Create a new user
export const createUser = async (data) => {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    return { status: 400, message: 'Please provide all fields' };
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { status: 409, message: 'User already exists' };
    }

    // const newUser = await User.create({ name, email, password });
    const newUser = new User({ name, email, password });

    const savedUser = await newUser.save();

    return { status: 201, success: true, data: savedUser, message: 'User created successfully' };
  } catch (error) {
    return { status: 500, message: 'Internal server error', error: error.message };
  }
};




// Update a user
export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Delete a user
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
