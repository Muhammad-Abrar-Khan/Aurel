import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MultiStepRFQ } from '@/components/MultiStepRFQ';

export const metadata: Metadata = {
  title: 'Request a Quote | Aurel Leather',
  description:
    'Get a custom B2B quote for leather corporate gifts. Tell us your requirements and we will respond within 2 hours.',
  alternates: { canonical: '/request-quote' },
};

export default function RequestQuotePage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main" className="relative py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Request Quote"
            title="Submit Your Corporate Leather Requirements"
            subtitle="Complete the brief and our team will prepare a tailored quote within 2 hours."
            align="left"
            titleSize="4xl"
            className="mb-14"
          />
          <MultiStepRFQ />
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
