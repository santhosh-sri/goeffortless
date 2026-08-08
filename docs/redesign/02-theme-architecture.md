# Phase 2 & 3 — Component Strategy and Theme Architecture

Companion to [01-codebase-audit.md](./01-codebase-audit.md). Covers what shipped
in the foundation commit and the rules new work must follow.

---

## 1. Theme architecture

### Layering

```
src/styles/tokens.css      semantic CSS custom properties, light + dark
        ▼
tailwind.config.ts         maps every property to a Tailwind utility
        ▼
src/components/ui/*        primitives that consume ONLY those utilities
        ▼
feature components         compose primitives; never name a colour
```

### Token storage format

Colours are stored as **space-separated RGB channels**, not hex:

```css
--color-accent: 240 139 50;
```

so Tailwind can apply opacity modifiers — `bg-accent/10` resolves to
`rgb(var(--color-accent) / 0.1)`. Hex values cannot do this.

### Theme selection

`darkMode: ["class", '[data-theme="dark"]']`. The active theme is a
`data-theme` attribute on `<html>`, resolved in this order:

1. `localStorage["efl-theme"]` — the user's explicit choice.
2. `prefers-color-scheme` — the OS default, followed live while no explicit
   choice exists.
3. `light` — final fallback.

`THEME_INIT_SCRIPT` (exported from `ThemeProvider`, injected in `_document.tsx`)
runs **before first paint**, so there is no flash of the wrong theme. During a
switch, `data-theme-switching` is set on `<html>` for one frame to suppress
transition animations mid-swap.

### Palette sources

| Theme | Source |
|---|---|
| **Light** | Figma `EFL Website Final \| v4.0`, node `1548:28466`. Values lifted from `get_design_context` on the header (`2520:8379`), hero (`1548:28486`) and card grid (`1548:28589`). |
| **Dark** | The palette shipped on the current production site, remapped onto the new layout — per your direction that the existing site *is* the dark mode. `#08090A` page, `#15181B` card, `#E4E4E7` body text, `#F08B32` accent. |

Two deliberate deviations from a straight inversion, both because a literal copy
fails in dark:

- **Shadows are re-authored, not reused.** `rgb(16 25 40 / 0.05)` is invisible on
  `#08090A`. Dark shadows run at 0.4–0.6 alpha.
- **`--color-danger` lifts** from `#DC2626` to `#FF5252`, and
  `--color-accent-hover` from `#DD781F` to `#FFA043`, to hold contrast on dark.
  A hover state that darkens reads as "disabled" against a dark background.

### Token reference

| Group | Tailwind class | Light | Dark |
|---|---|---|---|
| Page background | `bg-bg` | `#FFFFFF` | `#08090A` |
| Alternating band | `bg-bg-subtle` | `#F4F5F7` | `#121316` |
| Well / input | `bg-bg-inset` | `#EEEFF2` | `#15181B` |
| Card | `bg-surface` | `#FFFFFF` | `#15181B` |
| Dropdown / modal | `bg-surface-raised` | `#FFFFFF` | `#181B1F` |
| Card hover | `bg-surface-hover` | `#F9FAFB` | `#23292F` |
| Heading text | `text-content` | `#1A1A1A` | `#FFFFFF` |
| Body text | `text-content-muted` | `#4A5568` | `#E4E4E7` |
| Caption | `text-content-subtle` | `#818A99` | `#B1B1B1` |
| Card border | `border-line` | `#CECECF` | `#2D2D2D` |
| Pill border | `border-line-subtle` | black @ 8% | white @ 20% |
| Brand | `bg-accent` / `text-accent` | `#F08B32` | `#F08B32` |
| Brand hover | `bg-accent-hover` | `#DD781F` | `#FFA043` |
| Focus ring | `ring-focus` | `#F08B32` | `#FFA043` |

Shadows: `shadow-sm`, `shadow-card`, `shadow-raised`, `shadow-overlay`,
`shadow-media`. Radii: `rounded-sm` (4, buttons), `rounded-md` (6, inputs),
`rounded-card` (18), `rounded-pill`.

### Type scale

Line-height and letter-spacing travel with the size, so components state one
class instead of three:

| Class | Size / line-height | Figma usage |
|---|---|---|
| `text-display` | 64 / 72, −1.28px | hero H1 |
| `text-heading-lg` | 40 / 48, −0.8px | tablet H1 step |
| `text-heading-md` | 32 / 40, −0.32px | section H2 |
| `text-heading-sm` | 24 / 30 | card title |
| `text-body-lg` | 20 / 28 | hero + section description |
| `text-body` | 16 / 20 | body, nav, buttons |
| `text-label` | 14 / 16 | pills, meta |
| `text-caption` | 12 / 16 | fine print |

