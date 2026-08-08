/**
 * All Features page content — Figma "All Features", node 2426:64116.
 *
 * The page is a catalogue: three labelled groups of module cards, each card
 * listing a handful of features with a "See all NN features" footer. The design
 * gives those footers no destination, so they render as static labels rather
 * than invented links — the same call taken for the unmapped Solutions nav rows.
 */

export interface AllFeaturesCard {
  /** Drives the header bar colour: filled green, orange or grey. */
  tone: "primary" | "addon" | "enabler";
  /** Header bar text. Core products show the product name plus a chip. */
  header: string;
  chip?: string;
  icon: string;
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
  footer: string;
}

export interface AllFeaturesGroup {
  label: string;
  cards: AllFeaturesCard[];
}

/** Hero — Figma node 2426:65375. */
export const allFeaturesHero = {
  eyebrow: "Explore our Features",
  title: "The Engine behind",
  accentTitle: "India’s Fastest-Growing Businesses",
  description:
    "Explore features built to handle your sales, cash, team, and growing pains – all in one platform.",
};

/** "No More Broken Pipes Between Systems" — Figma node 2426:65526. */
export const allFeaturesCommandCenter = {
  eyebrow: "Your Business Command Center",
  title: "No More Broken Pipes",
  accentTitle: "Between Systems",
  description: "Sales, finance, ops – everyone’s on the same page, always.",
  before: {
    title: "Growth multiplies Complexity",
    description:
      "More orders. More follow-ups. More risks. Your Existing stack cannot handle the load.",
    media: "/assets/all-features/stack-cluster.png",
    mediaAlt:
      "A tangle of disconnected tools — WhatsApp, Excel, Tally, Gmail, SAP and GSTN",
    mediaWidth: 1040,
    mediaHeight: 980,
  },
  after: {
    title: "Effortless is built for Managing Growth",
    description:
      "Your Business Command Center for sales, cash, and teams-  built to help businesses to grow, without the mess.",
    media: "/assets/all-features/command-center.png",
    mediaAlt:
      "The Effortless dashboard showing revenue, collections, payables and liquidity",
    mediaWidth: 1424,
    mediaHeight: 980,
  },
  integrations: {
    media: "/assets/all-features/integrations-row.png",
    mediaAlt:
      "Integrations with Tally Prime, Gmail, WhatsApp, Bharat BillPay, ICICI Bank and GSTN",
    mediaWidth: 2688,
    mediaHeight: 256,
  },
  ctaLabel: "See how Indian SMBs are Growing Faster with Effortless",
};

const BANKING: AllFeaturesCard = {
  tone: "enabler",
  header: "Enabler Modules",
  icon: "/assets/all-features/card-banking.png",
  title: "Banking and Cash Flow Management",
  subtitle: "Real-time financial clarity from the bank level.",
  items: [
    {
      title: "Bank Statement AI Fetch (all leading banks)",
      description: "Automated fetching from leading banks.",
    },
    {
      title: "Auto-categorisation of Bank Entries",
      description: "AI-driven mapping for bank transactions.",
    },
    {
      title: "Dedicated Reconciliation Workspace",
      description: "Streamlined reconciliation interface.",
    },
    {
      title: "Banking Bulk Categorization",
      description: "Categorize multiple bank transactions in a single action.",
    },
    {
      title: "On-Account Knock-Off",
      description: "Manage unallocated receipts effectively.",
    },
  ],
  footer: "See all 09 features",
};

const CROSS_TEAM: AllFeaturesCard = {
  tone: "enabler",
  header: "Enabler Modules",
  icon: "/assets/all-features/card-cross-team.png",
  title: "Cross-Team Workflows",
  subtitle: "Strengthen process control and compliance.",
  items: [
    {
      title: "Sales Approval Workflows for Orders, Invoices",
      description: "Ensure multi-level verification for sales.",
    },
    {
      title: "Approvals for Purchases, Claims & Payments",
      description: "Standardized approval processes across departments.",
    },
    {
      title: "Dynamic Approval Remarks",
      description:
        "Approvers can be required to enter remarks when approving documents.",
    },
    {
      title: "Multi-Levels & Bulk Approvals",
      description: "Efficiently approve high volumes of transactions.",
    },
    {
      title: "Designation-based Claim Rule Setup",
      description: "Control claim access based on user hierarchy.",
    },
  ],
  footer: "See all 09 features",
};

const TRACKING: AllFeaturesCard = {
  tone: "enabler",
  header: "Enabler Modules",
  icon: "/assets/all-features/card-tracking.png",
  title: "Office & Live Field Team Tracking",
  subtitle: "A complete view of attendance and performance.",
  items: [
    {
      title: "Live GPS Tracking",
      description: "Real-time map-based movement tracking.",
    },
    {
      title: "Live Location check-in Photo – Not from Gallery",
      description: "Verify attendance via non-gallery photos.",
    },
    {
      title: "Multiple photos in a single customer point.",
      description: "Capture visual proof of visit.",
    },
    {
      title: "Fraud Prevention",
      description: "Security measures to prevent GPS spoofing.",
    },
    {
      title: "GPS-Based Field Team Check-Ins",
      description: "Ensure authentic field logging.",
    },
  ],
  footer: "See all 13 features",
};

