# AUREL LEATHER

Premium leather corporate gifting website — enterprise-grade manufacturing with artisanal finish. Built with Next.js 15, Tailwind CSS, Three.js, and deployed on Firebase Hosting.

## Quick Links
- **Live Site**: https://aurel-app-3498d.web.app
- **Production Deployment Guide**: [PRODUCTION_DEPLOYMENT_GUIDE.md](./PRODUCTION_DEPLOYMENT_GUIDE.md)
- **GitHub**: https://github.com/Muhammad-Abrar-Khan/Aurel
- **Contact**: info@aurel.pk | WhatsApp: +92 332 3632052

## Technology Stack
- **Frontend**: Next.js 15.5.18 (App Router, Static Export)
- **Styling**: Tailwind CSS 3.4.1 (Premium color system)
- **Animation**: motion/react 11.11.10 (Accessibility-first)
- **3D**: Three.js 191+, @react-three/fiber, @react-three/drei
- **Hosting**: Firebase Hosting (Static, Global CDN)
- **Language**: TypeScript 5.x

## Local Development

**Prerequisites**: Node.js 18+ and npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Build & Deployment

### Production Build
```bash
npm run build  # Generates optimized static export in out/
```

### Firebase Deployment
```bash
firebase login                    # One-time authentication
firebase deploy --only hosting    # Deploy to production
```

### Verify Deployment
```bash
open https://aurel-app-3498d.web.app
npx lighthouse https://aurel-app-3498d.web.app
```

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with global metadata
│   ├── page.tsx                 # Homepage
│   ├── [routes]/page.tsx        # Product/service pages
│   ├── robots.txt/route.ts      # SEO robots
│   ├── sitemap.xml/route.ts     # Dynamic sitemap
├── src/
│   ├── components/              # React components
│   ├── lib/                      # Utilities (schemas, hooks, performance)
│   ├── utils/                    # Helper functions
│   └── index.css                # Global Tailwind + custom styles
├── public/                       # Static assets
│   ├── assets/                  # Images, 3D models
│   ├── llms.txt                 # AI indexing metadata
│   └── .well-known/security.txt # Security policy
├── firebase.json                # Firebase config (caching, headers)
├── next.config.mjs              # Next.js config (static export)
└── tsconfig.json                # TypeScript config
```

## Key Features

### ✨ Premium Branding
- Luxury color system (gold, cream, dark brown)
- Typography hierarchy (Cormorant Garamond + DM Sans)
- Refined whitespace and spacing
- Minimal, elegant animations

### 🎯 SEO & Discovery
- JSON-LD schemas (Organization, LocalBusiness, Product, FAQ, Breadcrumb)
- Comprehensive metadata on all pages
- sitemap.xml with proper priorities
- robots.txt for all crawlers
- llms.txt for AI model indexing
- OpenGraph & Twitter cards

### ⚡ Performance
- Lighthouse 90+ (Performance, Accessibility, SEO)
- Static site generation (zero runtime overhead)
- Image optimization (WebP, AVIF, responsive sizes)
- Code splitting (lazy loading for 3D)
- Firebase global CDN (milliseconds latency)

### 🎨 3D Interactive
- Three.js 3D product assembly
- Optimized for mobile (auto-fallback to static image)
- Respects prefers-reduced-motion
- frameloop='demand' (render on-demand)

### ♿ Accessibility
- WCAG 2.1 AA compliance
- Focus management for keyboard navigation
- ARIA labels on interactive elements
- Reduced motion support

## Pages

| Route | Purpose | Metadata |
|-------|---------|----------|
| `/` | Homepage | Full company overview + collections |
| `/wallets` | Premium wallet collection | Product showcase + FAQ |
| `/cardholders` | Card holder products | Features + CTAs |
| `/corporate-gifting` | B2B gifting solutions | Use cases + schema |
| `/customization` | Custom branding options | Capabilities + process |
| `/about` | Company story | History + team + values |
| `/contact` | Contact information | Form + map + schema |
| `/robots.txt` | SEO robots policy | Dynamic route |
| `/sitemap.xml` | XML sitemap | Dynamic route |

## Environment Variables

```
NEXT_PUBLIC_APP_URL=https://aurel-app-3498d.web.app
NEXT_PUBLIC_WHATSAPP_NUMBER=923323632052
```

## Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Create production build
npm run start            # Run production build locally
npm run lint             # TypeScript type checking
npm run type-check       # Verify all types
```

## Firebase Configuration

### firebase.json Features
- **Caching**: 1-year immutable for JS/CSS/images, 1-hour for HTML
- **Security Headers**: CSP, X-Frame-Options, X-Content-Type-Options
- **Redirects**: /instagram → Instagram, /whatsapp → WhatsApp
- **Rewrites**: All routes to index.html for SPA routing

### Deployment Steps
```bash
firebase login                      # Authenticate
firebase use aurel-app-3498d        # Select project
npm run build && firebase deploy    # Build & deploy
```

## Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | >= 90 | ✓ |
| Lighthouse Accessibility | >= 95 | ✓ |
| Lighthouse SEO | >= 95 | ✓ |
| LCP (Largest Contentful Paint) | < 2.5s | ✓ |
| FID (First Input Delay) | < 100ms | ✓ |
| CLS (Cumulative Layout Shift) | < 0.1 | ✓ |

## Production Deployment

For detailed deployment instructions, security checklists, and troubleshooting, see [PRODUCTION_DEPLOYMENT_GUIDE.md](./PRODUCTION_DEPLOYMENT_GUIDE.md).

### Quick Checklist
- [ ] `npm run build` succeeds
- [ ] Lighthouse scores >= target
- [ ] All links tested
- [ ] SEO metadata verified
- [ ] WhatsApp number correct
- [ ] Firebase deployed
- [ ] Search Console updated

## Contact & Support

- **Email**: info@aurel.pk
- **WhatsApp**: +92 332 3632052
- **Instagram**: [@aurelpk](https://instagram.com/aurelpk)
- **Location**: Karachi, Pakistan

## License

© 2024 Aurel Leather. All rights reserved.

