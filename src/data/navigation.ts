/**
 * Site navigation — Figma "Dropdown & Menu Components" (node 1746:24388),
 * header frame 2514:80690.
 *
 * Supersedes the arrays that were hardcoded inside NewHeader.tsx and the
 * earlier "Problems We Fix" panel (node 982:32835), which the redesign
 * replaced with the Your Challenges / Your Industry / Your Role model.
 *
 * Item glyphs are the orange vector icons exported from the dropdown nodes
 * (2359:51640 Products, 1746:24019 Solutions, 1746:23990 Resources) into
 * `/public/assets/nav`, referenced by basename via `icon`. They replace the
 * emoji placeholders an earlier pass used after `download_assets` was called
 * against 1746:24062, a node that happens to hold no vectors of its own.
 */

/** A row in an expanded Solutions accordion (Figma 1568:31104 / 1568:31103). */
export interface NavChild {
  label: string;
  /** Omitted while the destination is undesigned — the row reads as text. */
  href?: string;
}

export interface NavLink {
  label: string;
  /**
   * Omitted while the destination is undesigned. Every Solutions row is in
   * that state today, so the panel is read-only — see the note above
   * `solutionMenu`.
   */
  href?: string;
  /**
   * Turns the row into an accordion (Figma 1571:31323): the row becomes a
   * toggle with a chevron, and opening it reveals these as a bulleted list.
   * Only the Solutions rows have them — the sheets at 1746:24062 (Challenges),
   * 1746:24064 (Industry) and 1746:24063 (Role) are where the copy comes from.
   */
  children?: NavChild[];
  /** Basename of the icon in `/public/assets/nav`, exported from Figma. */
  icon?: string;
  /**
   * Illustration below the copy, as on the Resources "Featured" card
   * (Figma 1568:30487 — 152×160).
   */
  image?: { src: string; width: number; height: number };
  /** Short accent-coloured qualifier under the label. */
  tagline?: string;
  /** Supporting copy. May contain inline HTML. */
  description?: string;
  /** Pill shown after the label, e.g. "PRIMARY PRODUCT". */
  badge?: string;
  external?: boolean;
  comingSoon?: boolean;
}

export interface NavGroup {
  title: string;
  /** Basename of the group-header icon in `/public/assets/nav`. */
  icon?: string;
  /** Muted line under the group title. */
  subtitle?: string;
  /** Accent-coloured qualifier beside the group title, e.g. "(Add-on)". */
  note?: string;
  /**
   * Tighter type and row spacing — 14px title and 8px item block padding
   * instead of 16px/12px. Figma draws the Products right-hand column
   * (2364:52293, 2426:70582) this way to fit its longer list; every other
   * group in every panel uses the roomier default.
   */
  dense?: boolean;
  links: NavLink[];
}

/** A menu is a set of columns; each column stacks one or more groups. */
export interface NavMenu {
  columns: NavGroup[][];
  cta?: { label: string; href: string };
  /**
   * Group-header icon box. Products (2359:51640) draws these at 40px; every
   * other panel uses the 20px default.
   */
  groupIconSize?: number;
  /** Dashed rule between columns — only Products has one in Figma. */
  columnDividers?: boolean;
  /**
   * Where the dashed rule sits. Solutions (1746:24019) and Resources
   * (1746:23990) underline the group header, which is the default. Products
   * (2359:51640) instead closes each group with one, and omits it on the last
   * group in a column — it is the only panel stacking several groups per
   * column, so it needs the rule as a separator rather than as a header rule.
   */
  groupRule?: "header" | "group";
  /**
   * Row density. Products (2359:51452) packs a badge, tagline and description
   * into every row, so it runs "compact": 14/18 label, 12/14 description, a 4px
   * radius and 16/12 padding. Resources (1568:30371) carries only a label and
   * one line under it, so it stays "roomy": 16/20 label, 13/16 description, an
   * 8px radius and an even 16px of padding. Both reveal the same accent arrow
   * on hover. Solutions rows are accordions and take neither — see `children`.
   */
  itemScale?: "compact" | "roomy";
}

export interface NavItem {
  label: string;
  href?: string;
  menu?: NavMenu;
  /** Kept in the data but not rendered — see `visibleNav`. */
  hidden?: boolean;
}

