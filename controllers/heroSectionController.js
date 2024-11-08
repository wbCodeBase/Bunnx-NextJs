
import HeroSection from '../models/HeroSection';

// Get all users
export const getHeroSectionContent = async () => {
  return await HeroSection.find({});
};


// Get all users
export const getHeroSectionContentByStr = async (data) => {
  const heroSectionContent = await HeroSection.findOne({ primaryKey: data });
  console.log("heroSectionContent", heroSectionContent)
  return heroSectionContent
};



// Create a new HeroSection
// export const createHeroSectionContent = async (data) => {
//   const heroSection = new HeroSection(data);
//   return await heroSection.save();
// };

// Backend controller function
export const createHeroSectionContent = async (data) => {
  try {
    const heroSection = new HeroSection(data);
    const savedData = await heroSection.save();
    return { success: true, data: savedData }; // Return success response with data
  } catch (error) {
    console.error("Error saving hero section:", error);
    return { success: false, error: error.message || "An error occurred while saving the hero section content" };
  }
};




// Update a HeroSection
export const updateHeroSectionContent = async (id, data) => {
  return await HeroSection.findByIdAndUpdate(id, data, { new: true });
};

// Delete a HeroSection
export const deleteHeroSectionContent = async (id) => {
  return await HeroSection.findByIdAndDelete(id);
};
