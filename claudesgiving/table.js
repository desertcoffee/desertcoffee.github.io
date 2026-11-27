// The table, its linen, and the feast
const FLAMES = [];

function drawCloth() {
  g.fillStyle = lin(0, 575, 0, 700, [[0, '#d8cdb4'], [1, '#f4eee0']]);
  poly([170, 575, 1430, 575, 1500, 700, 100, 700], g.fillStyle);
  // runner
  poly([230, 612, 1370, 612, 1392, 650, 208, 650], '#6e1c22');
  line(226, 616, 1374, 616, '#c9a043', 2); line(212, 646, 1388, 646, '#c9a043', 2);
  // front drape with folds
  const fold = lin(100, 0, 1500, 0, Array.from({ length: 33 }, (_, i) => [i / 32, i % 2 ? '#cfc3a8' : '#f4eee0']));
  poly([100, 700, 1500, 700, 1512, 812, 88, 812], fold);
  g.fillStyle = lin(0, 700, 0, 730, [[0, 'rgba(70,40,15,0.35)'], [1, 'rgba(70,40,15,0)']]); g.fillRect(100, 700, 1400, 30);
  line(100, 700, 1500, 700, '#fffaf0', 2.5);
  poly([100, 700, 170, 575, 150, 600, 86, 805], '#b9ad94'); poly([1500, 700, 1430, 575, 1450, 600, 1514, 805], '#b9ad94');
  for (let x = 88; x < 1510; x += 28) {
    g.fillStyle = '#f1ebdc'; g.beginPath(); g.arc(x + 14, 812, 14, 0, Math.PI); g.fill();
    circ(x + 14, 818, 3, '#5a3a22'); circ(x + 6, 814, 1.5, '#5a3a22'); circ(x + 22, 814, 1.5, '#5a3a22');
  }
  line(88, 811, 1512, 811, '#c8bca2', 2);
}

function placeSetting(c) {
  const x = c.cx, y = 600;
  ell(x, y + 4, 46, 13, 'rgba(0,0,0,0.12)'); ell(x, y, 44, 13, '#fbf8f0'); ring(x, y, 44, 13, '#c9a043', 2); ring(x, y, 30, 8, '#e3dccd', 1);
  rect(x - 58, y - 10, 4, 24, '#c8ccd0'); rect(x + 54, y - 10, 4, 24, '#c8ccd0');
  // cider goblet
  ell(x + 74, y + 8, 9, 3, '#d9dde0'); rect(x + 73, y - 6, 2, 14, '#d9dde0');
  g.fillStyle = 'rgba(220,230,240,0.45)'; g.beginPath(); g.moveTo(x + 64, y - 30); g.quadraticCurveTo(x + 64, y - 6, x + 74, y - 6); g.quadraticCurveTo(x + 84, y - 6, x + 84, y - 30); g.fill();
  g.fillStyle = 'rgba(214,140,40,0.85)'; g.beginPath(); g.moveTo(x + 65, y - 22); g.quadraticCurveTo(x + 66, y - 7, x + 74, y - 7); g.quadraticCurveTo(x + 82, y - 7, x + 83, y - 22); g.fill();
  // place card
  poly([x - 34, y + 30, x + 34, y + 30, x + 30, y + 14, x - 30, y + 14], '#f7f2e4');
  line(x - 30, y + 14, x + 30, y + 14, '#c9a043', 1);
  txt(c.name, x, y + 23, `italic 10px ${SERIF}`, '#3a2410');
}

function candelabra(x) {
  ell(x, 642, 26, 8, '#8c6a2c'); ell(x, 638, 20, 6, '#c9a043');
  g.fillStyle = lin(x - 6, 0, x + 6, 0, [[0, '#8c6a2c'], [0.5, '#f0d080'], [1, '#8c6a2c']]); g.fillRect(x - 5, 540, 10, 98);
  g.strokeStyle = '#c9a043'; g.lineWidth = 4;
  for (const d of [-36, 36]) { g.beginPath(); g.moveTo(x, 575); g.quadraticCurveTo(x + d, 575, x + d, 545); g.stroke(); }
  for (const [d, top] of [[-36, 500], [0, 478], [36, 500]]) {
    ell(x + d, 545, 9, 3, '#c9a043');
    rect(x + d - 4, top, 8, 543 - top, '#f3ead2'); rect(x + d - 4, top, 3, 543 - top, '#fffaf0');
    line(x + d, top, x + d, top - 5, '#222', 1.5); FLAMES.push([x + d, top - 12]);
  }
}

