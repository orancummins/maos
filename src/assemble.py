"""Rebuild ../src/mastercard-os.artifact.html and ../index.html from the template and data files,
and wrap ../src/layers.artifact.html (the layer picture, edited directly) into the standalone ../layers.html
and into ../layers-standalone.html, the same page as one file that loads nothing from the network."""
import re, pathlib, base64
here = pathlib.Path(__file__).resolve().parent.parent
src = here / "src"
t = (src / "template.html").read_text()
data = re.sub(r"\nconst APIF = \{[^\n]*\};\n", "\n", (src / "data.js").read_text())
out = t.replace("/*__DATA__*/", data.strip()).replace("/*__JOURNEYS__*/", (src / "journeys.js").read_text().strip()).replace("/*__APIS__*/", (src / "apis.js").read_text().strip())
(src / "mastercard-os.artifact.html").write_text(out)
i = out.index('<div class="wash"'); head, body = out[:i], out[i:]
doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="Mastercard Operating System — an interactive capability map of Mastercard's assets: five layers, 168 products, 91 developer APIs, 18 journeys, lenses.">
{head.strip()}
<style>
:root{{color-scheme:light}}
html,body{{margin:0}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
{body.strip()}
</body>
</html>
"""
(here / "index.html").write_text(doc)
print("wrote", src / "mastercard-os.artifact.html", "and", here / "index.html")

# The layer picture is a single hand-edited file with its own copy of the inventory; it only needs the document skeleton.
lay = (src / "layers.artifact.html").read_text()
k = lay.index("</style>") + len("</style>"); lhead, lbody = lay[:k], lay[k:]
(here / "layers.html").write_text(f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="Mastercard Operating System, the layer picture: a revolving globe that opens into five stacked layers; choose who you are and what you want to solve to see the areas that deliver it light up.">
{lhead.strip()}
<style>
html,body{{margin:0}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
{lbody.strip()}
</body>
</html>
""")
print("wrote", here / "layers.html")

# The same page as a single file that fetches nothing: the two webfonts (latin subset, SIL OFL 1.1, in src/fonts)
# are embedded and the links to Google Fonts are dropped.
def face(family, file):
    b64 = base64.b64encode((src / "fonts" / file).read_bytes()).decode()
    return f'@font-face{{font-family:"{family}";font-style:normal;font-weight:100 900;font-display:swap;src:url(data:font/woff2;base64,{b64}) format("woff2")}}'
solo, n = re.subn(r'<title>[^\n]*</title>\n|<link rel="(?:preconnect|stylesheet)" href="https://fonts\.googleapis\.com[^\n]*\n', "", lay)
assert n == 3, "expected a title and two Google Fonts links in layers.artifact.html"
k = solo.index("</style>") + len("</style>"); shead, sbody = solo[:k], solo[k:]
(here / "layers-standalone.html").write_text(f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="Mastercard Operating System, the layer picture: a revolving globe that opens into five stacked layers; choose who you are and what you want to solve to see the areas that deliver it light up.">
<title>Mastercard OS Layers</title>
<!-- Self-contained: styles, script, data and fonts are all in this file; it loads nothing from the network. Built from src/layers.artifact.html. -->
<style>
/* Geist and Geist Mono, latin subset, SIL Open Font License 1.1 (github.com/vercel/geist-font). Embedded so the page needs no network. */
{face("Geist", "geist-latin-wght-normal.woff2")}
{face("Geist Mono", "geist-mono-latin-wght-normal.woff2")}
:root{{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
html{{scroll-padding-top:env(safe-area-inset-top,0px)}}
html,body{{margin:0}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
{shead.lstrip()}
</head>
<body>
{sbody.strip()}
</body>
</html>
""")
print("wrote", here / "layers-standalone.html")