const DASHBOARD: AllFeaturesCard = {
  tone: "enabler",
  header: "Enabler Modules",
  icon: "/assets/all-features/card-dashboard.png",
  title: "Business Health Dashboard & Reports",
  subtitle: "Dashboards and analytics close the loop.",
  items: [
    {
      title: "Daily Business Snapshot on WhatsApp",
      description: "Receive daily summaries directly to WhatsApp.",
    },
    {
      title: "Sales & Collection Performance",
      description: "Track daily earnings and collections.",
    },
    {
      title: "Sales Order Report",
      description: "Customizable order reporting by dimension.",
    },
    { title: "Sales Report", description: "Detailed sales analytics." },
    {
      title: "Revenue Analysis",
      description: "Deep-dive analysis of growth metrics.",
    },
  ],
  footer: "See all 12 features",
};

const INTEGRATION: AllFeaturesCard = {
  tone: "enabler",
  header: "Enabler Modules",
  icon: "/assets/all-features/card-integration.png",
  title: "Integration, Security & Support",
  subtitle: "Connect Effortless securely with your existing systems.",
  items: [
    {
      title: "Tally (Concurrent & Bi-Directional)",
      description: "Seamless finance-intelligence bridge.",
    },
    {
      title: "Custom Development at Additional Cost (Basis Feasibility)",
      description: "Enterprise-tailored feature extensions.",
    },
    {
      title:
        "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters.",
      description: "Easy data ingestion for invoices/orders.",
    },
    {
      title: "Multi-Company Concurrent Sync",
      description: "Keep multiple entities in sync.",
    },
  ],
  footer: "See all 10 features",
};

const REIMBURSEMENT: AllFeaturesCard = {
  tone: "addon",
  header: "Add-on Module",
  icon: "/assets/all-features/card-reimbursement.png",
  title: "Field Reimbursement Claims",
  subtitle: "Keep Reimbursements in control.",
  items: [
    {
      title: "AI-Powered Travel Claims Booking",
      description: "Automate the booking of travel claims.",
    },
    {
      title: "Travel policy limits",
      description: "Enforce spending policies automatically.",
    },
    {
      title: "Amount-Based Approvals (Multi-level)",
      description: "Multi-level approval flow based on claim amount.",
    },
    {
      title: "GST/TDS Automation",
      description: "Automate compliance for reimbursement claims.",
    },
    {
      title: "Reimbursement Advance Limits",
      description: "Set ceilings for advance payments.",
    },
  ],
  footer: "See all 08 features",
};

/**
 * Three groups — Figma nodes 2426:64118 (core), 2444:74938 (procurement
 * add-ons) and 2444:75354 (sales add-ons). Several enabler cards appear in both
 * add-on groups, so they are declared once above and referenced twice.
 */
