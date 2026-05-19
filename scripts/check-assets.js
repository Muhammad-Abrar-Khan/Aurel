import fs from 'fs';
import path from 'path';

function walkDir(dir, exts, files=[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for(const e of entries){
    const full = path.join(dir, e.name);
    if(e.isDirectory()) walkDir(full, exts, files);
    else { const ext = path.extname(e.name).toLowerCase(); if(exts.includes(ext)) files.push(full); }
  }
  return files;
}

const srcFiles = walkDir('src', ['.ts', '.tsx', '.js', '.jsx']);
const distAssetsDir = 'dist/assets';
let distAssets = [];
try { distAssets = fs.readdirSync(distAssetsDir); } catch(e){ console.error('Could not read dist/assets:', e.message); process.exit(1); }
const assetSet = new Set(distAssets);
let refs = [];
const re = /\/assets\/([\w%\-\.,@()]+\.[a-zA-Z0-9]{2,4})/g;
for(const f of srcFiles) {
  const txt = fs.readFileSync(f,'utf8');
  let m;
  while((m = re.exec(txt)) !== null) refs.push(m[1]);
}
const uniq = [...new Set(refs)];
const missing = uniq.filter(x => !assetSet.has(x));
console.log('referenced assets count', uniq.length);
if(missing.length===0) console.log('missing: none'); else { console.log('missing:\n' + missing.join('\n')) }
