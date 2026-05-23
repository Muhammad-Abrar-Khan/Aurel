import React from 'react';
import { SimpleFAQ } from '@/components/SimpleFAQ';

export const metadata = {
  title: 'Contact | Aurel Leather',
  description: 'Contact Aurel Leather for quotes, samples and corporate inquiries. Reach us via WhatsApp or the contact form.',
};

const faq = [
  { q: 'How do I request a quote?', a: 'Use the Request Quote form or message us on WhatsApp.' },
  { q: 'What is your response time?', a: 'We typically respond within 24 business hours.' },
];

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="font-display text-4xl mb-4">Contact & Request a Quote</h1>
      <p className="text-on-surface-variant mb-8">Send an inquiry for production, samples or corporate programs.</p>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Quick Contact</h2>
        <div className="flex gap-4">
          <a href="https://wa.me/923323632052?text=Hi%20Aurel%20Leather%2C%20I%20need%20a%20quote" className="bg-primary text-on-primary px-6 py-3 rounded">WhatsApp</a>
          <a href="mailto:info@aurel.pk" className="border border-outline px-6 py-3 rounded">Email</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">FAQ</h2>
        <SimpleFAQ items={faq} />
      </section>
    </main>
  );
}
