import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { waLinks } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Materials | Aurel Leather',
  description:
    'Explore Aurel Leather material options including full-grain cowhide, pebble grain, saffiano, and pull-up leather. See finishes, colors, textures, and recommended uses for corporate programs.',
  alternates: { canonical: '/materials' },
};

const materials = [
  {
    name: 'Full-Grain Cowhide',
    finish: 'Matte Soft Touch',
    texture: 'Smooth',
    colors: ['#0B0A09', '#4B382A', '#B68648', '#1C2B3A'],
    bestFor: 'Wallets, notebooks, card holders',
    description:
      'Premium top layer of hide. Develops rich patina over time. Most durable and sought-after leather grade.',
  },
  {
    name: 'Pebble Grain Cowhide',
    finish: 'Semi-Gloss',
    texture: 'Textured',
    colors: ['#0A0A0A', '#4A362C', '#7A5A43'],
    bestFor: 'Executive wallets, corporate gift sets',
    description:
      'Fine pebble texture for a sophisticated executive look. Scratch-resistant surface. Popular for banking and finance sector.',
  },
  {
    name: 'Saffiano Cowhide',
    finish: 'Cross-Hatch',
    texture: 'Cross-grain',
    colors: ['#11131A', '#1D2733', '#1E384E'],
    bestFor: 'Card holders, travel accessories',
    description:
      'Iconic cross-hatch pattern. Water-resistant coating. Preferred for professional accessories.',
  },
  {
    name: 'Pull-Up Leather',
    finish: 'Wax-Polished',
    texture: 'Smooth with character',
    colors: ['#9A682F', '#4F3621', '#2F1F12'],
    bestFor: 'Notebooks, premium gift sets',
    description:
      'Wax-treated full grain. Distinctive pull-up effect shows natural character. Ages beautifully. Premium positioning.',
  },
];

export default function MaterialsPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Material Library"
            title="Leather Materials & Finishes"
            subtitle="A curated selection of premium hides, textures, and colorways for executive gifting and brand-aligned products."
            align="left"
            titleSize="4xl"
            className="mb-16"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {materials.map((material) => (
              <div key={material.name} className="rounded-[28px] border border-primary/10 bg-surface/40 p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-on-surface mb-2">{material.name}</h3>
                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary">{material.finish}</p>
                  </div>
                  <span className="rounded-full border border-primary/10 bg-background/70 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-outline">{material.texture}</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{material.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {material.colors.map((color) => (
                    <span key={color} className="h-8 w-8 rounded-full border border-white/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <p className="text-sm text-on-surface-variant mb-6">Best for: <span className="text-on-surface font-semibold">{material.bestFor}</span></p>
                <PremiumButton href={waLinks.sample} variant="primary" size="md">
                  Request Sample
                </PremiumButton>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
