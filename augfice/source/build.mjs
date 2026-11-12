import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const OUT = process.env.OUT || path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

// ---- icons: bodies copied straight from Keyline Icons (MIT), @iconify-json/keyline-icons 1.2.15 ----
const set = require('@iconify-json/keyline-icons/icons.json');
const want = ['lock','unlock','settings','home','briefcase','earth','tree-palm','target','pen','user','user-fill','users','contacts','grid-3x3',
  'cloud-download','circle-plus','circle-pause','circle-play','play','pause','check','chevron-left','chevron-right','chevron-up','chevron-down',
  'info','x','delete','keyboard','volume','volume-off','eye','log-out','rotate-ccw','locate-fixed','hand-pointer','scan-face','mouse','laptop',
  'smartphone','phone','message','mail','calendar','bell','sunset','coffee','timer','list-check','shield-check','arrow-up','arrow-up-right',
  'corner-down-left','space','layers','music-note','circle-check','glasses','headset','flag','circle-stop','refresh-ccw','move','leaf','minus','sun'];
const icons = {};
for (const n of want) {
  let i = set.icons[n];
  if (!i && set.aliases && set.aliases[n]) i = set.icons[set.aliases[n].parent];
  if (!i) throw new Error('missing icon ' + n);
  icons[n] = i.body;
}
fs.writeFileSync('src/icons.gen.js', '// Generated from @iconify-json/keyline-icons@1.2.15 (Keyline Icons, MIT). Do not edit.\nexport const ICONS = ' + JSON.stringify(icons, null, 0) + ';\n');

fs.mkdirSync(path.join(OUT, 'fonts'), { recursive: true });
const fonts = [
  ['@fontsource/source-sans-3/files/source-sans-3-latin-400-normal.woff2', 'source-sans-3-400.woff2'],
  ['@fontsource/source-sans-3/files/source-sans-3-latin-600-normal.woff2', 'source-sans-3-600.woff2'],
  ['@fontsource/source-sans-3/files/source-sans-3-latin-700-normal.woff2', 'source-sans-3-700.woff2'],
  ['@fontsource/nunito-sans/files/nunito-sans-latin-300-normal.woff2', 'nunito-sans-300.woff2'],
  ['@fontsource/nunito-sans/files/nunito-sans-latin-300-italic.woff2', 'nunito-sans-300-italic.woff2'],
  ['@fontsource/nunito-sans/files/nunito-sans-latin-400-normal.woff2', 'nunito-sans-400.woff2'],
  ['@fontsource/nunito-sans/files/nunito-sans-latin-800-normal.woff2', 'nunito-sans-800.woff2'],
];
for (const [src, dst] of fonts) fs.copyFileSync(path.join('node_modules', src), path.join(OUT, 'fonts', dst));

const stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12);
await build({ entryPoints: ['src/main.js'], bundle: true, minify: !process.env.DEV, format: 'esm', target: 'es2020',
  outfile: path.join(OUT, 'app.js'), legalComments: 'none', define: { __BUILD__: JSON.stringify(stamp) } });
let html = fs.readFileSync('public/index.html', 'utf8').replaceAll('__BUILD__', stamp);
const sprite = Object.entries(icons).map(([n, b]) => `<symbol id="i-${n}" viewBox="0 0 24 24">${b}</symbol>`).join('');
html = html.replace('<!--SPRITE-->', sprite);
fs.writeFileSync(path.join(OUT, 'index.html'), html);
console.log('built', stamp, (fs.statSync(path.join(OUT, 'app.js')).size / 1024 | 0) + ' KB');
