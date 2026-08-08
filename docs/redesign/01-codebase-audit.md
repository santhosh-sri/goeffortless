# Phase 1 — Codebase Audit & Reuse Report

**Repo:** `effortless-website` · **Branch:** `new-theme-changes`
**Target design:** Figma `EFL Website Final | v4.0` — node `1548:28466` ("Home Page Final", 1440×6574)
**Date:** 2026-08-08

---

## 1. Stack & architecture

| Item | Current state |
|---|---|
| Framework | Next.js 16.0.8, **Pages Router** (`src/pages`), React 19.2 |
| Styling | Tailwind CSS **3.4** + one global stylesheet (`src/styles/globals.css`, 983 lines) |
| Fonts | `next/font/google` → **Lexend** (300/400/500/600/700), exposed as `--font-lexend`. One unused local font: `public/fonts/TTHoves-DemiBold.ttf` (its `@font-face` is commented out) |
| Language | TypeScript, `strict: true`, path alias `@/* → src/*` |
| Content model | **JSON-driven pages.** `src/data/*.json` + remote CMS via `src/utils/fetchServiceData.js`. `pages/[...services]/index.tsx` catches every marketing route and renders `<Landing {...content} />` |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Carousels | **Two** libraries in parallel: `react-slick` + `slick-carousel` **and** `swiper` |
| Booking | `@calcom/embed-react` (`src/utils/calConfig.ts`) |
| Analytics | `react-gtm-module` (GTM-3388VMGJ) |
| Toasts | `react-toastify` + hand-rolled `SuccessToast` / `ErrorToast` |

### Rendering pipeline

```
pages/index.tsx  ──►  <Landing {...landing.json} />
pages/[...services]/index.tsx (SSR, CMS)  ──►  <Landing {...content} />
                                                    │
        ┌───────────────────────────────────────────┼──────────────────────────┐
        ▼                    ▼                      ▼                          ▼
   <Metadata/>          <NewHeader/>         <FirstFold/> / <UsecaseFold/>  <Footer/>
                                                    │
                                          serviceContent[].map()
                                                    ▼
                                          <ServiceSection {...item}/>   ← 740-line dispatcher
                                                    │
                                    ~60 optional child section components
```

`ServiceSection.tsx` is the architectural centre of gravity: a single component that takes **~90 optional props** and conditionally renders one of ~60 section components based on which JSON key is present. This is the pattern the redesign must work with (or deliberately replace) — see §6.

---

## 2. Theme implementation — **there is none**

This is the single most important finding.

| Signal | Result |
|---|---|
| `dark:` utility usage across `src/` | **0 occurrences** |
| `darkMode` key in `tailwind.config.ts` | **absent** |
| Theme provider / `next-themes` / `useTheme` | **absent** |
| Semantic CSS variables | Only `--background` / `--foreground`, defined in `:root`, flipped by `@media (prefers-color-scheme: dark)` — and **overridden everywhere** by hardcoded classes, so they are effectively dead |
| Hardcoded page background | `bg-[#08090A]` written literally in `Landing.tsx`, `ServiceSection.tsx`, `404.tsx`, and dozens of components |

The site is a **hardcoded dark theme**. Colours are inline arbitrary values in JSX. Census of hex literals in `src/`:

| Hex | Count | Role |
|---|---|---|
| `#F08B32` | 166 | brand orange (primary) |
| `#FFFFFF` / `#FFF` / `#fff` | ~98 | primary text |
| `#E4E4E7` / `#e4e4e7` | 133 | secondary text |
| `#282828` | 32 | divider |
| `#E5E5E533` | 28 | border |
| `#15181B` | 25 | surface |
| `#08090A` | 24 | page background |
| `#333333`, `#B1B1B1`, `#646464`, `#2D2D2D`, `#A8A8A8`, … | ~150 | ad-hoc greys |

Plus ~40 more one-off hexes and dozens of inline `style={{ background: "linear-gradient(...)" }}` objects. **Nothing is tokenised.** Delivering Light + Dark therefore means building the token layer from scratch — it is net-new work, not a refactor of something existing.

### Design tokens available in Figma

