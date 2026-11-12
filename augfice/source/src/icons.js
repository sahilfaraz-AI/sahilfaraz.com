// Icons come from Keyline Icons only (see build.mjs). Nothing is drawn by hand here:
// each SVG body is rasterised as is, then tinted.
import { ICONS } from './icons.gen.js';

const images = new Map();
const tintCache = new Map();

export async function loadIcons() {
  await Promise.all(Object.entries(ICONS).map(([name, body]) => new Promise((resolve) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24" color="#fff">${body.replaceAll('currentColor', '#fff')}</svg>`;
    const img = new Image();
    img.onload = () => { images.set(name, img); resolve(); };
    img.onerror = () => resolve();
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  })));
}

export function iconCanvas(name, size, color) {
  size = Math.max(2, Math.round(size));
  const key = name + '|' + size + '|' + color;
  let c = tintCache.get(key);
  if (c) return c;
  const img = images.get(name);
  c = document.createElement('canvas');
  c.width = c.height = size;
  if (img) {
    const x = c.getContext('2d');
    x.drawImage(img, 0, 0, size, size);
    x.globalCompositeOperation = 'source-in';
    x.fillStyle = color;
    x.fillRect(0, 0, size, size);
  }
  tintCache.set(key, c);
  return c;
}

export function drawIcon(ctx, name, cx, cy, size, color, alpha = 1) {
  const c = iconCanvas(name, size, color);
  const prev = ctx.globalAlpha;
  ctx.globalAlpha = prev * alpha;
  ctx.drawImage(c, Math.round(cx - size / 2), Math.round(cy - size / 2));
  ctx.globalAlpha = prev;
}
