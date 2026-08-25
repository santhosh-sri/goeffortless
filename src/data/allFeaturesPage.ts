/**
 * All Features page content — Figma "All Features", node 2426:64116.
 *
 * The page is a catalogue: three labelled groups of module cards, each card
 * listing a handful of features with a "See all NN features" footer. The design
 * gives those footers no destination, so they render as static labels rather
 * than invented links — the same call taken for the unmapped Solutions nav rows.
 */

/**
 * One feature row, on a card or in its "See all NN features" modal.
 *
 * `icon` is the feature's own glyph, taken from the live catalogue's `img`
 * field in `allFeatures.json`; features the redesign added reuse the closest
 * existing glyph, since the design supplies none. The files are drawn
 * `fill="white"` for the old dark theme, so they are rendered as a mask tinted
 * with the accent colour rather than as images — see `FeatureItemIcon`.
 */
export interface AllFeaturesItem {
  title: string;
  description: string;
  icon: string;
}

export interface AllFeaturesCard {
  /** Drives the header bar colour: filled green, orange or grey. */
  tone: "primary" | "addon" | "enabler";
  /** Header bar text. Core products show the product name plus a chip. */
  header: string;
  chip?: string;
  icon: string;
  title: string;
  subtitle: string;
  items: AllFeaturesItem[];
  /**
   * The card's complete feature list, shown in the "See all NN features"
   * modal (Figma 2117:5702, drawn for Sales and applied to every card).
   *
   * Sales comes from that frame. The rest are assembled from the card's own
   * preview items plus the live page's `allFeatures.json` catalogue, which is
   * the only other written source. That catalogue is smaller than the
   * redesign, so six lists are still short of the count in their `footer`
   * copy — Sales by 1, Tracking by 2, Dashboard by 3, Procurement by 5, Buyer
   * Portal by 2, Recurring by 2 and Customer Workflows by 1. The footer label
   * is derived from this array's real length, so a short list under-promises
   * rather than opening a dialog with missing rows.
   */
  allItems?: AllFeaturesItem[];
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

/**
 * Every Sales feature — Figma node 2117:5702, the "See all NN features" modal.
 *
 * The design supplied this one modal as the pattern for all twelve cards, so
 * it is the only list mapped; the other cards keep static footers until their
 * lists arrive.
 *
 * Three fixes against the frame, which the copy in it contradicts:
 *  - "Customer Wise Credit Limit Check" carried the Estimate/PI card's
 *    description verbatim; restored from the live site's wording.
 *  - "Convert Quotes To Sales Orders Or Invoices Seamlessly." repeated itself
 *    as both title and description; the title is shortened.
 *  - "Customer Assignment t o Team" and "e WayBill" are typo/casing slips.
 *
 * The frame holds 24 cards while the footer label reads 25 — the footer is
 * derived from this array's length at render time so the two cannot disagree.
 */
const SALES_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "GSTIN Powered Customer Onboarding",
    description:
      "Auto-fetch GSTIN details and verify GST compliance before onboarding.",
    icon: "/user-check.svg",
  },
  {
    title: "Customizable Templates - Quote, Sales Order & Invoice",
    description: "Tailor document layouts to match your brand identity.",
    icon: "/file-tree.svg",
  },
  {
    title: "Estimate, PI & Sales Order Creation (Multi-level Approvals)",
    description:
      "Create and approve sales documents with multi-stage verification.",
    icon: "/bill 2.svg",
  },
  {
    title: "AI Powered Advanced Scheming Management",
    description:
      "Handle Buy A Get B, slab discounts, and complex pricing schemes.",
    icon: "/ai.svg",
  },
  {
    title: "Bulk Upload Schemes",
    description: "Import large sets of scheme configurations efficiently.",
    icon: "/bulkupload.svg",
  },
  {
    title: "Customer wise Credit Limit Check",
    description:
      "Check real-time customer credit limits in sync with your books and restrict sales invoice creation.",
    icon: "/user.svg",
  },
  {
    title: "Credit Days Restriction",
    description: "Warn or block users when customers exceed credit limits.",
    icon: "/credit-day.svg",
  },
  {
    title: "Custom Attachments for Orders, Invoices",
    description: "Attach PDFs and images directly to Sales Orders, Invoices.",
    icon: "/attach-ment.svg",
  },
  {
    title: "Cut-Off Date Controls",
    description: "Lock Accounting periods at Org or Voucher-type level.",
    icon: "/cut-off.svg",
  },
  {
    title: "MoQ Controls",
    description: "Set Minimum Order Quantity limits for customers or items.",
    icon: "/list-checkbox-2.svg",
  },
  {
    title: "Convert Quotes to Sales Orders or Invoices",
    description: "Convert quotes to Sales Orders or Invoices seamlessly.",
    icon: "/window-cursor.svg",
  },
  {
    title: "Bulk Multi Price List with Scheduling",
    description: "Manage complex pricing slabs and scheduled revisions.",
    icon: "/money-bills.svg",
  },
  {
    title: "Future-Dated Invoice Creation",
    description:
      "Create invoices with future dates within the current accounting month.",
    icon: "/calendar-check.svg",
  },
  {
    title: "Follow your own Voucher Type & Numbering",
    description: "Use the same Voucher Types and Series from Tally.",
    icon: "/laptop-settings.svg",
  },
  {
    title: "E-Invoicing & e-WayBill Generation",
    description: "Generate compliant invoices instantly right from the field.",
    icon: "/file-content.svg",
  },
  {
    title: "Outstanding Receivables",
    description:
      "Track dues by customer and salesperson for proactive collections.",
    icon: "/hand-holding-coins.svg",
  },
  {
    title: "Collections",
    description:
      "Record Payments against customer and details are synced with your Accountant.",
    icon: "/hand-holding-money 2.svg",
  },
  {
    title: "Payment Links",
    description:
      "Now include payment links during payment collection remainders.",
    icon: "/link-4.svg",
  },
  {
    title: "Customer Assignment to Team",
    description:
      "Assign customers to specific sales or support teams. No overlap. No confusion.",
    icon: "/todo 2.svg",
  },
  {
    title: "Reimbursement Notes",
    description: "Manage credit notes or reimbursement adjustments for sales.",
    icon: "/hand-holding-money 2.svg",
  },
  {
    title: "Foreign Currency: Invoice in any currency",
    description: "Generate invoices in any supported currency.",
    icon: "/money-bill-coin.svg",
  },
  {
    title: "Default Warehouse for Invoicing",
    description: "Pre-set warehouse locations for faster invoicing.",
    icon: "/storage-unit.svg",
  },
  {
    title: "Intelligent QR on Invoice",
    description:
      "Get Transaction specific QR on your Sales orders or Invoice - collect faster.",
    icon: "/qrCode.svg",
  },
  {
    title: "Extra Special Discount (ESD)",
    description: "Manage ad-hoc or special discounts flexibly.",
    icon: "/credit-card-check 1.svg",
  },
];

