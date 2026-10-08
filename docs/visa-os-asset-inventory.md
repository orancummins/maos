# Visa asset inventory — organised on the same layer model as the "Mastercard Operating System"

Compiled 7 October 2026 from Visa's earnings releases, press releases, corporate pages and trade press. This is the Visa counterpart of `claude/mastercard-os-asset-inventory.md`: same five layers and the same tile numbering where Visa has an equivalent, so the two can be laid side by side. Business context, financials, org and acquisitions are in `claude/visa-business-structure-research.md`; the differences are drawn out in `claude/visa-vs-mastercard-comparison.md`.

**Legend** (same as the Mastercard inventory, plus one mark)
- Status: `●` active · `✦` new or materially expanded in 2025–26 · `◐` in flux · `○` unconfirmed (could not verify current name or status) · `✕` retired or abandoned · `…(pilot)` announced but not generally available
- Origin: `B` built in-house · `A` acquired (year, target)
- **`†` = taken from background knowledge, not source-checked in this pass.** Everything unmarked was seen on a Visa page, press release, filing or call summary in this pass.
- Every product has exactly one **home tile**; cross-references use `→`.

**Two honest limits before reading.** (1) Visa's developer platform exposed no API list in this pass, so there is no Visa equivalent of the Mastercard API appendix, and the Visa inventory is shallower in tiles 3.1–3.5 and 5.1 than the Mastercard one. (2) Several long-established Visa products (Advanced Authorization, Visa Secure, VTS naming, Visa Online) are marked `†`: they certainly exist, but their current names and status were not re-read from Visa's own pages.

**Visa's own four-layer view ("Visa as a Service")** is a packaging view and maps onto the five OS layers like this: *Foundation* ("our network, and our network of networks") = L1 Kernel **plus** the connectivity of L2 Rails · *Services* (credentials, tokens, authentication, risk, fraud) = L3 · *Solutions* = a catalogue of pre-built products that cuts across the OS (Visa Direct → 2.3, Visa Accept → 3.2, Intelligent Commerce → 3.6, commercial solutions → 4.5) · *Access* = L5. Visa's count has moved (three layers in May 2025, four from October 2025), and its Feb 2025 Investor Day listed VisaNet and the network of networks as separate items, so Visa itself distinguishes kernel from rails. Every Visa asset found fits the five layers, so the model holds.

---

## L1 · KERNEL — The Network
*VisaNet and the brand and rules around it.*

### 1.1 The switch
| Product | What it is | Status | Origin |
|---|---|---|---|
| **VisaNet** (authorisation, clearing, settlement) | The core network: 257.5bn processed transactions in FY2025 (+10%); 71.7bn in Q3 FY26; ~200 countries and territories; Visa cites 175m merchants and 18bn endpoints for the foundation layer | ● | B |
| Stand-In Processing / network resiliency | Visa authorises on the issuer's behalf when the issuer is unavailable | ● † | B |
| Network data centres | Secondary source: four redundant global centres (US, UK, Singapore), "six-nines" reliability | ● | B |

### 1.2 Brands & credentials
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa (credit, debit, prepaid, commercial) | The brand and product tiers; Visa quotes 4.8bn payment credentials | ● | B |
| Visa Electron · Interlink · Plus | Legacy and regional brands (international debit, US PIN debit, ATM network) | ○ † | B |

### 1.3 Franchise & rules
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Core Rules and Visa Product & Service Rules | Scheme rules, licensing, interchange framework and brand standards | ● † | B |
| Visa Online (client portal) | See 5.5 | ● † | B |

### 1.4 Data & AI foundation
| Product | What it is | Status | Origin |
|---|---|---|---|
| Network data asset | Transaction data across the network — the input for risk scores and VAS | ● | B |
| AI and data-science capability | Visa says it has deployed 150+ AI-powered applications (Q3 FY26 call) | ✦ | B |
| Featurespace models | Real-time adaptive behavioural AI now underlying A2A Protect (→ 3.3) | ✦ | A (2024) |

