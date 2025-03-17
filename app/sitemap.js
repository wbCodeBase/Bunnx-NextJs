export default async function sitemap() {
    try {
      // Fetch slugs dynamically
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/activeSlug`);
      const activeSlugData = await response.json();
  
  
      // Check if data exists and is an array
      if (!Array.isArray(activeSlugData)) {
        throw new Error("Invalid slug data");
      }
  
      const serviceSlugsOnly = activeSlugData.filter((item) => item?.slugOf === "service");
  
  
      // Base sitemap links
      const sitemapLinks = [
        {
          url: "https://www.bunnx.com",
          changeFrequency: 'weekly',
          lastModified: "2025-01-27T09:45:58.558Z",
          priority: 1,
        }, // Home link
        {
          url: "https://www.bunnx.com/contact-us",
          changeFrequency: 'weekly',
          lastModified: "2025-01-27T09:45:58.558Z",
          priority: 0.8,
        },
        {
          url: "https://www.bunnx.com/about-us",
          changeFrequency: 'weekly',
          lastModified: "2025-01-27T09:45:58.558Z",
          priority: 0.8,
        },
      ];
  
      // Map slugs to sitemap format
      const serviceLinks = serviceSlugsOnly.map((item) => ({
        url: `https://www.bunnx.com/${item.slug}`,
        lastModified: item.updatedAt,
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
  
      return [...sitemapLinks, ...serviceLinks];
    } catch (error) {
      console.error("Error fetching slugs for sitemap:", error);
      return [];
    }
  }
  
  