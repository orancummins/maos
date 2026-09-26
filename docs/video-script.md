# Mastercard Operating System — video narration script

Recorded 26 September 2026 · 3 min 36 s · 1920×1080 · voice: Kokoro-82M v1.0 (af_heart), one sentence at a time with explicit pauses

The camera pans and zooms to whatever is being described; the product dialog and the journey panel stay docked at full size.

## 0:00 · Opening — what this is (36 s)

This is the Mastercard Operating System. — A single map of everything Mastercard runs.

Most people know Mastercard as the card in their wallet. Behind that card sits a network that switches over two hundred billion transactions a year. Six ways to move money and account data. The services that make every payment safe. And a fast-growing set of data and intelligence businesses.

Put together, it works like an operating system. A kernel. Rails. System services. Applications. And an access layer that partners plug into.

## 0:36 · Everyday examples (19 s)

You use it more than you think. Tap your phone for a coffee, and the payment travels through the kernel and back, before the barista looks up. A driver finishes a shift, and is paid in seconds. And increasingly, an AI agent books your ride to the airport. On your card. With your consent.

Let's open the map.

## 0:55 · Navigating the layers (39 s)

Read it bottom-up, and it's a transaction.

At the bottom, the kernel: the switch, the brands, the rules, and the data. Above it, the rails. Cards. Real-time bank payments. Mastercard Move. Digital assets. Bill pay. And open finance. Then the network services every rail can call: tokenisation, authentication, risk decisioning, disputes, account services, and agentic commerce. Above those, the solutions built on the data. At the top, access: the developer platform, and the programmes partners plug into. And across the top, the users. From issuers and merchants, to AI agents.

## 1:34 · Drilling into a tile (15 s)

Every tile opens. Risk decisioning holds fourteen products, from the Decision Management Platform, to Decision Intelligence Pro. Each card shows what it is, who it serves, whether it was built or acquired, and its developer APIs.

## 1:49 · Lenses — the stakeholder view (18 s)

Switch on a lens, and you see the map from a stakeholder's angle. Choose issuers, and it lights up around risk, identity, and loyalty. Choose merchants, and it shifts to acceptance, checkout, and disputes. Other lenses show the transaction lifecycle, Mastercard's divisions, and what's new.

## 2:08 · Journey — Tap to pay in store (32 s)

Journeys bring it to life. Take that coffee.

A shopper taps a phone. The token comes from MDES *(said "em-dess")*, so the merchant never sees the card number. The terminal reads it. The acquirer forwards it. It rides the card rail into the switch, which routes it to the issuer in milliseconds. Decision Intelligence scores the risk on the way. The issuer approves. And an alert reaches the cardholder's app.

Three quarters of in-person transactions now take this path.

## 2:40 · Journey — An AI agent buys on your behalf (35 s)

Now, the frontier. An AI agent is asked to book a ride to the airport. Know Your Agent has already registered it. It receives an agentic token, and a verifiable intent: cryptographic proof that it's acting within your authorisation. You confirm with a payment passkey. Agent Pay initiates the payment. Merchant Cloud accepts it. The switch routes it. And Decision Intelligence Pro scores it, with agent-level traceability.

The first live agentic transaction ran in Hong Kong, in March, twenty twenty-six.

## 3:15 · Close (18 s)

One kernel. Six rails. Services every rail can call. Solutions built on the data. And an access layer the world plugs into.

This is the Mastercard Operating System. Powering economies. Empowering people.

---

## How it was made (so it can be regenerated)

- **Visuals**: `record.js` drives `index.html` with Playwright at a 1920×1080 viewport with the page laid out 1280 px wide and shown at 1.5× by the camera. `cam.js`, injected at record time, turns the page into a camera-driven canvas: the window never scrolls; the body is panned and zoomed with CSS transforms, so each scene frames what the narration describes — the home-screen stack, the map top, each layer row bottom-up, the Risk decisioning tile, the lens controls and the rows they light up, and every step of the two journeys. The product dialog and the journey panel are lifted out of the canvas so they stay docked at full size. The end card is `endcard.html`.
- **Sync**: each scene stamps a marker pixel so the exact frame of every scene change can be recovered from the recording; each scene is re-timed to real time and the narration laid on that timeline (`build.sh`). `timeline.json` (start time of every sentence) lets the recorder move the camera on the sentence that mentions a tile.
- **Voice**: Kokoro-82M v1.0 (full precision) via sherpa-onnx, speaker `af_heart`. Every sentence is synthesised on its own so it keeps a natural sentence-final contour, then joined with explicit pauses (0.45 s default, longer at paragraph breaks — set per line in `narration.json`, along with a per-line speed for the headline lines). "MDES" is spelled `em-dess` in the script so it is pronounced as Mastercard says it. Download `kokoro-multi-lang-v1_0` from the sherpa-onnx `tts-models` GitHub release into `video/`; edit `narration.json`, run `python3 tts.py <segment ids>` (or `all`), then `./build.sh`.
- **Logo**: the end card carries the name in type and the line *Powering economies. Empowering people.* Mastercard's logo is not reproduced; drop the official asset onto the end card in an editor.
