---
title: NoNoApp Privacy Policy
permalink: /privacy-policy
---

# NoNoApp Privacy Policy

Last updated: November 17, 2026 (version 1.4.0)

NoNoApp helps you use selected apps and websites less. Before one of them opens, NoNoApp asks you to do something first: answer a question, wait, make noise, walk, or ask a trusted person.

**In short:**

- Your NoNo list, your answers, your statistics and the websites you visit stay on your phone.
- NoNoApp sends **anonymous usage statistics only if you turn them on**. They are off by default.
- No account, no ads, no advertising ID. Nothing is sold.

## What NoNoApp stores on your phone

NoNoApp saves the following information, only on your device:

- **Your NoNo list.** The apps and websites you picked, and any removal you have scheduled.
- **Your mode.** The unlock mode you use, plus any mode change you have started.
- **App usage time.** How long you used your apps today and this week. Android provides this through Usage Access.
- **Open attempts and unlocks.** When you tried to open a NoNo app or website, when you unlocked one, and for how long. Recent unlocks make the next unlock harder.
- **Your answers.** In Reflect mode, the text you type. Your recent answers are kept so you can't reuse the same answer.
- **Session results.** How long you planned to use an app, whether you got what you wanted, and how you felt afterward.
- **Bookings.** In Patience mode, when your booked time becomes available.
- **Trusted person.** In Trusted person mode, their name, their phone number (if you send requests by WhatsApp or SMS) and a key derived from their PIN. The PIN itself is not stored.
- **Timing records.** NoNoApp saves time checkpoints so changing the phone's clock can't skip a wait.

NoNoApp keeps at most the last 1,000 session results and the last 40 answers. Older entries are deleted automatically.

## Anonymous usage statistics (optional)

If you turn on **Share anonymous usage data** (during setup or in the Mode tab), NoNoApp sends usage events to **Google Analytics for Firebase**, so the developer can see how NoNoApp is used and improve it. This is **off by default**, and you can turn it off at any time.

**What is sent:**

- Which mode you use, and when you start, confirm or cancel a mode change.
- When an unlock screen opens or is closed, the unlock time you chose (for example 15 minutes), and how many unlocks you had recently.
- Whether the target was an app, a website or a browser, but **not which one**.
- At the end of a session: whether it was worth it and how you felt (the option you tapped).
- Whether you added a suggested website or your own one, how many apps and websites are on your list, and how you send requests to your trusted person (WhatsApp, SMS or another app).
- Technical data that Firebase collects automatically: a random app-instance ID, device model, Android version, app version, country (derived from the IP address, which Google does not store) and time of use.

**What is never sent:** app names, website addresses, your answers, your trusted person's name or number, or your advertising ID. NoNoApp does not use the advertising ID at all.

Google processes this data on behalf of the developer, as described in [Google's privacy policy](https://policies.google.com/privacy) and the [Firebase data processing terms](https://firebase.google.com/terms/data-processing-terms). The data may be processed on servers outside your country, including in the United States. Event data is kept for 2 months.

The legal basis is your consent (Art. 6(1)(a) GDPR). When you turn the setting off, NoNoApp stops sending data and resets the app-instance ID, so old and new data cannot be linked.

## Trusted person mode

In this mode, every unlock needs a code from a person you trust.

- When you ask for time, NoNoApp opens WhatsApp, your SMS app or another app you chose, with a message ready to send. **You** send it. The message contains your name for the app or website (for example "YouTube"), the time you ask for, and a link.
- The link opens a page hosted on GitHub Pages (`eewdev.github.io`). The request data is in the part of the link after `#`, which browsers do not send to the server. The page decrypts it in the browser with your trusted person's PIN. The page sends nothing anywhere.
- GitHub, as the hosting provider, may log technical data of the person opening the page, such as their IP address. See [GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).
- The messaging app you use (for example WhatsApp) handles the message under its own privacy policy.

## What NoNoApp does not do

- It does not sell or share your data for advertising.
- It does not contain advertising or social tracking tools.
- It does not need an account.

## Permissions

NoNoApp only asks for permissions it needs to work.

| Permission | What it is used for |
| --- | --- |
| Accessibility service | Notices which app is open, so the unlock screen can appear before a NoNo app. In web browsers it also reads the **address bar** (for example `instagram.com`), so websites on your NoNo list can be blocked. NoNoApp reads **nothing else on the screen**: no messages, passwords, text fields or page content. Addresses of websites that are not on your list are not stored, and none of this information is ever sent anywhere. |
| Usage access | Shows how long you use each app, and backs up the detection of the open app. |
| Display over other apps | Shows the timer and the end-of-session screen on top of an unlocked app. |
| Microphone (Loud mode only) | Measures how loud it is while the loudness meter is on screen. Only the volume level is calculated. **Nothing is recorded, saved or sent.** The microphone is used only while you are on the loudness screen. |
| Physical activity (Walk mode only) | Counts your steps while the walking screen is open. Steps are not saved after the unlock. |
| Internet | Only used to send the optional anonymous usage statistics. |

NoNoApp asks for the microphone or physical activity permission only if you choose the mode that needs it. You can take back any permission in Android settings at any time. Some features will then stop working.

## Backups

Android's cloud backup is turned off for NoNoApp, so your answers and statistics are not copied to your Google account.

## Deleting your data

To delete all NoNoApp data on your phone, either:

- uninstall NoNoApp, or
- go to *Android Settings → Apps → NoNoApp → Storage* and tap *Clear storage*.

If you had usage statistics turned on, the anonymous events already sent are deleted automatically after 2 months. To have them deleted earlier, email the address below. Because the data is anonymous, include roughly when you used NoNoApp and on which device model.

## Children

NoNoApp is not directed at children under 13.

## Changes to this policy

If a future version handles data differently, this policy will be updated and the date at the top will change.

## Contact

For questions about this privacy policy, contact: [development.eew@gmail.com](mailto:development.eew@gmail.com)
