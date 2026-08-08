---
name: Dave Euson
description: A one-screen personal site where the visitor stands still and the view changes behind them.
colors:
  blue-hour: "#161826"
  moonlight: "#e9e9ed"
  dusk-periwinkle: "#9184d9"
  dusk-periwinkle-100: "#f5f4ff"
  dusk-periwinkle-300: "#d2cefd"
  dusk-periwinkle-400: "#b5abfc"
  divider: "color-mix(in srgb, #e9e9ed 16%, transparent)"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 60px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  greeting:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 36px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(21px, 1.85vw, 28px)"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  interface:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.14em"
  meta:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  "1": "2.8px"
  "2": "5.6px"
  "3": "8.4px"
  "4": "11.2px"
components:
  button-primary:
    textColor: "{colors.dusk-periwinkle}"
    backgroundColor: "transparent"
    rounded: "{rounded.md}"
    padding: "5.6px 10.08px"
    typography: "{typography.interface}"
  button-primary-hover:
    backgroundColor: "color-mix(in srgb, #9184d9 12%, transparent)"
  button-secondary:
    textColor: "{colors.moonlight}"
    backgroundColor: "transparent"
    rounded: "{rounded.md}"
    padding: "5.6px 10.08px"
    typography: "{typography.interface}"
  button-secondary-hover:
    backgroundColor: "color-mix(in srgb, #e9e9ed 7%, transparent)"
  link-thread:
    textColor: "{colors.dusk-periwinkle-300}"
    backgroundColor: "transparent"
  link-thread-hover:
    textColor: "{colors.dusk-periwinkle-100}"
    backgroundColor: "color-mix(in srgb, #9184d9 22%, transparent)"
  panel-kicker:
    textColor: "{colors.dusk-periwinkle-400}"
    typography: "{typography.label}"
  photo-thumb:
    rounded: "{rounded.sm}"
    width: "108px"
    height: "68px"
---

# Design System: Dave Euson

## Overview

**Creative North Star: "The Observation Deck"**

One fixed vantage point, one wide view. The visitor does not travel through
this system — they arrive, stand still, and the view changes in front of them.
Every structural decision follows from that: the left column never moves, the
page never scrolls to a second act, and the only thing that changes is what is
visible beyond the glass. The interface is the railing, not the landscape.

Four words describe the atmosphere, and their order matters more than the list:
**calm, cinematic, precise, inhabited.** Calm is the tiebreaker — when a change
would make the page livelier at the cost of stillness, stillness wins. That is
not a preference but a ruling already made: an earlier build that rewrote the
bio sentence on interaction was rejected for being jarring. Motion here changes
the view, never the text. Cinematic is the means rather than the goal —
full-bleed photography under a fixed scrim, light that shifts rather than
elements that animate. Precision lives entirely in details: one type scale, one
alpha ladder, four deliberate timings, and never in ornament. Inhabited is not
a styling choice at all — every photograph, every note of music, and every line
of code this page points at belongs to the person it describes. The proof and
the decoration are the same material.

The system is small on purpose. One typeface at two weights, one accent, one
ground. No shadows, no cards, no containers, no second screen. Anything that
arrives wanting a box around it is either wrong for the page or belongs in the
panel system.

**Key Characteristics:**

- One screen, pinned to the viewport — content distributed to the edges, never stacked from the top.
- A photograph behind everything, under a fixed two-part scrim.
- Nothing is filled and nothing is boxed; the interface is drawn in hairlines.
- Zero shadows anywhere. Depth is atmospheric, not physical.
- One typeface, two weights, seven text alphas.
- Long, tiered transitions that read as light changing rather than as UI responding.

## Colors

A single dark ground, a single light, and one cool violet that carries every
thread through the page. The palette is deliberately narrow: there is no
secondary or tertiary accent, and adding one would break the system.

### Primary

- **Dusk Periwinkle** (`#9184d9`): the one accent. It carries the interactive
  phrases in the bio, the numbered panel kickers, the focus ring, and the
  résumé button's outline. Desaturated on purpose — it is the only color that
  has to survive being read on top of a bright photograph, and a more saturated
  violet would not. It is never used as a fill.
