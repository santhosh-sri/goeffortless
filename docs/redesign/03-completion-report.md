# Effortless v4.0 redesign — completion report

Branch `redesign/v4-home-sales`, 24 commits off `new-theme-changes`. Not pushed.
Figma file `3olwrY87xfasl8cSoJDCkD`, section "New design & Components" (`2524:8143`).

---

## 1. What shipped

### Pages built from Figma

| Page | Route | Figma node | Notes |
|---|---|---|---|
| Home | `/` | `1548:28466` | 6579px rendered vs 6574px design |
| Sales & Collections | `/sales` | `1636:2296` | 10 feature rows |
| Purchase & Expenses | `/expenses` | `1943:63635` | 9 rows, Compliance Shield band |
| Contracts & Billing | `/contracts` | `1943:71185` | 7 rows with tick lists, Two Modes band |
| Field Staff Claims | `/claims` | `1864:23195` | **new route** — 7 rows, no video band |
| Buyer Portal | `/buyer-portal` | `1864:15745` | **new route** — 7 rows, no video band |
| All Features | `/allFeatures` | `2426:64116` | 17 module cards in 3 groups |
| Pricing | `/pricing` | `2426:60796` | **un-404'd** |
| Pricing — Procurement | `/pricing/procurement` | `2410:56867` | 72-row comparison table |
| Pricing — Sales | `/pricing/sales` | `2410:54564` | 120-row table; tallest frame in the file (12,173px) |

### Pages restyled onto the tokens

About Us, Case Studies, Contact Us, FAQs, Partners, Download Apps,
Certifications & Awards, Blogs (list + detail), Privacy Policy, Terms of
Service, Security Practices.

These stay CMS-driven. They previously rendered through `Landing`, which pinned
`data-theme="dark"`, so they kept the old dark palette while the rebuilt pages
moved to light. That pin is gone and every page now shares one header and footer.

### Architecture

- **Design tokens** (`src/styles/tokens.css`) — light palette from Figma, the
  existing production palette as dark, stored as space-separated RGB channels so
  Tailwind opacity modifiers keep working.
- **Shared product template** (`src/components/pages/product/`, 6 modules) —
  hero, problem/solution split, feature deep dive, why-this-matters, video band,
  closing CTA. Five product pages are data files on top of it.
- **UI primitives** (`src/components/ui/`, 7 modules) — Button, InfoCard, Badge,
  Container, Section, SectionHeading, ThemeToggle.

---

## 2. Bugs found and fixed

Ordered by how much they mattered.

**Horizontal overflow at exactly 1024px, on every page.** The header switched
from drawer to full nav at `lg`, but logo (176) + nav (542) + actions (239) need
957px against 896px of available width, so "Schedule Demo" pushed 29px off-screen.
Four page columns had the same shape of bug with fixed `lg:` widths taken from the
1440 frame. All now hold their fixed width from `xl` and flex below it. This was
pre-existing on the home and Sales pages and my earlier verification missed it —
I had checked 375, 768 and desktop, never the breakpoint boundary itself.

**16.7 million pixels of horizontal overflow on mobile.** `slick.css` was
imported inside `Testimonials.tsx`, so any page with a carousel but no
Testimonials had an unclipped `.slick-list`. Moved app-wide. Pre-existing.

**Invisible video play button.** A white glyph with no backdrop, on a thumbnail
with a white centre. The section looked like a static image. Now has a dark disc
and scrim, and is a real `<button>` with an accessible name — it had been a bare
`div` with an onClick, unreachable by keyboard.

**Customer logos invisible on light.** The shipped set was white-on-transparent
(217–255 average brightness). Replaced with the brand originals. Three treatments
by measured source: colour marks flatten to white on dark; white-sourced marks
invert on light; artwork with filled backing shapes skips filtering entirely,
because the silhouette treatment collapses it into a solid block.

**177 low-contrast elements across the restyled pages** — white-on-white text
after removing the dark pin. Now zero, verified by walking every text node and
comparing computed colour against resolved background.

**Accessibility gaps on the CMS pages** — no `<main>` anywhere, icon-only links
with no accessible name, and two pages with no `h1`. Sweep is now clean across
all 14 page types.

---

## 3. Design issues found — these need a designer

