# Mastercard asset inventory — organised as the "Mastercard Operating System"

Compiled 23 September 2026 from Mastercard corporate, developer and investor sites, press releases and trade press (five parallel research passes; per-asset source URLs are in the companion research notes: `claude/mastercard-business-structure-research.md`). This is the **Level-2/3 detail** behind the one-page picture described in `claude/mastercard-os-framework.md`.

**Legend**
- Status: `●` active · `✦` new or materially expanded in 2025–26 · `◐` in flux (rename / divestiture / restructuring) · `○` unconfirmed (could not verify current name or status) · `✕` retired or divested
- Origin: `B` built in-house · `A` acquired (with year and target)
- Every product has exactly one **home tile**. Where it is also relevant elsewhere, it is cross-referenced with `→`.

---

## L1 · KERNEL — The Network
*The thing everything else runs on. Mastercard's franchise: brands, rules, the switch and the data it throws off.*

### 1.1 The switch
| Product | What it is | Status | Origin |
|---|---|---|---|
| Global switching network (authorisation, clearing, settlement) | The core network connecting issuers and acquirers in 210+ countries/territories, 150+ currencies | ● | B (1966) |
| Stand-In Authorization | Mastercard authorises on the issuer's behalf when the issuer is unavailable ("payment resiliency") | ● | B |
| Cross Border Fee Manager | Issuer tooling for cross-border fee logic; grouped by Mastercard under payment resiliency | ● | B |
| Safety Net | Network-level fraud backstop (velocity/BIN-level blocking) introduced ~2014; no current public page found — may have been absorbed into On-Behalf Rules / DI | ○ | B |

### 1.2 Brands & credentials
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard (credit, debit, prepaid, commercial) | The consumer and commercial card brand and product tiers (Standard / World / World Elite / World Legend) | ● | B |
| Maestro | International PIN-debit brand (mainly ex-US) | ● | B (1992) |
| Cirrus | Global ATM / cash-access network brand | ● | A (1988) |

### 1.3 Franchise & rules
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Rules, licensing & compliance programmes | Scheme rules, interchange, BIN ranges, MATCH, Scam Merchant Monitoring Program, dispute rules, brand standards | ● | B |
| Network Enablement Partners (NEP) / payment-facilitator directory | Accredited third parties that help customers connect to the network | ● | B |

### 1.4 Data & AI foundation
| Product | What it is | Status | Origin |
|---|---|---|---|
| Network data asset | Anonymised transaction data across the network — the raw material for every intelligence product in L3/L4 | ● | B |
| Data & AI organisation | Cross-company Data & AI org created in the May 2024 reorg (Chief AI & Data Officer, Greg Ulrich) for commercialisation and governance | ● | B (2024) |
| Brighterion AI | 20-year-old AI decisioning engine; the technology core of the Decision Management Platform (→ 3.3) | ● | A (2017, Brighterion) |

---

## L2 · RAILS — How money moves
*Multi-rail by design: cards, bank accounts, push payments, blockchain. Every rail plugs into the same kernel and can call the same L3 services.*

### 2.1 Card rails
| Product | What it is | Status | Origin |
|---|---|---|---|
| Credit / debit / prepaid card products | Consumer card programmes on the core network | ● | B |
| Commercial card products (SME, T&E, purchasing, fleet co-brands, virtual) | Commercial programmes; fleet cards are partner co-brands (bp, Fuelman, Comdata), not a Mastercard-run rail | ● | B |
| Mastercard Installments | BNPL built into existing cards; issuers offer instalment plans without a separate loan product | ● | B (2021) + A (2019, Vyze) |
| Contactless / EMV / open-loop transit | Tap-to-pay at POS and tap-to-ride on transit (Transport NSW, Azerbaijan 2025, etc.) | ● | B |

### 2.2 Account-to-account & real-time payments (Vocalink)
| Product | What it is | Status | Origin |
|---|---|---|---|
| Vocalink | Operator/technology provider of national real-time and bulk payment infrastructures | ◐ | A (2016, ~£700m; full ownership later) |
| UK Faster Payments (infrastructure) | Vocalink runs the UK's real-time rail | ◐ | A (Vocalink) |
| UK Bacs | Bulk direct debit / direct credit — 4.4bn+ payments a year | ◐ | A (Vocalink) |
| Pay by Bank app (UK) | Account-to-account merchant payment scheme | ● | A (Vocalink) |
| Instant Payment Service · Bulk Payment Service · Proxy Directory Service · Pay by Account | The productised A2A stack marketed on b2b.mastercard.com | ● | B/A |
| Nets account-to-account business | Nordic A2A clearing infrastructure | ● | A (2019, closed 2021) |
| National RTP builds: The Clearing House RTP (US, tech provider) · Canada Real-Time Rail (launch targeted Q4 2026) · Saudi sarie · Peru CCE | Vocalink supplies the technology behind other countries' instant-payment systems | ● (Peru ○) | A (Vocalink) |
| P27 Nordic Payments Platform | Pan-Nordic clearing platform Vocalink was to build — collapsed 2023 | ✕ | — |

