/**
 * Feature comparison tables for the two pricing detail pages — Figma nodes
 * 2426:66274 (Procurement) and 2426:67870 (Sales).
 *
 * Generated from the design's text layers, then reconciled against the frame
 * render: a cell is `true` for a plain green tick, `false` for a red cross, or
 * a string for a plain label. Labelled cells carry no tick — the label is the
 * value, and a tick in front of it read as a second, contradictory state.
 *
 * The crosses carry real meaning and are not in the text layers at all — they
 * are vector glyphs — so they were located by scanning the rendered frame for
 * red pixels rather than read by eye. Procurement has exactly one; Sales has
 * four. All five sit in the Grow column.
 */

export type PricingCell = boolean | string;

export interface PricingTableRow {
  label: string;
  grow: PricingCell;
  scale: PricingCell;
  /** Figma 2426:70812: the money rows of Over View print their values in accent. */
  accent?: boolean;
  /**
   * A second feature that shares this row's cells — Figma draws the Banking
   * "AI Fetch" / "Auto-categorisation" pair as one 120px row with the
   * "(Up To 2 Banks)" value centred across both labels.
   */
  alsoLabel?: string;
}

export interface PricingTableSection {
  name: string;
  badge?: string;
  /**
   * Figma 2426:70810: in Over View a trailing "(…)" qualifier on the label is
   * set in accent. Other modules keep their parentheticals in ink.
   */
  highlightNotes?: boolean;
  /**
   * Figma 2426:70711: the Buyer Portal module prints one cell for the whole
   * Grow column — "Add-on" — instead of a value per row.
   */
  growMerged?: string;
  rows: PricingTableRow[];
}

