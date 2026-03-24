import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = "https://www.goeffortless.ai";

  // Static pages
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/sales", priority: "0.9", changefreq: "monthly" },
    { url: "/expenses", priority: "0.9", changefreq: "monthly" },
    { url: "/contracts", priority: "0.9", changefreq: "monthly" },
    { url: "/pricing", priority: "0.9", changefreq: "monthly" },
    { url: "/pricing-plan", priority: "0.8", changefreq: "monthly" },
    { url: "/about-us", priority: "0.7", changefreq: "monthly" },
    { url: "/blogs", priority: "0.8", changefreq: "daily" },
    { url: "/case-studies", priority: "0.8", changefreq: "monthly" },
    { url: "/faqs", priority: "0.7", changefreq: "monthly" },
    { url: "/compliance", priority: "0.7", changefreq: "monthly" },
    { url: "/partners", priority: "0.6", changefreq: "monthly" },
    { url: "/contact-us", priority: "0.6", changefreq: "monthly" },
    { url: "/download-apps", priority: "0.5", changefreq: "monthly" },
    { url: "/certifications-awards", priority: "0.5", changefreq: "monthly" },
    { url: "/allFeatures", priority: "0.8", changefreq: "monthly" },
    { url: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
    { url: "/terms-of-service", priority: "0.5", changefreq: "yearly" },
    { url: "/security-practices", priority: "0.5", changefreq: "yearly" },
  ];

  // Fetch blog slugs dynamically
  let blogPages: { url: string; priority: string; changefreq: string }[] = [];
  try {
    const blogRes = await fetch(
      "https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs"
    );
    if (blogRes.ok) {
      const data = await blogRes.json();
      blogPages = (data.blogs || []).map(
        (blog: { slug: string; publishedAt?: string }) => ({
          url: `/blogs/${blog.slug}`,
          priority: "0.7",
          changefreq: "monthly",
          lastmod: blog.publishedAt
            ? new Date(blog.publishedAt.split("-").reverse().join("-"))
                .toISOString()
                .split("T")[0]
            : undefined,
        })
      );
    }
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err);
  }

  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page: any) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${
      page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).send(sitemap);
}
