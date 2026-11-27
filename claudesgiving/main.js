// Compose the scene
function flame(x, y) {
  glow(x, y, 150, 'rgba(255,170,80,0.28)'); glow(x, y, 40, 'rgba(255,220,150,0.6)');
  g.fillStyle = '#ff9a2a'; g.beginPath(); g.moveTo(x, y - 14); g.quadraticCurveTo(x + 8, y + 2, x, y + 8); g.quadraticCurveTo(x - 8, y + 2, x, y - 14); g.fill();
  ell(x, y + 2, 3, 5, '#fff3c0');
}

function lighting() {
  g.save(); g.globalCompositeOperation = 'multiply';
  rect(0, 0, W, H, '#ffe0bc'); g.restore();
  FLAMES.forEach(([x, y]) => flame(x, y));
  for (const [sx, sy, n] of [[800, 556, 4], [430, 636, 2], [612, 676, 1]]) for (let i = 0; i < n; i++) {
    const x = sx + (i - (n - 1) / 2) * 34;
    g.strokeStyle = 'rgba(255,248,235,0.16)'; g.lineWidth = 6; g.beginPath(); g.moveTo(x, sy);
    g.bezierCurveTo(x - 16, sy - 30, x + 16, sy - 50, x, sy - 80); g.bezierCurveTo(x - 12, sy - 100, x + 10, sy - 115, x + 2, sy - 130); g.stroke();
  }
  glow(800, 620, 420, 'rgba(255,180,100,0.12)');
  g.fillStyle = rad(800, 520, 260, 1000, [[0, 'rgba(0,0,0,0)'], [1, 'rgba(12,5,2,0.78)']]); g.fillRect(0, 0, W, H);
  // film grain
  g.save(); g.globalAlpha = 0.05;
  for (let i = 0; i < 24000; i++) rect(rnd() * W, rnd() * H, 1.5, 1.5, rnd() > 0.5 ? '#fff' : '#000');
  g.restore();
}

function frame() {
  g.strokeStyle = '#6b4a1a'; g.lineWidth = 18; g.strokeRect(9, 9, W - 18, H - 18);
  g.strokeStyle = '#d4a94a'; g.lineWidth = 3; g.strokeRect(20, 20, W - 40, H - 40);
  rr(520, 852, 560, 40, 6, '#2a1a0c'); g.strokeStyle = '#d4a94a'; g.lineWidth = 2; g.beginPath(); g.roundRect(526, 857, 548, 30, 4); g.stroke();
  txt('A Claudesgiving Feast  ·  Anno Domini MDCCCLXXXVII', 800, 873, `20px ${SERIF_SC}`, '#e8cf8a');
}

function draw() {
  seed = 1887; FLAMES.length = 0;
  drawRoom(); drawCrew(); drawTable(); drawHeld(); lighting(); frame();
}

Promise.race([
  Promise.all([document.fonts.load(`20px "IM Fell English SC"`), document.fonts.load(`italic 20px "IM Fell English"`)]),
  new Promise(r => setTimeout(r, 2000)),
]).finally(draw);

cv.addEventListener('click', () => {
  const a = document.createElement('a'); a.download = 'claudesgiving-1887.png'; a.href = cv.toDataURL('image/png'); a.click();
});