> **In flux:** Mastercard is reported (2025–26) to be exploring the sale of a 51% stake in Vocalink to a UK bank consortium, following a £11.9m Bank of England fine (July 2025). If it completes, UK Faster Payments/Bacs move from "owned" to "part-owned/partnered" on the map.

### 2.3 Mastercard Move — push payments & cross-border
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Move (umbrella) | Money-movement brand: 200+ countries, 150+ currencies, ~17bn endpoints (cards, accounts, wallets, cash) | ● | B (2023 brand) |
| Mastercard Send | Real-time push-to-card API for disbursements, P2P, gig payouts, insurance claims | ● | B (ex-MoneySend, ~2017) |
| Cross-Border Services | Multi-rail cross-border network for banks/fintechs (bank account, wallet, card, cash pick-up) | ● | A (2019, Transfast + HomeSend JV) |
| Move Commercial Payments | Bank-to-bank cross-border B2B payments with upfront FX transparency (rival to Visa B2B Connect) | ✦ | B (Oct 2024) |
| Disbursements & remittances partnerships | Government benefits, payroll, insurance, remittances via Félix, Remitly, MoneyGram, Corpay, VoPay | ● | B |
| TIPS cross-currency pilot | Pilot linking Move rails to the Eurosystem's TARGET Instant Payment Settlement | ✦ | B (Jun 2026) |

### 2.4 Digital assets (Mastercard "Digital Asset Solutions")
| Product | What it is | Status | Origin |
|---|---|---|---|
| Multi-Token Network (MTN) | Blockchain platform for tokenised deposits / regulated money, 24/7 interbank settlement; interoperating with J.P. Morgan Kinexys, Ondo Finance | ● | B (2023) |
| Stablecoin settlement | Network-wide option to settle in regulated stablecoins (USDC, PYUSD, USDG, USDP, RLUSD, SoFiUSD) across Ethereum, Solana, Base, Polygon, XRPL etc.; intraday/weekend windows | ✦ | B (expanded Jun 2026) |
| BVNK | Stablecoin / on-chain payments infrastructure — "chain-agnostic" bridge between on-chain and fiat rails | ✦ | A (Mar 2026, up to $1.8bn; closed Aug 2026) |
| Mastercard Crypto Credential | Username-based crypto transfers with VASP verification and Travel Rule support | ● | B (2024) |
| Crypto card programmes | Mastercard-branded cards issued by exchanges (Binance, Bybit, etc.) — a programme category, not a product | ● | partner co-brands |

### 2.5 Bill pay & local rails
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Bill Pay / Bill Pay solutions | Biller connectivity for recurring payments; the 2018-era "Bill Pay Exchange" brand no longer appears on the site | ○ | B + A (2019, Transactis) |
| Arcus | Latin-America (Mexico) real-time bill-pay and disbursement infrastructure; no 2025–26 news found | ○ | A (2021) |
| Mastercard Pay Local | Cardholders pay through local wallets (Alipay, GrabPay, M-Pesa, Mercado Pago…) where cards aren't accepted | ✦ | B (Nov 2024) |

---

## L3 · NETWORK SERVICES — Invoked around every transaction
*System services any rail can call: make the credential digital, prove who's paying, decide the risk, resolve what goes wrong, keep the account current — and, from 2025, let an AI agent do it.*

### 3.1 Tokenisation & credentials
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Digital Enablement Service (MDES) | Core network tokenisation platform — replaces the PAN for wallets, in-app, contactless and card-on-file | ● | B |
| MDES for Merchants / Secure Card on File | Merchant/PSP tokenisation of stored credentials (live in 45 European countries) | ● | B |
| MDES Token Connect · Pre-Digitization | Push-provisioning and issuer/token-requestor-initiated tokenisation flows | ● | B |
| Token Authentication Service (TAS) | Pairs a network token with OTP/passkey step-up inside Gateway/Click to Pay ("Token Authentication Framework" was not found as a name) | ● | B |
| Mastercard One Credential | One credential, many funding sources (debit, credit, prepaid, instalments) with consumer-set preferences; partners Wio, Marqeta, Lithic, Botim | ✦ | B (2025) |
| Digital First | End-to-end framework for instant digital issuance and a digital-native card experience | ● | B (2022) |
| "100% tokenised e-commerce in Europe by 2030" | Strategic commitment (June 2024) — a goal, not a product; ~50% of European e-commerce tokenised by mid-2025 | ● | — |

