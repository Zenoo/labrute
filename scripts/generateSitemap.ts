import fs from 'fs';
import path from 'path';

const routes = {
  '/': { prio: 0.9, changefreq: 'monthly' },
  '/patch-notes': { prio: 0.8, changefreq: 'monthly' },
  '/wiki': { prio: 0.7, changefreq: 'monthly' },
};

// Generate sitemap
const baseUrl = 'https://mybrute.eternaltwin.org';
const now = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.entries(routes).map(([route, { prio, changefreq }]) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <priority>${prio}</priority>
    <changefreq>${changefreq}</changefreq>
    <lastmod>${now}</lastmod>
  </url>`).join('')}
</urlset>`;

const sitemapPath = path.join(__dirname, '../client/public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('Sitemap generated at', sitemapPath);