**The Command Center panels are offset by one against their tabs.** The panel
under "Effortless Purchases" carries Sales copy; the one under "Effortless Staff
Claims" carries Procurement copy. Each panel's eyebrow and headline match a
product page hero word for word, so I paired them with the tab they actually
describe. Worth confirming.

*This also resolves the "four missing tabs" I reported earlier — they were never
missing. The component (`1746:24067`) has all five; the home page frame only
instantiates one.*

**Stale layer names throughout.** Many text layers carry copy from a different
page — every section description on the pricing detail pages reads "From
unreliable messages to verified field intelli", which is Sales copy. Every panel
in the Command Center component has the same placeholder body line. I treated the
rendered frames as authoritative and used real product copy where the layer was
clearly a placeholder.

**Two customer logos are mislabelled at source.** The layer named `marvel` is
Arvind Petroleum; Marvel Polymers sits under `logo (3) b`.

**The Purchase & Expenses feature heading reads "field sales operation"** — Sales
copy on the procurement page. Implemented as drawn and flagged rather than
silently corrected.

**The Solutions dropdown draws a chevron on every row** implying a disclosure,
but there is no expanded state in the component and those rows have no
destinations. They ship as working links with descriptions visible; a chevron
that discloses nothing would be a worse affordance than none.

**"See all NN features" footers on All Features have no destination.** They
render as labels, not invented links.

**12 customer logos have generic alt text.** Their Figma layers are named
`image 817`, `logo (3) 1` and similar. I have the artwork but not the brand
names, so they read "Effortless customer".

---

## 4. Technique notes worth keeping

**Export media frames by node id, never crop full-row exports.** Row exports come
back 1328px wide, not 1312 — the decorative dot field overflows the frame bounds,
so fixed-offset crops drift. This put the wrong image in a Sales feature row
before I switched approach.

**Never trust `svgAssets` array order.** It does not match visual order. Exporting
each icon from its own node is the only reliable way; batching by parent is what
swapped the home page icons.

**`get_design_context` overflows on these frames.** Hero and feature rows carry
~2,600 `<star>` nodes for the dot field. Copy came from metadata text-layer names
instead.

**Locate vector-only data by scanning pixels.** The red crosses in the pricing
tables carry real meaning but are vectors, absent from text layers entirely.
Scanning the rendered frames for red pixels found exactly one in Procurement and
four in Sales, all in the Grow column — reading 192 rows by eye would have been
guesswork.

**`documentElement.scrollWidth` lies when a scroll container is present.** It
reported ~270px of overflow on the pricing pages that did not exist:
`document.body.scrollWidth` read correctly and `window.scrollX` never moved. Test
horizontal overflow by asking whether the window can actually scroll.

**Open the prototype, not just frame exports.** Two drifts were invisible in flat
PNGs: the nav chevrons point right (`-rotate-90` on a chevron-down, which the
export flattens), and the line under the hero has three phrases in the darker
heading colour.

---

## 5. Verification

- `npx tsc --noEmit` — clean.
- `npx next build` — clean.
- **Responsive:** 64 page/width combinations at 375/768/1024/1440. Zero pages can
  scroll horizontally. No broken images.
- **Contrast:** every text node on the 8 restyled pages checked against its
  resolved background. 177 failures → 0.
- **Accessibility:** 14 page types checked for landmarks, accessible names, alt
  attributes and heading structure. Zero findings.
- **Links:** every internal `href` in the nav and footer returns 200.
- **Performance:** all images go through `next/image`; no raw `<img>` on the
  rebuilt pages. A 911KB source PNG serves as 62KB WebP, a 726KB as 27KB.

---

## 6. Known gaps

1. **Not pushed.** 24 commits sit on `redesign/v4-home-sales` locally.
2. **12 logos need brand names** for alt text.
3. **Design questions in §3** need a designer's call, especially the Command
   Center pairing.
4. **Source asset weight is 20MB.** User-facing bytes are fine (WebP conversion
   at request time); this is repository weight only. Converting the photographic
   sources to JPEG would cut it substantially.
5. **`text-white` survives in 44 places** in legacy components where the class
   string also carries a background utility — correct in most cases (white on
   orange buttons, photo scrims), but not individually audited.
6. **The legacy CMS components were mapped mechanically.** ~340 colour values
   were rewritten to tokens by script and verified by contrast sweep, not by
   reading every line. The sweep proves legibility, not visual intent.
