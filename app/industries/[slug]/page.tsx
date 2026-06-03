import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { waLinks } from '@/lib/whatsapp';
import { Landmark, Cpu, GraduationCap, Building2, HeartPulse } from 'lucide-react';

const industries = [
  {
    slug: 'banking-finance',
    title: 'Banking & Finance',
    headline: 'Executive Leather Gifts for Financial Institutions',
    description:
      'Premium leather corporate gifts for banks, investment firms, and insurance companies. Wallet sets, notebook covers, and executive gift programmes for client acquisition and employee recognition.',
    icon: Landmark,
    products: ['Executive Wallet', 'Leather Notebook', 'Executive Gift Set'],
    useCases: [
      'Eid gifting programs',
      'New client welcome kits',
      'Leadership awards',
    ],
    stats: { clients: '15+', units: '3,000+' },
    whatsapp: waLinks.banking,
  },
  {
    slug: 'technology',
    title: 'Technology & Software',
    headline: 'Branded Leather Goods for Tech Companies',
    description:
      'Custom-branded leather accessories for software houses, startups, and tech enterprises. Employee onboarding kits, investor relations gifts, and conference merchandise.',
    icon: Cpu,
    products: ['Card Holder', 'Leather Notebook', 'Executive Gift Set'],
    useCases: [
      'Employee onboarding kits',
      'Investor gifts',
      'Tech conference merch',
    ],
    stats: { clients: '20+', units: '4,000+' },
    whatsapp: waLinks.technology,
  },
  {
    slug: 'education',
    title: 'Higher Education',
    headline: 'Premium Gifts for Universities & Educational Institutions',
    description:
      'Branded leather gifts for universities, colleges, and educational organisations. Graduation gifts, faculty recognition, and institutional programmes.',
    icon: GraduationCap,
    products: ['Leather Notebook', 'Card Holder', 'Executive Wallet'],
    useCases: [
      'Graduation ceremony gifts',
      'Faculty awards',
      'Alumni relations',
    ],
    stats: { clients: '8+', units: '1,500+' },
    whatsapp: waLinks.education,
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Construction',
    headline: 'Luxury Leather Gifts for Property Developers',
    description:
      'Premium leather corporate gifts for real estate developers, property brokers, and construction firms. Client appreciation gifts, project launch kits, and sales incentives.',
    icon: Building2,
    products: ['Executive Wallet', 'Executive Gift Set', 'Card Holder'],
    useCases: [
      'Client appreciation',
      'Project launch gifts',
      'Broker incentive kits',
    ],
    stats: { clients: '10+', units: '2,000+' },
    whatsapp: waLinks.realEstate,
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Pharma',
    headline: 'Professional Leather Gifts for Healthcare Leaders',
    description:
      'Refined leather accessories for pharmaceutical companies, hospitals, and healthcare networks. Doctor appreciation gifts, corporate programmes, and conference kits.',
    icon: HeartPulse,
    products: ['Card Holder', 'Executive Wallet', 'Leather Notebook'],
    useCases: [
      'Doctor appreciation',
      'Pharma rep gifts',
      'Hospital leadership awards',
    ],
    stats: { clients: '7+', units: '1,200+' },
    whatsapp: waLinks.healthcare,
  },
];

export const dynamic = 'force-static';

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = industries.find((item) => item.slug === params.slug);
  if (!industry) return { title: 'Industry | Aurel Leather', description: 'Aurel Leather industry solutions.' };

  return {
    title: `${industry.title} | Aurel Leather`,
    description: industry.description,
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((item) => item.slug === params.slug);
  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">{industry.title}</span>
              <h1 className="font-display text-5xl md:text-6xl leading-tight">{industry.headline}</h1>
              <p className="max-w-2xl text-base text-on-surface-variant leading-relaxed">{industry.description}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-primary/10 bg-surface/30 p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">Clients</p>
                  <p className="mt-3 font-display text-4xl text-on-surface italic">{industry.stats.clients}</p>
                </div>
                <div className="rounded-3xl border border-primary/10 bg-surface/30 p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">Units</p>
                  <p className="mt-3 font-display text-4xl text-on-surface italic">{industry.stats.units}</p>
                </div>
                <div className="rounded-3xl border border-primary/10 bg-surface/30 p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">Focus</p>
                  <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{industry.useCases}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[32px] border border-primary/10 bg-background/70 p-10 text-center">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-surface/50 text-primary">
                <Icon size={28} />
              </div>
              <h2 className="font-display text-3xl text-on-surface mb-4">Recommended Products</h2>
              <div className="space-y-3">
                {industry.products.map((product) => (
                  <div key={product} className="rounded-3xl border border-primary/10 bg-surface/30 p-4 text-sm text-on-surface-variant">{product}</div>
                ))}
              </div>
              <PremiumButton href="/products" variant="ghost" size="lg" className="mt-8 w-full">
                Browse Products
              </PremiumButton>
            </div>
          </div>

          <section className="mt-20 rounded-[32px] border border-primary/10 bg-surface/30 p-10">
            <SectionHeading
              eyebrow="Use Cases"
              title="How Aurel supports your sector"
              subtitle="Targeted corporate gifting programs, event gifting, and executive recognition for your industry."
              align="left"
              titleSize="3xl"
              className="mb-10"
            />

            <div className="grid gap-6 md:grid-cols-3">
              {industry.useCases.map((useCase) => (
                <AnimatedReveal key={useCase} variant="fadeUp" className="rounded-3xl border border-primary/10 bg-background/70 p-6">
                  <h3 className="font-sans text-lg font-semibold text-on-surface mb-3">{useCase}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Custom leather solutions designed to strengthen client relationships, employee morale, and brand visibility.</p>
                </AnimatedReveal>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start">
            <div className="rounded-[32px] border border-primary/10 bg-background/70 p-10">
              <h3 className="font-display text-3xl text-on-surface mb-6">Case study available upon request</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                We keep client confidentiality for enterprise orders. Contact us for a private case study and manufacturing reference tailored to your sector.
              </p>
              <div className="rounded-3xl border border-primary/10 bg-surface/30 p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">Private Review</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">Case study available upon request — contact us to review detailed delivery results, quality benchmarks, and client feedback.</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-primary/10 bg-surface/40 p-10">
              <h3 className="font-display text-3xl text-on-surface mb-6">Request a Quote</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                Share your industry requirements and we will prepare a tailored leather gifting proposal with production timeline and pricing guidance.
              </p>
              <PremiumButton href={industry.whatsapp} variant="primary" size="lg">
                Request Quote
              </PremiumButton>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
