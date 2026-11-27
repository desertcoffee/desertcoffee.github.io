// Clawd, plus each guest's professional affectations
const CL = '#D97757', CLD = '#B05A3E', CLL = '#EA9878', EYE = '#1b1210';

function clawdBody(cx, by, s, legs = false) {
  const x0 = cx - 6 * s, y0 = by - 8 * s;
  if (legs) for (const lx of [1, 3, 8, 10]) rect(x0 + lx * s, by, s, 2 * s, CLD);
  rect(x0 - 2 * s, y0 + 4 * s, 2 * s, 2 * s, CL); rect(x0 + 12 * s, y0 + 4 * s, 2 * s, 2 * s, CL);
  g.fillStyle = lin(0, y0, 0, by, [[0, CLL], [0.15, CL], [0.85, CL], [1, CLD]]);
  g.fillRect(x0, y0, 12 * s, 8 * s);
  rect(x0 + 3 * s, y0 + 2 * s, s, 2 * s, EYE); rect(x0 + 8 * s, y0 + 2 * s, s, 2 * s, EYE);
  return { cx, x0, y0, s, by };
}

function chair(cx) {
  g.fillStyle = lin(cx - 60, 0, cx + 60, 0, [[0, '#2a1409'], [0.5, '#4a2614'], [1, '#2a1409']]);
  g.beginPath(); g.moveTo(cx - 56, 600); g.lineTo(cx - 56, 470);
  g.quadraticCurveTo(cx, 425, cx + 56, 470); g.lineTo(cx + 56, 600); g.closePath(); g.fill();
  rr(cx - 40, 470, 80, 120, 8, '#5e1c22');
  for (const d of [-56, 56]) { rect(cx + d - 6, 462, 12, 140, '#331a0c'); circ(cx + d, 456, 8, '#3f2010'); }
  circ(cx, 440, 6, '#b8913f');
}