function turkey() {
  const x = 800, y = 640;
  ell(x, y + 10, 156, 40, 'rgba(0,0,0,0.2)');
  g.fillStyle = lin(x - 150, 0, x + 150, 0, [[0, '#8a9096'], [0.3, '#eef1f4'], [0.6, '#b0b6bc'], [1, '#6a7076']]);
  g.beginPath(); g.ellipse(x, y, 150, 36, 0, 0, TAU); g.fill(); ring(x, y, 150, 36, '#5a6066', 2);
  for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; ell(x + Math.cos(a) * 128, y + 4 + Math.sin(a) * 26, 14, 7, i % 2 ? '#3f7a2e' : '#57953a'); }
  for (let i = 0; i < 8; i++) { const a = i / 8 * TAU + 0.2; circ(x + Math.cos(a) * 124, y + 2 + Math.sin(a) * 24, 8, '#b8241c'); circ(x + Math.cos(a) * 124 - 2, y - 1 + Math.sin(a) * 24, 2.5, '#f08a70'); }
  // bird
  const body = rad(x - 20, y - 50, 8, 110, [[0, '#f6c878'], [0.4, '#d38a36'], [0.8, '#9a5018'], [1, '#5e2c0c']]);
  for (const s of [-1, 1]) ell(x + s * 82, y - 20, 30, 22, '#a8601e', s * 0.5);
  ell(x, y - 30, 98, 52, body);
  ell(x - 30, y - 56, 34, 14, 'rgba(255,235,190,0.35)', -0.2);
  for (const s of [-1, 1]) {
    ell(x + s * 62, y - 6, 38, 22, '#b86a24', s * -0.4); ell(x + s * 58, y - 12, 18, 8, 'rgba(255,220,160,0.3)', s * -0.4);
    line(x + s * 92, y - 20, x + s * 110, y - 34, '#efe6d0', 8);
    for (let k = 0; k < 6; k++) line(x + s * 108, y - 34, x + s * (112 + k % 2 * 4), y - 48 + k * 3, '#ffffff', 2);
  }
}

function mash(x, y) {
  ell(x, y + 18, 54, 12, 'rgba(0,0,0,0.15)');
  g.fillStyle = '#f6f3ec'; g.beginPath(); g.ellipse(x, y, 52, 14, 0, 0, Math.PI); g.lineTo(x - 40, y + 26); g.lineTo(x + 40, y + 26); g.fill();
  ell(x, y, 52, 14, '#f6f3ec'); ring(x, y, 52, 14, '#2e5a9a', 3); line(x - 44, y + 14, x + 44, y + 14, '#2e5a9a', 2);
  ell(x, y - 8, 40, 20, '#fbf6e4'); ell(x - 10, y - 16, 18, 8, '#ffffff'); rect(x - 6, y - 24, 14, 8, '#f6d860');
}

function gravyBoat(x, y) {
  ell(x, y + 12, 44, 8, 'rgba(0,0,0,0.15)'); ell(x, y + 8, 36, 7, '#f1ede4');
  g.fillStyle = '#f6f3ec'; g.beginPath(); g.moveTo(x - 36, y - 10); g.quadraticCurveTo(x, y + 30, x + 30, y - 10); g.lineTo(x + 52, y - 20); g.lineTo(x + 26, y - 14); g.fill();
  ell(x - 4, y - 10, 32, 7, '#6a3a16'); g.strokeStyle = '#f1ede4'; g.lineWidth = 5; g.beginPath(); g.arc(x - 40, y - 2, 10, 1.6, 4.7); g.stroke();
}