- **Dusk Periwinkle 300** (`#d2cefd`): the resting color of the interactive
  phrases. The accent itself is too low-contrast against the ground to carry
  body copy, so the ramp does the reading work and the accent does the marking.
- **Dusk Periwinkle 100** (`#f5f4ff`): a phrase at the moment it is active.
- **Dusk Periwinkle 400** (`#b5abfc`): panel kickers only — the numbered
  labels that name each thread.

### Neutral

- **Blue Hour** (`#161826`): the ground. The color of the sky just after
  sunset — the light an observation deck is built for. Near-black but
  deliberately indigo; a neutral charcoal would kill the photographs it sits
  under. It is also the rgba base of both scrims, which is why the page reads
  as one continuous atmosphere rather than as text layered over pictures.
- **Moonlight** (`#e9e9ed`): every piece of text on the page, and the only
  light in the system. Cool, never warm. Used at full strength for the name and
  at six documented alphas everywhere else.
- **Divider** (`#e9e9ed` at 16%): the vertical rule between the two columns and
  the border on secondary buttons. The only structural line in the system.

### Named Rules

**The Two-Scrim Rule.** Text never sits directly on a photograph. Every
photographic surface carries *both* scrims: the 100° linear wash
(`rgba(22,24,38,0.96) → 0.90 at 46% → 0.72`) which guarantees legibility over
the brightest frames, and the radial vignette (`130% 100% at 15% 35%`,
transparent to `rgba(22,24,38,0.6)`) which closes the corners. One without the
other is not the treatment — the wash alone leaves the corners open, and the
vignette alone loses the text over mountains, ocean, and dog beach.

**The One Light Rule.** There is one ground (Blue Hour) and one light
(Moonlight), and every neutral in the system is one of those two at an alpha.
Never pure black, never pure white, and no gray ramp — text hierarchy is that
single light at **three** steps: **94%** (bio), **82%** (thread panel body),
**62%** (everything secondary: eyebrow, idle panel, panel click line, greeting
pleasantry, photo caption). Never express hierarchy as a different hue.

**62% is a contrast floor, not a taste preference.** The ladder used to run
seven steps down to 38%, and four of them failed WCAG AA against the worst
realistic case — a blown highlight in the photograph directly behind the text,
measured through the lighten blend and both scrims. The failures were 48%
(3.86:1), 45% (3.23:1), 40% (2.88:1) and 38% (2.95:1) against a 4.5:1
requirement; the minimum passing alphas were 55–61%. They were consolidated
upward rather than fixing it by darkening the scrim, because the photographs
are the one thing on this page nobody else has and they are already held at
4–10% brightness. **Do not introduce a rung below 62% for text.** Anything
dimmer is illegible over a bright frame, and legibility over the brightest
frames is a product requirement rather than a design opinion.

Two notes on measuring it: the vignette contributes real darkening on the right
where the detail column sits, so a contrast check that only accounts for the
wash reads about 2 points too pessimistic. And large-text exemptions do not
survive the phone — the greeting clears 3:1 as large text at 27px on desktop
and needs the full 4.5:1 at 17px on a compact phone, which is why it sits at
62% everywhere rather than 52%.

## Typography

**Display Font:** Inter (with `system-ui, sans-serif`)
**Body Font:** Inter — the same face; there is no pairing.

**Character:** One neutral grotesque doing every job, which puts all the
expressive weight on size, alpha, and tracking. The result reads as engineered
rather than art-directed, which is the point: on a page where the photographs
are the personality, the type's job is to stay out of their way and be
impeccably set.

### Hierarchy

- **Display** (500, `clamp(36px, 4.4vw, 60px)`, 1.12, `-0.025em`): the name,
  once, at the top. The negative tracking is what keeps it from reading as a
  heading in a document.
