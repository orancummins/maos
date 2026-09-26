// Injected into the page while recording: turns <body> into a camera-driven canvas.
// The window never scrolls; instead the body is translated/scaled with CSS transitions so the
// recording can pan and zoom to whatever the narration is talking about. Overlays that must stay
// put (the marker pixel, the product dialog, the journey panel) are moved out to <html> as a HUD.
(function () {
  const W = innerWidth, H = innerHeight, LAYOUT = window.__LAYOUT_W || 1280, Z = W / LAYOUT;   // page laid out at LAYOUT px, shown at Z× (camera scales are relative to that)
  const html = document.documentElement, body = document.body;
  html.style.overflow = 'hidden'; body.style.width = LAYOUT + 'px'; body.style.transformOrigin = '0 0'; body.style.willChange = 'transform';
  window.scrollTo = window.scroll = window.scrollBy = () => {};
  Element.prototype.scrollIntoView = function () {                 // only scroll element containers, never the window
    let p = this.parentElement; const k = this.offsetWidth ? this.getBoundingClientRect().width / this.offsetWidth : 1;
    while (p && p !== body && p !== html) {
      const cs = getComputedStyle(p);
      if (/(auto|scroll)/.test(cs.overflowY) && p.scrollHeight > p.clientHeight + 1) {
        const r = this.getBoundingClientRect(), pr = p.getBoundingClientRect();
        if (r.top < pr.top + 8) p.scrollTop += (r.top - pr.top) / k - 12; else if (r.bottom > pr.bottom - 8) p.scrollTop += (r.bottom - pr.bottom) / k + 12;
        return;
      }
      p = p.parentElement;
    }
  };
  let cur = { cx: W / 2, cy: H / 2, s: 1 }, inset = 0;
  const apply = (dur, ease) => {
    body.style.transition = dur ? `transform ${dur}ms ${ease || 'cubic-bezier(.45,.05,.2,1)'}` : 'none';
    const vw = W - inset, S = cur.s * Z; body.style.transform = `translate(${vw / 2 - S * cur.cx}px, ${H / 2 - S * cur.cy}px) scale(${S})`;
  };
  const rect = (el) => {                                            // element rect in layout (untransformed) px
    if (typeof el === 'string') el = document.querySelector(el);
    const r = el.getBoundingClientRect(); if (!body.contains(el)) return { x: r.left, y: r.top, w: r.width, h: r.height };
    const m = new DOMMatrix(getComputedStyle(body).transform).inverse();
    const a = m.transformPoint(new DOMPoint(r.left, r.top)), b = m.transformPoint(new DOMPoint(r.right, r.bottom));
    return { x: a.x, y: a.y, w: b.x - a.x, h: b.y - a.y };
  };
  const union = (els) => { const rs = els.map(rect); const x = Math.min(...rs.map(r => r.x)), y = Math.min(...rs.map(r => r.y)); return { x, y, w: Math.max(...rs.map(r => r.x + r.w)) - x, h: Math.max(...rs.map(r => r.y + r.h)) - y }; };
  window.cam = {
    W, H, Z, rect, union,
    inset(px) { inset = px; apply(0); },
    to(cx, cy, s, dur = 900, ease) { cur = { cx, cy, s }; apply(dur, ease); },
    el(el, s, dur, dx = 0, dy = 0, ease) { const r = rect(el); this.to(r.x + r.w / 2 + dx, r.y + r.h / 2 + dy, s, dur, ease); },
    fit(els, pad = 24, dur = 900, maxS = 2.2, dy = 0) { const r = union([].concat(els)); const s = Math.min(maxS * Z, (W - inset - 2 * pad) / r.w, (H - 2 * pad) / r.h) / Z; this.to(r.x + r.w / 2, r.y + r.h / 2 + dy, s, dur); return s; },
    fitWidth(el, pad = 20, dur = 900, maxS = 2.2, dy = 0) { const r = rect(el); const s = Math.min(maxS * Z, (W - inset - 2 * pad) / r.w) / Z; this.to(r.x + r.w / 2, r.y + r.h / 2 + dy, s, dur); return s; },
    top(el, s, dur = 900, pad = 16, dx = 0) { const r = rect(el); this.to(r.x + r.w / 2 + dx, r.y - pad + (H / 2) / (s * Z), s, dur); },
    get() { return { ...cur }; },
    hud(el, on) { el = typeof el === 'string' ? document.querySelector(el) : el; if (on) { html.appendChild(el); el.classList.add('hud'); } else { el.classList.remove('hud'); } }
  };
  // marker pixel for scene detection lives on <html>, outside the camera
  const m = document.createElement('div'); m.id = '__mk'; m.style.cssText = 'position:fixed;left:4px;top:4px;width:14px;height:14px;z-index:99999;pointer-events:none;background:#fff'; html.appendChild(m);
  // dialog + scrim are HUD from the start (position:fixed inside a transformed body would be wrong)
  ['#scrim', '#drawer'].forEach(sel => { const e = document.querySelector(sel); if (e) html.appendChild(e); });
  apply(0);
})();
