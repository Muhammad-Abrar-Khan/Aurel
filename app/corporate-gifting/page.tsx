import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { CinematicShowcase } from '@/components/CinematicShowcase';
import { SimpleFAQ } from '@/components/SimpleFAQ';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { 
  ArrowRight, 
  MessageCircle, 
  Layers, 
  Award, 
  Package, 
  Globe, 
  Sliders, 
  PenTool, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const metadata = {
  title: 'Corporate Gifting | Aurel Leather',
  description: 'Elevated B2B corporate gifting. Rigid gift box presentations, custom gold foil logo branding, private label leathercraft, and nationwide logistics from Karachi.',
};

const B2BCapabilities = [
  {
    icon: <Award size={20} className="text-primary" />,
    title: "Private Label Manufacture",
    description: "Bespoke corporate products engineered to your precise dimensions, colors, and functional design."
  },
  {
    icon: <PenTool size={20} className="text-primary" />,
    title: "Gold Foil & Stamping",
    description: "Custom brass debossing dies for ultra-sharp hot stamping, blind debossing, and metallic gold foil."
  },
  {
    icon: <Package size={20} className="text-primary" />,
    title: "Rigid Box Presentations",
    description: "Matte-black luxury unboxing cases with champagne satin ribbons and premium 400gsm branded insert cards."
  },
  {
    icon: <Globe size={20} className="text-primary" />,
    title: "Global Supply & Scale",
    description: "Reliable B2B inventory management with production capacities scaled from 50 to 5,000+ units."
  }
];

const ProcurementProcess = [
  {
    step: "01",
    title: "The Design Brief",
    desc: "Collaborate with our corporate design desk. Define leather colors, stitch styles, and packaging briefs."
  },
  {
    step: "02",
    title: "Bespoke Prototyping",
    desc: "We fabricate physical samples for your executive board review to verify leather grain, stitch color, and fits."
  },
  {
    step: "03",
    title: "Precision Batch Production",
    desc: "Karachi's finest artisans cut, glue, stitch, and paint edges under rigorous ISO-equivalent quality checks."
  },
  {
    step: "04",
    title: "White-Glove Assembly",
    desc: "Products are cleaned, conditioned, tissue-wrapped, and nested inside the custom rigid presentation boxes."
  },
  {
    step: "05",
    title: "Nationwide B2B Logistics",
    desc: "Freight-protected shipping directly to your headquarters or split-shipped to multiple retail/corporate nodes."
  }
];

const faq = [
  { 
    q: 'What is the minimum order quantity for corporate gifting?', 
    a: 'Our standard B2B minimum starts at 50 units per order. This ensures we can custom-manufacture packaging dies, custom embossings, and keep custom dye batches uniform.' 
  },
  { 
    q: 'Can we request custom leather colors or textures?', 
    a: 'Absolutely. For runs exceeding 200 units, we can custom-source tannery-level full-grain leather matching your brand HSL or hex values in pebble-grain, smooth matte, or saffiano finishes.' 
  },
  { 
    q: 'What is your standard production timeline?', 
    a: 'Standard production runs take 7 to 14 business days from physical sample approval, depending on the scale and packaging requirements. Express slots are available for banking cycles.' 
  },
  { 
    q: 'Do you ship to multiple corporate branches?', 
    a: 'Yes, we specialize in bulk split-logistics. We can coordinate multi-destination shipping across Karachi, Lahore, Islamabad, and international corporate offices with complete tracking.' 
  }
];

export default function CorporateGiftingPage() {
  return (
    <div className="bg-[#0b0a09] text-on-surface min-h-screen overflow-x-hidden flex flex-col justify-between">
      <Navbar />
      
      <main id="main" className="relative flex-grow">
        {/* Grain overlay */}
        <div className="grain-overlay" />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 px-8 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(201,169,110,0.1)_0%,_transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-px bg-primary" />
              <span className="font-mono text-[10px] tracking-[0.45em] uppercase text-primary">
                Aurel Corporate Programs
              </span>
              <div className="w-6 h-px bg-primary" />
            </div>

            <h1 className="font-display italic text-5xl md:text-7xl text-on-surface leading-[1.05] max-w-4xl mx-auto">
              Corporate Gifts Designed to <span className="text-primary">Inspire Prestige</span>.
            </h1>
            
            <p className="font-sans text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We partner with elite institutions in banking, technology, and real estate to deliver full-grain leather solutions nested in bespoke rigid presentations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <PremiumButton
                variant="primary"
                size="lg"
                href="/contact"
                icon={<ArrowRight size={14} />}
              >
                Initiate Proposal
              </PremiumButton>
              <PremiumButton
                variant="outline"
                size="lg"
                href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20have%20a%20B2B%20corporate%20gifting%20inquiry.`}
                icon={<MessageCircle size={14} />}
              >
                WhatsApp Inquiry
              </PremiumButton>
            </div>
          </div>
        </section>

        {/* Cinematic Showcase Section */}
        <section className="py-12 px-8 md:px-16 max-w-7xl mx-auto relative z-10">
          <div className="mb-8 text-center md:text-left">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-outline">
              UX Showcase & Custom Prompts
            </span>
            <h2 className="font-display italic text-2xl md:text-3xl mt-1">
              Bespoke Packaging Engineering
            </h2>
          </div>
          <CinematicShowcase />
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 px-8 md:px-16 bg-surface/30 border-y border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
              <div className="space-y-6">
                <span className="font-mono text-[9px] tracking-[0.35em] text-primary uppercase bg-primary/10 px-2.5 py-1 rounded">
                  B2B Production Capabilities
                </span>
                <h2 className="font-display italic text-4xl md:text-5xl text-on-surface">
                  Uncompromised Craft, Engineered at Scale.
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Aurel unites the raw beauty of Pakistan's finest leather tanneries with meticulous industrial precision. We custom deboss, hand-finish, package, and deliver your inventory on exact timelines.
                </p>
                <div className="flex gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="font-display text-4xl text-primary italic">100%</span>
                    <span className="font-mono text-[9px] text-outline tracking-wider uppercase mt-1">Full-Grain Leather</span>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="font-display text-4xl text-primary italic">7-14</span>
                    <span className="font-mono text-[9px] text-outline tracking-wider uppercase mt-1">Day Standard Lead</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {B2BCapabilities.map((cap, ci) => (
                  <div 
                    key={ci} 
                    className="p-6 border border-white/5 bg-surface hover:border-primary/20 transition-all duration-300 rounded-xl"
                  >
                    <div className="mb-4 bg-primary/5 p-3 rounded-lg w-fit">
                      {cap.icon}
                    </div>
                    <h3 className="font-display italic text-xl text-on-surface mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Partnership Process */}
        <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-outline">
              B2B Client Journey
            </span>
            <h2 className="font-display italic text-4xl md:text-5xl">
              From Concept to Unboxing
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We manage the entire production chain to deliver pristine quality control, eliminating B2B fulfillment anxiety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {ProcurementProcess.map((proc, pi) => (
              <div key={pi} className="relative space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl text-primary/30 italic font-semibold">
                    {proc.step}
                  </span>
                  <div className="h-px bg-white/10 flex-grow hidden lg:block" />
                </div>
                <h3 className="font-display italic text-lg text-on-surface">
                  {proc.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-8 md:px-16 bg-surface/10 border-t border-white/5 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-outline">
                Corporate FAQ
              </span>
              <h2 className="font-display italic text-3xl md:text-4xl">
                B2B Procurement Inquiries
              </h2>
            </div>
            
            <SimpleFAQ items={faq} />
          </div>
        </section>

        {/* Conversion CTA Block */}
        <section className="py-20 px-8 md:px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto bg-surface border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="font-display italic text-3xl md:text-5xl text-on-surface">
              Begin Your Aurel Commission
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Inquire today to receive custom sample packs, packaging layout sheets, and volume B2B quotes tailored to your brand identity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <PremiumButton
                variant="primary"
                size="lg"
                href="/contact"
                icon={<ArrowRight size={14} />}
              >
                Request B2B Quote
              </PremiumButton>
              <PremiumButton
                variant="ghost"
                size="lg"
                href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20to%20request%20a%20B2B%20Corporate%20quote.`}
                icon={<MessageCircle size={14} />}
              >
                Contact Director
              </PremiumButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
