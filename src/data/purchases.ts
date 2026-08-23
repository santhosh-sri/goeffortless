/**
 * Purchase & Expenses page content — Figma
 * "Purchase & Expenses (The Profit Guardian)", node 1943:63635.
 */
import type {
  ProductHeroData,
  ProductFeatureHeading,
  ProductFeatureRow,
  ProductWhyThisMattersData,
  ProductVideoData,
  ProductClosingCtaData,
} from "@/components/pages/product";

/** Hero — Figma node 1943:63654. */
export const purchasesHero: ProductHeroData = {
  badges: [
    { label: "Primary Product", tone: "success" },
    { label: "The Profit Guardian", tone: "surface" },
  ],
  title: "Every Corporate Rupee Audited, Approved.",
  accentTitle: "Before It Leaves the Bank.",
  description:
    "Master your full procurement loop. Create Purchase Orders, Effortless AI Auto maps directly to incoming Vendor Bills & pending customer orders (3-way match) , flag Variances from PO, Billable customer Order against received qty, vendor compliance threats, and manage hard departmental budgets easily.",
  ctaLabel: "Lock Down Your Procurement Spend",
  demo: {
    webm: "/assets/purchases/hero-demo.webm",
    mov: "/assets/purchases/hero-demo.mov",
    poster: "/assets/purchases/hero-demo-poster.png",
    width: 800,
    height: 450,
    card: "laptop",
  },
};

/**
 * "The Compliance Shield" — Figma node 1943:64560.
 *
 * The four status cards are the palette swatches — #16BA84 (success), #F08B32
 * (accent), #3B82F6 (`palette-blue`) and #8A38F5 (`palette-purple`), per the
 * White Pallet 2682:25297.
 */
export const purchasesComplianceShield = {
  eyebrow: "Interactive Dashboard Callout",
  title: "The",
  accentTitle: "“Compliance Shield”",
  description:
    "From Manual PO variance check & constant follow-ups to AI powered automated variance control, instant clarity & faster decisions.",
  before: {
    title: "Vendor Bill Upload",
    subtitle: "Manual steps, slow updates, and constant follow-ups",
    media: "/assets/purchases/vendor-bill-upload.png",
    mediaAlt:
      "Vendor bill matching status table flagging over-billed and under-billed lines",
    mediaWidth: 1228,
    mediaHeight: 598,
  },
  after: {
    title: "Automated Checks",
    subtitle: "Clean handoffs, instant clarity, and faster decisions",
    checks: [
      {
        icon: "/assets/purchases/shield-reconciliation.svg",
        tone: "green" as const,
        title: "AI-Powered 3-Way Reconciliation",
        description: "PO-to-GRN-to-Vendor Bill",
      },
      {
        icon: "/assets/purchases/shield-idp.svg",
        tone: "orange" as const,
        title: "IDP (Intelligent Data Processing) complete",
        description:
          "Extracted: GSTIN, Vendor Name, Line items, Tax amounts, Bank Details & Validates with GSTN, TDS Applicability, RCM Applicability, Bank Validation",
      },
      {
        icon: "/assets/purchases/shield-gst-risk.svg",
        tone: "blue" as const,
        title: "Vendor GST Defaulting — High Risk",
        description: "Warning: This vendor has missed recent GST filings",
      },
      {
        icon: "/assets/purchases/shield-tds.svg",
        tone: "purple" as const,
        title: "TDS Auto-Applied & RCM Identified",
        description:
          "TDS Section 194J(a) — ₹5,000 (based on finance rules) & Reverse Charge Mechanism applied and posted correctly",
      },
    ],
  },
};

/**
 * Feature Deep Dive heading — Figma node 1943:64659.
 *
 * The description reads "field sales operation" in the design even though this
 * is the procurement page; implemented as drawn, flagged for the designer.
 */
export const purchasesFeatureHeading: ProductFeatureHeading = {
  eyebrow: "The Value Pillars",
  title: "Feature",
  accentTitle: "Deep Dive",
  description:
    "Powerful capabilities that transform your field sales operation",
};

/**
 * Nine 520px feature rows — Figma nodes under 1943:64666, in order:
 * 2444:77286, 1943:64667, 2444:78187, 1943:65566, 1943:66467,
 * 1943:67365, 1943:68266, 1943:69166, 1943:70066.
 *
 * Rows alternate media side, starting with media on the left.
 */
