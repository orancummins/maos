/* ====================================================================
   Visa comparison layer — compiled 7 October 2026 (see docs/visa-*.md).
   Every Mastercard product on the map is compared with Visa's nearest asset.
   k: eq = direct Visa equivalent · rel = related / partial · none = none found in this pass
   b: 1 = from background knowledge, not source-checked in this pass (shown with †)
   "No Visa equivalent found" means not found in the sources read — not proof that none exists.
   ==================================================================== */
const VISA_K = {eq:"Visa has a direct equivalent", rel:"Visa has a related offering", none:"No Visa equivalent found"};
const VISA_W = {
  more:{sym:"▲", t:"Visa has more here"},
  same:{sym:"＝", t:"Comparable"},
  less:{sym:"▼", t:"Visa has less here"},
  diff:{sym:"≠", t:"Same job, different approach"},
  unk:{sym:"?", t:"Not comparable yet"}
};
const VV = "https://investor.visa.com/news/news-details/2026/";

/* Per Mastercard product: [kind, Visa counterpart, note, background?] */
const VISA_P = {
 /* L5 Access */
 developers:["eq","Visa Developer Platform","developer.visa.com is Visa's API portal. No product list could be retrieved, so the size of Visa's API surface relative to Mastercard's 91 is unknown."],
 merchantcloud:["eq","Visa Acceptance Platform (+ Intelligent Commerce Connect)","One integration for merchants and acquirers; the same platform fronts Visa's agentic on-ramp."],
 gateway:["eq","Cybersource · Authorize.net","Visa's gateway business dates from the 2010 Cybersource acquisition and is the longer-established of the two; Visa cites 9.6bn transactions a year on its acceptance page.",1],
 processing:["eq","Pismo · Prisma Medios de Pago · Prosa","Visa goes further down the stack: Pismo is a cloud-native issuer-processing and core-banking platform (~$1bn, 2023); Prisma (Argentina, Feb 2026) and Prosa (Mexico, announced Dec 2023) are regional processors."],
 cloudedge:["none","—","No Visa counterpart to cloud connectivity onboarding found."],
 productexpress:["rel","Visa Fintech Fast Track / Fintech Partner Connect","Programmes that speed fintech card launches.",1],
 engage:["rel","Visa Fintech Partner Connect","Partner marketplace for fintechs; size not checked.",1],
 startpath:["rel","Visa Everywhere Initiative · Visa Ventures","Startup engagement and investment programmes.",1],
 partnerprog:["none","—","No named Visa equivalent found."],
 mcconnect:["eq","Visa Online","Licensed-customer portal for rules, specifications and applications.",1],
 trc:["rel","Visa Online documentation library","Technical documentation sits inside Visa Online.",1],
 /* L4 Solutions */
 mcidentity:["rel","BioCatch (pending)","BioCatch covers behavioural and device signals at onboarding; no Visa product matches Ekata's identity-data signals."],
 nudata:["eq","BioCatch","Behavioural and device intelligence: 3,000+ data points, 760m users, 350+ banks. $2.4bn cash deal announced 3 Aug 2026; close expected by end of Visa's fiscal Q2 2027."],
 mcid:["none","—","No Visa digital-identity service found."],
 trustcenter:["none","—","No Visa small-business cyber hub found."],
 riskrecon:["none","—","No Visa third-party cyber-risk rating product found."],
 cybersuite:["none","—","No Visa cyber-risk suite found."],
 sysrisk:["none","—","No Visa systemic or third-party risk service found."],
 baffin:["none","—","No Visa network-protection product found."],
 recfut:["none","—","Visa has not bought a threat-intelligence platform comparable to Recorded Future ($2.65bn)."],
 mcti:["none","—","No Visa fraud-plus-cyber intelligence product found."],
 a2aprotect:["eq","A2A Protect (enhanced 1 Sep 2026)","Both firms ship a product called A2A Protect. Visa's now carries a unified fraud score from Featurespace and reports >50% fraud reduction and >40% fewer unnecessary alerts."],
 scamprotect:["rel","A2A Protect network signals · BioCatch coercion detection","Scam and coordinated-fraud signals, built into A2A Protect rather than sold as an umbrella brand."],
 trace:["rel","A2A Protect network-level signals","Network-level signals on emerging scam hotspots and coordinated fraud."],
 cryptosecure:["none","—","No Visa issuer dashboard for crypto-linked risk found."],
 amlrisk:["rel","Featurespace","Real-time financial-crime AI covering payments fraud and AML.",1],
 ciphertrace:["none","—","No Visa crypto-intelligence asset found."],
 dy:["none","—","No Visa personalisation platform found."],
 mktsvc:["eq","Advisory & Marketing Services","One of Visa's four VAS portfolios; Q3 FY26 growth was helped by FIFA World Cup marketing engagements."],
 audhub:["rel","Advisory & Marketing Services","Visa sells marketing services; an audience product was not identified."],
 commedia:["none","—","No Visa retail-media network found."],
 loyalty:["rel","Visa Offers · rewards programmes","Card-linked offers and rewards.",1],
 priceless:["rel","Visa cardholder benefits and offers","Card benefits and experiences.",1],
 offers:["eq","Visa Offers Platform","Card-linked offers.",1],
 benefits:["rel","Visa card benefits","Tier benefits on Visa products.",1],
 insurance:["none","—","No Visa insurance programmes page found."],
 carbon:["none","—","No Visa carbon-footprint product found."],
 testlearn:["none","—","No Visa experimentation platform found."],
 spendingpulse:["eq","Visa Business & Economic Insights · spending indices","Public macro and consumer-spending research.",1],
 places:["none","—","No Visa location-analytics product found."],
 mei:["rel","Visa Business & Economic Insights","Economist-led research; Visa has no separately branded institute found.",1],
 portfolio:["rel","Visa Consulting & Analytics tools","Portfolio and programme design delivered mainly as consulting."],
 intelcenter:["rel","Visa Analytics Platform","Issuer and acquirer analytics dashboards.",1],
 creditintel:["none","—","No Visa credit-intelligence product found."],
 cleanroom:["none","—","No Visa data clean room found."],
 opsintel:["none","—","No named Visa equivalent found."],
 advisors:["eq","Visa Consulting & Analytics (VCA)","1,200 consulting projects delivered in Q3 FY26 — more than in all of 2019 (CFO)."],
 practices:["eq","Visa Consulting & Analytics practices","Payments, risk, data and analytics advisory."],
 digitallabs:["rel","Visa innovation centres and studios","Prototyping and innovation-as-a-service.",1],
 managed:["none","—","No named Visa managed-services line found."],
 trackbps:["rel","Visa Commercial Solutions Hub · B2B Connect","Buyer–supplier payment connectivity; Visa's is split between the Hub and B2B Connect."],
 trackip:["rel","Visa Commercial Pay and virtual cards","Virtual-card payables.",1],
 incontrol:["rel","Visa Payment Controls · virtual cards","Spend controls on virtual card numbers.",1],
 smartdata:["rel","Visa Spend Clarity","Expense data and reconciliation for commercial cards.",1],
 receivables:["eq","Visa Accounts Receivable Manager","Added to the Commercial Solutions Hub in May 2026, rolling out to 69 geographies from Sept 2026; AI matches payments to invoices. An early adopter reported an 89% cut in days sales outstanding."],
 easysavings:["none","—","No Visa SME rebate programme found."],
 bpc:["rel","Visa Payment Controls","Controls on business payments.",1],
 cdp:["rel","Visa B2B Connect · Visa Direct","Direct bank-to-bank and push payments for business."],
 cen:["none","—","No named Visa equivalent found."],
 healthcare:["none","—","No Visa healthcare or embedded-finance line found."],
 agentsuite:["rel","Visa AI applications · Intelligent Commerce toolkits","Visa says it has deployed 150+ AI-powered applications; no packaged agent suite for banks and merchants found."],
 /* L3 Network services */
 mdes:["eq","Visa Token Service (VTS)","16bn+ tokens at Q4 FY25; more than half of e-commerce transactions tokenised (CFO, May 2026).",1],
 scof:["eq","Visa tokens for card-on-file and e-commerce","Same use case; Visa's headline is >50% of e-commerce tokenised."],
 tokenconnect:["rel","Visa Provisioning Service","Issuer-side provisioning to wallets.",1],
 tas:["rel","Visa Secure with network tokens","Token-linked step-up authentication.",1],
 onecred:["rel","Visa Flexible Credential","One credential, many funding sources.",1],
 digitalfirst:["rel","Visa digital issuance","Instant digital card issuance.",1],
 token2030:["eq","Visa goal: tokenise 100% of e-commerce","Same ambition; Visa gives no target date in the sources read."],
 vctokens:["rel","Visa commercial virtual cards","Virtual-card tokens for business payments.",1],
 walletservices:["rel","VTS wallet provisioning","Wallet-provider tokenisation services.",1],
 mcbp:["rel","Visa cloud-based payments SDK","Host-card emulation and mobile SDK.",1],
 par:["rel","VTS payment account reference","Both support the EMVCo standard reference.",1],
 idcheck:["eq","Visa Secure (EMV 3-D Secure)","Risk-based cardholder authentication.",1],
 smartauth:["rel","Visa Secure risk-based authentication · Advanced Authorization","Risk-based step-up.",1],
 iift:["rel","Visa Secure data sharing","Issuer–merchant data at authorisation.",1],
 passkeys:["eq","Visa Payment Passkey","Passkey confirmation, used in agentic flows.",1],
 c2p:["eq","Click to Pay","Both back EMV Secure Remote Commerce.",1],
 biocheckout:["rel","Visa biometric payment pilots","In-store pay-by-biometrics.",1],
 taponphone:["eq","Visa Accept","Tap-to-phone for small sellers; first launch in Sri Lanka targeting 7m sellers, planned for 25 countries."],
 qr:["rel","Visa QR","QR acceptance.",1],
 dmp:["eq","Featurespace (ARIC Risk Hub)","Visa's core AI decisioning engine, acquired in 2024; the first in-market integration is A2A Protect (Sep 2026).",1],
 di:["eq","Visa Advanced Authorization","Real-time issuer risk score at authorisation.",1],
 dipro:["rel","Advanced Authorization + Featurespace","Visa has not announced a single product equal to Decision Intelligence Pro."],
 odd:["rel","Visa Risk Manager","Issuer rules at authorisation.",1],
 tfm:["rel","A2A Protect · acquirer risk tools","Pre-payment risk scoring, strongest on A2A."],
 ems:["rel","Advanced Authorization","Behaviour-based CNP scoring.",1],
 fma:["eq","Visa Risk Manager","Issuer self-service fraud rules and case tools.",1],
 obrs:["none","—","No Visa-managed rule-cartridge service found."],
 merchrisk:["rel","Visa merchant risk programmes","Acquirer-side merchant monitoring.",1],
 matchpro:["rel","Visa Merchant Screening Service","Terminated-merchant screening.",1],
 orc:["rel","BioCatch onboarding signals (pending)","Upstream trust at account opening."],
 fld:["rel","Visa fraud reporting","Confirmed-fraud reporting system.",1],
 medi:["none","—","No named Visa equivalent found."],
 safetynet:["none","—","Unconfirmed on the Mastercard side too."],
 ethocaalerts:["eq","Verifi alerts (CDRN) · Rapid Dispute Resolution","Visa owns Verifi, the closest rival to Ethoca.",1],
 ethocacc:["eq","Visa Order Insight","Transaction detail shared at the point of dispute; Visa's page claims 100% coverage of global Visa issuers."],
 ethocaelim:["rel","Verifi Rapid Dispute Resolution","Automated dispute deflection.",1],
 mastercom:["eq","Visa dispute resolution framework","Chargeback and arbitration rules and tooling.",1],
 fpt:["rel","Order Insight · compelling-evidence rules","Merchant-supplied evidence against friendly fraud.",1],
 merchantid:["none","—","No named Visa equivalent found."],
 abu:["eq","Visa Account Updater","Pushes reissued card details to card-on-file merchants.",1],
 asi:["rel","Visa account verification","Card-validity checks.",1],
 cardlc:["rel","Pismo · Prisma issuer processing","Card lifecycle inside Visa's issuer-processing platforms."],
 minna:["none","—","No Visa subscription-management asset found."],
 alm:["none","—","Unconfirmed on the Mastercard side too."],
 txnnotif:["rel","Visa transaction alerts","Cardholder alerts.",1],
 asc:["none","—","No named Visa equivalent found."],
 acctval:["rel","Visa Account Verification Service","Account-validity checks.",1],
 agentpay:["eq","Visa Intelligent Commerce","Announced Apr 2025; still described on Visa's page as in deployment. Neither company discloses agentic transaction counts."],
 agentictokens:["eq","Visa Intelligent Commerce tokens · Token Assurance Framework","Tokenised agent credentials; Token Assurance Framework named on the Q3 FY26 call."],
 kya:["eq","Trusted Agent Protocol · Agent Directory · Agent Score","TAP (14 Oct 2025, built with Cloudflare) lets merchants separate legitimate agents from bots using cryptographic signatures. Agent Directory and Agent Score are named on the Q3 FY26 call only."],
 vintent:["rel","Trusted Agent Protocol","Different method: TAP signs who the agent is; Verifiable Intent proves what the person authorised. Interoperability talks were reported in Sept 2026."],
 ap4m:["rel","Intelligent Commerce Connect (supports Machine Payments Protocol)","Visa's April 2026 pilot on-ramp supports TAP, MPP, ACP and UCP; it does not announce a machine-to-machine micropayment product."],
 agentsign:["none","—","Unconfirmed on the Mastercard side too."],
 /* L2 Rails */
 cardsconsumer:["eq","Visa credit, debit and prepaid","Visa is the larger network by processed transactions (257.5bn in FY25 vs ~210bn switched at Mastercard; different fiscal years)."],
 cardscommercial:["eq","Visa commercial cards","Commercial payments volume $1.8tn in FY25 (+7%), +13% in Q3 FY26."],
 installments:["rel","Visa Installments · Flexible Credential","Instalment options on existing cards.",1],
 contactless:["eq","Visa contactless and transit","Tap-to-pay and open-loop transit.",1],
 vocalink:["rel","Newpay (Argentina)","Visa owns no Vocalink-scale national real-time infrastructure. Its nearest owned asset is Newpay (real-time services, Banelco ATM network), acquired Feb 2026."],
 fps:["none","—","Visa runs no national faster-payments scheme."],
 bacs:["none","—","Visa runs no bulk-payments scheme."],
 pbba:["rel","Visa A2A (Tink-powered)","Pay-by-bank initiation in Europe.",1],
 a2astack:["rel","Visa Direct onto domestic instant schemes","Visa overlays other operators' real-time rails rather than running them.",1],
 a2acommerce:["rel","Visa A2A","Account-to-account checkout via Tink.",1],
 betalingsservice:["none","—","Visa owns no Nordic direct-debit scheme."],
 nets:["none","—","Visa owns no Nordic A2A clearing."],
 rtpbuilds:["none","—","Visa does not build national instant-payment systems."],
 move:["eq","Visa Direct","18bn+ endpoints, 195+ countries and territories, 150+ currencies; 12.6bn transactions in FY25 (+27%), 4.0bn in Q3 FY26 (+21%)."],
 send:["eq","Visa Direct (push to card)","Real-time push payments for P2P, payouts and disbursements."],
 xborder:["eq","Visa B2B Connect · Currencycloud · Earthport","Visa assembled cross-border from Earthport ($320m, 2019) and Currencycloud ($963m, 2021) plus its own B2B Connect.",1],
 movecomm:["eq","Visa B2B Connect","Bank-to-bank cross-border B2B, launched June 2019 on Hyperledger Fabric with IBM, FIS and Bottomline; Mastercard's equivalent arrived in October 2024."],
 disb:["eq","Visa Direct disbursements","Government, payroll, insurance and remittance payouts.",1],
 tips:["none","—","No Visa central-bank instant-settlement pilot found."],
 mtn:["rel","Visa Stablecoin Platform","Nearest equivalent, but for stablecoins rather than tokenised deposits; beta since 16 Jul 2026."],
 stable:["eq","Visa stablecoin settlement","USDC on Solana for US institutions (16 Dec 2025; $3.5bn run-rate at 30 Nov 2025); five more blockchains added in Apr 2026."],
 bvnk:["rel","Visa Direct stablecoin prefunding via zerohash","Visa partners (zerohash, Circle, Open Standard) where Mastercard bought BVNK."],
 cryptocred:["none","—","No Visa username-based crypto transfer product found."],
 cryptocards:["eq","Visa stablecoin-linked cards","130+ programmes in 40+ countries at Q4 FY25; spend quadrupled year on year."],
 billpay:["rel","PagoMisCuentas (Newpay, Argentina)","Bill-pay platform in one country only."],
 arcus:["none","—","No Visa bill-pay infrastructure for Latin America beyond Argentina found."],
 rpps:["none","—","No Visa US biller network found."],
 paylocal:["none","—","No Visa wallet-bridging product found."],
 ofus:["none","—","Visa has no owned US open-finance network; its $5.3bn Plaid bid was abandoned in 2021.",1],
 ofeu:["eq","Tink","European open-banking platform acquired in 2022 (~$2.15bn); it is also Visa's A2A engine.",1],
 dataconnect:["none","—","No Visa consent-layer product found."],
 fdxhub:["none","—","No named Visa equivalent found."],
 paybybankus:["none","—","No US pay-by-bank product found."],
 /* L1 Kernel */
 swcore:["eq","VisaNet","71.7bn processed transactions in Q3 FY26 (+10%); Visa cites ~200 countries and territories."],
 standin:["eq","Visa Stand-In Processing","Authorisation on the issuer's behalf when it is unavailable.",1],
 cbfm:["none","—","No named Visa equivalent found."],
 fx:["rel","Visa exchange-rate tools","Public exchange-rate calculator.",1],
 directservices:["none","—","No named Visa equivalent found."],
 brandmc:["eq","Visa","The brand and its product tiers; Visa quotes 4.8bn payment credentials."],
 maestro:["rel","Visa Electron · Interlink","Legacy and regional debit brands.",1],
 cirrus:["eq","Plus","Visa's global ATM network brand.",1],
 rules:["eq","Visa Core Rules and Product & Service Rules","Scheme rules and licensing.",1],
 nep:["rel","Visa third-party registration programmes","Registration of third-party agents and payment facilitators.",1],
 binlookup:["none","—","No named Visa equivalent found."],
 data:["eq","Visa network data","Transaction data across VisaNet — the input for scores and VAS."],
 dataai:["rel","Visa's 150+ AI applications","No separate cross-company data and AI organisation found."],
 brighterion:["eq","Featurespace","The acquired AI engine at the core of each firm's risk tools (Brighterion 2017, Featurespace 2024)."],
 /* Pillars */
 brand:["eq","Visa brand and sponsorships","Includes FIFA World Cup activations in 2026.",1],
 sonic:["none","—","No named Visa equivalent found."],
 cig:["rel","Visa Foundation · Visa Economic Empowerment Institute","Inclusion and economic-empowerment programmes.",1],
 communitypass:["rel","Visa Foundation programmes","Programmes for smallholders and informal economies.",1],
 strive:["rel","Visa Foundation small-business programmes","Small-business support.",1],
 donate:["none","—","No named Visa equivalent found."],
 regulation:["eq","Visa regulatory positioning","Both firms face interchange, antitrust and open-banking rules.",1]
};

