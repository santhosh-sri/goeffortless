import type { NextApiRequest, NextApiResponse } from 'next';

const escapeXml = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

type SitemapPage = {
  url: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://goeffortless.vercel.app';

  const staticPages: SitemapPage[] = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/sales', priority: '0.9', changefreq: 'monthly' },
    { url: '/expenses', priority: '0.9', changefreq: 'monthly' },
    { url: '/contracts', priority: '0.9', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.9', changefreq: 'monthly' },
    { url: '/pricing-plan', priority: '0.8', changefreq: 'monthly' },
    { url: '/about-us', priority: '0.7', changefreq: 'monthly' },
    { url: '/blogs', priority: '0.8', changefreq: 'daily' },
    { url: '/case-studies', priority: '0.8', changefreq: 'monthly' },
    { url: '/faqs', priority: '0.7', changefreq: 'monthly' },
    { url: '/compliance', priority: '0.7', changefreq: 'monthly' },
    { url: '/partners', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact-us', priority: '0.6', changefreq: 'monthly' },
    { url: '/download-apps', priority: '0.5', changefreq: 'monthly' },
    { url: '/certifications-awards', priority: '0.5', changefreq: 'monthly' },
    { url: '/allFeatures', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-of-service', priority: '0.5', changefreq: 'yearly' },
    { url: '/security-practices', priority: '0.5', changefreq: 'yearly' },
  ];

  let blogPages: SitemapPage[] = [];
  try {
    const blogRes = await fetch(
      'https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs'
    );
    if (blogRes.ok) {
      const data = await blogRes.json();
      blogPages = (data.blogs || []).map((blog: { slug: string; publishedAt?: string }): SitemapPage => {
        let lastmod: string | undefined;
        if (blog.publishedAt) {
          try {
            const parts = blog.publishedAt.split('-');
            const date =
              parts[0].length === 4
                ? new Date(blog.publishedAt)
                : new Date(parts.reverse().join('-'));
            lastmod = isNaN(date.getTime()) ? undefined : date.toISOString().split('T')[0];
          } catch {
            lastmod = undefined;
          }
        }
        return {
          url: `/blogs/${blog.slug.trim()}`,
          priority: '0.7',
          changefreq: 'monthly',
          lastmod,
        };
      });
    }
  } catch (err) {
    console.error('Failed to fetch blogs for sitemap:', err);
  }

  const allPages: SitemapPage[] = [...staticPages, ...blogPages];

  const urlEntries = allPages
    .map((page) => {
      const loc = escapeXml(`${baseUrl}${page.url}`);
      return `  <url>
    <loc>${loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${
      page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''
    }
  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(200).send(sitemap);
}