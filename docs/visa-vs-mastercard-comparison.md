# Visa vs Mastercard — platform and asset comparison

Compiled 7 October 2026 for the "MA Operating System" project. Built from `claude/visa-business-structure-research.md` and `claude/visa-os-asset-inventory.md` (Visa) against `claude/mastercard-business-structure-research.md`, `claude/mastercard-os-asset-inventory.md` and `claude/mastercard-os-framework.md` (Mastercard). Use the **Visa** documents for sources and the confidence marks **[P]** primary, **[S]** secondary summary, **†** background knowledge.

**One caution that applies to every ratio below.** "Not found in this pass" never means "does not exist". Visa's developer platform exposed no API list, so Visa's service layers are described at the product-family level, not asset-by-asset.

---

## 1. The short version

1. **Same shape, different centre of gravity.** Both firms run three businesses: consumer payments, commercial and new money flows, and services. Visa calls them Consumer Payments, Commercial & Money Movement Solutions (CMS) and Value-Added Services (VAS); Mastercard's May 2024 reorganisation produced Core, Commercial & New Payment Flows and Services. Where they differ is what each has *bought* to fill the non-card and services layers.
2. **Visa has bought where the processing runs; Mastercard has bought what sits on top of the data.** Visa's deals: Pismo (~$1bn, core banking and issuer processing), Prosa (Mexico processor), Prisma and Newpay (Argentina processing, ATM network, real-time and bill pay), Currencycloud ($963m), Earthport ($320m), Tink (open banking), plus fraud AI in Featurespace and BioCatch ($2.4bn, pending). Mastercard's: Recorded Future ($2.65bn), Ekata, RiskRecon, NuData, Ethoca, Finicity, Aiia, Dynamic Yield, Brighterion, Vocalink, BVNK. Visa's newest deals are in fraud, which moves it toward Mastercard's turf.
3. **Mastercard owns non-card infrastructure that Visa mostly overlays.** Vocalink runs UK Faster Payments and Bacs and supplies other countries' instant-payment builds; Finicity gives Mastercard a US open-finance data network. Visa's equivalents are *overlays and point assets*: Visa Direct and B2B Connect on top of others' rails, Tink in Europe, and (since Feb 2026) Newpay's Argentine real-time, bill-pay and ATM network. In the "operating system" language: both firms have a **Rails** layer, but Mastercard owns more of it, while Visa's is mostly connectivity and overlay (Visa itself bundles it with the kernel in its own "Foundation" layer).
4. **Services scale is similar in dollars, differently measured.** In the aligned quarter (Apr–Jun 2026) Visa's VAS was **$3.8bn** (+34% constant-dollar, helped by FIFA marketing work and the Prisma acquisition) and Mastercard's value-added services and solutions was **$3.83bn** (+20%, minimal M&A effect). But Visa's is ~33% of net revenue and Mastercard's is ~41% on its current reporting basis, and Visa does not report VAS as a line, so the shares are not like-for-like (see §3).
5. **Agentic commerce is a protocol race with the same ingredients.** Both have an agent credential, agent verification and a developer on-ramp. Visa's emphasis is web-level bot recognition (Trusted Agent Protocol with Cloudflare) and a multi-protocol "Connect" on-ramp that deliberately supports rival standards; Mastercard's is proof of intent (Verifiable Intent, with Google) and machine-to-machine micropayments (Agent Pay for Machines). Interoperability talks between the two approaches were reported in September 2026.
6. **Stablecoins: partner-and-platform vs buy-the-infrastructure.** Visa settles in Circle's USDC (US launch Dec 2025, $3.5bn run-rate then), added five chains in April 2026, launched its own Visa Stablecoin Platform (beta, July 2026), and is "multi-coin, multi-chain". Mastercard bought BVNK (up to $1.8bn, closed Aug 2026) and runs the Multi-Token Network for tokenised deposits.
7. **Both cut staff in 2026.** Visa announced ~7% (about 2,600 roles, $563m severance) on 28 Jul 2026; Mastercard's restructuring (~4%, ~$200m) was announced with its Q4 2025 results.

---

## 2. Side by side — the aligned quarter and the fiscal year

Visa's fiscal year ends in September; Mastercard's in December. The Apr–Jun 2026 quarter is the cleanest comparison.