/** 72 rows across 8 modules. */
export const procurementComparison: PricingTableSection[] = [
  {
    name: "Over View",
    badge: undefined,
    highlightNotes: true,
    rows: [
      { label: "Monthly price (billed annually)", grow: "₹12,833/mo", scale: "₹30,000/mo", accent: true },
      { label: "One-Time Setup (CA-Led Onboarding)", grow: "₹48,000", scale: "₹1,24,000", accent: true },
      { label: "Named users included (With Primary Product)", grow: "15", scale: "50" },
      { label: "Additional user cost", grow: "₹3,000/user", scale: "₹3,000/user" },
      { label: "AI-powered document scans (Vendor Bills)", grow: "5000", scale: "20000" },
      { label: "Linked Bank Accounts (Auto-Fetch & BRS)", grow: "2", scale: "5" },
      { label: "Document Evidence Storage (Bills, POs, DC, GRN, Contracts, PDCs)", grow: "10GB", scale: "25GB" },
      { label: "Multi-level approval depth", grow: "up-to 2 levels", scale: "up-to 10 levels" },
      { label: "Field Reimbursement Claims", grow: "Included", scale: "Included" },
    ],
  },
  {
    name: "Purchase Orders & Vendor Expense Management",
    badge: "Primary Product",
    rows: [
      { label: "GSTIN powered Vendor onboarding", grow: true, scale: "Customer Field Capture" },
      { label: "Vendor bulk upload - Create vendors in bulk", grow: true, scale: true },
      { label: "Create Purchase Requisition", grow: false, scale: true },
      { label: "Create Purchase Orders", grow: true, scale: true },
      { label: "AI-Powered 3-Way Reconciliation (PO-to-GRN-to-Vendor Bill)", grow: true, scale: true },
      { label: "Multi-Cost centre tagging in PR & POs.", grow: "Custom", scale: "Custom" },
      { label: "Custom attachments for bill booking", grow: "Standard - up to 5", scale: "Custom" },
      { label: "Multi GSTN Compliance Support", grow: true, scale: true },
      { label: "Vendor Purchase Invoice Email", grow: true, scale: true },
      { label: "Amount-Based Approvals", grow: "Up To 2 levels", scale: "Up To 10 levels" },
      { label: "Multi-Level budget & Role bases approvals", grow: true, scale: true },
      { label: "AI-Powered Bill Booking", grow: "Upto 5k Pages AI Scans free", scale: "Up To 20k Pages AI Scans free" },
      { label: "GST/TDS Automation", grow: true, scale: true },
      { label: "Journals", grow: true, scale: true },
      { label: "Utility Bill Payments", grow: true, scale: true },
      { label: "Foreign Currency: POs, bills, and Expenses in any currency.", grow: true, scale: true },
      { label: "Single Window for all Payment Types (Vendor/Customer/Statutory/Advances/Others)", grow: true, scale: true },
      { label: "Download bills with complete approval history", grow: true, scale: true },
    ],
  },
  {
    name: "Field Reimbursement Claims",
    badge: "Add-On",
    rows: [
      { label: "Travel Claims Booking", grow: true, scale: true },
      { label: "Travel policy limits", grow: true, scale: true },
      { label: "Amount-Based Approvals (Multi-level)", grow: "Up To 2 levels", scale: "Up To 10 levels" },
      { label: "GST/TDS Automation", grow: true, scale: true },
      { label: "Reimbursement Advance Limits", grow: true, scale: true },
      { label: "Foreign Currency: Reimbursements in any currency", grow: true, scale: true },
      { label: "Accounting Date for Reimbursements", grow: true, scale: true },
      { label: "Download bills with complete approval history", grow: true, scale: true },
    ],
  },
  {
    name: "Banking and Cash Flow Management",
    badge: "Enabler Module",
    rows: [
      { label: "Bank Statement AI Fetch for (All Leading Banks)", alsoLabel: "Auto-categorisation of Bank Entries", grow: "(Up To 2 Banks)", scale: "(Up To 5 Banks)" },
      { label: "Dedicated Reconciliation Workspace", grow: true, scale: true },
      { label: "Banking Bulk Categorization", grow: true, scale: true },
      { label: "Bulk Payment File Generation (All Leading Banks)", grow: true, scale: true },
      { label: "Petty Cash Management", grow: true, scale: true },
    ],
  },
  {
    name: "Cross-Team Workflows",
    badge: "Enabler Module",
    rows: [
      { label: "Approvals for Purchases, Claims & Payments", grow: true, scale: true },
      { label: "Designation-based Claim Rule Setup", grow: true, scale: true },
      { label: "Dynamic Approval Remarks", grow: true, scale: true },
      { label: "Multi-Levels & Bulk Approvals", grow: "(Up To 2 Levels)", scale: "(Up To 10 Levels)" },
      { label: "1-Click Invoice Creation", grow: true, scale: true },
      { label: "Audit Trail", grow: true, scale: true },
      { label: "Multiple outlet/warehouse/company management", grow: true, scale: true },
      { label: "Payment Gateway Integration", grow: true, scale: true },
      { label: "Item Visibility & User-Based Restrictions", grow: true, scale: true },
    ],
  },
  {
    name: "Office & Live Field Team Tracking",
    badge: "Enabler Module",
    rows: [
      { label: "GPS-Based Field Team Check-Ins (site/vendor visits)", grow: true, scale: true },
      { label: "Supervisor Entry", grow: true, scale: true },
      { label: "Biometric Integration", grow: true, scale: true },
      { label: "Attendance & Leave Management", grow: true, scale: true },
      { label: "Custom Forms with Tasks (For Sales, Delivery, & Service Teams)", grow: true, scale: true },
    ],
  },
  {
    name: "Business Health Dashboard",
    badge: "Enabler Module",
    rows: [
      { label: "Daily Business Snapshot on WhatsApp", grow: true, scale: true },
      { label: "Revenue Analysis", grow: true, scale: true },
      { label: "Uncategorized Transactions", grow: true, scale: true },
      { label: "Compliance Reports (TDS, ITC)", grow: true, scale: true },
      { label: "Cost Centre Income Statement & Balance Sheets", grow: true, scale: true },
      { label: "Income Statement, Balance Sheet, and Cash Flow Statements", grow: true, scale: true },
      { label: "Inventory Movement Analysis", grow: true, scale: true },
      { label: "Dynamic Ageing Report", grow: true, scale: true },
    ],
  },
  {
    name: "Integrations, Data Exchange, Security & Support",
    badge: "Enabler Module",
    rows: [
      { label: "Tally (Concurrent & Bi-Directional)", grow: true, scale: true },
      { label: "Custom Development at Additional Cost (Basis Feasibility)", grow: true, scale: true },
      { label: "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters", grow: true, scale: true },
      { label: "8 Levels of Enterprise Grade Security", grow: true, scale: true },
      { label: "Email, Call, & WhatsApp Support", grow: true, scale: true },
      { label: "Dedicated Account Manager", grow: true, scale: true },
      { label: "Implementation & Onboarding Support", grow: true, scale: true },
      { label: "Payment Gateway (RazorPay)", grow: true, scale: true },
      { label: "BillBox and Accounted Bills Downloads", grow: true, scale: true },
    ],
  },
];