### 3.2 Authentication & checkout
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Identity Check (EMV 3-D Secure) | Risk-based 3DS authentication, successor to SecureCode; 150+ data elements per authentication | ● | B |
| Smart Authentication · Identity Check Express · Stand-In RBA | Risk-based authentication intelligence, lighter-weight flow (launched India 2019), and Mastercard-performed RBA when the issuer's ACS is down | ● | B |
| Identity Insights for Transactions (ex "Digital Transaction Insights") | Issuer/merchant data-sharing at authorisation, incl. Microsoft Dynamics 365 Fraud Protection partnership (+14% approvals) | ◐ (renaming) | B |
| Payment Passkeys | Device biometrics replace OTPs at checkout | ✦ | B (2024) |
| Click to Pay (EMV Secure Remote Commerce) | Network-recognised guest checkout; 26 European markets, enrolments doubled YoY in 2025 | ● | B (EMVCo co-developed) |
| Biometric Checkout Program | In-store pay-by-face/palm with partners such as NEC | ● | B |
| Tap on Phone + Cloud Commerce | Phone-as-terminal acceptance; Cloud Commerce hosts ~90% of the contactless kernel in the cloud | ● | B |
| Masterpass | Mastercard's first digital wallet — superseded by Click to Pay and MDES | ✕ (2019) | B |

### 3.3 Risk decisioning
| Product | What it is | Status | Origin |
|---|---|---|---|
| Decision Management Platform (DMP) | The decisioning platform (rules, case management, BI) that powers 20+ Mastercard products, evaluating thousands of rules in tens of milliseconds; built on Brighterion AI (→ 1.4) | ● | B + A (2017, Brighterion) |
| Decision Intelligence (DI) | Real-time AI transaction risk score for issuers at authorisation | ● | B |
| Decision Intelligence Pro | Generative/graph-AI evolution (MUCI algorithm); scores transactions from any network; up to 300% uplift in compromised-card detection | ✦ | B (Feb 2024) |
| On-Demand Decisioning | Issuers set custom authorisation rules directly on the network | ✦ | B (Oct 2025) |
| Transaction Fraud Monitoring (TFM) + A2A TFM | Pre-authorisation risk scores for acquirers, PSPs, payfacs — and for A2A rails | ● | B |
| Expert Monitoring Solutions (EMS) | Behaviour-based CNP fraud score at authorisation (US-issued cards) | ● | B |
| Fraud Management Applications (Rule Discovery / Fraud Rule Manager / Case Manager) | Issuer self-service rule building and case handling | ● | B |
| On-Behalf Rules Services | Mastercard-managed rule cartridges, tuned quarterly, for issuers without fraud-ops teams | ● | B |
| Merchant Monitoring with AI · Merchant Risk Decisioning · Risk Decisioning Platform | Acquirer-side merchant risk products listed under Risk Decisioning | ● | B |
| Fraud and Loss Database (SAFE) | System of record for confirmed fraud, consumed by acquirers and risk models | ● | B |
| Mastercard Early Detect Insights (MEDI) | Authorisation anomaly / false-decline monitoring (nearest match to "Alert Insights") | ● | B |

### 3.4 Disputes & resolution
| Product | What it is | Status | Origin |
|---|---|---|---|
| Ethoca Alerts | Issuer↔merchant near-real-time alerts to refund before a chargeback; 39m chargebacks prevented in 2025 | ● | A (2019, Ethoca) |
| Ethoca Consumer Clarity | Merchant purchase detail surfaced in banking apps to stop "I don't recognise this" disputes | ● | A (Ethoca) |
| Ethoca Eliminator | Automated chargeback elimination on the Alerts network; thinly documented on Mastercard's site | ○ | A (Ethoca) |
| Mastercom · Mastercard Dispute Resolution | Core case-management system and the formal chargeback / arbitration framework | ● | B |
| First-Party Trust · Trusted Transactions | Merchant-shared trust signals to fight friendly fraud; expanded to new markets June 2025 | ✦ | B |

### 3.5 Account & credential lifecycle
| Product | What it is | Status | Origin |
|---|---|---|---|
| Automatic Billing Updater (ABU) | Pushes reissued card details to card-on-file merchants | ● | B |
| Account Status Inquiry (ASI) · Payment Account Management | Card-validity checks and account-management APIs (documented mostly via processors) | ● | B |
| Card lifecycle (Processing Core APIs) | Issuance, reissue, status, closure inside Mastercard Processing (→ 5.3) | ● | B |
| Minna Technologies (subscription management) | In-app subscription visibility, management and cancellation for banks | ● | A (Oct 2024) |
| Account Level Management (ALM) | Named in the brief; no current Mastercard product found under this name (Marqeta uses it) | ○ | — |