| Metric | Visa (fiscal Q3 2026, reported 28 Jul 2026) | Mastercard (Q2 2026, reported 31 Jul 2026) |
|---|---|---|
| Net revenue | $11.63bn, +14% (+13% constant-dollar) [P] | $9.28bn, +14% (+12% currency-neutral) [P] |
| Payments volume / GDV growth | +10% constant-dollar; quarterly volume passed $4tn [P/S] | GDV $2.9tn, +8% local [P] |
| Cross-border volume growth | +13% total (+12% excl. intra-Europe) [P] | +12% local [P] |
| Processed / switched transactions | 71.7bn, +10% [P] | +9% [P] |
| Value-added services | $3.8bn, +34% constant-dollar [S] | $3.83bn, +20% (+18% cn) [P] |
| VAS as share of net revenue | ~33% (~27–30% for FY2025) | ~41% (current reporting basis) |
| Revenue from core network fees | Service $4.92bn + data processing $6.04bn + international $3.85bn, less $4.68bn incentives [P] | Payment network $5.45bn, +10% [P] |
| Cards / credentials | 4.8bn payment credentials (Visa page) | 3.7bn Mastercard and Maestro cards |
| Workforce action | ~7%, $563m severance | ~4%, ~$200m restructuring |

| Metric (fiscal year) | Visa FY2025 (to Sep 2025) | Mastercard FY2025 (to Dec 2025) |
|---|---|---|
| Net revenue | $40.0bn, +11% (+12% cc) [P] | $32.8bn, +16% (+15% cn) [P] |
| Transactions | 257.5bn processed, +10% [P] | ~210bn switched [S] |
| Volume | Payments volume +8% cc [P]; ~$16.7tn "payments and cash" [S, unverified] | GDV ~$10.6tn [S] |
| Cross-border | +13% [P] | +14% (Q4 call summary) [S] |
| Services growth | VAS +23% cc [S] | VAS&S +23% (+21% cn) [P] |
| Money movement | Visa Direct 12.6bn transactions, +27% [S]; 18bn+ endpoints, 195+ countries [P] | Mastercard Move ~17bn endpoints, 200+ countries [project doc] |
| Tokenisation | 16bn+ tokens; >50% of e-commerce tokenised (May 2026) [S] | ~40% of transactions tokenised at end-2025; ~50% of European e-commerce mid-2025 [S] |
| Commercial | Commercial payments volume $1.8tn, +7% [S] | not retrieved |

**Do not read the volume levels as a league table.** Visa's payments volume, total volume and Mastercard's GDV are defined differently, and the two fiscal years end three months apart. The growth rates and the same-quarter figures are the safer comparison.

---

## 3. A flag on Mastercard's VAS share that needs a decision

The Mastercard documents in this project say value-added services and solutions were **~$10.2bn, ~31% of FY2025 revenue**, with payment network at ~$22.6bn. While checking the comparison I found that Mastercard's *current* reporting presents the two lines differently:

| Quarter | Payment network | VAS&S | VAS share |
|---|---|---|---|
| Q2 2025 as first reported (8-K) | $5,947m | $2,186m | 27% |
| Q2 2025 as shown in the 2026 presentation | $4,945m | $3,188m | 39% |
| Q3 2025 (presentation) | $5,179m | $3,423m | 40% |
| Q4 2025 (presentation) | $4,920m | $3,886m | 44% |
| Q2 2026 (presentation) | $5,451m | $3,826m | 41% |

The totals reconcile ($8,133m for Q2 2025 either way), so roughly **$1.0bn a quarter has moved from payment network to VAS&S** between the earlier and later presentations. I could not find the reclassification note, so I do not know whether the FY2025 10-K uses the older or the newer split. The $10.2bn / 31% in the Mastercard docs matches the older basis. **Before anyone quotes a VAS share for Mastercard, check which basis the 10-K uses.** On the newer basis Mastercard's FY2025 VAS&S would be roughly $13bn+ (~40%). Visa's ~27–33% is on a different, management-defined basis again.

---

## 4. Layer by layer — the same five layers

