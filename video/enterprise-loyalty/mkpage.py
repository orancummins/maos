"""Builds rec.html, the copy of the layer picture that is filmed: ../../src/layers.artifact.html in a document
skeleton, with the Geist fonts from ../../src/fonts embedded so the recording does not depend on the network."""
import base64, pathlib, re
here = pathlib.Path(__file__).resolve().parent
src = here.parent.parent / "src"
w = (src / "layers.artifact.html").read_text(encoding="utf8")
def face(family, file):
    b = base64.b64encode((src / "fonts" / file).read_bytes()).decode()
    return "@font-face{font-family:'%s';font-style:normal;font-weight:100 900;font-display:block;src:url(data:font/woff2;base64,%s) format('woff2')}" % (family, b)
css = face("Geist", "geist-latin-wght-normal.woff2") + face("Geist Mono", "geist-mono-latin-wght-normal.woff2")
w, n = re.subn(r'<link rel="preconnect"[^>]*>\s*<link rel="stylesheet" href="https://fonts.googleapis.com[^>]*>', lambda m: "<style>" + css + "</style>", w)
assert n == 1
(here / "rec.html").write_text('<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>:root{color-scheme:light}body{margin:0}[hidden]{display:none!important}</style></head><body>\n' + w + '\n</body></html>', encoding="utf8")
print("wrote rec.html (fonts embedded)")
