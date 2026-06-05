import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | AUREL',
  description: 'Terms of service for AUREL premium leather gifting.',
  alternates: { canonical: '/terms' },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-on-surface pt-[120px]">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-20">
        <h1 className="font-display text-4xl md:text-5xl mb-8 text-[#C9A96E]">Terms of Service</h1>
        
        <div className="space-y-8 font-sans text-on-surface-variant">
          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using the AUREL website (aurelleatherpk.web.app), you accept and agree to be bound 
              by the terms and provision of this agreement. If you do not agree to abide by the above, please do 
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Use License</h2>
            <p className="mb-3">
              Permission is granted to temporarily download one copy of the materials (information or software) 
              on AUREL's website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Knowingly or negligently transmit any viruses or malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Disclaimer</h2>
            <p>
              The materials on AUREL's website are provided on an 'as is' basis. AUREL makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Limitations</h2>
            <p>
              In no event shall AUREL or its suppliers be liable for any damages (including, without limitation, damages 
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on AUREL's website, even if AUREL or an authorized representative has been notified orally 
              or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Accuracy of Materials</h2>
            <p>
              The materials appearing on AUREL's website could include technical, typographical, or photographic errors. 
              AUREL does not warrant that any of the materials on its website are accurate, complete, or current. 
              AUREL may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Links</h2>
            <p>
              AUREL has not reviewed all of the sites linked to its website and is not responsible for the contents of any 
              such linked site. The inclusion of any link does not imply endorsement by AUREL of the site. Use of any such 
              linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Modifications</h2>
            <p>
              AUREL may revise these Terms of Service for its website at any time without notice. By using this website, 
              you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in Karachi, Pakistan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-on-surface mb-4">Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
