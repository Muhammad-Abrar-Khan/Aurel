/**
 * JSON-LD Schema generators for SEO and AI discoverability
 */

export const organizationSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aurel Leather",
  "alternateName": "Aurel Leather Pakistan",
  "url": baseUrl,
  "logo": `${baseUrl}/assets/institutional-gifting-packaging.webp`,
  "description": "Premium leather corporate gifting manufacturer based in Karachi, Pakistan",
  "foundingDate": "2024",
  "foundingLocation": {
    "@type": "Place",
    "name": "Karachi, Pakistan"
  },
  "areaServed": ["PK", "GB", "US", "AE", "SA"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-332-3632052",
    "contactType": "Sales",
    "email": "info@aurel.pk",
    "areaServed": ["PK", "GB", "US", "AE", "SA"]
  },
  "sameAs": [
    "https://instagram.com/aurelpk"
  ]
});

export const localBusinessSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aurel Leather",
  "image": `${baseUrl}/assets/institutional-gifting-packaging.webp`,
  "description": "Premium leather corporate gifting manufacturing",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressCountry": "PK"
  },
  "telephone": "+92-332-3632052",
  "email": "info@aurel.pk",
  "priceRange": "PKR",
  "areaServed": ["PK", "GB", "US", "AE", "SA"]
});

export const productSchema = (
  name: string,
  description: string,
  imageUrl: string,
  baseUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "image": imageUrl,
  "brand": {
    "@type": "Brand",
    "name": "Aurel Leather"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Aurel Leather",
    "url": baseUrl
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "PKR",
    "availability": "https://schema.org/InStock"
  }
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (items: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
});

export const businessServiceSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aurel Leather Corporate Gifting",
  "description": "Premium leather corporate gifting manufacturing and customization services",
  "url": baseUrl,
  "areaServed": ["PK", "GB", "US", "AE", "SA"],
  "serviceType": ["Leather Manufacturing", "Corporate Gifting", "Custom Branding"],
  "telephone": "+92-332-3632052",
  "email": "info@aurel.pk"
});
