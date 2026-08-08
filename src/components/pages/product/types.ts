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

export interface ProductHeroData {
  badges: { label: string; tone: "subtle" | "surface" | "accent" | "success" }[];
  title: string;
  accentTitle: string;
  description: string;
  ctaLabel: string;
  media: ProductMedia;
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
  media: string;
  mediaAlt: string;
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
