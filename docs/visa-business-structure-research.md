# Visa — business structure research

Compiled 7 October 2026 for the "MA Operating System" project, following the same steps as `claude/mastercard-business-structure-research.md` (revenue categories → organisation → product taxonomy → acquisitions → strategic themes → open flags). The asset-by-asset inventory is in `claude/visa-os-asset-inventory.md`; the comparison with Mastercard is in `claude/visa-vs-mastercard-comparison.md`.

**Conventions.** Visa's fiscal year ends 30 September (FY2025 = Oct 2024 – Sep 2025). Visa's fiscal Q3 2026 (Apr–Jun 2026, reported 28 Jul 2026) lines up with Mastercard's calendar Q2 2026 (reported 31 Jul 2026), so that is the like-for-like quarter used in the comparison.

**Source quality.** Figures marked **[P]** come from a primary document (earnings release, 10-K/proxy, Visa press release). Figures marked **[S]** come from a trade-press or transcript summary and have not been checked against the primary. Anything marked **†** comes from background knowledge and was not source-checked in this pass.

---

## 1. Revenue structure

Visa reports **one set of net-revenue lines**, not business segments. Revenue is described by *type* (how it is earned), while management talks about *three growth pillars* (see §2).

### How Visa earns it (net revenue by type)

| Line | What it is | FY2025 | Q3 FY2026 |
|---|---|---|---|
| Service revenue | Fees on prior-quarter payments volume | $17.5bn (+9%) **[P]** | $4.92bn (+14%) **[P]** |
| Data processing revenue | Fees on processed transactions (authorisation, clearing, settlement) | $20.0bn (+13%) **[P]** | $6.04bn (+17%) **[P]** |
| International transaction revenue | Cross-border and currency-conversion fees | $14.2bn (+12%) **[P]** | $3.85bn (+6%) **[P]** |
| Other revenue | Consulting, licensing, marketing, Visa Direct and other service fees | $4.1bn (+27%) **[P]** | $1.50bn (+45%) **[P]** |
| Client incentives | Contra-revenue paid to issuers/acquirers | −$15.8bn (+14%) **[P]** | −$4.68bn (+18%) **[P]** |
| **Net revenue** | | **$40.0bn (+11%; +12% constant-dollar)** **[P]** | **$11.63bn (+14%; +13% constant-dollar)** **[P]** |

Scale (FY2025): 257.5bn processed transactions (+10%) **[P]**; payments volume +8% constant-dollar, cross-border volume +13% **[P]**. Q3 FY2026: 71.7bn processed transactions (+10%), payments volume +10% constant-dollar, total cross-border +13% **[P]**; quarterly payments volume passed $4tn for the first time **[S]**.

The $14.2bn above is *international transaction revenue*, not volume. One public summary of VisaNet quotes "$14.2 trillion" by mixing the two; do not reuse it.

### Value-Added Services (VAS) — Visa's "services" story

Visa does **not** report VAS as a revenue line; it appears in management commentary and the call. It is spread across service, data-processing and other revenue.

- FY2025: VAS up **23% constant-dollar**, "approximately 30%" of net revenue (management, Q4 FY25 call) **[S]**. A secondary analysis puts FY2025 VAS at **$10.9bn** (≈27% of $40.0bn) **[S]**, so the share is between ~27% and ~30% depending on the denominator and definition. Q4 FY25 VAS was ~$3.0bn, +25% **[S]**.
- Q2 FY2026: VAS ~30% of revenue, +27% **[S]** (CFO at J.P. Morgan conference, 19 May 2026).
- **Q3 FY2026: $3.8bn, +34% constant-dollar** (≈33% of net revenue). Drivers named by the CFO: underlying activity, pricing, FIFA-related marketing-services engagements, greater use of network products in issuing and acceptance solutions, and the Prisma acquisition **[S, two sources]**. This growth is therefore partly one-off and partly inorganic.
- Four VAS portfolios (CFO, FY2024 framing): **Issuing Solutions · Acceptance Solutions · Risk & Security Solutions · Advisory & Marketing Services** **[S]**. 1,200 consulting projects delivered in Q3 FY26, more than all of 2019 **[S]**.
- Share of VAS earned outside the US rose from 57% (FY2021) to 60% (FY2024) **[S]**.