`get_variable_defs` on the target node returns `{}` — **the Figma file publishes no variables**. The design system exists visually but not as machine-readable tokens. Tokens will have to be lifted from `get_design_context` output per-node and curated by hand into the codebase token layer.

---

## 3. Typography, spacing, breakpoints

**Typography:** no scale. Every heading is an ad-hoc arbitrary value, e.g.
`text-[24px] md:text-[72px] md:leading-[90px] leading-[30px] md:tracking-[-3px]` (ServiceSection), `!font-[300]`, `font-[500]`. Numeric font weights are written as arbitrary values rather than Tailwind's `font-light`/`font-medium`, and `!important` is used to win specificity fights.

**Spacing:** section padding is repeated literally — `max-md:px-5 md:px-[80px] py-8 md:py-[60px]` — and content is capped at `max-w-[1350px]` (also seen as `max-w-[1360px]`, `max-w-[777px]`). No container component.

**Breakpoints:** `tailwind.config.ts` has **no `screens` override**, so Tailwind defaults apply (sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536). Actual usage:

| Prefix | Occurrences |
|---|---|
| `md:` | 890 |
| `max-md:` | 105 |
| `xl:` | 27 |
| `lg:` | 8 |
| `sm:` | 5 |
| `2xl:` | 1 |

**The site is effectively two-breakpoint: `<768px` and `≥768px`.** There is no tablet layer at all. Additionally, `Landing.tsx` duplicates this in JS with a `window.innerWidth <= 768` resize listener and threads an `isMobile` boolean through ~20 components — a JS-driven responsive layer running alongside the CSS one.

---

## 4. Animations, icons, assets

**Animations** (all in `globals.css`): `fadeIn`, `fadeOut`, `scaleIn`, `logoPulse`, plus a large family of `gradient-border-{left,right,top,bottom}` pseudo-element utilities with `repeating-linear-gradient` masks for dashed dividers. These are hand-written escaped-variant classes (`.md\:gradient-border-left`) that fake Tailwind responsive prefixes — they work, but they are outside Tailwind's system and **all hardcode `rgba(255,255,255,…)`**, i.e. they only read correctly on a dark background.

**Icons:** raster + vector files in `public/`, referenced by string path through `next/image`. No icon component, no sprite, no icon library. `public/` holds **748 files: 612 SVGs, 131 raster (PNG/JPG), 0 WebP**, all flat in the root directory with inconsistent naming (`194J(a).svg`, `accordion_open.svg` **and** `accordion-open.svg`, `arrow-down.svg` **and** `arrow-down.png`). `next.config.ts` sets `formats: ["image/webp"]` but 20 `<Image>` call sites pass `unoptimized`, bypassing it.

**Utilities:** `src/utils/` has only `calConfig.ts`, `fetchServiceData.js`, `printPdf.ts`. There is **no `cn()`/`clsx` class-merge helper** — className composition is done with raw template literals and nested ternaries throughout.

---

## 5. Existing component inventory

104 components in `src/components`. Legend — **Reuse**: usable as-is against the new design; **Extend**: keep the component, swap hardcoded colours for tokens and adjust spacing/typography; **Replace**: structure or visual language differs enough that the new design needs a different component; **Delete**: dead code.

### 5.1 Layout & shell

| Component | Location | Purpose | Reuse | Enhance | Replace |
|---|---|---|---|---|---|
| `Landing` | `components/Landing.tsx` | Page shell: header + folds + `serviceContent` map + footer; owns `isMobile`, `activeTab`, banner state | ✅ structure | ✅ remove hardcoded `bg-[#08090A]`, drop JS `isMobile` in favour of CSS, wrap in ThemeProvider | — |
| `ServiceSection` | `components/ServiceSection.tsx` | 740-line, ~90-prop section dispatcher | ✅ pattern | ✅ **high priority** — extract a section registry map, tokenise wrapper styles | — |
| `NewHeader` | `components/NewHeader.tsx` | Live header: 891 lines, mega-menus, mobile drawer, Cal.com CTA, hardcoded nav arrays | — | — | ⚠️ **Rebuild** — new Figma header (96px, light, 6 nav items, Login + Schedule Demo) differs structurally. Extract nav data to `src/data/` first |
| `Header` | `components/Header.tsx` | Old header | — | — | 🗑 **Delete** — zero imports |
| `Footer` | `components/Footer.tsx` | 385-line footer, data from `src/data/footer.ts` | ✅ data model | — | ⚠️ **Rebuild markup** — new footer has 5 link columns + address block + giant "Effortless" wordmark; keep `footer.ts` |
| `HeaderBanner` | `components/HeaderBanner.tsx` | Dismissible announcement bar (localStorage) | ✅ | ✅ tokens | — |
| `PageTransition` | `components/PageTransition.tsx` | Route-change loading overlay | ✅ | ✅ tokens | — |
| `Metadata` | `components/Metadata.tsx` | `<Head>` / SEO / OG tags | ✅ as-is | — | — |

