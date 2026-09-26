#!/bin/bash
set -e
cd /home/claude/mastercard-os/video
rm -rf rec seg
NODE_PATH=$(npm root -g) node record.js
python3 - <<'PY'
import json, subprocess, numpy as np, soundfile as sf, os
m=json.load(open('marks.json')); video=m['video']; fps=25.0
raw=subprocess.run(['ffmpeg','-v','error','-i',video,'-vf','crop=8:8:10:10,scale=1:1:flags=area','-f','rawvideo','-pix_fmt','rgb24','-'],capture_output=True).stdout
px=np.frombuffer(raw,dtype=np.uint8).reshape(-1,3).astype(int); vd=len(px)/fps
def first_at(col,start):
    c=np.array([int(v) for v in col.split(',')]); d=np.abs(px-c).sum(axis=1); idx=np.where(d[start:]<90)[0]; return (start+idx[0]) if len(idx) else None
vt={}; start=0
for mk in m['marks']:
    f=first_at(mk['color'],start)
    if f is None: print('NOT FOUND',mk['id']); continue
    vt[mk['id']]=f/fps; start=f; print(mk['id'],'wall',round(mk['t'],1),'video',round(f/fps,1))
wall={x['id']:x['t'] for x in m['marks']}; ids=[x['id'] for x in m['marks'] if x['id']!='end']
segs=[]; pv,pw=0.0,0.0
for i,sid in enumerate(ids):
    v=vt[sid]; w=wall[sid]
    if i>0 or v>0: segs.append((pv,v,w-pw))
    pv,pw=v,w
segs.append((pv,vd,wall['end']-pw))
os.makedirs('seg',exist_ok=True); lst=[]
for i,(a,b,wd) in enumerate(segs):
    f=wd/(b-a) if b>a else 1.0; out=f'seg/s{i:02d}.mp4'
    subprocess.run(['ffmpeg','-y','-v','error','-ss',f'{a:.3f}','-to',f'{b:.3f}','-i',video,'-vf',f'setpts=(PTS-STARTPTS)*{f:.5f},fps=30,delogo=x=2:y=2:w=30:h=30','-an','-c:v','libx264','-preset','veryfast','-crf','18','-pix_fmt','yuv420p',out],check=True); lst.append(out)
open('seg/list.txt','w').write("".join(f"file '{os.path.abspath(p)}'\n" for p in lst))
sr=24000; total=int((wall['end']+0.5)*sr); track=np.zeros(total,dtype=np.float32)
for sid in ids:
    x,r=sf.read(f'{sid}.wav',dtype='float32'); st=int((wall[sid]+0.25)*sr); en=min(total,st+len(x)); track[st:en]+=x[:en-st]
fade=int(1.5*sr); track[-fade:]*=np.linspace(1,0,fade); sf.write('track_wall.wav',track,sr); print('segments',len(segs))
PY
ffmpeg -y -v error -f concat -safe 0 -i seg/list.txt -i track_wall.wav -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -c:a aac -b:a 160k -shortest -movflags +faststart Mastercard-Operating-System.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 Mastercard-Operating-System.mp4
echo BUILD_DONE
