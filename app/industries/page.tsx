import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { waLinks } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Industries | Aurel Leather',
  description: 'Leather corporate gifting solutions for banking, technology, education, real estate, and healthcare. Explore industry-tailored proposals from Aurel Leather.',
  alternates: { canonical: '/industries' },
};

const industries = [
  {
    slug: 'banking-finance',
    title: 'Banking & Finance',
    headline: 'Executive Leather Gifts for Financial Institutions',
    description:
      'Premium leather corporate gifts for banks, investment firms, and insurance companies. Wallet sets, notebook covers, and executive gift programmes for client acquisition and employee recognition.',
    icon: 'Landmark',
    products: ['Executive Wallet', 'Leather Notebook', 'Executive Gift Set'],
    useCase: 'Eid gifting programs, new client welcome kits, leadership awards',
    stats: { clients: '15+', units: '3,000+' },
  },
  {
    slug: 'technology',
    title: 'Technology & Software',
    headline: 'Branded Leather Goods for Tech Companies',
    description:
      'Custom-branded leather accessories for software houses, startups, and tech enterprises. Employee onboarding kits, investor relations gifts, and conference merchandise.',
    icon: 'Cpu',
    products: ['Card Holder', 'Leather Notebook', 'Executive Gift Set'],
    useCase: 'Employee onboarding kits, investor gifts, tech conference merch',
    stats: { clients: '20+', units: '4,000+' },
  },
  {
    slug: 'education',
    title: 'Higher Education',
    headline: 'Premium Gifts for Universities & Educational Institutions',
    description:
      'Branded leather gifts for universities, colleges, and educational organisations. Graduation gifts, faculty recognition, and institutional programmes.',
    icon: 'GraduationCap',
    products: ['Leather Notebook', 'Card Holder', 'Executive Wallet'],
    useCase: 'Graduation ceremony gifts, faculty awards, alumni relations',
    stats: { clients: '8+', units: '1,500+' },
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Construction',
    headline: 'Luxury Leather Gifts for Property Developers',
    description:
      'Premium leather corporate gifts for real estate developers, property brokers, and construction firms. Client appreciation gifts, project launch kits, and sales incentives.',
    icon: 'Building2',
    products: ['Executive Wallet', 'Executive Gift Set', 'Card Holder'],
    useCase: 'Client appreciation, project launch gifts, broker incentive kits',
    stats: { clients: '10+', units: '2,000+' },
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Pharma',
    headline: 'Professional Leather Gifts for Healthcare Leaders',
    description:
      'Refined leather accessories for pharmaceutical companies, hospitals, and healthcare networks. Doctor appreciation gifts, corporate programmes, and conference kits.',
    icon: 'HeartPulse',
    products: ['Card Holder', 'Executive Wallet', 'Leather Notebook'],
    useCase: 'Doctor appreciation, pharma rep gifts, hospital leadership awards',
    stats: { clients: '7+', units: '1,200+' },
  },
];

const iconMap: Record<string, string> = {
  Landmark: 'Landmark',
  Cpu: 'Cpu',
  GraduationCap: 'GraduationCap',
  Building2: 'Building2',
  HeartPulse: 'HeartPulse',
};

const getIcon = (name: string) => {
  switch (name) {
    case 'Landmark':
      return 'Landmark';
    case 'Cpu':
      return 'Cpu';
    case 'GraduationCap':
      return 'GraduationCap';
    case 'Building2':
      return 'Building2';
    case 'HeartPulse':
      return 'HeartPulse';
    default:
      return 'Landmark';
  }
};

export default function IndustriesPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Industry Solutions"
            title="Leather Manufacturing for Every Enterprise Sector"
            subtitle="Explore tailored product programmes built for banking, technology, education, real estate, and healthcare buyers."
            align="left"
            titleSize="4xl"
            className="mb-16"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-[24px] border border-primary/10 bg-surface/40 p-8 transition hover:border-primary/30 hover:bg-surface/60"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">{industry.title}</span>
                  <span className="font-sans text-xs text-on-surface-variant">{industry.stats.units}</span>
                </div>
                <h3 className="font-display text-2xl text-on-surface mb-4">{industry.headline}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product) => (
                    <span key={product} className="rounded-full border border-primary/20 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-outline">{product}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 rounded-[28px] border border-primary/10 bg-background/80 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary mb-3">Ready to engage</p>
              <h2 className="font-display text-4xl text-on-surface">Request a sector-specific proposal.</h2>
            </div>
            <PremiumButton href={waLinks.quote} variant="primary" size="lg">
              WhatsApp Quote
            </PremiumButton>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
