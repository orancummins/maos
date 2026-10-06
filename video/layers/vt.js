/* Virtual clock for frame-by-frame capture: page timers, animation frames, CSS animations/transitions and SVG animation all advance only when __vt.step(ms) is called. */
(()=>{
  let now=0, seq=1; const timers=new Map(); let rafs=[]; const base=new WeakMap(), done=new WeakSet();
  performance.now=()=>now;
  const D0=Date.now(); Date.now=()=>D0+Math.round(now);
  window.requestAnimationFrame=cb=>{ const id=seq++; rafs.push([id,cb]); return id; };
  window.cancelAnimationFrame=id=>{ rafs=rafs.filter(r=>r[0]!==id); };
  window.setTimeout=(cb,ms,...a)=>{ const id=seq++; if(typeof cb==="function") timers.set(id,{t:now+(+ms||0),cb,a}); return id; };
  window.clearTimeout=id=>{ timers.delete(id); };
  window.setInterval=(cb,ms,...a)=>{ const id=seq++; timers.set(id,{t:now+(+ms||0),cb,a,every:Math.max(1,+ms||0)}); return id; };
  window.clearInterval=window.clearTimeout;
  const sto=Element.prototype.scrollTo;
  Element.prototype.scrollTo=function(o){ if(o&&typeof o==="object"&&o.behavior==="smooth"){ window.__vt.scroll(this,o.top,460); } else sto.apply(this,arguments); };
  window.__vt={ get now(){ return now; }, clearTimers(){ timers.clear(); },
    scroll(el,to,D){ const from=el.scrollTop, t0=now; const step=t=>{ const k=Math.min(1,(t-t0)/D), q=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2; el.scrollTop=from+(to-from)*q; if(k<1) requestAnimationFrame(step); }; requestAnimationFrame(step); },
    step(dt){ now+=dt;
      for(let g=0;g<2000;g++){ let due=null,did=null; timers.forEach((v,k)=>{ if(v.t<=now&&(!due||v.t<due.t)){ due=v; did=k; } }); if(!due) break; if(due.every) due.t+=due.every; else timers.delete(did); try{ due.cb(...due.a); }catch(e){ console.error("timer",e); } }
      const r=rafs; rafs=[]; r.forEach(q=>{ try{ q[1](now); }catch(e){ console.error("raf",e); } });
      document.getAnimations().forEach(a=>{ if(done.has(a)) return; try{ let b=base.get(a); if(b===undefined){ b=now; base.set(a,b); } a.pause(); const ct=now-b, end=a.effect?a.effect.getComputedTiming().endTime:Infinity; if(isFinite(end)&&ct>=end){ done.add(a); a.finish(); } else a.currentTime=ct; }catch(e){} });
      document.querySelectorAll("svg").forEach(s=>{ if(s.ownerSVGElement) return; try{ s.pauseAnimations(); s.setCurrentTime(now/1000); }catch(e){} });
      return now; } };
})();
