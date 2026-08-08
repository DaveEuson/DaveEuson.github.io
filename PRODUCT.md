# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One primary visitor, deliberately mixed: **anyone who has just met Dave and is
looking him up.** Conference and trade-show contacts, a LinkedIn profile click,
a customer or partner checking who they are about to be on a call with, an
engineer curious what he actually builds, a recruiter who found him.

They arrive from a single link, on any device, giving the page a few seconds
before deciding whether he is worth the next click. There is no dominant
technical level and no shared context to assume — the same screen has to land
for a broadcast CTO and for someone who has never heard of MAM.

Not the audience: this is explicitly **not** a job-search page. Dave is
employed (Senior Solutions Architect at qibb since July 2025). Recruiters are
welcome but are not who the page is written for, and it should not carry
open-to-work signalling unless he says otherwise.

## Product Purpose

A personal site that establishes credibility on sight. Success is a stranger
leaving with an accurate, favorable impression of who Dave is and what he
does — and, when it is relevant to them, taking one click through to LinkedIn,
GitHub, SoundCloud, or the résumé.

It is not selling anything and not asking for anything. There is no conversion
goal, no form, no funnel. The page is finished when a visitor believes him.

## Positioning

Dave sits in the seam between deep media-systems engineering and executive
strategy, and has for twenty years — the person who can hold both the Avid ISIS
architecture and the C-suite conversation about it. His own phrasing:
*connecting the dots between complex media systems.*

What a neighboring personal site could not truthfully copy: a career that runs
from 24/7 edit-bay infrastructure for the Oscars through international pre-sales
to production GPU/AI media pipelines — plus the fact that every photograph on
the site is his own, the music is his own, and the code is his own. The proof
and the decoration are the same material.

## Operating Context

Reached by a single shared link — LinkedIn profile, email signature, a name
typed into a search bar after a meeting. No campaign traffic, no SEO strategy,
no referral chain. First visit is usually the only visit, and it is short.

Split roughly between desktop (someone at their machine after a call) and phone
(someone in a hallway at a trade show). Both are first-class.

## Capabilities and Constraints

- **One page, permanently.** Confirmed durable decision, not a starting point.
  No nav, no routing, no second surface, no build step, no CMS. Future work
  adds depth to this screen or it does not happen.
- **Static, self-hosted assets.** Plain HTML, CSS, and a small amount of JS.
  Everything except the webfont is local.
- **Everything must be reachable without hover.** The design's detail panels
  are hover-driven on desktop; touch and keyboard visitors must have a real
  path to the same content. Non-negotiable given the phone-heavy context.
- **Contact surface is fixed:** DaveEuson@gmail.com, LinkedIn, GitHub,
  SoundCloud, and the city. The phone number on the résumé is deliberately
  withheld from the page.
- **Terminology in play:** MAM (media asset management), media supply chain,
  pre-sales, POC, GPU-accelerated pipelines, agentic orchestration. Any of it
  used on the page has to survive a reader who knows none of it.
- **Undecided:** deploy target. The résumé lists `daveeuson.github.io`, which
  suggests GitHub Pages and possibly an existing site this one replaces —
  unconfirmed, do not assume.

## Brand Commitments

- **Name:** Dave Euson. Chula Vista, California — at the south end of San Diego.
- **Voice: first-person, plain, and consistently understated.** The résumé
  escalates ("high-impact", "proven track record", "empowering the Agentic
  Enterprise"); the site does the opposite and is better for it. Established
  phrasing to protect: *"whatever is currently annoying me"*, *"most of it just
  saves me an hour a week"*, *"Nothing serious — I just like being outside with
  a camera"*, *"Photographs: mine, from wherever I happened to be standing."*
  No superlatives, no claims the résumé does not already support.
- **The bio paragraph never rewrites itself.** A prototype that mutated the
  sentence on interaction was built and rejected as too jarring. The left
  column stays static; detail appears elsewhere.
- **Existing site copy is Dave's own writing.** Ask before changing factual or
  voiced copy; do not add claims.

## Evidence on Hand

Real, in the repository:

- `photos/` — 14 photographs, all Dave's own, shot by him. They are the entire
  visual system: full-bleed backdrops plus the thumbnail strip. `bay.jpg`
  (Morro Bay at dusk) is the resting image. `clouds.jpg` is unused and too
  small to enlarge.
- `assets/Dave-Euson-Resume.pdf` / `.docx` — the full résumé, linked twice.
- Verified career record: Atlas Digital & Matchframe Video (2006–2012),
  NBCUniversal post-production engineering incl. Oscars/Emmys live support
  (2012–2013), Dalet/Amberfin pre-sales and product expert (2013–2021),
  Glookast international pre-sales (2016–2018), Ooyala (2018–2019), SnapStream
  (2019), Telestream technical account management (2023–2025), qibb senior
  solutions architect (July 2025–present).
- Named, real technologies: AWS Bedrock, Ollama, Twelve Labs, Reality Defender,
  Avid Interplay/ISIS, vSphere, Amberfin Workflow Engine (Groovy), SQL, Python.
- Certifications: Avid ACSR (Interplay, ISIS), IABM Video-over-IP, Video
  Symphony post-production program.
- Live public profiles: github.com/DaveEuson, soundcloud.com/davee264,
  linkedin.com/in/daveeusonpost.
- Side work referenced in his own copy: desktop applications in React and
  Electron; electronic music (progressive house) written in FL Studio.

**Absent — must never be fabricated:** no testimonials, no named customers, no
case studies, no logos, no metrics or benchmarks beyond the résumé's own, no
press, no pricing or services, no awards, no photography of Dave beyond the
edit-bay shot.

## Product Principles

1. **Credible in ten seconds, deeper if you want it.** The first read has to
   work for someone who will never click. Everything beyond that is optional
   and must stay optional.
2. **One screen, no assumed context.** Every visitor is a stranger with a
   different technical floor. Copy earns comprehension rather than assuming it;
   jargon appears only where the surrounding sentence explains it.
3. **Understatement carries more weight than the résumé does.** The site's
   restraint is the differentiator against a category of personal sites that
   shout. Never escalate the voice to fill space.
4. **The proof is his own material.** Photographs, music, and code are all
   first-hand. Nothing stock, nothing borrowed, nothing invented.
5. **It asks for nothing.** No capture, no CTA pressure, no open-to-work
   framing. A visitor who leaves without clicking is still a success.
6. **Finished, not a platform.** One page permanently. Resist every instinct to
   turn it into a site.

## Accessibility & Inclusion

- **Hover must never be the only path to content.** Touch and keyboard visitors
  must reach every detail panel. This is a product requirement, not a polish
  item — a meaningful share of traffic is a phone in a trade-show hallway.
- **`prefers-reduced-motion` is honored.** The page crossfades large
  photographs; the state change must still work with motion removed.
- **Text sits over photography at all times.** Legibility over the brightest
  frames is a hard floor, not a per-image judgment.
