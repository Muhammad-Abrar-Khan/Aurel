export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  tag: string;
  price: string;
  priceNumber: number;
  excerpt: string;
  description: string;
  highlights: string[];
  features: string[];
  specs: Record<string, string>;
  images: string[];
  gallery: string[];
  featured: boolean;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
};

export const products: Product[] = [
  {
    id: 'executive-wallet',
    slug: 'executive-wallet',
    name: 'Executive Wallet',
    category: 'Wallets',
    tag: 'Best Seller',
    price: 'PKR 2,800',
    priceNumber: 2800,
    excerpt: 'Full-grain leather wallet crafted for corporate prestige and daily refinement.',
    description:
      'Aurel Leather executive wallets are designed for premium corporate gifting. Each piece is finished in Pakistan with soft matte leather, polished edges, and an embossed logo panel tucked into a bespoke presentation box.',
    highlights: ['Full-grain leather', '8+ card capacity', 'Embossed corporate branding'],
    features: ['Premium leather interior', 'Custom foil stamping', 'Gift-ready packaging'],
    specs: {
      Material: 'Full-grain cowhide leather',
      Capacity: '8 card slots + bill compartment',
      Finish: 'Matte soft touch',
      Dimensions: '11.5 × 9 × 1.5 cm',
      MOQ: '50 units',
    },
    images: ['/assets/premium-leather-wallet-bulk.webp', '/assets/card-holder-branded-bulk.webp'],
    gallery: ['/assets/premium-leather-wallet-bulk.webp', '/assets/card-holder-branded-bulk.webp', '/assets/corporate-gift-set-pakistan.webp'],
    featured: true,
    published: true,
    seoTitle: 'Executive Leather Wallet | Aurel Leather',
    seoDescription: 'Premium executive leather wallet for corporate gifting. Full-grain construction, premium finish, and bespoke branding options.',
  },
  {
    id: 'card-holder',
    slug: 'card-holder',
    name: 'Signature Card Holder',
    category: 'Card Holders',
    tag: 'Slim Design',
    price: 'PKR 1,450',
    priceNumber: 1450,
    excerpt: 'Minimalist leather card holder engineered for corporate gifting and executive essentials.',
    description:
      'Aurel Leather’s signature card holder blends slim form with premium feel. Designed for executive pockets and branded corporate suites, it integrates subtle embossing with durable leather construction.',
    highlights: ['Ultra-slim profile', '8–12 card capacity', 'Custom logo options'],
    features: ['Precision stitching', 'RFID-safe option', 'Personalized embossing'],
    specs: {
      Material: 'Full-grain leather',
      Capacity: '8–12 cards',
      Finish: 'Soft touch matte',
      Dimensions: '10.5 × 7.5 × 1 cm',
      MOQ: '100 units',
    },
    images: ['/assets/card-holder-branded-bulk.webp', '/assets/premium-leather-wallet-bulk.webp'],
    gallery: ['/assets/card-holder-branded-bulk.webp', '/assets/premium-leather-wallet-bulk.webp'],
    featured: true,
    published: true,
    seoTitle: 'Signature Card Holder | Aurel Leather',
    seoDescription: 'Slim executive card holder for corporate gifts. Luxury leather, custom embossing, and premium presentation boxes.',
  },
  {
    id: 'gift-set',
    slug: 'executive-gift-set',
    name: 'Executive Gift Set',
    category: 'Executive Gift Sets',
    tag: 'Corporate Edition',
    price: 'PKR 7,500',
    priceNumber: 7500,
    excerpt: 'Curated executive gift set with wallet, notebook and premium presentation.',
    description:
      'Our executive gift set is built for corporate recognition and luxury hospitality. Each kit is assembled with a handcrafted wallet, leather notebook, and branded packaging that reflects the highest standards.',
    highlights: ['Curated leather kit', 'Luxury gift box', 'Bespoke branding options'],
    features: ['Custom box inserts', 'Matching leather palette', 'Premium presentation'],
    specs: {
      Material: 'Full-grain leather & suede details',
      Components: 'Wallet, notebook, gift box',
      Finish: 'Matte, gold-accent details',
      Dimensions: 'Package 27 × 19 × 6 cm',
      MOQ: '30 units',
    },
    images: ['/assets/corporate-gift-set-pakistan.webp', '/assets/executive-notebook-embossed.webp'],
    gallery: ['/assets/corporate-gift-set-pakistan.webp', '/assets/executive-notebook-embossed.webp', '/assets/premium-leather-wallet-bulk.webp'],
    featured: true,
    published: true,
    seoTitle: 'Executive Gift Set | Aurel Leather',
    seoDescription: 'Luxury corporate gift set with wallet and notebook. Premium leather, branded presentation, and bulk corporate fulfillment.',
  },
  {
    id: 'notebook',
    slug: 'leather-notebook',
    name: 'Leather Notebook',
    category: 'Notebook Covers',
    tag: 'Premium Craft',
    price: 'PKR 3,900',
    priceNumber: 3900,
    excerpt: 'Handcrafted leather notebook for executive gifting and branded stationery.',
    description:
      'This leather notebook is a refined companion for boardrooms and executive sessions. Crafted with fine stitching, a card-pocket interior, and an optional logo embossing treatment for corporate programs.',
    highlights: ['Refillable design', 'Custom inner pages', 'Soft leather cover'],
    features: ['Pen loop', 'Card slot', 'Embossed branding'],
    specs: {
      Material: 'Premium leather cover',
      Size: 'A5',
      Pages: '80 ivory pages',
      Finish: 'Soft-touch matte',
      MOQ: '50 units',
    },
    images: ['/assets/executive-notebook-embossed.webp', '/assets/corporate-gift-set-pakistan.webp'],
    gallery: ['/assets/executive-notebook-embossed.webp', '/assets/corporate-gift-set-pakistan.webp'],
    featured: false,
    published: true,
    seoTitle: 'Leather Notebook | Aurel Leather',
    seoDescription: 'Executive leather notebook for branded corporate gifting. Handcrafted cover, refillable interior, and premium finishing.',
  },
  {
    id: 'pen-case',
    slug: 'pen-case',
    name: 'Executive Pen Case',
    category: 'Desk Accessories',
    tag: 'Desk Essential',
    price: 'PKR 2,100',
    priceNumber: 2100,
    excerpt: 'Leather pen case designed for corporate presentations and executive desk styling.',
    description:
      'Aurel Leather’s pen case is a polished accent for premium stationery. It pairs perfectly with branded pens and corporate gift ensembles, offering a streamlined leather finish with soft interior protection.',
    highlights: ['Protective suede lining', 'Premium leather shell', 'Corporate engraving option'],
    features: ['Soft interior', 'Magnetic flap', 'Compact form'],
    specs: {
      Material: 'Full-grain leather',
      Capacity: '2 pens',
      Finish: 'Matte',
      Dimensions: '18 × 4 × 3 cm',
      MOQ: '50 units',
    },
    images: ['/assets/premium-leather-wallet-bulk.webp', '/assets/packaging-close-up.webp'],
    gallery: ['/assets/premium-leather-wallet-bulk.webp', '/assets/packaging-close-up.webp'],
    featured: false,
    published: true,
    seoTitle: 'Executive Pen Case | Aurel Leather',
    seoDescription: 'Premium leather pen case for corporate gifting and executive desk accessories.',
  },
];