/** 120 rows across 11 modules. */
export const salesComparison: PricingTableSection[] = [
  {
    name: "Over View",
    badge: undefined,
    highlightNotes: true,
    rows: [
      { label: "Monthly price (billed annually)", grow: "₹12,833/mo", scale: "₹30,000/mo", accent: true },
      { label: "One-Time Setup (CA-Led Onboarding)", grow: "₹48,000", scale: "₹1,24,000", accent: true },
      { label: "Named users included (With Primary Product)", grow: "15", scale: "50" },
      { label: "Additional user cost", grow: "₹3,000/user", scale: "₹3,000/user" },
      // { label: "AI-powered document scans (Claims + Bills)", grow: "5000", scale: "20000" },
      { label: "Linked Bank Accounts (Auto-Fetch & BRS)", grow: "2", scale: "5" },
      { label: "Document Evidence Storage (Bills, POs, DC, GRN, Contracts, PDCs)", grow: "10GB", scale: "25GB" },
      { label: "Multi-level approval depth", grow: "up-to 2 levels", scale: "up-to 10 levels" },
      { label: "Buyer Portal (self-serve commerce)", grow: "Optional · ₹1.54L + ₹48,000 setup", scale: "Included" },
      { label: "Field Reimbursement Claims", grow: "Included", scale: "Included" },
      { label: "Recurring Contract & Auto Billing", grow: "Included", scale: "Included" },
    ],
  },
  {
    name: "Sales & Fleet on Street",
    badge: "Primary Product",
    rows: [
      { label: "GSTIN powered Customer oboarding", grow: true, scale: true },
      { label: "Customizable Template (Quotations, Sales Orders, and Invoices)", grow: false, scale: true },
      { label: "Walk-in Customers", grow: true, scale: true },
      { label: "Estimate, PI & Sales Order Creation (Multi-level Approvals)", grow: true, scale: true },
      { label: "Advanced Schement Management (Buy A Get A, Buy A get B, But A Get X% off, Buy A+B, get C, etc.), Scheme Slabs, Scheme Timer, Upsell Trigger. Flexible invoice and accounting treatment - the way you want!", grow: "Unlimited", scale: "Unlimited" },
      { label: "Bulk upload schemes", grow: true, scale: true },
      { label: "Scheme Creation and Management (Unlimited)", grow: true, scale: true },
      { label: "Customer wise Credit Limit check", grow: true, scale: true },
      { label: "Credit Days Restriction", grow: true, scale: true },
      { label: "Custom Attachments for Orders, Invoices", grow: "Custom", scale: "Custom" },
      { label: "Cut-Off Date Controls", grow: true, scale: true },
      { label: "MoQ controls", grow: true, scale: true },
      { label: "Quotation Module with Flexible Conversion — Convert to Sales Order, Invoice, or both.", grow: true, scale: true },
      { label: "Bulk Multi Price list, slab pricing, Schedule price revisions with applicable dates", grow: true, scale: true },
      { label: "Future-dated invoice creation (within the same month)", grow: true, scale: true },
      { label: "Follow your own Voucher Type & Numbering", grow: true, scale: true },
      { label: "E-Invoicing & e WayBill Generation", grow: "1500/month", scale: "5000/month" },
      { label: "Recurring Invoices", grow: true, scale: true },
      { label: "Outstanding Receivables", grow: true, scale: true },
      { label: "Collections", grow: true, scale: true },
      { label: "Payment Links", grow: true, scale: true },
      { label: "Customer Assignment to Team", grow: true, scale: true },
      { label: "Reimbursement Notes", grow: true, scale: true },
      { label: "Extra Special Discount (ESD)", grow: true, scale: true },
      { label: "Foreign Currency:Invoice in any currency.", grow: true, scale: true },
      { label: "Default Warehouse for Invoicing", grow: true, scale: true },
      { label: "Intelligent QR on Invoice", grow: true, scale: true },
    ],
  },
  {
    name: "Buyer Portal: Self Serve Commerce (Unlimited)",
    badge: "Add-On",
    growMerged: "Add-on",
    rows: [
      { label: "Effortless connect Mobile App (Android/iOS) - unlimited", grow: true, scale: true },
      { label: "Product catalogue with In-Stock Items with view Controls", grow: true, scale: true },
      { label: "Self-Serve Ordering (MoQ Controls) & Live order status Tracking", grow: true, scale: true },
      { label: "Dashboard with Transaction, Payables & Invoice History", grow: true, scale: true },
      { label: "Open Bills, Schemes Management, specialised SKUs visibility controls", grow: true, scale: true },
      { label: "Amazon Like Catalogue browsing experience", grow: true, scale: true },
      { label: "Statement of Accounts (View/download)", grow: true, scale: true },
      { label: "Auto approval for the customer portal (Based on limits)", grow: true, scale: true },
    ],
  },
  {
    name: "Field Reimbursement Claims",
    badge: "Add-On",
    rows: [
      { label: "Travel Claims Booking", grow: true, scale: true },
      { label: "Travel policy limits", grow: true, scale: true },
      { label: "Amount-Based Approvals (Multi-level)", grow: "Up To 2 levels", scale: "Up To 10 levels" },
      { label: "GST/TDS Automation", grow: true, scale: true },
      { label: "Reimbursement Advance Limits", grow: true, scale: true },
      { label: "Foreign Currency: Reimbursements in any currency", grow: true, scale: true },
      { label: "Accounting Date for Reimbursements", grow: true, scale: true },
      { label: "Download bills with complete approval history", grow: true, scale: true },
    ],
  },
  {
    name: "Recurring Contract & Auto Billing",
    badge: "Add-On",
    rows: [
      { label: "Set Recurring Contracts", grow: true, scale: true },
      { label: "Bulk Contracts", grow: true, scale: true },
      { label: "Contract Renewal Reminders", grow: true, scale: true },
      { label: "Auto schedule Pro-forma / E-Invoice", grow: true, scale: true },
      { label: "Smart Reminders", grow: true, scale: true },
      { label: "Payment QR & Pay Now Links", grow: true, scale: true },
      { label: "Multi-Branch & Cost Centre Visibility", grow: true, scale: true },
    ],
  },
  {
    name: "Banking and Cash Flow Management",
    badge: "Enabler Module",
    rows: [
      { label: "Bank Statement AI Fetch for (All Leading Banks)", alsoLabel: "Auto-categorisation of Bank Entries", grow: "(Up To 2 Banks)", scale: "(Up To 5 Banks)" },
      { label: "Dedicated Reconciliation Workspace", grow: true, scale: true },
      { label: "Banking Bulk Categorization", grow: true, scale: true },
      { label: "On-Account Knock-Off", grow: true, scale: true },
      { label: "Collection Alerts to Owners", grow: true, scale: true },
      { label: "Party Collection", grow: true, scale: true },
      { label: "Bulk Payment File Generation (All Leading Banks)", grow: true, scale: true },
      { label: "Petty Cash Management", grow: true, scale: true },
    ],
  },
  {
    name: "Cross-Team Workflows",
    badge: "Enabler Module",
    rows: [
      { label: "Sales Approval Workflows for Orders, Invoices", grow: true, scale: true },
      { label: "Dynamic Approval Remarks", grow: true, scale: true },
      { label: "Multi-Levels & Bulk Approvals", grow: "(Up To 2 Levels)", scale: "(Up To 10 Levels)" },
      { label: "1-Click Invoice Creation", grow: true, scale: true },
      { label: "Audit Trail", grow: true, scale: true },
      { label: "Multiple outlet/warehouse/company management", grow: true, scale: true },
      { label: "Payment Gateway Integration", grow: true, scale: true },
      { label: "Item Visibility & User-Based Restrictions", grow: true, scale: true },
    ],
  },
  {
    name: "Office & Live Field Team Tracking",
    badge: "Enabler Module",
    rows: [
      { label: "Live GPS Tracking", grow: true, scale: true },
      { label: "Live Location check-in Photo – Not from Gallery", grow: true, scale: true },
      { label: "Multiple photos in a single customer point.", grow: false, scale: true },
      { label: "Fraud Prevention", grow: false, scale: true },
      { label: "GPS-Based Field Team Check-Ins", grow: true, scale: true },
      { label: "Supervisor Entry", grow: true, scale: true },
      { label: "Biometric Integration", grow: true, scale: true },
      { label: "Kms Travelled", grow: true, scale: true },
      { label: "Spend/ Visited More than 10+ Mins / per customer Report", grow: true, scale: true },
      { label: "Time Spent in Market", grow: true, scale: true },
      { label: "Geo-Fencing", grow: false, scale: true },
      { label: "Attendance & Leave Management", grow: true, scale: true },
      { label: "Custom Forms with Tasks (For Sales, Delivery, & Service Teams)", grow: true, scale: true },
    ],
  },
  {
    name: "Customer Workflows",
    badge: "Enabler Module",
    rows: [
      { label: "Pay Now Emails with Invoices", grow: true, scale: true },
      { label: "Auto-Share of Invoices (WhatsApp and Email)", grow: true, scale: true },
      { label: "Automated Reminders (WhatsApp and Email)", grow: true, scale: true },
      { label: "Domain-Mapped Reminder Delivery", grow: true, scale: true },
      { label: "Auto Notify Internal Users on Portal Orders", grow: true, scale: true },
      { label: "Automatic Pending Approval Reminders", grow: true, scale: true },
    ],
  },
  {
    name: "Business Health Dashboard",
    badge: "Enabler Module",
    rows: [
      { label: "Daily Business Snapshot on WhatsApp", grow: true, scale: true },
      { label: "Sales & Collection Performance", grow: true, scale: true },
      { label: "Sales Order Report", grow: true, scale: true },
      { label: "Sales Report", grow: true, scale: true },
      { label: "Revenue Analysis", grow: true, scale: true },
      { label: "Uncategorized Transactions", grow: true, scale: true },
      { label: "Compliance Reports (TDS, ITC)", grow: true, scale: true },
      { label: "Cost Centre Income Statement & Balance Sheets", grow: true, scale: true },
      { label: "Income Statement, Balance Sheet, and Cash Flow Statements", grow: true, scale: true },
      { label: "Inventory Movement Analysis", grow: true, scale: true },
      { label: "Inactive Customers along with receivables Report", grow: true, scale: true },
      { label: "Dynamic Ageing Report", grow: true, scale: true },
    ],
  },
  {
    name: "Integrations, Data Exchange, Security & Support",
    badge: "Enabler Module",
    rows: [
      { label: "Tally (Concurrent & Bi-Directional)", grow: true, scale: true },
      { label: "Custom Development at Additional Cost (Basis Feasibility)", grow: true, scale: true },
      { label: "Bulk upload Invoices, Sales Orders, & Estimates. Auto-map Part Numbers to Tally Masters", grow: true, scale: true },
      { label: "8 Levels of Enterprise Grade Security", grow: true, scale: true },
      { label: "Email, Call, & WhatsApp Support", grow: true, scale: true },
      { label: "Dedicated Account Manager", grow: true, scale: true },
      { label: "Implementation & Onboarding Support", grow: true, scale: true },
      { label: "Payment Gateway (RazorPay)", grow: true, scale: true },
      { label: "BillBox and Accounted Bills Downloads", grow: true, scale: true },
    ],
  },
];
