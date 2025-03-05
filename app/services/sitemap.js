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
        url: "https://bunnx.com/",
        changeFrequency: 'yearly',
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 1,
      }, // Home link
      {
        url: "https://bunnx.com/contact-us",
        changeFrequency: 'yearly',
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.6,
      },
      {
        url: "https://bunnx.com/about-us",
        changeFrequency: 'yearly',
        lastModified: "2025-01-27T09:45:58.558Z",
        priority: 0.6,
      },
    ];

    // Map slugs to sitemap format
    const serviceLinks = serviceSlugsOnly.map((item) => ({
      url: `https://bunnx.com/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

    return [...sitemapLinks, ...serviceLinks];
  } catch (error) {
    console.error("Error fetching slugs for sitemap:", error);
    return [];
  }
}


//     // Map slugs to sitemap format
//     return activeSlugData.map((item) => ({
//       url: `https://bunnx.com/${item.slug}`,
//       lastModified: item.updatedAt,
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     }));

//   } catch (error) {
//     console.error("Error fetching slugs for sitemap:", error);
//     return [];
//   }
// }
