import React from 'react';
import { SimpleFAQ } from '@/components/SimpleFAQ';

export const metadata = {
  title: 'Wallets | Aurel Leather',
  description: 'Premium leather wallets for corporate gifting — Aurel Leather produces trade-grade, customizable wallets in Karachi, Pakistan.',
  alternates: { canonical: '/wallets' },
};

const faq = [
  { q: 'What is the minimum order quantity?', a: 'Minimum 50 units for branded runs; 100 units for white-label.' },
  { q: 'Can I add my logo?', a: 'Yes — embossed, debossed, foil, and metal badges are available.' },
];

export default function WalletsPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="font-display text-4xl mb-4">Premium Leather Wallets</h1>
      <p className="text-on-surface-variant mb-8">Aurel Leather crafts executive wallets with precise stitching, premium hides and enterprise-ready finishing for corporate gifting.</p>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Collections & Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full-grain and top-grain hides</li>
          <li>Multiple finishing and packaging options</li>
          <li>Trade pricing and supply-chain continuity</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Request a Quote</h2>
        <p className="mb-4">For production quotes and samples, contact us or request a quote.</p>
        <div className="flex gap-4">
          <a href="/contact" className="bg-primary text-on-primary px-6 py-3 rounded">Request Quote</a>
          <a href="https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20need%20a%20wallet%20quote" className="border border-outline px-6 py-3 rounded">WhatsApp</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">FAQ</h2>
        <SimpleFAQ items={faq} />
      </section>
    </main>
  );
}
