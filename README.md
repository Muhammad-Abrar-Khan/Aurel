# AUREL

Luxury leather corporate gifting website built with React, Vite, Tailwind CSS, and Three.js.

## Local development

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`
3. Open `http://localhost:3000`

## Build

Generate the production website:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Firebase Hosting (Static Deploy)

This repository includes a Firebase Hosting configuration for publishing the compiled `dist` output.

1. Install the Firebase CLI if needed:
   `npm install -g firebase-tools`
2. Authenticate:
   `firebase login`
3. Create or select a Firebase project in the Firebase Console.
4. Replace `<YOUR_FIREBASE_PROJECT_ID>` in `.firebaserc` with your project ID.
5. Deploy the app:
   `npm run deploy:firebase`

### Notes

- The contact forms in the app open WhatsApp directly for quote requests, so Firebase static hosting is sufficient.
- If you want optional lead capture before redirect, configure `VITE_LEAD_ENDPOINT` in `.env.local`.

## Package scripts

- `npm run dev` — Run the app in development mode.
- `npm run build` — Create a production build in `dist`.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run TypeScript checks.
- `npm run optimize:assets` — Run the asset optimization script.
- `npm run deploy:firebase` — Build and deploy to Firebase Hosting.
