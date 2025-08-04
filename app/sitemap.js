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
        lastModified: "2025-01-27T09:45:58+00:00",
      },
      {
        url: "https://www.bunnx.com/contact-us",
        lastModified: "2025-01-27T09:45:58+00:00",
      },
      {
        url: "https://www.bunnx.com/about-us",
        lastModified: "2025-01-27T09:45:58+00:00",
      },
    ];

    // Map slugs to sitemap format
    // const serviceLinks = serviceSlugsOnly.map((item) => ({
    //   url: `https://www.bunnx.com/${item.slug}`,
    //   lastModified: item.updatedAt,
    // }));


    const serviceLinks = serviceSlugsOnly.map((item) => {
      const updatedAt = new Date(item?.updatedAt); // Ensure it's a Date object
      const lastModified = updatedAt.toISOString().split('.')[0] + '+00:00';

      return {
        url: `https://www.bunnx.com/${item.slug}`,
        lastModified,
      };
    });



    return [...sitemapLinks, ...serviceLinks];
  } catch (error) {
    console.error("Error fetching slugs for sitemap:", error);
    return [];
  }
}

