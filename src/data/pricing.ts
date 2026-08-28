/**
 * Pricing landing page content — Figma "Pricing", node 2426:60796.
 *
 * Several button labels in the Figma layer names are stale ("Start Free Trial"
 * on all three Get Started cards); the rendered frame is authoritative and is
 * what is transcribed here.
 */

export interface PricingPlatform {
  name: string;
  chip: string;
  title: string;
  /** The end-to-end flow, rendered as one line in a tinted box. */
  flow: string;
  priceLabel: string;
  price: string;
  href: string;
}

/** Hero — Figma node 2426:60815. */
export const pricingHero = {
  eyebrow: "Two platforms · One ledger",
  title: "Choose your business platform.",
  accentTitle: "Expand as you grow.",
  description:
    "Start with Sales or Procurement. Add Buyer Commerce, Claims, or Contracts whenever the business is ready — every module posts to the same books.",
};

/** The two platform cards — Figma nodes 2426:61003 / 2426:61004. */
export const pricingPlatforms: PricingPlatform[] = [
  {
    name: "Effortless Procurement",
    chip: "Primary Product",
    title: "Complete Procure-To-Pay",
    flow: "Vendor KYC -> PR -> PO (Cost Centre) -> 3-Way Match (PO vs Vendor Bill vs GRN) -> Over-billing Alerts -> Tax Compliance -> Approvals -> Payments & Settlements -> Tally Sync -> Dashboards",
    priceLabel: "Starts at",
    price: "₹12,833/M",
    href: "/pricing/procurement",
  },
  {
    name: "Effortless Sales",
    chip: "Primary Product",
    title: "Complete Order-To-Cash",
    flow: "Customer KYC -> Verified Visit -> Credit-Checked Order -> Auto-Scheme -> E-Invoice Delivery -> Collections -> Banking -> Tally Sync -> Dashboards",
    priceLabel: "Starts at",
    price: "₹12,833/M",
    href: "/pricing/sales",
  },
];

/**
 * "Growth Doesn't Wait" — Figma node 2426:60966. Shared with both pricing
 * detail pages, which render the identical band.
 */
export const pricingGetStarted = {
  eyebrow: "Get Started",
  title: "Growth Doesn’t Wait.",
  accentTitle: "Why Should You?",
  description: "Let Effortless help you scale—without the scramble.",
  cards: [
    {
      title: "Talk to Us",
      description:
        "Have questions about how Effortless can transform your business? Our team of experts is ready to help.",
      points: [
        "Schedule a personalized demo",
        "Get your specific questions answered",
        "Discuss your unique business challenges",
      ],
      cta: "Request a Callback",
      ctaVariant: "secondary" as const,
      footnote: "We'll reach out within 4 business hours",
    },
    {
      title: "Experience Effortless",
      description:
        "See Effortless in action with a personalized demo tailored to your business.",
      points: [
        "No generic presentations",
        "Focus on your specific challenges",
        "Get a clear picture of your potential ROI",
      ],
      cta: "Schedule Demo",
      ctaVariant: "secondary" as const,
      footnote: "Choose a time that works for you",
    },
    {
      title: "Your Growth Engine Starts Here",
      description:
        "More growth, less overhead. Discover how India’s fastest growing businesses do it.",
      points: [
        "Automate invoicing, collections & approvals",
        "Track sales team performance",
        "Get cashflow clarity in real-time",
      ],
      cta: "See it in Action",
      ctaVariant: "primary" as const,
      footnote: "Clarity in 30 minutes. No pressure, just proof.",
    },
  ],
};