/* ------------------------------------------------------------------ *
 * Products — Figma node 2375:54562
 * ------------------------------------------------------------------ */

export const productMenu: NavMenu = {
  columns: [
    [
      {
        title: "Primary Products",
        icon: "grp-primary-products",
        subtitle: "Core platforms to run your business operations.",
        links: [
          {
            icon: "procurement",
            label: "Effortless Procurement",
            badge: "Primary Product",
            tagline: "Procure-to-Pay made simple",
            description:
              "Manage POs, vendor bills, approvals, budgets & payments.",
            href: "/expenses",
          },
          {
            icon: "sales",
            label: "Effortless Sales",
            badge: "Primary Product",
            tagline: "India’s complete Order-to-Cash platform",
            description:
              "Manage sales with GPS tracking, credit, collections & Tally sync.",
            href: "/sales",
          },
        ],
      },
      {
        title: "Extensions for Both Primary Products",
        icon: "grp-extensions-both",
        note: "(Add-on)",
        subtitle: "Power up your primary product engine with these add-ons",
        links: [
          {
            icon: "claims",
            label: "Effortless Claims: Field Expense Reimbursement",
            tagline: "Control Employee Expenses",
            description:
              "Streamline travel claims, enforce policy limits, approvals & reimbursements.",
            href: "/claims",
          },
        ],
      },
      {
        title: "Extensions for Effortless Sales",
        icon: "grp-extensions-sales",
        note: "(Add-on)",
        subtitle: "Power up your primary product engine with these add-ons",
        links: [
          {
            icon: "commerce",
            label: "Effortless Commerce: Self Serve Portal & App (Unlimited)",
            tagline: "24×7 Customer Ordering",
            description:
              "Let your buyers order, track, and manage transactions anytime, anywhere.",
            href: "/buyer-portal",
          },
          {
            icon: "contracts",
            label: "Effortless Contracts: Auto billing & Collections.",
            tagline: "Predictable Recurring Revenue",
            description:
              "Automate recurring invoices, proformas, renewals & payment reminders.",
            href: "/contracts",
          },
        ],
      },
    ],
    [
      {
        title: "Other Platform Capabilities",
        icon: "grp-other-capabilities",
        subtitle: "Built-in capabilities that strengthen your business.",
        dense: true,
        links: [
          {
            icon: "banking",
            label: "Banking & Cash Flow Management",
            description:
              "Real-time bank feeds, reconciliation, cash flow visibility & collections.",
            href: "/allFeatures",
          },
          {
            icon: "cross-team-workflows",
            label: "Cross-Team Workflows",
            description:
              "Approvals, audit trails, role-based access & 1-click invoice creation.",
            href: "/allFeatures",
          },
          {
            icon: "field-tracking",
            label: "Office & Live Field Team Tracking",
            description:
              "GPS tracking, attendance, field check-ins, geo-fencing & more.",
            href: "/allFeatures",
          },
          {
            icon: "customer-workflows",
            label: "Customer Workflows",
            description:
              "Automated emails, reminders, payment links & customer communications.",
            href: "/allFeatures",
          },
          {
            icon: "business-health",
            label: "Business Health Dashboard & Reports",
            description:
              "360° dashboards, KPIs, financial statements, reports & compliance insights.",
            href: "/allFeatures",
          },
          {
            icon: "integrations",
            label: "Integrations, Data Exchange, Security & Support",
            description:
              "Tally sync, multi-company, bulk imports, enterprise security & expert support.",
            href: "/allFeatures",
          },
        ],
      },
      {
        title: "One Platform. Endless Possibilities.",
        icon: "grp-primary-products",
        subtitle: "Everything you need to run your business, in one place.",
        dense: true,
        links: [
          {
            icon: "unified-data",
            label: "Unified Data",
            description: "Work on accurate, real-time data.",
            href: "/allFeatures",
          },
          {
            icon: "faster-decisions",
            label: "Faster Decisions",
            description: "Real insights. Real impact. Right when you need it.",
            href: "/allFeatures",
          },
          {
            icon: "secure-reliable",
            label: "Secure & Reliable",
            description: "Enterprise-grade security you can trust.",
            href: "/allFeatures",
          },
        ],
      },
    ],
  ],
  cta: { label: "Explore All Features", href: "/allFeatures" },
  groupIconSize: 40,
  columnDividers: true,
  groupRule: "group",
  itemScale: "compact",
};

