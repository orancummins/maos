"""Narration synthesis: Kokoro-82M (v1.0, fp32) via sherpa-onnx.

narration.json is a list of segments; each segment has an id and `lines`. A line is a sentence
(string) or {"t": text, "speed": 0.9-1.1, "pause": seconds after it}. Every line is synthesised on
its own so it gets a natural sentence-final contour, then the lines are joined with explicit pauses
(default PAUSE after a sentence). Outputs <id>.wav (24 kHz), durations.json (seconds per segment)
and timeline.json (start time of every line inside its segment, for the recorder to sync to).

Env: KOKORO=model dir, SID=speaker (3 = af_heart), SPEED=base speed (1.0), PAUSE=default gap (0.45).
Args: segment ids to regenerate (default: only those without a wav).
"""
import json, os, sys, time
import numpy as np, soundfile as sf, sherpa_onnx

d = os.environ.get('KOKORO', './kokoro-multi-lang-v1_0')
cfg = sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(
    kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(model=f'{d}/model.onnx', voices=f'{d}/voices.bin', tokens=f'{d}/tokens.txt',
        data_dir=f'{d}/espeak-ng-data', dict_dir=f'{d}/dict', lexicon=f'{d}/lexicon-us-en.txt,{d}/lexicon-zh.txt'),
    num_threads=int(os.environ.get('THREADS', '2')), provider='cpu'), max_num_sentences=1)
tts = sherpa_onnx.OfflineTts(cfg)
SID = int(os.environ.get('SID', '3')); SPEED = float(os.environ.get('SPEED', '1.0')); PAUSE = float(os.environ.get('PAUSE', '0.45'))
SR = 24000; LEAD = 0.15   # silence before the first word of a segment

def synth(text, speed):
    a = tts.generate(text, sid=SID, speed=speed)
    x = np.asarray(a.samples, dtype=np.float32)
    # trim leading/trailing silence so the pauses we add are the only pauses
    thr = 0.01 * max(1e-6, np.abs(x).max()); nz = np.where(np.abs(x) > thr)[0]
    if len(nz): x = x[max(0, nz[0] - int(0.04 * SR)): min(len(x), nz[-1] + int(0.08 * SR))]
    assert a.sample_rate == SR
    return x

segs = json.load(open('narration.json')); durs = {}; timeline = {}
want = set(sys.argv[1:])
for s in segs:
    sid = s['id']; wav = f'{sid}.wav'
    if os.path.exists(wav) and sid not in want and not want == {'all'}:
        durs[sid] = round(sf.info(wav).duration, 2)
        if os.path.exists('timeline.json'): timeline[sid] = json.load(open('timeline.json')).get(sid, [])
        continue
    t0 = time.time(); parts = [np.zeros(int(LEAD * SR), np.float32)]; starts = []; pos = LEAD
    lines = [l if isinstance(l, dict) else {'t': l} for l in s['lines']]
    for i, ln in enumerate(lines):
        x = synth(ln['t'], SPEED * ln.get('speed', 1.0))
        starts.append(round(pos, 3)); parts.append(x); pos += len(x) / SR
        gap = ln.get('pause', PAUSE) if i < len(lines) - 1 else 0.35
        parts.append(np.zeros(int(gap * SR), np.float32)); pos += gap
    y = np.concatenate(parts); y = y / max(1e-6, np.abs(y).max()) * 0.9
    sf.write(wav, y, SR); durs[sid] = round(len(y) / SR, 2); timeline[sid] = starts
    print(sid, durs[sid], 's', f'({time.time()-t0:.0f}s)', flush=True)
json.dump(durs, open('durations.json', 'w'), indent=1); json.dump(timeline, open('timeline.json', 'w'), indent=1)
print('total', round(sum(durs.values()), 1), flush=True); print('DONE', flush=True)
