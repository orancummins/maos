// Records a scripted tour of the standalone page, timed to the narration segments.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const DIR = __dirname;
const PAGE = 'file://' + path.join(DIR, '..', 'index.html');
const END = 'file://' + path.join(DIR, 'endcard.html');
const durs = JSON.parse(fs.readFileSync(path.join(DIR, 'durations.json'), 'utf8'));
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1, recordVideo: { dir: path.join(DIR, 'rec'), size: { width: 1920, height: 1080 } }, colorScheme: 'light' });
  const page = await ctx.newPage();
  const t0 = Date.now();
  const marks = [];
  const COLORS = ['255,0,0','0,255,0','0,0,255','255,255,0','255,0,255','0,255,255','128,0,0','0,128,0','0,0,128','128,128,0','0,0,0'];
  const setMarker = async (i) => page.evaluate((c) => { let m=document.getElementById('__mk'); if(!m){ m=document.createElement('div'); m.id='__mk'; m.style.cssText='position:fixed;left:0;top:0;width:14px;height:14px;z-index:99999;pointer-events:none'; document.body.appendChild(m);} m.style.background='rgb('+c+')'; }, COLORS[i]);
  const mark = async id => { const i = marks.length; marks.push({ id, t: (Date.now() - t0) / 1000, color: COLORS[i] }); await setMarker(i); console.log('mark', id, marks[marks.length - 1].t.toFixed(2)); };
  const until = (id, frac) => { const target = marks.find(m => m.id === id).t + durs[id] * frac; const wait = target * 1000 - (Date.now() - t0); return wait > 0 ? sleep(wait) : Promise.resolve(); };
  const ev = (fn, arg) => page.evaluate(fn, arg);
  const scrollToLayer = async (id, block = 'center') => ev(({ id, block }) => { const e = document.querySelector(`.layer[data-layer="${id}"]`); if (e) e.scrollIntoView({ behavior: 'smooth', block }); }, { id, block });
  const scrollToTile = async (id, block = 'center') => ev(({ id, block }) => { const e = document.getElementById('t-' + String(id).replace(/\./g, '-')); if (e) e.scrollIntoView({ behavior: 'smooth', block }); }, { id, block });

  await page.goto(PAGE);
  await page.addStyleTag({ content: `.steps button.cur{background:var(--panel);box-shadow:inset 0 0 0 1px var(--line-2)} html{scroll-behavior:smooth}` });
  await sleep(1200);

  // 01 — intro on the home screen; hover the planes bottom-up
  await mark('01_intro');
  await until('01_intro', 0.22);
  for (const L of ['L1', 'L2', 'L3', 'L4', 'L5']) { const el = await page.$(`.viz .plane[data-layer="${L}"]`); if (el) { const b = await el.boundingBox(); await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2, { steps: 12 }); } await sleep(2600); }
  await page.mouse.move(400, 900, { steps: 10 });
  await until('01_intro', 1.0);

  // 02 — examples; click Explore near the end
  await mark('02_examples');
  await until('02_examples', 0.9);
  await page.click('#explore');
  await until('02_examples', 1.0);

  // 03 — layers, bottom-up
  await mark('03_layers');
  await scrollToLayer('L1');
  const hov = async (L) => { const el = await page.$(`.layer[data-layer="${L}"] .lab`); if (el) { const b = await el.boundingBox(); if (b) await page.mouse.move(b.x + 60, b.y + b.height / 2, { steps: 8 }); } };
  await sleep(600); await hov('L1');
  await until('03_layers', 0.16); await scrollToLayer('L2'); await sleep(700); await hov('L2');
  await until('03_layers', 0.37); await scrollToLayer('L3'); await sleep(700); await hov('L3');
  await until('03_layers', 0.58); await scrollToLayer('L4'); await sleep(700); await hov('L4');
  await until('03_layers', 0.72); await scrollToLayer('L5'); await sleep(700); await hov('L5');
  await until('03_layers', 0.84); await scrollToLayer('U', 'center'); await sleep(700); await hov('U');
  await until('03_layers', 1.0);

  // 04 — open a tile and a product
  await mark('04_tile');
  await scrollToLayer('L3'); await sleep(700);
  await page.click('#t-3-3'); await sleep(400);
  await until('04_tile', 0.28); await page.click('#dbody .prod:nth-child(1) > button');
  await until('04_tile', 0.62); await ev(() => { document.querySelector('#dbody').scrollBy({ top: 260, behavior: 'smooth' }); });
  await until('04_tile', 0.93); await page.click('#close');
  await until('04_tile', 1.0);

  // 05 — lenses
  await mark('05_lens');
  await scrollToLayer('L4', 'start'); await sleep(300);
  const lensBtn = async (name) => { const bs = await page.$$('#lens button'); for (const b of bs) { if ((await b.textContent()).trim() === name) { await b.click(); return; } } };
  const chip = async (label) => { const cs = await page.$$('#legend .chip'); for (const c of cs) { if ((await c.textContent()).includes(label)) { await c.click(); return; } } };
  await until('05_lens', 0.05); await lensBtn('Customer');
  await until('05_lens', 0.28); await chip('Issuers & banks');
  await until('05_lens', 0.52); await chip('Merchants');
  await until('05_lens', 0.76); await lensBtn('Lifecycle');
  await until('05_lens', 0.95); await lensBtn('Off');
  await until('05_lens', 1.0);

  // journeys
  const journey = async (id, name, segId) => {
    await mark(segId);
    await ev(() => window.scrollTo({ top: document.querySelector('#map').getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' }));
    await sleep(500);
    await page.click('#jbtn'); await sleep(900);
    const items = await page.$$('#jmenu button.j'); for (const it of items) { if ((await it.textContent()).includes(name)) { await it.click(); break; } }
    await sleep(600);
    const n = await ev((id) => JOURNEYS.find(j => j.id === id).steps.length, id);
    const steps = await ev((id) => JOURNEYS.find(j => j.id === id).steps.map(s => s.at), id);
    for (let k = 0; k < n; k++) {
      await until(segId, 0.06 + 0.86 * (k / n));
      await ev((k) => { document.querySelectorAll('.steps button').forEach((b, i) => b.classList.toggle('cur', i === k)); const b = document.querySelectorAll('.steps button')[k]; if (b) b.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, k);
      const at = steps[k]; if (at.startsWith('u-')) await scrollToTile(at, 'center'); else if (at.startsWith('pillar')) await ev(() => document.querySelector('.under').scrollIntoView({ behavior: 'smooth', block: 'center' })); else await scrollToTile(at, 'center');
    }
    await until(segId, 1.0);
  };
  await journey('tap', 'Tap to pay in store', '06_j_tap');
  await journey('subs', 'A subscription renews', '07_j_subs');
  await journey('payout', 'A gig payout in seconds', '08_j_payout');
  await journey('agent', 'An AI agent buys on your behalf', '09_j_agent');

  // 10 — end card
  await page.goto(END); await sleep(200);
  await mark('10_close');
  await until('10_close', 1.0); await sleep(2500);
  await mark('end');

  const vpath = await page.video().path();
  await ctx.close(); await browser.close();
  fs.writeFileSync(path.join(DIR, 'marks.json'), JSON.stringify({ marks, video: vpath }, null, 1));
  console.log('video', vpath);
})();
