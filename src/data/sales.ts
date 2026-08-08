/**
 * Sales & Collections page content — Figma
 * "Sales & Collections (The Revenue Engine)", node 1636:2296.
 */
import type {
  ProductHeroData,
  ProductFeatureHeading,
  ProductFeatureRow,
  ProductWhyThisMattersData,
  ProductVideoData,
  ProductClosingCtaData,
} from "@/components/pages/product";

/** Hero — Figma node 1699:2449. */
export const salesHero: ProductHeroData = {
  badges: [
    { label: "Primary Product", tone: "success" as const },
    { label: "The Revenue Engine", tone: "surface" as const },
  ],
  title: "Stop Asking",
  accentTitle: "“Where is the Order?”",
  description:
    "Arm your fleet-on-street with an AI Powered mobile command center. Track live visits with authenticated check-ins, automate complex scheme logic on the fly, automate collections and instantly block orders for non-paying accounts.",
  ctaLabel: "See the Field App in Action",
  media: {
    src: "/assets/sales/hero-panel.png",
    alt: "Effortless field app showing a GPS mobile check-in screen",
    width: 586,
    height: 572,
  },
};

/** Feature Deep Dive heading — Figma node 1699:17373. */
export const salesFeatureHeading: ProductFeatureHeading = {
  eyebrow: "Feature",
  title: "Feature",
  accentTitle: "Deep Dive",
  description: "Layers of protection for every rupee that leaves your company",
};

/**
 * Ten 520px feature rows — Figma nodes under 1699:17380, in order:
 * 1699:17381, 2444:79151, 1699:18281, 1699:19178, 1699:20078,
 * 1699:24661, 1699:20979, 1699:21878, 1699:23676, 1699:24579.
 *
 * Rows alternate media side, starting with media on the left.
 */
export const salesFeatureRows: ProductFeatureRow[] = [
  {
    eyebrow: "Do Customer KYC",
    title: "Every Customer, Verified to the Core.",
    body: [
      "Onboard Compliant Customer, set up approval process, agreed credit limit, Assign specific price-lists, maintain relevant KYC documents (Cancelled Cheque, MSME certificate, LDF copies, GST Certificate etc.)",
    ],
    media: "/assets/sales/feature-01.png",
    mediaAlt: "Customer information setup screen with GSTIN verification",
  },
  {
    eyebrow: "Protect Sensitive Customer Data",
    title: "Every Reps his Assigned Customers",
    body: [
      "Assign specific customers/ product categories to your respective rep. Overlap - No Confusion. This ensures no overlaps and no missed visits.",
    ],
    media: "/assets/sales/feature-02.png",
    mediaAlt: "Rep-to-customer assignment screen",
  },
  {
    eyebrow: "The Sales Discipline",
    title: "No Wrong Practice. Ever.",
    body: [
      "When a rep reaches the customer’s Geo location, he simply taps does Live GPS & Live-photo check-in. You know the visit actually happened — no WhatsApp updates needed.",
    ],
    media: "/assets/sales/feature-03.png",
    mediaAlt: "Live GPS and photo check-in screen",
  },
  {
    eyebrow: "The Collections Firewall",
    title: "Get Paid Before You Sell.",
    body: [
      "Reps see the client’s Real-Time Outstanding, Credit Limit, Overdues before they take an order. The system prompts collection immediately.",
      "If dues are high, the system prompts, — collect first, then order.",
      "No more selling to bad paymasters.",
    ],
    media: "/assets/sales/feature-04.png",
    mediaAlt: "Outstanding and credit limit controls",
  },
  {
    eyebrow: "Customer-wise Price Lists",
    title: "Zero-Error Pricing on the Ground.",
    body: [
      "Manage multiple price lists? No Problem!",
      "Manage Price Lists for Wholesale Buyers separately from Retail Buyers.",
      "International Buyers separately from domestic buyers - etc.",
      "No more margin leakages.",
    ],
    media: "/assets/sales/feature-05.png",
    mediaAlt: "Customer-wise price list configuration",
  },
  {
    eyebrow: "AI Powered The Schemes Engine",
    title: "Zero-Mental Math on the Ground.",
    body: [
      "Your sales reps are not mathematicians. Stop forcing them to use calculators to find the best scheme for customers to drive upsells.",
      "Want to use schemes like “Buy 10 Get 1 Free? 5% Cash Discount? Tiered volume slabs?” Buy A get B Free, Or Bundle like: Buyer A + B Get C free.",
      "The mobile app auto-calculates and applies intricate scheme matrices directly on SKUs, also suggests the next available slab to drive up-sells.",
      "Drive 100s of concurrent schemes based on Product category, time of the day, days of the month - You decide.",
    ],
    media: "/assets/sales/feature-06.png",
    mediaAlt: "Automatic scheme calculation on an order",
  },
  {
    eyebrow: "Real-Time Approval Checkpoints",
    title: "No Calls. No PDFs. Just Approve.",
    body: [
      "Managers get order alerts instantly.",
      "Approve or reject with one tap.",
      "Fast approvals keep dispatch moving without delays.",
      "Approvers get auto reminders on your set intervals for the pending approvals at their desk.",
    ],
    media: "/assets/sales/feature-07.png",
    mediaAlt: "Order approval queue",
  },
  {
    eyebrow: "One-Click Invoice",
    title: "E-Invoices Flow In Automatically",
    body: [
      "Approved orders convert to e-invoices and sync to Tally as sales vouchers instantly.",
      "Have your Invoice Specific UPI QR Code on Invoice for Smoother Collections & Tracking.",
      "Your accountant does zero typing.",
      "Zero mismatch. Zero backlog.",
    ],
    media: "/assets/sales/feature-08.png",
    mediaAlt: "E-invoice with UPI QR code",
  },
  {
    eyebrow: "AI Powered Owner Visibility Panel",
    title: "Orders. Dues. Cash. All in One Screen.",
    body: [
      "Owners see today’s orders, today’s collections, pending by customer, branch-wise and rep-wise performance, scheme-driven sales lift, and cash stuck in overdue customers.",
      "Everything updates in real time.",
    ],
    media: "/assets/sales/feature-09.png",
    mediaAlt: "Owner visibility dashboard",
  },
  {
    eyebrow: "The Final Truth Remains True",
    title: "Tally Stays Updated. Always.",
    body: [
      "Approved Orders, Invoices, and Collections move into Tally without typing.",
      "Masters stay clean, reconciliations stay simple, and audit stays smooth.",
    ],
    media: "/assets/sales/feature-10.png",
    mediaAlt: "Tally sync confirmation",
  },
];

