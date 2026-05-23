# AUREL LEATHER — Project README & Single Guide

This repository contains the Aurel Leather luxury corporate gifting frontend built with Next.js (App Router), TypeScript, Tailwind CSS, and Three.js. This README is the single source of documentation — redundant guides have been consolidated.

## Quick Links
- Live: https://aurel-app-3498d.web.app
- GitHub: https://github.com/Muhammad-Abrar-Khan/Aurel
- Contact: info@aurel.pk | WhatsApp: +92 332 3632052

## What changed (this cleanup)
- Added `ignoreDeprecations: "6.0"` to `tsconfig.json` to silence the baseUrl deprecation warning for TS6 migration.
- Consolidated existing guides into this single README and removed redundant docs (implementation, audit, production guides moved here).

## Quick Start

Prereqs: Node.js 18+, npm

```bash
npm install
npm run dev          # local dev server
npm run build        # production build
npm run lint         # TypeScript type checking
```

Open http://localhost:3000

## Project Overview (short)
- Frontend: Next.js 15 (App Router)
- Styling: Tailwind CSS
- 3D: three.js + @react-three/fiber + @react-three/drei
- Hosting: Firebase Hosting (static export)
- Language: TypeScript

## Consolidated Deployment & Maintenance (short)
- Build: `npm run build` → static export in `out/`
- Deploy: `firebase deploy --only hosting` (configure project with `firebase use`)
- Verify: run Lighthouse and check Core Web Vitals

## Professional Git & CI workflow (recommended, free)

- Branching: use `main` for production, create feature branches `feature/xxx` or `fix/xxx`.
- Commits: use clear commits, eg `feat(products): add product schema`.
- Pull Requests: open PRs for all changes, use PR templates and require at least one review.
- Protected branches: enable required status checks (typecheck, lint, tests) on GitHub.
- CI: Use GitHub Actions (free) with workflows:
	- `ci.yml`: run `npm ci`, `npm run lint`, `npm run build` on PRs.
	- `deploy.yml`: on merge to `main`, run `npm run build` and `firebase deploy` (use secrets for Firebase token).
- Hooks: use `husky` + `lint-staged` to run `npm run lint` and formatters before commit.

Example CI job (GitHub Actions):
```yaml
name: CI
on: [pull_request]
jobs:
	build:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- name: Setup Node
				uses: actions/setup-node@v4
				with: { node-version: 18 }
			- run: npm ci
			- run: npm run lint
			- run: npm run build

```

## Free tools & services (suggested)
- CI/CD: GitHub Actions (free tiers)
- Static hosting: Firebase Hosting, Netlify, or Vercel (free tiers)
- Monitoring: Sentry (free tier) or LogRocket trial; Plausible or Google Analytics for analytics
- Code review & security: Dependabot (built-in), GitHub Code Scanning (CodeQL)
- Local dev: VS Code with ESLint + Prettier (free extensions), GitHub CLI (`gh`) for PR management
- LLM tooling: Claude, Anthropic (as you plan), plus free community tools and VS Code extensions

## What we've added so far (high level)
- Next.js App Router with TypeScript + Tailwind
- Product data model and SSG (`app/products/[slug]`) with JSON-LD
- 3D hero and assembly scenes (react-three-fiber + drei) with performance fallbacks
- Admin area skeleton: `/admin/login`, `/admin/dashboard`, `/admin/products`, `/admin/cms`
- Product list, collections, product detail pages and metadata
- Asset optimization pipeline and WebP variants (scripts + `optimize:assets`)
- Lead capture form and WhatsApp deep-link flow
- SEO schemas and `llms.txt` for AI indexing

## Files removed (consolidated into this README)
- `ASSETS.md`, `AUDIT_REPORT.md`, `IMPLEMENTATION_GUIDE.md`, `PRODUCTION_DEPLOYMENT_GUIDE.md`, `TRANSFORMATION_SUMMARY.md`

## Next recommended steps (short)
1. Visual QA across devices and browsers
2. Wire backend: CRM (Pipedrive/HubSpot) + database (Supabase) + transactional email
3. Add GitHub Actions CI with build + lint checks and protected branches
4. Run Lighthouse and iterate on performance
5. Add monitoring (Sentry) and analytics

## Contact & support
- Email: info@aurel.pk
- WhatsApp: +92 332 3632052

---

If you want, I can push a GitHub Actions workflow, add a PR template, and commit these doc deletions and the tsconfig change to a feature branch and open a PR with best-practice checks. Tell me if you want that and which CI provider you'd prefer.

