/* Builds src/layers.static.html: the layer picture as still HTML and CSS, for viewers that do not run scripts
   (mail attachment previews, the Files app on a phone). assemble.py puts it at the top of layers-standalone.html;
   when the page's script does run, its first statement removes it.

   It is made by opening layers.html in headless Chromium and reading back what the page itself draws: the open
   stack, the globe, the lit circuit and step list for each of the 14 solutions, and every layer, area and product.
   Selecting a solution is a radio button and its label; opening a slice is a <details>. Nothing needs a script.

   Run:  python3 src/assemble.py && node src/prerender-static.js && python3 src/assemble.py   (needs playwright) */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.route('**/*', r => r.request().url().startsWith('http') ? r.abort() : r.continue());
  await page.goto('file://' + path.join(root, 'layers.html'));
  await page.waitForTimeout(300);

  const R = await page.evaluate(() => {
    const q = s => document.querySelector(s), uniq = a => [...new Set(a)];
    const car = '<svg class="car" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
    /* each solution, as the page draws it */
    clearPick(); openStack();
    const outs = OUTCOMES.map(o => { pickOut(o.id);
      return { id: o.id, who: o.who, name: o.name, n: o.steps.length, flow: q('#flow').innerHTML, side: q('#side').innerHTML,
        tiles: uniq(o.steps.map(s => s.at)).filter(t => TILE[t]), layers: uniq(o.steps.map(s => TILE[s.at] && TILE[s.at].L.id).filter(Boolean)) }; });
    clearPick(); openStack();
    /* the globe as it stands before it opens */
    st.p = 0; applyIntro(); const intro = q('#intro').innerHTML; st.p = 1; applyIntro();

    /* one picture: the open stack, every solution's circuit (hidden until chosen), and the globe on top */
    const svg = q('#svg').cloneNode(true);
    svg.setAttribute('class', '');
    svg.querySelector('#flow').innerHTML = outs.map(o => `<g class="njf" data-o="${o.id}">${o.flow}</g>`).join('');
    const ig = svg.querySelector('#intro'); ig.removeAttribute('style'); ig.innerHTML = `<g transform="translate(0,-150)">${intro}</g>`;
    ig.querySelectorAll('[style]').forEach(e => { if (/display:\s*none/.test(e.getAttribute('style'))) e.remove(); });
    /* The land turns without a script: each line of latitude is a strip of dots that slides sideways, squeezed to the
       width of the globe at that latitude, and clipped to the globe's outline. */
    const rows = {}; DOTS.forEach(([c, s, lon]) => { const k = s.toFixed(4); (rows[k] = rows[k] || { c, s, l: [] }).l.push(lon); });
    let land = '';
    Object.values(rows).forEach(r => { const y = GY - GR * r.s, r0 = GR * .0285 * .8, rx = r0 / r.c; let d = '';
      r.l.forEach(lon => [0, 1].forEach(k => { const x = GR * 2 * lon / Math.PI + k * 4 * GR;
        d += `M${f(x - rx)},${f(y)}a${f(rx)},${f(r0)} 0 1,0 ${f(2 * rx)},0a${f(rx)},${f(r0)} 0 1,0 ${f(-2 * rx)},0`; }));
      land += `<g transform="translate(${OX},0) scale(${r.c.toFixed(4)},1)"><path class="njrow" d="${d}"/></g>`; });
    const surf = ig.querySelector('#gsurf');
    ['use', '#gland', '#gmer'].forEach(s => { const e = surf.querySelector(s); if (e) e.remove(); });
    surf.insertAdjacentHTML('afterbegin', `<g class="njland">${land}</g>`);

    /* who, then what to solve */
    const pick = Object.keys(WHO).map(k => { const mine = outs.filter(o => o.who === k);
      return `<details class="njwho" name="njwho"><summary>${svgi(UICON[k], 'mi')}<span class="nm">${esc(WHO[k])}</span><span class="ct">${mine.length} ${mine.length === 1 ? 'solution' : 'solutions'}</span>${car}</summary><div class="njopts">${mine.map(o => `<label for="nj-o-${o.id}">${esc(o.name)}</label>`).join('')}</div></details>`; }).join('');

    /* every slice, area and product */
    const prod = p => `<div class="njprod"><div class="pn">${esc(p.n)}</div>${tagHtml(p) ? `<div class="badges">${tagHtml(p)}</div>` : ''}<p class="pd">${esc(p.d)}</p>${p.note ? `<p class="note"><b>Note</b>${esc(p.note)}</p>` : ''}${p.src && p.src.length ? `<div class="links">${p.src.map(([t, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>`).join('')}</div>` : ''}</div>`;
    let browse = `<details class="njlayer" style="--c:var(--luf);--t:var(--lu)"><summary><span class="sw"></span><span class="nm">Users</span><span class="an">the ecosystem the OS serves</span><span class="ct">8 kinds</span>${car}</summary><div class="njin"><p class="desc">Eight kinds of user sit above the stack, including a new one. Most assets serve several of them.</p><div class="users">${USERS.map((u, i) => `<span>${svgi(UICON[UKEYS[i]], 'ti')}${esc(u)}</span>`).join('')}</div></div></details>`;
    [...LAYERS].reverse().forEach(L => {
      browse += `<details class="njlayer" style="--c:var(--l${L.k}f);--t:var(--l${L.k})"><summary><span class="sw"></span><span class="nm"><span class="id">${L.id}</span>${esc(L.name)}</span><span class="an">${esc(L.an)}</span><span class="ct">${L.tiles.length} areas · ${L.total} products</span>${car}</summary><div class="njin"><p class="desc">${esc(L.desc)}</p>`;
      L.tiles.forEach(t => { const T = MAP.TILES[t.id], live = T.products.filter(p => p.st !== 'retired'), gone = T.products.filter(p => p.st === 'retired');
        browse += `<details class="njtile"><summary><svg class="ti" viewBox="0 0 24 24" aria-hidden="true">${ICONS[t.ic]}</svg><span class="tn"><span class="id">${t.id}</span>${esc(t.n)}</span><span class="ct">${t.c} ${t.c === 1 ? 'product' : 'products'}</span><span class="tb">${esc(t.b)}</span>${car}</summary><div class="njprods">${live.map(prod).join('')}${gone.length ? `<h4>Retired or divested</h4>${gone.map(prod).join('')}` : ''}</div></details>`; });
      browse += `</div></details>`; });
    return { outs, svg: svg.outerHTML, pick, browse };
  });
  await browser.close();

  const O = R.outs, on = o => `#nj-o-${o.id}:checked~.njmain`;
  const list = (o, items, f) => items.map(x => `${on(o)} ${f(x)}`).join(',');
  const rules = O.map(o => [
    `${on(o)} .njf[data-o="${o.id}"],${on(o)} .njpanel[data-o="${o.id}"]{display:block}`,
    `${on(o)} label[for="nj-o-${o.id}"]{background:color-mix(in oklab,var(--gold) 20%,var(--ground));color:var(--ink);font-weight:600}`,
    `${list(o, o.tiles, t => `.blk[data-t="${t}"]`)}{opacity:1}`,
    `${list(o, o.tiles, t => `.blk[data-t="${t}"] .ft`)}{stroke:#FFD966;stroke-width:2.5}`,
    `${list(o, o.layers, l => `.layer[data-l="${l}"] .shade`)}{opacity:.52}`,
    `${on(o)} .utok[data-u="${o.who}"]{opacity:1}`,
  ].join('\n')).join('\n');
  const panels = O.map(o => `<section class="njpanel" data-o="${o.id}"><p class="njup"><a href="#njpic">Lit on the stack above ↑</a></p>${o.side.replace(/ role="button"| tabindex="0"| data-p="[^"]*"/g, '')}</section>`).join('\n');
  const radios = `<input class="njr" type="radio" name="njo" id="nj-o-none" checked aria-label="No solution chosen">` + O.map(o => `<input class="njr" type="radio" name="njo" id="nj-o-${o.id}" aria-label="${o.name.replace(/"/g, '&quot;')}">`).join('');

  const css = `
/* The still version. While it is in the page it replaces the scripted one below it. */
html,body{height:auto!important;overflow:visible!important}
.nojs~.wrap,.nojs~noscript,.nojs~.notice{display:none!important}
.nojs{max-width:640px;margin:0 auto;padding-block:28px 40px}
/* fixed, so that choosing one does not make the viewer scroll to wherever the button itself sits */
.njr{position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none}
.nojs h2{font-size:13px;font-weight:600;color:var(--muted);margin:26px 0 6px}
.njstill{margin:10px 0 0;font-size:12.5px;color:var(--muted);max-width:60ch}
.nojs .pic{margin-top:14px}
.nojs .pic svg{pointer-events:none}
.njf,.njpanel{display:none}
#gsurf .njrow{fill:color-mix(in oklab,var(--l3f),var(--l4f) 55%)}
.nojs #intro{opacity:0;visibility:hidden}
@media (prefers-reduced-motion: no-preference){
  .nojs #intro{animation:njglobe 4.6s ease both}
  .nojs .lift,.nojs .shadow{animation:njstack 4.6s ease backwards}
  .njrow{animation:njspin 11s linear infinite}
  @keyframes njglobe{0%,74%{opacity:1;visibility:visible}100%{opacity:0;visibility:hidden}}
  @keyframes njstack{0%,74%{opacity:0}100%{opacity:1}}
  @keyframes njspin{from{transform:translateX(-840px)}to{transform:translateX(0)}}
}
/* a solution is chosen: dim the stack, then light what delivers it */
#nj-o-none:not(:checked)~.njmain .layer .shade{opacity:.7}
#nj-o-none:not(:checked)~.njmain .blk{opacity:.26}
#nj-o-none:not(:checked)~.njmain .spine,#nj-o-none:not(:checked)~.njmain .pk{opacity:0}
#nj-o-none:not(:checked)~.njmain .utok{opacity:.32}
#nj-o-none:checked~.njmain .njclear{display:none}
${rules}
.nojs summary{list-style:none;cursor:pointer;-webkit-tap-highlight-color:transparent}
.nojs summary::-webkit-details-marker{display:none}
.nojs summary .car{width:16px;height:16px;flex:0 0 auto;fill:none;stroke:var(--muted);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.nojs details[open]>summary .car{transform:rotate(180deg)}
.njpick{border:1px solid var(--line-2);border-radius:14px;overflow:hidden;background:var(--ground)}
.njwho+.njwho{border-top:1px solid var(--line)}
.njwho summary{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 12px 6px 13px;font-size:14.5px;font-weight:600}
.njwho .mi{width:20px;height:20px;flex:0 0 auto;fill:none;stroke:var(--gold-deep);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.njwho .nm{flex:1 1 auto;min-width:0}
.njwho .ct,.njlayer .ct,.njtile .ct{color:var(--muted);font-size:12.5px;font-weight:400;font-variant-numeric:tabular-nums;white-space:nowrap}
.njopts{display:grid;gap:2px;padding:0 8px 10px}
.njopts label{display:flex;align-items:center;min-height:44px;padding:8px 12px;border-radius:8px;font-size:14px;font-weight:500;color:var(--ink-2);cursor:pointer;-webkit-tap-highlight-color:transparent}
.njopts label:active{background:var(--panel)}
.njclear{display:inline-flex;align-items:center;min-height:44px;margin-top:4px;color:var(--muted);font-size:13px;font-weight:500;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.njpanel{margin-top:18px}
.njup{margin:0 0 10px;font-size:13px}
.njup a{display:inline-flex;align-items:center;min-height:40px;color:var(--muted);font-weight:500}
.nojs .step{cursor:default}
.njlayer{border-bottom:1px solid var(--line)}
.njlayer:last-child{border-bottom:0}
.njlayer>summary{display:grid;grid-template-columns:auto minmax(0,1fr) auto 16px;gap:2px 12px;align-items:center;padding:12px 6px}
.njlayer>summary .sw{width:12px;height:12px;border-radius:3px;background:var(--c);grid-row:1 / span 2;align-self:start;margin-top:5px}
.njlayer>summary .nm{font-weight:600;font-size:15.5px;letter-spacing:-.01em}
.njlayer .id,.njtile .id{font-family:var(--mono);font-size:11.5px;font-weight:500;color:var(--t);margin-right:8px}
.njlayer>summary .an{grid-column:2;color:var(--muted);font-size:13px}
.njlayer>summary .ct{grid-row:1 / span 2;grid-column:3}
.njlayer>summary .car{grid-row:1 / span 2;grid-column:4}
.njin{padding:0 0 12px 6px}
.njtile{border-top:1px solid var(--line)}
.njtile>summary{display:grid;grid-template-columns:30px minmax(0,1fr) auto 16px;gap:1px 12px;align-items:start;padding:11px 6px}
.njtile>summary .ti{width:24px;height:24px;grid-row:1 / span 2;margin-top:2px;fill:none;stroke:var(--t);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.njtile>summary .tn{font-weight:600;font-size:14.5px}
.njtile>summary .tb{grid-column:2;color:var(--muted);font-size:13px}
.njtile>summary .car{grid-column:4;grid-row:1;margin-top:3px}
.njprods{display:grid;gap:10px;padding:2px 6px 14px}
.njprods h4{font-size:12.5px;color:var(--muted);margin:10px 0 0;font-weight:600}
.njprod{border:1px solid var(--line);border-radius:12px;padding:12px 14px}
.njprod .pn{font-weight:600;font-size:15px;line-height:1.3}
.njprod .badges{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
.njprod .pd{margin:7px 0 0;color:var(--ink-2);font-size:13.5px;line-height:1.5}
.njprod .note{margin-top:10px}
.njprod .links{margin-top:8px}
.njprod .links a{display:inline-block;padding:6px 0}
`;
  const html = `<div class="nojs" id="nojs">
<style>${css}</style>
${radios}
<div class="njmain">
<header class="head">
  <h1>Mastercard <span class="os">Operating System</span></h1>
  <p class="sub">Five discs that stack into one system. Choose who you are and what you want to solve, and the areas that deliver it light up across the layers, joined in the order they act.</p>
  <p class="njstill">This is the still version, shown because this viewer does not run the page's script. Open the page in a browser for the moving one.</p>
</header>
<div class="pic" id="njpic">${R.svg}</div>
<h2>Choose who you are, then what to solve</h2>
<div class="njpick">${R.pick}</div>
<label class="njclear" for="nj-o-none">Clear the selection</label>
${panels}
<h2>The five slices, top to bottom</h2>
<div class="njbrowse">${R.browse}</div>
</div>
</div>
`;
  fs.writeFileSync(path.join(root, 'src', 'layers.static.html'), html);
  console.log('wrote src/layers.static.html', html.length, 'bytes;', O.length, 'solutions');
})().catch(e => { console.error(e); process.exit(1); });