// ---- worn items (drawn before the table) ----
const WORN = {
  captain(b) {
    const { cx, x0, y0 } = b;
    rect(x0, y0 + 48, 120, 32, '#1b2340'); for (const dy of [54, 66]) { circ(cx - 14, y0 + dy, 3, '#d4a94a'); circ(cx + 14, y0 + dy, 3, '#d4a94a'); }
    ell(cx, y0 - 16, 64, 20, '#1b2340'); rect(x0 - 2, y0 - 16, 124, 16, '#0e1020');
    line(x0 + 4, y0 - 6, x0 + 116, y0 - 6, '#d4a94a', 2);
    ell(cx, y0 + 1, 50, 7, '#070707');
    ell(cx, y0 - 22, 11, 9, '#d4a94a'); line(cx, y0 - 28, cx, y0 - 15, '#1b2340', 2); line(cx - 5, y0 - 20, cx + 5, y0 - 20, '#1b2340', 2);
  },
  painter(b) {
    const { cx, x0, y0 } = b;
    circ(x0 + 102, y0 + 18, 5, '#3a6ab0'); circ(x0 + 16, y0 + 44, 4, '#4a9a4a'); circ(x0 + 24, y0 + 50, 3, '#e0c040');
    poly([cx, y0 + 56, cx - 34, y0 + 42, cx - 30, y0 + 74], '#e0a830'); poly([cx, y0 + 56, cx + 34, y0 + 42, cx + 30, y0 + 74], '#e0a830');
    circ(cx, y0 + 56, 7, '#c88a20');
    ell(cx - 10, y0 - 4, 62, 16, '#7a1f3a', -0.12); ell(cx - 14, y0 - 10, 50, 10, '#922a48', -0.12); circ(cx - 12, y0 - 22, 5, '#7a1f3a');
  },
  physician(b) {
    const { cx, x0, y0 } = b;
    g.strokeStyle = '#1a1a1a'; g.lineWidth = 4;
    g.beginPath(); g.moveTo(x0 + 18, y0); g.quadraticCurveTo(x0 + 10, y0 + 55, cx - 6, y0 + 64); g.stroke();
    g.beginPath(); g.moveTo(x0 + 102, y0); g.quadraticCurveTo(x0 + 110, y0 + 55, cx + 6, y0 + 64); g.stroke();
    circ(cx, y0 + 66, 9, '#c8ccd0'); circ(cx, y0 + 66, 5, '#8a9096');
    for (const ex of [35, 85]) ring(x0 + ex, y0 + 30, 11, 13, '#c9a043', 2);
    line(x0 + 46, y0 + 28, x0 + 74, y0 + 28, '#c9a043', 2);
    rect(x0 - 2, y0 - 4, 124, 7, '#2a2a2a');
    g.fillStyle = rad(cx - 20, y0 + 2, 2, 20, [[0, '#ffffff'], [0.5, '#c8ccd2'], [1, '#6a7078']]);
    g.beginPath(); g.arc(cx - 16, y0 + 6, 18, 0, TAU); g.fill(); ring(cx - 16, y0 + 6, 18, 18, '#4a4e54', 2); circ(cx - 16, y0 + 6, 3, '#222');
  },
  host(b) {
    const { cx, x0, y0 } = b;
    rect(x0 + 10, y0 + 46, 100, 34, '#5a1a1a'); poly([cx - 20, y0 + 46, cx + 20, y0 + 46, cx, y0 + 70], '#f2ede0');
    poly([cx, y0 + 50, cx - 16, y0 + 42, cx - 16, y0 + 58], '#111'); poly([cx, y0 + 50, cx + 16, y0 + 42, cx + 16, y0 + 58], '#111');
    for (const dy of [62, 72]) circ(cx, y0 + dy, 2.5, '#d4a94a');
    g.strokeStyle = '#d4a94a'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x0 + 20, y0 + 62); g.quadraticCurveTo(cx - 20, y0 + 76, cx, y0 + 66); g.stroke();
    // handlebar moustache
    g.fillStyle = '#4a2a14'; g.beginPath(); g.moveTo(cx, y0 + 44);
    g.bezierCurveTo(cx - 20, y0 + 34, cx - 36, y0 + 48, cx - 44, y0 + 34); g.bezierCurveTo(cx - 40, y0 + 52, cx - 16, y0 + 52, cx, y0 + 48);
    g.bezierCurveTo(cx + 16, y0 + 52, cx + 40, y0 + 52, cx + 44, y0 + 34); g.bezierCurveTo(cx + 36, y0 + 48, cx + 20, y0 + 34, cx, y0 + 44); g.fill();
    ring(x0 + 85, y0 + 30, 15, 15, '#d4a94a', 3); ell(x0 + 85, y0 + 30, 13, 13, 'rgba(220,235,255,0.18)');
    g.strokeStyle = '#d4a94a'; g.lineWidth = 1; g.beginPath(); g.moveTo(x0 + 98, y0 + 38); g.quadraticCurveTo(x0 + 116, y0 + 60, x0 + 104, y0 + 72); g.stroke();
    // top hat
    g.fillStyle = lin(cx - 42, 0, cx + 42, 0, [[0, '#0a0a0a'], [0.35, '#2e2e2e'], [0.5, '#141414'], [1, '#050505']]);
    g.fillRect(cx - 42, y0 - 104, 84, 102); rect(cx - 42, y0 - 26, 84, 14, '#5a1a1a');
    ell(cx, y0 - 104, 42, 7, '#262626'); ell(cx, y0 - 2, 70, 9, '#0c0c0c');
  },
  detective(b) {
    const { cx, x0, y0 } = b;
    rect(x0, y0 + 46, 120, 34, '#6b5236');
    for (let i = 0; i < 15; i++) for (let j = 0; j < 4; j++) if ((i + j) % 2) rect(x0 + i * 8, y0 + 46 + j * 8, 8, 8, 'rgba(40,25,12,0.5)');
    ell(cx, y0 - 2, 62, 8, '#46321f');
    g.fillStyle = '#5a4230'; g.beginPath(); g.ellipse(cx, y0 - 4, 42, 38, 0, Math.PI, 0); g.fill();
    rect(cx - 42, y0 - 14, 84, 9, '#1a120c');
  },
  telegrapher(b) {
    const { cx, x0, y0 } = b;
    rect(x0 + 8, y0 + 46, 104, 34, '#55595f'); for (const dy of [54, 64, 74]) circ(cx, y0 + dy, 2.5, '#c8ccd0');
    for (const ax of [x0 - 12, x0 + 128]) rect(ax, y0 + 40, 5, 20, '#c03030');
    line(x0 + 104, y0 - 16, x0 + 126, y0 + 4, '#e0b040', 4); line(x0 + 124, y0 + 2, x0 + 127, y0 + 5, '#333', 3);
    rect(x0 - 2, y0 - 2, 124, 6, '#222');
    poly([x0 + 4, y0 + 3, x0 + 116, y0 + 3, x0 + 134, y0 + 20, x0 - 14, y0 + 20], 'rgba(40,170,90,0.72)');
  },
  engineer(b) {
    const { cx, x0, y0 } = b;
    g.save(); g.globalAlpha = 0.35; ell(x0 + 30, y0 + 58, 14, 6, '#222'); ell(x0 + 96, y0 + 14, 10, 5, '#222'); g.restore();
    rect(x0, y0 + 50, 120, 10, '#b02a24'); poly([cx + 10, y0 + 58, cx + 36, y0 + 58, cx + 22, y0 + 80], '#b02a24');
    for (let i = 0; i < 6; i++) circ(x0 + 10 + i * 20, y0 + 55, 2, '#f2ede0');
    g.save(); g.beginPath(); g.ellipse(cx, y0 - 12, 58, 22, 0, 0, TAU); g.clip();
    rect(cx - 60, y0 - 36, 120, 48, '#e3e8ee'); for (let x = cx - 58; x < cx + 60; x += 8) rect(x, y0 - 36, 3, 48, '#2f4a78');
    g.restore();
    ell(cx + 6, y0 + 2, 46, 6, '#1d2a44');
    for (const dx of [-16, 16]) { circ(cx + dx, y0 - 14, 11, '#a8822f'); circ(cx + dx, y0 - 14, 7, '#7ea4b8'); }
    line(cx - 5, y0 - 14, cx + 5, y0 - 14, '#a8822f', 3);
  },
};

