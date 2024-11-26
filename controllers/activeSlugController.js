
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


export const deleteActiveSlug = async ({ id }) => {
  try {

    const activeSlug = await ActiveSlug.findByIdAndDelete(id);
    if (!activeSlug) {
      throw new Error("Slug not found");
    }

    return { success: true, data: activeSlug };
  } catch (error) {
    console.error("Error deleting component content:", error.message);
    throw new Error(error.message || "Failed to delete the component content");
  }
};



export const updateActiveSlug = async ({ id, slugData }) => {
  try {

    const activeSlug = await ActiveSlug.findByIdAndUpdate(
      id,
      slugData,
      { new: true, runValidators: true } // Enable schema validation
    );

    if (!activeSlug) {
      throw new Error("Slug not found");
    }
    return { success: true, data: activeSlug }; // Return the updated template
  } catch (error) {
    console.error("Error updating slug:", error.message);
    throw new Error(error.message || "Failed to update slug");
  }
};




// export const updateActiveSlug = async (data) => {
//   const { id, slugData } = data
//   console.log(id, slugData);
//   return 0;
// }

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