/* ------------------------------------------------------------------ *
 * Solutions — Figma nodes 1746:24062 / 1746:24063 / 1746:24064
 *
 * Read-only until these pages are designed. Figma specifies no destinations
 * for any of these rows, and no page exists behind them, so none of them
 * carries an `href`: the panel opens and reads, and every row renders as
 * plain text rather than a link to a page that does not answer to it.
 *
 * An earlier pass pointed each row at the closest existing page (/sales,
 * /expenses, /case-studies, /allFeatures). Those were invented, so they are
 * gone. Restore an `href` per row as its page ships.
 * ------------------------------------------------------------------ */

export const solutionMenu: NavMenu = {
  columns: [
    [
      {
        title: "Your Challenges",
        icon: "grp-your-challenges",
        subtitle: "What do you want to fix?",
        links: [
          {
            icon: "field-force",
            label: "Field Force & Logistics Governance",
            children: [
              { label: "Van Sales Compliance" },
              { label: "Field Rep Fraud & Discipline" },
              { label: "Travel Claims & Reimbursements" },
            ],
          },
          {
            icon: "spend-control",
            label: "Spend Control & AP Automation",
            children: [
              {
                label: "Multi-Branch Procurement Firewalls",
              },
              { label: "Bulk Vendor Payout Execution" },
              { label: "X-Ray Cost-Centre Visibility" },
            ],
          },
          {
            icon: "revenue-collection",
            label: "Revenue & Collection Acceleration",
            children: [
              { label: "Instant Dispatch-to-Cash (AR)" },
              { label: "Dormant Ledger & Debt Recovery" },
              { label: "B2B Contract & Recurring Billing" },
            ],
          },
          {
            icon: "data-integrity",
            label: "Data Integrity & Compliance Firewalls",
            children: [
              {
                label: "Tally Data Pollution Prevention",
              },
              {
                label: "Proforma GST Shield (Working Capital)",
              },
              {
                label: "Client-Billable Expense Precision",
              },
            ],
          },
          {
            icon: "operational-velocity",
            label: "Operational Velocity Automation",
            children: [
              {
                label: "B2B Self-Serve Buyer Portals",
              },
              {
                label: "Sales vs. Finance Credit Locks",
              },
              {
                label: "Founder Approval Bottleneck Bypass",
              },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "Your Industry",
        icon: "grp-your-industry",
        subtitle: "Where do you operate?",
        links: [
          {
            icon: "industry-wholesale",
            label: "Wholesale, FMCG & Distribution",
            children: [
              { label: "Van Sales" },
              { label: "Field Rep Discipline" },
              { label: "Self-Serve Portal / App" },
              { label: "Sales vs. Finance" },
              { label: "Debt Recovery" },
              { label: "Tally Pollution" },
            ],
          },
          {
            icon: "industry-manufacturing",
            label: "Mid-Market Manufacturing & Logistics",
            children: [
              { label: "Self-Serve Portal / App" },
              { label: "Dispatch to Cash" },
              { label: "Bulk Payouts" },
              { label: "Cost-Centre Visibility" },
              { label: "Founder Bottleneck" },
              { label: "Tally Pollution" },
            ],
          },
          {
            icon: "industry-retail",
            label: "Multi-Outlet Retail & Hospitality Chains",
            children: [
              { label: "Branch Procurement" },
              { label: "Bulk Payouts" },
              { label: "Claims Lockdown" },
              { label: "Cost-Centre Visibility" },
            ],
          },
          {
            icon: "industry-services",
            label: "Professional Services, Tech & Agencies",
            children: [
              { label: "Bulk Payouts" },
              { label: "Contract Billing" },
              { label: "Proforma GST Shield" },
              { label: "Project Reimbursables" },
            ],
          },
        ],
      },
    ],
    [
      {
        title: "Your Role",
        icon: "grp-your-role",
        subtitle: "Who are you?",
        links: [
          {
            icon: "role-cfo",
            label: "For the CFO & Finance Controller",
            description: "Capital protection, audit trails, and data hygiene",
            children: [
              { label: "Dispatch to Cash" },
              { label: "Branch Procurement" },
              { label: "Payment Paralysis" },
              { label: "Cost-Centre Drilldowns" },
              { label: "Tally Pollution" },
              { label: "Proforma GST Shield" },
            ],
          },
          {
            icon: "role-vp-sales",
            label: "For the VP of Sales & Commercial Ops",
            description:
              "Revenue velocity, team output, and friction-free ordering",
            children: [
              { label: "Van Sales" },
              { label: "IronMan Field Rep" },
              { label: "Self-Serve Portals" },
              { label: "Ghost Debtor Recovery" },
              { label: "Contract Billing" },
            ],
          },
          {
            icon: "role-promoter",
            label: "For the Business Promoter / Founder / CEO",
            description:
              "Growth blockades, operational scale, and internal alignment",
            children: [
              { label: "Sales vs. Finance Alignment" },
              { label: "Bottleneck Boss Bypass" },
            ],
          },
          {
            icon: "role-partners",
            label: "For Managing Partners & Project Operations",
            description:
              "Project-level margin protection and billable cost containment",
            children: [
              { label: "Claims Lockdown" },
              { label: "Reimbursable Expense Tracking" },
            ],
          },
        ],
      },
    ],
  ],
};

/* ------------------------------------------------------------------ *
 * Resources — Figma node 1746:24061
 * ------------------------------------------------------------------ */

export const resourceMenu: NavMenu = {
  columns: [
    [
      {
        title: "Learn",
        icon: "group-learn",
        links: [
          {
            icon: "blog",
            label: "Blog",
            description: "Strategies for growth & control",
            href: "/blogs",
          },
          {
            icon: "webinars",
            label: "Webinars",
            description: "Live sessions & masterclasses",
            href: "https://docs.google.com/forms/d/e/1FAIpQLScY9QisYn1E8Sj1vxXwvkQv6qZltjCqWzdg_DLiwtpZbak3ww/viewform",
            external: true,
          },
          {
            icon: "compliance-basics",
            label: "Compliance Basics",
            description: "TDS, GST & Cost Center",
            href: "/compliance",
          },
          {
            icon: "faqs",
            label: "FAQs",
            description: "Common questions answered",
            href: "/faqs",
          },
        ],
      },
    ],
    [
      {
        title: "Tools",
        icon: "group-tools",
        links: [
          {
            icon: "download-apps",
            label: "Download Apps",
            description: "iOS & Android App",
            href: "/download-apps",
          },
          {
            icon: "roi-calculator",
            label: "ROI Calculator",
            description: "Calculate your savings —",
            href: "#",
            comingSoon: true,
          },
        ],
      },
    ],
    [
      {
        title: "Company",
        icon: "group-company",
        links: [
          {
            icon: "about-us",
            label: "About Us",
            description: "Our mission & leadership",
            href: "/about-us",
          },
          {
            icon: "certifications",
            label: "Certifications",
            description: "ISO 27001 & Security",
            href: "/certifications-awards",
          },
          {
            icon: "contact-us",
            label: "Contact Us",
            description: "Get in touch with us",
            href: "/contact-us",
          },
        ],
      },
    ],
    [
      {
        title: "Featured",
        icon: "group-featured",
        links: [
          {
            icon: "migrating",
            label: "Thinking of Migrating?",
            description: "Effortless vs <br/>SAP/Oracle/ERPs/Tally Plugins",
            /*
             * Figma 2749:7565 at 3x. Greyscale on a transparent ground is
             * intentional — that node holds a greyscale fill and carries no
             * filter. Re-exporting it needs one correction: Figma renders the
             * node onto an opaque #7D7D7D ground, so the raw export draws a
             * grey box behind the artwork and its alpha has to be restored.
             */
            image: {
              src: "/assets/nav/thinking-of-migrating.png",
              width: 152,
              height: 160,
            },
            href: "/migratingFeature",
          },
        ],
      },
    ],
  ],
};

/* ------------------------------------------------------------------ */

/** Order matches Figma node 2514:80690. */
export const primaryNav: NavItem[] = [
  { label: "Products", menu: productMenu },
  { label: "Solutions", menu: solutionMenu },
  // { label: "Case Studies", href: "/case-studies" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", menu: resourceMenu },
  { label: "Pricing", href: "/pricing" },
];

export const visibleNav = primaryNav.filter((item) => !item.hidden);

export const LOGIN_URL = "https://i.goeffortless.ai/";