| Layer | Mastercard (existing OS map) | Visa (this research) | Where they differ |
|---|---|---|---|
| **L1 Kernel** | Switch, brands (Mastercard, Maestro, Cirrus), rules, data and AI foundation (Brighterion) | VisaNet, Visa brand (plus Electron, Interlink, Plus †), rules, data asset, 150+ AI applications | Near-identical structure. Visa processed more transactions in FY2025 (257.5bn vs ~210bn); Mastercard formally organised a cross-company Data & AI function in 2024. |
| **L2 Rails** | Cards; Vocalink A2A (UK FPS, Bacs, Pay by Bank); Mastercard Move; digital assets (MTN, BVNK); bill pay; Open Finance (Finicity, Aiia) | Cards; Visa Direct; B2B Connect; Currencycloud/Earthport; stablecoin settlement and cards; Tink (EU); Newpay (Argentina) | **Largest structural difference.** Mastercard owns A2A and open-finance infrastructure; Visa has money-movement reach (Direct) and cross-border, but little owned A2A or US open-finance. Visa has the fuller stablecoin *settlement* story today; Mastercard owns on-chain infrastructure through BVNK. |
| **L3 Network services** | MDES, Identity Check, Click to Pay, DMP/DI/DI Pro, Ethoca, ABU, Agent Pay, Agentic Tokens, KYA, Verifiable Intent | VTS (16bn+ tokens), Visa Secure †, Click to Pay †, Advanced Authorization †, Featurespace, BioCatch (pending), Order Insight, Visa Intelligent Commerce, TAP | Comparable services. Mastercard's disputes family (Ethoca) has no named Visa twin beyond Verifi/Order Insight; Visa's behavioural-fraud pair (Featurespace + BioCatch) is closer to Mastercard's NuData/DI than to its cyber portfolio. |
| **L4 Solutions** | Security (identity, cyber, threat intel), consumer acquisition and engagement, insights, Advisors, commercial, AI | Four VAS portfolios: Issuing, Acceptance, Risk & Security, Advisory & Marketing; A2A Protect; Commercial Solutions Hub and AR Manager; Visa Consulting & Analytics | **No Visa counterpart found** for Mastercard's cyber and threat-intelligence stack (Recorded Future, RiskRecon, Baffin Bay) or its personalisation and retail-media businesses (Dynamic Yield, Commerce Media). Visa's VAS is more issuing- and acceptance-led. |
| **L5 Access** | Developer platform (100+ APIs), Merchant Cloud, Gateway, Processing, Cloud Edge, Engage, Connect portal | Visa Developer Platform (API count unknown), Visa Acceptance Platform/Cybersource/Authorize.net, Pismo, Prisma, Prosa, Visa Accept, Visa Online † | Visa's Access layer reaches deeper into **processing and core banking** (Pismo, Prosa, Prisma) and has the longer-established gateway business; Mastercard's is broader on programmes and published APIs. |
| **Users** | Issuers, acquirers, merchants, fintechs, corporates, governments, consumers, AI agents | Same set; AI agents explicit in Intelligent Commerce and TAP | Identical. |

---

## 5. Acquisition philosophy

| | Visa | Mastercard |
|---|---|---|
| Largest deals | BioCatch $2.4bn (pending); Tink ~$2.15bn †; Pismo ~$1bn; Currencycloud $963m | Recorded Future $2.65bn; BVNK up to $1.8bn; Ekata ~$850m; Finicity ~$825m; Vocalink ~£700m |
| What was bought | Issuer processing and core banking; cross-border rails; open banking; payments-fraud AI | Cyber and threat intelligence; identity; open finance; A2A infrastructure; personalisation; crypto infrastructure |
| Direction of travel | Down the stack into where issuer processing runs, plus upstream into behavioural trust | Up the stack into data, security and engagement businesses that sell whether or not the payment ran on Mastercard |
| Latest | Prisma/Newpay (Feb 2026, closed); BioCatch (Aug 2026, announced) | BVNK (Mar 2026, closed Aug 2026); SessionM sold (Feb 2026) |
| Abandoned | Plaid, $5.3bn (2021) † | — |

---

## 6. Strategic themes — who is doing what