### 3.6 Agentic commerce
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Agent Pay | Framework for AI agents to transact on a person's or business's behalf — trust, security, visibility; partners Microsoft, IBM, PayPal, Google, Braintree, Checkout.com | ✦ | B (Apr 2025) |
| Agentic Tokens | MDES-derived tokens carrying "which agent, on whose behalf" | ✦ | B (2025) |
| Know Your Agent (KYA) | Registration/verification of agents before they can hold agentic tokens | ✦ | B (2025) |
| Verifiable Intent | Open, standards-based proof that an agent acted within explicit consumer authorisation; co-developed with Google (AP2/UCP-aligned); competes with Visa's Trusted Agent Protocol, interop talks Sept 2026 | ✦ | B (Mar 2026) |
| Agent Pay for Machines (AP4M) | Machine-to-machine, high-frequency micro-payments across cards, accounts and stablecoins; 30+ partners incl. Stripe, Adyen, Coinbase, Solana | ✦ | B (Jun 2026) |
| "Agent Sign" / "Verified Agents" | Not found as official names — functional equivalents are KYA and Verifiable Intent | ○ | — |

---

## L4 · SOLUTIONS — Value-added services sold to customers
*Mastercard's "Value-Added Services and Solutions": ~31% of FY2025 revenue, growing ~2× the network. Mostly acquired, mostly usable whether or not the payment ran on Mastercard.*

### 4.1 Security Solutions (identity · cyber · financial crime)
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Identity (Ekata) — Identity Insights for Accounts · Identity Review 360 · Identity Authentication / Verification | Global identity signals for account opening and KYC; Ekata brand retired into "Mastercard Identity" (ekata.com redirects) | ◐ (rebrand) | A (2021, Ekata, ~$850m) |
| NuData Security / NuDetect | Passive behavioural biometrics to separate humans from bots/ATO | ● | A (2017) |
| Mastercard ID | Digital-identity service (UK-certified digital ID provider, healthcare ID) | ● | B |
| Trust Center | Free cyber education and tools for small businesses | ● | B |
| RiskRecon | Third-party / vendor cyber-risk ratings | ● | A (2019/20) |
| Cyber Secure · Cyber Quant · Cyber Front · Cyber Crisis Exercise · Cyber Insights · Systemic Risk Assessment · Third Party Risk Management | Portfolio cyber risk, risk quantification (Gartner Hype Cycle 2025), attack simulation, tabletop exercises, strategic threat intel, concentration risk | ● | B (delivered via RiskRecon platform) |
| Threat Protection (Baffin Bay Networks) | Cloud DDoS / bot / malicious-traffic protection | ● | A (2023) |
| Recorded Future — Intelligence Cloud · Payment Fraud Intelligence · Identity Intelligence | Threat-intelligence platform indexing 1m+ sources; Mastercard's largest acquisition | ● | A (Dec 2024, $2.65bn) |
| Mastercard Threat Intelligence | First fraud + cyber product built on Recorded Future — card-testing, digital skimming, merchant threat assessments | ✦ | B (Oct 2025) |
| Consumer Fraud Risk → A2A Protect (Prevent / Protect / Recover) | AI scam scoring on real-time payment rails (UK APP fraud −20% in 2024), now a full suite | ✦ | B (2023 → 2025) |
| Scam Protect | Umbrella brand across scam tools (2024) | ● | B |
| TRACE | AML service surfacing money-mule accounts; APAC launch Feb 2025 | ✦ | B |
| Crypto Secure | Issuer dashboard for VASP risk and crypto-linked approvals | ● | B (2022, on CipherTrace data) |
| CipherTrace | Crypto intelligence (compliance monitoring, risk, investigations); Armada, Inspector and Sentry shut down March 2024 | ◐ | A (2021) |

### 4.2 Open Finance
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Open Finance US (Finicity) | Account/owner verification, Payment Success Indicator, Deposit Switch, Bill Pay Switch, data enrichment, Consumer Foresight, lending & mortgage verification, small-business cash-flow; ~95% of US deposit accounts | ● | A (2020, ~$825m) |
| Mastercard Open Finance Europe (Aiia) | SCA-based account connection, data retrieval, payment initiation across Europe; Aiia brand converging into "Open Finance" | ◐ (rebrand) | A (2021) |
| Mastercard Data Connect | Consumer-permissioned data-sharing/consent layer unifying the US and European stacks | ● | B (2024) |
| Pay by Bank (US) | A2A payment initiation delivered through Open Finance rather than a standalone rail | ● | B |
| Regulatory context | CFPB Section 1033 enjoined/under reconsideration in 2026; no sign of wind-down | — | — |

