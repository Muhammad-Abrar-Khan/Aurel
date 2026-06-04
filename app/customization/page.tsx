import React from 'react';
import { SimpleFAQ } from '@/components/SimpleFAQ';

export const metadata = {
  title: 'Customization | Aurel Leather',
  description: 'Customization options: embossing, foil, color matching and bespoke packaging for corporate branding.',
  alternates: { canonical: '/customization' },
};

const faq = [
  { q: 'What materials can be branded?', a: 'Leather, lining materials, packaging and inserts are all brandable.' },
  { q: 'Can you color-match?', a: 'Yes — we provide color matching services for large orders.' },
];

export default function CustomizationPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="font-display text-4xl mb-4">Customization & Branding</h1>
      <p className="text-on-surface-variant mb-8">Full-service customization to carry your brand through product, finishing and packaging.</p>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Capabilities</h2>
        <ul className="list-disc pl-6">
          <li>Embossing and debossing</li>
          <li>Foil stamping and metallic accents</li>
          <li>Private packaging and branded inserts</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Request Custom Quote</h2>
        <div className="flex gap-4">
          <a href="/contact" className="bg-primary text-on-primary px-6 py-3 rounded">Request Quote</a>
          <a href="https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20need%20customization%20info" className="border border-outline px-6 py-3 rounded">WhatsApp</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">FAQ</h2>
        <SimpleFAQ items={faq} />
      </section>
    </main>
  );
}