// ---- held items (drawn after the table so they rest on/over it) ----
const HELD = {
  captain(b) {
    const { cx, y0 } = b;
    line(cx + 6, y0 + 46, cx + 40, y0 + 56, '#2a1a0c', 4); rr(cx + 36, y0 + 36, 16, 22, 4, '#5a3016'); ell(cx + 44, y0 + 37, 8, 3, '#1a0e06');
    glow(cx + 44, y0 + 37, 12, 'rgba(255,120,40,0.6)');
    g.strokeStyle = 'rgba(230,225,215,0.35)'; g.lineWidth = 4; g.beginPath(); g.moveTo(cx + 44, y0 + 32);
    g.bezierCurveTo(cx + 30, y0 + 10, cx + 62, y0 - 10, cx + 46, y0 - 40); g.bezierCurveTo(cx + 34, y0 - 60, cx + 64, y0 - 74, cx + 52, y0 - 96); g.stroke();
  },
  painter(b) {
    const { x0, y0 } = b;
    ell(x0 - 32, y0 + 62, 40, 22, '#c9a06a', -0.2); circ(x0 - 50, y0 + 66, 6, '#5a1c22');
    [['#c0392b', -24, 50], ['#2e6db4', -8, 58], ['#f1c40f', -14, 72], ['#27ae60', -40, 52], ['#f4f0e8', -58, 56]].forEach(([c, dx, dy]) => circ(x0 + dx, y0 + dy, 5, c));
    line(x0 + 128, y0 + 52, x0 + 156, y0 - 4, '#6a3a1a', 4); rect(x0 + 152, y0 - 14, 7, 10, '#b0b0b0'); circ(x0 + 157, y0 - 16, 4, '#c0392b');
  },
  physician() {},
  host(b) {
    const { x0, y0 } = b;
    line(x0 + 132, y0 + 50, x0 + 120, y0 + 84, '#2a1608', 8); poly([x0 + 120, y0 + 84, x0 + 126, y0 + 88, x0 + 92, y0 + 150, x0 + 104, y0 + 92], '#d8dde2');
    line(x0 - 12, y0 + 50, x0 + 6, y0 + 86, '#2a1608', 8); line(x0 + 6, y0 + 86, x0 + 28, y0 + 140, '#c8ccd0', 3);
    line(x0 + 22, y0 + 128, x0 + 30, y0 + 146, '#c8ccd0', 2); line(x0 + 28, y0 + 126, x0 + 36, y0 + 144, '#c8ccd0', 2);
  },
  detective(b) {
    const { x0, y0, s } = b, lx = x0 + 85, ly = y0 + 30;
    line(lx + 18, ly + 18, x0 + 134, y0 + 52, '#3a2210', 7);
    g.save(); g.beginPath(); g.arc(lx, ly, 22, 0, TAU); g.clip();
    rect(lx - 24, ly - 24, 48, 48, CL); rect(lx - 9, ly - 18, 1.8 * s, 3.4 * s, EYE); circ(lx - 3, ly - 10, 3, '#fff');
    rect(lx - 24, ly - 24, 48, 48, 'rgba(200,230,255,0.18)'); g.restore();
    ring(lx, ly, 22, 22, '#b8913f', 5); g.save(); g.globalAlpha = 0.6; g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(lx, ly, 16, 3.6, 4.4); g.stroke(); g.restore();
  },
  telegrapher(b) {
    const { x0, y0 } = b, code = '- .... .- -. -.- ...';
    g.save(); g.translate(x0 - 16, y0 + 54); g.rotate(1.8);
    rect(0, -5, 138, 10, '#f2ead6'); let x = 8;
    for (const ch of code) { if (ch === '.') { circ(x, 0, 1.8, '#222'); x += 5; } else if (ch === '-') { rect(x - 2, -1.8, 7, 3.6, '#222'); x += 10; } else x += 5; }
    g.restore();
  },
  engineer(b) { // railroad-grade pocket watch, dangling on its chain
    const { x0, y0 } = b, wx = x0 - 22, wy = y0 + 88;
    line(x0 - 10, y0 + 52, wx, wy - 16, '#d4a94a', 2);
    rect(wx - 3, wy - 20, 6, 6, '#d4a94a'); circ(wx, wy, 14, '#d4a94a'); circ(wx, wy, 11, '#f4ecd4');
    line(wx, wy, wx, wy - 8, '#222', 1.5); line(wx, wy, wx + 6, wy + 2, '#222', 1.5);
  },
};

const CREW = [
  { cx: 290, role: 'captain', name: 'Capt. Clawd' },
  { cx: 460, role: 'painter', name: 'M. Clawd' },
  { cx: 630, role: 'physician', name: 'Dr. Clawd' },
  { cx: 800, role: 'host', name: 'Mr. Clawd, Esq.', standing: true },
  { cx: 970, role: 'detective', name: 'Insp. Clawd' },
  { cx: 1140, role: 'telegrapher', name: 'Clawd, Telegr.' },
  { cx: 1310, role: 'engineer', name: 'Clawd, Engr.' },
];

function drawCrew() {
  for (const c of CREW) {
    if (!c.standing) { g.save(); g.translate(0, -20); chair(c.cx); g.restore(); }
    c.b = c.standing ? clawdBody(c.cx, 532, 10, true) : clawdBody(c.cx, 570, 10);
    WORN[c.role](c.b);
  }
}
function drawHeld() { for (const c of CREW) HELD[c.role](c.b); }
