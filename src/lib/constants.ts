export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://aurelleatherpk.web.app';
export const COMPANY_NAME = 'Aurel';
export const COMPANY_NAME_FULL = 'AUREL LEATHER';
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923323632052';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL_ADDRESS = 'hello.aurel.pk@gmail.com';
export const INTERNAL_EMAIL = 'aurel.pk@outlook.com';

// Brand colors
export const COLORS = {
  background: '#1A1917',
  surface: '#2A2825',
  gold: '#C9A96E',
  cream: '#F0EDE8',
  leather: '#7C6B52',
} as const;

// Product data
export const PRODUCTS = [
  {
    id: 'wallet',
    name: 'Executive Wallet',
    description: 'Full-grain leather bifold wallet with 6 card slots. Logo embossing available.',
    price: { low: 1200, high: 1400 },
    moq: 50,
    tiers: [
      { min: 50, max: 99, price: 1400 },
      { min: 100, max: 499, price: 1200 },
    ],
  },
  {
    id: 'cardholder',
    name: 'Card Holder',
    description: 'Slim full-grain cardholder, 8–12 card capacity. Heat or laser embossing.',
    price: { low: 650, high: 750 },
    moq: 50,
    tiers: [
      { min: 50, max: 99, price: 750 },
      { min: 100, max: 499, price: 650 },
    ],
  },
  {
    id: 'notebook',
    name: 'Leather Notebook',
    description: 'A5 refillable leather-bound notebook with pen loop and card pocket.',
    price: { low: 950, high: 1100 },
    moq: 50,
    tiers: [
      { min: 50, max: 99, price: 1100 },
      { min: 100, max: 499, price: 950 },
    ],
  },
  {
    id: 'giftset',
    name: 'Executive Gift Set',
    description: 'Curated set — wallet + notebook + cardholder in premium rigid gift box.',
    price: null, // Custom quote
    moq: 50,
    badge: 'Most Ordered',
  },
] as const;

// Contact
export const CONTACT = {
  whatsapp: '923323632052',
  email: 'hello.aurel.pk@gmail.com',
  internalEmail: 'aurel.pk@outlook.com',
  location: 'Karachi, Pakistan',
  hours: 'Mon–Sat, 9 AM – 7 PM PKT',
  responseTime: '2 hours',
} as const;

// Production specs
export const PRODUCTION = {
  moq: 50,
  turnaround: '7–14 days',
  turnaroundExpress: '3–5 days (premium)',
} as const;
