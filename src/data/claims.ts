/**
 * Field Staff Claims & Reimbursements page content — Figma
 * "Field Staff Claims & Reimbursements (The Frictionless Fleet)",
 * node 1864:23195.
 */
import type {
  ProductHeroData,
  ProductProblemSolutionData,
  ProductFeatureHeading,
  ProductFeatureRow,
  ProductWhyThisMattersData,
  ProductClosingCtaData,
} from "@/components/pages/product";

/** Hero — Figma node 1864:23214. */
export const claimsHero: ProductHeroData = {
  badges: [
    { label: "Add On", tone: "accent" },
    { label: "The Frictionless Fleet", tone: "surface" },
  ],
  title: "Happy Field Teams.",
  accentTitle: "Zero Expense Leakage.",
  description:
    "Put an end to crumpled fuel receipts, fabricated mileage logs, and painful Excel calculation sheets. Automate local conveyance, travel claims, and daily allowances with robust compliance safeguards.",
  ctaLabel: "See the Field App in Action",
  media: {
    src: "/assets/claims/hero-panel.png",
    alt: "Effortless claims app showing expense reimbursement screens",
    width: 1336,
    height: 1144,
  },
};

/** 'The "Expense Leak" Audit' — Figma node 1864:24118. */
export const claimsProblemSolution: ProductProblemSolutionData = {
  eyebrow: "Problem/Solution Split",
  title: "The",
  accentTitle: "“Expense Leak”",
  titleSuffix: "Audit",
  description:
    "Profit leakage via opaque claims to cleared at source intelligence",
  sides: [
    {
      title: "The Old Way",
      subtitle: "The Leaky Opaque Bucket",
      media: {
        src: "/assets/claims/split-old.png",
        alt: "A desk buried in paper receipts, sticky notes and a reimbursement spreadsheet",
        width: 672,
        height: 896,
      },
    },
    {
      title: "The Effortless Way",
      accent: true,
      subtitle: "Audited and Cleared at Source",
      media: {
        src: "/assets/claims/split-new.png",
        alt: "Three phones showing claim review, reimbursement totals and expense approvals",
        width: 1016,
        height: 896,
      },
    },
  ],
};

/** Feature Deep Dive heading — Figma node 1864:24146. */
export const claimsFeatureHeading: ProductFeatureHeading = {
  eyebrow: "The Value Pillars",
  title: "Feature",
  accentTitle: "Deep Dive",
  description:
    "Powerful capabilities that transform your staff claims & reimbursement process",
};

/**
 * Seven 520px feature rows — Figma nodes under 1864:24153, in order:
 * 1864:24154, 1864:25050, 1864:25946, 1864:26842, 1868:32506,
 * 1864:27739, 1864:28639.
 *
 * Rows alternate media side, starting with media on the left.
 */
export const claimsFeatureRows: ProductFeatureRow[] = [
  {
    eyebrow: "Role-Based Policy Limit Frameworks",
    title: "Governance Tailored to Every Hierarchy Level.",
    body: [
      "Configure custom Travel advance limits, daily allowance and travel rule tiers across your company structure (e.g., ₹500/day for Area Executives, ₹1,500/day for Regional Managers). The software locks expenditure caps down automatically at the point of submission.",
    ],
    media: "/assets/claims/feature-01.png",
    mediaAlt: "Department-wise budget and allowance limits",
  },
  {
    eyebrow: "My Bill Box.",
    title: "It starts with the employee.",
    body: [
      "Staff submit travel, meals, or petty cash claims via the mobile app. We now have 'My Bill Box,' a private workspace where employees can organize receipt photos and drafts before submitting. Finance only sees them once they are perfect.",
    ],
    media: "/assets/claims/feature-02.png",
    mediaAlt: "Mobile reimbursement screen with claims and advances",
  },
  {
    eyebrow: "AI Powered Policy Enforcements.",
    title: "Automated Policy & Limit Alerts.",
    body: [
      "The moment they snap a photo of a restaurant bill or train ticket, the system checks it against your company policy.",
      "If a junior executive tries to claim a luxury hotel that exceeds their grade limit, Effortless flags it instantly before it even reaches the manager.",
      "Duplicate Bill alerts.",
    ],
    media: "/assets/claims/feature-03.png",
    mediaAlt: "Expense reimbursement flagging a limit exceeded warning",
  },
  {
    eyebrow: "Manager Approvals with Admin-Overrides",
    title: "Keep Operations Fluid, Not Rigid",
    body: [
      "Managers review team expenditure logs natively inside a centralized feed. If a field emergency occurs, the system permits structured management overrides with clean mandatory reason-logging to preserve compliance audits.",
    ],
    media: "/assets/claims/feature-04.png",
    mediaAlt: "Expense approvals queue with claim review panel",
  },
  {
    eyebrow: "The Integrated Single Payment Flow",
    title: "Settlement in Seconds, Not Weeks.",
    body: [
      "Once claims clear validation checkpoints, they don't sit waiting for manual processing. Run streamlined, bulk batch reimbursement distributions out to employee accounts instantly using direct, connected bank portal flow.",
    ],
    media: "/assets/claims/feature-05.png",
    mediaAlt: "Bulk reimbursement settlement screen",
  },
  {
    eyebrow: "X-Ray Vision",
    title: "CFO Dashboard.",
    body: [
      "CFOs get total control over team spend.  Our 'Accordion View' lets you drill down from a P&L group right to the penny.",
      "The engine transparently highlights active bulk schemes, MoQ, incentivizing larger average cart sizes without human sales intervention.",
      "Buyer can see, Live Status of placed Orders (Pending / Partially fulfilled / Fulfilled).",
    ],
    media: "/assets/claims/feature-06.png",
    mediaAlt: "Report centre with reimbursement categories",
  },
  {
    eyebrow: "The Final Truth Remains True",
    title: "Tally Stays Updated. Always.",
    body: [
      "Approved Claims, Petty Cash, and Payment entries move into Tally without typing.",
      "Masters stay clean, reconciliations stay simple, and audit stays smooth.",
      "To  keep your books pristine, we have 'Cut-Off Date Controls.' Once you close a month, the system physically blocks employees from submitting backdated travel expenses from two months ago. No more 'Month-End Mess'.”",
    ],
    media: "/assets/claims/feature-07.png",
    mediaAlt: "Two-way sync between Effortless and Tally Prime",
  },
];

/** "Why This Matters" — Figma node 1941:63506. */
export const claimsWhyThisMatters: ProductWhyThisMattersData = {
  title: "Why This",
  accentTitle: "Matters",
  items: [
    {
      icon: "/assets/claims/why-leakage.svg",
      label: "Zero Claim Leakages",
      tone: "accent",
    },
    {
      icon: "/assets/claims/why-policy.svg",
      label: "No Travel Policy Violation",
      tone: "violet",
    },
    {
      icon: "/assets/claims/why-employees.svg",
      label: "Happy Employees",
      tone: "success",
    },
  ],
};

/** Closing CTA — Figma node 1941:63532. */
export const claimsClosingCta: ProductClosingCtaData = {
  title: "Ready to Protect Every",
  accentTitle: "Rupee?",
  description:
    "See how finance teams are saving hours and catching errors before they become losses",
  primary: { label: "Book Live Demo" },
  secondary: { label: "See All Features", href: "/allFeatures" },
};