- **Greeting** (500, `clamp(26px, 2.6vw, 36px)`, 1.2, `-0.02em`): the salutation
  opening the left column, and the only body element that takes the display
  treatment. It sits deliberately between Display and Title — three clear steps
  at every width (60/36/27 desktop, 36/26/20 mobile) — so it can never be
  mistaken for a second heading or for prose.
- **Title** (400, `clamp(21px, 1.85vw, 28px)`, 1.58): the bio paragraph. Set at
  regular weight, not light — it is the largest body copy on the page and has
  to hold up over photography. `text-wrap: pretty` is applied.
- **Body** (400, 17px, 1.65): the detail panel copy. Generous leading because
  the panel is read in a single glance, not scanned.
- **Interface** (500, 14px, 1.2): buttons only.
- **Label** (400, 11px, `0.14em`, uppercase): panel kickers.
- **Meta** (400, 12–13px): the panel's "Click →" line at 13px, the masthead
  eyebrow and photo caption at 12px. The eyebrow takes the Label treatment
  (uppercase, `0.14em`) at 12px.

### Named Rules

**The One Face Rule.** Inter at two weights (400 and 500) is the entire type
system; a second family, a third weight, or an italic is a departure rather
than an extension. Since the face never changes, tracking carries the
distinctions instead: `-0.025em` on Display, normal everywhere in prose, and
`0.14em` on uppercase — which appears only at 11px and 12px and does not exist
in this system above 12px.

## Layout

The page is a fixed-height, three-part column. The root is `min-height: 100svh`
with `overflow-x: hidden`; inside it, a flex column with
`justify-content: space-between` pins the masthead to the top, the footer to
the bottom, and lets the body sit in the space that remains. Content is
*distributed to the edges of the viewport*, not stacked from the top — this is
the single most important structural fact about the system, and it is what
makes the page read as a view rather than as a document.

The body is a two-column grid,
`repeat(auto-fit, minmax(min(380px, 100%), 1fr))` with a
`clamp(36px, 5vw, 76px)` gap, `align-items: start`. It collapses to one column
around 860px of content width with no media query. The `min()` wrapper is
load-bearing: a bare `380px` floor outgrows the content box below ~420px wide,
and `overflow-x: hidden` then silently clips the end of every line rather than
wrapping it.

The left column is static prose. The right column is a stack of absolutely
positioned panels sharing one box (`inset: 0 0 0 32px`), all mounted at all
times, crossfading on opacity. Below 760px the column becomes a single-cell
grid and every panel takes `grid-area: 1 / 1`, so they still share one box —
absolute positioning cannot give a collapsed column height, but a grid cell
sizes itself to its tallest occupant. Three things fall out of that: the column
is always exactly as tall as the longest panel, so **total page height does not
depend on which thread is open**; tapping a phrase can never shift the layout
under the finger that tapped it; and the opacity crossfade survives on mobile
rather than degrading to a `display` swap.

Spacing runs on two scales, deliberately. Control internals use the design
system's density-0.7 micro-scale (2.8 / 5.6 / 8.4 / 11.2px) — small, odd
numbers that only ever appear inside a button. Page rhythm is coarse and
hand-set: `6vh 5vw 40px` page padding, 48px between the three page regions,
30px inside the footer, 32px from the divider to the panel text, 24px between
the name and the eyebrow, 8px between chips and thumbnails. Do not try to
reconcile them; the micro-scale is for components and the coarse rhythm is for
the frame.

### Named Rules

**The One Screen Rule.** The composition is header / body / footer distributed
across the full viewport height. Any addition must fit inside that frame or
justify breaking it — this system has no second screen and no scroll narrative.

The rule holds on every phone, and holding it there costs more than it does
anywhere else. The compression, in the order it was spent: the photo strip
stops stacking rows and becomes one swipeable filmstrip (the largest single
saving, 337px → 68px); the frame's padding and gaps roughly halve; and type
steps down a notch across the board.

There are two mobile tiers, and the second is gated on **height, not width** —
the constraint is vertical, so width is the wrong thing to ask about. A
`max-width: 760px` tier serves tall phones; a `max-width: 760px and
max-height: 830px` tier steps everything down once more for short ones. The
830px threshold is deliberately above the 812px class: that composition landed
within 3px of the viewport on one tier, and 3px is not a margin worth trusting
to a font fallback, so those devices take the compact tier and its headroom
instead.

