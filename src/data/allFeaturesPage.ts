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
 * `icon` is the feature's own glyph, matched to the row's title from the
 * monochrome glyph set in `public/` — the design supplies none, so each row
 * takes the closest existing icon and no two rows in the same card list share
 * one.
 *
 * They point at `public/assets/all-features/icons/`, a normalised copy of that
 * set rather than the originals: the source files come from several batches
 * whose glyphs fill anywhere from 76% to 100% of their own viewBox, and 21 of
 * them carry a 10%-alpha backing tile drawn for the old dark theme, which a
 * mask renders as a tinted square. Each copy drops that tile and gets a square
 * viewBox centred on the artwork at a uniform 92% fill, so every row's glyph
 * lands the same optical size. The originals are left alone for the pages that
 * still use them.
 *
 * The files are drawn `fill="white"`, so they are rendered as a mask tinted
 * with the accent colour rather than as images, which is what keeps them
 * legible on both themes — see `FeatureItemIcon`.
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
    icon: "/assets/all-features/icons/user-check.svg",
  },
  
  {
    title: "Customizable Templates - Quote, Sales Order & Invoice",
    description: "Tailor document layouts to match your brand identity.",
    icon: "/assets/all-features/icons/files-content.svg",
  },
  {
    title: "Walk-in Customers",
    description:
      "Create invoices for walk-in customers by capturing only the customer's name and optional mobile number.",
    icon: "/assets/all-features/icons/shop.svg",
  },
  {
    title: "Estimate, PI & Sales Order Creation (Multi-level Approvals)",
    description:
      "Create and approve sales documents with multi-stage verification.",
    icon: "/assets/all-features/icons/estimate-and-order-creation.svg",
  },
  {
    title: "AI Powered Advanced Scheming Management",
    description:
      "Handle Buy A Get B, slab discounts, and complex pricing schemes.",
    icon: "/assets/all-features/icons/ai.svg",
  },
  {
    title: "Bulk Upload Schemes",
    description: "Import large sets of scheme configurations efficiently.",
    icon: "/assets/all-features/icons/bulkupload.svg",
  },
  {
    title: "Customer wise Credit Limit Check",
    description:
      "Check real-time customer credit limits in sync with your books and restrict sales invoice creation.",
    icon: "/assets/all-features/icons/credit-card-check-1.svg",
  },
  {
    title: "Credit Days Restriction",
    description: "Warn or block users when customers exceed credit limits.",
    icon: "/assets/all-features/icons/credit-day.svg",
  },
  {
    title: "Custom Attachments for Orders, Invoices",
    description: "Attach PDFs and images directly to Sales Orders, Invoices.",
    icon: "/assets/all-features/icons/attach-ment.svg",
  },
  {
    title: "Cut-Off Date Controls",
    description: "Lock Accounting periods at Org or Voucher-type level.",
    icon: "/assets/all-features/icons/cut-off.svg",
  },
  {
    title: "MoQ Controls",
    description: "Set Minimum Order Quantity limits for customers or items.",
    icon: "/assets/all-features/icons/list-checkbox-2.svg",
  },
  {
    title: "Quotation Module with Flexible Conversion",
    description:
      "Convert quotes to Sales Orders or Invoices seamlessly.",
    icon: "/assets/all-features/icons/estimate-sales-order.svg",
  },
  {
    title: "Bulk Multi Price List with Scheduling",
    description: "Manage complex pricing slabs and scheduled revisions.",
    icon: "/assets/all-features/icons/money-bills.svg",
  },
  {
    title: "Future-Dated Invoice Creation",
    description:
      "Create invoices with future dates within the current accounting month.",
    icon: "/assets/all-features/icons/calendar-check.svg",
  },
  {
    title: "Follow your own Voucher Type & Numbering",
    description: "Use the same Voucher Types and Series from Tally.",
    icon: "/assets/all-features/icons/laptop-settings.svg",
  },
  {
    title: "E-Invoicing & e-WayBill Generation",
    description: "Generate compliant invoices instantly right from the field.",
    icon: "/assets/all-features/icons/e-invoicing-eway-bill.svg",
  },
  {
    title: "Outstanding Receivables",
    description:
      "Track dues by customer and salesperson for proactive collections.",
    icon: "/assets/all-features/icons/hand-holding-coins.svg",
  },
  {
    title: "Collections",
    description:
      "Record Payments against customer and details are synced with your Accountant.",
    icon: "/assets/all-features/icons/hand-holding-money-2.svg",
  },
  {
    title: "Payment Links",
    description:
      "Now include payment links during payment collection remainders.",
    icon: "/assets/all-features/icons/link-4.svg",
  },
  {
    title: "Customer Assignment to Team",
    description:
      "Assign customers to specific sales or support teams. No overlap. No confusion.",
    icon: "/assets/all-features/icons/people-network.svg",
  },
  {
    title: "Reimbursement Notes",
    description: "Manage credit notes or reimbursement adjustments for sales.",
    icon: "/assets/all-features/icons/receipt-4.svg",
  },
  {
    title: "Extra Special Discount (ESD)",
    description: "Manage ad-hoc or special discounts flexibly.",
    icon: "/assets/all-features/icons/money-bill.svg",
  },
  {
    title: "Foreign Currency: Invoice in any currency",
    description: "Generate invoices in any supported currency.",
    icon: "/assets/all-features/icons/money-bill-coin.svg",
  },
  {
    title: "Default Warehouse for Invoicing",
    description: "Pre-set warehouse locations for faster invoicing.",
    icon: "/assets/all-features/icons/storage-unit.svg",
  },
  {
    title: "Intelligent QR on Invoice",
    description:
      "Get Transaction specific QR on your Sales orders or Invoice - collect faster.",
    icon: "/assets/all-features/icons/qrcode.svg",
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
    icon: "/assets/all-features/icons/bank-statement-fetch.svg",
  },
  {
    title: "Auto-categorisation of Bank Entries",
    description: "AI-driven mapping for bank transactions.",
    icon: "/assets/all-features/icons/smart-categorisation.svg",
  },
  {
    title: "Dedicated Reconciliation Workspace",
    description: "Streamlined reconciliation interface.",
    icon: "/assets/all-features/icons/bank-reconciliatio.svg",
  },
  {
    title: "Banking Bulk Categorization",
    description: "Categorize multiple bank transactions in a single action.",
    icon: "/assets/all-features/icons/list-checkbox-2-3.svg",
  },
  {
    title: "On-Account Knock-Off",
    description: "Manage unallocated receipts effectively.",
    icon: "/assets/all-features/icons/money-transfer.svg",
  },
  {
    title: "Collection Alerts to Owners",
    description:
      "Get notified instantly basis the frequency of bank statement to your email. Know who paid and how much.",
    icon: "/assets/all-features/icons/collection-alerts.svg",
  },
  {
    title: "Party Collection",
    description:
      "Map collections to specific customers and ensure data is shared with your accountant.",
    icon: "/assets/all-features/icons/hand-holding-coins.svg",
  },
  {
    title: "Generate Bulk Payment Files for (All Leading Banks)",
    description:
      "Do all approvals and checks in Effortless, & generate payment file basis each bank for one shot payment via bank portal.",
    icon: "/assets/all-features/icons/payment-file-generation.svg",
  },
  {
    title: "Petty Cash Management",
    description:
      "Track small cash spends at branches or in the field — with full control.",
    icon: "/assets/all-features/icons/money-bill-coin.svg",
  },
];

