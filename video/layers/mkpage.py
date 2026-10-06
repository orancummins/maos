"""Builds rec.html, the copy of the layer picture that is filmed: ../../src/layers.artifact.html in a document
skeleton, with the Geist fonts embedded when they are installed (npm i @fontsource/geist-sans @fontsource/geist-mono)
so the recording does not depend on the network."""
import base64, pathlib, re
here = pathlib.Path(__file__).resolve().parent
w = (here.parent.parent / "src" / "layers.artifact.html").read_text(encoding="utf8")
F = here / "node_modules" / "@fontsource"
def face(fam, wt, path):
    b = base64.b64encode(path.read_bytes()).decode()
    return "@font-face{font-family:'%s';font-style:normal;font-weight:%d;font-display:block;src:url(data:font/woff2;base64,%s) format('woff2')}" % (fam, wt, b)
if F.exists():
    css = "".join([face("Geist", x, F / "geist-sans" / "files" / ("geist-sans-latin-%d-normal.woff2" % x)) for x in (400, 500, 600, 700)]
                  + [face("Geist Mono", x, F / "geist-mono" / "files" / ("geist-mono-latin-%d-normal.woff2" % x)) for x in (400, 500)])
    w, n = re.subn(r'<link rel="preconnect"[^>]*>\s*<link rel="stylesheet" href="https://fonts.googleapis.com[^>]*>', lambda m: "<style>" + css + "</style>", w)
    assert n == 1
(here / "rec.html").write_text('<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>:root{color-scheme:light}body{margin:0}[hidden]{display:none!important}</style></head><body>\n' + w + '\n</body></html>', encoding="utf8")
print("wrote rec.html", "(fonts embedded)" if F.exists() else "(fonts from Google Fonts)")
