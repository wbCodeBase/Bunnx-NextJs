
import HeroSection from '../models/HeroSection';

// Get all users
export const getHeroSectionContent = async () => {
  return await HeroSection.find({});
};

// Create a new HeroSection
export const createHeroSectionContent = async (data) => {
  const heroSection = new HeroSection(data);
  return await heroSection.save();
};

// Update a HeroSection
export const updateHeroSectionContent = async (id, data) => {
  return await HeroSection.findByIdAndUpdate(id, data, { new: true });
};

// Delete a HeroSection
export const deleteHeroSectionContent = async (id) => {
  return await HeroSection.findByIdAndDelete(id);
};
