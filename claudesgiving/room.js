// Victorian dining room backdrop, c. 1887
function damask(x, y, c) {
  ell(x, y, 6, 14, c); ell(x - 11, y + 5, 4, 9, c, -0.6); ell(x + 11, y + 5, 4, 9, c, 0.6);
  poly([x, y - 26, x - 5, y - 14, x + 5, y - 14], c); circ(x, y + 19, 3, c);
}

function drawWall() {
  g.fillStyle = lin(0, 0, 0, 600, [[0, '#331014'], [0.45, '#5c1f25'], [1, '#3a1317']]);
  g.fillRect(0, 0, W, 600);
  g.save(); g.globalAlpha = 0.12;
  for (let r = 0; r < 9; r++) for (let c = 0; c < 22; c++) damask(c * 80 + (r % 2) * 40, 110 + r * 60, '#e6bd62');
  g.restore();
  // crown molding + picture rail
  rect(0, 0, W, 34, '#24140b'); rect(0, 34, W, 4, '#b8913f'); rect(0, 38, W, 6, '#3a2213');
  rect(0, 78, W, 6, '#2a170c'); rect(0, 84, W, 2, '#8c6a2c');
  // wainscoting
  rect(0, 430, W, 170, '#2a180d'); rect(0, 422, W, 12, '#4a2c17'); rect(0, 434, W, 3, '#a07c3a');
  for (let x = 10; x < W; x += 130) {
    rect(x + 8, 452, 110, 128, '#21130a'); g.strokeStyle = '#5b3a20'; g.lineWidth = 2; g.strokeRect(x + 14, 458, 98, 116);
  }
}

function drape(x, w, left) {
  const o = left ? x : x + w, i0 = left ? x + w : x, pinch = left ? x + w * 0.4 : x + w * 0.6;
  const flare = left ? x + w * 0.85 : x + w * 0.15;
  g.fillStyle = lin(x, 0, x + w, 0, [[0, '#0e2d1d'], [0.25, '#1f5a3a'], [0.5, '#103322'], [0.75, '#22603f'], [1, '#0c2618']]);
  g.beginPath(); g.moveTo(o, 70); g.lineTo(i0, 70);
  g.quadraticCurveTo(i0, 230, pinch, 300); g.quadraticCurveTo(flare - (left ? 20 : -20), 360, flare, 450);
  g.lineTo(o, 450); g.closePath(); g.fill();
  ell(pinch - (left ? 10 : -10), 300, w * 0.32, 7, '#c9a043');
  line(pinch - (left ? 30 : -30), 302, pinch - (left ? 34 : -34), 330, '#c9a043', 4);
  ell(pinch - (left ? 34 : -34), 338, 6, 11, '#d8b050');
}

function drawWindow() {
  const x = 115, y = 110, w = 170, h = 300, cx = x + w / 2;
  g.save(); g.beginPath(); g.moveTo(x, y + h); g.lineTo(x, y + 85); g.arc(cx, y + 85, w / 2, Math.PI, 0); g.lineTo(x + w, y + h); g.closePath(); g.clip();
  g.fillStyle = lin(0, y, 0, y + h, [[0, '#0b1230'], [0.7, '#1f2e5c'], [1, '#3a4a78']]); g.fillRect(x, y, w, h);
  glow(cx + 35, y + 70, 60, 'rgba(220,230,255,0.35)'); circ(cx + 35, y + 70, 18, '#f1ecd6'); circ(cx + 42, y + 64, 15, '#d8d3bd');
  // rooftops & snow
  poly([x, y + 250, x + 30, y + 225, x + 60, y + 250, x + 60, y + 235, x + 95, y + 210, x + 130, y + 238, x + w, y + 230, x + w, y + h, x, y + h], '#0a0d1c');
  rect(x + 80, y + 240, 7, 9, '#f0b45a'); rect(x + 25, y + 255, 6, 8, '#f0b45a'); rect(x + 140, y + 250, 6, 8, '#e8a44a');
  rect(x, y + 280, w, 20, '#c7cfe0');
  for (let i = 0; i < 60; i++) circ(x + rnd() * w, y + rnd() * h, rnd() * 1.8 + 0.5, 'rgba(255,255,255,0.8)');
  g.restore();
  g.strokeStyle = '#3b2414'; g.lineWidth = 8;
  g.beginPath(); g.moveTo(x, y + h); g.lineTo(x, y + 85); g.arc(cx, y + 85, w / 2, Math.PI, 0); g.lineTo(x + w, y + h); g.closePath(); g.stroke();
  line(cx, y, cx, y + h, '#3b2414', 5); line(x, y + 165, x + w, y + 165, '#3b2414', 5);
  rect(x - 12, y + h, w + 24, 12, '#4a2c17');
  drape(55, 110, true); drape(235, 110, false);
  // valance
  rect(50, 62, 300, 30, '#174a30');
  for (let i = 0; i < 6; i++) ell(75 + i * 50, 92, 26, 16, '#174a30');
  for (let i = 0; i < 6; i++) { ell(75 + i * 50, 104, 3, 6, '#d2a748'); }
  rect(50, 60, 300, 5, '#c9a043');
}