| viewport | tier | slack |
| --- | --- | --- |
| 375 × 667 (SE) | compact | 17px |
| 375 × 736 (8 Plus) | compact | 85px |
| 375 × 812 (X, 13 mini) | compact | 159px |
| 390 × 844 (14, 15) | roomy | 81px |

Type floors, which are the thing to protect if this is ever compressed further:
Title reaches **15px** and panel Body **13px** in the compact tier, and buttons
stay at 14px with full padding — a 30px tap target that clears WCAG 2.5.8's
24px minimum. Do not buy vertical space from the button padding; that trades an
accessibility floor for pixels. Adding a sentence to the bio or a line to a
panel spends the SE's 17px first — check the arithmetic before adding copy.

**The Fluid Frame Rule.** The frame breathes with the window (`vh`/`vw`
padding, `clamp()` gaps, `clamp()` type) while the controls inside it stay at
fixed pixel sizes. Buttons, thumbnails, and panel copy do not scale with the
viewport; the space around them does.

## Elevation & Depth

**There are zero box-shadows in this system, at any state, on any element** —
verified against the rendered page. Nothing is lifted, and nothing casts.

Depth is entirely atmospheric, built from three stacked layers rather than from
simulated physics. A `position: fixed` photo stack sits at the back with
`mix-blend-mode: lighten`, so the photographs can only ever *add* light to the
Blue Hour ground and never muddy it. Two fixed scrims sit over it. Content sits
above both at `z-index: 2`. Each backdrop layer is inset `-3%` past the
viewport so it can be scaled without exposing an edge.

The effect is a room with a window, not a stack of cards. Distance is
communicated by how much light reaches something: the backdrop is dimmed to
somewhere between 4% and 28% of its true brightness by the wash, thumbnails
rest at 45% opacity, and text sits at its alpha step. To make something feel
closer, raise its alpha or its contrast.

### Named Rules

**The No-Shadow Rule.** Do not add a `box-shadow`, a `filter: drop-shadow`, or
a simulated elevation of any kind. If an element needs to come forward, it
takes more light — a higher alpha, a brighter step of the ramp, or a tint. The
design system's `--shadow-sm` token (`0 0 0 1px #3f424d`) exists upstream in
Nocturne and is deliberately not carried into this project.

## Shapes

The form language is almost entirely absent, and that absence is the design.
Radii are small and used in exactly two places: **4px** on photo thumbnails and
**8px** on buttons. There are no cards, no panels with backgrounds, no
containers, no clipping, and no decorative geometry. The detail panels — the
most content-heavy component on the page — have no box at all; they are
positioned text.

Lines carry all the structure the system has: a 1px divider between the two
columns, a 1px border on secondary buttons, a 1px accent outline on the primary
button, and a 1px underline beneath each interactive phrase. All of them are
hairlines at low alpha. The only genuinely filled objects on the page are the
photographs.

### Named Rules

**The Drawn-Not-Built Rule.** Components are inscribed on the view, not stacked
on top of it. Nothing gets a filled background, a container, or mass. The
primary button is therefore an accent *outline*, never a filled accent block —
on this ground a solid violet button reads as a banner ad, and it is the single
detail a generator is most likely to get wrong. If a new element seems to need
a card around it, it belongs in the panel system or it does not belong on the
page.

## Components

### Buttons

Character: instrument markings — exact, unornamented, legible in low light,
and never competing with the view behind them.

- **Shape:** softly rounded (8px), 1px border, `display: inline-flex`,
  `padding: 5.6px 10.08px`, Interface type (Inter 500, 14px).
- **Primary:** an accent **outline** — `color` and `border-color` both Dusk
  Periwinkle, background transparent. Hover fills with the accent at 12%,
  active at 22%.
- **Secondary:** Moonlight text, Divider border (16% alpha). Hover fills with
  Moonlight at 7%, active at 14%.
