import React from 'react';
import { SimpleFAQ } from '@/components/SimpleFAQ';

export const metadata = {
  title: 'About | Aurel Leather',
  description: 'Aurel Leather — craft and production in Karachi. Learn about our manufacturing, team and values.',
};

const faq = [
  { q: 'Where are you located?', a: 'Karachi, Pakistan — manufacturing and design headquarters.' },
  { q: 'Do you export?', a: 'Yes — we ship internationally and work with logistics partners.' },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="font-display text-4xl mb-4">About Aurel Leather</h1>
      <p className="text-on-surface-variant mb-8">We combine craft tradition with enterprise manufacturing to deliver premium leather goods for institutions.</p>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Craftsmanship</h2>
        <p className="mb-4">Our workshop emphasizes quality control, traceable hides and long-term partnerships with B2B clients.</p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Contact & Careers</h2>
        <p>For partnerships or careers, reach out via our contact page.</p>
        <div className="mt-4">
          <a href="/contact" className="bg-primary text-on-primary px-6 py-3 rounded">Contact Us</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">FAQ</h2>
        <SimpleFAQ items={faq} />
      </section>
    </main>
  );
}
