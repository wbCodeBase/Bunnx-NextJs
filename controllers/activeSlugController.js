
import ActiveSlug from '../models/ActiveSlug';

// Get all users
export const getActiveSlug = async () => {

  try {
    const activeSlug = await ActiveSlug.find({});

    // console.log("activeSlug", activeSlug);

    return activeSlug;

  } catch (error) {
    console.error('Error fetching header content:', error.message);
    throw new Error('Unable to fetch header content');
  }

};



// Create active slug
export const createActiveSlug = async (data) => {

  try {

    const activeSlug = new ActiveSlug(data);
    console.log("activeSlug", createActiveSlug);

    await activeSlug.save();

    return { success: true, data: activeSlug }; // Return the updated template
  } catch (error) {
    console.error("Error saving active slug content:", error);
    throw new Error(error.message || "Failed to save the active slug content");
  }
};



// export const deleteActiveSlug = async (data) => {
//   console.log(data);
//   return 0;
// }




export const deleteActiveSlug = async ({ id }) => {
  try {

    await ActiveSlug.findByIdAndDelete(id);

    return { success: true };
  } catch (error) {
    console.error("Error deleting component content:", error.message);
    throw new Error(error.message || "Failed to delete the component content");
  }
};





// Create active slugs in bulk
// export const createActiveSlug = async (data) => {
//   try {
//     // Use insertMany for bulk insert
//     const activeSlugs = await ActiveSlug.insertMany(data, { ordered: true });
//     console.log("Saved active slugs:", activeSlugs);

//     return { success: true, data: activeSlugs };
//   } catch (error) {
//     console.error("Error saving active slugs:", error.message);
//     throw new Error(error.message || "Failed to save the active slugs.");
//   }
// };




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
