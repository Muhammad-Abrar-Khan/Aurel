import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getProductSlugs, getRelatedProducts } from '@/lib/shop';
import { productSchema, breadcrumbSchema, organizationSchema, localBusinessSchema } from '@/lib/schemas';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export async function generateStaticParams() {
  return getProductSlugs();
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
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
      url: `https://aurel-app-3498d.web.app/products/${product.slug}`,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.seoDescription,
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug);

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main id="main" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-outline">{product.category}</p>
              <h1 className="font-display text-5xl leading-tight">{product.name}</h1>
              <p className="max-w-2xl text-on-surface-variant leading-8">{product.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] overflow-hidden border border-white/10 bg-surface">
                <Image src={product.images[0]} alt={product.name} width={1200} height={900} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-4">
                {product.gallery.slice(1).map((src, index) => (
                  <div key={index} className="rounded-[1.5rem] overflow-hidden border border-white/10 bg-surface">
                    <Image src={src} alt={`${product.name} ${index + 1}`} width={1200} height={900} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
                <h2 className="font-display text-2xl mb-4">Specifications</h2>
                <dl className="grid gap-3 text-sm text-on-surface-variant">
                  {Object.entries(product.specs).map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4 border-b border-white/5 pb-3">
                      <dt className="font-semibold text-on-surface">{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
                <div className="mb-6 space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-outline">Price</p>
                  <p className="text-3xl font-semibold text-on-surface">{product.price}</p>
                </div>
                <div className="space-y-4">
                  <a
                    href={`https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(product.name)}`}
                    className="block rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-on-primary transition hover:bg-primary/90"
                  >
                    Inquire via WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="block text-center rounded-full border border-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-on-surface transition hover:border-primary/30 hover:text-primary"
                  >
                    Request Corporate Order
                  </Link>
                </div>
              </div>
            </section>
          </section>

          <aside className="space-y-8 md:pt-8">
            <div className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
              <h2 className="font-display text-2xl mb-4">Why this piece</h2>
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
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              productSchema(product.name, product.seoDescription, product.images[0], 'https://aurel-app-3498d.web.app'),
              breadcrumbSchema([
                { name: 'Home', url: 'https://aurel-app-3498d.web.app' },
                { name: 'Collections', url: 'https://aurel-app-3498d.web.app/collections' },
                { name: product.name, url: `https://aurel-app-3498d.web.app/products/${product.slug}` },
              ]),
              organizationSchema('https://aurel-app-3498d.web.app'),
              localBusinessSchema('https://aurel-app-3498d.web.app'),
            ],
          })
        }}
      />
      <Footer />
    </div>
  );
}
