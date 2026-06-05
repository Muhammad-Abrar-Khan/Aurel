import type { Metadata } from 'next';
import { HomePageContent } from '@/components/HomePage';
import { organizationSchema, localBusinessSchema, breadcrumbSchema, businessServiceSchema } from '@/lib/schemas';
import { APP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Aurel Leather | Corporate Leather Manufacturing Pakistan',
  description:
    'Pakistan\'s premier factory-direct leather manufacturer in Karachi. Executive wallets, leather notebooks, corporate gift sets and branded packaging. MOQ from 50 units, 7–14 day production, delivered nationwide.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aurel Leather | Corporate Leather Manufacturing Pakistan',
    description:
      'Factory-direct leather corporate gifts from Karachi. Executive wallets, notebooks, gift sets — custom branding, 50-unit MOQ, 7–14 day production.',
    url: APP_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageContent />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              organizationSchema(APP_URL),
              localBusinessSchema(APP_URL),
              businessServiceSchema(APP_URL),
              breadcrumbSchema([
                { name: 'Home', url: APP_URL },
                { name: 'Collections', url: `${APP_URL}/products` },
              ])
            ]
          })
        }}
      />
    </>
  );
}