- **Focus:** 2px Dusk Periwinkle outline at 2px offset, from `:focus-visible`.
  Never suppressed.

### Thread Link (signature component)

The system's defining component: a phrase inside running prose that is
simultaneously a link, a backdrop trigger, and a panel trigger.

- **Rest:** Dusk Periwinkle 300 text, no underline decoration, `border-bottom:
  1px solid` accent at 50%. It reads as prose that happens to be lit.
- **Active (hover, focus, or tap):** text to Dusk Periwinkle 100, background
  tint to accent at 22%, over 200ms ease. The tint is a highlighter mark, not a
  button fill — it hugs the text box and inherits the line breaks.
- Activating it simultaneously crossfades a backdrop photograph (850ms) and a
  detail panel (340ms). The three timings are intentionally different so the
  response feels layered by depth rather than synchronized.
- **Input modality is read per interaction, never per device.** A mouse
  activates on hover and navigates on the first click; a finger activates on
  the first tap and navigates on the second. The distinction comes from
  `pointerType` on `pointerover`/`pointerdown`, not from a `(hover: hover)`
  media query — a touchscreen laptop matches that query because a mouse is
  attached, and would hand a finger tap straight to the link. Two consequences
  bind any reimplementation: the synthetic `mouseenter` a tap emits must be
  ignored when the pointer is not a mouse (otherwise it opens the thread inside
  the same tap that is then tested for "already open", and the link fires on
  the first tap), and hover must resume the instant the mouse moves again.

### Detail Panel

- **Structure:** no container. Kicker (Label, Dusk Periwinkle 400, `margin-
  bottom: 10px`), body (Body, Moonlight 82%), then an optional destination line
  (Meta 13px, Moonlight 45%, `margin-top: 14px`).
- **Behavior:** every panel is mounted at all times, absolutely positioned in a
  shared box, with `visibility` riding along so hidden panels leave the
  accessibility tree. The swap is **staggered, not cross-dissolved**: the
  outgoing panel clears over 120ms, then the incoming one fades in over 220ms.
  A symmetric cross-dissolve works for photographs and fails for text — both
  copies sit at partial opacity in the same box and the result is an
  unreadable smear, measured three panels deep when a pointer sweeps the
  paragraph. Leaving before arriving keeps exactly one panel legible at any
  instant, and the two halves still total the specified 340ms.
- **Idle state:** a distinct panel at lower emphasis — kicker at Moonlight 40%
  instead of accent, body at 62% instead of 82%. Its body is the only place the
  interaction is ever explained, so it ships in two variants swapped on
  `(hover: none)`: "Hover… Click one…" and "Tap… Tap it again…". The first is
  false on a phone, and the two-tap behavior is otherwise undiscoverable.

**The Tiered Motion Rule.** Motion is tiered by distance from the viewer, and
nearer things move faster: the backdrop crossfades at **850ms**
`cubic-bezier(.4, 0, .2, 1)`, detail panels at **340ms ease**, thumbnails at
**260ms ease**, and inline text tints at **200ms ease**. Under
`prefers-reduced-motion: reduce` all four collapse to ~0 — the state change
still happens, it just arrives instantly. Always implement a crossfade as an
opacity `transition`, never a CSS `animation`: an animation with
`animation-fill-mode: both` pins opacity at its final keyframe and leaves every
panel visible, stacked. That failure was hit in the prototype and is easy to
reintroduce.

### Photo Thumbnail

- 108×68 fixed on desktop, `object-fit: cover`, 4px radius, no border. Below
  760px the row becomes a grid of `repeat(auto-fill, minmax(96px, 1fr))` at
  `aspect-ratio: 108 / 68` — a fixed 108px only fits two per row in a phone's
  content box, which turns ten photographs into five rows and a third of the
  page. Three per row reads as a contact sheet rather than a list.
- Rests at **45% opacity**, reaching full opacity on hover over 260ms. On
  no-hover devices it rests at 70% instead, since there is no hover to reveal
  it.