### Breakpoints — unchanged, deliberately

`screens` is **not** overridden. 890 existing `md:` utilities depend on
`md === 768px`; redefining it would silently reflow every un-migrated page.
New components use:

```
base  → mobile   (<768)
md:   → tablet   (768–1023)
lg:   → desktop  (>=1024)
```

This gives the tablet layer the audit found missing, at zero regression risk.

---

## 2. Components created (with justification)

| Component | Path | Why it is new, not an extension |
|---|---|---|
| `Button` | `ui/Button.tsx` | Collapses `Democta` + `RedirectCta` + `SecondaryCta`. Also removes their behaviour-by-label-sniffing (`ctaText.toLowerCase().includes("trial")`) in favour of explicit props. Polymorphic `button` / `Link` / `<a>`, 4 variants, 3 sizes, optional Cal.com binding. |
| `Container` | `ui/Container.tsx` | No container existed; `max-w-[1350px]`/`[1360px]`/`px-[80px]` were retyped per section. Encodes the Figma 1440-frame / 64px-gutter / 1312px-content geometry once. |
| `Section` | `ui/Section.tsx` | Replaces the `max-md:px-5 md:px-[80px] py-8 md:py-[60px]` string repeated across ~40 sections. Owns vertical rhythm + background tone. |
| `SectionHeading` | `ui/SectionHeading.tsx` | The badge + two-tone heading + description block opening nearly every Figma section. Previously inlined in `ServiceSection` with hardcoded gradients. |
| `Badge` | `ui/Badge.tsx` | Extracted from `PageTitle`, which mixed the pill with homepage-specific "Say 👋 to" logic and two inline gradients. `PageTitle` stays for un-migrated pages. |
| `InfoCard` | `ui/InfoCard.tsx` | Consolidates six near-identical icon+title+description cards (`IdeasCard`, `USeCaseCard`, `pentCard`, `ServiceList`, `GrowthCards`, `Timeline` body). Matches Figma `Component 1163` exactly. |
| `ThemeToggle` | `ui/ThemeToggle.tsx` | No equivalent existed. Inline SVG so the glyph inherits `currentColor`. |
| `ThemeProvider` | `context/ThemeProvider.tsx` | No equivalent existed. |
| `cn()` | `lib/cn.ts` | No class-merge helper existed; composition was raw template literals with nested ternaries. Dependency-free — no new package. |

**Reused unchanged:** `Metadata`, `CategoryTabs`, `calConfig`, `footer.ts`,
`formFields.ts`, all `src/data/**` JSON.

**Reused with token migration pending:** `Modal`, `TabComponent`, `InputField`,
`SearchableDropdown`, `SearchBar`, `PageTransition`, `HeaderBanner`,
`AccordionComponeny`, and the card/section families listed in audit §5.3–5.4.

**No new dependencies were added.**

---

## 3. Deviation from the approved plan — CTA migration sequencing

You approved consolidating `Democta` / `RedirectCta` / `SecondaryCta` into one
`Button` now. The canonical `Button` **is** built and is the only CTA that new
work may use. However, the ~20 existing call sites have **not** been rewritten
yet, and this is intentional:

`Button` renders from theme tokens, and the token layer defaults to **light**.
Every un-migrated page still hardcodes `bg-[#08090A]`. Swapping the CTAs
globally today would put light-theme buttons and light focus-ring offsets on
pages that are still hardcoded dark — a visible regression on the live site for
no gain, since those pages are being replaced anyway.

The three legacy components are therefore left untouched and treated as
deprecated. Each is deleted as the page that uses it is migrated, so the
duplication disappears without a window of broken styling. The rule that matters
— *one canonical Button, no new duplicates* — is in force from now.

---

## 4. Rules for all subsequent work

1. **No literal colours, shadows or radii in components.** If a value is
   missing, add a token to `tokens.css` first.
2. **Compose primitives.** Reach for `Section` → `Container` → `SectionHeading`
   → `InfoCard` / `Button` before writing layout by hand.
3. **Check the audit inventory before creating a component.** Extend the
   existing one unless the structure genuinely differs.
4. **Every interactive element needs a visible focus state** — the primitives
   carry `focus-visible:ring-focus`; keep it when overriding `className`.
5. **Both themes must be checked** before a section is called done.

---

## 5. Verification

- `npx tsc --noEmit` — clean.
- `npx next build` — succeeds, 70 pages generated, no new warnings.
- No existing page's rendered output changed: the token layer is additive, the
  legacy `--background` / `--foreground` aliases are retained in
  `tailwind.config.ts`, and `screens` is untouched.
