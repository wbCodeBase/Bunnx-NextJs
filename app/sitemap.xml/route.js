import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://bunnx.com"

  // Create XML content for sitemap index
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">


  <sitemap>
    <loc>${baseUrl}/services/sitemap.xml</loc>
    <lastmod>2024-12-16T10:54:12.713Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </sitemap>



</sitemapindex>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