### Commercial & money movement

- **Commercial and Money Movement Solutions (CMS)**: FY2025 +15% constant-dollar; Q4 +14%; Q3 FY26 **+17%** **[S]**.
- Commercial payments volume: **$1.8tn** in FY2025 (+7%); +13% in Q3 FY26 **[S]**.
- **Visa Direct**: 12.6bn transactions in FY2025 (+27%); 3.4bn in Q4 (+23%); **4.0bn in Q3 FY26 (+21%)** **[S]**.

### Tokens, agentic, stablecoins (headline metrics)

- Visa tokens issued: **16bn+** at Q4 FY25 (10bn in May 2024) **[S]**; **>50% of e-commerce transactions tokenised** (CFO, May 2026) **[S]**; stated goal: tokenise 100% of e-commerce.
- Agentic: "we are now powering live agentic transactions" (Q4 FY25 call) **[S]**; no transaction counts disclosed (April 2026 release states none) **[P]**.
- Stablecoins: 130+ stablecoin-linked card programmes in 40+ countries; spend quadrupled YoY in Q4 FY25; annualised monthly volume passed $2.5bn **[S]**. USDC settlement run-rate $3.5bn at 30 Nov 2025 **[P]**.

### Cost and workforce

- **28 Jul 2026: Visa announced ~2,600 job cuts (~7% of staff)**, mostly technology and product teams, with a **$563m** severance charge booked in Q3 FY26 **[P for charge; S for headcount]**. Management said savings are being reinvested in stablecoin and agentic commerce. Workforce was ~34,100 in 2025 **[S]**.
- Context: Mastercard announced a ~$200m restructuring affecting ~4% of staff in its Q4 2025 results **[S]**.

### Guidance

Q3 FY26 call raised full-year guidance to the low end of low-teens net revenue growth and the low end of mid-teens EPS growth **[S]**.

---

## 2. Organisation and leadership

### Structure: three growth pillars (mirrors Mastercard's May 2024 three-way split)

