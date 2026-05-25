import { HomePageContent } from '@/components/HomePage';
import { organizationSchema, localBusinessSchema, breadcrumbSchema, businessServiceSchema } from '@/lib/schemas';
import { APP_URL } from '@/lib/constants';

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
