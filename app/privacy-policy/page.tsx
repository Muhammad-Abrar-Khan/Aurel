import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AUREL',
  description: 'Privacy policy for AUREL premium leather gifting.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-on-surface pt-[120px]">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-20">
        <h1 className="font-display text-4xl md:text-5xl mb-8 text-[#C9A96E]">Privacy Policy</h1>
        
        <div className="space-y-8 font-sans text-on-surface-variant">
          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Introduction</h2>
            <p>
              AUREL ("we," "us," "our," or "Company") operates the aurelleatherpk.web.app website (the "Service"). 
              This page informs you of our policies regarding the collection, use, and disclosure of personal data 
              when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Information Collection and Use</h2>
            <p className="mb-3">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Data:</strong> Name, email address, company name, phone number, and any information you voluntarily provide via contact forms.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Service (pages visited, time spent, device information, etc.).</li>
              <li><strong>Cookies:</strong> We may use cookies to track usage patterns and enhance user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Use of Data</h2>
            <p className="mb-3">AUREL uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To respond to your inquiries and requests</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent, and address technical and security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet 
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
              your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-3">
              <strong>Email:</strong> hello.aurel.pk@gmail.com<br/>
              <strong>Location:</strong> Karachi, Pakistan
            </p>
          </section>

          <section className="pt-8 border-t border-primary/10 mt-8 text-sm text-outline/60">
            <p>Last updated: June 1, 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
