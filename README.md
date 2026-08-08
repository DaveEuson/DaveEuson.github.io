# Dave Euson — personal site

A single-screen one-pager. A greeting and one paragraph of bio; five phrases
inside the paragraph are interactive. Activating a phrase highlights it,
crossfades a full-bleed photograph behind the page, and crossfades a detail
panel into the right column. Clicking follows the link. The paragraph itself
never rewrites.

There are six panels. The sixth — `06 / Pictures` — has no phrase in the
current copy and is reached by hovering the moon thumbnail in the strip.
Panel numbers track the paragraph's reading order, so they need renumbering
whenever the paragraph changes.

Built from the handoff in `extracted/design_handoff_dave_euson_site/` — see
that README for the design rationale, tokens, and copy.

## Files

| | |
| --- | --- |
| `index.html` | the page |
| `styles.css` | Nocturne tokens + the page's class layer |
| `main.js` | ~50 lines: one `active` key, everything derives from it |
| `photos/` | the photographs — backdrop stack and thumbnail strip |
| `assets/` | résumé, PDF and DOCX |

No build step, no dependencies. Inter loads from Google Fonts; everything
else is local.

## Running it

```bash
python -m http.server 5173
```

Then open http://localhost:5173. It must be served over HTTP rather than
opened as a `file://` URL — the backdrop layers are CSS `background-image`
references that some browsers won't resolve from the filesystem.

## State

One value: `active` — one of the six thread keys (`arch`, `cast`, `ai`,
`music`, `code`, `photo`), one of the six strip-only photo keys (`ocean`,
`arena`, `dog`, `city`, `stage`, `sky`), or `null` for resting.

Strip-only photos deliberately show no panel: the detail column clears and
the photograph carries the moment alone. `bay.jpg` is the resting backdrop
and is always painted underneath the stack.

## Where this departs from the prototype

Three deliberate changes, all of them things the handoff left to production:

1. **Touch and keyboard.** The prototype is hover-only. Here, focusing a
   phrase raises its panel, and a tap opens the thread on the first press and
   follows the link on the second. Tapping dead space returns to rest. Below
   760px the panels render one at a time in normal flow rather than stacked
   absolutely, so the column has no fixed 320px hole.

   The mouse/touch distinction is read from `pointerType` per interaction, not
   from a `(hover: hover)` media query. A touchscreen laptop matches that query
   because a mouse is attached, so a query-based check sends a finger tap
   straight to the link and the panel is never seen. It also means the
   synthetic `mouseenter` that a tap emits has to be ignored while the pointer
   is not a mouse — otherwise it opens the thread during the very tap that is
   then checked for "already open", and the first tap navigates.
2. **The grid floor is capped at the container.** The prototype's
   `minmax(380px, 1fr)` track outgrows the content box below ~420px wide,
   and `overflow-x: hidden` then clips the end of every line of the bio
   instead of wrapping it. `minmax(min(380px, 100%), 1fr)` fixes it at every
   width with no media query.
3. **The résumé links to a PDF**, exported from the supplied `.docx` via Word.
   The `.docx` is no longer in `assets/` — a byte-identical copy survives in
   `extracted/design_handoff_dave_euson_site/design/assets/`. It is the
   editable source, so re-export from it (or from wherever you keep the live
   version) rather than editing the PDF when the résumé changes.

## Known, not yet done

- ~~**Image weight.**~~ Resolved. WebP at quality 80 (SSIM 0.977–0.990 against
  the originals), in two cuts: full frames in `photos/` and a 1000px-long-edge
  set in `photos/sm/` for viewports under 760px.

  | | was | now |
  | --- | --- | --- |
  | desktop | 3.31 MB | **1.63 MB** |
  | phone | 3.31 MB | **0.66 MB** |

  They still load eagerly — a hover has to be instant, so they can't be lazy.
  The backdrop, the thumbnails and the preload all resolve to the same file at
  a given viewport, so ten thumbnails add zero requests; see DESIGN.md for why
  all three breakpoints must stay in sync.

  The JPEG masters have been deleted. `photos/` is WebP only, plus a single
  `og.jpg` (1200×630, 25 KB) built for link previews. Byte-identical copies of
  every original survive in `extracted/design_handoff_dave_euson_site/design/photos/`
  and inside the handoff zip, so nothing is unrecoverable — but those are the
  only copies in this project now.
- ~~**Vertical fit.**~~ Resolved. The page is one screen on desktop and on
  every phone from a 375×667 SE up. Two mobile tiers, the second gated on
  viewport *height* rather than width; the photo strip becomes a horizontally
  scrolling filmstrip; the detail panels share one grid cell so page height is
  constant no matter which thread is open. See DESIGN.md's One Screen Rule for
  the tier table and the type floors.
- **Thumbnails aren't keyboard-reachable.** They duplicate the backdrop, and
  the six panels are all reachable through the phrases, so this is a
  garnish rather than a gap — but it is a gap.
- `clouds.jpg` ships in `photos/` and is unused: too small to serve as a
  backdrop, and the strip is already full.