| Pillar (Visa's wording) | What it covers | Closest Mastercard unit |
|---|---|---|
| **Consumer Payments (CP)** | Card-based consumer payments plus extending reach to non-card (A2A, tokens, wallets) | Core / Consumer Payments |
| **Commercial and Money Movement Solutions (CMS)** | "Network of networks": digitising B2B, B2C and cross-border flows beyond consumer-to-business; Visa Direct, B2B Connect, commercial cards | Commercial & New Payment Flows |
| **Value-Added Services (VAS)** | Fraud and security, issuing and acceptance solutions, data products, consulting and marketing | Services |

Source: FY2025 proxy statement, which also notes Visa operates through these pillars rather than separately reported segments **[P, via summary — the exact "single reportable segment" wording in the 10-K was not retrieved; see open flags]**.

### Leadership (confirmed this pass)

| Role | Person | Basis |
|---|---|---|
| CEO and Director | **Ryan McInerney** (CEO since Feb 2023) | Proxy **[P]** |
| CFO | **Chris Suh** (appointed 2023; presented the "Visa as a Service" stack at the May 2026 J.P. Morgan conference; named on the Q3 FY26 call) | Press release 2023; May/Jul 2026 transcripts **[P/S]** |
| President, Value-Added Services | **Andrew Torre** (named 3 Jun 2025; quoted on BioCatch, Aug 2026) | Press release **[P]** |
| Regional President & CEO, Europe | **Antony Cahill** (moved from VAS in Jun 2025) | Same release **[P]** |
| Vice Chair, Chief People and Corporate Affairs Officer, Corporate Secretary | **Kelly Mahon Tullier** | Proxy **[P]** |

The proxy also references a Chief Financial Officer, General Counsel, **Chief Risk and Client Services Officer**, **President, Technology** and Chief Information Security Officer, but the pages retrieved did not pair these titles with current names. Rajat Taneja was named to lead technology in 2015 **†** and Paul Fabara has held the risk and client-services role **†**; both should be confirmed before publishing. **The head of CMS and the Chief Product and Strategy Officer were not confirmed.**

---

## 3. Product and platform taxonomy

### Visa's own stack: "Visa as a Service" (four named layers — a packaging view, not a different architecture)

Described by the CFO at the J.P. Morgan conference (19 May 2026), read directly in the transcript **[P]**:

1. **Foundation / infrastructure** — the network itself: ~175m merchants, 18bn endpoints, ~200 countries.
2. **Services** — componentised building blocks: credentials, authentication, tokenisation, security.
3. **Solutions** — pre-built products that combine services for broad client use.
4. **Access** — client entry points, primarily APIs.

**Is Visa "four layers" or five?** Both, at different levels, and the count is a presentation choice rather than a property of the business:

- **Visa's own count has moved.** In May 2025 the CEO named three layers (infrastructure, services, solutions) **[P]**; from the Q4 FY25 call (Oct 2025) and the May 2026 conference the CFO names four, adding Access (client APIs, integrations, MCP server) **[P/S]**. At the Feb 2025 Investor Day the architecture was a different four-item list: VisaNet · Network of Networks · Visa Developer Platform · Visa-as-a-Service **[S]**. Note that the Investor Day list *separates* VisaNet from the network of networks, which is the kernel/rails distinction.
- **Visa's four layers are cut by how capabilities are packaged for clients** (network → building blocks → pre-built solutions → entry point). The operating-system model used for Mastercard is cut by **what a layer does in a transaction** (carry · move · serve · monetise · reach). Mastercard does not describe itself in five layers either; the five are this project's lens, applied to both.
- **Mapping Visa's four onto the five:** Foundation ("our network, and our network of networks"; ~12bn endpoints in the network of networks; settlement currencies; the next-generation VisaNet core platform) = **L1 Kernel + the connectivity of L2 Rails**. Services (credentials, tokens, authentication, risk, fraud; also the stablecoin platform and scam disruption) = **L3**, plus parts of 2.4 and 4.1. **Solutions is a catalogue layer that cuts across the OS**: the Q4 FY25 call summary lists Visa Intelligent Commerce (3.6), Visa Accept (3.2), Visa Direct (2.3), Visa Pay and VisaFlex, and commercial solutions (4.5) together **[S]**. Access = **L5**.
- **Conclusion:** every Visa asset found fits the five layers without forcing (see the inventory), so Visa is functionally five-layer. What is genuinely different is the *content* of L2 (Visa overlays others' rails; Mastercard owns some), not whether the layer exists.

### Product families visible on Visa's own pages (Sept–Oct 2026)

Visa's site is organised around the same three pillars, plus acceptance and risk:

- **Consumer payments** — credit, debit, prepaid and commercial products; tokens; Click to Pay; passkeys.
- **Commercial solutions** — Visa Commercial Solutions Hub (single issuer integration to Visa and partner capabilities; launched 2025; **Visa Accounts Receivable Manager** added May 2026, rolling out to 69 geographies from Sept 2026, uses AI to match payments to invoices) **[P]**.
- **Money movement** — Visa Direct (18bn+ endpoints, 195+ countries and territories, 150+ currencies, 10bn+ transactions a year on Visa's page) **[P]**; Visa B2B Connect.
- **Acceptance** — Visa Acceptance Platform / Cybersource / Authorize.net; Visa Order Insight; Visa Accept (Tap to Phone). Visa's acceptance page cites 9.6bn transactions a year and 99.9% uptime **[P]**.
- **Risk and security** — Visa Protect, A2A Protect, Featurespace, BioCatch (pending), Advanced Authorization **†**.
- **Agentic commerce** — Visa Intelligent Commerce, Trusted Agent Protocol, MCP Server and Acceptance Agent Toolkit, Intelligent Commerce Connect.
- **Stablecoins** — stablecoin settlement, stablecoin-linked cards, Visa Stablecoin Platform, Visa Direct stablecoin prefunding.
- **Advisory and data** — Visa Consulting & Analytics, marketing services **†**.
- **Developer** — Visa Developer Platform (the page retrieved listed no APIs; see open flags).

Full per-product mapping to the OS layers: `claude/visa-os-asset-inventory.md`.

---

## 4. Acquisitions (what Visa bought and what it became)

| Year | Target | What it is | Price / status | Lives in (OS layer) |
|---|---|---|---|---|
| 2010 | **Cybersource** (and Authorize.net via Cybersource) | Payment gateway and e-commerce platform | ~$2bn **†** | 5.2 Acceptance platforms |
| 2019 | **Earthport** | Cross-border bank network | $320.4m, announced Jun 2019 **[S]** | 2.3 Money movement |
| 2019 | **Verifi** | Chargeback prevention (Order Insight, Rapid Dispute Resolution) | Not retrieved **†** | 3.4 Disputes |
| 2020 | **YellowPepper** | Latin America mobile and A2A payments | Completed 20 Nov 2020 **[P]** | 2.2 / 2.6 A2A |
| 2021 | **Currencycloud** | Cross-border FX and embedded-finance infrastructure | Announced Jul 2021 at $963m; completed Dec 2021 **[S]** | 2.3 Money movement |
| 2022 | **Tink** | European open-banking and A2A platform | Completed Mar 2022; ~$2.15bn **†** | 2.6 Open finance |
| 2023 | **Pismo** | Cloud-native issuer-processing and core-banking platform (Brazil) | $1bn, completed 29 Jun 2023 **[S]** | 5.3 Issuing platforms |
| 2023–24 | **Prosa** (majority interest) | Mexico's leading payments processor, 10bn+ transactions a year, brand-agnostic | Announced 15 Dec 2023, close expected H2 2024; **completion not confirmed**; price undisclosed **[P]** | 5.3 Issuing / processing |
| 2024 | **Featurespace** | Real-time AI fraud and risk decisioning | Completed 26 Sep 2024; price undisclosed **[S]** | 3.3 Risk decisioning |
| 2026 | **Prisma Medios de Pago + Newpay** (Argentina) | Issuer processing; multi-network infrastructure, real-time payments, the Banelco ATM network and PagoMisCuentas bill pay | Completed **27 Feb 2026**; price undisclosed **[P]** | 5.3 Issuing / 2.2 / 2.5 |
| 2026 | **BioCatch** | Behavioural and device fraud intelligence (760m users, 350+ banks, 21 countries) | **$2.4bn cash**, announced 3 Aug 2026, expected to close by end of Visa's fiscal Q2 2027; regulatory approvals pending **[P]** | 3.3 Risk / 4.1 Security |
| 2021 | *(Plaid, $5.3bn)* | Abandoned Jan 2021 after a US DOJ challenge | Terminated **†** | — |

Pattern: **Visa has bought processing and infrastructure (Pismo, Prosa, Prisma/Newpay), cross-border rails (Earthport, Currencycloud), open banking (Tink) and payments-fraud AI (Featurespace, BioCatch).** Mastercard has bought data, cyber, identity, open finance and crypto (see its acquisition timeline). Details in the comparison doc.

---

## 5. Strategic themes (2025–26)

1. **"Network of networks"** — Visa's CMS strategy of connecting to non-card flows (bank accounts, wallets, B2B, stablecoins) *through* Visa rather than owning each national infrastructure. B2B Connect launched Jun 2019 on Hyperledger Fabric with IBM, FIS and Bottomline at 30+ trade corridors **[S]**.
2. **Agentic commerce** — Visa Intelligent Commerce (announced Apr 2025 †; still described on its page as "in the process of deployment"); **Trusted Agent Protocol** (14 Oct 2025, co-developed with Cloudflare, supported by Nuvei; works with IETF, OpenID Foundation and EMVCo standards; compatibility talks with Google, OpenAI and Stripe) **[S]**; **Visa MCP Server and Acceptance Agent Toolkit** (4 Sep 2025, pilot); **Intelligent Commerce Connect** (8 Apr 2026, pilot; one integration via Visa Acceptance Platform supporting Trusted Agent Protocol, Machine Payments Protocol, Agentic Commerce Protocol and Universal Commerce Protocol; pilot partners include Aldar, AWS, Diddo, Highnote, Mesh, Payabli, Sumvin) **[P]**; Q3 FY26 partnerships with OpenAI and Meta and products named Agent Score, Agent Directory and Token Assurance Framework **[S]**.
3. **Stablecoins, "multi-coin, multi-chain"** — USDC settlement for US institutions (16 Dec 2025: Circle USDC on Solana, Cross River and Lead Bank first; $3.5bn run-rate at 30 Nov 2025; broader US availability through 2026; Visa also plans to run a validator on Circle's Arc once live) **[P]**; five further blockchains for settlement (press-release headline, 29 Apr 2026) **[P headline]**; **Visa Stablecoin Platform** (16 Jul 2026, beta, first coin Open USD from Open Standard, which Visa joined) **[P]**; **Visa Direct stablecoin prefunding and payouts via zerohash** (5 Aug 2026, "soon") **[S]**.
4. **Tokenisation** — 16bn+ tokens; >50% of e-commerce tokenised; stated goal 100%.
5. **Fraud and trust across the lifecycle** — Featurespace (in transactions and A2A) plus BioCatch (before payment), described as "continuous trust from onboarding through payment"; Enhanced **A2A Protect** (1 Sep 2026) is the first in-market integration of Featurespace technology, with a unified fraud score, reporting >50% fraud reduction and >40% fewer unnecessary alerts **[P]**.
6. **Markets beyond cards** — Visa Accept for small sellers (launched in Sri Lanka targeting 7m sellers; planned expansion to 25 countries) **[S]**; Visa Direct growth; commercial solutions.
7. **Efficiency** — July 2026 job cuts, with an AI narrative (150+ AI-powered applications deployed) **[S]**.

---

## 6. Open flags (what this pass did not settle)

1. **Executive roster.** CEO, CFO and President of VAS are confirmed. Names for CMS head, Chief Product and Strategy Officer, President Technology and Chief Risk and Client Services Officer were not retrieved (Visa's leadership page returned 404 and the proxy fetch covered only the first ~100k characters).
2. **VAS share.** Visa does not report VAS as a line. ~27% (secondary $10.9bn / $40.0bn) vs "~30%" (management) vs ~33% (Q3 FY26, $3.8bn / $11.6bn). Treat ~30% ±3pts as the honest range.
3. **Single-segment wording.** The 10-K's exact "one reportable segment" language was not retrieved (the 10-K fetch covered only the first 100k characters).
4. **Developer APIs.** developer.visa.com exposed no product list in this pass, so there is no Visa equivalent of the Mastercard API appendix. This is the largest gap for an OS-style asset map.
5. **Older acquisitions** (Cybersource, Verifi, Tink price, Plaid) rely on background knowledge; **Prosa's completion** and **Pismo's price** rest on a single secondary listing and an announcement respectively.
6. **Agentic details.** Visa's Intelligent Commerce page still says "currently in the process of deployment" and gives no transaction counts; OpenAI and Meta partnership details come from call summaries only.
7. **Scale metrics are not like-for-like.** Visa quotes payments volume and "payments and cash volume"; Mastercard quotes gross dollar volume. A secondary source quotes **$16.7tn** payments-and-cash volume for FY2025 **[S, unverified]**.
8. **Old product names** (Visa Electron, Plus, Interlink, Visa Checkout, Visa Pay, Visa Flex, Visa+) were not verified in this pass; they appear in the asset inventory marked **†** or ○.

---

## Sources

Visa primary documents: Q3 FY2026 earnings release (8-K, 28 Jul 2026); Q4 FY2025 earnings release (8-K, 28 Oct 2025); FY2026 proxy statement (DEF 14A, Dec 2025); Visa press releases listed at usa.visa.com/about-visa/newsroom (Prisma/Newpay, BioCatch, Visa Stablecoin Platform, Intelligent Commerce Connect, Commercial Solutions Hub, Enhanced A2A Protect, USDC settlement, Andrew Torre appointment, Prosa); Visa Intelligent Commerce, Visa Direct and Acceptance pages on corporate.visa.com.

Secondary: Q4 FY25 call transcript (Motley Fool); Q3 FY26 call summaries (Nasdaq, MarketBeat, TIKR); J.P. Morgan conference transcript, 19 May 2026 (Visa investor site); Dealroom/Bloomberg Law coverage of the 28 Jul 2026 job cuts; Digital Transactions (B2B Connect, Trusted Agent Protocol); The Block (zerohash); Biometric Update (BioCatch); Tracxn (acquisition list); Fintech Wrap Up (VAS analysis).