| Theme | Visa | Mastercard |
|---|---|---|
| **Agentic commerce** | Visa Intelligent Commerce (Apr 2025 †); MCP Server and Acceptance Agent Toolkit (Sep 2025, pilot); **Trusted Agent Protocol** (14 Oct 2025, with Cloudflare, Nuvei); **Intelligent Commerce Connect** (Apr 2026, pilot; supports TAP, MPP, ACP, UCP); OpenAI and Meta collaborations [S] | Agent Pay (Apr 2025); Agentic Tokens; Know Your Agent; **Verifiable Intent** (Mar 2026, with Google); Agent Pay for Machines (Jun 2026); Agent Suite (Jan 2026) |
| **Stablecoins** | USDC settlement (Dec 2025); +5 chains (Apr 2026); **Visa Stablecoin Platform** (Jul 2026, beta); Visa Direct stablecoin prefunding via zerohash (Aug 2026); 130+ stablecoin card programmes | Stablecoin settlement across several coins and chains; **BVNK**; Multi-Token Network; Crypto Credential |
| **Tokenisation** | VTS: 16bn+ tokens; >50% of e-commerce; target 100% | MDES: ~40% of transactions at end-2025; target 100% of European e-commerce by 2030 |
| **A2A / open banking** | Tink (Europe); A2A Protect with Featurespace; Newpay (Argentina) | Vocalink, Finicity, Aiia; A2A Protect (Prevent/Protect/Recover) |
| **B2B / commercial** | B2B Connect (2019); Commercial Solutions Hub; AR Manager; commercial volume $1.8tn | Move Commercial Payments (Oct 2024); Track; In Control; Receivables Manager |
| **Fraud and trust** | Featurespace + BioCatch ("continuous trust from onboarding through payment") | Decision Intelligence Pro; Recorded Future; Threat Intelligence; A2A Protect |
| **Cost** | ~7% cut, savings redirected to stablecoins and agentic | ~4% restructuring |

The two companies share product names for some of the new fraud work: both ship an "A2A Protect". Visa's is built on Featurespace, Mastercard's on its Consumer Fraud Risk heritage.

---

## 7. What this means for the Mastercard OS map

- **The model travels.** All of Visa's assets fit the five layers plus Users without forcing, which supports the framing as a *category* model, not a Mastercard-specific one.
- **Visa fits the same five layers.** Visa names four layers in its own "Visa as a Service" stack (Foundation, Services, Solutions, Access) — a packaging view that has itself moved from three layers (May 2025) to four (Oct 2025). Its Foundation covers both the kernel and the network of networks, and its Solutions layer is a catalogue spanning rails, services and solutions. That is a different cut, not a different architecture: all Visa assets found sit in the five layers, and Visa's Feb 2025 Investor Day separated VisaNet from the network of networks. So the map needs no structural change to show Visa.
- **Tiles that would look different on a Visa map:** 2.2 (A2A) and 2.6 (open finance) thin; 2.3 (money movement) and 2.4 (digital assets) heavier on settlement; 4.1 (security) lighter on cyber and heavier on payments fraud; 4.2 and 4.3 lighter; 5.3 (issuing platforms) much heavier.
- **Options if you want it in the product** (not built — say if you want one): (a) a network switch on the existing map (Mastercard | Visa), (b) a separate Visa map with the same tiles, or (c) a comparison lens that dims tiles where the other company has no equivalent.

---

## 8. Confidence and open flags

1. **Mastercard VAS share** — see §3; needs a decision on which basis the project should quote.
2. **Visa VAS** is a management metric, not a reported line; the range is ~27–33%.
3. **Visa's Q3 FY26 VAS ($3.8bn, +34%)** comes from two call summaries, not the transcript; the growth includes FIFA-related marketing work and Prisma.
4. **Visa's API surface** is unknown, so L5.1 and parts of L3 are shallower than the Mastercard inventory.
5. **Prosa completion**, **Pismo price**, **Tink price**, **Cybersource** and **Verifi** details rely on announcements or background knowledge.
6. **Agentic claims** on both sides are mostly pilot or announced status; neither company discloses agentic transaction counts in the sources reviewed.
7. **Executive roster** for Visa is incomplete (CMS head, CPSO, President Technology, Chief Risk & Client Services Officer).

---

## Sources