/** "The Reality Check" — Figma node 1699:2638. */
export const salesRealityCheck = {
  eyebrow: "Problem/Solution Split",
  title: "The",
  accentTitle: "Reality Check",
  description: "From unreliable messages to verified field intelligence",
  oldWay: {
    title: "The Old Way",
    subtitle: "Manual steps, slow updates, and constant follow-ups",
    chat: {
      avatar: "/assets/sales/reality-avatar.jpg",
      author: "Sales Rep",
      message: "Sir, took the order. Will share details later.",
      time: "10:42 AM",
    },
    problems: [
      "Unreliable",
      "No stock view",
      "No scheme check",
      "No credit control",
      "No Collection control",
      "No Proactive Workflow in Place",
    ],
  },
  effortlessWay: {
    title: "The Effortless Way",
    subtitle: "Clean handoffs, instant clarity, and faster decisions",
    media: "/assets/sales/reality-phones.png",
    mediaAlt:
      "Three phones showing live location, a sales order with credit limits, and GPS check-in",
  },
};

/** "Why This Matters" — Figma node 1886:41780. */
export const salesWhyThisMatters: ProductWhyThisMattersData = {
  title: "Why This",
  accentTitle: "Matters",
  items: [
    {
      icon: "/assets/sales/why-lost-orders.svg",
      label: "No Lost Orders",
      tone: "accent" as const,
    },
    {
      icon: "/assets/sales/why-discipline.svg",
      label: "No Discipline Violations",
      tone: "violet" as const,
    },
    {
      icon: "/assets/sales/why-growth.svg",
      label: "Enable Pro-Active Growth",
      tone: "success" as const,
    },
  ],
};

/**
 * "See it in Action" — Figma node 1886:41801.
 *
 * The design leaves the player area as an empty white placeholder — no poster,
 * no embed, no video id. Rather than ship a blank box, this reuses the existing
 * "Effortless Sales — Faster Cash, Full Confidence" video already referenced in
 * src/data/landing.json, rendered in the new section's UI.
 */
export const salesSeeItInAction: ProductVideoData = {
  title: "See it in",
  accentTitle: "Action",
  description: "Watch how field teams are transforming their sales operations",
  videoId: "PpCSJ6IGCUI",
};

/** Closing CTA — Figma node 1893:45937. */
export const salesClosingCta: ProductClosingCtaData = {
  title: "Ready to Equip Your",
  accentTitle: "Field Team?",
  description:
    "See how distributors are closing more deals with accurate orders and instant visibility",
  primary: { label: "Book Live Demo" },
  secondary: { label: "See All Features", href: "/allFeatures" },
};
