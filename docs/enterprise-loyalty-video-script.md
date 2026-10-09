# Enterprise Loyalty — animatic and narration script

Recorded 9 October 2026 · 2 min 56 s · 1920×1080, 30 fps · voice: Kokoro-82M v1.0 (af_heart), one sentence at a time with explicit pauses

A concept film for "Enterprise Loyalty": one bank-wide programme that rewards every touchpoint, built from Open Finance (see), Transaction Notifications (sense) and Loyalty and Offers (reward). It cuts between real-life scenes of one customer, Maya, and the layer picture lighting the part of the Operating System that did the work. Maya, Harbour Bank and Fern & Finch Books are invented; point values and notification wording are illustrative.

**This file is an animatic.** The stack scenes are final: they are the layer picture itself, recorded as in `video/layers`. The real-life scenes are placeholder cards that say what will be shot, with the phone notifications timed to the narration and the stack docked as a mini-map in the corner. Replace the cards with footage once it is shot.

The stack shows a new solution, added to both the layer picture and the map: *An issuer or bank · Reward every touchpoint*, seven steps across four layers (Open Finance 2.6 → Card rails 2.1 → The switch 1.1 → Transaction Notifications 3.5 → Loyalty Solutions 4.2 → Offers platform 4.2 → Network data 1.4). Like the other fourteen it is this project's own grouping, not a Mastercard bundle.

## 0:00 · 1 The gap (13 s) — real-life

Maya's bank is part of almost everything she does with money. Her salary. Her rent. Her savings. But it only ever says thank you for one thing: tapping her card.

*[Maya's morning in quick cuts, graded cool and flat: salary in, rent out, a transfer to savings, a tap for coffee. Only the tap gets an answer: "+1 point".]*

## 0:13 · 2 The system (21 s) — stack

What if loyalty wasn't a feature of the card, but of the whole bank? Everything that takes already runs on one system: the Mastercard Operating System. Choose a bank, and a goal: reward every touchpoint. This is Enterprise Loyalty.

*[The globe is cut into five slices that flatten into the stack. Who: An issuer or bank. Solution: Reward every touchpoint. The discs dim, nothing lit yet. Title: "Enterprise Loyalty".]*

## 0:34 · 3 See (22 s) — real-life, stack, real-life

It starts with permission. Maya chooses to connect her other accounts, and earns her first reward for doing it. On the rails layer, Open Finance lights up. Now her bank understands her whole financial life, not just its own slice.

*[Sofa, evening: "Connect your other accounts · earn 500 points", a plain-language consent screen, Allow. Stack: step 1 lights on the Rails disc. Back on the sofa her other accounts appear; the stack stays as a mini-map.]*

## 0:56 · 4 Sense (27 s) — real-life, stack, real-life

Then it comes alive. Maya taps her Mastercard. The payment rides the card rail into the switch. And in network services, Transaction Notifications tells her bank, as it happens. Before her coffee is on the counter, her bank has answered. Points landed. A streak extended.

*[Coffee shop: hand, card, terminal, tap. Stack: the pulse runs through steps 2, 3 and 4. Counter: "+40 points · Local Hero streak 3 of 5".]*

## 1:23 · 5 Reward (25 s) — real-life, stack, real-life

And it doesn't stop at the till. Salary landed: that counts. Four weeks of saving: that counts. In the solutions layer, Mastercard's loyalty platform keeps the ledger: card taps today and, increasingly, everything else. Every action moves Maya, and her household, up one shared tier.

*[Kitchen table with her partner: "Payday Home · salary in, 3 months running", "Save Streak · 4 weeks". Stack: step 5 lights on the Solutions disc. Back at the table a tier ring fills from Silver to Gold.]*

## 1:48 · 6 Spend (17 s) — real-life, stack

Spending is just as immediate. Points that work like cash, at the moment of purchase. And offers funded by merchants, chosen from what the network learns, so the bank isn't paying for loyalty alone.

*[Bookshop: "Pay for this with points? €18.50 = 1,850 points", swipe, then "10% back at Fern & Finch Books this month · funded by the merchant". Stack: step 6, then step 7 in the kernel.]*

## 2:05 · 7 The whole circuit (29 s) — stack

Here is the whole circuit. Open Finance, to see. The card rail, the switch and Transaction Notifications, to sense. Loyalty and offers, to reward. And the data that makes the next reward smarter. Open any step for the detail. The bank's brand on top. One operating system beneath.

*[All seven steps lit, the pulse looping. The cursor moves down the steps as each is named, opens Transaction Notifications for its detail, and closes it.]*

## 2:34 · 8 Close (22 s) — real-life, stack

For Maya, a bank that notices. For the bank, a customer who stays, and brings more of her life with her. Enterprise Loyalty, on the Mastercard Operating System. Every touchpoint counts.

*[Maya leaves the bookshop, phone going into her pocket; the grade is warm and full. Stack: the selection clears, the stack closes and returns to the revolving globe. End card.]*

---

## To confirm before it is shown

- "Real-time": Mastercard's own page uses both "real-time" and "near real-time" for Transaction Notifications.
- The pay-with-points prompt in scene 6: the public overview does not describe the cardholder's steps.
- Points for salary and savings: Mastercard's rewards systems are evolving to take non-card events (Oran, 9 Oct 2026); the narration says "increasingly".
- Rewarding consent and money habits needs a view from a bank's compliance team.
- The seven steps and their wording are a draft reading of the map.

## How it was made (so it can be regenerated)

- **One recorder, one pass.** `video/enterprise-loyalty/record.js` films `rec.html` (the layer picture, from `src/layers.artifact.html`) frame by frame on the virtual clock from `video/layers` (`vt.js`). `film.js` is injected at record time and adds everything that is not the layer picture: the placeholder cards behind the page, the shrink to a mini-map, the title overlay and the end card. The layer picture's source is not changed for the film.
- **The circuit lights step by step.** On the page a chosen solution draws its whole circuit at once. For the film, `film.js` takes over how much of it is lit: the recorder calls `go(step, seconds)` and the path, the pad, its number and the step in the list light when the narration reaches them. In scene 7 the page's own looping pulse is switched back on.
- **Cues come from the narration.** `tts.py` writes `timeline.json`; every cut, notification, click and step in `record.js` is placed relative to a sentence.
- **Real-life scenes.** `cards.json` holds one card per shot: the scene, the place, the shot list and the phone notifications. To cut in real footage, overlay it on the finished file at the card times, or replace the card backgrounds.
- **Brand mark.** The title and the end card have a slot for the Mastercard symbol. The recorder reads official artwork from `brand/mark.png`, `brand/mark.svg` or the brand-centre pack under `images/`, and shows it at no more than its pixel size, as the pack's quick reference guide asks. The mark is never drawn in code; with no file present the slots stay as labelled placeholders.
- **Build.** `video/enterprise-loyalty/build.sh` runs `mkpage.py`, `tts.py`, `record.js full`, then muxes with ffmpeg. `node record.js board` writes one frame a second for a quick check.
