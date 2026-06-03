import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { organizationSchema, localBusinessSchema } from '@/lib/schemas';
import { waLinks } from '@/lib/whatsapp';
import { APP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Leather Manufacturing Karachi | Aurel Leather',
  description:
    'Pakistan premier factory-direct leather manufacturer in Karachi. Full-grain cowhide, custom embossing, 50-unit MOQ, 7-14 day production. Trusted by enterprises across Pakistan and GCC.',
};

const processSteps = [
  'Raw Material Selection',
  'Cutting & Skiving',
  'Assembly & Stitching',
  'Edge Finishing',
  'QC Inspection',
  'Packaging & Dispatch',
];

const capabilities = [
  {
    title: 'Full-Grain Sourcing',
    description: 'Hand-selected cowhide with consistent grain, superior durability, and premium patina.',
  },
  {
    title: 'Embossing & Debossing',
    description: 'Gold foil, blind deboss, and laser precision branding for premium corporate identity.',
  },
  {
    title: 'Custom Packaging',
    description: 'Luxury rigid boxes, branded tissue, and presentation-ready packaging for corporate delivery.',
  },
  {
    title: 'Volume Production',
    description: 'Production capacity from 50 to 10,000 units with consistent quality and timed logistics.',
  },
];

const certifications = [
  'ISO 9001-Compliant',
  'Full-Grain Certified',
  'Karachi-Based Factory',
  '100% QC Inspection',
];

export default function ManufacturingPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative">
        <section className="relative pt-32 pb-20 px-8 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.08),_transparent_40%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Manufacturing Capabilities"
              title="The Karachi Atelier — Where Full-Grain Meets Precision"
              subtitle="Factory-direct leather manufacturing from Pakistan's premier production facility. ISO-compliant processes, certified materials, 7–14 day SLA."
              align="left"
              titleSize="4xl"
              className="mb-16"
            />
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-[20px] border border-primary/10 bg-surface/40 p-8">
                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary mb-3">Factory SLA</p>
                    <p className="font-display text-5xl text-primary italic">7-14 Days</p>
                    <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">Standard production timeline for bulk leather assemblies and branded packaging.</p>
                  </div>
                  <div className="rounded-[20px] border border-primary/10 bg-surface/40 p-8">
                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary mb-3">MOQ</p>
                    <p className="font-display text-5xl text-primary italic">50 Units</p>
                    <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">Low minimum for enterprise-grade custom manufacturing and export orders.</p>
                  </div>
                </div>

                <div className="rounded-[24px] border border-primary/10 bg-surface/30 p-8">
                  <h3 className="font-display text-3xl text-on-surface mb-6">Production Timeline</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {processSteps.map((step, index) => (
                      <AnimatedReveal key={step} variant="fadeUp" delay={index * 0.08}>
                        <div className="rounded-3xl border border-primary/10 bg-background/70 p-6">
                          <span className="font-mono text-[9px] text-primary uppercase tracking-[0.35em]">Step {index + 1}</span>
                          <h4 className="mt-4 font-sans text-lg font-semibold text-on-surface">{step}</h4>
                        </div>
                      </AnimatedReveal>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-[24px] border border-primary/10 bg-surface/30 p-8">
                  <h3 className="font-display text-3xl text-on-surface mb-6">Capabilities</h3>
                  <div className="space-y-4">
                    {capabilities.map((cap) => (
                      <div key={cap.title} className="rounded-3xl border border-primary/10 bg-background/70 p-6">
                        <h4 className="font-sans text-lg font-semibold text-on-surface mb-2">{cap.title}</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{cap.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-primary/10 bg-surface/30 p-8">
                  <h3 className="font-display text-3xl text-on-surface mb-6">Certifications</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {certifications.map((value) => (
                      <div key={value} className="rounded-3xl border border-primary/10 bg-background/80 p-5">
                        <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">{value}</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Global enterprise buyers recognize our factory-grade quality and inspection processes.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-16">
          <div className="max-w-7xl mx-auto bg-surface/30 rounded-[32px] border border-primary/10 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Factory Specifications"
                  title="Karachi Atelier Specifications"
                  subtitle="Precision capacity and premium materials designed for enterprise procurement."
                  align="left"
                  titleSize="3xl"
                  className="mb-6"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-background/80 p-6 border border-primary/10">
                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">Capacity</p>
                    <p className="font-display text-4xl text-on-surface italic">500+</p>
                    <p className="text-sm text-on-surface-variant mt-2">Units per day in our core leather assembly line.</p>
                  </div>
                  <div className="rounded-3xl bg-background/80 p-6 border border-primary/10">
                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">Lead Time</p>
                    <p className="font-display text-4xl text-on-surface italic">7–14</p>
                    <p className="text-sm text-on-surface-variant mt-2">Business days from sample approval to shipment readiness.</p>
                  </div>
                  <div className="rounded-3xl bg-background/80 p-6 border border-primary/10">
                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">MOQ</p>
                    <p className="font-display text-4xl text-on-surface italic">50</p>
                    <p className="text-sm text-on-surface-variant mt-2">Minimum order quantity for premium production and packaging.</p>
                  </div>
                  <div className="rounded-3xl bg-background/80 p-6 border border-primary/10">
                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">Materials</p>
                    <p className="text-xl text-on-surface font-semibold">Full-grain cowhide</p>
                    <p className="text-sm text-on-surface-variant mt-2">Hot-stamp foil, embossing, debossing, edge paint, burnishing.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-primary/10 bg-background/80 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">Book a Tour</p>
                  <h3 className="font-display text-3xl text-on-surface">Schedule a Virtual Factory Tour</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">See our production floor, packaging line, and QC workflow in a guided virtual walkthrough.</p>
                </div>
                <PremiumButton href={waLinks.manufacturing} variant="primary" size="lg">
                  Schedule Tour
                </PremiumButton>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [organizationSchema(APP_URL), localBusinessSchema(APP_URL)],
            }),
          }}
        />
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
