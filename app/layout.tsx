import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { APP_URL } from '@/lib/constants';
import { CustomCursor } from '@/components/CustomCursor';
import { StickyCTA } from '@/components/StickyCTA';

export const metadata: Metadata = {
  title: 'Aurel Leather | Factory-Direct Leather Manufacturing Pakistan',
  description:
    'Aurel Leather — Karachi-based factory-direct leather manufacturer specializing in bulk corporate gifting, executive wallets, notebooks, and premium branded packaging. MOQ from 50 units. Genuine leather, global delivery.',
  keywords: [
    'leather corporate gifts Pakistan',
    'leather manufacturer Karachi',
    'corporate gifting Pakistan',
    'executive leather gifts',
    'custom leather goods Pakistan',
    'OEM leather manufacturer Pakistan',
  ],
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aurel Leather | Premium Leather Corporate Gifts in Pakistan',
    description:
      'Aurel Leather creates premium leather wallets, corporate gifts and custom branded packaging from Karachi. Enterprise-grade manufacturing for bulk corporate gifting and bespoke solutions in Pakistan.',
    url: APP_URL,
    siteName: 'Aurel Leather',
    type: 'website',
    images: [
      {
        url: '/assets/institutional-gifting-packaging.webp',
        width: 1200,
        height: 630,
        alt: 'Aurel Leather Corporate Gifting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurel Leather | Premium Leather Corporate Gifts in Pakistan',
    description:
      'Aurel Leather creates premium leather wallets, corporate gifts and custom branded packaging from Karachi.',
    creator: '@aurelpk',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-[1000] bg-primary text-on-primary px-4 py-2 rounded">Skip to content</a>
        {children}
        <CustomCursor />
        <StickyCTA />
      </body>
    </html>
  );
}
