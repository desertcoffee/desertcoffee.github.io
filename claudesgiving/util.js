// Shared canvas helpers
const W = 1600, H = 900;
const cv = document.getElementById('c');
cv.width = W; cv.height = H;
const g = cv.getContext('2d');
const TAU = Math.PI * 2;

let seed = 1887;
function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

function rect(x, y, w, h, c) { g.fillStyle = c; g.fillRect(x, y, w, h); }
function circ(x, y, r, c) { g.fillStyle = c; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
function ell(x, y, rx, ry, c, rot = 0) { g.fillStyle = c; g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, TAU); g.fill(); }
function ring(x, y, rx, ry, c, w = 1) { g.strokeStyle = c; g.lineWidth = w; g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, TAU); g.stroke(); }
function poly(pts, c) {
  g.fillStyle = c; g.beginPath(); g.moveTo(pts[0], pts[1]);
  for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]);
  g.closePath(); g.fill();
}
function line(x1, y1, x2, y2, c, w = 1) {
  g.strokeStyle = c; g.lineWidth = w; g.lineCap = 'round';
  g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
}
function rr(x, y, w, h, r, c) {
  g.fillStyle = c; g.beginPath(); g.roundRect(x, y, w, h, r); g.fill();
}
function lin(x1, y1, x2, y2, stops) {
  const gr = g.createLinearGradient(x1, y1, x2, y2);
  stops.forEach(([o, c]) => gr.addColorStop(o, c)); return gr;
}
function rad(x, y, r0, r1, stops) {
  const gr = g.createRadialGradient(x, y, r0, x, y, r1);
  stops.forEach(([o, c]) => gr.addColorStop(o, c)); return gr;
}
// additive warm light
function glow(x, y, r, c, a = 1) {
  g.save(); g.globalAlpha = a; g.globalCompositeOperation = 'lighter';
  g.fillStyle = rad(x, y, 0, r, [[0, c], [1, 'rgba(0,0,0,0)']]);
  g.fillRect(x - r, y - r, 2 * r, 2 * r); g.restore();
}
function txt(s, x, y, font, c, align = 'center') {
  g.font = font; g.fillStyle = c; g.textAlign = align; g.textBaseline = 'middle'; g.fillText(s, x, y);
}
const SERIF = '"IM Fell English", Georgia, serif';
const SERIF_SC = '"IM Fell English SC", Georgia, serif';