/* Per tile: how Visa compares, plus Visa's own assets on the tile.
   mc = Mastercard product ids this Visa asset matches ([] = Visa-only on this map).
   st: a active · n new · p pilot/beta · x pending · u unconfirmed · r retired/abandoned; o: B built · A acquired */
const VISA_T = {
 "1.1":{w:"same", s:"Same job. Visa processed more transactions in FY25 (257.5bn vs ~210bn switched; different fiscal years).", a:[
   ["VisaNet","Authorisation, clearing and settlement; ~200 countries and territories",["swcore"],"a","B"],
   ["Stand-In Processing †","Authorises for the issuer when it is unavailable",["standin"],"a","B"],
   ["Network data centres","Secondary source: four redundant centres (US, UK, Singapore), 'six-nines' reliability",["swcore"],"a","B"]]},
 "1.2":{w:"same", s:"Same structure: a flagship brand plus legacy debit and ATM brands.", a:[
   ["Visa","Credit, debit, prepaid and commercial; 4.8bn payment credentials",["brandmc"],"a","B"],
   ["Electron · Interlink · Plus †","Legacy international debit, US PIN debit and ATM network brands",["maestro","cirrus"],"u","B"]]},
 "1.3":{w:"same", s:"Same structure; Visa's rulebook and client portal were not re-read in this pass.", a:[
   ["Visa Core Rules and Product & Service Rules †","Scheme rules, licensing and brand standards",["rules"],"a","B"]]},
 "1.4":{w:"same", s:"Featurespace plays the role Brighterion plays at Mastercard.", a:[
   ["Network data asset","Transaction data across VisaNet",["data"],"a","B"],
   ["AI applications","150+ AI-powered applications deployed (Q3 FY26 call)",["dataai"],"n","B"],
   ["Featurespace models","Real-time adaptive behavioural AI",["brighterion"],"n","A 2024"]]},
 "2.1":{w:"same", s:"Same card rails. Visa processes more transactions; commercial payments volume was $1.8tn in FY25.", a:[
   ["Credit, debit and prepaid","Consumer programmes on VisaNet",["cardsconsumer"],"a","B"],
   ["Commercial cards","Business, corporate, purchasing, fleet and virtual",["cardscommercial"],"a","B"],
   ["Installments · Flexible Credential †","Instalments and multi-funding credentials",["installments"],"u","B"],
   ["Contactless and transit †","Tap-to-pay and open-loop transit",["contactless"],"a","B"]]},
 "2.2":{w:"less", s:"Visa owns no national real-time infrastructure on the Vocalink model. Its A2A presence is Tink (Europe), Newpay (Argentina) and Visa Direct overlaid on other operators' rails.", a:[
   ["Visa A2A (Tink-powered) †","Pay-by-bank and account-to-account initiation, mainly Europe",["pbba","a2acommerce"],"a","A 2022"],
   ["Newpay (Argentina)","Real-time payments services and the Banelco ATM network; completed 27 Feb 2026",["vocalink"],"n","A 2026"],
   ["YellowPepper †","Latin America mobile banking and A2A payments",[],"u","A 2020"],
   ["Visa Direct onto domestic instant schemes †","Pushes to bank accounts via local real-time systems",["a2astack"],"a","B"]]},
 "2.3":{w:"same", s:"Visa Direct and B2B Connect are the direct rivals to Move, Send and Move Commercial Payments. B2B Connect (June 2019) is about five years older than Mastercard's equivalent.", a:[
   ["Visa Direct","18bn+ endpoints, 195+ countries and territories, 150+ currencies; 12.6bn transactions in FY25",["move","send","disb"],"a","B"],
   ["Visa B2B Connect","Bank-to-bank cross-border B2B on Hyperledger Fabric; 30+ corridors at launch",["movecomm"],"a","B 2019"],
   ["Earthport †","Cross-border bank network ($320.4m)",["xborder"],"a","A 2019"],
   ["Currencycloud †","Cross-border FX and embedded-finance platform ($963m)",["xborder"],"a","A 2021"],
   ["International transaction revenue","$14.2bn in FY25 (+12%) — the fee stream on cross-border card volume",[],"a","B"]]},
 "2.4":{w:"diff", s:"Visa settles in USDC and runs its own Visa Stablecoin Platform, partnering with Circle, zerohash and Open Standard. Mastercard bought BVNK and runs the Multi-Token Network. Visa's stated approach is 'multi-coin, multi-chain'.", a:[
   ["Stablecoin settlement","USDC settlement for US institutions on Solana (16 Dec 2025); $3.5bn run-rate at 30 Nov 2025; five more chains added Apr 2026",["stable"],"n","B"],
   ["Stablecoin-linked cards","130+ programmes in 40+ countries (Q4 FY25)",["cryptocards"],"n","B"],
   ["Visa Stablecoin Platform","Mint, move and manage stablecoins; first coin Open USD (Open Standard); beta, 16 Jul 2026",["mtn","bvnk"],"p","B"],
   ["Visa Direct stablecoin payouts and prefunding","Via zerohash; announced 5 Aug 2026, 'soon'",["bvnk"],"p","B"],
   ["Circle Arc validator","Visa plans to run a validator once Arc is live",[],"u","partner"]]},
 "2.5":{w:"less", s:"Visa's only bill-pay asset found is PagoMisCuentas in Argentina.", a:[
   ["PagoMisCuentas","Argentine bill-pay platform inside Newpay",["billpay"],"n","A 2026"]]},
 "2.6":{w:"less", s:"Visa has Tink in Europe but no owned US open-finance network (Mastercard: Finicity). The $5.3bn Plaid bid was abandoned in 2021.", a:[
   ["Tink †","Pan-European open-banking platform; Visa's A2A engine (~$2.15bn)",["ofeu"],"a","A 2022"],
   ["Plaid †","$5.3bn deal abandoned in Jan 2021 after a US DOJ challenge",[],"r","A (terminated)"]]},
 "3.1":{w:"same", s:"Same service. Visa reports 16bn+ tokens and more than half of e-commerce tokenised; Mastercard reports ~40% of transactions tokenised at end-2025 (different denominators).", a:[
   ["Visa Token Service (VTS) †","16bn+ tokens (Q4 FY25); >50% of e-commerce tokenised (May 2026)",["mdes","scof","token2030"],"a","B"],
   ["Token Assurance Framework","Named on the Q3 FY26 call with the agentic-security set",[],"n","B"],
   ["Visa Provisioning Service †","Issuer-side token provisioning",["tokenconnect"],"u","B"]]},
 "3.2":{w:"same", s:"Same checkout stack. Visa Accept (tap-to-phone for small sellers) launched in Sri Lanka and is planned for 25 countries.", a:[
   ["Visa Secure †","EMV 3-D Secure authentication",["idcheck"],"a","B"],
   ["Click to Pay †","EMV SRC guest checkout",["c2p"],"a","B"],
   ["Visa Payment Passkey †","Passkey confirmation, used in agentic flows",["passkeys"],"n","B"],
   ["Visa Accept","Tap-to-phone acceptance; Sri Lanka first, 7m sellers targeted",["taponphone"],"n","B"]]},
 "3.3":{w:"same", s:"Comparable at the engine level (Featurespace vs Brighterion). Mastercard names far more products here; Visa's list is limited by what could be read.", a:[
   ["Advanced Authorization · Risk Manager †","Real-time issuer risk scoring and rules",["di","fma"],"a","B"],
   ["Featurespace (ARIC Risk Hub †)","Adaptive behavioural AI; first in-market integration is A2A Protect (Sep 2026)",["dmp","dipro"],"n","A 2024"],
   ["BioCatch","Behavioural and device intelligence — trust before the payment; $2.4bn cash, announced 3 Aug 2026, close expected by end of fiscal Q2 2027",["nudata","orc"],"x","A 2026"],
   ["Visa Protect †","Umbrella brand for Visa's risk and security products",[],"a","B"]]},
 "3.4":{w:"same", s:"Visa's dispute stack (Verifi, Order Insight) mirrors Ethoca. Breadth beyond those products was not retrieved.", a:[
   ["Order Insight","Transaction detail at the point of dispute; claimed 100% coverage of global Visa issuers",["ethocacc"],"a","A 2019 †"],
   ["Verifi alerts · Rapid Dispute Resolution †","Pre-chargeback alerts and automated deflection",["ethocaalerts","ethocaelim"],"a","A 2019"],
   ["Visa dispute resolution framework †","Chargeback and arbitration rules and tools",["mastercom"],"a","B"]]},
 "3.5":{w:"less", s:"Fewer named lifecycle services found at Visa; the card lifecycle sits inside its issuer-processing platforms.", a:[
   ["Visa Account Updater †","Pushes reissued card details to card-on-file merchants",["abu"],"a","B"],
   ["Lifecycle inside Pismo and Prisma","Issuance, reissue and closure in issuer processing",["cardlc"],"a","A"]]},
 "3.6":{w:"diff", s:"Same ingredients, different emphasis. Visa: bot recognition (Trusted Agent Protocol with Cloudflare) and a multi-protocol on-ramp that also supports rival standards. Mastercard: proof of intent (Verifiable Intent) and machine-to-machine payments.", a:[
   ["Visa Intelligent Commerce †","Umbrella for secure agent transactions; announced Apr 2025; 'in the process of deployment'",["agentpay","agentictokens"],"n","B"],
   ["Trusted Agent Protocol","Merchants verify legitimate agents via cryptographic signatures; 14 Oct 2025, built with Cloudflare, supported by Nuvei",["kya","vintent"],"n","B"],
   ["MCP Server and Acceptance Agent Toolkit","Developer access to Intelligent Commerce APIs; announced 4 Sep 2025",[],"p","B"],
   ["Intelligent Commerce Connect","One integration via Visa Acceptance Platform; supports TAP, MPP, ACP and UCP; pilot partners include Aldar, AWS, Highnote, Mesh, Payabli (8 Apr 2026)",["ap4m"],"p","B"],
   ["Agent Score · Agent Directory","Named on the Q3 FY26 call; call summaries only",["kya"],"u","B"],
   ["OpenAI and Meta collaborations","Announced with Q3 FY26 results; call summaries only",[],"u","partner"]]},
 "4.1":{w:"less", s:"No Visa counterpart found to Mastercard's cyber, identity and threat-intelligence family (Recorded Future, Ekata, RiskRecon). Visa's strength is payments-fraud AI.", a:[
   ["A2A Protect (enhanced 1 Sep 2026)","Account-to-account fraud prevention with a Featurespace unified score; reported >50% fraud reduction, +75% detection in six months",["a2aprotect","scamprotect","trace"],"n","B + A"],
   ["Risk & Security Solutions portfolio","One of Visa's four VAS portfolios",[],"a","B + A"]]},
 "4.2":{w:"less", s:"Visa's engagement offer is marketing services and card-linked offers; nothing found comparable to Dynamic Yield or Commerce Media.", a:[
   ["Advisory & Marketing Services","Marketing engagements for issuers and merchants; boosted Q3 FY26 by FIFA World Cup work",["mktsvc","audhub"],"a","B"],
   ["Visa Offers Platform †","Card-linked offers",["offers","loyalty","priceless","benefits"],"u","B"]]},
 "4.3":{w:"less", s:"Insights are delivered mainly through consulting; no Visa equivalents found for Test & Learn, Places or the credit-intelligence products.", a:[
   ["Business & Economic Insights †","Public macro and consumer-spending research",["spendingpulse","mei"],"a","B"],
   ["Visa Analytics Platform †","Issuer and acquirer analytics",["intelcenter"],"u","B"],
   ["Data products","Listed by Visa as a VAS portfolio component",[],"a","B"]]},
 "4.4":{w:"same", s:"Visa Consulting & Analytics is the direct counterpart; Visa reports 1,200 projects in Q3 FY26.", a:[
   ["Visa Consulting & Analytics","Advisory, payment strategy, issuing and acquiring consulting",["advisors","practices"],"a","B"]]},
 "4.5":{w:"same", s:"Visa's Commercial Solutions Hub and Accounts Receivable Manager mirror Mastercard's Track and Receivables Manager; B2B Connect sits on the rails.", a:[
   ["Commercial Solutions Hub","Single issuer integration to Visa and partner commercial capabilities; launched 2025",[],"a","B"],
   ["Accounts Receivable Manager","Virtual-card details to suppliers; AI invoice matching; 69 geographies from Sept 2026",["receivables"],"n","B"],
   ["Commercial Pay and virtual cards †","Virtual-card payables",["trackip","incontrol"],"u","B"]]},
 "4.6":{w:"same", s:"Visa reports 150+ deployed AI applications and agent toolkits; no packaged agent suite for banks and merchants found.", a:[
   ["AI applications","150+ AI-powered applications; the July 2026 restructuring redirects savings to AI, stablecoins and agentic commerce",["agentsuite"],"n","B"]]},
 "5.1":{w:"unk", s:"Visa's developer platform exposed no API list in this research pass, so the two API surfaces cannot yet be compared.", a:[
   ["Visa Developer Platform","developer.visa.com; the 'access layer' of Visa as a Service is 'primarily APIs'",["developers"],"u","B"]]},
 "5.2":{w:"same", s:"Visa's gateway business (Cybersource, Authorize.net) is the older; Visa Acceptance Platform is the unified front door, as Merchant Cloud is at Mastercard.", a:[
   ["Visa Acceptance Platform","Unified commerce stack; the integration behind Intelligent Commerce Connect",["merchantcloud"],"a","B + A"],
   ["Cybersource †","Gateway and processing, multi-brand and multi-currency (2010)",["gateway"],"a","A 2010"],
   ["Authorize.net †","Gateway for small businesses",["gateway"],"a","A"]]},
 "5.3":{w:"more", s:"The clearest place Visa is heavier: it has bought issuer-processing and core-banking platforms (Pismo, Prisma, Prosa).", a:[
   ["Pismo","Cloud-native issuer processing and core banking; completed 29 Jun 2023, ~$1bn",["processing","cardlc"],"a","A 2023"],
   ["Prisma Medios de Pago","Issuer processing, Argentina; completed 27 Feb 2026",["processing"],"n","A 2026"],
   ["Prosa","Mexico's leading processor, 10bn+ transactions a year; Visa takes a majority interest (announced 15 Dec 2023; completion not confirmed)",["processing"],"x","A"],
   ["Issuing and processing services †","Longstanding Visa processing services",["processing"],"a","B"]]},
 "5.4":{w:"same", s:"Both run startup and partner programmes; Visa's were not re-read in this pass.", a:[
   ["Visa Ventures · Fintech Partner Connect · Everywhere Initiative †","Partner, startup and innovation programmes",["startpath","engage","productexpress"],"u","B"]]},
 "5.5":{w:"same", s:"Visa Online is the licensed-customer portal.", a:[
   ["Visa Online †","Portal for rules, specifications, manuals and applications",["mcconnect","trc"],"a","B"]]}
};

