/**
 * Pricing detail page content — Figma "Effortless Procurement" (2410:56867)
 * and "Effortless Sales" (2410:54564).
 *
 * Both pages share the same skeleton: the hero and platform card from
 * /pricing, a Platform Extensions band, a Choose Your Edition band, the
 * feature comparison table (src/data/pricingTables.ts) and the Get Started
 * band. Only the content differs, so both are described by one shape.
 *
 * The section descriptions in the Figma layer names are stale — every one
 * reads "From unreliable messages to verified field intelli", which is Sales
 * page copy. The rendered frames are authoritative and are what is used here.
 */
import type { PricingTableSection } from "./pricingTables";
import { procurementComparison, salesComparison } from "./pricingTables";

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
  platformIndex: 0 | 1;
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
    items: [
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
    ],
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
