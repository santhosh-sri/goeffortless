/**
 * Site navigation — Figma "Dropdown & Menu Components" (node 1746:24388),
 * header frame 2514:80690.
 *
 * Supersedes the arrays that were hardcoded inside NewHeader.tsx and the
 * earlier "Problems We Fix" panel (node 982:32835), which the redesign
 * replaced with the Your Challenges / Your Industry / Your Role model.
 *
 * Item glyphs in the Figma panels are emoji rendered as text, not exported
 * vectors (`download_assets` on 1746:24062 returns no SVG assets), so they are
 * carried here as `emoji` rather than icon paths.
 */

export interface NavLink {
  label: string;
  href: string;
  /** Emoji glyph shown before the label. */
  emoji?: string;
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
        subtitle: "Core platforms to run your business operations.",
        links: [
          {
            emoji: "🧾",
            label: "Effortless Procurement",
            badge: "Primary Product",
            tagline: "Procure-to-Pay made simple",
            description:
              "Manage POs, vendor bills, approvals, budgets & payments.",
            href: "/expenses",
          },
          {
            emoji: "📈",
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
        note: "(Add-on)",
        subtitle: "Power up your primary product engine with these add-ons",
        links: [
          {
            emoji: "🧳",
            label: "Effortless Claims: Field Expense Reimbursement",
            tagline: "Control Employee Expenses",
            description:
              "Streamline travel claims, enforce policy limits, approvals & reimbursements.",
            href: "/expenses",
          },
        ],
      },
      {
        title: "Extensions for Effortless Sales",
        note: "(Add-on)",
        subtitle: "Power up your primary product engine with these add-ons",
        links: [
          {
            emoji: "🛒",
            label: "Effortless Commerce: Self Serve Portal & App (Unlimited)",
            tagline: "24×7 Customer Ordering",
            description:
              "Let your buyers order, track, and manage transactions anytime, anywhere.",
            href: "/allFeatures",
          },
          {
            emoji: "📄",
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
        subtitle: "Built-in modules that strengthen your business.",
        links: [
          {
            emoji: "🏦",
            label: "Banking & Cash Flow Management",
            description:
              "Real-time bank feeds, reconciliation, cash flow visibility & collections.",
            href: "/allFeatures",
          },
          {
            emoji: "🔄",
            label: "Cross-Team Workflows",
            description:
              "Approvals, audit trails, role-based access & 1-click invoice creation.",
            href: "/allFeatures",
          },
          {
            emoji: "📍",
            label: "Office & Live Field Team Tracking",
            description:
              "GPS tracking, attendance, field check-ins, geo-fencing & more.",
            href: "/allFeatures",
          },
          {
            emoji: "💬",
            label: "Customer Workflows",
            description:
              "Automated emails, reminders, payment links & customer communications.",
            href: "/allFeatures",
          },
          {
            emoji: "📊",
            label: "Business Health Dashboard & Reports",
            description:
              "360° dashboards, KPIs, financial statements, reports & compliance insights.",
            href: "/allFeatures",
          },
          {
            emoji: "🔌",
            label: "Integrations, Data Exchange, Security & Support",
            description:
              "Tally sync, multi-company, bulk imports, enterprise security & expert support.",
            href: "/allFeatures",
          },
        ],
      },
      {
        title: "One Platform. Endless Possibilities.",
        subtitle: "Everything you need to run your business, in one place.",
        links: [
          {
            emoji: "🗂️",
            label: "Unified Data",
            description: "Work on accurate, real-time data.",
            href: "/allFeatures",
          },
          {
            emoji: "⚡",
            label: "Faster Decisions",
            description: "Real insights. Real impact. Right when you need it.",
            href: "/allFeatures",
          },
          {
            emoji: "🔒",
            label: "Secure & Reliable",
            description: "Enterprise-grade security you can trust.",
            href: "/allFeatures",
          },
        ],
      },
    ],
  ],
  cta: { label: "Explore All Features", href: "/allFeatures" },
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
        subtitle: "What do you want to fix?",
        links: [
          {
            emoji: "📍",
            label: "Field Force & Logistics Governance",
            href: "/sales",
          },
          {
            emoji: "💳",
            label: "Spend Control & AP Automation",
            href: "/expenses",
          },
          {
            emoji: "📈",
            label: "Revenue & Collection Acceleration",
            href: "/sales",
          },
          {
            emoji: "🛡️",
            label: "Data Integrity & Compliance Firewalls",
            href: "/compliance",
          },
          {
            emoji: "⚙️",
            label: "Operational Velocity Automation",
            href: "/allFeatures",
          },
        ],
      },
    ],
    [
      {
        title: "Your Industry",
        subtitle: "Where do you operate?",
        links: [
          {
            emoji: "📦",
            label: "Wholesale, FMCG & Distribution",
            href: "/case-studies",
          },
          {
            emoji: "🏭",
            label: "Mid-Market Manufacturing & Logistics",
            href: "/case-studies",
          },
          {
            emoji: "🏬",
            label: "Multi-Outlet Retail & Hospitality Chains",
            href: "/case-studies",
          },
          {
            emoji: "💼",
            label: "Professional Services, Tech & Agencies",
            href: "/case-studies",
          },
        ],
      },
    ],
    [
      {
        title: "Your Role",
        subtitle: "Who are you?",
        links: [
          {
            emoji: "🧮",
            label: "For the CFO & Finance Controller",
            description: "Capital protection, audit trails, and data hygiene",
            href: "/allFeatures",
          },
          {
            emoji: "🚀",
            label: "For the VP of Sales & Commercial Ops",
            description:
              "Revenue velocity, team output, and friction-free ordering",
            href: "/sales",
          },
          {
            emoji: "🏆",
            label: "For the Business Promoter / Founder / CEO",
            description:
              "Growth blockades, operational scale, and internal alignment",
            href: "/about-us",
          },
          {
            emoji: "🤝",
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
        links: [
          {
            emoji: "📝",
            label: "Blog",
            description: "Strategies for growth & control",
            href: "/blogs",
          },
          {
            emoji: "🎥",
            label: "Webinars",
            description: "Live sessions & masterclasses",
            href: "https://docs.google.com/forms/d/e/1FAIpQLScY9QisYn1E8Sj1vxXwvkQv6qZltjCqWzdg_DLiwtpZbak3ww/viewform",
            external: true,
          },
          {
            emoji: "📋",
            label: "Compliance Basics",
            description: "TDS, GST & Cost Center",
            href: "/compliance",
          },
          {
            emoji: "❓",
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
        links: [
          {
            emoji: "📱",
            label: "Download Apps",
            description: "iOS & Android App",
            href: "/download-apps",
          },
          {
            emoji: "🧮",
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
        links: [
          {
            emoji: "✨",
            label: "About Us",
            description: "Our mission & leadership",
            href: "/about-us",
          },
          {
            emoji: "🏅",
            label: "Certifications",
            description: "ISO 27001 & Security",
            href: "/certifications-awards",
          },
          {
            emoji: "📞",
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
        links: [
          {
            emoji: "🚀",
            label: "Thinking of Migrating?",
            description: "Effortless vs <br/>SAP/Oracle/ERPs/Tally Plugins",
            href: "/migratingFeature",
          },
        ],
      },
    ],
  ],
};

/* ------------------------------------------------------------------ */

/**
 * Order matches Figma node 2514:80690.
 *
 * `Pricing` is in the design but `/pricing` is currently routed to a 404 by
 * HIDDEN_SLUGS in `pages/[...services]/index.tsx` while the new pricing page
 * is built. It stays here, hidden, so re-enabling it is a one-line change —
 * rendering it now would ship a broken nav link.
 */
export const primaryNav: NavItem[] = [
  { label: "Products", menu: productMenu },
  { label: "Solutions", menu: solutionMenu },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", menu: resourceMenu },
  { label: "Pricing", href: "/pricing", hidden: true },
];

export const visibleNav = primaryNav.filter((item) => !item.hidden);

export const LOGIN_URL = "https://app.goeffortless.ai";