/* Headline comparison drawer */
const VISA_OV = {
 head:"Visa and Mastercard share one shape — consumer payments, commercial and new money flows, services — but have filled the layers above the switch differently.",
 diffs:[
  ["Where they bought","Visa bought where the processing runs (Pismo, Prosa, Prisma/Newpay), cross-border rails (Earthport, Currencycloud), open banking (Tink) and payments-fraud AI (Featurespace, BioCatch). Mastercard bought what sits on top of the data: Recorded Future, Ekata, Finicity, Dynamic Yield, Vocalink, BVNK."],
  ["Rails","Mastercard owns non-card infrastructure (Vocalink's UK Faster Payments and Bacs, Finicity's US data network). Visa mostly overlays it, through Visa Direct and B2B Connect. Both firms have a rails layer; Visa's own four-layer 'Visa as a Service' stack (Foundation, Services, Solutions, Access) is a packaging view that bundles kernel and rails into one Foundation."],
  ["Security","Visa's security story is payments fraud (Featurespace + BioCatch, 'continuous trust from onboarding through payment'). No Visa counterpart found to Mastercard's cyber and threat-intelligence family."],
  ["Agentic commerce","Visa: Trusted Agent Protocol with Cloudflare, plus a pilot on-ramp that supports rival protocols. Mastercard: Verifiable Intent with Google, plus machine-to-machine payments. Interoperability talks were reported in Sept 2026."],
  ["Stablecoins","Visa partners and builds a platform (USDC settlement, Visa Stablecoin Platform, zerohash). Mastercard bought infrastructure (BVNK, up to $1.8bn) and runs the Multi-Token Network."]
 ],
 cols:["", "Visa · fiscal Q3 2026", "Mastercard · Q2 2026"],
 rows:[
  ["Net revenue","$11.63bn, +14%","$9.28bn, +14%"],
  ["Payments volume growth","+10% (constant $)","+8% (GDV, local)"],
  ["Cross-border volume growth","+13%","+12%"],
  ["Processed / switched transactions","71.7bn, +10%","+9%"],
  ["Value-added services","$3.8bn, +34% *","$3.83bn, +20%"],
  ["VAS share of net revenue","~33%","~41% †"],
  ["Credentials","4.8bn payment credentials","3.7bn cards"],
  ["Workforce action","~7%, $563m severance (28 Jul 2026)","~4%, ~$200m"]
 ],
 notes:[
  "* Visa's VAS growth includes FIFA World Cup marketing work and the Prisma acquisition; Visa does not report VAS as a line (about 27–30% of FY2025 revenue by management's and secondary figures).",
  "† Mastercard's current presentations show value-added services at 39–44% of quarterly revenue; its earlier 8-K split showed ~27%. About $1bn a quarter moved between lines and the reason was not found, so share-of-revenue is not comparable across the two firms.",
  "The quarters line up (Apr–Jun 2026), but fiscal years differ (Visa to September, Mastercard to December). Volume levels are defined differently — compare growth rates, not totals."
 ],
 src:[
  ["Visa Q3 FY2026 earnings release","https://www.sec.gov/Archives/edgar/data/0001403161/000140316126000103/q32026earningsrelease.htm"],
  ["Mastercard Q2 2026 earnings release","https://www.sec.gov/Archives/edgar/data/0001141391/000114139126000081/ma06302026-exx991xearnings.htm"],
  ["Mastercard 2Q26 presentation","https://s25.q4cdn.com/479285134/files/doc_financials/2026/q2/2Q26-Mastercard-Earnings-Presentation.pdf"],
  ["Visa Q3 FY26 call highlights (Nasdaq)","https://www.nasdaq.com/articles/visa-q3-earnings-call-highlights"],
  ["Visa — BioCatch deal",VV+"Visa-to-Acquire-BioCatch/default.aspx"],
  ["Visa — Prisma and Newpay completion",VV+"Visa-Completes-Acquisition-of-Prisma-and-Newpay/default.aspx"],
  ["Visa — Stablecoin Platform",VV+"Visa-Introduces-Platform-for-Stablecoin-Minting-Movement-and-Management/"],
  ["Visa — Intelligent Commerce Connect",VV+"Visa-Opens-the-Door-to-AI-Driven-Shopping-for-Businesses-Worldwide/default.aspx"],
  ["Visa — Commercial Solutions Hub",VV+"Visa-Expands-Commercial-Solutions-Hub-with-Integration-of-Visa-Accounts-Receivable-Manager/default.aspx"],
  ["Visa — Enhanced A2A Protect",VV+"Visa-Launches-Enhanced-A2A-Protect-Innovations-to-Help-Financial-Institutions-Stop-Fraud-Before-Money-Leaves-Accounts/default.aspx"],
  ["Visa — USDC settlement (Dec 2025)","https://www.businesswire.com/news/home/20251216483172/en/Visa-Launches-Stablecoin-Settlement-in-the-United-States-Marking-a-Breakthrough-for-Stablecoin-Integration"],
  ["Visa — Prosa announcement","https://www.businesswire.com/news/home/20231215319097/en/Visa-to-Acquire-a-Majority-Interest-in-Prosa-to-Accelerate-Digital-Payments-Adoption-in-Mexico"],
  ["Visa acceptance page","https://corporate.visa.com/en/solutions/acceptance.html"]
 ]
};
