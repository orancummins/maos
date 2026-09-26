# Mastercard Operating System — video narration script

Recorded 25 September 2026 · 2 min 47 s · 1600×900 · voice: Kokoro-82M v1.0 (af_heart)

## 0:01 · Opening — what this is (27 s)

This is the Mastercard Operating System: a single map of everything Mastercard runs. Most people know Mastercard as the card in their wallet. Behind it sits a network that switches over two hundred billion transactions a year, five ways to move money, the services that make every payment secure, and a fast-growing set of data and intelligence businesses. Together, it works like an operating system: a kernel, rails, system services, applications, and an access layer that partners plug into.

## 0:29 · Everyday examples (15 s)

You use it more than you think. Tap your phone for a coffee, and the payment travels through the kernel and back before the barista looks up. A driver finishes a shift and is paid in seconds. And increasingly, an AI agent books your ride to the airport, on your card, with your consent. Let's explore the map.

## 0:44 · Navigating the layers (31 s)

Read it bottom-up and it is a transaction. At the bottom, the kernel: the switch, the brands, the rules, and the data. Above it, the rails: cards, real-time bank payments, Mastercard Move, digital assets, and bill pay. Then the network services every rail can call: tokenisation, authentication, risk decisioning, disputes, account services, and agentic commerce. Above those, the solutions built on the data. At the top, access: the developer platform and the programmes partners plug into. And across the top, the users: from issuers and merchants to AI agents.

## 1:15 · Drilling into a tile (13 s)

Every tile opens. Risk decisioning holds fourteen products, from the Decision Management Platform to Decision Intelligence Pro. Each card shows what it is, who it serves, whether it was built or acquired, and its developer APIs.

## 1:29 · Lenses — the stakeholder view (15 s)

Switch on a lens to see the map from a stakeholder's angle. Choose issuers, and it lights up around risk, identity, and loyalty. Choose merchants, and it shifts to acceptance, checkout, and disputes. Other lenses show the transaction lifecycle, Mastercard's divisions, and what is new.

## 1:44 · Journey — Tap to pay in store (24 s)

Journeys bring it to life. Take that coffee. A shopper taps a phone. The token comes from M D E S, so the merchant never sees the card number. The terminal reads it, the acquirer forwards it, and it rides the card rail into the switch, which routes it to the issuer in milliseconds. Decision Intelligence scores the risk on the way, the issuer approves, and an alert reaches the cardholder's app. Three quarters of in-person transactions now take this path.

## 2:08 · Journey — An AI agent buys on your behalf (27 s)

Now the frontier. An AI agent is asked to book a ride to the airport. Know Your Agent has already registered it. It receives an agentic token and a verifiable intent: cryptographic proof that it is acting within your authorisation. You confirm with a payment passkey. Agent Pay initiates the payment, Merchant Cloud accepts it, the switch routes it, and Decision Intelligence Pro scores it with agent-level traceability. The first live agentic transaction ran in Hong Kong in March twenty twenty-six.

## 2:36 · Close (12 s)

One kernel. Five rails. Services every rail can call. Solutions built on the data. And an access layer the world plugs into. This is the Mastercard Operating System: powering economies, and empowering people.

---

## How it was made (so it can be regenerated)

- **Visuals**: `record.js` drives `index.html` with Playwright at 1920×1080 — hover the home-screen stack, click *Explore the map*, scroll bottom-up through the layers, open the Risk decisioning tile and the Decision Management Platform card, switch the Customer lens (issuers, then merchants) and the Lifecycle lens, run two journeys with each step highlighted and its tile scrolled into view, and finish on `endcard.html`.
- **Sync**: each scene stamps a marker pixel so the exact frame of every scene change can be recovered from the recording; each scene is re-timed to real time and the narration laid on that timeline (`build.sh`).
- **Voice**: Kokoro-82M v1.0 (full precision) via sherpa-onnx, speaker `af_heart`, speed 1.05 — download `kokoro-multi-lang-v1_0` from the sherpa-onnx `tts-models` GitHub release into `video/`. Edit `narration.json`, run `python3 tts.py <segment ids>` for the changed segments, then `./build.sh`.
- **Logo**: the end card carries the name in type and the line *Powering economies. Empowering people.* Mastercard's logo is not reproduced; drop the official asset onto the end card in an editor.
