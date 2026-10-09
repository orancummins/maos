"""Synthesises narration.json sentence by sentence (Kokoro-82M v1.0, voice af_heart) and joins the sentences with
the pauses given per line. Writes narration.wav and timeline.json (start and end of every sentence)."""
import json, sys, numpy as np, soundfile as sf, sherpa_onnx
M="../kokoro-multi-lang-v1_0"  # download from the sherpa-onnx tts-models release into video/
cfg=sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(model=f"{M}/model.onnx",voices=f"{M}/voices.bin",tokens=f"{M}/tokens.txt",data_dir=f"{M}/espeak-ng-data",dict_dir=f"{M}/dict",lexicon=f"{M}/lexicon-us-en.txt,{M}/lexicon-zh.txt"),num_threads=2,provider="cpu"),max_num_sentences=1)
tts=sherpa_onnx.OfflineTts(cfg)
SID=3  # af_heart
LEAD=1.2; TAIL=6.0
lines=json.load(open("narration.json")); sr=24000
def trim(x,th=0.004,pad=0.03):
    idx=np.where(np.abs(x)>th)[0]
    if len(idx)==0: return x
    a=max(0,idx[0]-int(pad*sr)); b=min(len(x),idx[-1]+int(.09*sr)); return x[a:b]
out=[np.zeros(int(LEAD*sr),dtype=np.float32)]; t=LEAD; tl={}
for L in lines:
    a=tts.generate(L["say"],sid=SID,speed=L.get("speed",1.0)); sr=a.sample_rate
    x=trim(np.array(a.samples,dtype=np.float32))
    f=int(.012*sr); x[:f]*=np.linspace(0,1,f); x[-f:]*=np.linspace(1,0,f)
    tl[L["id"]]={"start":round(t,3),"end":round(t+len(x)/sr,3),"say":L["say"]}
    out.append(x); t+=len(x)/sr
    p=L.get("pause",.45); out.append(np.zeros(int(p*sr),dtype=np.float32)); t+=p
    print(L["id"],tl[L["id"]]["start"],tl[L["id"]]["end"],flush=True)
out.append(np.zeros(int(TAIL*sr),dtype=np.float32)); t+=TAIL
y=np.concatenate(out); y=y/max(1e-6,np.max(np.abs(y)))*0.89
sf.write("narration.wav",y,sr,subtype="PCM_16")
json.dump({"total":round(t,3),"lines":tl},open("timeline.json","w"),indent=1)
print("total",t,"sr",sr)
