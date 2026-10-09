#!/bin/sh
# Rebuilds ../Enterprise-Loyalty-animatic.mp4. Needs: node with playwright, python3 with sherpa-onnx + soundfile + numpy, ffmpeg,
# and the Kokoro model in ../kokoro-multi-lang-v1_0 (see README). Pass "novoice" to keep the existing narration.wav.
# The brand mark in the title and end card is read from brand/mark.png, brand/mark.svg or the brand-centre pack under ../../images;
# with none of those present the slots stay as labelled placeholders.
set -e
cd "$(dirname "$0")"
python3 mkpage.py
[ "$1" = "novoice" ] || python3 tts.py
node record.js full
D=$(python3 -c "import json;print(json.load(open('timeline.json'))['total'])")
ffmpeg -y -loglevel error -i silent.mp4 -i narration.wav -filter_complex \
 "[0:v]fade=t=in:st=0:d=0.5:color=black,fade=t=out:st=$(python3 -c "print($D-0.9)"):d=0.8:color=white[v];[1:a]loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000,afade=t=out:st=$(python3 -c "print($D-1.0)"):d=0.8[a]" \
 -map "[v]" -map "[a]" -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -r 30 -c:a aac -b:a 192k -movflags +faststart -shortest ../Enterprise-Loyalty-animatic.mp4
echo "wrote ../Enterprise-Loyalty-animatic.mp4"
