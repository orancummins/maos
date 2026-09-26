# The Mastercard Operating System — how to draw it

Working notes, 23 September 2026. **Built:** the interactive map is published at https://claude.ai/artifact/6uPPwXQcRiA5dPUVYrmuBy (page source saved in this project as `claude/mastercard-os.html`; republish by passing that URL to the Artifact tool). Companion to `claude/mastercard-os-asset-inventory.md` (the full asset list) and `claude/mastercard-business-structure-research.md` (org, revenue, M&A, sources).

## 1. What the research says about the shape of the thing

Five things stand out after inventorying ~130 named products:

1. **It really is a platform, not a product list.** Everything sits on one kernel (the switch, the brands, the rules, the data). The rest is either a *rail* that moves money through it, a *service* invoked around a transaction, a *solution* sold on top, or an *interface* that lets someone plug in. That is an operating-system shape, which is why the metaphor works.
2. **Mastercard is now multi-rail.** Cards are one of six ways money and account data move (cards · account-to-account/real-time via Vocalink · Move push & cross-border · digital assets via MTN/stablecoins/BVNK · bill-pay/local rails · open finance, i.e. bank-account data and pay-by-bank initiation via Finicity/Aiia). Any picture that starts from "the card network" and bolts the rest on will look dated.
3. **Services are the growth story.** Value-Added Services & Solutions were ~31% of FY2025 revenue and grew ~2× as fast as the network (+23% vs +12%). Roughly two-thirds of the named solutions came by acquisition (APT, Ethoca, RiskRecon, Finicity, Ekata, Aiia, Dynamic Yield, Recorded Future…). The picture has to give services equal visual weight to payments.
4. **Agentic commerce is a new layer forming in real time** — Agent Pay (Apr 2025), Agentic Tokens/KYA, Verifiable Intent (Mar 2026), Agent Suite (Jan 2026), Agent Pay for Machines (Jun 2026). "AI agents & machines" is now a user persona in its own right.
5. **The edges are moving.** SessionM was divested (Feb 2026); a majority stake in Vocalink may be sold; Ekata, Aiia, Fintech Express and Open Banking are all mid-rename; CipherTrace was partly shut down. The picture needs a status badge and a date stamp or it will mislead within months.

## 2. The organising idea

**One kernel. Six rails. Six services every rail can call. Six families of solutions built on the data. Interfaces to plug in. Eight kinds of user on top.**

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ USERS   Issuers · Acquirers/PSPs · Merchants · Fintechs/wallets · Corporates │
│         Governments · Consumers · AI agents & machines                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ L5 ACCESS      Developers & APIs │ Acceptance (Merchant Cloud, Gateway)      │
│ "shell / SDK"  Issuing (Processing, Cloud Edge, Product Express, Engage)     │
│                Programmes (Start Path, Digital Labs)                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ L4 SOLUTIONS   Security │ Acquisition & Engagement │ Insights & Intelligence  │
│ "applications" Advisors & Transformation │ Commercial & B2B │ AI & Agents    │
├──────────────────────────────────────────────────────────────────────────────┤
│ L3 NETWORK     Tokenisation & credentials │ Authentication & checkout        │
│ SERVICES       Risk decisioning │ Disputes & resolution                      │
│ "system svcs"  Account lifecycle │ Agentic commerce                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ L2 RAILS       Cards │ A2A & real-time (Vocalink) │ Move (push, x-border)    │
│ "drivers"      Digital assets (MTN, stablecoins, BVNK) │ Bill pay & local    │
│                Open Finance (Finicity, Aiia, Pay by Bank)                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ L1 KERNEL      The switch │ Brands & credentials │ Franchise & rules         │
│                Data & AI foundation                                          │
└──────────────────────────────────────────────────────────────────────────────┘
   ⟲ Data flywheel: every transaction on L1/L2 feeds L1.4, which powers L3/L4,
     which make L1/L2 safer and more valuable.
   ▌ Side pillars: Brand & Priceless · Inclusive growth · Trust & regulation