/**
 * The remaining full feature lists, for the same "See all NN features" dialog.
 *
 * Only the Sales modal was drawn (Figma 2117:5702), so these are assembled
 * from the two sources that exist: each card's own preview items, which carry
 * the redesign's copy, followed by the features from the live page's
 * `allFeatures.json` catalogue that the preview does not already cover.
 *
 * The live JSON holds 76 features against the 125 the design's footer counts
 * ask for, so five lists land short of their label — see the note on
 * `allItems` in `AllFeaturesCard`. The footers render the real length rather
 * than the design's number, so a short list reads honestly instead of
 * promising rows that are not there.
 *
 * Voice differs between the two sources: the redesign's descriptions are one
 * short clause, the live JSON's are longer marketing lines. Left as-is rather
 * than rewritten, so the copy owner can see exactly what came from where.
 */
const BANKING_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Bank Statement AI Fetch (all leading banks)",
    description: "Automated fetching from leading banks.",
    icon: "/greek-temple 1.svg",
  },
  {
    title: "Auto-categorisation of Bank Entries",
    description: "AI-driven mapping for bank transactions.",
    icon: "/bell-filled 1.svg",
  },
  {
    title: "Dedicated Reconciliation Workspace",
    description: "Streamlined reconciliation interface.",
    icon: "/laptop-chart-cols 3.svg",
  },
  {
    title: "Banking Bulk Categorization",
    description: "Categorize multiple bank transactions in a single action.",
    icon: "/bulkupload.svg",
  },
  {
    title: "On-Account Knock-Off",
    description: "Manage unallocated receipts effectively.",
    icon: "/money-transfer.svg",
  },
  {
    title: "Collection Alerts to Owners",
    description:
      "Get notified instantly basis the frequency of bank statement to your email. Know who paid and how much.",
    icon: "/user-update.svg",
  },
  {
    title: "Party Collection",
    description:
      "Map collections to specific customers and ensure data is shared with your accountant.",
    icon: "/circle-user-filled 1.svg",
  },
  {
    title: "Generate Bulk Payment Files for (All Leading Banks)",
    description:
      "Do all approvals and checks in Effortless, & generate payment file basis each bank for one shot payment via bank portal.",
    icon: "/hand-holding-money 1.svg",
  },
  {
    title: "Petty Cash Management",
    description:
      "Track small cash spends at branches or in the field — with full control.",
    icon: "/money-bill-coin.svg",
  },
];

