
# Premium polish pass

Elevate the portfolio from "well-built" to "AI-lab-grade." All changes are visual and motion — no content or structure changes. The hero, project cards, typography, and background do most of the heavy lifting.

## Typography upgrade

- Swap headings to **Instrument Serif** (display) for an editorial / research-paper feel, paired with **Inter Tight** for body and **JetBrains Mono** for metadata. This single change instantly reads "research lab" instead of "dev template."
- Tighten tracking on display headlines (`-0.035em`), open up leading on body (`1.7`).
- Add a `.eyebrow` treatment: mono, uppercase, `letter-spacing: 0.3em`, with a 1px gradient underline rule — used on every section heading and project category label.
- Add italic serif accents inside the hero headline (e.g. *reason, retrieve, see, decide* in italic serif) for editorial cadence.

## Background — deeper, calmer, more "lab"

- Replace the looping bright blobs with a slower, lower-saturation field: 2 large blobs that breathe at 40s+, opacity capped at ~18%.
- Add a fixed **dot-grid** layer (1px dots, 28px pitch) under the line-grid, masked with a soft radial vignette so the grid fades at edges — feels like a research notebook overlay.
- Add a faint horizontal **scanline gradient** (1 line every ~140px, 4% opacity) for tech texture.
- Particle canvas: reduce count, slow velocity by 40%, connect at closer distance (90px), lower line opacity. Particles should feel like a quiet star field, not active motion.
- Add a single animated **neural-arc SVG** anchored top-right: 6–8 nodes connected by curved paths that draw in on load via `pathLength`, then sit static. Feels custom, not generic.
- Cap the entire background at `opacity-90` with a subtle film-grain overlay (SVG turbulence at 3% opacity) for premium texture.

## Hero — editorial + cinematic

- Increase scale: display headline goes to `clamp(2.75rem, 6vw, 4.75rem)`, mixed serif italic + sans (e.g. *"AI Researcher building systems that"* serif italic, then **"reason, retrieve, see, and decide."** in sans gradient).
- Add a small left-side **vertical rule** with mono caption "01 / Introduction" — pulls the eye and adds research-paper cadence.
- Replace the inline tag chips with a slimmer **marquee row** of positioning tags (slow auto-scroll, paused on hover, no shadows).
- Stats row → upgraded "metric panel": each tile gets a tiny sparkline/glyph (e.g. waveform, scatter dots), mono label, large display number. Add a hairline divider between tiles instead of separate cards for a "dashboard" feel.
- CTAs: keep 4 but flatten the visual hierarchy — primary becomes a clean gradient with subtle inner highlight, secondaries become text-buttons with arrow icons (no boxy outlines). Reduces the "landing page" vibe.

## Project cards — flagship treatment

- Larger cards (`p-7 lg:p-8`), thinner gradient border with a brighter top edge that intensifies on hover.
- Add a **numbered prefix** to each title ("01 — RARC", "02 — MSRB"…) in mono — instantly signals a curated body of work.
- Add a **mini metric strip** at the bottom of each card pulled from project details (e.g. RARC shows "768 runs · −36% hallucination · +40% relevance"). For projects without numeric metrics, show a 3-chip "method · models · evaluation" strip.
- Hover state: card lifts 4px, gradient border brightens, a subtle inner ambient light appears top-left, the arrow icon transitions with a slight stroke-draw — no scale jumps.
- Add a tiny **schematic SVG** in the top-right of each card (different per category: network for RAG, eye for multimodal, circuit for SARF, flow diagram for Decision Twin). Hand-drawn-thin strokes — gives each card identity.
- Tech chips: smaller, mono, no border, just `bg-white/[0.03]` with `text-foreground/70`.

## Section headings + rhythm

- Add a **numbered section index** ("§ 02 — Research") to every section heading.
- Increase section spacing slightly (`space-y-32 lg:space-y-40`).
- Add a subtle 1px horizontal hairline (`from-transparent via-white/10 to-transparent`) above each section title.

## Profile sidebar refinements

- Replace the rounded square photo with a softer treatment: circular crop inside a square gradient frame, with a faint orbit ring (dashed SVG) around it.
- Status badge gets a darker, more refined treatment — slate background, single pulsing dot, mono text.
- Add a small "currently" line under buttons: mono caption "Currently · Boston, MA · 09:42 EST" (live clock, updates every minute) — researcher-website signature.
- Add a faint vertical scrollbar-style indicator on the left edge of the sidebar showing scroll progress through the page.

## Motion polish

- All scroll-reveal transitions use `ease: [0.22, 1, 0.36, 1]` (premium ease-out cubic) and `duration: 0.7`.
- Stagger children by 60ms instead of 50.
- Cursor-follow soft glow on the project section (small radial spotlight that tracks pointer at 30% opacity). Disabled on touch.
- All animations respect `prefers-reduced-motion` (already wired; verify).

## Files touched

- `src/styles.css` — new font imports + tokens (eyebrow, hairline, dot-grid, scanlines, grain).
- `src/routes/__root.tsx` — swap Google Fonts to Instrument Serif + Inter Tight + JetBrains Mono.
- `src/components/portfolio/BackgroundFX.tsx` — calmer blobs, dot-grid, scanlines, neural-arc SVG, grain overlay, slower particles.
- `src/components/portfolio/Hero.tsx` — editorial headline, vertical rule, marquee tags, metric strip, refined CTAs.
- `src/components/portfolio/Projects.tsx` — numbered cards, schematic glyphs, metric strip, refined hover, cursor spotlight.
- `src/components/portfolio/SectionHeading.tsx` — numbered index + hairline.
- `src/components/portfolio/ProfileSidebar.tsx` — orbit-ring avatar, refined badge, live clock, scroll-progress rail.
- `src/components/portfolio/Publications.tsx`, `Experience.tsx`, `Skills.tsx`, `About.tsx`, `Contact.tsx` — pick up new typography automatically; small spacing tweaks where needed.

No new dependencies. No content edits. No layout structural changes.
