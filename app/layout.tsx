import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import { APP_URL } from '@/lib/constants';
import { CustomCursor } from '@/components/CustomCursor';
import { StickyCTA } from '@/components/StickyCTA';

// ──────────────────────────────────────────────────────
// TODO: Replace these placeholder IDs with your real ones
// See the analytics setup guide for how to obtain them.
// ──────────────────────────────────────────────────────
const GA4_ID = 'G-XXXXXXXXXX';           // Google Analytics 4
const GTM_ID = 'GTM-XXXXXXX';            // Google Tag Manager
const CLARITY_ID = 'YOUR_CLARITY_ID';     // Microsoft Clarity

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
      <head>
        {/* Preconnect hints for third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" />

        {/* Google Tag Manager */}
        {GTM_ID !== 'GTM-XXXXXXX' && (
          <Script id="gtm" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
          `}</Script>
        )}

        {/* Google Analytics 4 (standalone fallback if GTM not set) */}
        {GA4_ID !== 'G-XXXXXXXXXX' && GTM_ID === 'GTM-XXXXXXX' && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','${GA4_ID}');
            `}</Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {CLARITY_ID !== 'YOUR_CLARITY_ID' && (
          <Script id="clarity" strategy="afterInteractive">{`
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${CLARITY_ID}");
          `}</Script>
        )}
      </head>
      <body>
        {/* GTM noscript fallback */}
        {GTM_ID !== 'GTM-XXXXXXX' && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-[1000] bg-primary text-on-primary px-4 py-2 rounded">Skip to content</a>
        {children}
        <CustomCursor />
        <StickyCTA />
      </body>
    </html>
  );
}