const CROSS_TEAM_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Sales Approval Workflows for Orders, Invoices",
    description: "Ensure multi-level verification for sales.",
    icon: "/Sales Approval flows.svg",
  },
  {
    title: "Approvals for Purchases, Claims & Payments",
    description: "Standardized approval processes across departments.",
    icon: "/list-check.svg",
  },
  {
    title: "Dynamic Approval Remarks",
    description:
      "Approvers can be required to enter remarks when approving documents.",
    icon: "/file-check 8.svg",
  },
  {
    title: "Multi-Levels & Bulk Approvals",
    description: "Efficiently approve high volumes of transactions.",
    icon: "/file-check 8.svg",
  },
  {
    title: "Designation-based Claim Rule Setup",
    description: "Control claim access based on user hierarchy.",
    icon: "/user-check.svg",
  },
  {
    title: "1-Click Invoice Creation",
    description: "Sales orders convert to invoices instantly. No lag. No loss.",
    icon: "/window-cursor.svg",
  },
  {
    title: "Audit Trail",
    description:
      "You may choose to track daily activity across effortless and have control on who is doing what!",
    icon: "/calendar-check.svg",
  },
  {
    title: "Multiple outlet/ warehouse/company management",
    description:
      "Multi Warehouse management support for Invoicing and bill booking.",
    icon: "/storage-unit.svg",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Collect payments faster via integrated UPI, cards, or net banking.",
    icon: "/credit-card-check 1.svg",
  },
];

const TRACKING_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Live GPS Tracking",
    description: "Real-time map-based movement tracking.",
    icon: "/Live Gps Tracking.svg",
  },
  {
    title: "Live Location check-in Photo – Not from Gallery",
    description: "Verify attendance via non-gallery photos.",
    icon: "/photo-checkin.svg",
  },
  {
    title: "Multiple photos in a single customer point.",
    description: "Capture visual proof of visit.",
    icon: "/multi-photo.svg",
  },
  {
    title: "Fraud Prevention",
    description: "Security measures to prevent GPS spoofing.",
    icon: "/lock-2.svg",
  },
  {
    title: "GPS-Based Field Team Check-Ins",
    description: "Ensure authentic field logging.",
    icon: "/GPS Based Chickin.svg",
  },
  {
    title: "Supervisor Entry",
    description:
      "Authorize a Supervisor to punch attendence on behalf of your employees",
    icon: "/trainer.svg",
  },
  {
    title: "Biometric Integration",
    description:
      "Add biometric hardware for secure check-ins with no proxy punching.",
    icon: "/hold 1.svg",
  },
  {
    title: "Time Spent in Market / Customer",
    description:
      "Know time spent in market / Customer place by your sales resource.",
    icon: "/time-spent.svg",
  },
  {
    title: "Geo-Fencing",
    description: "Restrict check-ins to where your customers are.",
    icon: "/Geo fencing.svg",
  },
  {
    title: "Attendance & Leave Management",
    description:
      "Leave requests, approvals, and balances — all managed digitally.",
    icon: "/ballot-rect1.svg",
  },
  {
    title: "Custom Forms with Tasks",
    description:
      "Create Custom Tasks for Custom for Sales, Delivery, & Support Teams.",
    icon: "/customforms.svg",
  },
];

