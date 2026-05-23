import React from 'react';
import { SimpleFAQ } from '@/components/SimpleFAQ';

export const metadata = {
  title: 'Cardholders | Aurel Leather',
  description: 'Premium cardholders and small goods for corporate gifting — customizable, durable and elegant.',
};

const faq = [
  { q: 'What finishes are available?', a: 'Embossing, debossing, foil stamping, and color linings.' },
  { q: 'Do you provide packaging?', a: 'Yes — bespoke packaging options are available for corporate orders.' },
];

export default function CardholdersPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="font-display text-4xl mb-4">Cardholders & Small Goods</h1>
      <p className="text-on-surface-variant mb-8">Refined cardholders and accessories crafted for corporate gifting, balancing form and function.</p>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Why Aurel Leather</h2>
        <p>Supply-chain stability, trade-grade finishing and premium hides make our products ideal for enterprise gifting.</p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Request a Quote</h2>
        <div className="flex gap-4">
          <a href="/contact" className="bg-primary text-on-primary px-6 py-3 rounded">Request Quote</a>
          <a href="https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20need%20a%20cardholder%20quote" className="border border-outline px-6 py-3 rounded">WhatsApp</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">FAQ</h2>
        <SimpleFAQ items={faq} />
      </section>
    </main>
  );
}
