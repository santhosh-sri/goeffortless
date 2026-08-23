/**
 * Buyer Portal page content — Figma
 * "Buyer Portal (The Self-Service Engine)", node 1864:15745.
 */
import type {
  ProductHeroData,
  ProductProblemSolutionData,
  ProductFeatureHeading,
  ProductFeatureRow,
  ProductWhyThisMattersData,
  ProductClosingCtaData,
} from "@/components/pages/product";

/** Hero — Figma node 1864:15764. */
export const buyerPortalHero: ProductHeroData = {
  badges: [
    { label: "Add On", tone: "accent" },
    { label: "The Self-Service Engine", tone: "surface" },
  ],
  title: "Stop Being Your",
  accentTitle: "Customer’s Help-Desk",
  description:
    "Stop WhatsApp chaos. Transition your regular B2B buyers to a white-labeled, 24/7 web and mobile ordering portal. Let them browse your inventory catalogue, self-place orders within your predefined MoQ Or Price rules, and track their own invoices/payables/statements—without distracting your sales staff.",
  ctaLabel: "See the Field App in Action",
  demo: {
    webm: "/assets/buyer-portal/hero-demo.webm",
    mov: "/assets/buyer-portal/hero-demo.mov",
    poster: "/assets/buyer-portal/hero-demo-poster.png",
    width: 480,
    height: 854,
    card: "phone",
  },
};

/** 'The "Dependency" Flip' — Figma node 1864:16668. */
export const buyerPortalProblemSolution: ProductProblemSolutionData = {
  eyebrow: "Problem/Solution Split",
  title: "The",
  accentTitle: "“Dependency”",
  titleSuffix: "Flip",
  description: "From Manual updates to Zero Friction intelligence",
  sides: [
    {
      title: "The Friction",
      subtitle: "Manual steps, slow updates, and constant follow-ups",
      media: {
        src: "/assets/buyer-portal/split-old.png",
        alt: "A buyer on the phone waiting for an account statement to be emailed",
        width: 672,
        height: 896,
      },
    },
    {
      title: "The Freedom",
      accent: true,
      subtitle: "Instant Accessibility. Zero Friction.",
      media: {
        src: "/assets/buyer-portal/split-new.png",
        alt: "Three phones showing the buyer portal statement, dashboard and payables",
        width: 1016,
        height: 896,
      },
    },
  ],
};

/** Feature Deep Dive heading — Figma node 1864:16696. */
export const buyerPortalFeatureHeading: ProductFeatureHeading = {
  eyebrow: "The Value Pillars",
  title: "Feature",
  accentTitle: "Deep Dive",
  description: "Your own B2B Amazon like portal & App",
};

/**
 * Seven 520px feature rows — Figma nodes under 1864:16703, in order:
 * 1864:16704, 1864:17600, 1864:18496, 1864:19392, 1864:20289,
 * 1864:21189, 1864:22088.
 *
 * Rows alternate media side, starting with media on the left.
 */
export const buyerPortalFeatureRows: ProductFeatureRow[] = [
  {
    eyebrow: "Branded Catalogue & Rule-Based Self-Ordering",
    title: "Wholesaling on Autopilot.",
    body: [
      "Showcase your dynamic digital product assortment. The portal strictly enforces your custom Minimum Order Quantities (MoQ), UOMs and locks in customer-specific tiered pricing layouts automatically",
    ],
    media: "/assets/buyer-portal/feature-01.png",
    mediaAlt: "Buyer portal home screen with catalogue and recent orders",
  },
  {
    eyebrow: "The On-Demand Digital Ledger (SOA)",
    title: "Eliminate Month-End Reconciliation Disputes.",
    body: [
      "Stop handling endless calls for lost invoices. Your buyers can securely access, filter, and extract their live Statement of Accounts (SOA) instantly compiled straight from your core ledger database.",
    ],
    media: "/assets/buyer-portal/feature-02.png",
    mediaAlt: "Statement of account listing all transactions",
  },
  {
    eyebrow: "Real-time Payables Tracking",
    title: "Remove: What’s my payables? question.",
    body: [
      "Buyer specific Payables Ledger with Invoice-wise payment history, and current outstanding Linked to your Tally",
    ],
    media: "/assets/buyer-portal/feature-03.png",
    mediaAlt: "Payables screen with invoice-wise outstanding amounts",
  },
  {
    eyebrow: "Real-Time Approval Checkpoints",
    title: "No Calls. No PDFs. Just Approve.",
    body: [
      "Sales reps get placed order alerts instantly. Approve or reject with one tap. Fast approvals keep dispatch moving without delays.",
      "Approvers get auto reminders on your set intervals for the pending approvals at their desk.",
    ],
    media: "/assets/buyer-portal/feature-04.png",
    mediaAlt: "Unapproved invoice awaiting a one-tap approval",
  },
  {
    eyebrow: "One-Touch Re-ordering & Scheme Visibility",
    title: "Accelerate Velocity on Repeat Purchases.",
    body: [
      "Recurring buyers can look into their historical procurement ledger and hit “Repeat Order” inside 3 seconds.",
      "The engine transparently highlights active bulk schemes, MoQ, incentivizing larger average cart sizes without human sales intervention.",
      "Buyer can see, Live Status of placed Orders (Pending / Partially fulfilled / Fulfilled).",
    ],
    media: "/assets/buyer-portal/feature-05.png",
    mediaAlt: "Order history with repeat-order and collection activity",
  },
  {
    eyebrow: "AI Powered Owner Visibility Panel",
    title: "Orders. Dues. Cash. All in One Screen.",
    body: [
      "Owners see Today's orders  Today's collections  Pending by customer  Scheme-driven sales lift  Cash stuck in overdue customers  Everything updates in real time.",
    ],
    media: "/assets/buyer-portal/feature-06.png",
    mediaAlt: "Owner dashboard with orders, collections and overdue totals",
  },
  {
    eyebrow: "The Final Truth Remains True",
    title: "Tally Stays Updated. Always.",
    body: [
      "Approved Orders, Invoices, and Collections move into Tally without typing.",
    ],
    media: "/assets/buyer-portal/feature-07.png",
    mediaAlt: "Two-way sync between Effortless and Tally Prime",
  },
];

/** "Why This Matters" — Figma node 1941:63469. */
export const buyerPortalWhyThisMatters: ProductWhyThisMattersData = {
  title: "Why This",
  accentTitle: "Matters",
  items: [
    {
      icon: "/assets/buyer-portal/why-customers.svg",
      label: "Happy Customers",
      tone: "accent",
    },
    {
      icon: "/assets/buyer-portal/why-self-service.svg",
      label: "Self Service",
      tone: "violet",
    },
    {
      icon: "/assets/buyer-portal/why-growth.svg",
      label: "Enable Pro-Active Growth",
      tone: "success",
    },
  ],
};

/** Closing CTA — Figma node 1941:63495. */
export const buyerPortalClosingCta: ProductClosingCtaData = {
  title: "Ready to Equip Your",
  accentTitle: "Regular Customers?",
  description:
    "See how finance teams are saving hours and catching errors before they become losses",
  primary: { label: "Book Live Demo" },
  secondary: { label: "See All Features", href: "/allFeatures" },
};