const DASHBOARD_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Daily Business Snapshot on WhatsApp",
    description: "Receive daily summaries directly to WhatsApp.",
    icon: "/whatsapp.svg",
  },
  {
    title: "Sales & Collection Performance",
    description: "Track daily earnings and collections.",
    icon: "/laptop-chart-cols 3.svg",
  },
  {
    title: "Sales Order Report",
    description: "Customizable order reporting by dimension.",
    icon: "/chart-bar-arrow-up.svg",
  },
  {
    title: "Sales Report",
    description: "Detailed sales analytics.",
    icon: "/chart-pie-4 1.svg",
  },
  {
    title: "Revenue Analysis",
    description: "Deep-dive analysis of growth metrics.",
    icon: "/chart-stacked-line.svg",
  },
  {
    title: "Uncategorized Transactions",
    description:
      "Have an eye on your Uncategorized Transactions, and categories them.",
    icon: "/money-transfer.svg",
  },
  {
    title: "Compliance Reports (TDS, ITC)",
    description:
      "TDS reports basis TDS rules set, and ITC reports to double ensure you don't lose out due to errors.",
    icon: "/search-chart.svg",
  },
  {
    title: "Cost Centre Reports: Income & Balance Sheet",
    description:
      "Set cost centre layers to compare real-time balance sheets and profitability.",
    icon: "/receipt 5.svg",
  },
  {
    title: "Inventory Movement Analysis",
    description:
      "See what’s moving and what’s not. Plan purchase and sales better.",
    icon: "/person-chart-arrow-up.svg",
  },
];

const INTEGRATION_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Tally (Concurrent & Bi-Directional)",
    description: "Seamless finance-intelligence bridge.",
    icon: "/plug.svg",
  },
  {
    title: "Custom Development at Additional Cost (Basis Feasibility)",
    description: "Enterprise-tailored feature extensions.",
    icon: "/customdev.svg",
  },
  {
    title:
      "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters.",
    description: "Easy data ingestion for invoices/orders.",
    icon: "/bulkupload.svg",
  },
  {
    title: "Multi-Company Concurrent Sync",
    description: "Keep multiple entities in sync.",
    icon: "/api.svg",
  },
  {
    title: "Bulk Upload",
    description:
      "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters.",
    icon: "/bulkupload.svg",
  },
  {
    title: "8 Levels of Enterprise Grade Security",
    description: "From perimeter to core, 8 level of unbreakable security.",
    icon: "/shield-lock.svg",
  },
  {
    title: "Email, Call, & WhatsApp Support",
    description: "One team, Three channels, Total with support.",
    icon: "/envelope.svg",
  },
  {
    title: "Dedicated Account Manager",
    description:
      "Your success partner- A dedicated Account manager for every step.",
    icon: "/users-shaking-hands.svg",
  },
  {
    title: "Implementation & Onboarding Support",
    description:
      "Your journey starts smoothly with our Onboarding Experts supported by veteran CAs.",
    icon: "/badge-check.svg",
  },
  {
    title: "Payment Gateway (RazorPay)",
    description: "Got Razorpay? You are already halfway there.",
    icon: "/money-bill.svg",
  },
];