const CROSS_TEAM_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Sales Approval Workflows for Orders, Invoices",
    description: "Ensure multi-level verification for sales.",
    icon: "/assets/all-features/icons/sales-approval-flows.svg",
  },
  {
    title: "Approvals for Purchases, Claims & Payments",
    description: "Standardized approval processes across departments.",
    icon: "/assets/all-features/icons/approval.svg",
  },
  {
    title: "Dynamic Approval Remarks",
    description:
      "Approvers can be required to enter remarks when approving documents.",
    icon: "/assets/all-features/icons/message.svg",
  },
  {
    title: "Multi-Levels & Bulk Approvals",
    description: "Efficiently approve high volumes of transactions.",
    icon: "/assets/all-features/icons/multi-level-approval.svg",
  },
  {
    title: "Designation-based Claim Rule Setup",
    description: "Control claim access based on user hierarchy.",
    icon: "/assets/all-features/icons/briefcase.svg",
  },
  {
    title: "1-Click Invoice Creation",
    description: "Sales orders convert to invoices instantly. No lag. No loss.",
    icon: "/assets/all-features/icons/one-click.svg",
  },
  {
    title: "Audit Trail",
    description:
      "You may choose to track daily activity across effortless and have control on who is doing what!",
    icon: "/assets/all-features/icons/audit-season.svg",
  },
  {
    title: "Multiple outlet/ warehouse/company management",
    description:
      "Multi Warehouse management support for Invoicing and bill booking.",
    icon: "/assets/all-features/icons/multiple-outlet.svg",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Collect payments faster via integrated UPI, cards, or net banking.",
    icon: "/assets/all-features/icons/payment-gateway-integrations.svg",
  },
];