---

## L2 · RAILS — How money moves
*Visa's "Foundation" spans the kernel and the network-of-networks connectivity; the rails are shown here as their own layer so they line up with the Mastercard map.*

### 2.1 Card rails
| Product | What it is | Status | Origin |
|---|---|---|---|
| Credit / debit / prepaid products | Consumer card programmes on VisaNet | ● | B |
| Commercial card products (business, corporate, purchasing, fleet, virtual) | Commercial programmes; commercial payments volume $1.8tn in FY2025 (+7%), +13% in Q3 FY26 | ● | B |
| Visa Installments / Visa Flexible Credential | Instalment options and multi-funding credentials on a single card | ○ † | B |
| Contactless / transit | Tap-to-pay and open-loop transit | ● † | B |

### 2.2 Account-to-account & real-time
Visa **does not own national real-time infrastructure** of the Vocalink kind in any large market. Its A2A presence is overlay and acquired point assets.

| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa A2A (Tink-powered) | Pay-by-bank and account-to-account payment initiation, mainly in Europe | ● † | A (2022, Tink) |
| Newpay (Argentina) | Multi-network infrastructure with **real-time payments** services, the **Banelco ATM network** and PagoMisCuentas bill pay | ✦ | A (Feb 2026, Prisma/Newpay) |
| YellowPepper | Latin America mobile banking and A2A payments | ○ † | A (2020) |
| Visa Direct as a rail onto domestic instant systems | Visa Direct pushes to bank accounts through local real-time schemes | ● † | B |

### 2.3 Money movement (Visa Direct, B2B Connect, cross-border)
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Visa Direct** | Real-time push payments to cards, bank accounts and wallets: 18bn+ endpoints, 195+ countries and territories, 150+ currencies, 10bn+ transactions a year (page figure); 12.6bn transactions in FY2025 (+27%); 4.0bn in Q3 FY26 (+21%) | ● | B |
| **Visa B2B Connect** | Bank-to-bank cross-border B2B network; launched Jun 2019 on Hyperledger Fabric with IBM, FIS and Bottomline; 30+ corridors at launch | ● | B (2019) |
| Earthport | Cross-border bank network bought to "move money to people we don't have a card relationship with" | ● † | A (2019, $320.4m) |
| Currencycloud | Cross-border FX and embedded-finance platform | ● † | A (2021, $963m) |
| Visa cross-border (international transaction revenue) | The fee stream on cross-border card volume: $14.2bn in FY2025 (+12%) | ● | B |

### 2.4 Digital assets
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Stablecoin settlement** | USDC settlement of VisaNet obligations for US institutions (Solana first; Cross River and Lead Bank); $3.5bn run-rate at 30 Nov 2025; five more blockchains added Apr 2026 (headline) | ✦ | B (Dec 2025) |
| **Stablecoin-linked cards** | 130+ programmes in 40+ countries (Q4 FY25); spend quadrupled YoY | ✦ | B / partners |
| **Visa Stablecoin Platform (VSP)** | Mint, move and manage stablecoins; first coin Open USD from Open Standard, which Visa joined; beta with select clients (16 Jul 2026) | ✦ (beta) | B (2026) |
| **Visa Direct stablecoin prefunding and payouts** | Eligible clients can prefund merchant accounts and send payouts in stablecoins via zerohash (5 Aug 2026, "soon") | ✦ (pilot) | B + partner (zerohash) |
| Circle Arc validator | Visa plans to run a validator once Circle's Arc layer-1 chain is live | ○ (testnet) | partner |

### 2.5 Bill pay & local rails
| Product | What it is | Status | Origin |
|---|---|---|---|
| PagoMisCuentas | Argentine bill-pay platform inside Newpay | ✦ | A (Feb 2026) |
| Visa-wide bill pay product | None found on Visa's pages in this pass | ○ | — |