function cranberry(x, y) {
  ell(x, y + 6, 52, 12, 'rgba(210,225,235,0.6)'); ring(x, y + 6, 52, 12, 'rgba(255,255,255,0.7)', 1.5);
  g.fillStyle = rad(x - 10, y - 26, 4, 50, [[0, '#ff5a60'], [0.5, '#a3101e'], [1, '#56060e']]);
  g.beginPath(); g.moveTo(x - 34, y + 4); g.lineTo(x - 26, y - 38); g.lineTo(x + 26, y - 38); g.lineTo(x + 34, y + 4); g.quadraticCurveTo(x, y + 14, x - 34, y + 4); g.fill();
  for (const dy of [-26, -14]) line(x - 30, y + dy, x + 30, y + dy, 'rgba(255,140,140,0.35)', 2);
  ell(x, y - 38, 26, 6, '#c2202e'); line(x - 14, y - 30, x - 18, y - 4, 'rgba(255,220,220,0.5)', 3);
}

function pie(x, y) {
  ell(x, y + 6, 58, 16, 'rgba(0,0,0,0.15)'); ell(x, y, 56, 16, '#c89048');
  g.save(); g.beginPath(); g.ellipse(x, y - 3, 48, 12, 0, 0, TAU); g.clip(); rect(x - 50, y - 16, 100, 30, '#d96a1a');
  poly([x, y - 3, x + 50, y - 10, x + 50, y + 14], '#c89048'); g.restore();
  for (let a = 0; a < TAU; a += 0.35) circ(x + Math.cos(a) * 52, y - 1 + Math.sin(a) * 14, 4, '#e0aa60');
  ell(x - 12, y - 8, 12, 6, '#fffbf0'); circ(x - 12, y - 13, 4, '#ffffff');
}

function breadBasket(x, y) {
  ell(x, y + 14, 56, 12, 'rgba(0,0,0,0.15)');
  for (const [dx, dy] of [[-24, -6], [0, -12], [24, -6], [-12, 0], [14, 0]]) { ell(x + dx, y + dy, 18, 12, '#b8702a'); ell(x + dx - 4, y + dy - 4, 8, 4, '#e8b060'); }
  g.fillStyle = '#8a5a22'; g.beginPath(); g.ellipse(x, y, 54, 12, 0, 0, Math.PI); g.lineTo(x - 42, y + 18); g.lineTo(x + 42, y + 18); g.fill();
  for (let i = -40; i <= 40; i += 10) line(x + i, y + 4, x + i * 0.85, y + 18, '#6a4214', 2);
}

function corn(x, y) {
  ell(x, y + 4, 54, 14, '#f6f3ec'); ring(x, y + 4, 54, 14, '#2e5a9a', 2);
  for (const dy of [-6, 2, 10]) {
    ell(x, y + dy - 2, 34, 8, '#e8c030');
    for (let i = -28; i < 30; i += 6) circ(x + i, y + dy - 2, 2, '#f6dc6a');
    poly([x + 30, y + dy - 6, x + 52, y + dy - 14, x + 40, y + dy], '#9ab060');
  }
}

function gourds() {
  for (const [x, y, r, c] of [[690, 676, 16, '#d0762e'], [912, 676, 13, '#e0a030'], [680, 700, 9, '#8a9a3a'], [925, 698, 10, '#d0762e']]) {
    ell(x, y, r * 1.3, r, c); line(x - r * 0.4, y - r + 2, x - r * 0.4, y + r - 2, 'rgba(0,0,0,0.18)', 2);
    line(x + r * 0.4, y - r + 2, x + r * 0.4, y + r - 2, 'rgba(0,0,0,0.18)', 2); rect(x - 2, y - r - 5, 4, 7, '#4a3a1a');
  }
  for (let i = 0; i < 18; i++) {
    const x = 160 + rnd() * 1280, y = 682 + rnd() * 16, c = ['#b8401c', '#d0802a', '#8a2a14', '#c8a030'][i % 4];
    ell(x, y, 9, 4, c, rnd() * 3);
  }
}

function drawTable() {
  drawCloth();
  for (const c of CREW) if (!c.standing) placeSetting(c);
  candelabra(168); candelabra(1432);
  turkey(); breadBasket(300, 668); mash(430, 664); gravyBoat(612, 690); cranberry(985, 684); pie(1175, 678); corn(1315, 682);
  gourds();
}