const REIMBURSEMENT_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "AI-Powered Travel Claims Booking",
    description: "Automate the booking of travel claims.",
    icon: "/receipt.svg",
  },
  {
    title: "Travel policy limits",
    description: "Enforce spending policies automatically.",
    icon: "/list-check.svg",
  },
  {
    title: "Amount-Based Approvals (Multi-level)",
    description: "Multi-level approval flow based on claim amount.",
    icon: "/money-bills.svg",
  },
  {
    title: "GST/TDS Automation",
    description: "Automate compliance for reimbursement claims.",
    icon: "/ai.svg",
  },
  {
    title: "Reimbursement Advance Limits",
    description: "Set ceilings for advance payments.",
    icon: "/hand-holding-money 1.svg",
  },
  {
    title: "Field Expense Claims",
    description:
      "Team submits bills directly from mobile. Finance doesn't chase paper.",
    icon: "/bill 2.svg",
  },
  {
    title: "Reimbursement Policy Controls",
    description:
      "Define what's reimbursable. Eliminate debate, delays, and disputes.",
    icon: "/hand-holding-money 2.svg",
  },
  {
    title: "Document Evidence Storage",
    description:
      "Upload, store, and retrieve all financial proofs — makes you audit ready.",
    icon: "/file-tree.svg",
  },
];

const PROCUREMENT_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "GSTIN powered Vendor oboarding",
    description: "Easily onboard vendors using GSTIN validation.",
    icon: "/user-check.svg",
  },
  {
    title: "Create Purchase Orders",
    description: "Generate professional POs.",
    icon: "/bill 2.svg",
  },
  {
    title: "AI-Powered 3-Way Reconciliation (PO-to-GRN-to-Vendor Bill)",
    description:
      "Validate vendor bills against issued POs & GRN - check for variances (Rates/Qty/SKUs), set tolerance limits.",
    icon: "/ai.svg",
  },
  {
    title: "AI-Powered Bill Booking",
    description: "Automate data entry from physical bills.",
    icon: "/receipt.svg",
  },
  {
    title: "Multi-Level Budget Approvals",
    description: "Ensure secure budget control and role-based access.",
    icon: "/file-check 8.svg",
  },
  {
    title: "Multi GSTN Compliance Support",
    description: "Centrally manage multiple GSTNs.",
    icon: "/circle-check.svg",
  },
  {
    title: "GST/TDS Automation",
    description: "Automate tax calculations.",
    icon: "/ai.svg",
  },
  {
    title:
      "Single Window for all Payment Types (Vendor/Customer/Statutory/Advances/Others)",
    description: "Manage diverse payments through one portal.",
    icon: "/window-cursor.svg",
  },
  {
    title: "Custom Attachments for Bills Booking",
    description: "Attach PDFs and images directly to bills.",
    icon: "/attach-pdf.svg",
  },
  {
    title: "Vendor Purchase Invoice Email",
    description:
      "AI auto email Vendor invoice — bills are read, validated, and booked in no time.",
    icon: "/envelope-content.svg",
  },
  {
    title: "AI-Powered Bills & Claims Booking",
    description:
      "Just click a photo — bills are read, validated, and booked in no time.",
    icon: "/receipt.svg",
  },
  {
    title: "Document Evidence Storage",
    description:
      "Upload, store, and retrieve all financial proofs — makes you audit ready.",
    icon: "/file-tree.svg",
  },
  {
    title: "Utility Bill Payments",
    description:
      "Track and Pay recurring office expenses effortlessly like mobile, internet, and electricity.",
    icon: "/banking-mobile.svg",
  },
];

const BUYER_PORTAL_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Effortless Connect mobile app (Android/iOS) — unlimited",
    description: "Provide unlimited mobile access for customers.",
    icon: "/banking-mobile.svg",
  },
  {
    title: "Product catalogue with in-stock items & view controls",
    description: "Display inventory availability with visibility controls.",
    icon: "/cart-simple-add 1.svg",
  },
  {
    title: "Self-serve ordering (MoQ controls) & live order status tracking",
    description: "Allow customers to order and track status with MoQ controls.",
    icon: "/cart-plus 1.svg",
  },
  {
    title: "Dashboard with transaction, payables & invoice history",
    description: "Give buyers full visibility into their account history.",
    icon: "/todo 1.svg",
  },
  {
    title:
      "Open bills, schemes management, specialised SKU visibility controls",
    description: "Display pending bills and applicable schemes for buyers.",
    icon: "/bill 3.svg",
  },
  {
    title: "Statement of Accounts",
    description: "Download or view SoA anytime — no need to contact finance.",
    icon: "/statement.svg",
  },
];