function drawSampler() {
  const x = 455, y = 150;
  rect(x - 10, y - 10, 180, 140, '#3a2213'); rect(x - 4, y - 4, 168, 128, '#9c7a35'); rect(x, y, 160, 120, '#e9dcbc');
  g.save(); g.globalAlpha = 0.8;
  for (let i = 0; i < 26; i++) { txt('×', x + 8 + i * 5.8, y + 9, '9px Georgia', '#7a2b2b'); txt('×', x + 8 + i * 5.8, y + 111, '9px Georgia', '#2f5a3a'); }
  g.restore();
  txt('Give Thanks', x + 80, y + 46, `italic 26px ${SERIF}`, '#8a2a2a');
  txt('~ MDCCCLXXXVII ~', x + 80, y + 76, `12px ${SERIF_SC}`, '#3d5c3a');
  ell(x + 80, y + 96, 9, 7, '#d0762e'); rect(x + 79, y + 87, 2, 4, '#3d5c3a');
}

function drawPortrait() {
  const cx = 1065, cy = 230;
  ell(cx, cy, 86, 108, '#6b4a1a'); ell(cx, cy, 80, 102, '#d4a94a'); ell(cx, cy, 70, 92, '#8a6424');
  g.save(); g.beginPath(); g.ellipse(cx, cy, 64, 86, 0, 0, TAU); g.clip();
  g.fillStyle = rad(cx - 15, cy - 20, 5, 100, [[0, '#4a3a2a'], [1, '#160f09']]); g.fillRect(cx - 70, cy - 90, 140, 180);
  rect(cx - 50, cy + 30, 100, 60, '#1c2638'); // military coat
  rect(cx - 52, cy + 28, 22, 6, '#d4a94a'); rect(cx + 30, cy + 28, 22, 6, '#d4a94a'); // epaulettes
  clawdBody(cx, cy + 30, 6);
  ell(cx - 11, cy + 11, 13, 5, '#ece6d4', 0.25); ell(cx + 11, cy + 11, 13, 5, '#ece6d4', -0.25); // walrus moustache
  g.restore();
  rr(cx - 62, cy + 112, 124, 18, 3, '#c9a043');
  txt('GRANDPAPA CLAWD', cx, cy + 121, `bold 9px ${SERIF_SC}`, '#3a2410');
}

function drawSconce(x, y) {
  rect(x - 4, y, 8, 40, '#a8822f'); ell(x, y + 40, 14, 5, '#c9a043');
  line(x, y + 20, x - 22, y - 2, '#a8822f', 3); line(x, y + 20, x + 22, y - 2, '#a8822f', 3);
  for (const dx of [-22, 22]) { ell(x + dx, y - 14, 10, 14, 'rgba(255,240,210,0.9)'); glow(x + dx, y - 14, 70, 'rgba(255,190,110,0.35)'); }
}

function drawClock() {
  const x = 1440, w = 120;
  rect(x, 140, w, 460, '#2e180c'); rect(x + 8, 150, w - 16, 440, '#3d2111');
  rect(x - 8, 120, w + 16, 30, '#2e180c'); poly([x - 8, 120, x + w / 2, 92, x + w + 8, 120], '#2e180c');
  circ(x + w / 2, 200, 42, '#c9a043'); circ(x + w / 2, 200, 36, '#efe4c6');
  for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; circ(x + w / 2 + Math.cos(a) * 30, 200 + Math.sin(a) * 30, 2, '#2a1a0a'); }
  line(x + w / 2, 200, x + w / 2 + 14, 186, '#1a1008', 3); line(x + w / 2, 200, x + w / 2, 174, '#1a1008', 2); // ~ 5 to 6 o'clock dinner
  rect(x + 30, 270, w - 60, 200, '#1a0e06'); line(x + w / 2, 275, x + w / 2 + 8, 430, '#c9a043', 3); circ(x + w / 2 + 8, 435, 15, '#d8b050');
}

function drawChandelier() {
  const cx = 800;
  line(cx, 44, cx, 110, '#8c6a2c', 4);
  for (let y = 48; y < 110; y += 8) ring(cx, y, 3, 4, '#c9a043', 2);
  ell(cx, 125, 34, 16, '#b8913f'); ell(cx, 140, 18, 14, '#8c6a2c'); circ(cx, 158, 6, '#c9a043');
  const arms = [[-170, 150], [-105, 160], [-45, 168], [45, 168], [105, 160], [170, 150]];
  g.strokeStyle = '#b8913f'; g.lineWidth = 4;
  for (const [dx, y] of arms) { g.beginPath(); g.moveTo(cx, 135); g.quadraticCurveTo(cx + dx * 0.6, y + 40, cx + dx, y + 10); g.stroke(); }
  for (const [dx, y] of arms) {
    ell(cx + dx, y + 10, 9, 4, '#c9a043');
    ell(cx + dx, y - 8, 12, 17, 'rgba(255,244,220,0.95)');
    glow(cx + dx, y - 8, 110, 'rgba(255,200,120,0.32)');
  }
}

function drawFloor() {
  g.fillStyle = lin(0, 600, 0, H, [[0, '#2a170c'], [1, '#160b05']]); g.fillRect(0, 600, W, 300);
  for (let i = -20; i <= 20; i++) line(800 + i * 30, 600, 800 + i * 140, H, 'rgba(0,0,0,0.35)', 2);
  // Persian rug
  poly([140, 760, 1460, 760, 1560, H, 40, H], '#6e1a1a');
  poly([170, 772, 1430, 772, 1520, H, 80, H], '#1e2a4a');
  poly([200, 784, 1400, 784, 1480, H, 120, H], '#8a2420');
  for (let i = 0; i < 40; i++) circ(200 + i * 32, 778, 3, '#d4a94a');
}

function drawRoom() {
  drawWall(); drawFloor(); drawWindow(); drawSampler(); drawPortrait();
  drawSconce(365, 230); drawSconce(1235, 230); drawClock(); drawChandelier();
}