const TRACKING_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Live GPS Tracking",
    description: "Real-time map-based movement tracking.",
    icon: "/assets/all-features/icons/live-gps-tracking.svg",
  },
  {
    title: "Live Location check-in Photo – Not from Gallery",
    description: "Verify attendance via non-gallery photos.",
    icon: "/assets/all-features/icons/photo-checkin.svg",
  },
  {
    title: "Multiple photos in a single customer point.",
    description: "Capture visual proof of visit.",
    icon: "/assets/all-features/icons/multi-photo.svg",
  },
  {
    title: "Fraud Prevention",
    description: "Security measures to prevent GPS spoofing.",
    icon: "/assets/all-features/icons/lock-2.svg",
  },
  {
    title: "GPS-Based Field Team Check-Ins",
    description: "Ensure authentic field logging.",
    icon: "/assets/all-features/icons/gps-based-chickin.svg",
  },
  {
    title: "Supervisor Entry",
    description:
      "Authorize a Supervisor to punch attendence on behalf of your employees",
    icon: "/assets/all-features/icons/web-checkin-supervisor.svg",
  },
  {
    title: "Biometric Integration",
    description:
      "Add biometric hardware for secure check-ins with no proxy punching.",
    icon: "/assets/all-features/icons/live-attendance-biometric.svg",
  },
  {
    title: "Time Spent in Market / Customer",
    description:
      "Know time spent in market / Customer place by your sales resource.",
    icon: "/assets/all-features/icons/time-spent.svg",
  },
  {
    title: "Geo-Fencing",
    description: "Restrict check-ins to where your customers are.",
    icon: "/assets/all-features/icons/geo-fencing.svg",
  },
  {
    title: "Attendance & Leave Management",
    description:
      "Leave requests, approvals, and balances — all managed digitally.",
    icon: "/assets/all-features/icons/calendar-days.svg",
  },
  {
    title: "Custom Forms with Tasks",
    description:
      "Create Custom Tasks for Custom for Sales, Delivery, & Support Teams.",
    icon: "/assets/all-features/icons/customforms.svg",
  },
];

const DASHBOARD_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Daily Business Snapshot on WhatsApp",
    description: "Receive daily summaries directly to WhatsApp.",
    icon: "/assets/all-features/icons/whatsapp.svg",
  },
  {
    title: "Sales & Collection Performance",
    description: "Track daily earnings and collections.",
    icon: "/assets/all-features/icons/laptop-chart-cols-3.svg",
  },
  {
    title: "Sales Order Report",
    description: "Customizable order reporting by dimension.",
    icon: "/assets/all-features/icons/chart-bar-arrow-up.svg",
  },
  {
    title: "Sales Report",
    description: "Detailed sales analytics.",
    icon: "/assets/all-features/icons/chart-pie-4-1.svg",
  },
  {
    title: "Revenue Analysis",
    description: "Deep-dive analysis of growth metrics.",
    icon: "/assets/all-features/icons/chart-stacked-line.svg",
  },
  {
    title: "Uncategorized Transactions",
    description:
      "Have an eye on your Uncategorized Transactions, and categories them.",
    icon: "/assets/all-features/icons/riskicon.svg",
  },
  {
    title: "Compliance Reports (TDS, ITC)",
    description:
      "TDS reports basis TDS rules set, and ITC reports to double ensure you don't lose out due to errors.",
    icon: "/assets/all-features/icons/file-check.svg",
  },
  {
    title: "Cost Centre Reports: Income & Balance Sheet",
    description:
      "Set cost centre layers to compare real-time balance sheets and profitability.",
    icon: "/assets/all-features/icons/cost-centre-pl.svg",
  },
  {
    title: "Inventory Movement Analysis",
    description:
      "See what’s moving and what’s not. Plan purchase and sales better.",
    icon: "/assets/all-features/icons/pallet-package.svg",
  },
];

