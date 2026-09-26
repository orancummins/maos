# Mastercard Operating System — video narration script

Recorded 25 September 2026 · 5 min 31 s · 1920×1080 · voice: Kokoro (British English, 'Emma')

## 0:00 · Opening — what this is (38 s)

This is the Mastercard Operating System: a single map of everything Mastercard runs. Most people know Mastercard as the card in their wallet. But behind that card sits one of the broadest capability sets in payments. A global network that switches more than two hundred billion transactions a year. Five different ways to move money. The services that make every payment secure. And a fast-growing set of data, intelligence and advisory businesses built on top. Put together, it behaves less like a company and more like an operating system: a kernel, rails, system services, applications, and an access layer that developers and partners plug into.

## 0:38 · Everyday examples (28 s)

You use it more than you think. Tap your phone at a coffee shop, and that tap travels through the kernel and back before the barista looks up. A subscription renews on a card that was replaced last month, and it still works, because the new card details were pushed to the merchant automatically. A driver finishes a shift and is paid in seconds, straight to their debit card. And, increasingly, an AI agent books your ride to the airport on your behalf, with your consent, on your card. Let's explore the map.

## 1:07 · Navigating the layers (54 s)

The map reads bottom-up as a transaction, and top-down as a customer. At the bottom is the kernel: the switch that authorises, clears and settles; the brands; the rules; and the data the network throws off. Above it sit the rails: cards; account-to-account and real-time payments through Vocalink; Mastercard Move for push and cross-border payments; digital assets and stablecoins; and bill pay. Then come the network services that every rail can call: tokenisation, authentication and checkout, risk decisioning, disputes, account services, and, since twenty twenty-five, agentic commerce. Above those are the solutions: security, open finance, consumer engagement, insights, advisors, and commercial payments. And at the top is access: the developer platform, the acceptance and issuing platforms, and the programmes that bring partners in. Across the top sit the users: issuers, acquirers, merchants, fintechs, corporates, governments, consumers, and now, AI agents.

## 2:02 · Drilling into a tile (23 s)

Every tile opens. Here is risk decisioning: fourteen products, from the Decision Management Platform built on Brighterion's AI, to Decision Intelligence Pro, which uses generative AI to score every transaction in real time. Each product card shows what it is, who it serves, where it sits in the transaction lifecycle, whether it was built or acquired, its developer APIs, and its sources.

## 2:26 · Lenses — the stakeholder view (25 s)

Switch on a lens to see the same assets from a different angle. The customer lens shows what each stakeholder actually touches. Choose issuers and banks, and the map lights up around risk, identity and loyalty. Choose merchants, and it shifts towards acceptance, checkout and disputes. Other lenses show the transaction lifecycle, Mastercard's own divisions, what was built versus acquired, what is new, and which products have a public API.

## 2:51 · Journey 1 — Tap to pay in store (38 s)

Journeys bring the map to life. Let's start with the most common flow of all: tapping to pay in store. A shopper taps a card or a phone. If it is a phone, the token comes from M-D-E-S, so the merchant never sees the real card number. The terminal, or a Tap on Phone device, reads it, and the acquirer forwards the authorisation. It rides the card rail into the switch, which routes it to the issuer in milliseconds. On the way, Decision Intelligence scores the risk, the issuer approves, and a real-time alert reaches the cardholder's app. Roughly three quarters of in-person transactions are now contactless. Every one of them takes this path.

## 3:29 · Journey 2 — A subscription renews (38 s)

Now the subscription. The merchant bills a stored credential, but that credential is a Secure Card on File token, not a card number. Before the renewal, the Automatic Billing Updater has already pushed any reissued card details, so it does not fail. The payment rides the card rail through the switch, Decision Intelligence scores it, and the issuer approves. Afterwards, Consumer Clarity shows the merchant and the receipt inside the banking app, Subscription Controls let the customer manage or cancel, and if there is a dispute anyway, Ethoca alerts the merchant to refund before it becomes a chargeback. Ethoca prevented thirty-nine million chargebacks last year alone.

## 4:08 · Journey 3 — A gig payout in seconds (27 s)

Next, the gig payout. A platform approves a driver's earnings and makes one call to the Mastercard Send API. Send pushes the funds to the debit card as a credit, Mastercard Move routes to whichever endpoint the recipient has, a card, an account, a wallet or cash pick-up, and the switch carries it to the issuer. The money is on the card in seconds. Move reaches more than ten billion endpoints and over ninety-five percent of the world's banked population.

## 4:36 · Journey 4 — An AI agent buys on your behalf (41 s)

And finally, the frontier. An AI agent is asked to book a ride to the airport. Know Your Agent has already registered it, so only vetted, traceable agents can hold tokens. It receives an Agentic Token and a Verifiable Intent: cryptographic proof that it is acting within your authorisation. You confirm with a Payment Passkey. Agent Pay initiates the payment, Merchant Cloud accepts it and can see which agent is acting, the switch routes it to the issuer, and Decision Intelligence Pro scores it with agent-level traceability. Afterwards, Consumer Clarity shows you exactly what the agent bought. The first live agentic transaction ran in Hong Kong in March twenty twenty-six.

## 5:17 · Close (15 s)

One kernel. Five rails. Services every rail can call. Solutions built on the data. And an access layer the world plugs into. This is the Mastercard Operating System. Powering economies, and empowering people.

---

## How it was made (so it can be regenerated)

- **Visuals**: a Playwright script (`record.js`) drives the standalone page at 1920×1080 — hover the home-screen stack, click *Explore the map*, scroll bottom-up through the layers, open the Risk decisioning tile and the Decision Management Platform card, switch the Customer lens (issuers, then merchants) and the Lifecycle lens, then run four journeys with each step highlighted and its tile scrolled into view, and finish on `endcard.html`.
- **Sync**: each scene stamps a coloured marker pixel so the exact frame of every scene change can be recovered from the recording; each scene is then re-timed to real time and the narration laid on that timeline (`build.sh`).
- **Voice**: Kokoro-82M (int8, via sherpa-onnx), speaker `bf_emma`, British lexicon. Edit `narration.json`, re-run the generator for the changed segment ids, then `build.sh`.
- **Logo**: the end card carries the name in type and the line *Powering economies. Empowering people.* Mastercard's logo is not reproduced; drop the official asset onto the end card in an editor (or supply the file and it can be composited).
