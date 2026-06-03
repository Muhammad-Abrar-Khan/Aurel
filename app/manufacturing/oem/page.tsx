import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { waLinks } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'OEM & Private Label Leather Goods Pakistan | Aurel Leather',
  description:
    'Factory-direct OEM and private label leather manufacturing in Karachi. Custom branding, 50-unit MOQ, export to GCC, UK, EU.',
};

const offerings = [
  {
    title: 'Full Private Label',
    description: 'Your logo, your packaging, and your brand story built into every leather good.',
  },
  {
    title: 'Custom Dimensions & Materials',
    description: 'Tailored product sizes, luxury finishes, and premium hide selection for your private label line.',
  },
  {
    title: 'Exclusive Colorways',
    description: 'Curated color palettes for your brand, including signature dark tones and premium neutrals.',
  },
  {
    title: 'Export-Ready Documentation',
    description: 'FOB Karachi, LCAF certificates, commercial invoice, and customs-ready shipping packages.',
  },
];

const pricing = [
  { tier: '50–99 units', detail: 'Standard pricing' },
  { tier: '100–499 units', detail: '10% volume discount' },
  { tier: '500+ units', detail: 'Custom quote' },
  { tier: '1,000+ units', detail: 'Dedicated account manager' },
];

const processFlow = [
  { step: 'Design Brief', note: 'Define your private label requirements and packaging narrative.' },
  { step: 'Sample Production', note: 'Approve a branded sample before moving to bulk production.' },
  { step: 'Bulk Run', note: 'Full production under tight QC and consistent leather finishing.' },
  { step: 'Export Delivery', note: 'Prepared for GCC, UK, EU shipments with export documentation.' },
];

const exportCapabilities = [
  'Pakistan to GCC, UK, EU',
  'FOB Karachi available',
  'LCAF documentation issued',
  'International freight coordination',
];

export default function OemPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative">
        <section className="relative pt-32 pb-20 px-8 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.08),_transparent_42%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="OEM & Private Label"
              title="OEM & Private Label Leather Manufacturing"
              subtitle="Your brand. Our craft. Factory-direct private label production for brands, distributors, and resellers worldwide."
              align="left"
              titleSize="4xl"
              className="mb-16"
            />

            <div className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] items-start">
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {offerings.map((item) => (
                    <AnimatedReveal key={item.title} variant="fadeUp" className="rounded-[24px] border border-primary/10 bg-surface/40 p-8">
                      <h3 className="font-display text-xl text-on-surface mb-3">{item.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                    </AnimatedReveal>
                  ))}
                </div>

                <div className="rounded-[28px] border border-primary/10 bg-background/70 p-8">
                  <h3 className="font-display text-3xl text-on-surface mb-6">MOQ & Pricing</h3>
                  <div className="space-y-4">
                    {pricing.map((item) => (
                      <div key={item.tier} className="flex items-start gap-4 rounded-3xl border border-primary/10 bg-surface/30 p-5">
                        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">{item.tier}</span>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-[28px] border border-primary/10 bg-surface/30 p-8">
                  <h3 className="font-display text-3xl text-on-surface mb-6">Production Process</h3>
                  <div className="space-y-4">
                    {processFlow.map((item) => (
                      <div key={item.step} className="rounded-3xl bg-background/80 p-5 border border-primary/10">
                        <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-2">{item.step}</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-primary/10 bg-surface/30 p-8">
                  <h3 className="font-display text-3xl text-on-surface mb-6">Export Capabilities</h3>
                  <ul className="space-y-3">
                    {exportCapabilities.map((item) => (
                      <li key={item} className="font-sans text-sm text-on-surface-variant leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[28px] border border-primary/10 bg-background/80 p-8">
                  <h3 className="font-display text-3xl text-on-surface mb-6">Start Your Private Label Run</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                    Share your design brief and we will match your brand identity with export-ready manufacturing and packaging.
                  </p>
                  <PremiumButton href={waLinks.oem} variant="primary" size="lg">
                    Upload Design Brief
                  </PremiumButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