export const categories = [
  { key: 'All', label: 'All' },
  { key: 'Wallets', label: 'Wallets' },
  { key: 'Card Holders', label: 'Card Holders' },
  { key: 'Notebook Covers', label: 'Notebook Covers' },
  { key: 'Passport Holders', label: 'Passport Holders' },
  { key: 'Document Holders', label: 'Document Holders' },
  { key: 'Executive Gift Sets', label: 'Executive Gift Sets' },
  { key: 'Travel Accessories', label: 'Travel Accessories' },
  { key: 'Desk Accessories', label: 'Desk Accessories' },
  { key: 'Corporate Kits', label: 'Corporate Kits' },
  { key: 'Custom Projects', label: 'Custom Projects' },
];

export function getAllProducts() {
  return products.filter((product) => product.published);
}

export function getFeaturedProducts() {
  return getAllProducts().filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug) ?? null;
}

export function getProductsByCategory(category: string) {
  return category === 'All'
    ? getAllProducts()
    : getAllProducts().filter((product) => product.category === category);
}

export function getRelatedProducts(slug: string) {
  const product = getProductBySlug(slug);
  if (!product) return getFeaturedProducts().slice(0, 3);
  return getAllProducts()
    .filter((item) => item.slug !== slug)
    .filter((item) => item.category === product.category)
    .slice(0, 3);
}

export function getProductSlugs() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}
