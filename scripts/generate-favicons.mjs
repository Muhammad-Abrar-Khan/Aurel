import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '..', 'public');

// SVG source — gold italic A on dark background, matching brand palette
const svgSrc = Buffer.from([
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">',
  '<rect width="512" height="512" rx="80" fill="#1A1917"/>',
  '<text x="256" y="360" font-size="320" text-anchor="middle"',
  '  fill="#C9A96E" font-family="Georgia,serif"',
  '  font-weight="bold" font-style="italic">A</text>',
  '</svg>',
].join(''));

function writeIco(sizes) {
  const count = sizes.length;
  const headerSize = 6;
  const entrySize = 16;
  const tocSize = headerSize + entrySize * count;
  let offset = tocSize;
  const entries = [];
  for (const { buf, w, h } of sizes) {
    entries.push({ buf, w, h, offset });
    offset += buf.length;
  }
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);  // reserved
  out.writeUInt16LE(1, 2);  // type = icon
  out.writeUInt16LE(count, 4);
  let pos = headerSize;
  for (const e of entries) {
    out.writeUInt8(e.w >= 256 ? 0 : e.w, pos);
    out.writeUInt8(e.h >= 256 ? 0 : e.h, pos + 1);
    out.writeUInt8(0, pos + 2);
    out.writeUInt8(0, pos + 3);
    out.writeUInt16LE(1, pos + 4);
    out.writeUInt16LE(32, pos + 6);
    out.writeUInt32LE(e.buf.length, pos + 8);
    out.writeUInt32LE(e.offset, pos + 12);
    pos += 16;
  }
  for (const e of entries) {
    e.buf.copy(out, e.offset);
  }
  return out;
}

async function generate() {
  console.log('Generating favicon assets...');

  await sharp(svgSrc).resize(180, 180).png().toFile(join(pub, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png (180x180)');

  await sharp(svgSrc).resize(32, 32).png().toFile(join(pub, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png');

  await sharp(svgSrc).resize(16, 16).png().toFile(join(pub, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png');

  const buf16 = await sharp(svgSrc).resize(16, 16).png().toBuffer();
  const buf32 = await sharp(svgSrc).resize(32, 32).png().toBuffer();
  const icoData = writeIco([
    { buf: buf16, w: 16, h: 16 },
    { buf: buf32, w: 32, h: 32 },
  ]);
  writeFileSync(join(pub, 'favicon.ico'), icoData);
  console.log('✓ favicon.ico (16x16 + 32x32)');

  console.log('\nAll favicon assets generated successfully.');
}

generate().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
