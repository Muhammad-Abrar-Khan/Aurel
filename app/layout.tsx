import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Aurel Leather | Premium Leather Corporate Gifts in Pakistan',
  description:
    'Aurel Leather creates premium leather wallets, corporate gifts and custom branded packaging from Karachi. Enterprise-grade manufacturing for bulk corporate gifting and bespoke solutions in Pakistan.',
  metadataBase: new URL('https://aurel-app-3498d.web.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aurel Leather | Premium Leather Corporate Gifts in Pakistan',
    description:
      'Aurel Leather creates premium leather wallets, corporate gifts and custom branded packaging from Karachi. Enterprise-grade manufacturing for bulk corporate gifting and bespoke solutions in Pakistan.',
    url: 'https://aurel-app-3498d.web.app',
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
      </body>
    </html>
  );
}
