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

export interface NavLink {
  label: string;
  href: string;
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
        subtitle: "Built-in modules that strengthen your business.",
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
};

/* ------------------------------------------------------------------ *
 * Solutions — Figma nodes 1746:24062 / 1746:24063 / 1746:24064
 *
 * Figma specifies no destinations for these rows. Each href points at the
 * closest existing page and needs content sign-off before launch.
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
            href: "/sales",
          },
          {
            icon: "spend-control",
            label: "Spend Control & AP Automation",
            href: "/expenses",
          },
          {
            icon: "revenue-collection",
            label: "Revenue & Collection Acceleration",
            href: "/sales",
          },
          {
            icon: "data-integrity",
            label: "Data Integrity & Compliance Firewalls",
            href: "/compliance",
          },
          {
            icon: "operational-velocity",
            label: "Operational Velocity Automation",
            href: "/allFeatures",
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
            href: "/case-studies",
          },
          {
            icon: "industry-manufacturing",
            label: "Mid-Market Manufacturing & Logistics",
            href: "/case-studies",
          },
          {
            icon: "industry-retail",
            label: "Multi-Outlet Retail & Hospitality Chains",
            href: "/case-studies",
          },
          {
            icon: "industry-services",
            label: "Professional Services, Tech & Agencies",
            href: "/case-studies",
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
            href: "/allFeatures",
          },
          {
            icon: "role-vp-sales",
            label: "For the VP of Sales & Commercial Ops",
            description:
              "Revenue velocity, team output, and friction-free ordering",
            href: "/sales",
          },
          {
            icon: "role-promoter",
            label: "For the Business Promoter / Founder / CEO",
            description:
              "Growth blockades, operational scale, and internal alignment",
            href: "/about-us",
          },
          {
            icon: "role-partners",
            label: "For Managing Partners & Project Operations",
            description:
              "Project-level margin protection and billable cost containment",
            href: "/contracts",
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
            image: {
              src: "/assets/nav/migrating-illustration.png",
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
  { label: "Case Studies", href: "/case-studies" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", menu: resourceMenu },
  { label: "Pricing", href: "/pricing" },
];

export const visibleNav = primaryNav.filter((item) => !item.hidden);

export const LOGIN_URL = "https://app.goeffortless.ai";
