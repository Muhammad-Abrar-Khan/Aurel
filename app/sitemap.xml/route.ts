import { NextResponse } from 'next/server';
import { APP_URL } from '@/lib/constants';
import { getProductSlugs } from '@/lib/shop';

export const dynamic = 'force-static';

const staticUrls = [
  '/',
  '/products',
  '/about',
  '/contact',
  '/wallets',
  '/cardholders',
  '/corporate-gifting',
  '/customization',
];

const productUrls = getProductSlugs().map(({ slug }) => `/products/${slug}`);

const createUrlEntry = (url: string, priority: string, changefreq: string) => `  <url>
    <loc>${APP_URL}${url}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
  createUrlEntry('/', '1.0', 'weekly'),
  createUrlEntry('/products', '0.9', 'weekly'),
  ...staticUrls.filter((url) => url !== '/products').map((url) => createUrlEntry(url, '0.8', 'monthly')),
  ...productUrls.map((url) => createUrlEntry(url, '0.7', 'monthly')),
].join('\n')}
</urlset>`;

export function GET() {
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml;charset=UTF-8',
    },
  });
}