```

Why this order (bottom-up): it reads as a **transaction**. Money enters on a rail (L2), hits the kernel (L1), calls services on the way (L3), throws off data that the solutions (L4) turn into value, and every party reaches it through an interface (L5). Read top-down it reads as a **customer**: who I am → how I plug in → what I buy → what the network does for me → how money moves → the thing underneath.

### The one rule that keeps it simple
**Every asset has exactly one home tile.** No duplicates on the canvas. Anything that is also relevant elsewhere is a cross-reference or is surfaced by a lens (below). This is what makes the map countable, maintainable and "double-clickable" without exploding.

### The boundary tests (where judgement was needed)
- **L3 vs L4:** L3 = invoked *in the flow of a payment* (any rail). L4 = sold as a product and useful *whether or not the payment ran on Mastercard* (RiskRecon, Test & Learn, Dynamic Yield, consulting). Ethoca sits in L3 (it's in the dispute flow); Identity Insights for Accounts sits in L4 (it's about onboarding, not a transaction).
- **Open Finance is a rail (L2.6), not a solution.** Its products are how bank-account data and account-to-account initiation (Pay by Bank) reach the network — a way in, like cards or Vocalink — rather than something sold on top of the data. Keeping it in L2 also keeps L4 to the six families Mastercard itself sells as services.
- **DMP/Brighterion:** home is L3 Risk decisioning (the engine that powers 20+ products), with Brighterion cross-referenced from L1.4 Data & AI foundation.
- **AI is a lens, not a layer.** Mastercard's site has an "AI" menu, but its contents (Agent Pay, DI Pro, Agent Suite, Merchant Cloud) live in different layers. L4.6 is a small "AI & agent applications" tile for Agent Suite so it is findable; everything else is reached by the AI lens.
- **Commercial:** commercial *cards* are a card rail (L2.1); Move Commercial Payments is a Move rail (L2.3); Track / In Control / Smart Data / Receivables Manager are solutions (L4.5).

## 3. How "double-click" works — four zoom levels

| Zoom | What you see | Count | Purpose |
|---|---|---|---|
| **Z0 — The picture** | 5 layers, users band, 3 side pillars, the data flywheel. Each layer shows its tile names only. | ~27 tiles | Fits on one slide. The thing you can draw on a whiteboard from memory. |
| **Z1 — A layer** | One layer expanded: its tiles with 3–5 headline products each and a one-line "what this layer does". | 4–7 tiles | Explain one part of the business in 60 seconds. |
| **Z2 — A tile** | Every product in the tile as a card: name, one-liner, who it serves, status badge, origin badge. | 3–15 products | The working inventory. |
| **Z3 — A product** | Full card: what it is, who buys it, lifecycle stage, built/acquired (target, year, price), current status/notes, launch date, source links, related products. | 1 | The evidence. Where the flags and open questions live. |

### Lenses (re-slice without redrawing)
The same assets, filtered or recoloured — this is how one picture serves several audiences:
- **Transaction lifecycle** — Before (identity, issuance, credential) → At checkout (token, auth, agent) → Authorisation (switch, decisioning) → Clearing & settlement → After (disputes, lifecycle, loyalty, insight) → Beyond the transaction (enterprise cyber, consulting). Great for payments people; shows where each service plugs in.
- **Customer** — highlight what an issuer / acquirer / merchant / fintech / corporate / government / consumer / AI agent actually touches.
- **Mastercard's organisation** — Core Payments · Commercial & New Payment Flows · Services (matches how Mastercard sells and reports; changes with reshuffles, which is why it's a lens and not the layout).
- **Revenue line** — Payment network vs Value-Added Services & Solutions (and its six sub-lines).
- **Origin** — built vs acquired (with year), which makes the M&A strategy visible at a glance.
- **Vintage / status** — new since 2025 · in flux · unconfirmed · retired. Turn "retired" on and you get the graveyard (Masterpass, P27, SessionM, IfOnly).

### Worked "threads" (the fastest way to make it intuitive)
Overlay a highlighted path for three real journeys, so a viewer sees the layers doing work rather than sitting in boxes:
1. **An online purchase** — Consumer → Click to Pay + Payment Passkey (L3.2) → MDES token (L3.1) → Merchant Cloud / Gateway (L5.2) → card rail (L2.1) → switch (L1.1) → Decision Intelligence (L3.3) → Issuer; afterwards Ethoca / ABU / Pay Rewards (L3.4, 3.5, L4.2) and SpendingPulse (L4.3).
2. **A cross-border remittance** — Fintech → Mastercard Developers (L5.1) → Move Cross-Border Services (L2.3) → A2A Protect / TRACE (L4.1) → recipient bank account or wallet.
3. **An AI agent buying on your behalf** — Agent → KYA + Agentic Token + Verifiable Intent (L3.6) → Agent Pay → same rail and decisioning as thread 1, with agent-level traceability.

## 4. Visual language (so it stays simple)
- **Colour by layer** (five hues + neutral for users/pillars). Nothing else gets colour.
- **Badges, not colour, for status/origin**: ✦ new 2025–26, ◐ in flux, ○ unconfirmed, ✕ retired; A/B for acquired/built.
- **Plain names first, OS analogy second** ("Network services — *system services*"), so non-engineers aren't lost and engineers get the metaphor.
- **Numbers live at Z3**, not on the picture (revenue, TAM, prices). The exception: one line under the title with the date stamp and the FY2025 split (69% network / 31% services) because it is the single most important framing fact.
- **Flow, not just boxes**: the data flywheel arrow and the three threads are what turn a stack into a story.

## 5. Alternatives considered
- **Transaction-lifecycle ribbon as the main picture** — intuitive for payments people, but enterprise cyber, consulting, open-finance data and inclusion have no natural place on it. Kept as a lens.
- **Mastercard's own three-division org chart** — accurate to how Mastercard sells, but it's org logic, not capability logic, and it changed leaders in August 2026. Kept as a lens.
- **Customer-first matrix (assets × customer types)** — most assets serve several customers, so it duplicates everything. Kept as a lens.

## 6. Open items before building
1. Confirm the handful of unverified names (Safety Net, Ethoca Eliminator, Bill Pay, Arcus, ALM, "Agent Sign"/"Verified Agents") — or decide the picture only shows what is publicly current.
2. Decide the output form: an interactive page (click-to-drill, lenses, threads), a slide deck (Z0 slide + one slide per layer), a whiteboard/diagram, or a static SVG/PNG for a deck.
3. Decide whether internal names the team uses (e.g. DMP as "the fraud service") should override Mastercard's public names on the tiles.


## 7. Journeys on the map (v6, 25 Sep 2026)

Eighteen worked flows, chosen for scale or novelty, each with a "why it matters", a sourced scale fact and 5–10 steps that land on tiles. Grouped:

- **Everyday, at scale** — Tap to pay in store (~75% of in-person transactions contactless, Q3 2024; 210bn switched purchase transactions 2025) · Online checkout · A subscription renews (6.8bn subscriptions; 39m chargebacks prevented 2025) · Paying abroad (cross-border volume +15% 2025) · Paying the bills (Bacs 4.4bn payments/yr)
- **Money movement & commercial** — A gig payout in seconds (Move: 10bn+ endpoints, >95% of banked population) · A cross-border remittance · A B2B virtual-card payment (commercial 38% of GDV; virtual cards in 43 countries/174 currencies) · Settling in stablecoins (six stablecoins, eight chains; BVNK)
- **Trust & resilience** — Stopping a scam on a real-time rail (APP fraud −20%) · A disputed charge · From cyber threat to blocked fraud (Recorded Future → Threat Intelligence → On-Demand Decisioning) · An issuer goes down (Stand-In)
- **Frontier** — An AI agent buys on your behalf (first live agentic transaction, Hong Kong, 27 Mar 2026) · Machines paying machines (AP4M) · One card, many ways to pay (One Credential + passkeys) · Open-finance-powered lending · A smallholder farmer gets paid (Community Pass)

Design v7 (25 Sep 2026): Stripe-like simplicity — white ground with a soft brand wash in the masthead, Geist type, hairline tiles with no colour fills (layer colour only as a dot beside the layer name and the tile ID), user chips, lens composition shown as a 3px bar per tile instead of dots, no right rail (pillars and the data flywheel sit in one row under the stack), a journey opens a right-hand panel and draws its path behind the tiles with numbered corner badges, modal dialog for drill-down with list-style product rows.


Home screen (v8, 25 Sep 2026): the page opens on a hero — title, one-sentence summary, stats line (products · APIs · journeys · new), "Explore the map" and "Follow a journey" buttons — beside an animated isometric stack of the five layers (built from the LAYERS data, clickable, with users above, a slow flywheel orbit and request/response packets flowing through the kernel). "Explore" smooth-scrolls to the map and staggers the layers in; a Home link in the sticky controls returns. Revenue lens and the FY2025 revenue bar were removed at Oran's request; the stats line no longer counts layers or tiles.

Contrast pass and Open Finance move (v9, 26 Sep 2026): at Oran's request the palette was darkened for legibility — near-black ink, mid-grey (not light-grey) secondary text, visibly darker hairlines and tile borders, semibold tile names, thicker lens bars, a darker amber for L4 and a darker orange for L3 so the layer IDs read on white; the dark theme got the same treatment in reverse. Open Finance (Finicity, Aiia, Data Connect, FDX hub, Pay by Bank) moved from L4 to the rails as **2.6**, so L2 now has six tiles and L4 six (renumbered 4.1–4.6; AI & agent applications is 4.6). The hero, the close of the video and these notes now say "six rails".