### 4.3 Consumer Acquisition & Engagement
| Product | What it is | Status | Origin |
|---|---|---|---|
| Dynamic Yield / Experience OS (incl. Shopping Muse, Experience OS Agents, Experience APIs, Experience Search) | AI personalisation platform; 8× Gartner MQ leader; 80m+ personalised sessions/day | ● | A (2022, from McDonald's) |
| Mastercard Marketing Services (Acquisition · Engagement · Performance Engine) | Full-funnel lifecycle marketing for issuers and merchants | ● | B |
| Marketing Audience Hub (ex "Mastercard Audiences") | Audience identification and media optimisation | ◐ (rename) | B |
| Mastercard Commerce Media | Retail-media network: 500m+ permissioned consumers, 25k+ merchant advertisers | ✦ | B (Oct 2025) |
| Loyalty Solutions — Rewards · Pay Rewards · Global Redemption Suite · Promotions · Digital Disbursements | 1.3tn points under management; redeem at checkout | ● | B |
| Priceless (Experiences · Discounts · Surprises; Priceless Africa Jun 2026) · Travel & Lifestyle Services · Airport Experiences (LoungeKey) · Card benefits | Cardholder brand benefits and premium servicing | ● | B |
| SessionM | Loyalty platform acquired 2019 — **sold to Capillary Technologies, Feb 2026** | ✕ | A→divested |
| IfOnly | Experiences marketplace — shut down 2020 | ✕ | A→closed |

### 4.4 Insights & Intelligence
| Product | What it is | Status | Origin |
|---|---|---|---|
| Test & Learn (+ for Financial Institutions) | Controlled-experimentation platform | ● | A (2015, APT, $600m) |
| SpendingPulse · Market Share · Market Trends · Macro360 · Forecasting & Scenario Planning | Macro and sector spending insights | ● | B |
| Places · Geo Insights · Shopper Intelligence · Merchant Insights · Tourism Insights · Ad Insights · ATM Locations | Location and shopper analytics ("Retail Location Insights" lineage) | ● | B |
| Mastercard Economics Institute · Research Center | Economists publishing macro/consumer research | ● | B |
| Portfolio Optimizer · Portfolio Advisor · Cards Lab · Smart Leads · Pioneer · AI Ready | Issuer portfolio and programme design tools | ● | B |
| Mastercard Intelligence Center · Acquirer Intelligence Center · Acquiring Optimizer | Issuer/acquirer analytics dashboards | ● | B |
| Credit Intelligence Solutions (Consumer · Small Business) | Lending analytics using network + open-finance data | ● | B |
| Media Measurement · Data Clean Room · Independent Anonymization | Privacy-preserving data collaboration ("Data Cloud" not found as a name) | ● | B |
| Operations Intelligence — Operational Reports · Transaction Investigator Plus · Learning Lab · Digital Safari | Operational reporting and training (MEDI → 3.3) | ● | B |

### 4.5 Advisors & Transformation
| Product | What it is | Status | Origin |
|---|---|---|---|
| Advisors & Transformation (Advisory · Innovation · Deploy) | Consulting arm, ~4,000 consultants, 120+ countries; lineage: Mastercard Advisors (2001) → Data & Services (2019) → Services (2024) | ● | B |
| Practices: Payments · Cyber & Enterprise Risk · Data Strategy · AI & Advanced Analytics · Sustainability & Financial Inclusion · Future Tech | Named consulting practices | ● | B |
| Digital Labs (Mastercard Foundry) · Strategy Insight · Sandbox as a Service | Innovation-as-a-service and prototyping | ● | B |
| Managed services | Delivery model (e.g. managed fraud rules) rather than a branded product | ○ | B |

### 4.6 Commercial & B2B solutions
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Track Business Payment Service | Buyer–supplier network for invoices, terms and working capital | ● | B (2020) |
| Track Instant Pay | Virtual-card instant B2B payment inside AP workflows | ● | B (2022) |
| In Control (+ Commercial Connect API) | Virtual card numbers and spend controls; single-API relaunch with Citi, July 2026 | ✦ | A (2009, Orbiscom) |
| Smart Data | Commercial-card expense reporting and reconciliation | ● | B |
| Receivables Manager | Supplier-side virtual-card acceptance and reconciliation; global July 2025 | ✦ | B |
| Easy Savings | Small-business rebate programme | ● | B |
| Healthcare solutions · Embedded finance | Named CNPF focus areas on Mastercard's commercial pages | ● | B |

### 4.7 AI & agent applications (Mastercard's "AI" category)
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Agent Suite (+ Developers Agent Toolkit) | Customisable AI agents for banks and merchants, integrated with Agent Pay | ✦ | B (Jan 2026) |
| → Agent Pay (3.6) · Decision Intelligence Pro (3.3) · Experience OS Agents (4.3) · AI consulting (4.5) · Merchant Cloud (5.2) | Cross-references — AI is a lens across layers, not a layer | — | — |

---

## L5 · ACCESS — How customers and developers plug in
*The interfaces: APIs, acceptance and issuing platforms, and the programmes that onboard partners.*

### 5.1 Developers & APIs
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Developers (developer.mastercard.com) | 100+ APIs across tokenisation, checkout, authentication, account services, processing, gateway, open finance, Move, agentic | ● | B |

### 5.2 Acceptance platforms (merchant / acquirer side)
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Merchant Cloud | Unified acceptance stack — tokenisation, gateway, Click to Pay, fraud/identity, Payment Optimization Platform, Agent Pay; 240+ acquirers, 35+ payment types | ✦ | B (Oct 2025) |
| Mastercard Gateway (MPGS) | Omnichannel payment gateway (MiGS → MPGS → Gateway) | ● | A (2010, DataCash) |
| → Tap on Phone / Cloud Commerce (3.2) · Network Enablement Partners (1.3) | | | |

### 5.3 Issuing platforms (issuer / fintech side)
| Product | What it is | Status | Origin |
|---|---|---|---|
| Mastercard Processing (Core / Debit APIs) | Issuer processing-as-a-service; Thought Machine partnership 2024 | ● | B + A (2021, Nets processing) |
| Mastercard Cloud Edge | Cloud connectivity to the network — up to 4× faster onboarding; APAC, US, Canada, select EEMEA/LatAm | ✦ | B (Jun 2025) |
| Product Express — Card Issuance (ex Fintech Express) | Fast-track card-programme launch for fintechs | ◐ (rename) | B |
| Mastercard Engage | Marketplace of 170+ vetted enablement partners; 500m+ cards run on an Engage partner | ● | B |

### 5.4 Programmes & innovation
| Product | What it is | Status | Origin |
|---|---|---|---|
| Start Path (+ Emerging Fintech track) | Startup engagement — 500+ startups, 60+ countries since 2014 | ● | B |
| Partner Advantage Program · Circle of Honor | Partner and sales-recognition programmes | ● | B |
| → Digital Labs / Foundry (4.5) | | | |

---

## USERS — The ecosystem the OS serves
Issuers & banks · Acquirers & PSPs · Merchants · Fintechs & wallets · Corporates & SMEs · Governments & public sector · Consumers · **AI agents & machines** (new persona, 2025–26)

## CROSS-CUTTING PILLARS
| Pillar | Contents |
|---|---|
| Brand | Mastercard brand, Priceless platform, sponsorships |
| Inclusive growth | Center for Inclusive Growth (2014) · Community Pass / Farm Pass · Strive · MADE Alliance: Africa |
| Trust & regulation | Rules & franchise (1.3), Trust Center (4.1), regulatory positioning (CFPB 1033, PSD3, UK payments review) |

---

## How Mastercard itself slices the same assets (for the "lenses")

**Organisation (May 2024 structure; leaders as of 3 Aug 2026)**
- Core / Consumer Payments — Jorn Lambert, Chief Product Officer → L1, L2.1, L2.2, L2.4, L3, L5
- Commercial & New Payment Flows — Dimi Dosis, Chief Commercial Payments Officer → L2.3, L2.5, L4.6
- Services — Linda Kirkpatrick, Chief Services Officer (incl. Data & AI, Greg Ulrich) → L4.1–4.5, L4.7
- Go-to-market unified under Sachin Mehra, Chief Business Officer (new role, 2026)

**Revenue (FY2025: $32.8bn)**
- Payment network (~$22.6bn, +12%) → L1, L2.1
- Value-Added Services & Solutions (~$10.2bn, +23%): Security solutions · Consumer acquisition & engagement · Business & market insights · Digital & authentication · Processing & gateway · Other (ACH/RTP, bill pay, cross-border, open finance) → L2.2–2.5, L3, L4, L5

**Website navigation (mastercard.com/business, Sept 2026)**
Consumer payments · Commercial payments · Money movement · Open finance · Advisors & transformation · Cybersecurity & fraud prevention · Consumer acquisition & engagement · Insights & intelligence · AI · Digital Asset Solutions

## Acquisition timeline (what was bought, where it lives)
2009 Orbiscom → In Control · 2010 DataCash → Gateway · 2015 APT → Test & Learn · 2016 Vocalink → A2A rails · 2017 NuData, Brighterion → Identity, DMP · 2019 Ethoca, Transfast, Vyze, Transactis, SessionM (divested 2026), RiskRecon, Nets A2A (closed 2021) · 2020 Finicity → Open Finance US · 2021 Ekata, Aiia, CipherTrace, Arcus, Nets processing · 2022 Dynamic Yield · 2023 Baffin Bay → Threat Protection · 2024 Recorded Future ($2.65bn), Minna · 2026 BVNK ($1.8bn)

## Open questions / things to confirm before publishing the picture
1. Safety Net, Ethoca Eliminator, Bill Pay, Arcus, ALM — current names/status.
2. Vocalink majority-stake sale — outcome.
3. Security Solutions leadership (conflicting exec-bio pages: Johan Gerber vs Ann Johnson).
4. Whether "Agent Sign" / "Verified Agents" are internal working names the team uses.
5. Exact positioning of Merchant Cloud vs Gateway (Gateway increasingly a component of Merchant Cloud).


## Appendix — Mastercard Developers API catalogue (read 23 Sep 2026), mapped to home tiles

91 API products: 90 cards on developer.mastercard.com/apis plus Mastercard Insurance Programs from the platform index (llms.txt). Every API sits under exactly one product on the map.

| API | Home tile | Home product |
|---|---|---|
| Account Services Catalogue | 3.5 Account services | Account Services Catalogue |
| Account to Account Commerce | 2.2 A2A & real-time | Account to Account Commerce |
| Agent Suite for Merchants | 4.7 AI & agent applications | Mastercard Agent Suite |
| AML Account Risk | 4.1 Security Solutions | AML Account Risk |
| Authentication Solutions | 3.2 Authentication & checkout | Smart Authentication · Identity Check Express · Stand-In RBA |
| Automatic Billing Updater (ABU) | 3.5 Account services | Automatic Billing Updater (ABU) |
| Benefit Allocation Service | 4.3 Consumer Acquisition & Engagement | Card benefits services |
| Benefits Eligibility Service | 4.3 Consumer Acquisition & Engagement | Card benefits services |
| Bill Pay | 2.5 Bill pay & local | Mastercard Bill Pay |
| Bill Payment Validator | 2.5 Bill pay & local | RPPS (Remote Payment and Presentment Service) |
| BIN Lookup | 1.3 Franchise & rules | BIN Lookup |
| BS Creditor API | 2.2 A2A & real-time | Betalingsservice (Denmark) |
| Business Payment Controls | 4.6 Commercial & B2B | Business Payment Controls |
| Carbon Calculator | 4.3 Consumer Acquisition & Engagement | Carbon Calculator (Doconomy Åland Index) |
| Carbon Calculator Experience | 4.3 Consumer Acquisition & Engagement | Carbon Calculator (Doconomy Åland Index) |
| Card on File Tokenization | 3.1 Tokenisation & credentials | MDES for Merchants / Secure Card on File |
| Click to Pay | 3.2 Authentication & checkout | Click to Pay (EMV Secure Remote Commerce) |
| Commercial Direct Payments | 4.6 Commercial & B2B | Commercial Direct Payments |
| Commercial Event Notifications | 4.6 Commercial & B2B | Commercial Event Notifications |
| Community Pass | pillar-inclusion Inclusive growth | Community Pass & Farm Pass |
| Consumer Credit Analytics | 4.4 Insights & Intelligence | Credit Intelligence Solutions |
| Currency Conversion Calculator | 1.1 The switch | Currency Conversion Calculator |
| Doconomy Aland Index | 4.3 Consumer Acquisition & Engagement | Carbon Calculator (Doconomy Åland Index) |
| Dynamic Yield | 4.3 Consumer Acquisition & Engagement | Dynamic Yield / Experience OS |
| Ethoca Alerts | 3.4 Disputes & resolution | Ethoca Alerts |
| Ethoca Consumer Clarity for Merchants | 3.4 Disputes & resolution | Ethoca Consumer Clarity |
| Ethoca Consumer Clarity | 3.4 Disputes & resolution | Ethoca Consumer Clarity |
| First-Party Trust | 3.4 Disputes & resolution | First-Party Trust & Trusted Transactions |
| Fraud and Loss Database (FLD) | 3.3 Risk decisioning | Fraud and Loss Database (SAFE) |
| Identity Insights for Accounts | 4.1 Security Solutions | Mastercard Identity (Ekata) |
| Identity Insights for Transactions | 3.2 Authentication & checkout | Identity Insights for Transactions |
| In Control for Commercial Payments | 4.6 Commercial & B2B | In Control & Commercial Connect API |
| India Online Dispute Resolution | 3.4 Disputes & resolution | Mastercom & Dispute Resolution |
| Installments | 2.1 Card rails | Mastercard Installments |
| Location Intelligence | 4.4 Insights & Intelligence | Places & location analytics |
| Mastercard Account Validation | 3.5 Account services | Mastercard Account Validation |
| Mastercard Benefits & Experiences Portal | 4.3 Consumer Acquisition & Engagement | Card benefits services |
| Mastercard Cloud Commerce | 3.2 Authentication & checkout | Tap on Phone & Cloud Commerce |
| Mastercard Commercial Connect API | 4.6 Commercial & B2B | In Control & Commercial Connect API |
| Mastercard Contactless Reader SDK | 3.2 Authentication & checkout | Tap on Phone & Cloud Commerce |
| Mastercard Cross-Border Services | 2.3 Mastercard Move | Cross-Border Services |
| Mastercard Cyber and Payment Threat Solutions | 4.1 Security Solutions | Mastercard Threat Intelligence |
| Mastercard Developer Hub for FDX APIs | 4.2 Open Finance | Developer Hub for FDX APIs |
| Mastercard Direct Services | 1.1 The switch | Mastercard Direct Services |
| Mastercard Donate | pillar-inclusion Inclusive growth | Mastercard Donate |
| Mastercard Easy Savings Program | 4.6 Commercial & B2B | Easy Savings |
| Mastercard Gateway | 5.2 Acceptance platforms | Mastercard Gateway (MPGS) |
| Mastercard Installments at Checkout | 2.1 Card rails | Mastercard Installments |
| Mastercard Insurance Programs | 4.3 Consumer Acquisition & Engagement | Mastercard Insurance Programs |
| Mastercard Loyalty Management | 4.3 Consumer Acquisition & Engagement | Loyalty Solutions |
| Mastercard Loyalty Promotions | 4.3 Consumer Acquisition & Engagement | Loyalty Solutions |
| Mastercard Merchant Presented QR: SRC | 3.2 Authentication & checkout | Mastercard QR & Merchant Presented QR |
| Mastercard Move | 2.3 Mastercard Move | Mastercard Move |
| Mastercard Open Finance Theming API | 4.2 Open Finance | Mastercard Open Finance US (Finicity) |
| Mastercard Pay with Rewards | 4.3 Consumer Acquisition & Engagement | Loyalty Solutions |
| Mastercard Processing | 5.3 Issuing platforms | Mastercard Processing |
| Mastercard QR | 3.2 Authentication & checkout | Mastercard QR & Merchant Presented QR |
| Mastercard Redemption Services | 4.3 Consumer Acquisition & Engagement | Loyalty Solutions |
| Mastercard Send | 2.3 Mastercard Move | Mastercard Send |
| Mastercard Sonic Branding | pillar-brand Brand & Priceless | Sonic Branding |
| Mastercard Threat Intelligence | 4.1 Security Solutions | Mastercard Threat Intelligence |
| Mastercard Track Business Payment Service | 4.6 Commercial & B2B | Mastercard Track Business Payment Service |
| Mastercard Virtual Card Tokens | 3.1 Tokenisation & credentials | Mastercard Virtual Card Tokens |
| Mastercard Wallet Services | 3.1 Tokenisation & credentials | Mastercard Wallet Services |
| Mastercard Identity Check | 3.2 Authentication & checkout | Mastercard Identity Check (EMV 3-D Secure) |
| Mastercom | 3.4 Disputes & resolution | Mastercom & Dispute Resolution |
| MATCH Pro | 3.3 Risk decisioning | MATCH Pro |
| MCBP MP SDK | 3.1 Tokenisation & credentials | MCBP MP SDK (Cloud-Based Payments) |
| MDES | 3.1 Tokenisation & credentials | Mastercard Digital Enablement Service (MDES) |
| Merchant Cloud | 5.2 Acceptance platforms | Mastercard Merchant Cloud |
| Merchant Identifier | 3.4 Disputes & resolution | Merchant Identifier |
| Mexico Insights | 4.4 Insights & Intelligence | SpendingPulse & market insights |
| Offers for Publishers | 4.3 Consumer Acquisition & Engagement | Offers platform |
| Offers Merchant Content | 4.3 Consumer Acquisition & Engagement | Offers platform |
| Onboard Risk Check | 3.3 Risk decisioning | Onboard Risk Check |
| Open Finance (Europe) | 4.2 Open Finance | Mastercard Open Finance Europe (Aiia) |
| Open Finance (US & AU) | 4.2 Open Finance | Mastercard Open Finance US (Finicity) |
| Pay by Account | 2.2 A2A & real-time | Instant Payment Service · Bulk Payment Service · Proxy Directory Service · Pay by Account |
| Payment Account Management | 3.5 Account services | Account Status Inquiry & Payment Account Management |
| Payment Account Reference Inquiry | 3.1 Tokenisation & credentials | Payment Account Reference Inquiry |
| Places | 4.4 Insights & Intelligence | Places & location analytics |
| Priceless Cities | 4.3 Consumer Acquisition & Engagement | Priceless & cardholder benefits |
| Priceless Platform | 4.3 Consumer Acquisition & Engagement | Priceless & cardholder benefits |
| Priceless Specials | 4.3 Consumer Acquisition & Engagement | Priceless & cardholder benefits |
| RiskRecon API | 4.1 Security Solutions | RiskRecon |
| Small Business Credit Analytics | 4.4 Insights & Intelligence | Credit Intelligence Solutions |
| Subscription Controls | 3.5 Account services | Minna Technologies |
| Test & Learn | 4.4 Insights & Intelligence | Test & Learn |
| Token Authentication Service (TAS) | 3.1 Tokenisation & credentials | Token Authentication Service (TAS) |
| Track Search | 4.6 Commercial & B2B | Mastercard Track Business Payment Service |
| Transaction Notifications | 3.5 Account services | Transaction Notifications |