export const allFeaturesGroups: AllFeaturesGroup[] = [
  {
    label: "Core Products",
    cards: [
      {
        tone: "primary",
        header: "Effortless Procurement",
        chip: "Primary Product",
        icon: "/assets/all-features/card-purchase-orders.png",
        title: "Purchase Orders & Vendor Expense Management",
        subtitle: "Manage procurement and expenses in sync.",
        items: [
          {
            title: "GSTIN powered Vendor oboarding",
            description: "Easily onboard vendors using GSTIN validation.",
          },
          {
            title: "Create Purchase Orders",
            description: "Generate professional POs.",
          },
          {
            title:
              "AI-Powered 3-Way Reconciliation (PO-to-GRN-to-Vendor Bill)",
            description:
              "Validate vendor bills against issued POs & GRN - check for variances (Rates/Qty/SKUs), set tolerance limits.",
          },
          {
            title: "AI-Powered Bill Booking",
            description: "Automate data entry from physical bills.",
          },
          {
            title: "Multi-Level Budget Approvals",
            description: "Ensure secure budget control and role-based access.",
          },
          {
            title: "Multi GSTN Compliance Support",
            description: "Centrally manage multiple GSTNs.",
          },
          {
            title: "GST/TDS Automation",
            description: "Automate tax calculations.",
          },
          {
            title:
              "Single Window for all Payment Types (Vendor/Customer/Statutory/Advances/Others)",
            description: "Manage diverse payments through one portal.",
          },
        ],
        footer: "See all 18 features",
      },
      {
        tone: "primary",
        header: "Effortless Sales",
        chip: "Primary Product",
        icon: "/assets/all-features/card-sales-fleet.png",
        title: "Sales & Fleet on Street",
        subtitle: "Empower your team to drive revenue on the ground.",
        items: [
          {
            title: "GSTIN powered Customer onboarding",
            description:
              "Simplify onboarding by fetching details automatically via GSTIN. Know their GST compliance history to predict realiability.",
          },
          {
            title: "Estimate, PI & Sales Order Creation (Multi-level Approvals)",
            description:
              "Create and approve sales documents with multi-stage verification.",
          },
          {
            title: "AI powered Advanced Scheming Management",
            description:
              "Supports complex schemes like Buy A Get B, slab discounts, triggers, and flexible accounting.",
          },
          {
            title: "Customer wise Credit Limit check",
            description:
              "Check real-time credit limits and restrict invoicing accordingly.",
          },
          {
            title: "Outstanding Receivables",
            description:
              "Real-time visibility into customer-wise pending payments.",
          },
          {
            title: "Collections & Payment links",
            description:
              "Record and sync payments while sending collection reminders with payment links.",
          },
          {
            title: "E-Invoicing & e-WayBill Generation",
            description:
              "Record and sync payments while sending collection reminders with payment links.",
          },
          {
            title: "Intelligent QR on Invoice",
            description:
              "Embed transaction-specific QR codes for faster payments.",
          },
        ],
        footer: "See all 25 features",
      },
    ],
  },
  {
    label: "Effortless Procurement (Add-ons & Enabler Modules)",
    cards: [REIMBURSEMENT, BANKING, CROSS_TEAM, TRACKING, DASHBOARD, INTEGRATION],
  },
  {
    label: "Effortless Sales (Add-ons & Enabler Modules)",
    cards: [
      {
        tone: "addon",
        header: "Add-on Module",
        icon: "/assets/all-features/card-buyer-portal.png",
        title: "Buyer Portal: Self-Serve Commerce",
        subtitle: "Enable your B2B customers via the Buyer Portal.",
        items: [
          {
            title: "Effortless Connect mobile app (Android/iOS) — unlimited",
            description: "Provide unlimited mobile access for customers.",
          },
          {
            title: "Product catalogue with in-stock items & view controls",
            description:
              "Display inventory availability with visibility controls.",
          },
          {
            title:
              "Self-serve ordering (MoQ controls) & live order status tracking",
            description:
              "Allow customers to order and track status with MoQ controls.",
          },
          {
            title: "Dashboard with transaction, payables & invoice history",
            description: "Give buyers full visibility into their account history.",
          },
          {
            title:
              "Open bills, schemes management, specialised SKU visibility controls",
            description:
              "Display pending bills and applicable schemes for buyers.",
          },
        ],
        footer: "See all 08 features",
      },
      REIMBURSEMENT,
      {
        tone: "addon",
        header: "Add-on Module",
        icon: "/assets/all-features/card-recurring.png",
        title: "Recurring Contract & Auto Billing",
        subtitle: "Automate revenue from AMC, contracts & licenses.",
        items: [
          {
            title: "Set Recurring Contracts",
            description:
              "Set frequency, duration, service start date, billing date, billing mode and payment mode once.",
          },
          {
            title: "Contract Renewal Reminders",
            description:
              "Set Up Multiple Auto-Reminders Before Contract Expiry (WhatsApp + Email)",
          },
          {
            title: "Auto schedule Pro-forma / E-Invoice",
            description: "Schedule and forget. Let Effortless do it for you!",
          },
          {
            title: "Smart Reminders",
            description:
              "WhatsApp + Email payment outstanding reminders fire automatically. No manual follow-ups, no missed renewals.",
          },
          {
            title: "Payment QR & Pay Now Links",
            description:
              "Easily include QR/payment links in collection reminders.",
          },
        ],
        footer: "See all 07 features",
      },
      BANKING,
      CROSS_TEAM,
      TRACKING,
      {
        tone: "enabler",
        header: "Enabler Modules",
        icon: "/assets/all-features/card-customer-workflows.png",
        title: "Customer Workflows",
        subtitle: "Automate engagement and collections.",
        items: [
          {
            title: "Pay Now Emails with Invoices",
            description: "Send invoice + payment link for instant action.",
          },
          {
            title: "Auto-Share of Invoices (WhatsApp and Email)",
            description: "Automated distribution via WhatsApp/Email.",
          },
          {
            title: "Automated Reminders (WhatsApp and Email)",
            description: "Chase payments automatically.",
          },
          {
            title: "Domain-Mapped Reminder Delivery",
            description: "Send professional branded communications.",
          },
          {
            title: "Auto Notify Internal Users on Portal Orders",
            description: "Keep internal teams updated on buyer orders.",
          },
        ],
        footer: "See all 06 features",
      },
      DASHBOARD,
      INTEGRATION,
    ],
  },
];

/** Closing CTA — Figma node 2426:65644. */
export const allFeaturesClosingCta = {
  title: "Ready to see it in",
  accentTitle: "Action?",
  description:
    "See how finance teams are saving hours and catching errors before they become losses",
  primary: { label: "View Pricing", href: "/pricing" },
  secondary: { label: "Book Live Demo" },
};