export const purchasesFeatureRows: ProductFeatureRow[] = [
  {
    eyebrow: "Do Vendor KYC",
    title: "Every Vendor, Verified to the Core.",
    body: [
      "Onboard Compliant vendor, set up approval process, agreed credit limit, maintain relevant KYC documents (Cancelled Cheque, MSME certificate, LDF copies, GST Certificate etc.)",
    ],
    media: "/assets/purchases/feature-01.png",
    mediaAlt: "Vendor information setup screen with GSTIN and address details",
  },
  {
    eyebrow: "Protect Sensitive Vendor Data",
    title: "Every Purchase rep, Fixed Assigned Vendors.",
    body: [
      "Assign specific Vendors/ product categories to your respective purchase rep. No Overlap - Protect sensitive purchase data.",
      "You can also set multi-level approval for its base amount of PO.",
    ],
    media: "/assets/purchases/feature-02.png",
    mediaAlt: "Team settings screen assigning vendor permissions per user",
  },
  {
    eyebrow: "It all starts before the bill even arrives",
    title: "Purchase Order & Cost Centre Tagging.",
    body: [
      "Your team creates a Purchase Order directly in Effortless, they tag it to a specific Cost Centre or branch. This locks in the approved budget and ensures expenses are allocated perfectly from day one, without finance having to guess later.",
      "You can also set multi-level approval for its base amount of PO.",
    ],
    media: "/assets/purchases/feature-03.png",
    mediaAlt: "New purchase order screen with cost centre and ledger tagging",
  },
  {
    eyebrow: "AI-Powered 3-Way Reconciliation (PO-to-GRN-to-Vendor Bill)",
    title: "Stop Vendor Overbilling on Autopilot.",
    body: [
      "When a vendor invoice arrives, Effortless AI automatically pulls it from your email or your team uploads it. Our IDP engine extracts every single line item instantly.",
      "Here is where the magic happens: the system automatically executes a 3-way compliance check by cross-referencing the incoming Vendor Bill against your original Purchase Order (PO) (what you agreed to buy) and the physical Goods Receipt Note (GRN) (what actually arrived at your warehouse).",
      "If the vendor is overbilling you—whether they are sneaking in a higher unit rate than the PO or charging you for quantities that never actually cleared your loading dock—Effortless flags the variance instantly. Your team can pause the approval workflow right there, ensuring you never pay a single rupee more than what was agreed and verified.",
    ],
    media: "/assets/purchases/feature-04.png",
    mediaAlt:
      "Reconciliation dashboard matching purchase order, goods receipt note and vendor bill",
  },
  {
    eyebrow: "AI Powered Tax guard",
    title: "Compliance & Tax Validation",
    body: [
      "System checks vendor GST status, past GST Filing records & validates TAN-based GSTINs automatically. It even automates TDS deduction from the very first bill, so you don't have to chase vendors for refunds later if you cross a threshold mid-year.",
    ],
    media: "/assets/purchases/feature-05.png",
    mediaAlt: "Mobile expense capture screen validating GSTIN on a vendor bill",
  },
  {
    eyebrow: "Governance & Approvals",
    title: "Stop Over-Spending Failures in Their Tracks.",
    body: [
      "Assign absolute balance thresholds to individual cost centers, projects, or operating branches. The platform proactively warns managers or blocks purchase orders when spending runs too close to maximum allowances.",
      "Validated bills go to the right HOD or director. To prevent supply chain bottlenecks, Admins can override approvals if a key manager is Out of Office.",
      "Most importantly, the system tracks every edit an approver makes—if finance adjusts a vendor payout amount due to that overbilling alert, there is an ironclad audit trail.",
    ],
    media: "/assets/purchases/feature-06.png",
    mediaAlt: "Expense bill box listing pending approvals and their status",
  },
  {
    eyebrow: "The CFO's Consolidated Payment Deck",
    title: "Controlled Corporate Outflows.",
    body: [
      "No more dealing with dozens of individual net banking logins. All fully verified, cleared invoices drop into a centralized “Ready to Pay” terminal, where financial officers can execute secure, batch payments directly through connected banking rails.",
      "Bulk Approval' to clear 50+ vendor payments in one tap.",
    ],
    media: "/assets/purchases/feature-07.png",
    mediaAlt: "Consolidated payments screen with vendor payouts ready to clear",
  },
  {
    eyebrow: "X-Ray Vision",
    title: "CFO Dashboard.",
    body: [
      "Management gets total visibility on liabilities, Purchase cost variances, Vendor team performance.  Our 'Accordion View' lets you drill down from a P&L group right to the penny.",
      "Because we tagged Cost Centres in Step 1, you can see branch-wise spends and budget vs. actual in real-time, instantly.”",
    ],
    media: "/assets/purchases/feature-08.png",
    mediaAlt: "Cost centre income statement report with drill-down rows",
  },
  {
    eyebrow: "The Final Truth Remains True",
    title: "Tally Stays Updated. Always.",
    body: [
      "Approved POs, bills, Payments sync to Tally with all tax ledgers and cost centres perfectly matched.",
      "To keep your books pristine, we have 'Cut-Off Date Controls.' Once you close a month, the system physically blocks backdated vendor invoices from being squeezed in. Your CFO's month-end is locked tight.”",
    ],
    media: "/assets/purchases/feature-09.png",
    mediaHeight: 548,
    mediaAlt: "Two-way sync between Effortless and Tally Prime",
  },
];

/** "Why This Matters" — Figma node 1943:71149. */
export const purchasesWhyThisMatters: ProductWhyThisMattersData = {
  title: "Why This",
  accentTitle: "Matters",
  items: [
    {
      icon: "/assets/purchases/why-lost-bills.svg",
      label: "No Lost Bills",
      tone: "accent",
    },
    {
      icon: "/assets/purchases/why-policy.svg",
      label: "No Policy Violations",
      tone: "violet",
    },
    {
      icon: "/assets/purchases/why-month-end.svg",
      label: "No Month-End Chaos",
      tone: "success",
    },
  ],
};

/**
 * "See it in Action" — Figma node 1943:71170.
 *
 * The design leaves the player area an empty white placeholder, so this reuses
 * the Purchase & Expenses video already referenced in src/data/expenses.json.
 */
export const purchasesSeeItInAction: ProductVideoData = {
  title: "See it in",
  accentTitle: "Action",
  description:
    "Watch how finance procurement and finance teams are automating purchase & expense management.",
  videoId: "3OFsEO-47e0",
};

/** Closing CTA — Figma node 1943:71175. */
export const purchasesClosingCta: ProductClosingCtaData = {
  title: "Ready to Protect Every",
  accentTitle: "Rupee?",
  description:
    "See how finance teams are saving hours and catching errors before they become losses",
  primary: { label: "Book Live Demo" },
  secondary: { label: "See All Features", href: "/allFeatures" },
};
