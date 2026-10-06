/* Records the layer picture frame by frame against the narration timeline.
   node record.js full   -> silent.mp4 (1920x1080, 30 fps)
   node record.js board  -> board/*.jpg, one frame a second, for a quick check
   The page runs on a virtual clock (vt.js), so every frame is rendered exactly and the timing never drifts. */
const { chromium } = require('playwright');
const fs=require('fs'), path=require('path'), { spawn } = require('child_process');
const FPS=30, DT=1000/FPS, W=1280, H=720, DSF=1.5;
const MODE=process.argv[2]||'full';            // full | board (one frame a second, saved as JPEGs)
const TL=JSON.parse(fs.readFileSync('timeline.json','utf8')), T=TL.lines, TOTAL=TL.total;
const S=id=>T[id].start, E=id=>T[id].end;
(async()=>{
  const b=await chromium.launch({args:['--force-color-profile=srgb','--font-render-hinting=none']});
  const ctx=await b.newContext({viewport:{width:W,height:H},deviceScaleFactor:DSF});
  const page=await ctx.newPage(); const errs=[];
  page.on('pageerror',e=>errs.push('ERR '+e)); page.on('console',m=>{ if(m.type()==='error') errs.push('console '+m.text()); });
  await page.addInitScript({path:'vt.js'});
  await page.goto('file://'+path.resolve('rec.html'));
  await page.evaluate(()=>document.fonts.ready);
  await page.evaluate(()=>{
    __vt.clearTimers();                         // the recording starts the opening itself
    const st=document.createElement('style'); st.textContent=`:focus-visible{outline:none!important}.layer:focus-visible .slabtop{stroke:var(--edge)!important;stroke-width:1!important}
      #__cur{position:fixed;left:0;top:0;z-index:99999;pointer-events:none;opacity:0;transition:opacity .35s;will-change:transform}#__cur.on{opacity:1}
      #__cur svg{display:block;width:26px;height:26px;filter:drop-shadow(0 2px 3px rgba(0,0,0,.35))}
      .__rip{position:fixed;z-index:99998;pointer-events:none;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:2.5px solid #F79E1B;background:rgba(247,158,27,.18);animation:__rip .55s ease-out forwards}
      @keyframes __rip{from{transform:scale(.25);opacity:1}to{transform:scale(1.25);opacity:0}}`; document.head.appendChild(st);
    const c=document.createElement('div'); c.id='__cur'; c.innerHTML='<svg viewBox="0 0 24 24"><path d="M4 2.5v17l4.7-4.3 3 7 2.9-1.25-3-6.95 6.4-.4z" fill="#111827" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>'; document.body.appendChild(c);
    document.addEventListener('mousemove',e=>{ c.style.transform=`translate(${e.clientX-4}px,${e.clientY-2}px)`; },true);
    document.addEventListener('mousedown',e=>{ const r=document.createElement('div'); r.className='__rip'; r.style.left=e.clientX+'px'; r.style.top=e.clientY+'px'; document.body.appendChild(r); setTimeout(()=>r.remove(),600); },true);
  });
  const client=await ctx.newCDPSession(page);
  // ---- cue helpers
  const cues=[]; const at=(t,fn)=>cues.push({t:t*1000,fn});
  let mouse={x:682,y:664}, tween=null; await page.mouse.move(mouse.x,mouse.y);
  const pos=async(sel,fx=.5,fy=.5,dx=0,dy=0)=>{ const r=await page.evaluate(([sel])=>{ const e=document.querySelector(sel); if(!e) return null; const r=e.getBoundingClientRect(); return {x:r.x,y:r.y,w:r.width,h:r.height}; },[sel]); if(!r) throw new Error('missing '+sel); return {x:r.x+r.w*fx+dx,y:r.y+r.h*fy+dy}; };
  let busy=0; const warn=[];
  const move=(t,d,target)=>{ if(t<busy-1e-6) warn.push(`overlap: move at ${t.toFixed(2)} starts before ${busy.toFixed(2)}`); busy=Math.max(busy,t+d); return move0(t,d,target); };
  const move0=(t,d,target)=>at(t,async now=>{ const p=typeof target==='function'?await target():target; tween={t0:now,d:d*1000,from:{...mouse},to:p}; });
  const click=(t,target,d=.75)=>{ move(t-d-.08,d+.1,target); at(t,async()=>{ await page.mouse.down(); await page.mouse.up(); await page.evaluate(()=>{ const a=document.activeElement; if(a&&a!==document.body&&a.blur) a.blur(); }); }); };
  const hover=(t,target,d=.6)=>move(t-d,d,target);
  const reveal=(t,sel)=>at(t,()=>page.evaluate(([sel])=>{ const e=document.querySelector(sel), sc=document.querySelector('.right'); if(!e||!sc) return; const a=e.getBoundingClientRect(), b=sc.getBoundingClientRect(); let to=sc.scrollTop; if(a.bottom>b.bottom-24) to+=a.bottom-b.bottom+60; else if(a.top<b.top+10) to+=a.top-b.top-40; if(Math.abs(to-sc.scrollTop)>2) __vt.scroll(sc,Math.max(0,to),520); },[sel]));
  const face=l=>()=>pos(`.layer[data-l="${l}"] .face`,.5,1,0,-17);
  const step=p=>()=>pos(`#side .step[data-p="${p}"] .st`,0,.5,60,2);

  // ---- the film
  at(.5,()=>page.evaluate(()=>document.querySelector('#__cur').classList.add('on')));
  // opening: the globe revolves under the first line, then is cut into the stack
  click(E('o2')+.2,()=>pos('#grim',.56,.5),1.0);
  // the five layers, bottom to top, then the users
  click(S('l2')-.95,()=>pos('.layer[data-l="L5"] .slabtop',.5,.62),.8);     // open the stack
  [['l2','L1'],['l3','L2'],['l4','L3'],['l5','L4'],['l6','L5']].forEach(([n,l])=>click(S(n)+.25,face(l),.7));
  click(S('l7')+.2,()=>pos('.layer[data-l="U"] .utok[data-u="gov"]',.5,.5),.7);
  // example one: a bank cutting fraud
  click(S('a1')-.35,()=>pos('#s-who',.45,.5),.9);
  click(S('a1')+.85,()=>pos('#m-who [data-who="iss"]',.4,.5),.6);
  click(S('a1')+2.9,()=>pos('#m-out [data-out="fraud"]',.4,.5),.8);
  move(S('a2')+.6,1.2,{x:682,y:404});
  [['a3','recfut'],['a4','mcti'],['a5','mdes'],['a6','idcheck'],['a7','dipro']].forEach(([n,p])=>{ reveal(S(n)-1.2,`#side .step[data-p="${p}"]`); hover(S(n)+.05,step(p)); });
  reveal(S('a7')+2.4,'#side .step[data-p="data"]'); hover(S('a7')+3.6,step('data'));
  click(S('a8')+1.0,step('dipro'),.8);
  hover(S('a9')+1.3,()=>pos('#dbody .what',.3,.5),.9);
  hover(S('a9')+5.6,()=>pos('#dbody .track',.42,.5,0,4),.9);
  hover(S('a10')+1.6,()=>pos('#dbody .what',.62,.86),.9);
  click(E('a10')+.5,()=>pos('#close'),.8);
  // example two: a government paying people
  click(S('b1')+.75,()=>pos('#s-who',.45,.5),.8);
  click(S('b1')+1.9,()=>pos('#m-who [data-who="gov"]',.4,.5),.6);
  click(S('b1')+3.4,()=>pos('#m-out [data-out="disburse"]',.4,.5),.8);
  [['b2','bacs',.05],['b3','disb',.05],['b3','send',3.3],['b4','communitypass',.05],['b5','a2aprotect',.05],['b6','spendingpulse',.05]].forEach(([n,p,o])=>{ reveal(S(n)+o-1.25,`#side .step[data-p="${p}"]`); hover(S(n)+o,step(p)); });
  reveal(S('b7')-.6,'#side .step[data-p="communitypass"]');
  click(S('b7')+.9,step('communitypass'),.8);
  hover(S('b8')+1.2,()=>pos('#dbody .what',.3,.5),.9);
  hover(S('b9')+1.6,()=>pos('#dbody .serves',.5,.5),.9);
  hover(S('b9')+4.2,()=>pos('#dbody .what',.7,.8),.9);
  click(E('b9')+.7,()=>pos('#close'),.8);
  // close: put it back together, and back to the globe
  click(S('c1')+.5,()=>pos('#clr'),.8);
  move(S('c1')+1.2,1.4,{x:682,y:560});
  click(S('c2')-.9,()=>pos('#again'),.9);
  move(S('c2')-.6,1.4,{x:682,y:300});
  at(S('c2')-.2,()=>page.evaluate(()=>document.querySelector('#__cur').classList.remove('on')));
  cues.sort((a,b)=>a.t-b.t); if(warn.length) console.log(warn.join('\n'));

  // ---- capture
  const N=Math.round(TOTAL*FPS); let ff=null;
  if(MODE==='full'){ ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','medium','-crf','15','-pix_fmt','yuv420p','-vf','scale=1920:1080:flags=lanczos','-r',String(FPS),'silent.mp4'],{stdio:['pipe','inherit','inherit']}); }
  else fs.mkdirSync('board',{recursive:true});
  const ease=k=>k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2; let ci=0; const t0=Date.now();
  for(let f=0;f<N;f++){
    const t=f*DT;
    while(ci<cues.length&&cues[ci].t<=t){ try{ await cues[ci].fn(t); }catch(e){ errs.push('cue@'+(cues[ci].t/1000).toFixed(2)+' '+e.message); } ci++; }
    if(tween){ const k=Math.min(1,(t-tween.t0)/tween.d), q=ease(k); mouse={x:tween.from.x+(tween.to.x-tween.from.x)*q,y:tween.from.y+(tween.to.y-tween.from.y)*q}; await page.mouse.move(mouse.x,mouse.y); if(k>=1) tween=null; }
    await page.evaluate(d=>__vt.step(d),DT);
    if(MODE==='full'){ const s=await client.send('Page.captureScreenshot',{format:'jpeg',quality:95}); if(!ff.stdin.write(Buffer.from(s.data,'base64'))) await new Promise(r=>ff.stdin.once('drain',r)); if(f%150===0) fs.writeFileSync('progress.txt',`${f}/${N} ${((Date.now()-t0)/1000).toFixed(0)}s\n`); }
    else if(f%15===0&&(MODE!=='board'||true)){ const want=process.argv[3]?process.argv.slice(3).map(Number):null; const sec=f/FPS; if(!want? f%30===0 : want.some(w=>Math.abs(w-sec)<1e-6)){ const s=await client.send('Page.captureScreenshot',{format:'jpeg',quality:80}); fs.writeFileSync(`board/f${String(Math.round(sec*10)).padStart(5,'0')}.jpg`,Buffer.from(s.data,'base64')); } }
  }
  if(ff){ ff.stdin.end(); await new Promise(r=>ff.on('close',r)); }
  fs.writeFileSync('progress.txt',`done ${N} frames ${((Date.now()-t0)/1000).toFixed(0)}s\n`+errs.join('\n')+'\n');
  console.log('done',N,'frames',((Date.now()-t0)/1000).toFixed(0)+'s',errs);
  await b.close();
})();
