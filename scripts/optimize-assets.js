import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'assets');
const outDir = assetsDir; // overwrite in-place with webp variants alongside originals

const sizes = [400, 800, 1200];

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const inPath = path.join(assetsDir, file);

  try {
    const img = sharp(inPath);
    const metadata = await img.metadata();
    const mapping = [];

    for (const w of sizes) {
      if ((metadata.width && metadata.width < w) || metadata.width === undefined) {
        // skip upscaling
        continue;
      }
      const outName = `${base}-${w}.webp`;
      const outPath = path.join(outDir, outName);
      await img.resize(w).webp({ quality: 80 }).toFile(outPath);
      mapping.push({ width: w, file: outName });
    }

    // also output a fallback webp at original size
    const outName = `${base}.webp`;
    const outPath = path.join(outDir, outName);
    await img.webp({ quality: 80 }).toFile(outPath);
    mapping.push({ width: metadata.width || null, file: outName });

    return { original: file, mapping };
  } catch (err) {
    console.error('Failed to process', file, err);
    return null;
  }
}

(async () => {
  const files = fs.readdirSync(assetsDir).filter(f => !f.startsWith('.') && /\.(png|jpg|jpeg)$/i.test(f));
  const results = [];
  for (const f of files) {
    // skip already webp
    if (/\.webp$/i.test(f)) continue;
    // eslint-disable-next-line no-await-in-loop
    const r = await processFile(f);
    if (r) results.push(r);
  }
  fs.writeFileSync(path.join(assetsDir, 'asset-srcsets.json'), JSON.stringify(results, null, 2));
  console.log('Asset optimization complete. asset-srcsets.json written to /assets');
})();
