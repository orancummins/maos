// Records a scripted tour of the standalone page, timed to the narration (durations.json + timeline.json).
// The page is driven at 1280×720 CSS px with a 1.5× device scale factor (1920×1080 output) and a CSS
// "camera" (cam.js) that pans and zooms to whatever the narration is describing.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const DIR = __dirname;
const PAGE = 'file://' + path.join(DIR, '..', 'Mastercard-Operating-System.html');
const END = 'file://' + path.join(DIR, 'endcard.html');
const durs = JSON.parse(fs.readFileSync(path.join(DIR, 'durations.json'), 'utf8'));
const lines = JSON.parse(fs.readFileSync(path.join(DIR, 'timeline.json'), 'utf8'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const VW = 1920, VH = 1080, LAYOUT = 1280, Z = VW / LAYOUT;   // page laid out at 1280 px wide, filmed at 1.5× (see cam.js)

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1, recordVideo: { dir: path.join(DIR, 'rec'), size: { width: VW, height: VH } }, colorScheme: 'light' });
  const page = await ctx.newPage();
  const t0 = Date.now();
  const marks = [];
  const COLORS = ['255,0,0', '0,255,0', '0,0,255', '255,255,0', '255,0,255', '0,255,255', '128,0,0', '0,128,0', '0,0,128', '128,128,0', '0,0,0'];
  const setMarker = async (i) => page.evaluate((c) => { const m = document.getElementById('__mk'); if (m) m.style.background = 'rgb(' + c + ')'; }, COLORS[i]);
  const mark = async id => { const i = marks.length; marks.push({ id, t: (Date.now() - t0) / 1000, color: COLORS[i] }); await setMarker(i); console.log('mark', id, marks[marks.length - 1].t.toFixed(2)); };
  const now = () => (Date.now() - t0) / 1000;
  const waitUntil = (t) => { const w = t * 1000 - (Date.now() - t0); return w > 0 ? sleep(w) : Promise.resolve(); };
  const until = (id, frac) => waitUntil(marks.find(m => m.id === id).t + durs[id] * frac);
  const line = (id, i, off = 0) => waitUntil(marks.find(m => m.id === id).t + (lines[id][i] ?? durs[id]) + off);   // start of narration line i (+off s)
  const ev = (fn, arg) => page.evaluate(fn, arg);
  const cam = {
    to: (cx, cy, s, dur) => ev(({ cx, cy, s, dur }) => cam.to(cx, cy, s, dur), { cx, cy, s, dur }),
    el: (sel, s, dur = 900, dx = 0, dy = 0) => ev(({ sel, s, dur, dx, dy }) => cam.el(sel, s, dur, dx, dy), { sel, s, dur, dx, dy }),
    fit: (sels, pad = 24, dur = 900, maxS = 2.2, dy = 0) => ev(({ sels, pad, dur, maxS, dy }) => cam.fit(sels, pad, dur, maxS, dy), { sels, pad, dur, maxS, dy }),
    fitWidth: (sel, pad = 20, dur = 900, maxS = 2.2, dy = 0) => ev(({ sel, pad, dur, maxS, dy }) => cam.fitWidth(sel, pad, dur, maxS, dy), { sel, pad, dur, maxS, dy }),
    inset: (px) => ev((px) => cam.inset(px), px),
    top: (sel, s, dur = 900, pad = 16, dx = 0) => ev(({ sel, s, dur, pad, dx }) => cam.top(sel, s, dur, pad, dx), { sel, s, dur, pad, dx }),
    hud: (sel, on) => ev(({ sel, on }) => cam.hud(sel, on), { sel, on }),
  };
  const tileSel = id => '#t-' + String(id).replace(/\./g, '-');
  const layerSel = id => `.layer[data-layer="${id}"]`;
  const hovLabel = async (L) => { const el = await page.$(`${layerSel(L)} .lab .nm`); if (el) { const b = await el.boundingBox(); if (b) await page.mouse.move(b.x + Math.min(40, b.width / 2), b.y + b.height / 2, { steps: 8 }); } };
  const hovEl = async (sel) => { const el = await page.$(sel); if (el) { const b = await el.boundingBox(); if (b) await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2, { steps: 10 }); } };

  await page.goto(PAGE);
  await page.addStyleTag({ content: `
    html{scroll-behavior:auto}
    body{width:${LAYOUT}px} .hero{min-height:720px}
    html>#drawer{max-height:660px;transform:translate(-50%,-50%) scale(${Z * 0.985})} html>#drawer.open{transform:translate(-50%,-50%) scale(${Z})}
    .layer,.under{grid-template-columns:170px minmax(0,1fr)}
    .tiles{grid-template-columns:repeat(auto-fill,minmax(156px,1fr))}
    .board.journey{grid-template-columns:minmax(0,1fr)}
    html>#drawer,html>#jpanel{font-family:var(--font);font-size:14px;line-height:1.5;color:var(--ink);-webkit-font-smoothing:antialiased}
    html>#jpanel.hud{display:flex;position:fixed;top:20px;right:20px;bottom:auto;width:372px;max-height:${Math.round((VH - 40) / Z)}px;z-index:60;box-shadow:var(--sh3);border-color:var(--line-2);transform:scale(${Z});transform-origin:top right}
    .steps button.cur{background:var(--panel);box-shadow:inset 0 0 0 1px var(--line-2)}
    .tile,.lab .nm,.lab .id,.lab .an{transition:none}
  ` });
  await ev((w) => { window.__LAYOUT_W = w; }, LAYOUT); await page.addScriptTag({ path: path.join(DIR, 'cam.js') });
  await sleep(1200);

  // 01 — intro on the home screen: slow push-in, hovering the planes as the narration names the layers
  await mark('01_intro');
  await cam.el('.hero', 1.0, 0);
  await cam.el('.hero', 1.05, 34000, 34, 0);
  const plane = async (L) => hovEl(`.viz .plane[data-layer="${L}"]`);
  await line('01_intro', 3); await plane('L1');            // "Behind that card sits a network…"
  await line('01_intro', 4); await plane('L2');            // "Six ways to move money…"
  await line('01_intro', 5); await plane('L3');            // "The services that make every payment safe"
  await line('01_intro', 6); await plane('L4');            // "data and intelligence businesses"
  await line('01_intro', 7); await page.mouse.move(450, 980, { steps: 8 });
  await line('01_intro', 8, 0.2); for (const L of ['L1', 'L2', 'L3', 'L4', 'L5']) { await plane(L); await sleep(1150); }   // "A kernel. Rails. …"
  await page.mouse.move(450, 980, { steps: 8 });
  await until('01_intro', 1.0);

  // 02 — examples: on the animated stack; open the map on "Let's open the map"
  await mark('02_examples');
  await cam.el('#viz', 1.45, 2200, 40, 0);
  await line('02_examples', 4);                            // "Let's open the map."
  await ev(() => goMap());
  await cam.top('#map', 1.0, 1400, 24);
  await until('02_examples', 1.0);

  // 03 — layers, bottom-up: overview, then each row fills the frame as it is named
  await mark('03_layers');
  await cam.fit('#stack', 30, 1200);
  await line('03_layers', 1); await cam.fitWidth(layerSel('L1'), 20, 1000, 1.25); await sleep(1000); await hovLabel('L1');
  await line('03_layers', 2); await cam.fitWidth(layerSel('L2'), 20, 1000, 1.25); await sleep(1000); await hovLabel('L2');
  await line('03_layers', 3); await cam.fitWidth(layerSel('L3'), 20, 1000, 1.25); await sleep(1000); await hovLabel('L3');
  await line('03_layers', 4); await cam.fitWidth(layerSel('L4'), 20, 1000, 1.25); await sleep(1000); await hovLabel('L4');
  await line('03_layers', 5); await cam.fitWidth(layerSel('L5'), 20, 1000, 1.25); await sleep(1000); await hovLabel('L5');
  await line('03_layers', 6); await cam.fitWidth(layerSel('U'), 20, 1000, 1.25); await sleep(1000); await hovLabel('U');
  await page.mouse.move(960, 1050, { steps: 6 });
  await until('03_layers', 1.0);

  // 04 — open a tile and a product (the dialog is a HUD, so it is always framed)
  await mark('04_tile');
  await cam.el(tileSel('3.3'), 1.6, 1000);
  await line('04_tile', 0, 0.9); await hovEl(tileSel('3.3')); await sleep(350); await ev((s) => document.querySelector(s).click(), tileSel('3.3'));
  await line('04_tile', 2); await ev(() => document.querySelector('#dbody .prod:nth-child(1) > button').click());
  await line('04_tile', 2, 2.2); await ev(() => { document.querySelector('#dbody').scrollBy({ top: 260, behavior: 'smooth' }); });
  await until('04_tile', 0.97); await ev(() => document.querySelector('#close').click());
  await until('04_tile', 1.0);

  // 05 — lenses
  await mark('05_lens');
  const lensBtn = (name) => ev((name) => { const b = [...document.querySelectorAll('#lens button')].find(b => b.textContent.trim() === name); if (b) b.click(); }, name);
  const chip = (label) => ev((label) => { const c = [...document.querySelectorAll('#legend .chip')].find(c => c.textContent.includes(label)); if (c) c.click(); }, label);
  await cam.top('.controls', 1.25, 1000, 40, -112);
  await line('05_lens', 0, 1.3); await hovEl('#lens button:has-text("Customer")'); await sleep(300); await lensBtn('Customer'); await sleep(250); await cam.top('.controls', 1.25, 700, 40, -112);
  await line('05_lens', 1); await chip('Issuers & banks'); await sleep(300); await cam.fit([layerSel('L4'), layerSel('L3')], 24, 1200);
  await line('05_lens', 2); await chip('Merchants'); await sleep(300); await cam.fit([layerSel('L5'), layerSel('L3')], 24, 1200);
  await line('05_lens', 3); await cam.top('.controls', 1.25, 700, 40, -112); await sleep(750); await lensBtn('Lifecycle'); await sleep(400); await cam.fit(['.controls', layerSel('L4')], 24, 1200);
  await until('05_lens', 0.97); await lensBtn('Off');
  await until('05_lens', 1.0);

  // journeys: the panel becomes a HUD on the right; the camera follows each step through the layers
  const startJourney = async (name) => {
    await cam.top('.controls', 1.0, 900, 40); await sleep(950);
    await hovEl('#jbtn'); await sleep(200); await ev(() => document.querySelector('#jbtn').click()); await sleep(900);
    await hovEl(`#jmenu button.j:has-text("${name}")`).catch(() => {}); await sleep(250);
    await ev((name) => { const it = [...document.querySelectorAll('#jmenu button.j')].find(b => b.textContent.includes(name)); if (it) it.click(); }, name);
    await sleep(700);                                       // paintJourney runs at scale 1
    await cam.hud('#jpanel', true); await cam.inset(Math.round(372 * Z + 40));
  };
  const step = async (k) => ev((k) => { document.querySelectorAll('.steps button').forEach((b, i) => b.classList.toggle('cur', i === k)); const b = document.querySelectorAll('.steps button')[k]; if (b) b.scrollIntoView({ block: 'nearest' }); }, k);
  const goStep = async (id, k, s = 1.5) => { const at = await ev(({ id, k }) => JOURNEYS.find(j => j.id === id).steps[k].at, { id, k }); await step(k); if (at.startsWith('pillar')) await cam.el('.under', 1.2, 900); else await cam.el(tileSel(at), s, 900); };
  const endJourney = async () => { await cam.hud('#jpanel', false); await cam.inset(0); await ev(() => closeJourney()); await sleep(300); };

  await mark('06_j_tap');
  await startJourney('Tap to pay in store');
  await line('06_j_tap', 2); await goStep('tap', 0);                            // "A shopper taps a phone." (consumer)
  await line('06_j_tap', 3); await goStep('tap', 1);                            // MDES token
  await line('06_j_tap', 4); await goStep('tap', 2);                            // terminal reads it
  await line('06_j_tap', 5); await goStep('tap', 3);                            // acquirer forwards it
  await line('06_j_tap', 6); await goStep('tap', 4);                            // card rail
  await line('06_j_tap', 6, 2.3); await goStep('tap', 5);                       // the switch
  await line('06_j_tap', 7); await goStep('tap', 6);                            // Decision Intelligence
  await line('06_j_tap', 8); await goStep('tap', 7);                            // issuer approves
  await line('06_j_tap', 9); await goStep('tap', 8);                            // alert to the app
  await line('06_j_tap', 10); await goStep('tap', 9, 1.3);                      // SpendingPulse
  await line('06_j_tap', 10, 1.6); await cam.fit('#stack', 30, 1500);           // the whole path
  await until('06_j_tap', 1.0);
  await endJourney();

  await mark('07_j_agent');
  await startJourney('An AI agent buys on your behalf');
  await line('07_j_agent', 1); await goStep('agent', 0);                        // "An AI agent is asked…" (AI agents)
  await line('07_j_agent', 2); await goStep('agent', 1);                        // Know Your Agent
  await line('07_j_agent', 3); await goStep('agent', 2);                        // agentic token + verifiable intent
  await line('07_j_agent', 4); await goStep('agent', 3);                        // payment passkey
  await line('07_j_agent', 5); await goStep('agent', 4);                        // Agent Pay
  await line('07_j_agent', 6); await goStep('agent', 5);                        // Merchant Cloud
  await line('07_j_agent', 7); await goStep('agent', 6);                        // the switch
  await line('07_j_agent', 8); await goStep('agent', 7);                        // DI Pro
  await line('07_j_agent', 9); await goStep('agent', 8);                        // issuer approves
  await line('07_j_agent', 9, 1.3); await goStep('agent', 9, 1.3);              // Consumer Clarity
  await line('07_j_agent', 9, 2.8); await cam.fit('#stack', 30, 1500);
  await until('07_j_agent', 1.0);

  // 08 — end card
  await page.goto(END); await sleep(200);
  await ev(() => { const m = document.createElement('div'); m.id = '__mk'; m.style.cssText = 'position:fixed;left:4px;top:4px;width:14px;height:14px;z-index:99999;pointer-events:none'; document.documentElement.appendChild(m); });
  await mark('08_close');
  await until('08_close', 1.0); await sleep(2400);
  await mark('end'); await sleep(600);

  const vpath = await page.video().path();
  await ctx.close(); await browser.close();
  fs.writeFileSync(path.join(DIR, 'marks.json'), JSON.stringify({ marks, video: vpath }, null, 1));
  console.log('video', vpath);
})();