const INTEGRATION_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Tally (Concurrent & Bi-Directional)",
    description: "Seamless finance-intelligence bridge.",
    icon: "/assets/all-features/icons/plug.svg",
  },
  {
    title: "Custom Development at Additional Cost (Basis Feasibility)",
    description: "Enterprise-tailored feature extensions.",
    icon: "/assets/all-features/icons/customdev.svg",
  },
  {
    title:
      "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters.",
    description: "Easy data ingestion for invoices/orders.",
    icon: "/assets/all-features/icons/migratemenu.svg",
  },
  {
    title: "Multi-Company Concurrent Sync",
    description: "Keep multiple entities in sync.",
    icon: "/assets/all-features/icons/sync.svg",
  },
  {
    title: "Bulk Upload",
    description:
      "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters.",
    icon: "/assets/all-features/icons/bulkupload.svg",
  },
  {
    title: "8 Levels of Enterprise Grade Security",
    description: "From perimeter to core, 8 level of unbreakable security.",
    icon: "/assets/all-features/icons/enterprse-level-security.svg",
  },
  {
    title: "Email, Call, & WhatsApp Support",
    description: "One team, Three channels, Total with support.",
    icon: "/assets/all-features/icons/customer-support.svg",
  },
  {
    title: "Dedicated Account Manager",
    description:
      "Your success partner- A dedicated Account manager for every step.",
    icon: "/assets/all-features/icons/users-shaking-hands.svg",
  },
  {
    title: "Implementation & Onboarding Support",
    description:
      "Your journey starts smoothly with our Onboarding Experts supported by veteran CAs.",
    icon: "/assets/all-features/icons/training.svg",
  },
  {
    title: "Payment Gateway (RazorPay)",
    description: "Got Razorpay? You are already halfway there.",
    icon: "/assets/all-features/icons/credit-card.svg",
  },
];

const REIMBURSEMENT_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "AI-Powered Travel Claims Booking",
    description: "Automate the booking of travel claims.",
    icon: "/assets/all-features/icons/receipt.svg",
  },
  {
    title: "Travel policy limits",
    description: "Enforce spending policies automatically.",
    icon: "/assets/all-features/icons/list-check.svg",
  },
  {
    title: "Amount-Based Approvals (Multi-level)",
    description: "Multi-level approval flow based on claim amount.",
    icon: "/assets/all-features/icons/money-bills.svg",
  },
  {
    title: "GST/TDS Automation",
    description: "Automate compliance for reimbursement claims.",
    icon: "/assets/all-features/icons/calculator-active.svg",
  },
  {
    title: "Reimbursement Advance Limits",
    description: "Set ceilings for advance payments.",
    icon: "/assets/all-features/icons/hand-holding-money-1.svg",
  },
  {
    title: "Field Expense Claims",
    description:
      "Team submits bills directly from mobile. Finance doesn't chase paper.",
    icon: "/assets/all-features/icons/bill-2.svg",
  },
  {
    title: "Reimbursement Policy Controls",
    description:
      "Define what's reimbursable. Eliminate debate, delays, and disputes.",
    icon: "/assets/all-features/icons/todo.svg",
  },
  {
    title: "Document Evidence Storage",
    description:
      "Upload, store, and retrieve all financial proofs — makes you audit ready.",
    icon: "/assets/all-features/icons/document-evidence-storage.svg",
  },
];

