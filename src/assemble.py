"""Rebuild ../src/mastercard-os.artifact.html and ../index.html from the template and data files,
and wrap ../src/layers.artifact.html (the layer picture, edited directly) into the standalone ../layers.html."""
import re, pathlib
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
