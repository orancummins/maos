# Mastercard Operating System

An interactive capability map of Mastercard's assets — the card network, its rails, the network services every rail can call, the solutions built on the data, and the access layer the world plugs into — organised as if Mastercard were an operating system.

**Open `index.html` in any browser.** It is a single self-contained file: no server, build step or network needed (the Geist typeface loads from Google Fonts when online and falls back to system fonts offline).

- 5 layers · 29 tiles · 166 products · 91 Mastercard Developers APIs · 18 worked journeys
- Lenses re-slice the same assets by transaction lifecycle, customer, Mastercard division, built-vs-acquired, status and public API
- Every product card carries what it is, who it serves, origin, status, developer APIs and sources
- Compiled September 2026 from Mastercard's corporate, investor and developer sites, press releases and trade press

> Independent reference. Not affiliated with or endorsed by Mastercard. Product names are Mastercard's; figures are as reported by Mastercard or the cited source at the time of compilation.

## The idea

Read bottom-up it is a transaction: money enters on a **rail** (L2), hits the **kernel** (L1), calls **network services** on the way (L3), and throws off data that the **solutions** (L4) turn into value — all reached through the **access** layer (L5). Read top-down it is a customer.

```
USERS      Issuers · Acquirers/PSPs · Merchants · Fintechs/wallets · Corporates · Governments · Consumers · AI agents
L5 ACCESS  Developers & APIs · Acceptance platforms · Issuing platforms · Programmes
L4 SOLUTIONS  Security · Acquisition & Engagement · Insights · Advisors · Commercial & B2B · AI & agents
L3 NETWORK SERVICES  Tokenisation · Authentication & checkout · Risk decisioning · Disputes · Account services · Agentic commerce
L2 RAILS   Cards · A2A & real-time (Vocalink) · Mastercard Move · Digital assets · Bill pay & local · Open Finance
L1 KERNEL  The switch · Brands & credentials · Franchise & rules · Data & AI foundation
```

One rule keeps it simple: **every asset has exactly one home tile**; lenses and journeys re-slice the same set without duplicating anything.

## Repository layout

| Path | What it is |
|---|---|
| `index.html` | The map, as a standalone page — open it directly |
| `src/template.html` | Page template: styles, markup and application code, with `/*__DATA__*/`, `/*__JOURNEYS__*/`, `/*__APIS__*/` placeholders |
| `src/data.js` | The asset inventory — layers → tiles → products, with lens tags and sources |
| `src/journeys.js` | The 18 journeys (steps, scale facts, sources) |
| `src/apis.js` | The Mastercard Developers API catalogue mapped to home products (read from developer.mastercard.com, Sep 2026) |
| `src/assemble.py` | Rebuilds `src/mastercard-os.artifact.html` and `index.html` from the template and data — `python3 src/assemble.py` |
| `src/mastercard-os.artifact.html` | The same page without the document skeleton, for hosts that supply their own |
| `docs/framework.md` | How the map is organised and why — the design notes |
| `docs/asset-inventory.md` | The inventory in readable form, with status and origin, plus the API-to-tile appendix |
| `docs/business-structure-research.md` | Mastercard's segments, divisions, website taxonomy, acquisitions 2015–2026 and 2025–26 themes, with sources |
| `docs/video-script.md` | The narration script for the walkthrough video, with scene timings |
| `video/Mastercard-Operating-System.mp4` | Narrated walkthrough (3 min 36 s, 1600×900) |
| `video/` scripts | How the video is produced — see below |

## Editing the map

All content lives in three data files. To add or change a product, edit `src/data.js` (each product is a `P(id, name, description, {...})` call inside its tile); to change a flow, edit `src/journeys.js`; to add an API, add a row to `src/apis.js` naming its home product. Then run `python3 src/assemble.py` to regenerate `index.html`.

Status codes: `new` (2025–26), `flux` (rename, divestiture or restructuring), `unconf` (named but no current public source), `retired`. Origin: `B` built, `A` acquired (with target and year).

## Regenerating the video

`video/record.js` drives `index.html` with Playwright at 1280×720 CSS px and a 1.5× device scale factor (1920×1080 output), timed to the narration sentences (`video/timeline.json`); `video/cam.js` is injected at record time and turns the page into a camera-driven canvas that pans and zooms to what the narration describes; `video/tts.py` synthesises the narration sentence by sentence with Kokoro-82M v1.0 via sherpa-onnx and joins the sentences with explicit pauses (download `kokoro-multi-lang-v1_0` from the sherpa-onnx `tts-models` release into `video/`); `video/build.sh` records, recovers exact scene timings from marker pixels, re-times each scene to real time and muxes the audio. The end card is `video/endcard.html`. Requirements: Node with `playwright`, Python with `sherpa-onnx` and `soundfile`, and `ffmpeg`.
