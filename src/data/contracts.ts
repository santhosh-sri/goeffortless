/**
 * Contracts & Billing page content — Figma
 * "Contracts & Billing (The Recurring Revenue Model)", node 1943:71185.
 */
import type {
  ProductHeroData,
  ProductFeatureHeading,
  ProductFeatureRow,
  ProductWhyThisMattersData,
  ProductVideoData,
  ProductClosingCtaData,
} from "@/components/pages/product";

/** Hero — Figma node 1943:71204. */
export const contractsHero: ProductHeroData = {
  badges: [
    { label: "Add On", tone: "accent" },
    { label: "The Recurring Revenue Module", tone: "surface" },
  ],
  title: "Put Your Revenue",
  accentTitle: "on Autopilot.",
  description:
    "Never miss a renewal. Automate recurring Proformas, Invoices, and Reminders. Perfect for AMCs, Rentals, and Retainers.",
  ctaLabel: "Automate Your Billing",
  media: {
    src: "/assets/contracts/hero-panel.png",
    alt: "Effortless recurring invoice setup screen with billing cycle options",
    width: 1336,
    height: 1144,
  },
  video: {
    mp4: "/assets/contracts/hero-demo.mp4",
    webm: "/assets/contracts/hero-demo.webm",
    poster: "/assets/contracts/hero-demo-poster.jpg",
    device: { left: 34.43, top: 10.49, width: 31.06, height: 77.45 },
    inset: { x: 0.0852, y: 0.0167, w: 0.8278, h: 0.9656 },
  },
};

/**
 * "Two Modes. One Platform." — Figma node 1985:112327.
 *
 * The band that replaces the Reality Check on this page: two billing
 * workflows side by side, each a numbered step card followed by a rationale
 * and a capability checklist.
 */
export const contractsBillingModes = {
  eyebrow: "Flexible Billing Workflows",
  title: "Two Modes.",
  accentTitle: "One Platform.",
  description: "Choose the billing workflow that fits your business",
  reasonLabel: "Why this mode exists:",
  supportsLabel: "Supports:",
  modes: [
    {
      title: "Proforma First (Tax Safe)",
      accent: false,
      steps: [
        "Send Proforma with Payment link or QR",
        "Customer Pays",
        "GST Invoice in One Click",
      ],
      reason:
        "Use when you want to avoid early GST liability. Proforma goes first, payment clears, invoice is created instantly.",
      supports: [
        "Recurring Contracts",
        "Recurring Proformas",
        "1-Click Conversion to GST Invoice",
        "Pay Now Links",
        "E-invoice support",
        "Pro-Active Custom Contract Renewal Reminders",
      ],
    },
    {
      title: "Invoice First (Fully Automatic)",
      accent: true,
      steps: [
        "Auto-Generate GST Invoice with Payment Link or QR",
        "Auto-Send via WhatsApp + Email",
      ],
      reason:
        "For fixed retainers and trusted clients where the invoice should fire on the exact date without manual work.",
      supports: [
        "Recurring Invoices",
        "Automated Delivery",
        "Domain-branded communication",
        "E-invoice generation",
        "Auto-share via WhatsApp & Email",
        "Pro-Active Custom Contract Renewal Reminders",
      ],
    },
  ],
};

/** Feature Deep Dive heading — Figma node 1943:72111. */
export const contractsFeatureHeading: ProductFeatureHeading = {
  eyebrow: "The Value Pillars",
  title: "Feature",
  accentTitle: "Deep Dive",
  description: "Powerful capabilities that keep recurring revenue predictable",
};

/**
 * Seven 520px feature rows — Figma nodes under 1943:72118, in order:
 * 1943:72119, 1943:73040, 1943:73956, 1943:74871, 1943:75787,
 * 1943:76697, 1943:77649.
 *
 * Rows alternate media side, starting with media on the left.
 */
