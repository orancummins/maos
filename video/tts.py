import json, sherpa_onnx, soundfile as sf, numpy as np, time, os, sys
d='./kokoro-int8-multi-lang-v1_1'
cfg=sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(model=f'{d}/model.int8.onnx',voices=f'{d}/voices.bin',tokens=f'{d}/tokens.txt',data_dir=f'{d}/espeak-ng-data',dict_dir=f'{d}/dict',lexicon=f'{d}/lexicon-gb-en.txt,{d}/lexicon-zh.txt'),num_threads=8,provider='cpu'),max_num_sentences=1)
tts=sherpa_onnx.OfflineTts(cfg)
segs=json.load(open('narration.json'))
for s in segs:
    if os.path.exists(f"{s['id']}.wav") and s['id'] not in sys.argv[1:]: continue
    t=time.time(); a=tts.generate(s['text'],sid=21,speed=1.0)
    x=np.array(a.samples,dtype=np.float32); x=x/max(1e-6,np.abs(x).max())*0.9
    sf.write(f"{s['id']}.wav", x, a.sample_rate); print(s['id'], round(len(x)/a.sample_rate,1),'s', flush=True)
print('DONE', flush=True)
