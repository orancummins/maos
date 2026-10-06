# Mastercard Operating System

An interactive capability map of Mastercard's assets — the card network, its rails, the network services every rail can call, the solutions built on the data, and the access layer the world plugs into — organised as if Mastercard were an operating system.

**Open `index.html` in any browser.** It is a single self-contained file: no server, build step or network needed (the Geist typeface loads from Google Fonts when online and falls back to system fonts offline).

- 5 layers · 30 tiles · 168 products · 91 Mastercard Developers APIs · 18 worked journeys · 14 outcomes ("who am I and what do I want to solve?")
- Lenses re-slice the same assets by transaction lifecycle, customer, Mastercard division, built-vs-acquired, status and public API
- Every product card carries what it is, who it serves, origin, status, developer APIs and sources
- Compiled September 2026 from Mastercard's corporate, investor and developer sites, press releases and trade press

**Open `layers.html` for the layer picture**: the same inventory as one object. A revolving globe is cut into five slices that stack into the system; click the stack to separate the layers, click a slice to list its areas, and click an area for its products. Choose *who you are* and *what you want to solve* above the stack and the areas that deliver it light up across the layers, joined like circuitry in the order they act.

> Independent reference. Not affiliated with or endorsed by Mastercard. Product names are Mastercard's; figures are as reported by Mastercard or the cited source at the time of compilation.

## The idea

Read bottom-up it is a transaction: money enters on a **rail** (L2), hits the **kernel** (L1), calls **network services** on the way (L3), and throws off data that the **solutions** (L4) turn into value — all reached through the **access** layer (L5). Read top-down it is a customer.

```
USERS      Issuers · Acquirers/PSPs · Merchants · Fintechs/wallets · Corporates · Governments · Consumers · AI agents
L5 ACCESS  Developers & APIs · Acceptance platforms · Issuing platforms · Programmes · Mastercard Connect
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
| `layers.html` | The layer picture, as a standalone page — open it directly |
| `src/template.html` | Page template: styles, markup and application code, with `/*__DATA__*/`, `/*__JOURNEYS__*/`, `/*__APIS__*/` placeholders |
| `src/data.js` | The asset inventory — layers → tiles → products, with lens tags and sources |
| `src/journeys.js` | The 18 journeys (steps, scale facts, sources) |
| `src/apis.js` | The Mastercard Developers API catalogue mapped to home products (read from developer.mastercard.com, Sep 2026) |
| `src/assemble.py` | Rebuilds `src/mastercard-os.artifact.html` and `index.html` from the template and data, and `layers.html` from `src/layers.artifact.html` — `python3 src/assemble.py` |
| `src/mastercard-os.artifact.html` | The same page without the document skeleton, for hosts that supply their own |
| `src/layers.artifact.html` | The layer picture's source: one hand-edited file (styles, markup, code and its own copy of the inventory), without the document skeleton. `assemble.py` wraps it into `layers.html` |
| `docs/framework.md` | How the map is organised and why — the design notes |
| `docs/asset-inventory.md` | The inventory in readable form, with status and origin, plus the API-to-tile appendix |
| `docs/business-structure-research.md` | Mastercard's segments, divisions, website taxonomy, acquisitions 2015–2026 and 2025–26 themes, with sources |
| `docs/video-script.md` | The narration script for the walkthrough video, with scene timings |
| `video/Mastercard-Operating-System.mp4` | Narrated walkthrough (3 min 36 s, 1600×900) |
| `video/` scripts | How the video is produced — see below |
| `video/Mastercard-OS-Layers.mp4` | Narrated introduction filmed on the layer picture (2 min 10 s, 1920×1080): what the operating system is, then two worked examples with the product detail behind them |
| `docs/layers-video-script.md` | Its narration script, scene timings and how it was made |
| `video/layers/` | Its pipeline: narration, virtual-clock recorder and build script |

## Editing the map

All content lives in three data files. To add or change a product, edit `src/data.js` (each product is a `P(id, name, description, {...})` call inside its tile); to change a flow, edit `src/journeys.js`; to add an API, add a row to `src/apis.js` naming its home product. Then run `python3 src/assemble.py` to regenerate `index.html`.

Status codes: `new` (2025–26), `flux` (rename, divestiture or restructuring), `unconf` (named but no current public source), `retired`. Origin: `B` built, `A` acquired (with target and year).

## Regenerating the video

`video/record.js` drives `index.html` with Playwright at 1920×1080 (the page laid out 1280 px wide and shown at 1.5× by the camera), timed to the narration sentences (`video/timeline.json`); `video/cam.js` is injected at record time and turns the page into a camera-driven canvas that pans and zooms to what the narration describes; `video/tts.py` synthesises the narration sentence by sentence with Kokoro-82M v1.0 via sherpa-onnx and joins the sentences with explicit pauses (download `kokoro-multi-lang-v1_0` from the sherpa-onnx `tts-models` release into `video/`); `video/build.sh` records, recovers exact scene timings from marker pixels, re-times each scene to real time and muxes the audio. The end card is `video/endcard.html`. Requirements: Node with `playwright`, Python with `sherpa-onnx` and `soundfile`, and `ffmpeg`.

### The layer-picture video

`video/layers/build.sh` rebuilds `video/Mastercard-OS-Layers.mp4`. It films `src/layers.artifact.html` frame by frame on a virtual clock (`vt.js` replaces the page's timers, animation frames, CSS animations and SVG animation, and `record.js` steps them one thirtieth of a second per screenshot), so the picture is exact and stays in sync with the narration without any re-timing. Cursor moves and clicks are placed relative to the narration sentences in `timeline.json`. It uses the same Kokoro voice and model folder as above. See `docs/layers-video-script.md`.

## Outcomes and the layer picture

The 14 outcomes (a kind of user plus a goal, answered by an ordered set of areas) and the icon chosen for each area are this project's own drafts, not Mastercard bundles. On the map they are the *Start here* row; on the layer picture they are the *Who* and *Solution* selectors. They are defined in `src/template.html` (`WHO`, `OUTCOMES`) and again in `src/layers.artifact.html`; a change to one should be made in both.