const PROCUREMENT_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "GSTIN powered Vendor oboarding",
    description: "Easily onboard vendors using GSTIN validation.",
    icon: "/assets/all-features/icons/user-check.svg",
  },
  {
    title: "Vendor bulk upload - Create vendors in bulk",
    description: "Create vendor records in large batches.",
    icon: "/assets/all-features/icons/bulkupload.svg",
  },
  {
    title: "Create Purchase Requisition",
    description: "Create, approve, track, and convert Purchase Requisitions into Purchase Orders, bringing a structured approval process to procurement requests.",
    icon: "/assets/all-features/icons/ballot-rect1.svg",
  },
  
  {
    title: "Create Purchase Orders",
    description: "Generate professional POs.",
    icon: "/assets/all-features/icons/cart-plus.svg",
  },
  {
    title: "AI-Powered 3-Way Reconciliation (PO-to-GRN-to-Vendor Bill)",
    description:
      "Validate vendor bills against issued POs & GRN - check for variances (Rates/Qty/SKUs), set tolerance limits.",
    icon: "/assets/all-features/icons/ai.svg",
  },
  {
    title: "Multi-Cost centre tagging in PR & POs.",
    description: "Tag Purchase requisitions & POs to specific cost centers.",
    icon: "/assets/all-features/icons/cost-centre-pl.svg",
  },
  {
    title: "Custom Attachments for Bills Booking",
    description: "Attach supporting documents to bill entries.",
    icon: "/assets/all-features/icons/attach-ment.svg",
  },
  {
    title: "Multi GSTN Compliance Support",
    description: "Centrally manage multiple GSTNs.",
    icon: "/assets/all-features/icons/compliance-active.svg",
  },
  {
    title: "Vendor Purchase Invoice Email",
    description: "AI-based email automation for vendor invoices.",
    icon: "/assets/all-features/icons/envelope-content.svg",
  },
  {
    title: "Amount-Based Approvals",
    description: "Configure approvals based on spend thresholds.",
    icon: "/assets/all-features/icons/money-bills.svg",
  },
  {
    title: "Multi-Level budget & Role bases approvals",
    description: "Ensure secure budget control and role-based access.",
    icon: "/assets/all-features/icons/budget-exceed.svg",
  },
  {
    title: "AI-Powered Bill Booking",
    description: "Automate data entry from physical bills.",
    icon: "/assets/all-features/icons/receipt.svg",
  },
  {
    title: "GST/TDS Automation",
    description:
      "Automate tax calculations.",
    icon: "/assets/all-features/icons/calculator-active.svg",
  },
  {
    title: "Journals",
    description:
      "Manage ledger adjustments.",
    icon: "/assets/all-features/icons/book.svg",
  },
  {
    title: "Utility Bill Payments",
    description:
      "Track and Pay recurring office expenses effortlessly like mobile, internet, and electricity.",
    icon: "/assets/all-features/icons/bill-2.svg",
  },
  {
    title: "Foreign Currency: POs, bills, and Expenses in any currency.",
    description:
      "Support for multi-currency transactions.",
    icon: "/assets/all-features/icons/money-bill-coin.svg",
  },
  {
    title: "Single Window for all Payment Types",
    description:
    "Manage diverse payments through one portal.",
    icon: "/assets/all-features/icons/window-cursor.svg",
  },
  {
    title: "Download bills with complete approval history",
    description:
      "Transparent record keeping for audits.",
    icon: "/assets/all-features/icons/download-active.svg",
  },
  {
    title: "Vendor Onboarding Approval Workflow",
    description: "Route every new vendor through up to 5 approval levels, with automatic email alerts to approvers.",
    icon: "/assets/all-features/icons/decision-process.svg",
  },
  {
    title: "MSME & LDC Details Capture during Vendor Onboarding",
    description: "Capture MSME registration and Lower Deduction Certificate details up front for correct compliance treatment.",
    icon: "/assets/all-features/icons/award-certificate.svg",
  },
  {
    title: "GSTIN Validation & On-Demand Status Refresh during document creation",
    description: "Validate vendor GSTIN and refresh its live status while creating documents, so you never bill against a cancelled GSTIN.",
    icon: "/assets/all-features/icons/circle-check.svg",
  },
  {
    title: "Live Stock Availability while creating Procurement Transactions",
    description: "See real-time stock on hand while raising requisitions, POs and bills to avoid over-ordering.",
    icon: "/assets/all-features/icons/pallet-package.svg",
  },
  {
    title: "Automated PO Expiry Policy (auto-close, block GRN/Bill, reopen by extending)",
    description: "Auto-close POs past validity, block further GRNs or bills against them, and reopen by extending the expiry date.",
    icon: "/assets/all-features/icons/calendar-clock.svg",
  },
  {
    title: "Advance TDS Adjustment against Vendor Bill (prevents duplicate TDS)",
    description: "Adjust TDS already deducted on advances against the final vendor bill, preventing double deduction.",
    icon: "/assets/all-features/icons/money-transfer.svg",
  },
];

