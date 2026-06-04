import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { faqSchema } from '@/lib/schemas';
import { waLinks } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Case Studies | Aurel Leather',
  description: 'Explore Aurel Leather enterprise case studies and premium bulk manufacturing outcomes across banking, FMCG, and technology sectors.',
  alternates: { canonical: '/case-studies' },
};

const caseStudies = [
  {
    id: 1,
    sector: 'Banking',
    title: 'Major Telecom Group — 500 Executive Wallet Sets',
    excerpt: 'Delivered 500 embossed executive wallet sets for a leadership conference. 7-day production turnaround. Zero QC rejections.',
    units: '500 Units',
    timeline: '7 Days',
    comingSoon: false,
  },
  {
    id: 2,
    sector: 'FMCG',
    title: 'FMCG Enterprise — 300 Eid Gift Sets',
    excerpt: 'Leather notebook and cardholder sets for 300 senior clients across Pakistan. Custom embossing, branded boxes, nationwide delivery.',
    units: '300 Units',
    timeline: '10 Days',
    comingSoon: false,
  },
  {
    id: 3,
    sector: 'Technology',
    title: 'Software House — Employee Onboarding Programme',
    excerpt: 'Annual onboarding kit featuring card holders and notebooks for a growing Karachi tech firm. Recurring quarterly order established.',
    units: '150 Units/Quarter',
    timeline: 'Recurring',
    comingSoon: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real B2B Leather Programmes Delivered"
            subtitle="Enterprise orders across banking, FMCG, and technology — each executed with premium leather, custom branding, and rigorous quality control."
            align="left"
            titleSize="4xl"
            className="mb-16"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <AnimatedReveal key={item.id} variant="fadeUp" className="rounded-[28px] border border-primary/10 bg-surface/40 p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">{item.sector}</span>
                  {item.comingSoon && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-primary">Coming Soon</span>
                  )}
                </div>
                <h3 className="font-display text-2xl text-on-surface mb-4">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{item.excerpt}</p>
                <div className="grid gap-3 text-sm text-on-surface-variant">
                  <p><span className="font-semibold text-on-surface">Units:</span> {item.units}</p>
                  <p><span className="font-semibold text-on-surface">Timeline:</span> {item.timeline}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <div className="mt-20 rounded-[32px] border border-primary/10 bg-background/80 p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">Private case studies</p>
              <h2 className="font-display text-4xl text-on-surface">Detailed reports available on request.</h2>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                Confidential enterprise engagements are available through direct enquiry. Contact us to receive in-depth project summaries aligned to your industry.
              </p>
            </div>
            <PremiumButton href={waLinks.quote} variant="primary" size="lg">
              Request Private Review
            </PremiumButton>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: caseStudies.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.title,
              description: item.excerpt,
            })),
          }),
        }}
      />
    </div>
  );
}