const RECURRING_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Set Recurring Contracts",
    description:
      "Set frequency, duration, service start date, billing date, billing mode and payment mode once.",
    icon: "/files-content.svg",
  },
  {
    title: "Contract Renewal Reminders",
    description:
      "Set Up Multiple Auto-Reminders Before Contract Expiry (WhatsApp + Email)",
    icon: "/calendar-check.svg",
  },
  {
    title: "Auto schedule Pro-forma / E-Invoice",
    description: "Schedule and forget. Let Effortless do it for you!",
    icon: "/file-content.svg",
  },
  {
    title: "Smart Reminders",
    description:
      "WhatsApp + Email payment outstanding reminders fire automatically. No manual follow-ups, no missed renewals.",
    icon: "/alarm-clock.svg",
  },
  {
    title: "Payment QR & Pay Now Links",
    description: "Easily include QR/payment links in collection reminders.",
    icon: "/link-4.svg",
  },
];

const CUSTOMER_WORKFLOWS_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Pay Now Emails with Invoices",
    description: "Send invoice + payment link for instant action.",
    icon: "/Pay Now Emails  with Invoices.svg",
  },
  {
    title: "Auto-Share of Invoices (WhatsApp and Email)",
    description: "Automated distribution via WhatsApp/Email.",
    icon: "/Auto-Share of Invoices(WhatsApp and Email).svg",
  },
  {
    title: "Automated Reminders (WhatsApp and Email)",
    description: "Chase payments automatically.",
    icon: "/circle-user-sparkle-2 1.svg",
  },
  {
    title: "Domain-Mapped Reminder Delivery",
    description: "Send professional branded communications.",
    icon: "/alarm-clock.svg",
  },
  {
    title: "Auto Notify Internal Users on Portal Orders",
    description: "Keep internal teams updated on buyer orders.",
    icon: "/bell-filled 1.svg",
  },
];

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
      icon: "/greek-temple 1.svg",
    },
    {
      title: "Auto-categorisation of Bank Entries",
      description: "AI-driven mapping for bank transactions.",
      icon: "/bell-filled 1.svg",
    },
    {
      title: "Dedicated Reconciliation Workspace",
      description: "Streamlined reconciliation interface.",
      icon: "/laptop-chart-cols 3.svg",
    },
    {
      title: "Banking Bulk Categorization",
      description: "Categorize multiple bank transactions in a single action.",
      icon: "/bulkupload.svg",
    },
    {
      title: "On-Account Knock-Off",
      description: "Manage unallocated receipts effectively.",
      icon: "/money-transfer.svg",
    },
  ],
  allItems: BANKING_ALL_FEATURES,
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
      icon: "/Sales Approval flows.svg",
    },
    {
      title: "Approvals for Purchases, Claims & Payments",
      description: "Standardized approval processes across departments.",
      icon: "/list-check.svg",
    },
    {
      title: "Dynamic Approval Remarks",
      description:
        "Approvers can be required to enter remarks when approving documents.",
      icon: "/file-check 8.svg",
    },
    {
      title: "Multi-Levels & Bulk Approvals",
      description: "Efficiently approve high volumes of transactions.",
      icon: "/file-check 8.svg",
    },
    {
      title: "Designation-based Claim Rule Setup",
      description: "Control claim access based on user hierarchy.",
      icon: "/user-check.svg",
    },
  ],
  allItems: CROSS_TEAM_ALL_FEATURES,
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
      icon: "/Live Gps Tracking.svg",
    },
    {
      title: "Live Location check-in Photo – Not from Gallery",
      description: "Verify attendance via non-gallery photos.",
      icon: "/photo-checkin.svg",
    },
    {
      title: "Multiple photos in a single customer point.",
      description: "Capture visual proof of visit.",
      icon: "/multi-photo.svg",
    },
    {
      title: "Fraud Prevention",
      description: "Security measures to prevent GPS spoofing.",
      icon: "/lock-2.svg",
    },
    {
      title: "GPS-Based Field Team Check-Ins",
      description: "Ensure authentic field logging.",
      icon: "/GPS Based Chickin.svg",
    },
  ],
  allItems: TRACKING_ALL_FEATURES,
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
      icon: "/whatsapp.svg",
    },
    {
      title: "Sales & Collection Performance",
      description: "Track daily earnings and collections.",
      icon: "/laptop-chart-cols 3.svg",
    },
    {
      title: "Sales Order Report",
      description: "Customizable order reporting by dimension.",
      icon: "/chart-bar-arrow-up.svg",
    },
    {
      title: "Sales Report",
      description: "Detailed sales analytics.",
      icon: "/chart-pie-4 1.svg",
    },
    {
      title: "Revenue Analysis",
      description: "Deep-dive analysis of growth metrics.",
      icon: "/chart-stacked-line.svg",
    },
  ],
  allItems: DASHBOARD_ALL_FEATURES,
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
      icon: "/plug.svg",
    },
    {
      title: "Custom Development at Additional Cost (Basis Feasibility)",
      description: "Enterprise-tailored feature extensions.",
      icon: "/customdev.svg",
    },
    {
      title:
        "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters.",
      description: "Easy data ingestion for invoices/orders.",
      icon: "/bulkupload.svg",
    },
    {
      title: "Multi-Company Concurrent Sync",
      description: "Keep multiple entities in sync.",
      icon: "/api.svg",
    },
  ],
  allItems: INTEGRATION_ALL_FEATURES,
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
      icon: "/receipt.svg",
    },
    {
      title: "Travel policy limits",
      description: "Enforce spending policies automatically.",
      icon: "/list-check.svg",
    },
    {
      title: "Amount-Based Approvals (Multi-level)",
      description: "Multi-level approval flow based on claim amount.",
      icon: "/money-bills.svg",
    },
    {
      title: "GST/TDS Automation",
      description: "Automate compliance for reimbursement claims.",
      icon: "/ai.svg",
    },
    {
      title: "Reimbursement Advance Limits",
      description: "Set ceilings for advance payments.",
      icon: "/hand-holding-money 1.svg",
    },
  ],
  allItems: REIMBURSEMENT_ALL_FEATURES,
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
            icon: "/user-check.svg",
          },
          {
            title: "Create Purchase Orders",
            description: "Generate professional POs.",
            icon: "/bill 2.svg",
          },
          {
            title:
              "AI-Powered 3-Way Reconciliation (PO-to-GRN-to-Vendor Bill)",
            description:
              "Validate vendor bills against issued POs & GRN - check for variances (Rates/Qty/SKUs), set tolerance limits.",
            icon: "/ai.svg",
          },
          {
            title: "AI-Powered Bill Booking",
            description: "Automate data entry from physical bills.",
            icon: "/receipt.svg",
          },
          {
            title: "Multi-Level Budget Approvals",
            description: "Ensure secure budget control and role-based access.",
            icon: "/file-check 8.svg",
          },
          {
            title: "Multi GSTN Compliance Support",
            description: "Centrally manage multiple GSTNs.",
            icon: "/circle-check.svg",
          },
          {
            title: "GST/TDS Automation",
            description: "Automate tax calculations.",
            icon: "/ai.svg",
          },
          {
            title:
              "Single Window for all Payment Types (Vendor/Customer/Statutory/Advances/Others)",
            description: "Manage diverse payments through one portal.",
            icon: "/window-cursor.svg",
          },
        ],
        allItems: PROCUREMENT_ALL_FEATURES,
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
            icon: "/user-check.svg",
          },
          {
            title: "Estimate, PI & Sales Order Creation (Multi-level Approvals)",
            description:
              "Create and approve sales documents with multi-stage verification.",
            icon: "/bill 2.svg",
          },
          {
            title: "AI powered Advanced Scheming Management",
            description:
              "Supports complex schemes like Buy A Get B, slab discounts, triggers, and flexible accounting.",
            icon: "/ai.svg",
          },
          {
            title: "Customer wise Credit Limit check",
            description:
              "Check real-time credit limits and restrict invoicing accordingly.",
            icon: "/user.svg",
          },
          {
            title: "Outstanding Receivables",
            description:
              "Real-time visibility into customer-wise pending payments.",
            icon: "/hand-holding-coins.svg",
          },
          {
            title: "Collections & Payment links",
            description:
              "Record and sync payments while sending collection reminders with payment links.",
            icon: "/link-4.svg",
          },
          {
            title: "E-Invoicing & e-WayBill Generation",
            description:
              "Record and sync payments while sending collection reminders with payment links.",
            icon: "/file-content.svg",
          },
          {
            title: "Intelligent QR on Invoice",
            description:
              "Embed transaction-specific QR codes for faster payments.",
            icon: "/qrCode.svg",
          },
        ],
        allItems: SALES_ALL_FEATURES,
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
            icon: "/banking-mobile.svg",
          },
          {
            title: "Product catalogue with in-stock items & view controls",
            description:
              "Display inventory availability with visibility controls.",
            icon: "/cart-simple-add 1.svg",
          },
          {
            title:
              "Self-serve ordering (MoQ controls) & live order status tracking",
            description:
              "Allow customers to order and track status with MoQ controls.",
            icon: "/cart-plus 1.svg",
          },
          {
            title: "Dashboard with transaction, payables & invoice history",
            description: "Give buyers full visibility into their account history.",
            icon: "/todo 1.svg",
          },
          {
            title:
              "Open bills, schemes management, specialised SKU visibility controls",
            description:
              "Display pending bills and applicable schemes for buyers.",
            icon: "/bill 3.svg",
          },
        ],
        allItems: BUYER_PORTAL_ALL_FEATURES,
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
            icon: "/files-content.svg",
          },
          {
            title: "Contract Renewal Reminders",
            description:
              "Set Up Multiple Auto-Reminders Before Contract Expiry (WhatsApp + Email)",
            icon: "/calendar-check.svg",
          },
          {
            title: "Auto schedule Pro-forma / E-Invoice",
            description: "Schedule and forget. Let Effortless do it for you!",
            icon: "/file-content.svg",
          },
          {
            title: "Smart Reminders",
            description:
              "WhatsApp + Email payment outstanding reminders fire automatically. No manual follow-ups, no missed renewals.",
            icon: "/alarm-clock.svg",
          },
          {
            title: "Payment QR & Pay Now Links",
            description:
              "Easily include QR/payment links in collection reminders.",
            icon: "/link-4.svg",
          },
        ],
        allItems: RECURRING_ALL_FEATURES,
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
            icon: "/Pay Now Emails  with Invoices.svg",
          },
          {
            title: "Auto-Share of Invoices (WhatsApp and Email)",
            description: "Automated distribution via WhatsApp/Email.",
            icon: "/Auto-Share of Invoices(WhatsApp and Email).svg",
          },
          {
            title: "Automated Reminders (WhatsApp and Email)",
            description: "Chase payments automatically.",
            icon: "/circle-user-sparkle-2 1.svg",
          },
          {
            title: "Domain-Mapped Reminder Delivery",
            description: "Send professional branded communications.",
            icon: "/alarm-clock.svg",
          },
          {
            title: "Auto Notify Internal Users on Portal Orders",
            description: "Keep internal teams updated on buyer orders.",
            icon: "/bell-filled 1.svg",
          },
        ],
        allItems: CUSTOMER_WORKFLOWS_ALL_FEATURES,
        footer: "See all 06 features",
      },
      DASHBOARD,
      INTEGRATION,
    ],
  },
];

/**
 * Closing CTA — Figma node 2426:65644. `primary` is the filled button (the
 * booking embed) and `secondary` the outlined one, which Figma draws first.
 */
export const allFeaturesClosingCta = {
  title: "Ready to see it in",
  accentTitle: "Action?",
  description:
    "See how Effortless fits your exact workflow — sales, procurement, payouts, and clean Tally books.",
  primary: { label: "Book Live Demo" },
  secondary: { label: "View Pricing", href: "/pricing" },
};
