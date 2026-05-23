import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getProductSlugs, getRelatedProducts } from '@/lib/shop';
import { productSchema, breadcrumbSchema, organizationSchema, localBusinessSchema, faqSchema } from '@/lib/schemas';
import { APP_URL, WHATSAPP_URL } from '@/lib/constants';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import ProductViewerWrapper from '@/components/ProductViewerWrapper';

export async function generateStaticParams() {
  return getProductSlugs();
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: 'Product Not Found | Aurel Leather',
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `${APP_URL}/products/${product.slug}`,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.seoDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug);
  const faqItems = [
    { q: 'Do you offer branded packaging for corporate gifting?', a: 'Yes — Aurel Leather provides premium branded packaging and custom inserts for corporate gifting programs.' },
    { q: 'What is the minimum order quantity for executive gifts?', a: 'Most corporate orders start at 50 units, with flexible scaling for larger programs.' },
    { q: 'Can I request a sample before bulk production?', a: 'Absolutely. We can prepare a sample and sample kit for approval before production begins.' },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main id="main" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="space-y-16">
          <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-outline">{product.category}</p>
              <h1 className="font-display text-5xl leading-tight">{product.name}</h1>
              <p className="max-w-2xl text-on-surface-variant leading-8">{product.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] overflow-hidden border border-white/10 bg-surface">
                  <Image src={product.images[0]} alt={product.name} width={1200} height={900} className="h-full w-full object-cover" />
                </div>
                <div className="grid gap-4">
                  {product.gallery.slice(1).map((src, index) => (
                    <div key={index} className="rounded-[1.5rem] overflow-hidden border border-white/10 bg-surface">
                      <Image src={src} alt={`${product.name} ${index + 1}`} width={1200} height={900} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-outline">Price</p>
                <p className="text-4xl font-semibold text-on-surface mt-3">{product.price}</p>
                <p className="mt-4 text-sm text-on-surface-variant">Luxury corporate pricing, custom quotes available for bulk orders.</p>
                <div className="mt-8 grid gap-3">
                  <a
                    href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(product.name)}`}
                    className="block rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition hover:bg-primary/90"
                  >
                    Inquire via WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="block rounded-full border border-white/10 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-on-surface transition hover:border-primary/30 hover:text-primary"
                  >
                    Request corporate order
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
                <h2 className="font-display text-2xl mb-4">Why choose this design</h2>
                <ul className="space-y-3 text-on-surface-variant text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
                <h2 className="font-display text-2xl mb-4">Related products</h2>
                <div className="space-y-4">
                  {related.map((item) => (
                    <Link key={item.slug} href={`/products/${item.slug}`} className="block rounded-[1.5rem] border border-white/10 bg-[#10100f] px-4 py-4 transition hover:border-primary/30">
                      <p className="text-sm text-on-surface-variant">{item.category}</p>
                      <p className="font-semibold text-on-surface">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
                <h2 className="font-display text-3xl mb-4">Interactive 360° view</h2>
                <p className="text-on-surface-variant leading-8">Experience the premium form and finish in a dynamic interactive presentation, built with real 3D rendering for a luxury product preview.</p>
              <div className="mt-6">
                  <ProductViewerWrapper />
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
                <h3 className="font-display text-2xl mb-4">Material & craftsmanship</h3>
                <ul className="space-y-3 text-on-surface-variant">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
              <h2 className="font-display text-3xl mb-4">FAQ</h2>
              <div className="space-y-4 text-on-surface-variant">
                {faqItems.map((faq) => (
                  <div key={faq.q} className="rounded-2xl border border-white/10 p-5 bg-background">
                    <p className="font-semibold text-on-surface">{faq.q}</p>
                    <p className="mt-2 text-sm leading-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              productSchema(product.name, product.seoDescription, `${APP_URL}${product.images[0]}`, APP_URL, product.price.replace(/[^0-9\.]/g, ''), `${APP_URL}/products/${product.slug}`),
              breadcrumbSchema([
                { name: 'Home', url: APP_URL },
                { name: 'Products', url: `${APP_URL}/products` },
                { name: product.name, url: `${APP_URL}/products/${product.slug}` },
              ]),
              organizationSchema(APP_URL),
              localBusinessSchema(APP_URL),
              faqSchema(faqItems),
            ],
          })
        }}
      />
      <Footer />
    </div>
  );
}
