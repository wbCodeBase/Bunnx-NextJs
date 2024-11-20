
import HeaderMenu from '../models/HeaderMenu';

// Get all users
export const getHeaderMenu = async () => {

  try {
    const headerMenu = await HeaderMenu.find({});
    return headerMenu;
  } catch (error) {
    console.error('Error fetching header content:', error.message);
    throw new Error('Unable to fetch header content');
  }
  
};

// Create a new user
// export const createUser = async (data) => {
//   const user = new User(data);
//   return await user.save();
// };

// // Update a user
// export const updateUser = async (id, data) => {
//   return await User.findByIdAndUpdate(id, data, { new: true });
// };

// // Delete a user
// export const deleteUser = async (id) => {
//   return await User.findByIdAndDelete(id);
// };
