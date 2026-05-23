/**
 * Performance Optimization Checklist for Production
 */

export const performanceOptimizations = {
  imageOptimization: {
    description: "Next.js Image component with responsive sizes and modern formats",
    items: [
      "✓ Use next/image for all product/hero images",
      "✓ Set srcSet with 400w, 800w, 1200w breakpoints",
      "✓ Use WebP/AVIF formats with fallback",
      "✓ Set priority=true only for above-fold images (Hero, TrustBar)",
      "✓ Lazy load below-fold images (ProductAssembly with dynamic import)",
      "✓ Set explicit width/height to prevent layout shift"
    ]
  },

  bundleOptimization: {
    description: "Code splitting and lazy loading",
    items: [
      "✓ ProductAssembly3D: dynamic import with ssr: false",
      "✓ LeadModal: dynamic import for contact forms",
      "✓ Heavy components: Consider lazy loading at viewport intersection",
      "✓ Remove unused dependencies from package.json",
      "✓ Minify CSS/JS in production builds"
    ]
  },

  renderingOptimization: {
    description: "Canvas and 3D rendering performance",
    items: [
      "✓ frameloop='demand' in Canvas (render only on interaction)",
      "✓ dpr=[1, Math.min(1.25, devicePixelRatio)] for adaptive DPI",
      "✓ gl={{ powerPreference: 'low-power' }} for battery savings",
      "✓ antialias: false for faster rendering",
      "✓ Texture resolution: max 2048px for wallets/notebooks",
      "✓ Material count: limit to 5-7 per scene",
      "✓ Float speed: 1.2 (reduced from 3)",
      "✓ Mobile/reduced-motion fallback to static image"
    ]
  },

  metaAndSeo: {
    description: "Metadata, schemas, and search optimization",
    items: [
      "✓ All pages have title/description metadata",
      "✓ OpenGraph and Twitter cards configured",
      "✓ JSON-LD Organization, LocalBusiness, BreadcrumbList",
      "✓ FAQ schema on /about, /corporate-gifting, /customization",
      "✓ Product schema on collection pages",
      "✓ robots.txt allows all crawlers",
      "✓ sitemap.xml includes all pages",
      "✓ llms.txt for AI indexing"
    ]
  },

  coreWebVitals: {
    description: "Core Web Vitals targets",
    items: [
      "LCP (Largest Contentful Paint): < 2.5s",
      "FID (First Input Delay): < 100ms (Interaction to Next Paint)",
      "CLS (Cumulative Layout Shift): < 0.1",
      "TTFB (Time to First Byte): < 600ms",
      "FCP (First Contentful Paint): < 1.8s"
    ],
    tools: [
      "PageSpeed Insights: https://pagespeed.web.dev/",
      "Lighthouse CLI: npx lighthouse https://aurel-app-3498d.web.app",
      "WebPageTest: https://webpagetest.org/"
    ]
  },

  cachingStrategy: {
    description: "Browser and CDN caching",
    items: [
      "✓ firebase.json: maxAge for static assets (1 year)",
      "✓ Cache headers for images: Cache-Control: public, max-age=31536000",
      "✓ Cache headers for HTML: Cache-Control: public, max-age=3600",
      "✓ Service Worker: optional for offline support",
      "✓ Preload critical fonts"
    ]
  },

  securityHeaders: {
    description: "Security best practices",
    items: [
      "✓ Content-Security-Policy for inline scripts",
      "✓ X-Content-Type-Options: nosniff",
      "✓ X-Frame-Options: DENY",
      "✓ X-XSS-Protection: 1; mode=block",
      "✓ Referrer-Policy: strict-origin-when-cross-origin",
      "✓ Permissions-Policy: restrict sensitive features"
    ]
  },

  firebaseOptimization: {
    description: "Firebase Hosting configuration",
    items: [
      "✓ Automatic CDN caching enabled",
      "✓ Gzip compression on by default",
      "✓ Global edge locations for fast delivery",
      "✓ HTTPS enforced for all traffic",
      "✓ HTTP/2 Server Push configured"
    ]
  },

  lighthouseTargets: {
    performance: ">= 90",
    accessibility: ">= 95",
    bestPractices: ">= 95",
    seo: ">= 95",
    pwa: ">= 90"
  }
};

export const buildAndDeploymentSteps = [
  "1. npm run build (generates Next.js static export in out/)",
  "2. npm run test (if test suite exists)",
  "3. firebase deploy --only hosting (deploy to Firebase)",
  "4. Verify deployment: https://aurel-app-3498d.web.app",
  "5. Run Lighthouse audit: npx lighthouse https://aurel-app-3498d.web.app",
  "6. Check Core Web Vitals: PageSpeed Insights",
  "7. Monitor Firebase Analytics (if configured)"
];
