/**
 * Shared shapes for the product pages.
 *
 * Sales, Purchase & Expenses, Contracts & Billing, Field Staff Claims and
 * Buyer Portal are the same Figma template with different copy: a badged hero,
 * a stack of alternating feature rows, a three-up "Why This Matters", a video
 * band and a closing CTA. Only the section between the hero and the feature
 * rows differs per page, so that one stays page-local.
 */

export interface ProductMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * The looping product demo in the hero.
 *
 * Figma places the recording itself on the card — a rectangle named after the
 * GIF ("GIF Sales & Compliance Page 1", 1904:46170; "Gif Purchase & Expenses
 * 1", 2036:113796) — and nothing else: no device drawn underneath, no static
 * screenshot. The GIFs held in the Figma file are transparent outside the
 * device, so the card's dot pattern runs up to its edge (prototype
 * 1943:63635). The site plays them as alpha video instead of GIF: a VP9 WebM
 * for Chromium and Firefox and an HEVC-with-alpha MOV for Safari, ~300 KB each
 * where the GIF was 4-6 MB. Both are encoded from the Figma GIFs — not the
 * desktop exports, which flatten the ground to white.
 *
 * `card` picks the backdrop: `phone` is 2697:25466 (554×540) with the
 * 258.75×460 recording centred 40px from the top; `laptop` is 2726:9342
 * (636×594), used by Purchase & Expenses, with the recording cropped into a
 * 596×380 window.
 */
export interface ProductHeroDemo {
  webm: string;
  /** HEVC with alpha in a QuickTime container, for Safari. */
  mov: string;
  /** Transparent PNG of the first frame. */
  poster: string;
  /** Intrinsic size of the recording, for the video element. */
  width: number;
  height: number;
  card: "phone" | "laptop";
}

export interface ProductHeroData {
  badges: { label: string; tone: "subtle" | "surface" | "accent" | "success" }[];
  title: string;
  accentTitle: string;
  description: string;
  ctaLabel: string;
  demo: ProductHeroDemo;
}

export interface ProductFeatureHeading {
  eyebrow: string;
  title: string;
  accentTitle: string;
  description: string;
}

export interface ProductFeatureRow {
  eyebrow: string;
  title: string;
  /** One paragraph per entry, matching the design's stacked copy blocks. */
  body: string[];
  /**
   * Green-tick capability list under the body. Contracts & Billing is the only
   * page whose rows carry one, so it is optional rather than a separate row
   * variant.
   */
  checks?: string[];
  /**
   * The 636px-wide media card export, cropped to the card — no margin, no
   * baked shadow; the component draws the card's radius and shadow.
   */
  media: string;
  mediaAlt: string;
  /** Card height in px when a row is taller than the usual 520. */
  mediaHeight?: number;
}

export interface ProductProblemSolutionData {
  eyebrow: string;
  title: string;
  accentTitle: string;
  /** Text after the accent clause — 'The "Expense Leak" Audit'. */
  titleSuffix?: string;
  description: string;
  /** Exactly two: the status quo, then the Effortless equivalent. */
  sides: {
    title: string;
    /** Render the heading in the brand accent (the Effortless side). */
    accent?: boolean;
    subtitle: string;
    media: ProductMedia;
  }[];
}

export interface ProductWhyThisMattersData {
  title: string;
  accentTitle: string;
  items: {
    icon: string;
    label: string;
    tone: "accent" | "violet" | "success";
  }[];
}

export interface ProductVideoData {
  title: string;
  accentTitle: string;
  description: string;
  /** Empty renders the heading alone rather than a blank player. */
  videoId: string;
}

export interface ProductClosingCtaData {
  title: string;
  accentTitle: string;
  description: string;
  primary: { label: string };
  secondary: { label: string; href: string };
}
