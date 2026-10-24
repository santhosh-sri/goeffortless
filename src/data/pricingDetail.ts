/**
 * Pricing detail page content — Figma "Effortless Procurement" (2410:56867),
 * "Effortless Sales" (2410:54564) and "Effortless One" (3212:15820).
 *
 * All three pages share the same skeleton: the hero and platform card from
 * /pricing, a Platform Extensions band, a Choose Your Edition band, the
 * feature comparison table (src/data/pricingTables.ts) and the Get Started
 * band. Only the content differs, so all are described by one shape.
 *
 * The section descriptions in the Figma layer names are stale — every one
 * reads "From unreliable messages to verified field intelli", which is Sales
 * page copy. The rendered frames are authoritative and are what is used here.
 */
import type { PricingTableSection } from "./pricingTables";
import {
  oneComparison,
  procurementComparison,
  salesComparison,
} from "./pricingTables";

export interface PricingExtension {
  /** 40px accent glyph, top-left of the card (Figma 2426:70026). */
  icon: string;
  chip: string;
  name: string;
  subtitle: string;
  flow: string;
  rows: { label: string; value: string }[];
}

export interface PricingEdition {
  /** 56px plan illustration beside the price (Figma 2410:58357). */
  icon: string;
  name: string;
  price: string;
  users: string;
  terms: string;
  setup: string;
  /** `optional` swaps the accent tick for the hollow marker (Figma 2514:80584). */
  includes: { label: string; value: string; optional?: boolean }[];
  extraUsers: string;
  cta: string;
  ribbon?: string;
  featured?: boolean;
}