### 5.2 Buttons, inputs, primitives

| Component | Location | Purpose | Reuse | Enhance | Replace |
|---|---|---|---|---|---|
| `Democta` | `components/Democta.tsx` | Primary CTA — orange fill, hover arrow reveal, Cal.com binding, **behaviour switched by parsing `ctaText` strings** | — | — | ⚠️ **Replace with `<Button variant="primary">`**; the string-sniffing (`ctaText.includes("trial")`) is a bug source. Keep the Cal.com wiring |
| `RedirectCta` | `components/RedirectCta.tsx` | Near-duplicate of `Democta` (orange fill + hover arrow) | — | — | ⚠️ **Fold into `Button`** — clear duplication |
| `SecondaryCta` | `components/SecondaryCta.tsx` | Outlined orange CTA + hover arrow | — | — | ⚠️ **Fold into `Button variant="secondary"`** |
| `ButtonComponent` | `components/FeaturesComponent/ButtonComponent.tsx` | `Democta` + `SecondaryCta` pair | ✅ | ✅ recompose on new `Button` | — |
| `InputField` | `components/InputField.tsx` | RHF text input; hardcoded gradient bg, phone keydown filter | ✅ API | ✅ tokenise, add `<label>` + `aria-invalid` (currently placeholder-only — **a11y issue**) | — |
| `SearchableDropdown` | `components/SearchableDropdown.tsx` | Custom select used by 3 forms | ✅ | ✅ tokens + keyboard nav | — |
| `CheckboxGroup` | `components/CheckboxGroup.tsx` | Checkbox group | — | — | 🗑 **Delete** — zero imports |
| `SearchBar` | `components/SearchBar.tsx` | FAQ search input | ✅ | ✅ tokens | — |
| `Modal` | `components/ModalComponent/Modal.tsx` | Portal-less modal, ESC + scroll lock | ✅ good base | ✅ add focus trap, `role="dialog"`, `aria-modal` | — |
| `TabComponent` | `components/TabComponent.tsx` | Pill tab bar (pricing, categories, compliance) | ✅ | ✅ tokens + `role="tablist"`/keyboard | — |
| `CategoryTabs` | `components/CategoryTabs.tsx` | Thin wrapper over `TabComponent` | ✅ as-is | — | — |
| `PageTitle` | `components/PageTitle.tsx` | Pill eyebrow badge ("Say 👋 to Effortless") | ✅ | ✅ tokens — new design uses the same pattern | — |
| `SuccessToast` / `ErrorToast` | `components/` | Toast bodies | ✅ | ✅ tokens | — |
| `AccordionComponeny` | `components/AccordionComponeny.tsx` | Accordion (mobile fallback for carousel). *Note: filename typo* | ✅ | ✅ tokens, `aria-expanded`, rename | — |

### 5.3 Cards

