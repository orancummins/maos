/* Page-side helpers for the Enterprise Loyalty film. Injected into rec.html by record.js; nothing here changes the layer picture's source.
   - Placeholder cards for the real-life scenes sit behind the page; the page shrinks to a mini-map in the corner while they show.
   - The flow is revealed step by step under the recorder's control, instead of drawing itself in one go.
   - A title overlay and an end card carry a slot for the official brand artwork (supplied as a file, never drawn here). */
window.__filmInit=function(CARDS,MARK){
  const NS="http://www.w3.org/2000/svg", $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const html=document.documentElement, body=document.body;
  const css=document.createElement("style"); css.textContent=`
    html{background:#0E1116;overflow:hidden}
    body{position:relative;z-index:1;width:1280px;height:720px;overflow:hidden;background:var(--ground);transform-origin:0 0}
    #__live{position:fixed;inset:0;z-index:0;font-family:var(--font);color:#fff}
    .lc{position:absolute;inset:0;opacity:0;transition:opacity .45s ease}
    .lc.on{opacity:1}
    .lc::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.028) 0 2px,transparent 2px 16px)}
    .lc .tag{position:absolute;left:64px;top:56px;font:500 12px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#F7B53E;border:1px solid rgba(247,181,62,.55);border-radius:999px;padding:8px 14px}
    .lc .sc{position:absolute;left:64px;top:132px;font:500 14px/1 var(--mono);letter-spacing:.06em;color:rgba(255,255,255,.62)}
    .lc h2{position:absolute;left:64px;top:160px;margin:0;font:600 56px/1.05 var(--font);letter-spacing:-.02em;max-width:580px}
    .lc ul{position:absolute;left:64px;top:310px;margin:0;padding:0;list-style:none;max-width:540px}
    .lc li{font:400 21px/1.42 var(--font);color:#D5DBE4;padding-left:22px;position:relative;margin-bottom:12px}
    .lc li::before{content:"";position:absolute;left:0;top:.62em;width:8px;height:2px;background:#F7B53E}
    .lc .ft{position:absolute;left:64px;bottom:44px;font:400 13px/1 var(--mono);color:rgba(255,255,255,.45)}
    .ph{position:absolute;left:684px;top:52px;width:264px;height:560px;border-radius:42px;border:2px solid rgba(255,255,255,.26);background:#090B0F;box-shadow:0 30px 60px -20px rgba(0,0,0,.6)}
    .ph::before{content:"";position:absolute;left:50%;top:14px;width:76px;height:20px;margin-left:-38px;border-radius:12px;background:#1A1E25}
    .ph .app{position:absolute;left:22px;top:56px;font:500 12px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5)}
    .ph .nts{position:absolute;left:14px;right:14px;top:84px;display:flex;flex-direction:column;gap:10px}
    .nt{background:rgba(255,255,255,.1);border-radius:16px;padding:12px 14px;opacity:0;transform:translateY(12px);transition:opacity .35s ease,transform .35s ease}
    .nt.on{opacity:1;transform:none}
    .nt b{display:block;font:600 15px/1.25 var(--font);color:#fff}
    .nt span{display:block;font:400 13px/1.3 var(--font);color:#B9C2CE;margin-top:3px}
    .nt.hl{background:rgba(247,181,62,.16);box-shadow:inset 3px 0 0 #F7B53E}
    .nt.hl b{color:#FFD27A}
    .nt i{display:inline-block;font:600 12px/1 var(--font);font-style:normal;color:#0B0F14;background:#fff;border-radius:999px;padding:7px 12px;margin-top:9px;transition:background .2s,transform .2s}
    .nt.pressed i{background:#F7B53E;transform:scale(.94)}
    .mml{position:absolute;right:28px;bottom:304px;width:270px;font:500 11px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.6);opacity:0;transition:opacity .4s}
    .mml.on{opacity:1}
    #__mmb{position:fixed;z-index:0;right:28px;bottom:28px;width:269px;height:265px;border-radius:12px;background:#fff;box-shadow:0 18px 40px -10px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.16);opacity:0}
    #__ttl,#__end{position:fixed;inset:0;z-index:60;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;opacity:0;pointer-events:none;font-family:var(--font);color:var(--ink)}
    #__ttl{background:rgba(255,255,255,.9)}
    #__end{background:#fff}
    #__ttl .t,#__end .t{font:650 64px/1 var(--font);letter-spacing:-.025em}
    #__ttl .s,#__end .s{font:400 24px/1.2 var(--font);color:var(--muted)}
    .mark{height:104px;display:flex;align-items:center;justify-content:center;margin-bottom:10px}
    .mark img{width:146px;height:auto;display:block}
    .mark .slot{width:146px;height:92px;border:1.5px dashed var(--line-2);border-radius:10px;display:flex;align-items:center;justify-content:center;text-align:center;font:500 11px/1.35 var(--mono);color:var(--faint);letter-spacing:.04em}
    #flow .__s{animation:none!important}
    #side .step{transition:opacity .35s}
    #side .step.__wait{opacity:.26}
    #__hd{fill:#fff;stroke:#FFB000;stroke-width:2.2}
  `; document.head.appendChild(css);

  /* ---------- placeholder cards ---------- */
  const mix=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t)), rgb=c=>`rgb(${c.join(",")})`;
  const live=document.createElement("div"); live.id="__live";
  live.innerHTML=CARDS.map(c=>{ const a=mix([18,24,33],[58,36,20],c.tone), b=mix([10,13,18],[24,15,9],c.tone);
    return `<div class="lc" data-id="${c.id}" style="background:radial-gradient(900px 600px at 28% 30%,${rgb(a)},${rgb(b)})">
      <div class="tag">Real-life footage · placeholder</div><div class="sc">${c.scene}</div><h2>${c.place}</h2>
      <ul>${c.shot.map(x=>`<li>${x}</li>`).join("")}</ul><div class="ft">Maya and Harbour Bank are invented</div>
      ${c.notes.length?`<div class="ph"><div class="app">Harbour Bank</div><div class="nts">${c.notes.map(n=>`<div class="nt${n.hl?" hl":""}" data-k="${n.k}"><b>${n.t}</b><span>${n.s}</span>${n.btn?`<i>${n.btn}</i>`:""}</div>`).join("")}</div></div>`:""}
      ${c.mini?`<div class="mml">On the Operating System</div>`:""}</div>`; }).join("");
  html.insertBefore(live,body);
  const mmb=document.createElement("div"); mmb.id="__mmb"; html.insertBefore(mmb,body);
  const mark=MARK?`<div class="mark"><img src="${MARK}" alt=""></div>`:`<div class="mark"><div class="slot">Brand mark slot<br>official artwork goes here</div></div>`;
  const ttl=document.createElement("div"); ttl.id="__ttl"; ttl.innerHTML=`${mark}<div class="t">Enterprise Loyalty</div><div class="s">Reward every touchpoint</div>`; html.appendChild(ttl);
  const end=document.createElement("div"); end.id="__end"; end.innerHTML=`${mark}<div class="t">Enterprise Loyalty</div><div class="s">Every touchpoint counts</div>`; html.appendChild(end);

  /* ---------- tweened values: m (0 full page, 1 mini-map), bo (page opacity), ttl, end, F (how much of the circuit is lit) ---------- */
  const V={m:0,bo:0,ttl:0,end:0,F:0}, TW={};
  const ease=k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;
  const REG={x:20,y:88,w:640,h:632}, SC=.42, MG=28;
  function place(){
    const m=V.m, s=1+(SC-1)*m, tx=((1280-MG-REG.w*SC)-REG.x*SC)*m, ty=((720-MG-REG.h*SC)-REG.y*SC)*m;
    if(m<=0){ body.style.transform="none"; body.style.clipPath="none"; }
    else { body.style.transform=`translate(${tx.toFixed(2)}px,${ty.toFixed(2)}px) scale(${s.toFixed(4)})`;
      body.style.clipPath=`inset(${(REG.y*m).toFixed(1)}px ${((1280-REG.x-REG.w)*m).toFixed(1)}px ${((720-REG.y-REG.h)*m).toFixed(1)}px ${(REG.x*m).toFixed(1)}px round ${(12*m/s).toFixed(1)}px)`; }
    body.style.opacity=V.bo; mmb.style.opacity=Math.max(0,Math.min(1,(m-.55)/.45))*V.bo;
    ttl.style.opacity=V.ttl; end.style.opacity=V.end;
  }

  /* ---------- the circuit, lit as far as the film has got ---------- */
  const RV={R:0,loop:false,pendR:null,segs:[],areas:[],L:0,geo:null,hd:null};
  function prep(){
    const g=$("#flow > g"); if(!g) return false;
    if(g.dataset.fp) return true;
    const cc=g.querySelector("path.cc"); if(!cc||typeof curOut!=="function"||!curOut()) return false;
    const d=cc.getAttribute("d"), subs=d.split(/(?=M)/).filter(x=>x.trim());
    const geo=document.createElementNS(NS,"path"); geo.setAttribute("d",d); geo.setAttribute("fill","none"); geo.setAttribute("stroke","none"); g.appendChild(geo);
    RV.geo=geo; RV.L=geo.getTotalLength(); RV.segs=[];
    ["ck","cg","cm","cc"].forEach(cls=>{ const o=g.querySelector("path."+cls); if(!o) return; let acc=0;
      subs.forEach(sd=>{ const p=o.cloneNode(false); p.setAttribute("d",sd); p.removeAttribute("pathLength"); p.setAttribute("class",cls+" __s"); o.parentNode.insertBefore(p,o);
        const len=p.getTotalLength(); p.style.strokeDasharray=`${len} ${len+2}`; RV.segs.push({el:p,start:acc,len}); acc+=len; });
      o.remove(); });
    const steps=curOut().steps, order=[]; steps.forEach((s,n)=>{ let a=order.find(x=>x.t===s.at); if(!a){ a={t:s.at,nums:[]}; order.push(a); } a.nums.push(n+1); });
    const pr=[...g.querySelectorAll("ellipse.pr")], prg=[...g.querySelectorAll("ellipse.prg")], bd=[...g.querySelectorAll("rect.fnode")].map(r=>r.parentNode);
    const N=1600, pts=[]; for(let i=0;i<=N;i++){ const q=geo.getPointAtLength(RV.L*i/N); pts.push([q.x,q.y]); }
    order.forEach((a,k)=>{ a.pr=pr[k]; a.prg=prg[k]; a.badge=bd[k]; a.txt=bd[k]&&bd[k].querySelector("text");
      const cx=+pr[k].getAttribute("cx"), cy=+pr[k].getAttribute("cy"); let best=1e9, bi=0;
      pts.forEach((q,i)=>{ const dd=(q[0]-cx)*(q[0]-cx)+(q[1]-cy)*(q[1]-cy); if(dd<best){ best=dd; bi=i; } }); a.frac=bi/N; });
    order[order.length-1].frac=1;
    RV.areas=order;
    const hd=document.createElementNS(NS,"circle"); hd.id="__hd"; hd.setAttribute("r","4.6"); g.appendChild(hd); RV.hd=hd;
    g.dataset.fp="1"; return true;
  }
  const fracOf=R=>{ if(R<=0||!RV.areas.length) return 0; const a=RV.areas.find(x=>x.nums.includes(R)); return a?a.frac:1; };
  function light(){
    if(!prep()) return;
    const F=V.F, L=RV.L;
    RV.segs.forEach(s=>{ const vis=Math.max(0,Math.min(s.len,F*L-s.start)); s.el.style.strokeDashoffset=(s.len-vis).toFixed(2); s.el.style.visibility=vis<.5?"hidden":"visible"; });
    RV.areas.forEach(a=>{ const shown=a.nums.filter(n=>n<=RV.R), on=shown.length>0, o=on?"1":"0";
      if(a.pr) a.pr.style.opacity=o; if(a.prg) a.prg.style.opacity=o; if(a.badge) a.badge.style.opacity=o; if(a.txt&&on) a.txt.textContent=shown.join("·");
      $$(`#svg .blk[data-t="${a.t}"]`).forEach(b=>b.classList.toggle("on",on)); });
    $$("#side .step").forEach((li,i)=>li.classList.toggle("__wait",i+1>RV.R));
    const moving=!!TW.F&&TW.F.to!==TW.F.from, q=RV.geo.getPointAtLength(F*L);
    RV.hd.setAttribute("cx",q.x.toFixed(1)); RV.hd.setAttribute("cy",q.y.toFixed(1)); RV.hd.style.display=moving&&!RV.loop?"":"none";
    const cp=$("#flow .cp"); if(cp) cp.style.display=RV.loop?"":"none";
  }

  window.__film={
    tw(name,to,d){ TW[name]={from:V[name],to,t0:__vt.now,d:Math.max(1,d*1000)}; },
    set(name,v){ delete TW[name]; V[name]=v; place(); },
    card(id){ $$(".lc").forEach(c=>{ const on=c.dataset.id===id; c.classList.toggle("on",on); if(!on) c.querySelectorAll(".nt").forEach(n=>n.classList.remove("on","pressed")); const l=c.querySelector(".mml"); if(l) l.classList.toggle("on",on); }); },
    note(id,k){ const n=$(`.lc[data-id="${id}"] .nt[data-k="${k}"]`); if(n) n.classList.add("on"); },
    press(id,k){ const n=$(`.lc[data-id="${id}"] .nt[data-k="${k}"]`); if(n) n.classList.add("pressed"); },
    go(R,d){ prep(); RV.pendR=R; TW.F={from:V.F,to:fracOf(R),t0:__vt.now,d:Math.max(1,d*1000)}; },
    loop(on){ RV.loop=on; },
    frame(){ const now=__vt.now;
      Object.keys(TW).forEach(n=>{ const t=TW[n], k=Math.min(1,(now-t.t0)/t.d); V[n]=t.from+(t.to-t.from)*ease(k); if(k>=1){ delete TW[n]; if(n==="F"&&RV.pendR!=null){ RV.R=RV.pendR; RV.pendR=null; } } });
      place(); light(); }
  };
  place();
};