Visa: [Q3 FY2026 earnings release](https://www.sec.gov/Archives/edgar/data/0001403161/000140316126000103/q32026earningsrelease.htm) · [Q4 FY2025 earnings release](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000077/q42025earningsrelease.htm) · [FY2026 proxy](https://www.sec.gov/Archives/edgar/data/1403161/000130817925000635/v-20251208.htm) · [Prisma and Newpay completion](https://investor.visa.com/news/news-details/2026/Visa-Completes-Acquisition-of-Prisma-and-Newpay/default.aspx) · [BioCatch deal](https://investor.visa.com/news/news-details/2026/Visa-to-Acquire-BioCatch/default.aspx) · [Visa Stablecoin Platform](https://investor.visa.com/news/news-details/2026/Visa-Introduces-Platform-for-Stablecoin-Minting-Movement-and-Management/) · [USDC settlement](https://www.businesswire.com/news/home/20251216483172/en/Visa-Launches-Stablecoin-Settlement-in-the-United-States-Marking-a-Breakthrough-for-Stablecoin-Integration) · [Intelligent Commerce Connect](https://investor.visa.com/news/news-details/2026/Visa-Opens-the-Door-to-AI-Driven-Shopping-for-Businesses-Worldwide/default.aspx) · [Commercial Solutions Hub](https://investor.visa.com/news/news-details/2026/Visa-Expands-Commercial-Solutions-Hub-with-Integration-of-Visa-Accounts-Receivable-Manager/default.aspx) · [Enhanced A2A Protect](https://investor.visa.com/news/news-details/2026/Visa-Launches-Enhanced-A2A-Protect-Innovations-to-Help-Financial-Institutions-Stop-Fraud-Before-Money-Leaves-Accounts/default.aspx) · [Prosa announcement](https://www.businesswire.com/news/home/20231215319097/en/Visa-to-Acquire-a-Majority-Interest-in-Prosa-to-Accelerate-Digital-Payments-Adoption-in-Mexico) · [Andrew Torre appointment](https://www.businesswire.com/news/home/20250603029984/en) · [Visa acceptance page](https://corporate.visa.com/en/solutions/acceptance.html) · [Visa newsroom listing](https://usa.visa.com/about-visa/newsroom/press-releases-listing.html) · [J.P. Morgan conference transcript, 19 May 2026](https://s1.q4cdn.com/050606653/files/doc_events/2026/05/CORRECTED-TRANSCRIPT_-Visa-Inc-V-US-JP-Morgan-Global-Technology-Media-and-Communications-Conference-19-May-2026-9_25-AM-ET.pdf)

Visa secondary: [Q4 FY25 call (Motley Fool)](https://www.fool.com/earnings/call-transcripts/2025/10/28/visa-v-q4-2025-earnings-call-transcript) · [Q3 FY26 call highlights (Nasdaq)](https://www.nasdaq.com/articles/visa-q3-earnings-call-highlights) · [Q3 FY26 call (MarketBeat)](https://www.marketbeat.com/instant-alerts/visa-q3-earnings-call-highlights-2026-07-28/) · [Q3 FY26 (TIKR)](https://www.tikr.com/blog/visas-q3-earnings-crossed-4-trillion-in-volume-then-came-the-layoffs) · [Job cuts (Dealroom)](https://dealroom.co/news/141615-visa-to-cut-2-600-jobs-7-of-staff-as-ai-reshapes-work/) · [Trusted Agent Protocol (Digital Transactions)](https://www.digitaltransactions.net/visa-launches-trusted-agent-an-agentic-commerce-protocol/) · [B2B Connect (Digital Transactions)](https://www.digitaltransactions.net/the-launch-of-a-cross-border-transfer-network-helps-fuel-visas-drive-into-non-card-payments/) · [zerohash and Visa Direct (The Block)](https://theblock.co/news/business/2026-08-05-stablecoin-capabilities-visa-direct-zerohash-410657) · [BioCatch context (Biometric Update)](https://www.biometricupdate.com/202608/from-behavior-to-payment-visa-builds-trust-across-the-customer-lifecycle) · [Fintech Wrap Up](https://www.fintechwrapup.com/p/deep-dive-structural-analysis-of)

Mastercard: [Q2 2026 earnings release](https://www.sec.gov/Archives/edgar/data/0001141391/000114139126000081/ma06302026-exx991xearnings.htm) · [2Q26 presentation](https://s25.q4cdn.com/479285134/files/doc_financials/2026/q2/2Q26-Mastercard-Earnings-Presentation.pdf) · [4Q25 release](https://s25.q4cdn.com/479285134/files/doc_financials/2025/q4/4Q25-Mastercard-Earnings-Release.pdf) · [4Q25 presentation](https://s25.q4cdn.com/479285134/files/doc_financials/2025/q4/4Q25-Mastercard-Earnings-Presentation.pdf) · [3Q25 presentation](https://s25.q4cdn.com/479285134/files/doc_financials/2025/q3/3Q25-Mastercard-Earnings-Presentation.pdf) · [2Q25 earnings release (8-K)](https://www.sec.gov/Archives/edgar/data/1141391/000114139125000170/ma06302025-exx991xearnings.htm) · [Q4 2025 call highlights (Yahoo Finance)](https://finance.yahoo.com/news/mastercard-q4-earnings-call-highlights-044128905.html) · project docs `claude/mastercard-business-structure-research.md`, `claude/mastercard-os-asset-inventory.md`