### 2.6 Open banking / open finance
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Tink** | Pan-European open-banking platform (account data and payment initiation); Visa's A2A engine | ● † | A (Mar 2022, ~$2.15bn †) |
| Plaid | $5.3bn deal abandoned in Jan 2021 after a US DOJ challenge | ✕ † | A (terminated) |
| US open-banking position | Visa has **no owned US open-finance data network** found in this pass (Mastercard owns Finicity) | ○ | — |

---

## L3 · NETWORK SERVICES — Invoked around every transaction

### 3.1 Tokenisation & credentials
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Visa Token Service (VTS)** † | Network tokenisation for wallets, in-app, card-on-file and e-commerce: 16bn+ tokens (Q4 FY25); >50% of e-commerce transactions tokenised (May 2026); goal 100% | ● | B |
| Token Assurance Framework | Named on the Q3 FY26 call as part of the agentic-security set | ✦ | B (2026) |
| Visa Provisioning Service | Issuer-side token provisioning | ○ † | B |

### 3.2 Authentication & checkout
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Secure (EMV 3-D Secure) | Risk-based cardholder authentication | ● † | B |
| Click to Pay | Network-recognised guest checkout (EMV SRC) | ● † | B (EMVCo) |
| Visa Payment Passkey | Passkey-based payment confirmation, used in agentic flows | ✦ † | B (2025) |
| **Visa Accept** | Tap-to-phone acceptance for small sellers; launched in Sri Lanka targeting 7m sellers, planned for 25 countries | ✦ | B (2025) |

### 3.3 Risk decisioning
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Advanced Authorization · Visa Risk Manager | Real-time risk scoring at authorisation and issuer rule tools | ● † | B |
| **Featurespace** (real-time fraud AI; ARIC Risk Hub †) | Adaptive behavioural AI for payments and A2A fraud; first in-market integration is A2A Protect's unified fraud score (Sep 2026) | ✦ | A (Sep 2024) |
| **BioCatch** | Behavioural and device intelligence: 3,000+ data points, 760m users, 1.8bn devices, 350+ banks in 21 countries; stops fraud *before* the payment (onboarding, authentication) | ✦ (pending close) | A (announced Aug 2026, $2.4bn; close expected by end of fiscal Q2 2027) |
| Visa Protect (umbrella for risk and security products) | The brand under which Visa groups fraud tools | ● † | B + A |

### 3.4 Disputes & resolution
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Visa Order Insight** | Transaction detail shared with issuers to resolve disputes before a chargeback; 100% of global Visa issuers covered (page claim) | ● | A (2019, Verifi †) |
| Rapid Dispute Resolution · Verifi | Automated dispute deflection | ● † | A (2019, Verifi) |
| Visa Dispute Resolution framework | Chargeback and arbitration rules and tooling | ● † | B |

### 3.5 Account & credential lifecycle
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Account Updater (VAU) | Pushes reissued card details to card-on-file merchants | ● † | B |
| Account and card lifecycle inside issuer processing | Delivered through Pismo and Prisma (→ 5.3) | ● | A |

### 3.6 Agentic commerce
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Visa Intelligent Commerce** | Umbrella: APIs for secure agent transactions, tokenised credentials, authentication and controls, post-purchase protections; still "in the process of deployment" on Visa's page | ✦ | B (Apr 2025 †) |
| **Trusted Agent Protocol (TAP)** | Lets merchants tell legitimate AI agents from bots via agent-specific cryptographic signatures; built with Cloudflare, supported by Nuvei; aligned with IETF, OpenID Foundation and EMVCo | ✦ | B (14 Oct 2025) |
| **Visa MCP Server and Acceptance Agent Toolkit** | Developer access layer to Visa Intelligent Commerce APIs | ✦ (pilot) | B (4 Sep 2025) |
| **Intelligent Commerce Connect** | One integration through Visa Acceptance Platform for agent-initiated purchases; supports TAP, Machine Payments Protocol, Agentic Commerce Protocol and Universal Commerce Protocol; pilot partners Aldar, AWS, Diddo, Highnote, Mesh, Payabli, Sumvin | ✦ (pilot) | B (8 Apr 2026) |
| Agent Score · Agent Directory | Named on the Q3 FY26 call; trust signals about agents | ✦ (call summary only) | B (2026) |
| Agentic Ready programme | Programme for issuers to prepare for agent transactions | ✦ ○ | B |
| OpenAI and Meta collaborations | Announced with Q3 FY26 results (call summaries only) | ✦ ○ | partners |

