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
 * A product recording shown in the hero mockup.
 *
 * The recordings are not raw screen captures — each one is already composited
 * inside its own device mockup (a phone, or a MacBook for Purchase & Expenses)
 * on a white field. Dropping one into the panel's screen would therefore nest a
 * phone inside a phone, so instead the clip is scaled and offset until *its*
 * device lands exactly on the panel's device, and its white margin is clipped.
 *
 * `device` is the device's rect as a percentage of the panel image, measured
 * off the export's own silhouette so the clip lands exactly on the mockup Figma
 * drew. Measure both sides the same way: reading the panel's laptop from its
 * dark screen alone while the clip's bounding box included the base once made
 * the laptop render oversized and burst out of the panel.
 *
 * `inset` is where the device sits inside the recording, as 0-1 fractions of
 * the video frame.
 */
export interface ProductScreenVideo {
  mp4: string;
  webm: string;
  poster: string;
  device: { left: number; top: number; width: number; height: number };
  inset: { x: number; y: number; w: number; h: number };
}

export interface ProductHeroData {
  badges: { label: string; tone: "subtle" | "surface" | "accent" | "success" }[];
  title: string;
  accentTitle: string;
  description: string;
  ctaLabel: string;
  media: ProductMedia;
  /** Recording layered into the mockup's screen, when the page has one. */
  video?: ProductScreenVideo;
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
  media: string;
  mediaAlt: string;
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
