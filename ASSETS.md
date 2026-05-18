Asset optimization instructions

1. Install dependencies:

```bash
npm install sharp
```

2. Run the optimizer to generate WebP variants and an `asset-srcsets.json` mapping:

```bash
npm run optimize:assets
```

3. Review `assets/asset-srcsets.json` and `assets/asset-map.json` to update `src` references in components.

Notes:
- The script will produce `*.webp` files and `*-WIDTH.webp` srcset files alongside originals.
- Do not commit large originals if you prefer to keep only optimized variants.
