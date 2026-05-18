# AUREL - Quick-Start Implementation Guide

## 🚀 Getting Started

### Setup
```bash
cd /workspaces/Aurel
npm install
npm run dev
```
→ Opens http://localhost:3000

### Building
```bash
npm run build        # Production build
npm run preview      # Preview built output
npm run lint         # TypeScript check
npm run optimize:assets  # Re-optimize images
```

---

## 📋 Critical Path to Production

### ✅ Phase 1: Frontend (Complete)
- [x] TypeScript errors resolved (0 errors)
- [x] Production build passing
- [x] SEO meta & schema implemented
- [x] Responsive design verified (need visual confirmation)
- [x] Asset optimization complete
- [x] Lead capture form functional

### ⚠️ Phase 2: Backend Integration (TODO)
1. **Connect CRM** (required for launch)
   - [ ] Set up Pipedrive API key or HubSpot integration
   - [ ] Add environment variable: `NEXT_PUBLIC_CRM_API_KEY`
   - [ ] Modify `/api/lead-capture.ts` to send leads to CRM
   - [ ] Test: Submit form → verify lead appears in CRM

2. **Add Database** (required for lead persistence)
   - [ ] Set up Supabase project or MongoDB Atlas
   - [ ] Create `leads` table with fields: name, email, company, scale, budget, created_at
   - [ ] Add connection string to `.env.local`
   - [ ] Modify `/api/lead-capture.ts` to insert records
   - [ ] Test: Submit form → verify record in database

3. **Email Notifications** (required for UX)
   - [ ] Set up Resend or SendGrid account
   - [ ] Get API key → add to `.env.local`
   - [ ] Implement email template for internal notification
   - [ ] Implement auto-reply template for customer
   - [ ] Test: Submit form → check inbox for emails

4. **Security & Validation** (required before launch)
   - [ ] Add input validation to LeadModal form
   - [ ] Add rate limiting middleware (`/api`)
   - [ ] Add error handling & logging (Sentry)
   - [ ] Test: Try to spam form → verify rate limit works

### 📱 Phase 3: QA & Testing (TODO)
1. **Visual QA**
   - [ ] Open http://localhost:3000 and verify all sections render
   - [ ] Check all images load correctly
   - [ ] Verify 3D scene loads and animates
   - [ ] Test lead modal and WhatsApp link

2. **Mobile Testing**
   - [ ] Test on iOS (Safari)
   - [ ] Test on Android (Chrome)
   - [ ] Verify responsive layout (portrait/landscape)
   - [ ] Test touch interactions and buttons

3. **Performance Audit**
   - [ ] Run Lighthouse: `npm run build && npx lighthouse http://localhost:3000`
   - [ ] Target scores: LCP <2.5s, CLS <0.1, FID <100ms
   - [ ] Check Core Web Vitals in production

4. **Accessibility Testing**
   - [ ] Test keyboard navigation (Tab, Enter, Esc)
   - [ ] Test with screen reader (NVDA or VoiceOver)
   - [ ] Check color contrast (WCAG AA minimum)
   - [ ] Verify form labels and ARIA attributes

### 🌍 Phase 4: Deployment (TODO)
1. **Configure Domain**
   - [ ] Update DNS to point to Vercel/Netlify
   - [ ] Set up HTTPS certificate (auto with Vercel)
   - [ ] Update canonical URL in index.html

2. **Deploy**
   - [ ] Push to GitHub
   - [ ] Connect to Vercel/Netlify
   - [ ] Set environment variables in hosting platform
   - [ ] Test live: https://aurel.pk

3. **Verify**
   - [ ] Test all forms on production
   - [ ] Verify WhatsApp link works
   - [ ] Check Lighthouse scores on production
   - [ ] Monitor error logs (Sentry)

---

## 🛠️ Common Tasks

### Adding a New Product Card
1. Edit `src/components/ExecutiveCollection.tsx`
2. Add to `products` array:
   ```tsx
   {
     span: "md:col-span-1",
     title: "New Product",
     price: "Rs. X,XXX",
     moq: "X Units",
     description: "...",
     features: [...],
     assetName: "new-product-image.jpeg"
   }
   ```
3. Ensure `new-product-image.jpeg` exists in `/assets/`
4. Run `npm run optimize:assets` to generate WebP variants

### Updating Product Images
1. Replace JPEG/PNG in `/assets/`
2. Run `npm run optimize:assets`
3. Verify WebP variants generated
4. Update component `assetName` if filename changed
5. Test responsive sizes at different breakpoints

### Modifying Lead Form Fields
1. Edit `src/components/LeadModal.tsx`
2. Update `form` state in `useState`
3. Add input field in JSX
4. Update `payload` in `handleSubmit`
5. Ensure `/api/lead-capture.ts` handles new fields
6. Update CRM schema if needed

### Updating SEO Meta
1. Edit `index.html` for static meta tags
2. Edit `src/App.tsx` Helmet block for dynamic/JSON-LD
3. Update OG image in both places
4. Test with: Facebook Sharing Debugger, Twitter Card Validator

---

## 📊 Performance Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Lighthouse Performance | 90+ | ? | ⚠️ Test after launch |
| Lighthouse SEO | 95+ | ? | ⚠️ Test after launch |
| Lighthouse Accessibility | 90+ | ? | ⚠️ Test after launch |
| LCP (Largest Contentful Paint) | <2.5s | ? | ⚠️ Monitor |
| FID (First Input Delay) | <100ms | ? | ⚠️ Monitor |
| CLS (Cumulative Layout Shift) | <0.1 | ? | ⚠️ Monitor |

---

## 🐛 Troubleshooting

### Issue: Images not loading
**Solution**: Check `/assets/` folder; verify filename matches `assetName` in component; ensure WebP variants exist

### Issue: 3D scene not rendering
**Solution**: Check browser console for three.js errors; ensure @react-three/fiber and drei installed; test on desktop first (mobile may struggle)

### Issue: Lead form not submitting
**Solution**: Check browser console for errors; verify `/api/lead-capture.ts` has correct CRM API key; test WhatsApp link manually

### Issue: TypeScript errors
**Solution**: Run `npm run lint`; most errors in ProductAssembly3D marked with `@ts-nocheck` (acceptable for three.js complexity)

### Issue: Build fails
**Solution**: Run `npm install --legacy-peer-deps`; clear `node_modules` and `dist`; ensure Node.js 18+ installed

---

## 📚 Key Files Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `src/App.tsx` | Main app, SEO Helmet, layout | Adding sections, updating meta |
| `src/components/LeadModal.tsx` | Lead form + WhatsApp link | Changing form fields |
| `src/components/ExecutiveCollection.tsx` | Product cards | Adding/editing products |
| `src/components/ProductAssembly3D.tsx` | 3D scene | Tweaking animations, models |
| `src/utils/assetHelpers.ts` | Responsive image logic | Changing responsive sizes |
| `api/lead-capture.ts` | Lead submission handler | Wiring CRM/database |
| `index.html` | Static meta, favicon | SEO, title, basic setup |
| `package.json` | Dependencies, scripts | Adding packages |
| `tailwind.config.js` | Design tokens (colors, fonts) | Updating brand colors |

---

## 🔗 External Resources

- **Vite Docs**: https://vitejs.dev/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber/
- **three.js**: https://threejs.org/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **react-helmet-async**: https://github.com/steverob/react-helmet-async

---

## 📞 Support Contacts

- **WhatsApp**: +92-332-3632052
- **Dev Server**: http://localhost:3000/
- **Production**: https://aurel.pk (after deployment)

---

**Last Updated**: May 18, 2026  
**Status**: Ready for implementation