export interface PricingDetail {
  slug: string;
  /** Index into `pricingPlatforms` — Procurement, Sales, One. */
  platformIndex: 0 | 1 | 2;
  extensions: {
    eyebrow: string;
    title: string;
    accentTitle: string;
    description: string;
    items: PricingExtension[];
  };
  editions: {
    eyebrow: string;
    title: string;
    accentTitle: string;
    description: string;
    plans: PricingEdition[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    accentTitle: string;
    description: string;
    sections: PricingTableSection[];
  };
}

const CLAIMS_EXTENSION: PricingExtension = {
  icon: "/assets/pricing/ext-claims.svg",
  chip: "Add-On",
  name: "Effortless Claims",
  subtitle: "Travel & expense reimbursements",
  flow: "Employee App -> Policy Budget Check -> Approval -> Reimbursement -> Tally Sync -> Dashboard",
  rows: [
    { label: "Grow & Scale", value: "Included" },
    { label: "Onboarding fee", value: "Waived" },
  ],
};

/** Sales and One bolt on the same three extensions (Figma 2426:70370, 3212:15874). */
const SALES_EXTENSIONS: PricingExtension[] = [
  {
    icon: "/assets/pricing/ext-buyer-commerce.svg",
    chip: "Add-On",
    name: "Effortless Buyer Commerce",
    subtitle: "Dealer self-service ordering portal",
    flow: "Branded Catalogue (Unlimited: Web & Mobile App) -> Self orders -> Live invoices, Payables & SOA”",
    rows: [
      { label: "Grow", value: "₹1.54 L" },
      { label: "Scale", value: "Included" },
      { label: "Onboarding fee (Grow)", value: "₹48,000" },
      { label: "Onboarding fee (Scale)", value: "Waived" },
    ],
  },
  CLAIMS_EXTENSION,
  {
    icon: "/assets/pricing/ext-contracts.svg",
    chip: "Add-On",
    name: "Effortless Contracts",
    subtitle: "Recurring billing & renewals",
    flow: "Create Contract -> Renewal Automation -> Compliance & Audit -> Tally Sync -> Real-time Dashboard",
    rows: [
      { label: "Grow & Scale", value: "Included" },
      { label: "Onboarding fee", value: "Waived" },
    ],
  },
];

const GROW_TERMS =
  "Per month with annual subscription cost (₹1.54 L billed up front). ₹14,373 per month, if billed Half-yearly.";
const SCALE_TERMS =
  "Per month with annual subscription cost (₹3,60,000 L billed up front). ₹33,600 per month, if billed Half-yearly.";

export const pricingProcurement: PricingDetail = {
  slug: "procurement",
  platformIndex: 0,
  extensions: {
    eyebrow: "Platform Extensions",
    title: "Bolt on as the",
    accentTitle: "desk needs it",
    description:
      "Every extension below is available on top of above primary products.",
    items: [CLAIMS_EXTENSION],
  },
  editions: {
    eyebrow: "Choose Your Edition",
    title: "Priced by the desk, not the",
    accentTitle: "seat count",
    description:
      "Both editions include Claims and Contracts. Scale adds Buyer Commerce and higher limits across the board.",
    plans: [
      {
        icon: "/assets/pricing/plan-grow.svg",
        name: "Grow",
        price: "₹12,833",
        users: "15 named users",
        terms: GROW_TERMS,
        setup: "+ ₹48,000 one-time setup fee",
        includes: [{ label: "Claims", value: "Included" }],
        extraUsers: "Extra users · ₹3,000 / user",
        cta: "Book Demo",
      },
      {
        icon: "/assets/pricing/plan-scale.svg",
        name: "Scale",
        price: "₹30,000",
        users: "50 named users",
        terms: SCALE_TERMS,
        setup: "+ ₹1,24,000 one-time setup fee",
        includes: [{ label: "Claims", value: "Included" }],
        extraUsers: "Extra users · ₹3,000 / user",
        cta: "Book Demo",
        ribbon: "Most Complete",
        featured: true,
      },
    ],
  },
  comparison: {
    eyebrow: "Line By Line · 11 Modules, 126 Features",
    title: "Compare Every",
    accentTitle: "Feature",
    description:
      "The full ledger, module by module. Open a section to see exactly what changes between Grow and Scale.",
    sections: procurementComparison,
  },
};

export const pricingSales: PricingDetail = {
  slug: "sales",
  platformIndex: 1,
  extensions: {
    eyebrow: "Platform Extensions",
    title: "Bolt on as the",
    accentTitle: "desk needs it",
    description:
      "Every extension below is available on top of above primary products.",
    items: SALES_EXTENSIONS,
  },
  editions: {
    eyebrow: "Choose Your Edition",
    title: "Priced by the desk, not the",
    accentTitle: "seat count",
    description:
      "Both editions include Claims and Contracts. Scale adds Buyer Commerce and higher limits across the board.",
    plans: [
      {
        icon: "/assets/pricing/plan-grow.svg",
        name: "Grow",
        price: "₹12,833",
        users: "15 named users",
        terms: GROW_TERMS,
        setup: "+ ₹48,000 one-time setup fee",
        includes: [
          { label: "Claims", value: "Included" },
          { label: "Contracts", value: "Included" },
          { label: "Buyer Commerce", value: "Optional · ₹1.54 L", optional: true },
        ],
        extraUsers: "Extra users · ₹3,000 / user",
        cta: "Book Demo",
      },
      {
        icon: "/assets/pricing/plan-scale.svg",
        name: "Scale",
        price: "₹30,000",
        users: "50 named users",
        terms: SCALE_TERMS,
        setup: "+ ₹1,24,000 one-time setup fee",
        includes: [
          { label: "Claims", value: "Included" },
          { label: "Contracts", value: "Included" },
          { label: "Buyer Commerce", value: "Included" },
        ],
        extraUsers: "Extra users · ₹3,000 / user",
        cta: "Book Demo",
        ribbon: "Most Complete",
        featured: true,
      },
    ],
  },
  comparison: {
    eyebrow: "Line By Line · 11 Modules, 126 Features",
    title: "Compare Every",
    accentTitle: "Feature",
    description:
      "The full ledger, module by module. Open a section to see exactly what changes between Grow and Scale.",
    sections: salesComparison,
  },
};

/**
 * Effortless One — Figma 3212:15820. Both primary products in one
 * subscription: the Sales extensions, higher edition prices, and a comparison
 * table that carries the Procurement modules alongside the Sales ones.
 */
export const pricingOne: PricingDetail = {
  slug: "effortless-one",
  platformIndex: 2,
  extensions: {
    eyebrow: "Platform Extensions",
    title: "Bolt on as the",
    accentTitle: "desk needs it",
    description:
      "Every extension below is available on top of above primary products.",
    items: SALES_EXTENSIONS,
  },
  editions: {
    eyebrow: "Choose Your Edition",
    title: "Priced by the desk, not the",
    accentTitle: "seat count",
    description:
      "Both editions include Claims and Contracts. Scale adds Buyer Commerce and higher limits across the board.",
    plans: [
      {
        icon: "/assets/pricing/plan-grow.svg",
        name: "Grow",
        price: "₹18,750",
        users: "15 named users",
        terms:
          "Per month with annual subscription cost (₹2,25,000 L billed up front). ₹21,000 per month, if billed Half-yearly.",
        setup: "+ ₹72,000 one-time setup fee",
        includes: [
          { label: "Claims", value: "Included" },
          { label: "Contracts", value: "Included" },
          { label: "Buyer Commerce", value: "Included" },
        ],
        extraUsers: "Extra users · ₹3,000 / user",
        cta: "Book Demo",
      },
      {
        icon: "/assets/pricing/plan-scale.svg",
        name: "Scale",
        price: "₹43,500",
        users: "50 named users",
        terms:
          "Per month with annual subscription cost (₹5,22,000 L billed up front). ₹48,720 per month, if billed Half-yearly.",
        setup: "+ ₹1,80,000 one-time setup fee",
        includes: [
          { label: "Claims", value: "Included" },
          { label: "Contracts", value: "Included" },
          { label: "Buyer Commerce", value: "Included" },
        ],
        extraUsers: "Extra users · ₹3,000 / user",
        cta: "Book Demo",
        ribbon: "Most Complete",
        featured: true,
      },
    ],
  },
  comparison: {
    // Figma 3216:18829 keeps the Sales eyebrow verbatim; the frame itself
    // carries 12 modules.
    eyebrow: "Line By Line · 11 Modules, 126 Features",
    title: "Compare Every",
    accentTitle: "Feature",
    description:
      "The full ledger, module by module. Open a section to see exactly what changes between Grow and Scale.",
    sections: oneComparison,
  },
};
