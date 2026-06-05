import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getProductSlugs, getRelatedProducts } from '@/lib/shop';
import { productSchema, breadcrumbSchema, organizationSchema, localBusinessSchema, faqSchema } from '@/lib/schemas';
import { APP_URL, WHATSAPP_URL } from '@/lib/constants';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

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
    alternates: { canonical: `/products/${product.slug}` },
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

const productVideos: Record<string, string> = {
  'executive-wallet': '/assets/video-wallet-showcase.mp4',
  'card-holder': '/assets/video-cardholder-flex.mp4',
  'executive-gift-set': '/assets/video-giftset-unboxing.mp4',
  'leather-notebook': '/assets/video-wallet-details.mp4',
  'pen-case': '/assets/video-giftbox-close.mp4',
};

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug);
  const videoSrc = productVideos[product.slug] || null;

  const faqItems = [
    { q: 'Do you offer custom branding for corporate gifting?', a: 'Yes — Aurel Leather provides high-precision gold foil stamping, debossing, and tailored interior options.' },
    { q: 'What is the minimum order quantity (MOQ) for corporate orders?', a: 'Our production minimums start at 50 units for wallets/notebooks and 30 units for gift sets to optimize factory efficiency.' },
    { q: 'Can we inspect material samples before initiating bulk production?', a: 'Absolutely. We prepare pre-production physical samples and custom sample cards for executive boardroom approval.' },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <main id="main" className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="space-y-16">
          
          {/* Main Showcase Section */}
          <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
            
            {/* Gallery Content */}
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">{product.category}</p>
              <h1 className="font-display text-4xl md:text-5xl leading-tight text-on-surface">{product.name}</h1>
              <p className="max-w-2xl text-on-surface-variant text-sm md:text-base leading-relaxed">{product.description}</p>

              {/* Grid of high-fashion pictures */}
              <div className="grid gap-4 sm:grid-cols-2 mt-8">
                <div className="rounded-lg overflow-hidden border border-primary/10 bg-surface shadow-lg relative group h-[380px] sm:h-auto min-h-[300px]">
                  <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/65 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="grid gap-4">
                  {product.gallery.slice(1).map((src, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border border-primary/10 bg-surface shadow-md relative h-[180px] group">
                      <Image 
                        src={src} 
                        alt={`${product.name} Angle ${index + 1}`} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Pricing & Actions */}
            <aside className="space-y-8 lg:sticky lg:top-28">
              
              {/* Core conversion card */}
              <div className="rounded-lg border border-primary/10 bg-surface p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none rounded-bl-full" />
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-outline">B2B Procurement Price</p>
                <p className="text-4xl font-display text-primary mt-3 italic">{product.price}</p>
                <p className="mt-4 text-xs text-on-surface-variant leading-relaxed">
                  Karachi factory-direct bulk pricing. Includes luxury presentation box and custom brand debossing.
                </p>
                
                {/* Specifications strip */}
                <div className="mt-6 pt-6 border-t border-primary/5 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-outline">Factory MOQ</span>
                    <span className="font-bold text-on-surface">{product.specs.MOQ || "50 Units"}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-outline">Material Base</span>
                    <span className="font-bold text-on-surface">100% Genuine Leather</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-outline">Production Time</span>
                    <span className="font-bold text-on-surface">10–14 Days</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20to%20request%20a%20corporate%20quote%20for%20the%20${encodeURIComponent(product.name)}`}
                    className="block w-full py-4 bg-primary text-on-primary text-center text-xs font-bold uppercase tracking-[0.25em] hover:bg-primary/95 transition hover:shadow-[0_0_24px_rgba(201,169,110,0.25)] rounded-sm"
                  >
                    Inquire via WhatsApp
                  </a>
                  <a
                    href="#contact"
                    className="block w-full py-4 border border-primary/30 text-center text-xs font-bold uppercase tracking-[0.25em] text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition duration-300 rounded-sm"
                  >
                    Request Corporate Proposal
                  </a>
                </div>
              </div>

              {/* Highlights card */}
              <div className="rounded-lg border border-primary/10 bg-surface p-8 shadow-2xl">
                <h2 className="font-display text-xl italic text-primary mb-4">Why Choose This Design</h2>
                <ul className="space-y-4 text-on-surface-variant text-xs leading-relaxed">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 items-start">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related products card */}
              <div className="rounded-lg border border-primary/10 bg-surface p-8 shadow-2xl">
                <h2 className="font-display text-xl italic text-primary mb-4">Complementary Designs</h2>
                <div className="space-y-3">
                  {related.map((item) => (
                    <Link 
                      key={item.slug} 
                      href={`/products/${item.slug}`} 
                      className="block rounded border border-primary/8 bg-surface-low p-4 transition-all duration-300 hover:border-primary/20 hover:bg-surface-high"
                    >
                      <p className="text-[9px] font-bold uppercase tracking-widest text-outline">{item.category}</p>
                      <p className="text-xs font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {/* Secondary Details & Cinematic Video Showcase */}
          <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
            
            <div className="space-y-6">
              
              {/* High-fidelity Video Card */}
              {videoSrc && (
                <div className="rounded-lg border border-primary/10 bg-surface p-8 shadow-2xl overflow-hidden relative">
                  <h2 className="font-display text-2xl italic text-primary mb-4">Cinematic Showcase</h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    Observe the genuine leather grain reflection, meticulous gold debossing, and flexible structural resilience under professional cinematic studio lighting.
                  </p>
                  <div className="relative w-full h-[360px] rounded border border-primary/10 overflow-hidden shadow-inner bg-background">
                    <video
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/85 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.25em] text-primary uppercase bg-background/90 px-3 py-1.5 border border-primary/20">
                      Studio Close-Up Loop
                    </div>
                  </div>
                </div>
              )}

              {/* Material specifications card */}
              <div className="rounded-lg border border-primary/10 bg-surface p-8 shadow-2xl">
                <h3 className="font-display text-2xl italic text-primary mb-6">Material & Craftsmanship</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ul className="space-y-4 text-on-surface-variant text-xs leading-relaxed">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-surface-low p-6 border border-primary/8 rounded space-y-4">
                    <h4 className="font-mono text-[9px] tracking-widest text-primary uppercase border-b border-primary/10 pb-2">Technical Summary</h4>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-xs py-1 border-b border-primary/10 last:border-b-0">
                        <span className="text-outline">{key}</span>
                        <span className="font-bold text-on-surface text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ card */}
            <div className="rounded-lg border border-primary/10 bg-surface p-8 shadow-2xl">
              <h2 className="font-display text-2xl italic text-primary mb-6">Fulfillment FAQ</h2>
              <div className="space-y-4 text-on-surface-variant text-xs leading-relaxed">
                {faqItems.map((faq) => (
                  <div key={faq.q} className="rounded border border-primary/8 p-5 bg-surface-low">
                    <p className="font-bold text-on-surface text-sm mb-2">{faq.q}</p>
                    <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Advanced Rich SEO Schema Markup */}
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
