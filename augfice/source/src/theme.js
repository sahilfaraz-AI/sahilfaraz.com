// Aug-Fice visual system, taken from the project's style guide.
// Charcoal #393D36, green #8BC34A, gold #D9C37E, white at 75%.
// Avenir Next LT Pro is licensed, so Nunito Sans stands in for headings.
// Source Sans 3 is the current release of Source Sans Pro.

export const C = {
  charcoal: '#393D36',
  green: '#8BC34A',
  greenDeep: '#6B9E2F',
  gold: '#D9C37E',
  white: 'rgba(255,255,255,0.75)',
  whiteHi: 'rgba(255,255,255,0.94)',
  dim: 'rgba(255,255,255,0.48)',
  faint: 'rgba(255,255,255,0.22)',
  ink: '#1C2415',
};

export const HEAD = '"Nunito Sans", "Avenir Next", sans-serif';
export const BODY = '"Source Sans 3", "Source Sans Pro", sans-serif';

// Type scale from the style guide, for the 1920 x 1080 frame.
export const T = {
  timer: 230, // Source Sans bold
  wordmark: 144, // heading bold
  title: 96, // heading regular
  h3: 48, // Source Sans bold
  body1: 36,
  body2: 26,
  button: 34,
};

export const FRAME = { w: 1920, h: 1080 };

export function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
}

export async function loadFonts(base = './fonts/') {
  const defs = [
    ['Source Sans 3', 'source-sans-3-400.woff2', { weight: '400' }],
    ['Source Sans 3', 'source-sans-3-600.woff2', { weight: '600' }],
    ['Source Sans 3', 'source-sans-3-700.woff2', { weight: '700' }],
    ['Nunito Sans', 'nunito-sans-300.woff2', { weight: '300' }],
    ['Nunito Sans', 'nunito-sans-300-italic.woff2', { weight: '300', style: 'italic' }],
    ['Nunito Sans', 'nunito-sans-400.woff2', { weight: '400' }],
    ['Nunito Sans', 'nunito-sans-800.woff2', { weight: '800' }],
  ];
  await Promise.all(defs.map(async ([family, file, desc]) => {
    try {
      const f = new FontFace(family, `url(${base}${file}) format("woff2")`, desc);
      await f.load();
      document.fonts.add(f);
    } catch (e) { /* fall back to system fonts */ }
  }));
}
