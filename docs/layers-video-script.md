# Mastercard Operating System, the layer picture — video narration script

Recorded 6 October 2026 · 2 min 10 s · 1920×1080, 30 fps · voice: Kokoro-82M v1.0 (af_heart), one sentence at a time with explicit pauses

Filmed on `layers.html`. It opens on the line asked for, explains the five layers, then gives two worked examples, each followed by the product detail behind one of its steps. Every figure in the narration is taken from the page's own inventory.

## 0:01 · Opening (7 s)

Mastercard powers economies and empowers people through our global operating system. Let me show you how we do that.

*[The red-and-orange globe revolves. On the last word the cursor clicks it.]*

## 0:09 · The five layers (20 s)

Everything Mastercard runs fits into five layers, stacked into one system. At the base, the kernel: the network itself. Then the rails that move money. The network services every rail can call. The solutions built on top. And access, where partners plug in. Around it, everyone the system serves.

*[The globe is cut along its latitudes into five slices that flatten into the stack. The stack is opened and each slice is clicked as it is named, kernel first, listing its areas on the right; then the users.]*

## 0:30 · Example one: a bank cutting fraud (28 s)

Take a bank. Its goal: cut fraud, without declining good customers. Choose that, and the parts of the system that deliver it light up, in the order they act. Recorded Future spots stolen cards and skimmers early. Threat Intelligence turns those threats into fraud signals. MDES swaps card numbers for tokens. Identity Check steps in only when the risk warrants it. And Decision Intelligence Pro scores every transaction in flight, fed by data from the whole network.

*[Who: *An issuer or bank*. Solution: *Cut fraud without declining good customers*. The areas light up and join as circuitry; the cursor moves down the numbered steps as each is named.]*

## 0:59 · The detail behind it (14 s)

Open any of them for the detail. Decision Intelligence Pro uses generative AI to score transactions from any network, at the moment of authorisation. It can lift the detection of compromised cards by up to three hundred percent.

*[The Decision Intelligence Pro step is opened: description, who it serves, where it acts, origin and status.]*

## 1:15 · Example two: a government paying people (26 s)

Now take a government, with payments to get to people, quickly and safely. In the UK, Bacs carries about ninety-eight percent of state benefits. Mastercard Move disburses to cards, accounts and wallets, and Send pushes funds to a card in seconds. Where people have no bank, Community Pass gives them a digital identity. A2A Protect screens each payment for scams. And SpendingPulse tracks how spending moves afterwards.

*[Who: *A government*. Solution: *Get payments to people quickly and safely*. Same pattern down the steps.]*

## 1:42 · The detail behind it (14 s)

Look closer at Community Pass. It is shared digital identity and payments infrastructure, for rural and underserved communities. Through the MADE Alliance, it aims to reach one hundred million people and businesses in Africa, by twenty thirty-four.

*[The Community Pass step is opened.]*

## 1:57 · Close (8 s)

One system. Five layers. Working together for banks, businesses, governments and people. This is the Mastercard Operating System.

*[The selection is cleared, the stack closes, and it returns to the revolving globe.]*

---

## Said differently from how it is written

The synthesiser is given a few words spelled the way they should sound: `em-dess` for MDES, `Backs` for Bacs, `Account to Account Protect` for A2A Protect, `Spending Pulse` for SpendingPulse, `Made Alliance` for the MADE Alliance. The text above shows the real names. The spoken text is in `video/layers/narration.json`.

## How it was made (so it can be regenerated)

- **Frame by frame, on a virtual clock.** `video/layers/record.js` drives the page with Playwright at a 1280×720 layout rendered at 1.5× (1920×1080). `vt.js` is injected first and replaces the page's clocks: timers, animation frames, CSS transitions and animations, and the SVG pulse all advance only when the recorder steps time by one thirtieth of a second, after which it takes a screenshot. Nothing is captured in real time, so there are no dropped frames and no re-timing step; the picture is in sync with the narration by construction.
- **Cues come from the narration.** `tts.py` writes `timeline.json` (start and end of every sentence). Each cursor move, click and scroll in `record.js` is placed relative to a sentence, e.g. the click on a step lands just after the sentence that names it begins. The cursor and click ring are drawn by the recorder; the clicks themselves are real mouse events on the page's own controls.
- **Voice.** Kokoro-82M v1.0 via sherpa-onnx, speaker `af_heart`, each sentence synthesised on its own and joined with the pause set per line in `narration.json`. The result was checked by running it back through speech recognition.
- **Build.** `video/layers/build.sh` runs `mkpage.py` (the page in a document skeleton, with the Geist fonts embedded if `@fontsource/geist-sans` and `@fontsource/geist-mono` are installed there), `tts.py`, `record.js full`, then muxes with ffmpeg. `node record.js board` writes one frame a second for a quick check.
- **Logo.** Mastercard's logo is not reproduced anywhere in the page or the video.