const BUYER_PORTAL_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Effortless Connect mobile app (Android/iOS) — unlimited",
    description: "Provide unlimited mobile access for customers.",
    icon: "/assets/all-features/icons/mobile-app.svg",
  },
  {
    title: "Product catalogue with in-stock items & view controls",
    description: "Display inventory availability with visibility controls.",
    icon: "/assets/all-features/icons/product-catalogue.svg",
  },
  {
    title: "Self-serve ordering (MoQ controls) & live order status tracking",
    description: "Allow customers to order and track status with MoQ controls.",
    icon: "/assets/all-features/icons/cart-plus-1.svg",
  },
  {
    title: "Dashboard with transaction, payables & invoice history",
    description: "Give buyers full visibility into their account history.",
    icon: "/assets/all-features/icons/ardashboard.svg",
  },
  {
    title:
      "Open bills, schemes management, specialised SKU visibility controls",
    description: "Display pending bills and applicable schemes for buyers.",
    icon: "/assets/all-features/icons/bill-3.svg",
  },
  {
    title: "Statement of Accounts",
    description: "Download or view SoA anytime — no need to contact finance.",
    icon: "/assets/all-features/icons/bank-statement.svg",
  },
];

const RECURRING_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Set Recurring Contracts",
    description:
      "Set frequency, duration, service start date, billing date, billing mode and payment mode once.",
    icon: "/assets/all-features/icons/subscription.svg",
  },
  {
    title: "Contract Renewal Reminders",
    description:
      "Set Up Multiple Auto-Reminders Before Contract Expiry (WhatsApp + Email)",
    icon: "/assets/all-features/icons/calendar-clock.svg",
  },
  {
    title: "Auto schedule Pro-forma / E-Invoice",
    description: "Schedule and forget. Let Effortless do it for you!",
    icon: "/assets/all-features/icons/doc-timer.svg",
  },
  {
    title: "Smart Reminders",
    description:
      "WhatsApp + Email payment outstanding reminders fire automatically. No manual follow-ups, no missed renewals.",
    icon: "/assets/all-features/icons/alarm-clock.svg",
  },
  {
    title: "Payment QR & Pay Now Links",
    description: "Easily include QR/payment links in collection reminders.",
    icon: "/assets/all-features/icons/link-4.svg",
  },
];