export const contractsFeatureRows: ProductFeatureRow[] = [
  {
    eyebrow: "Once for All",
    title: "Create Once. Bill Forever.",
    body: [
      "Set frequency, duration, service start date, billing date, billing mode and payment mode once. Effortless builds every cycle automatically—no calendar reminders, no spreadsheets.",
    ],
    checks: [
      "Recurring Contracts",
      "Recurring Proformas",
      "GST Invoicing",
      "1-Click Conversion (Proforma → Invoice)",
    ],
    media: "/assets/contracts/feature-01.png",
    mediaAlt: "Recurring invoice setup with billing cycle and schedule preview",
  },
  {
    eyebrow: "Autopilot",
    title: "Smart Reminders",
    body: [
      "WhatsApp + Email reminders fire automatically. No manual follow-ups, no missed renewals.",
    ],
    checks: [
      "Automated Reminders",
      "Auto-Share of Invoices",
      "Domain-Branded Delivery (from your business ID)",
    ],
    media: "/assets/contracts/feature-02.png",
    mediaAlt: "Contract renewal reminder schedule before and after expiry",
  },
  {
    eyebrow: "Multi Choice",
    title: "Two Billing Styles, One System",
    body: [
      "Choose Proforma-first or Invoice-first. Both run smoothly in the same dashboard.",
    ],
    checks: ["E-invoicing", "1-Click Invoice Creation", "Pay Now Links"],
    media: "/assets/contracts/feature-03.png",
    mediaAlt: "Approved proforma with one-click conversion to a tax invoice",
  },
  {
    eyebrow: "Multi GSTIN",
    title: "Multi-Branch Visibility",
    body: [
      "Assign each contract to the correct GSTN or branch. HQ gets a consolidated view, branches see only their data.",
    ],
    checks: ["Multi-GSTN", "Multi-Branch", "Multi-outlet Controls"],
    media: "/assets/contracts/feature-04.png",
    mediaAlt: "Sales order screen selecting a cost centre location",
  },
  {
    eyebrow: "Weather Forecast",
    title: "Forecast in One Screen",
    body: [
      "Know your upcoming renewals, overdue contracts, expected cash, and customer history in seconds.",
    ],
    checks: ["Revenue Dashboard", "Collection Dashboard"],
    media: "/assets/contracts/feature-05.png",
    mediaAlt: "Dashboard charting sales against collections",
  },
  {
    eyebrow: "The Final Truth Remains True",
    title: "Tally Sync That Just Works",
    body: [
      "Invoices, Proformas, Payments — everything flows into Tally post approvals without conflict. No duplicate voucher numbers. No mismatches.",
    ],
    checks: ["Tally Sync", "Voucher Numbering Sync"],
    media: "/assets/contracts/feature-06.png",
    mediaAlt: "Two-way sync between Effortless and Tally Prime",
  },
  {
    eyebrow: "Mr Predictable",
    title: "Cash Flow That Follows Your Billing",
    body: [
      "When billing becomes predictable, monthly inflow becomes predictable too.",
      "Now your contracts run on autopilot.",
    ],
    media: "/assets/contracts/feature-07.png",
    mediaAlt: "Dashboard showing monthly revenue analysis",
  },
];

/** "Why This Matters" — Figma node 1943:78816. */
export const contractsWhyThisMatters: ProductWhyThisMattersData = {
  title: "Why This",
  accentTitle: "Matters",
  items: [
    {
      icon: "/assets/contracts/why-renewal.svg",
      label: "Never Miss a Renewal",
      tone: "accent",
    },
    {
      icon: "/assets/contracts/why-manual-billing.svg",
      label: "Zero Manual Billing",
      tone: "violet",
    },
    {
      icon: "/assets/contracts/why-cash-flow.svg",
      label: "Predictable Cash Flow",
      tone: "success",
    },
  ],
};

/**
 * "See it in Action" — Figma node 1943:78837.
 *
 * The design leaves the player area an empty white placeholder, so this reuses
 * the Contracts & Billing video already referenced in src/data/contracts.json.
 */
export const contractsSeeItInAction: ProductVideoData = {
  title: "See it in",
  accentTitle: "Action",
  description: "Watch how business are automating their recurring revenues",
  videoId: "H845WIK8seA",
};

/** Closing CTA — Figma node 1943:78842. */
export const contractsClosingCta: ProductClosingCtaData = {
  title: "Ready to Automate Your",
  accentTitle: "Recurring Revenue?",
  description:
    "See how finance teams are saving hours and catching errors before they become losses",
  primary: { label: "Book Live Demo" },
  secondary: { label: "See All Features", href: "/allFeatures" },
};