---

## L4 · SOLUTIONS — Value-added services sold to customers
*Visa's "Value-Added Services": ~30% of FY2025 net revenue (range ~27–30%), growing at ~2× the network. Visa organises them as four portfolios: Issuing Solutions · Acceptance Solutions · Risk & Security Solutions · Advisory & Marketing Services.*

### 4.1 Security solutions
| Product | What it is | Status | Origin |
|---|---|---|---|
| **A2A Protect** (enhanced 1 Sep 2026) | Account-to-account fraud prevention with a unified fraud score from Featurespace, optional network-level scam signals, plain-language explanations; reported >50% fraud reduction and >40% fewer unnecessary alerts, +75% detection in six months | ✦ | B + A (Featurespace) |
| Risk & Security Solutions portfolio | Visa's name for the fraud, authentication and cyber services sold to issuers and acquirers | ● | B + A |
| Cyber, identity and threat-intelligence platforms | **No acquired platform comparable to Recorded Future, Ekata or RiskRecon found in this pass** | ○ | — |

### 4.2 Consumer acquisition & engagement
| Product | What it is | Status | Origin |
|---|---|---|---|
| Advisory & Marketing Services (marketing services, offers, event marketing) | Marketing engagements for issuers and merchants; Q3 FY26 growth helped by FIFA World Cup activations | ● | B |
| Visa Offers / Merchant Offers platform | Targeted offers on Visa cards | ○ † | B |

### 4.3 Insights & intelligence
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Consulting & Analytics (VCA) | Consulting and data-science service; 1,200 projects in Q3 FY26 (CFO) | ● | B |
| Visa Business & Economic Insights, spending indices | Public macro and consumer-spending research | ● † | B |
| Data products | Visa lists "data products" as a VAS portfolio component | ● | B |

### 4.4 Advisors & transformation
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Consulting & Analytics — advisory, payment strategy, issuing and acquiring consulting | Counterpart to Mastercard Advisors & Transformation | ● | B |

### 4.5 Commercial & B2B solutions
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Visa Commercial Solutions Hub (VCS Hub)** | Single issuer integration to Visa and partner capabilities for commercial card programmes; launched 2025 | ● | B (2025) |
| **Visa Accounts Receivable Manager (AR Manager)** | Issuers send virtual-card details to suppliers; AI matches payments to invoices; an early adopter reported an 89% cut in days sales outstanding; added to the Hub May 2026, global rollout from Sept 2026 (69 geographies) | ✦ | B |
| Visa Commercial Pay and virtual-card products | Virtual card and payables products | ● † | B |
| Visa B2B Connect | → 2.3 (home tile is Rails) | ● | B |

### 4.6 AI & agent applications
| Product | What it is | Status | Origin |
|---|---|---|---|
| AI applications (150+ deployed) | Internal and client-facing AI tools; CEO links the July 2026 restructuring to reinvesting in AI, stablecoins and agentic commerce | ✦ | B |
| → Visa Intelligent Commerce (3.6) · A2A Protect (4.1) · AR Manager (4.5) | Cross-references: AI is a lens across layers | — | — |

---

## L5 · ACCESS — How customers and developers plug in

### 5.1 Developers & APIs
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Developer Platform (developer.visa.com) | Visa's API portal; "Access layer: client entry points, primarily through APIs" (CFO). **No product list retrieved in this pass** — API count unknown | ○ | B |
| Visa MCP Server | → 3.6 | ✦ (pilot) | B |