- Thumbnails are triggers, not decoration: each one drives the backdrop, and
  those belonging to a thread raise that thread's panel.

### Photographic Substrate (signature component)

The full-bleed backdrop is a component, not a background. A `position: fixed`
stack of sibling layers, each `inset: -3%` with `background: url(...)
center / cover`, wrapped in a container at `mix-blend-mode: lighten`. One layer
is always opaque as the resting image; the rest sit at `opacity: 0` and
crossfade in at 850ms `cubic-bezier(.4, 0, .2, 1)`. Both scrims sit over the
whole stack at `z-index: 1` with `pointer-events: none`.

**Format is WebP at quality 80** (`compression_level 6`, photo preset), which
measured SSIM 0.977–0.990 against the JPEG masters — visually lossless for a
frame that sits at 4–10% brightness under the scrim. They cannot be
lazy-loaded: a hover has to crossfade instantly, so every layer is fetched up
front.

**Two cuts, one breakpoint, and a single-download rule.** Full frames live in
`photos/`; a 1000px-long-edge cut lives in `photos/sm/` and serves everything
below 760px. Desktop pays 1.63 MB, a phone pays 0.66 MB, and the resolution
loss is invisible under the scrim.

The rule that makes it work: **at any given viewport, the backdrop layer, the
thumbnail, and the preload must all resolve to the same file.** Ten thumbnails
therefore cost zero extra requests. Three separate mechanisms select the cut
and all three carry the same 760px breakpoint — the `@media` block in
`styles.css`, the `<source media>` on each `<picture>` in the strip, and a
pair of `media`-gated `<link rel="preload">` tags. If any one of them drifts,
photographs silently download twice; an unconditional preload did exactly that
and cost a duplicate copy of the resting image on every phone. Verify by
resolved URL, not by eye.

**One JPEG survives, and it is not a photograph in the stack.** `photos/og.jpg`
is a purpose-built 1200×630 crop of the resting image (25 KB) that exists only
for `og:image`, which is absolute
(`https://daveeuson.github.io/photos/og.jpg`) because link-preview scrapers do
not resolve relative paths and handle WebP far less reliably than browsers do.
This page is mostly reached from a shared link, so the preview is load-bearing
and 1.91:1 is the shape it needs — not the 3:2 of the source frame. Everything
else in `photos/` is WebP; the JPEG masters were deleted, and byte-identical
originals live on only in the handoff bundle.

**Portrait is a crop decision, not a scaling one.** These photographs are
landscape; a portrait viewport under `cover` shows roughly a third of their
width and all of their height, so vertical position is meaningless and the
horizontal third is a real art-direction choice. `center` is wrong for several
frames — it loses Morro Rock in the resting image, and loses both the crescent
moon and the cypress in `moon.jpg`. Each affected layer therefore carries an
explicit `background-position` under `@media (orientation: portrait)`; the rest
are centre-composed and stay at `center`. Any photograph added to the stack
needs this judgement made for it, by looking at the frame — a default is not
available here.

### Link Row

The footer cluster, and the only place in the system where both button variants
appear together. Four secondary buttons followed by one primary, in a
`flex-wrap` row at 8px gap. The single accent outline against four hairlines is
what makes the primary read as primary — the ratio is the emphasis, not the
weight of any one control. Do not add a second primary to this row.

### Photo Strip

Row of thumbnails at 8px gap over a 12px caption at Moonlight 38%, stacked in a
12px-gap column. Per the product record this strip is the photography surface
permanently, so it is a first-class component rather than a footer ornament: it
carries every image not reachable from the prose, and it is the page's only
grid of repeated objects.

### Bio Block

The left column: a stylized greeting, then the paragraph, in a flex column at
`0.7em` gap (~19px). `text-wrap: pretty` is applied to the prose.

The **greeting** is a salutation, not a heading and not prose, and it is the
one place the system permits a display treatment on a body element. Its
stylization is a two-tone split rather than an ornament: the pleasantry recedes
to Moonlight 52% and only the name comes forward at full strength, so the eye
lands on "Dave" and not on "Hi". Weight 500 and `-0.02em` tracking are borrowed
from Display; nothing else is.

