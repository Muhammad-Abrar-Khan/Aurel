# Aurel Leather — README

Live: https://aurel-app-3498d.web.app
Repo: https://github.com/Muhammad-Abrar-Khan/Aurel
Contact: info@aurel.pk | WhatsApp: +92 332 3632052

This README is the authoritative guide for running, developing, and deploying the Aurel Leather frontend. It describes the tech stack, local development (including GitHub Codespaces and VS Code), and exact steps to build and deploy to Firebase Hosting.

---

## Tech stack
- Next.js (App Router) v15, TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion (motion/react)
- 3D rendering: three.js + @react-three/fiber + @react-three/drei
- Hosting target: Firebase Hosting (static export)
- Tooling: ESLint, Prettier, VS Code recommended extensions

## Prerequisites
- Node.js 18 or later
- npm (or pnpm/yarn) — commands below use `npm`
- Firebase CLI (for deployment): `npm i -g firebase-tools` (optional for local/CI deploy)

## Development — locally or in GitHub Codespaces

1) Install dependencies

```bash
npm ci
```

2) Start development server

```bash
npm run dev
# Open http://localhost:3000 (Codespaces will forward port automatically)
```

GitHub Codespaces: open the repository in Codespaces or use `gh codespace create --repo` and then `gh codespace code` to connect. The `npm run dev` server will be available on the forwarded port; approve port forwarding when prompted.

VS Code (recommended extensions)
- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- TypeScript Hero / TSC helpers
- GitLens
- Antigravity (UI theme) — optional aesthetic choice
- GitHub Copilot (optional)

Tip: Use the Command Palette → “Remote-Containers: Reopen in Container” if a `.devcontainer` exists.

Using Claude or other LLMs
- Use Claude (Anthropic) or your preferred model for content suggestions, commit-message drafting, or content/SEO copy. Keep models out of CI secrets; use them locally for iterative editing.

---

## Build & static export

This project is configured to produce a static export suitable for Firebase Hosting (the Next config uses `output: 'export'`).

1) Create a production build and export static files

```bash
npm run build
```

The `build` step will run Next's build and export pipeline and produce a static `out/` directory (check project root for `out/`).

2) Preview the exported site locally

```bash
npx serve out
# or use a static file server of your choice
```

Do I need to run `npm run build` before deploying to Firebase? Yes — unless you use a CI workflow that runs `npm run build` as part of its steps. For a manual deploy from your machine, run `npm run build` to generate `out/` and then `firebase deploy`.

---

## Deploying to Firebase Hosting (manual)

1) Install and authenticate Firebase CLI (if not installed):

```bash
npm i -g firebase-tools
firebase login
```

2) Initialize hosting for the repository (only once)

```bash
firebase init hosting
# When asked for public directory, set: out
# Configure as a single-page app? No (choose "No") — this is a static export
```

3) Build and deploy

```bash
npm run build
firebase deploy --only hosting
```

Notes:
- If you prefer to deploy from CI, skip the local `firebase login` step and instead use a CI token (see GitHub Actions below).
- Confirm your `firebase.json` has `"public": "out"` under `hosting`.

---

## Deploying to Firebase from CI (GitHub Actions)

Create a CI secret `FIREBASE_TOKEN` using a token created with:

```bash
firebase login:ci
# copy token and save as repo secret FIREBASE_TOKEN
```

Example GitHub Action workflow (save as `.github/workflows/deploy.yml`):

```yaml
name: Deploy
on:
	push:
		branches: [ main ]

jobs:
	deploy:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- name: Setup Node
				uses: actions/setup-node@v4
				with:
					node-version: 18
			- name: Install dependencies
				run: npm ci
			- name: Build
				run: npm run build
			- name: Deploy to Firebase
				env:
					FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
				run: |
					npm i -g firebase-tools
					firebase deploy --Only hosting --token "$FIREBASE_TOKEN"
```

This workflow runs on push to `main`. If you want protected releases, change the trigger to `workflow_dispatch` and deploy on demand or via a release tag.

---

## Pushing changes vs local deploy
- Manual deploy: run `npm run build` locally and `firebase deploy` — no push required.
- CI deploy: push your changes and the GitHub Action will run `npm run build` and `firebase deploy` using the repo secret.

If you want a single-source-of-truth deployment from the repository, use the CI approach (recommended).

---

## Cleanup & removing useless artifacts

If the repository contains legacy docs or duplicate guides, I recommend consolidating them into this README and removing files such as `ASSETS.md`, `AUDIT_REPORT.md`, `IMPLEMENTATION_GUIDE.md`, `PRODUCTION_DEPLOYMENT_GUIDE.md`, and other historical notes if they're no longer needed.

I can create a cleanup branch that removes or archives those files and open a PR for review.

---

## Recommended next steps I can run for you
- Update this README (done)
- Add a GitHub Actions CI workflow to run `npm ci`, `npm run lint`, `npm run build` on PRs (I can add this)
- Add a deploy workflow that runs on merge to `main` and deploys to Firebase (I can add this)
- Remove or archive legacy docs in a PR (I can prepare the PR)

Tell me which of the above you want me to run next and I will implement it.

