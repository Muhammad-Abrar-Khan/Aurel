# PRODUCTION DEPLOYMENT GUIDE

## Overview
Aurel Leather is a production-ready Next.js 15 static export site deployed on Firebase Hosting. All optimizations are configured for Lighthouse 90+/95+/100 scores.

## Technology Stack
- **Framework**: Next.js 15.5.18 (App Router, Static Export)
- **Styling**: Tailwind CSS 3.4.1
- **Animation**: motion/react 11.11.10
- **3D Rendering**: Three.js 191+, @react-three/fiber
- **Deployment**: Firebase Hosting
- **Domain**: https://aurel-app-3498d.web.app
- **TypeScript**: Enabled

## Pre-Deployment Checklist

### Code Quality
- [ ] `npm run build` succeeds without errors
- [ ] `npm run type-check` passes (if available)
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings reviewed
- [ ] No console.error or console.warn in production

### Performance
- [ ] Lighthouse score: >= 90 (Performance)
- [ ] Lighthouse score: >= 95 (Accessibility)
- [ ] Lighthouse score: >= 95 (Best Practices)
- [ ] Lighthouse score: >= 95 (SEO)
- [ ] Core Web Vitals green on PageSpeed Insights
- [ ] LCP < 2.5s, FID < 100ms, CLS < 0.1

### SEO & Metadata
- [ ] All pages have title and description metadata
- [ ] OpenGraph images configured for social sharing
- [ ] Twitter card metadata present
- [ ] JSON-LD schemas validated
- [ ] sitemap.xml covers all routes
- [ ] robots.txt allows crawling
- [ ] llms.txt present for AI indexing
- [ ] Canonical URLs configured

### Security
- [ ] No hardcoded secrets in code
- [ ] Environment variables configured in Firebase
- [ ] HTTPS enforced (automatic with Firebase)
- [ ] Security headers configured in firebase.json
- [ ] CORS policies reviewed if API calls present

### Content
- [ ] All product images optimized (WebP/AVIF)
- [ ] Hero background image compressed
- [ ] No missing alt text on images
- [ ] Links tested (internal and external)
- [ ] Forms validated and working
- [ ] WhatsApp link formatted correctly

## Build and Deploy Steps

### 1. Local Build and Test
```bash
# Install dependencies
npm install

# Build production bundle
npm run build

# Test the static output locally (optional)
npx serve out
```

### 2. Firebase Deployment
```bash
# Login to Firebase (one-time setup)
firebase login

# Deploy to production
firebase deploy --only hosting

# View deployment history
firebase hosting:versions:list
```

### 3. Post-Deployment Verification
```bash
# Open the deployed site
open https://aurel-app-3498d.web.app

# Run Lighthouse audit
npx lighthouse https://aurel-app-3498d.web.app --view

# Check Core Web Vitals
# PageSpeed Insights: https://pagespeed.web.dev/
```

### 4. Submit to Search Engines
- [ ] Google Search Console: https://search.google.com/search-console
- [ ] Bing Webmaster Tools: https://www.bing.com/webmasters
- [ ] Submit sitemap.xml
- [ ] Check indexing status
- [ ] Request crawl of homepage

## Production Configuration

### Environment Variables
```
NEXT_PUBLIC_APP_URL=https://aurel-app-3498d.web.app
NEXT_PUBLIC_WHATSAPP_NUMBER=923323632052
```

### Firebase Hosting (firebase.json)
- Static asset caching: 1 year (immutable)
- HTML caching: 1 hour (must-revalidate)
- Security headers: CSP, X-Frame-Options, X-Content-Type-Options
- Rewrites configured for Next.js SPA routing

### Caching Strategy
- **JS/CSS**: Cache-Control: public, max-age=31536000, immutable
- **Images**: Cache-Control: public, max-age=31536000, immutable
- **HTML**: Cache-Control: public, max-age=3600, must-revalidate
- **XML**: Cache-Control: public, max-age=86400

## Performance Optimizations

### Image Optimization
- Next.js Image component with srcSet (400w, 800w, 1200w)
- WebP/AVIF format with fallback
- Lazy loading for below-fold images
- Priority flag for hero images

### Code Splitting
- ProductAssembly3D: Dynamic import with ssr:false
- Heavy components: Lazy loaded at viewport intersection
- Next.js automatic code splitting for routes

### 3D Rendering (Three.js)
- frameloop='demand' (render only on interaction)
- dpr=[1, Math.min(1.25, dpr)] for adaptive DPI
- gl={{ powerPreference: 'low-power' }}
- Mobile/reduced-motion fallback to static image
- Texture resolution: max 2048px
- Material count: limited to 5-7 per scene

### Animation
- motion/react with usePrefersReducedMotion respect
- Reduced motion: disable animations, show static content
- Scroll animations: optimized with useTransform
- Floating animations: limited to 3s cycles

## Monitoring and Maintenance

### Weekly
- [ ] Check Firebase Console for errors/performance
- [ ] Monitor Core Web Vitals in PageSpeed Insights
- [ ] Review Google Search Console for indexing issues
- [ ] Check Analytics for traffic patterns

### Monthly
- [ ] Run Lighthouse audit
- [ ] Review 404 errors in Search Console
- [ ] Update sitemaps if content changes
- [ ] Check social media links (Instagram, WhatsApp)

### Quarterly
- [ ] Security audit of dependencies
- [ ] Performance review and optimization
- [ ] A/B test conversion optimization
- [ ] Review customer feedback

## Rollback Procedure

If issues occur after deployment:

```bash
# View deployment history
firebase hosting:versions:list

# Promote previous version
firebase hosting:clone <SOURCE_SITE_ID> <DEST_SITE_ID>

# Or manually rollback in Firebase Console
# Hosting > Deployments > Select previous version > Finalize
```

## Common Issues and Solutions

### Lighthouse Score Below Target
1. Check images: ensure all are optimized
2. Check bundle size: `npm run build` output
3. Disable animations in DevTools > Rendering > Paint flashing
4. Reduce animation complexity in Hero component
5. Enable HTTP/2 Server Push in Firebase (automatic)

### Core Web Vitals Issues
- **LCP > 2.5s**: Optimize hero image, remove layout shifts
- **FID > 100ms**: Reduce JavaScript, use code splitting
- **CLS > 0.1**: Add explicit width/height to images

### SEO Issues
1. Check robots.txt: `curl https://aurel-app-3498d.web.app/robots.txt`
2. Validate sitemap: `curl https://aurel-app-3498d.web.app/sitemap.xml`
3. Check schema: Use Google Rich Results Test
4. Verify mobile-friendly: Mobile Friendly Test

## Emergency Contacts
- Developer: @Muhammad-Abrar-Khan
- Firebase Support: https://firebase.google.com/support
- Domain Registrar: (configured separately)

## Version History
- v1.0.0: Initial production launch (Phase 0-3 complete)
  - Full Next.js App Router migration
  - AI/SEO optimization (llms.txt, schemas)
  - Luxury UI/UX refinement
  - Production caching and security headers
  - Lighthouse 90+/95+/100 target configuration
