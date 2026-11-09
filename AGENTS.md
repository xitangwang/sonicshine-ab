# Current production source — 2026-11-09

- The user's authoritative visual baseline is `SonicShine_网站直接部署包_2026-11-04.zip`, not the unrelated A×B HTML design or commit ea279ea. All future visual edits must preserve this archive's full-bleed Hero, transparent PNG logo, 16px sticky navigation, original cards, typography, spacing, contact rail and light gray footer.
- Main entry is `ArchiveApp.jsx`, with new bilingual content in `content-v14.json`. The original compiled stylesheet `assets/index-CAkrsVkd.css` is copied unchanged from the archive; `content-v14.css` adds scoped content-only components and must never restyle the Hero.
- Retain 7 main sections, 12 application guides per language, 14 articles per language, the new catalogue reference tables and 6 genuine PDF files. Original carousel images and behavior remain unchanged; pointer hover does not pause playback.
- The deployed site is the existing `xitangwang/sonicshine-ab` GitHub Pages repository at `wenming.space/sonicshine-ab`. Preserve its hosting configuration and all unrelated sites.
- Keep catalogue values explicitly sourced and distinguish illustrative workpiece studies from verified projects. Do not add invented specifications, certificates, achievements or customer results.
- Contact forms compose email or WhatsApp messages; the visitor completes sending. Never show a received/sent state without a real receiving service. No fake newsletter subscription.

## Earlier visual and implementation decisions

# Prototype Instructions

## Sonic Shine design decisions
- V11 carousel: replace the backgrounds with three generated industrial campaign scenes based on original equipment/part references; keep equipment, part/process and automation subjects distinct. Text stays in HTML on a quiet left side. These are visualizations, not factory/customer proof. Autoplay continues when the mouse enters or remains over the hero.
- Header navigation stays pinned to the viewport top throughout scrolling, including the utility strip; never auto-hide it on downward scroll. Keep dropdowns usable and offset in-page section jumps and sticky sidebars below the header.
- V9 product details: six independently described reference series (F, F2, F3, F4, semi-automatic, automatic lifting), selected within the existing three product families. All product features, published structural specifications and application scenarios are substantive. No placeholder parameter rows. Model-specific numeric ratings are not public; shared OEM/ODM poster values must stay explicitly separate from model ratings. F4 means multi-tank, not a claim of four tanks. F2/F3 reference photos show hot-air-dryer labels, so do not relabel every position as an ultrasonic tank or a rinse.
- V8 content: each application must use its own subject-specific image and copy. Editorial articles have independent full bodies, tables, contents and sources; no shared placeholder article text or Draft preview labels. Use original product/factory imagery for company equipment; AI images are editorial illustrations, never customer/project proof. No invented testimonials or company events.
- Desktop navigation: use 16px primary menu labels at all supported desktop widths, with 14px submenu labels and 12px descriptions, per user feedback that the previous navigation was too small.
- V7 logo: user-selected horizontal SonicShine wordmark with three blue slanted bars; use the generated transparent PNG in public/assets/brand/ for header and footer. This supersedes the original site logo.
- Accepted visual: first V3 silver-white Precision Studio concept.
- Desktop only. Full homepage and all V1.0 document page types.
- No large homepage bottom contact form; keep right floating phone, Email, WhatsApp, back-to-top and enquiry modals.
- Illustrative assets and explicit pending-approval states; no invented testimonials, certificates, real case results or specifications.
- Local design prototype only; no real enquiries, email, analytics or production CMS integration.
- V5 user feedback: use https://www.keerclean.com/NEWS_118960.html and the same site's product/about/quality/service pages as structural references. Add dropdown navigation; simplify homepage to five main content areas; move detail content to inner pages.
- V5 footer: compact enquiry strip, brand/document access, product links, contact information, newsletter preview, site links and copyright. Keep silver-white art direction and right contact rail; no large bottom enquiry form.
- Reference structure only: never copy KEER's branding, product scope, contact numbers, certifications, customer counts, warranty promises or case results as Sonic Shine facts.
- V6 user feedback: https://www.ultrasonicshine.com/ is the original company website. Reuse suitable original brand, industrial product and factory materials with source records. Do not treat historical numbers, certificate collages or client marks as newly verified claims.
- V6 hero reference: https://www.uilultrasonic.co.kr/eng/#MAIN . Use a full-width desktop carousel, automatic/manual switching, clear slide controls and subtle pointer-responsive motion. Preserve the shorter five-section homepage and V5 dropdown/footer structure.
- Carousel must support manual pause, keyboard navigation, keyboard-focus pause, reduced motion, and suspension while an enquiry dialog is open. Mouse hover must keep automatic playback running; pointer interaction with slide controls must not leave playback paused merely because the button retains focus.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
