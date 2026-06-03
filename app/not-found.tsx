import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { PremiumButton } from '@/components/ui/PremiumButton';

export default function NotFoundPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="relative flex min-h-[calc(100vh-160px)] flex-col items-center justify-center px-8 py-24 text-center">
        <div className="space-y-10">
          <p className="font-display italic text-[clamp(5rem,8vw,8rem)] text-primary">404</p>
          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-6xl">This page doesn't exist yet.</h1>
            <p className="max-w-2xl mx-auto text-sm text-on-surface-variant leading-relaxed">
              Aurel Leather is continuously evolving. Use the navigation above or return to home to explore our corporate gifting, manufacturing, and quote pages.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
            <Link href="/" className="inline-flex rounded-none border border-primary bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-on-primary transition hover:bg-primary-light">
              Back to Home
            </Link>
            <Link href="/products" className="inline-flex rounded-none border border-white/10 bg-transparent px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface transition hover:border-primary/40 hover:text-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
