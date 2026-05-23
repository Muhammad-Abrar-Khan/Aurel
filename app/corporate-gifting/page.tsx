import React from 'react';
import { SimpleFAQ } from '@/components/SimpleFAQ';

export const metadata = {
  title: 'Corporate Gifting | Aurel Leather',
  description: 'Turnkey corporate gifting solutions — bespoke design, private labeling, and global logistics from Karachi.',
};

const faq = [
  { q: 'Can you handle large inventories?', a: 'Yes — we scale to thousands of units with consistent quality control.' },
  { q: 'Do you offer sample runs?', a: 'Sample policy available — sample fees can be deducted from bulk orders.' },
];

export default function CorporateGiftingPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="font-display text-4xl mb-4">Corporate Gifting Solutions</h1>
      <p className="text-on-surface-variant mb-8">Strategic gifting programs with custom branding, premium packaging and reliable fulfillment.</p>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Services</h2>
        <ul className="list-disc pl-6">
          <li>Private label production</li>
          <li>Custom packaging & presentation</li>
          <li>Fulfillment and logistics support</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Get Started</h2>
        <div className="flex gap-4">
          <a href="/contact" className="bg-primary text-on-primary px-6 py-3 rounded">Corporate Inquiry</a>
          <a href="https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20have%20a%20corporate%20inquiry" className="border border-outline px-6 py-3 rounded">WhatsApp</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">FAQ</h2>
        <SimpleFAQ items={faq} />
      </section>
    </main>
  );
}