The **paragraph** opens with the central claim, because the product record puts
the whole burden on a ten-second read by a stranger. The greeting is allowed to
come first visually, but it must never be the first thing that makes an
argument. Everything after the opening sentence runs at Moonlight 94%, one
uniform voice.

The block is deliberately static — it does not respond, reflow, or rewrite when
a thread activates. Its stillness is what the whole Observation Deck reading
depends on.

### Inherited Patterns (not present on this page)

The following come from Nocturne and are **specified but unused**. They are
recorded so a future form or data view starts on-brand rather than inventing a
vocabulary. Treat them as provisional: nothing here has been proven against a
photographic ground, and the first real use should verify contrast over a
bright frame before shipping.

- **Text input / field.** 36px min-height, `6px 10px` padding, Interface type
  (14px), 8px radius, 1px Divider border on `--color-surface` (`#232532`).
  Hover raises the border to Moonlight 45%; focus swaps it to the accent with
  `outline-offset: 0`. The caret takes the accent. **Note:** `--color-surface`
  is the one inherited token this project does not currently declare — a filled
  input is the first thing in the system with a background, which puts it in
  direct tension with the Drawn-Not-Built Rule. Prefer an underline-only field
  if one will serve.
- **Tag.** 11px, `3px 10px`, `0.02em` tracking, radius `calc(8px * 0.75)`.
  Accent tags pair `--color-accent-800` (`#423a6a`) with `--color-accent-100`;
  the outline variant is a 1px accent border with accent text and is the
  variant most consistent with this system.
- **Table.** 14px. Row rules are painted as row-level background gradients
  rather than cell borders, so the hairline fades to transparent 48px from each
  end of the row instead of stopping flat. Header rules use Divider; body rules
  use Moonlight 8%; hover layers a Moonlight 4% tint over the rule, which keeps
  painting beneath it.
- **Fading rule (`.hr`).** A 1px divider that ramps from transparent to Divider
  over its first and last 48px. This is a Nocturne signature and the most
  reusable of the four here — it is the same instinct as the two-scrim
  vignette, applied to a line. Freestanding rules fade; box outlines,
  in-control separators, and short accent marks stay solid.

## Do's and Don'ts

### Do:

- **Do** express text hierarchy with the alpha ladder (94 / 82 / 62 / 48 / 45 /
  40 / 38) before reaching for a size or weight change.
- **Do** give every state change a duration from the tiered motion set —
  850ms backdrop, 340ms panel, 260ms thumbnail, 200ms inline text — and keep
  nearer things faster.
- **Do** put both scrims over any photographic surface, always as a pair.
- **Do** keep uppercase to 11–12px with `0.14em` tracking.
- **Do** wrap grid track floors in `min()` (`minmax(min(380px, 100%), 1fr)`) so
  a floor can never outgrow its container under `overflow-x: hidden`.
- **Do** reach for a photograph first when a new surface needs a ground; the
  bare Blue Hour ground is legal, but it should be a decision rather than a
  default.
- **Do** keep `:focus-visible` visible. Hover is not the only way into this
  system, and it must never become so.

### Don't:

- **Don't** fill the primary button. It is an accent outline.
- **Don't** add a `box-shadow`, `drop-shadow`, or any simulated elevation.
- **Don't** introduce a second typeface, a third weight, or an italic.
- **Don't** use pure black or pure white anywhere.
- **Don't** add a second accent hue. One violet carries the whole system; a
  green success state or a red error state would be a departure.
- **Don't** drive crossfades with a CSS `animation` — `animation-fill-mode:
  both` overrides opacity and stacks every panel visible.
- **Don't** put a container, card, or filled background behind text.
- **Don't** let hover be the only path to any content. Touch and keyboard
  visitors must reach everything the mouse can.
- **Don't** use `photos/clouds.jpg` as a backdrop. It is 269px wide and bands
  badly when scaled; it is thumbnail-scale only.