| Component | Location | Purpose | Verdict |
|---|---|---|---|
| `FeatureCard` + `FeatureWrapper` | `components/` | Icon-topped feature card + its grid | **Extend** — closest match to the new "The Way your Business Grows is Unique" 6-up grid |
| `TopImageCard` | `components/TopImageCard.tsx` | Card with image on top | **Extend** |
| `CommandCenterCard` | `components/Homepage/CommandCenterCard.tsx` | Homepage "Five Command Centers" card | **Extend** — section survives in the new design |
| `ComplianceCard` | `components/ComplianceCard.tsx` | 4-up compliance card | **Extend** |
| `CallBackCardSection` | `components/CallBackCardSection.tsx` | 3-up callback card | **Extend** |
| `IdeasCard` / `USeCaseCard` / `PentCard` / `ServiceList` / `GrowthCards` / `Timeline` | `components/` | Small content cards, 22–55 lines each | **Consolidate** — 6 near-identical icon+title+description cards. Collapse into one `<InfoCard>` with variants |
| `BlogCard` | `components/BlogCard.tsx` | Blog list card | **Extend** |
| `JobCard` | `components/JobCard.tsx` | Careers listing card | **Extend** |
| `CaseStudyCard` / `CaseStudySection` / `CaseStudy` | `components/` | Case-study grid + 431-line detail view | **Extend** |
| `ProfileCard` → `FoundingTeamCard`, `MentorsCard` | `components/` | Person cards (already composed — good pattern) | **Extend** |
| `ProductCard` / `DashboardFeatures` / `usecaseFeatues` / `CompanyValues` / `PartnerList` | `components/` | Section-specific cards | **Extend** |
| `BlogCardSkeleton`, `BlogPageSkeleton`, `ProductsSection`, `ServicePages` | `components/` | — | 🗑 **Delete** — zero imports |

### 5.4 Sections

| Component | Purpose | Verdict |
|---|---|---|
| `FirstFold` | Hero (title, description, CTAs, media) | **Extend** — new hero is a 2-column split (696px text + 596px media + "Works seamlessly with: Tally"). Structure is compatible |
| `UsecaseFold` | Alternate hero for sub-pages | **Extend** |
| `CareersBanner`, `MissionSection`, `FeatureSection`, `ServiceSection`-children | Content sections | **Extend** (tokens + spacing) |
| `Testimonials`, `FounderTestimonials`, `SliderComponent`, `VerticlaSlider`, `HomepageProductCarousel`, `Logocarousel` | Carousels — **split across `react-slick` and `swiper`** | **Extend + consolidate on one library.** Shipping both costs ~2 CSS files and 2 JS bundles |
| `FaqSection` / `FaqComponent` / `Compliance/FaqCompliance` | **Three** FAQ implementations | **Consolidate into one** |
| `PricingSection`, `NewPricingCard`, `PricingFeatures` | Pricing (currently route-disabled — `HIDDEN_SLUGS` in `[...services]`) | **Extend** — new Figma has a `Pricing` frame (1512×2864) |
| `CertificationAwards`, `OfficeLocations`, `DownloadApps`, `SecurityPractices`, `TermsOfService`, `NewPrivacyPolicy` | Static content pages | **Extend** (tokens only) |
| `PrivacyPolicy` | Superseded by `NewPrivacyPolicy` | 🗑 **Delete** — zero imports |
| `Compliance/*` (8 files) | TDS/GST/cost-centre tables & panels | **Extend** |
| `FeaturesComponent/*` (11 files) | Feature-page sections incl. `ROICalculator` | **Extend** |
| `ContactForm`, `DemoForm`, `PartnerForm`, `TrialForm` | 4 forms, ~200 lines each, heavily duplicated | **Consolidate** onto shared field primitives. `TrialForm` is imported by `Landing` but **fully commented out** — decide: revive or delete |
| `BlogWithSidebar` | Blog index + sidebar | **Extend** |
| `YoutubeVideoCard`, `GrowthVideosContent`, `LanguageModalContent` | Media/modal content | **Extend** |

---

## 6. Cross-cutting issues to fix during the rebuild

1. **Zero accessibility attributes** — `grep` for `aria-*` and `role=` across all of `src/` returns **0 hits**. No focus-visible styling, no skip link, no dialog roles, no labelled inputs. Phase 8 is greenfield work.
2. **No performance primitives** — `useMemo`, `useCallback`, `React.memo`, and `next/dynamic` appear **0 times**. Every section re-renders on the `Landing` resize listener. Below-fold sections are not code-split.
3. **45 `: any` annotations** in a `strict: true` project — mostly in `ServiceSection`, `TabComponent`, and the compliance tab map.
4. **Duplicate assets and naming drift** in `public/` (748 flat files) — needs a folder structure (`public/icons/`, `public/images/`, `public/logos/`) and de-duplication before Figma exports land on top.
5. **Two carousel libraries** and **two toast mechanisms** shipping simultaneously.
6. **`globals.css` gradient-border utilities hardcode white** — they will be invisible on the new light background and must become token-driven.
7. **Component name typos** in the public API: `AccordionComponeny`, `BusineesCardSection`, `VerticlaSlider`, `usecaseFeatues`, `USeCaseCard`, `pentCard` (lowercase file).

