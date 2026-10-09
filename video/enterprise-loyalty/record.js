/* Records the Enterprise Loyalty film frame by frame against the narration timeline.
   node record.js full            -> silent.mp4 (1920x1080, 30 fps)
   node record.js board           -> board/*.jpg, one frame a second, for a quick check
   node record.js board 12 40.5   -> only the frames at those seconds
   The stack scenes are the layer picture itself (rec.html), driven on a virtual clock (vt.js) exactly as in video/layers.
   The real-life scenes are placeholder cards (cards.json) with the stack docked as a mini-map; film.js draws both. */
const { chromium } = require('playwright');
const fs=require('fs'), path=require('path'), { spawn } = require('child_process');
const FPS=30, DT=1000/FPS, W=1280, H=720, DSF=1.5;
const MODE=process.argv[2]||'full';
const TL=JSON.parse(fs.readFileSync('timeline.json','utf8')), T=TL.lines, TOTAL=TL.total;
const S=id=>T[id].start, E=id=>T[id].end;
const CARDS=JSON.parse(fs.readFileSync('cards.json','utf8'));
/* The brand mark is official artwork supplied as a file; it is never drawn here. Without the file the slots stay as labelled placeholders. */
const MARKS=['brand/mark.png','brand/mark.svg','../../images/Mastercard Symbol - PNG/Artwork/Mastercard Symbol 73px PNG/ma_symbol_opt_73_3x.png'];
const markFile=MARKS.find(f=>fs.existsSync(f));
const MARK=markFile?`data:image/${markFile.endsWith('.svg')?'svg+xml':'png'};base64,`+fs.readFileSync(markFile).toString('base64'):null;
console.log(markFile?'brand mark: '+markFile:'brand mark: none found, slots left as placeholders');
(async()=>{
  const b=await chromium.launch({args:['--force-color-profile=srgb','--font-render-hinting=none']});
  const ctx=await b.newContext({viewport:{width:W,height:H},deviceScaleFactor:DSF});
  const page=await ctx.newPage(); const errs=[];
  page.on('pageerror',e=>errs.push('ERR '+e)); page.on('console',m=>{ if(m.type()==='error') errs.push('console '+m.text()); });
  await page.addInitScript({path:'vt.js'});
  await page.goto('file://'+path.resolve('rec.html'));
  await page.evaluate(()=>document.fonts.ready);
  await page.addScriptTag({path:'film.js'});
  await page.evaluate(([cards,mark])=>{
    __vt.clearTimers();                         // the recording starts the opening itself
    const st=document.createElement('style'); st.textContent=`:focus-visible{outline:none!important}.layer:focus-visible .slabtop{stroke:var(--edge)!important;stroke-width:1!important}
      #__cur{position:fixed;left:0;top:0;z-index:99999;pointer-events:none;opacity:0;transition:opacity .35s;will-change:transform}#__cur.on{opacity:1}
      #__cur svg{display:block;width:26px;height:26px;filter:drop-shadow(0 2px 3px rgba(0,0,0,.35))}
      .__rip{position:fixed;z-index:99998;pointer-events:none;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:2.5px solid #F79E1B;background:rgba(247,158,27,.18);animation:__rip .55s ease-out forwards}
      @keyframes __rip{from{transform:scale(.25);opacity:1}to{transform:scale(1.25);opacity:0}}`; document.head.appendChild(st);
    const c=document.createElement('div'); c.id='__cur'; c.innerHTML='<svg viewBox="0 0 24 24"><path d="M4 2.5v17l4.7-4.3 3 7 2.9-1.25-3-6.95 6.4-.4z" fill="#111827" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>'; document.body.appendChild(c);
    document.addEventListener('mousemove',e=>{ c.style.transform=`translate(${e.clientX-4}px,${e.clientY-2}px)`; },true);
    document.addEventListener('mousedown',e=>{ const r=document.createElement('div'); r.className='__rip'; r.style.left=e.clientX+'px'; r.style.top=e.clientY+'px'; document.body.appendChild(r); setTimeout(()=>r.remove(),600); },true);
    __filmInit(cards,mark);
  },[CARDS,MARK]);
  const client=await ctx.newCDPSession(page);
  // ---- cue helpers
  const cues=[]; const at=(t,fn)=>cues.push({t:t*1000,fn});
  const film=(t,m,...a)=>at(t,()=>page.evaluate(([m,a])=>__film[m](...a),[m,a]));
  let mouse={x:682,y:664}, tween=null; await page.mouse.move(mouse.x,mouse.y);
  const pos=async(sel,fx=.5,fy=.5,dx=0,dy=0)=>{ const r=await page.evaluate(([sel])=>{ const e=document.querySelector(sel); if(!e) return null; const r=e.getBoundingClientRect(); return {x:r.x,y:r.y,w:r.width,h:r.height}; },[sel]); if(!r) throw new Error('missing '+sel); return {x:r.x+r.w*fx+dx,y:r.y+r.h*fy+dy}; };
  const move=(t,d,target)=>at(t,async now=>{ const p=typeof target==='function'?await target():target; tween={t0:now,d:d*1000,from:{...mouse},to:p}; });
  const click=(t,target,d=.75)=>{ move(t-d-.08,d+.1,target); at(t,async()=>{ await page.mouse.down(); await page.mouse.up(); await page.evaluate(()=>{ const a=document.activeElement; if(a&&a!==document.body&&a.blur) a.blur(); }); }); };
  const hover=(t,target,d=.6)=>move(t-d,d,target);
  const reveal=(t,sel)=>at(t,()=>page.evaluate(([sel])=>{ const e=document.querySelector(sel), sc=document.querySelector('.right'); if(!e||!sc) return; const a=e.getBoundingClientRect(), b=sc.getBoundingClientRect(); let to=sc.scrollTop; if(a.bottom>b.bottom-24) to+=a.bottom-b.bottom+60; else if(a.top<b.top+10) to+=a.top-b.top-40; if(Math.abs(to-sc.scrollTop)>2) __vt.scroll(sc,Math.max(0,to),520); },[sel]));
  const step=p=>()=>pos(`#side .step[data-p="${p}"] .st`,0,.5,60,2);
  const point=(t,p,d=.6)=>{ reveal(t-d-.5,`#side .step[data-p="${p}"]`); hover(t,step(p),d); };
  const cur=(t,on)=>at(t,()=>page.evaluate(on=>document.querySelector('#__cur').classList.toggle('on',on),on));
  const PARK={x:420,y:300};
  /* cut to a real-life card: the page shrinks into the corner as a mini-map */
  const live=(t,id)=>{ cur(t-.25,false); film(t,'card',id); film(t,'tw','m',1,.75); move(t,.5,PARK); };
  /* cut back to the stack: the mini-map grows to fill the frame */
  const stack=t=>{ film(t,'tw','m',0,.75); film(t+.8,'card',null); cur(t+.55,true); };
  const note=(t,id,k)=>film(t,'note',id,k);

  // ---- the film
  // 1 · The gap: real-life card only, no stack yet
  film(.05,'card','c1');
  note(S('g2')+.1,'c1','a'); note(S('g3')+.1,'c1','b'); note(S('g4')+.1,'c1','c'); note(S('g5')+2.0,'c1','d');
  // 2 · The system: the globe is cut into the stack; a bank chooses its goal
  film(S('s1')-.9,'tw','bo',1,.7); film(S('s1')-.1,'card',null); cur(S('s1')+.2,true);
  move(S('s1')+.4,1.2,{x:520,y:600});
  click(S('s2')-.15,()=>pos('#grim',.56,.5),1.0);
  click(E('s2')+1.0,()=>pos('#s-who',.45,.5),.9);
  click(S('s3')+.55,()=>pos('#m-who [data-who="iss"]',.4,.5),.6);
  click(S('s3')+2.3,()=>pos('#m-out [data-out="everytouch"]',.4,.5),.8);
  move(S('s3')+2.9,1.0,{x:682,y:420});
  film(S('s4')-.25,'tw','ttl',1,.5); film(E('s4')+.9,'tw','ttl',0,.5);
  // 3 · See
  live(S('e1')-.6,'c3a'); note(S('e1')+.2,'c3a','a'); film(S('e2')+2.2,'press','c3a','a'); note(S('e2')+3.3,'c3a','b');
  stack(S('e3')-.7); film(S('e3')+.35,'go',1,1.9); point(S('e3')+2.9,'ofeu');
  live(S('e4')-.5,'c3b'); note(S('e4')+.5,'c3b','a'); note(S('e4')+1.5,'c3b','b'); note(S('e4')+2.5,'c3b','c');
  // 4 · Sense
  film(S('n1')-.4,'card','c4a'); note(S('n2')+.75,'c4a','a');
  stack(S('n3')-.7); film(S('n3')+.15,'go',2,1.1); point(S('n3')+1.0,'cardsconsumer',.5); film(S('n3')+1.6,'go',3,1.4); point(S('n3')+3.2,'swcore',.5);
  film(S('n4')+1.0,'go',4,1.8); point(S('n4')+3.3,'txnnotif');
  live(S('n5')-.5,'c4b'); note(S('n5')+1.7,'c4b','a'); note(S('n7')+.2,'c4b','b');
  // 5 · Reward
  film(S('r1')-.4,'card','c5a'); note(S('r2')+.15,'c5a','a'); note(S('r3')+.25,'c5a','b');
  stack(S('r4')-.7); film(S('r4')+1.0,'go',5,1.9); point(S('r4')+3.6,'loyalty');
  live(S('r5')-.5,'c5b'); note(S('r5')+1.0,'c5b','a');
  // 6 · Spend
  film(S('p1')-.4,'card','c6'); note(S('p2')-.4,'c6','a'); film(S('p2')+1.5,'press','c6','a'); note(S('p2')+2.3,'c6','b'); note(S('p3')+.3,'c6','c');
  stack(S('p3')+1.9); film(S('p3')+2.8,'go',6,.5); point(S('p3')+3.6,'offers',.5); film(S('p3')+4.1,'go',7,1.7); point(S('p3')+6.3,'data');
  // 7 · The whole circuit
  film(S('w1')-.1,'loop',true);
  point(S('w2')+.2,'ofeu'); point(S('w3')+.15,'cardsconsumer',.45); point(S('w3')+1.25,'swcore',.45); point(S('w3')+2.2,'txnnotif',.45);
  point(S('w4')+.15,'loyalty',.45); point(S('w4')+1.2,'offers',.45); point(S('w5')+.4,'data');
  reveal(S('w6')-.5,'#side .step[data-p="txnnotif"]');
  click(S('w6')+1.5,step('txnnotif'),.8);
  hover(S('w6')+3.2,()=>pos('#dbody .what',.3,.5),.9);
  hover(S('w6')+5.0,()=>pos('#dbody .track',.42,.5,0,4),.9);
  click(S('w7')-.45,()=>pos('#close'),.8);
  move(S('w7')+.4,1.2,{x:682,y:420});
  // 8 · Close
  live(S('c1')-.6,'c8');
  stack(S('c3')-.8);
  click(S('c3')+.6,()=>pos('#clr'),.8);
  click(S('c3')+2.1,()=>pos('#again'),.9);
  move(S('c3')+2.4,1.4,{x:682,y:300});
  cur(S('c4')-.2,false);
  film(E('c4')+.7,'tw','end',1,.9);
  cues.sort((a,b)=>a.t-b.t);

  // ---- capture
  const N=Math.round(TOTAL*FPS); let ff=null;
  if(MODE==='full'){ ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','medium','-crf','15','-pix_fmt','yuv420p','-vf','scale=1920:1080:flags=lanczos','-r',String(FPS),'silent.mp4'],{stdio:['pipe','inherit','inherit']}); }
  else fs.mkdirSync('board',{recursive:true});
  const want=process.argv[3]?process.argv.slice(3).map(Number):null;
  const ease=k=>k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2; let ci=0; const t0=Date.now();
  for(let f=0;f<N;f++){
    const t=f*DT;
    while(ci<cues.length&&cues[ci].t<=t){ try{ await cues[ci].fn(t); }catch(e){ errs.push('cue@'+(cues[ci].t/1000).toFixed(2)+' '+e.message); } ci++; }
    if(tween){ const k=Math.min(1,(t-tween.t0)/tween.d), q=ease(k); mouse={x:tween.from.x+(tween.to.x-tween.from.x)*q,y:tween.from.y+(tween.to.y-tween.from.y)*q}; await page.mouse.move(mouse.x,mouse.y); if(k>=1) tween=null; }
    await page.evaluate(d=>{ __vt.step(d); __film.frame(); },DT);
    if(MODE==='full'){ const s=await client.send('Page.captureScreenshot',{format:'jpeg',quality:95}); if(!ff.stdin.write(Buffer.from(s.data,'base64'))) await new Promise(r=>ff.stdin.once('drain',r)); if(f%150===0) fs.writeFileSync('progress.txt',`${f}/${N} ${((Date.now()-t0)/1000).toFixed(0)}s\n`); }
    else { const sec=f/FPS; if(want? want.some(w=>Math.abs(w-sec)<1e-6) : f%30===0){ const s=await client.send('Page.captureScreenshot',{format:'jpeg',quality:80}); fs.writeFileSync(`board/f${String(Math.round(sec*10)).padStart(5,'0')}.jpg`,Buffer.from(s.data,'base64')); } }
  }
  if(ff){ ff.stdin.end(); await new Promise(r=>ff.on('close',r)); }
  fs.writeFileSync('progress.txt',`done ${N} frames ${((Date.now()-t0)/1000).toFixed(0)}s\n`+errs.join('\n')+'\n');
  console.log('done',N,'frames',((Date.now()-t0)/1000).toFixed(0)+'s',errs);
  await b.close();
})();
