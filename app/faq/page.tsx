import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'B2B FAQ | Aurel Leather Pakistan',
  description:
    'Answers to common questions about Aurel Leather corporate gifting: MOQ, customization, production timelines, payment, and export.',
  alternates: { canonical: '/faq' },
};

const faqGroups = [
  {
    group: 'Ordering & MOQ',
    items: [
      {
        q: 'What is the minimum order quantity?',
        a: '50 units for standard products. 100 units for white-label/OEM.',
      },
      {
        q: 'Can I mix products in one order?',
        a: 'Yes. You can combine wallets, card holders, notebooks, and gift sets in a single order as long as total quantity meets 50-unit minimum.',
      },
      {
        q: 'Do you accept international orders?',
        a: 'Yes. We export to GCC, Middle East, UK, and Europe. FOB Karachi pricing available. Contact us for export documentation.',
      },
    ],
  },
  {
    group: 'Customization',
    items: [
      {
        q: 'What customization options are available?',
        a: 'Gold foil stamping, blind debossing, heat embossing, custom leather colors (for orders 200+ units), custom packaging, branded insert cards, ribbon colors.',
      },
      {
        q: 'Can I see a sample before bulk production?',
        a: 'Yes. Pre-production samples available within 3–5 days. Sample fee applies and is fully deducted from bulk order total.',
      },
      {
        q: 'Do you provide packaging?',
        a: 'Yes. Matte-black rigid presentation boxes with gold ribbon standard. Custom packaging available for orders 100+ units.',
      },
    ],
  },
  {
    group: 'Production & Delivery',
    items: [
      {
        q: 'How long does production take?',
        a: 'Standard: 7–14 business days from sample approval. Express: 3–5 days (30% surcharge). Timeline confirmed at order placement.',
      },
      {
        q: 'Do you deliver outside Karachi?',
        a: 'Yes. Pakistan-wide via TCS, Leopards, and SPL. International shipping via DHL/FedEx on request.',
      },
      {
        q: 'What quality checks do you perform?',
        a: 'Every unit passes 3-stage QC: material inspection, in-process stitching/finishing check, final pre-packaging inspection.',
      },
    ],
  },
  {
    group: 'Payment & Export',
    items: [
      {
        q: 'What are your payment terms?',
        a: '50% advance to start production, 50% before delivery. Bank transfer (PKR/USD) and cash accepted. Trade accounts for agencies.',
      },
      {
        q: 'Do you provide export documents?',
        a: 'Yes. Commercial invoice, packing list, certificate of origin available. Letter of Credit accepted for large international orders.',
      },
      {
        q: 'What is your return/rework policy?',
        a: 'We guarantee satisfaction. If products do not meet approved sample specifications, we rework or replace at no charge.',
      },
    ],
  },
];

const faqJsonLd = JSON.stringify(
  faqSchema(
    faqGroups.flatMap((group) =>
      group.items.map((item) => ({ q: item.q, a: item.a })),
    ),
  ),
);

export default function FAQPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title="B2B Frequently Asked Questions"
            subtitle="Answers to the most common inquiries around MOQ, customization, production, payment, and export."
            align="left"
            titleSize="4xl"
            className="mb-16"
          />

          <div className="space-y-14">
            {faqGroups.map((group) => (
              <section key={group.group} className="rounded-[32px] border border-primary/10 bg-surface/30 p-8">
                <h2 className="font-display text-3xl text-on-surface mb-8">{group.group}</h2>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <details key={item.q} className="rounded-3xl border border-primary/10 bg-background/70 p-5">
                      <summary className="cursor-pointer font-semibold text-on-surface text-base">{item.q}</summary>
                      <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 rounded-[28px] border border-primary/10 bg-background/80 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">Need a direct answer?</p>
              <h2 className="font-display text-4xl text-on-surface">Contact us for bespoke procurement guidance.</h2>
            </div>
            <Link href="/request-quote" className="inline-flex rounded-none border border-primary bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-on-primary transition hover:bg-primary-light">
              Request a Quote
            </Link>
          </div>
        </div>
      </main>
      <Footer />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
    </div>
  );
}