---

## 7. ⚠️ Blocking gaps in the Figma file

I inspected the whole document (2 pages: `Final` / `Page 2`, ~5.2M characters of node metadata). Three requirements in the brief **cannot be met from this file as it stands**:

| Requirement | What the file actually contains |
|---|---|
| **Dark theme, pixel-perfect** | **No dark-theme frames exist.** Searching every node name in both pages for `Dark`/`dark` returns **0 results**. The new design is light-only (white / light-grey surfaces, orange accent). A dark theme would be *invented*, not implemented — it cannot be pixel-perfect against a design that doesn't exist. |
| **Tablet, pixel-perfect** | **No tablet frames exist.** 0 results for `Tablet`/`tablet`; no frames in the 744–1024px range. |
| **Mobile, pixel-perfect** | Only **4 mobile frames at 440px**, all for *old* pages: `Pricing (Mobile)`, `Partner (Mobile)`, `Careers (Mobile)`, plus one `Menu (Mobile)` component. **There is no mobile design for the new Home page** or any other redesigned page. |
| **Design tokens** | `get_variable_defs` returns `{}` — no published Figma variables. Tokens must be extracted per-node and curated manually. |

**New-design frames that do exist** (all 1440–1512px desktop):
`Home` · `Featured` · `All Product Features` · `Sales` · `Expense` · `Contracts` · `Pricing` · `About Us` · `Certifications & Awards` · `Case Study` · `Contact Us` · `FAQs` · `Blogs` / `Blog` · `Partners` · `Download Apps` · `Footer Design` · `Top Menu Components` · `Features Components` · `Compliance & ROI Calculator`.

---

## 8. Recommended approach

**Token layer first, then pages.** Concretely:

1. **Design-token foundation** — semantic CSS custom properties on `:root` / `[data-theme="dark"]`, surfaced through `tailwind.config.ts` (`colors.surface.*`, `colors.text.*`, `colors.border.*`, `boxShadow`, `borderRadius`, `fontSize` with baked-in line-height/tracking, `spacing`, `screens` incl. a real `tablet` step). Add `darkMode: ["class", '[data-theme="dark"]']`.
2. **Theme runtime** — a small `ThemeProvider` (no new dependency; `localStorage` + `prefers-color-scheme` + an inline anti-FOUC script in `_document.tsx`) plus a header toggle.
3. **Primitive layer** — `Button` (folds in `Democta`/`RedirectCta`/`SecondaryCta`), `Container`, `Section`, `Heading`/`Text`, `InfoCard`, `Icon`, plus a `cn()` helper. Every primitive consumes tokens only.
4. **Shell** — new `Header` + `Footer` from the Figma frames.
5. **Home page** — section by section against `1548:28466`, reusing/extending the components marked ✅ above.
6. **Subsequent pages** — repeat, with the token and primitive layers already paid for.

Steps 1–3 are the expensive, one-time part; they are also what makes "no hardcoded values" and "theme switching updates every component" achievable rather than aspirational.

---

## 9. Deletion list (safe — verified zero imports)

```
src/components/Header.tsx            (224 lines, superseded by NewHeader)
src/components/PrivacyPolicy.tsx     (336 lines, superseded by NewPrivacyPolicy)
src/components/BlogCardSkeleton.tsx  (29 lines)
src/components/BlogPageSkeleton.tsx  (48 lines)
src/components/CheckboxGroup.tsx     (46 lines)
src/components/ProductsSection.tsx   (48 lines)
src/components/ServicePages.tsx      (8 lines)
```
Plus: decide the fate of `TrialForm.tsx` (218 lines, imported by `Landing` but entirely commented out).