### 5.2 Acceptance platforms (merchant / acquirer side)
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Visa Acceptance Platform** | Visa's unified commerce stack for merchants and acquirers; the single integration behind Intelligent Commerce Connect | ● | B + A |
| **Cybersource** | Payment gateway and processing platform, multi-card-brand and multi-currency | ● | A (2010) † |
| **Authorize.net** | Gateway for small businesses, part of Visa's acceptance solutions | ● | A (via Cybersource) † |
| Acceptance volume | 9.6bn transactions a year, 99.9% uptime (up to 99.999%) per Visa's acceptance page | ● | — |

### 5.3 Issuing platforms (issuer / fintech side)
| Product | What it is | Status | Origin |
|---|---|---|---|
| **Pismo** | Cloud-native issuer-processing and core-banking platform | ● | A (completed 29 Jun 2023, ~$1bn) |
| **Prisma Medios de Pago** | Card issuer processing (credit, debit, prepaid) in Argentina; Visa plans to merge its technology with Visa's tokenisation, biometric authentication, risk tools and agentic commerce | ✦ | A (completed 27 Feb 2026) |
| **Prosa** | Mexico's leading payments processor (50+ years, 10bn+ transactions a year), brand-agnostic; Visa takes a majority interest, with Banorte, HSBC Mexico, Invex, Santander Mexico, Scotiabank Mexico and Banjército keeping the rest | ◐ (completion not confirmed) | A (announced 15 Dec 2023) |
| Visa issuing services (Visa Processing, issuer processing outsourcing) | Longstanding issuing and processing services | ● † | B |

### 5.4 Programmes & innovation
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Ventures · Visa Fintech Partner Connect · Visa Everywhere Initiative | Partner, startup and innovation programmes | ○ † | B |
| Agentic Ready programme | → 3.6 | ✦ | B |

### 5.5 Customer portal
| Product | What it is | Status | Origin |
|---|---|---|---|
| Visa Online (VOL) | Client portal for rules, specifications, manuals and applications — the counterpart of Mastercard Connect | ● † | B |

---

## USERS — The ecosystem the stack serves
Issuers and banks · Acquirers and PSPs · Merchants · Fintechs · Corporates and SMEs · Governments · Consumers · **AI agents** (Trusted Agent Protocol and Intelligent Commerce cast agents as a first-class user, as Mastercard does)

---

## How Visa slices the same assets (for the "lenses")

**Pillars** (management, FY2025–26) → **Consumer Payments** → L1, L2.1, L3, L5 · **Commercial & Money Movement** → L2.3, L2.4, L4.5 · **Value-Added Services** (Issuing · Acceptance · Risk & Security · Advisory & Marketing) → L3.3, L4, L5.2–5.3

**Visa as a Service** (CFO, May 2026): Foundation (L1 + L2 connectivity) · Services (L3) · Solutions (a catalogue across L2.3, L3.2, L3.6, L4) · Access (L5)

**Visa's acceptance page** and developer page group offerings by buyer: issuers · acquirers and merchants · businesses (commercial) · fintechs and developers.

## Acquisition timeline (what was bought, where it lives)
2010 Cybersource → 5.2 · 2019 Earthport → 2.3; Verifi → 3.4 · 2020 YellowPepper → 2.2 · 2021 Currencycloud → 2.3 · 2022 Tink → 2.6 · 2023 Pismo → 5.3; Prosa (announced) → 5.3 · 2024 Featurespace → 3.3 · 2026 Prisma + Newpay → 5.3/2.2/2.5; BioCatch (announced, pending) → 3.3. Abandoned: Plaid (2021).

## Open questions
1. Developer Platform API list and count (Visa equivalent of the Mastercard appendix).
2. Current names and status of Visa Advanced Authorization, Visa Secure, VTS, Visa Online, VCS Hub's other products, Visa Offers, Visa Flexible Credential and Visa Installments.
3. Whether Prosa has closed.
4. Whether Visa has a cyber/threat-intelligence product line (none found).
5. Whether Agent Score and Agent Directory are shipped products or announced components.
6. The head of CMS and the Chief Product and Strategy Officer (org chart gap).