const CUSTOMER_WORKFLOWS_ALL_FEATURES: AllFeaturesItem[] = [
  {
    title: "Pay Now Emails with Invoices",
    description: "Send invoice + payment link for instant action.",
    icon: "/assets/all-features/icons/pay-now-emails-with-invoices.svg",
  },
  {
    title: "Auto-Share of Invoices (WhatsApp and Email)",
    description: "Automated distribution via WhatsApp/Email.",
    icon: "/assets/all-features/icons/auto-share-of-invoiceswhatsapp-and-email.svg",
  },
  {
    title: "Automated Reminders (WhatsApp and Email)",
    description: "Chase payments automatically.",
    icon: "/assets/all-features/icons/alarm-clock.svg",
  },
  {
    title: "Domain-Mapped Reminder Delivery",
    description: "Send professional branded communications.",
    icon: "/assets/all-features/icons/envelope.svg",
  },
  {
    title: "Auto Notify Internal Users on Portal Orders",
    description: "Keep internal teams updated on buyer orders.",
    icon: "/assets/all-features/icons/bell-filled-1.svg",
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
      icon: "/assets/all-features/icons/bank-statement-fetch.svg",
    },
    {
      title: "Auto-categorisation of Bank Entries",
      description: "AI-driven mapping for bank transactions.",
      icon: "/assets/all-features/icons/smart-categorisation.svg",
    },
    {
      title: "Dedicated Reconciliation Workspace",
      description: "Streamlined reconciliation interface.",
      icon: "/assets/all-features/icons/bank-reconciliatio.svg",
    },
    {
      title: "Banking Bulk Categorization",
      description: "Categorize multiple bank transactions in a single action.",
      icon: "/assets/all-features/icons/list-checkbox-2-3.svg",
    },
    {
      title: "On-Account Knock-Off",
      description: "Manage unallocated receipts effectively.",
      icon: "/assets/all-features/icons/money-transfer.svg",
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
      icon: "/assets/all-features/icons/sales-approval-flows.svg",
    },
    {
      title: "Approvals for Purchases, Claims & Payments",
      description: "Standardized approval processes across departments.",
      icon: "/assets/all-features/icons/approval.svg",
    },
    {
      title: "Dynamic Approval Remarks",
      description:
        "Approvers can be required to enter remarks when approving documents.",
      icon: "/assets/all-features/icons/message.svg",
    },
    {
      title: "Multi-Levels & Bulk Approvals",
      description: "Efficiently approve high volumes of transactions.",
      icon: "/assets/all-features/icons/multi-level-approval.svg",
    },
    {
      title: "Designation-based Claim Rule Setup",
      description: "Control claim access based on user hierarchy.",
      icon: "/assets/all-features/icons/briefcase.svg",
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
      icon: "/assets/all-features/icons/live-gps-tracking.svg",
    },
    {
      title: "Live Location check-in Photo – Not from Gallery",
      description: "Verify attendance via non-gallery photos.",
      icon: "/assets/all-features/icons/photo-checkin.svg",
    },
    {
      title: "Multiple photos in a single customer point.",
      description: "Capture visual proof of visit.",
      icon: "/assets/all-features/icons/multi-photo.svg",
    },
    {
      title: "Fraud Prevention",
      description: "Security measures to prevent GPS spoofing.",
      icon: "/assets/all-features/icons/lock-2.svg",
    },
    {
      title: "GPS-Based Field Team Check-Ins",
      description: "Ensure authentic field logging.",
      icon: "/assets/all-features/icons/gps-based-chickin.svg",
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
      icon: "/assets/all-features/icons/whatsapp.svg",
    },
    {
      title: "Sales & Collection Performance",
      description: "Track daily earnings and collections.",
      icon: "/assets/all-features/icons/laptop-chart-cols-3.svg",
    },
    {
      title: "Sales Order Report",
      description: "Customizable order reporting by dimension.",
      icon: "/assets/all-features/icons/chart-bar-arrow-up.svg",
    },
    {
      title: "Sales Report",
      description: "Detailed sales analytics.",
      icon: "/assets/all-features/icons/chart-pie-4-1.svg",
    },
    {
      title: "Revenue Analysis",
      description: "Deep-dive analysis of growth metrics.",
      icon: "/assets/all-features/icons/chart-stacked-line.svg",
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
      icon: "/assets/all-features/icons/plug.svg",
    },
    {
      title: "Custom Development at Additional Cost (Basis Feasibility)",
      description: "Enterprise-tailored feature extensions.",
      icon: "/assets/all-features/icons/customdev.svg",
    },
    {
      title:
        "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters.",
      description: "Easy data ingestion for invoices/orders.",
      icon: "/assets/all-features/icons/migratemenu.svg",
    },
    {
      title: "Multi-Company Concurrent Sync",
      description: "Keep multiple entities in sync.",
      icon: "/assets/all-features/icons/sync.svg",
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
      icon: "/assets/all-features/icons/receipt.svg",
    },
    {
      title: "Travel policy limits",
      description: "Enforce spending policies automatically.",
      icon: "/assets/all-features/icons/list-check.svg",
    },
    {
      title: "Amount-Based Approvals (Multi-level)",
      description: "Multi-level approval flow based on claim amount.",
      icon: "/assets/all-features/icons/money-bills.svg",
    },
    {
      title: "GST/TDS Automation",
      description: "Automate compliance for reimbursement claims.",
      icon: "/assets/all-features/icons/calculator-active.svg",
    },
    {
      title: "Reimbursement Advance Limits",
      description: "Set ceilings for advance payments.",
      icon: "/assets/all-features/icons/hand-holding-money-1.svg",
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
            icon: "/assets/all-features/icons/user-check.svg",
          },
          {
            title: "Create Purchase Orders",
            description: "Generate professional POs.",
            icon: "/assets/all-features/icons/cart-plus.svg",
          },
          {
            title:
              "AI-Powered 3-Way Reconciliation (PO-to-GRN-to-Vendor Bill)",
            description:
              "Validate vendor bills against issued POs & GRN - check for variances (Rates/Qty/SKUs), set tolerance limits.",
            icon: "/assets/all-features/icons/ai.svg",
          },
          {
            title: "AI-Powered Bill Booking",
            description: "Automate data entry from physical bills.",
            icon: "/assets/all-features/icons/receipt.svg",
          },
          {
            title: "Multi-Level Budget Approvals",
            description: "Ensure secure budget control and role-based access.",
            icon: "/assets/all-features/icons/budget-exceed.svg",
          },
          {
            title: "Multi GSTN Compliance Support",
            description: "Centrally manage multiple GSTNs.",
            icon: "/assets/all-features/icons/compliance-active.svg",
          },
          {
            title: "GST/TDS Automation",
            description: "Automate tax calculations.",
            icon: "/assets/all-features/icons/calculator-active.svg",
          },
          {
            title:
              "Single Window for all Payment Types (Vendor/Customer/Statutory/Advances/Others)",
            description: "Manage diverse payments through one portal.",
            icon: "/assets/all-features/icons/window-cursor.svg",
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
            icon: "/assets/all-features/icons/user-check.svg",
          },
          {
            title: "Estimate, PI & Sales Order Creation (Multi-level Approvals)",
            description:
              "Create and approve sales documents with multi-stage verification.",
            icon: "/assets/all-features/icons/estimate-and-order-creation.svg",
          },
          {
            title: "AI powered Advanced Scheming Management",
            description:
              "Supports complex schemes like Buy A Get B, slab discounts, triggers, and flexible accounting.",
            icon: "/assets/all-features/icons/ai.svg",
          },
          {
            title: "Customer wise Credit Limit check",
            description:
              "Check real-time credit limits and restrict invoicing accordingly.",
            icon: "/assets/all-features/icons/credit-card-check-1.svg",
          },
          {
            title: "Outstanding Receivables",
            description:
              "Real-time visibility into customer-wise pending payments.",
            icon: "/assets/all-features/icons/hand-holding-coins.svg",
          },
          {
            title: "Collections & Payment links",
            description:
              "Record and sync payments while sending collection reminders with payment links.",
            icon: "/assets/all-features/icons/link-4.svg",
          },
          {
            title: "E-Invoicing & e-WayBill Generation",
            description:
              "Record and sync payments while sending collection reminders with payment links.",
            icon: "/assets/all-features/icons/e-invoicing-eway-bill.svg",
          },
          {
            title: "Intelligent QR on Invoice",
            description:
              "Embed transaction-specific QR codes for faster payments.",
            icon: "/assets/all-features/icons/qrcode.svg",
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
            icon: "/assets/all-features/icons/mobile-app.svg",
          },
          {
            title: "Product catalogue with in-stock items & view controls",
            description:
              "Display inventory availability with visibility controls.",
            icon: "/assets/all-features/icons/product-catalogue.svg",
          },
          {
            title:
              "Self-serve ordering (MoQ controls) & live order status tracking",
            description:
              "Allow customers to order and track status with MoQ controls.",
            icon: "/assets/all-features/icons/cart-plus-1.svg",
          },
          {
            title: "Dashboard with transaction, payables & invoice history",
            description: "Give buyers full visibility into their account history.",
            icon: "/assets/all-features/icons/ardashboard.svg",
          },
          {
            title:
              "Open bills, schemes management, specialised SKU visibility controls",
            description:
              "Display pending bills and applicable schemes for buyers.",
            icon: "/assets/all-features/icons/bill-3.svg",
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
            icon: "/assets/all-features/icons/subscription.svg",
          },
          {
            title: "Contract Renewal Reminders",
            description:
              "Set Up Multiple Auto-Reminders Before Contract Expiry (WhatsApp + Email)",
            icon: "/assets/all-features/icons/calendar-clock.svg",
          },
          {
            title: "Auto schedule Pro-forma / E-Invoice",
            description: "Schedule and forget. Let Effortless do it for you!",
            icon: "/assets/all-features/icons/doc-timer.svg",
          },
          {
            title: "Smart Reminders",
            description:
              "WhatsApp + Email payment outstanding reminders fire automatically. No manual follow-ups, no missed renewals.",
            icon: "/assets/all-features/icons/alarm-clock.svg",
          },
          {
            title: "Payment QR & Pay Now Links",
            description:
              "Easily include QR/payment links in collection reminders.",
            icon: "/assets/all-features/icons/link-4.svg",
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
            icon: "/assets/all-features/icons/pay-now-emails-with-invoices.svg",
          },
          {
            title: "Auto-Share of Invoices (WhatsApp and Email)",
            description: "Automated distribution via WhatsApp/Email.",
            icon: "/assets/all-features/icons/auto-share-of-invoiceswhatsapp-and-email.svg",
          },
          {
            title: "Automated Reminders (WhatsApp and Email)",
            description: "Chase payments automatically.",
            icon: "/assets/all-features/icons/alarm-clock.svg",
          },
          {
            title: "Domain-Mapped Reminder Delivery",
            description: "Send professional branded communications.",
            icon: "/assets/all-features/icons/envelope.svg",
          },
          {
            title: "Auto Notify Internal Users on Portal Orders",
            description: "Keep internal teams updated on buyer orders.",
            icon: "/assets/all-features/icons/bell-filled-1.svg",
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
