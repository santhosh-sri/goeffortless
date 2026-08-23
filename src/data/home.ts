/**
 * Home page content — Figma "Home Page Final" (node 1548:28466).
 *
 * Copy lives here rather than in the components so the page stays consistent
 * with the project's existing JSON/data-driven convention.
 */

export interface HomeCard {
  icon: string;
  title: string;
  description: string;
}

/** Section "Growing Pains" — Figma node 1548:28589. */
export const growingPains = {
  eyebrow: "Growing Pains",
  title: "The Way your Business Grows is Unique.",
  accentTitle: "The Confusion You Face Isn’t.",
  description:
    "Every business that’s scaling faces the same challenges in different forms.",
  ctaLabel:
    "Effortless keeps your business running—without the mess. Discover How",
  cards: [
    {
      icon: "/assets/home/user-filled.svg",
      title: "Field Sales",
      description:
        "When Sales Grows Faster, with Manual Systems, You Don’t Scale You Struggle.",
    },
    {
      icon: "/assets/home/pins-route.svg",
      title: "Multiple Branches",
      description:
        "You opened a New Branch to Grow Not Lose Track of What’s Going On.",
    },
    {
      icon: "/assets/home/truck-fast.svg",
      title: "Distribution Networks",
      description:
        "More Partners, More Shipments, More Receivables Harder to Stay on Top of it All.",
    },
    {
      icon: "/assets/home/suppliers.svg",
      title: "Multiple Suppliers & Vendors",
      description:
        "Vendors grow when you grow, Complexities outgrow Everywhere — POs, Cost Centres, Expenses, Petty Cash, TDS, ITC, Budget, Approvals & PO-Vendor Bill-GRN Variance Control.",
    },
    {
      icon: "/assets/home/repeat-customers.svg",
      title: "Repeat Customers",
      description:
        "Contracts are Growing, Reminders & Recurring Invoices multiply Revenue starts slipping.",
    },
    {
      icon: "/assets/home/exporter-environment.png",
      title: "Exporter Environment",
      description:
        "Orders show Growth. Cash flow shows Health. No visibility into global Multi-currency payments? You’re flying blind.",
    },
  ] satisfies HomeCard[],
};

/** Strip under the hero — Figma node 1548:28520. */
export const trustStrip = {
  /**
   * The design sets three phrases in the darker heading colour against muted
   * body text (visible in the prototype, not in a flat frame export), so this
   * carries inline emphasis rather than being one uniform string.
   */
  statement:
    'Complete operational control for <strong class="font-medium text-content">Indian Founders, MDs, and CFOs.</strong> Unlock sales, plug expense leakages, ensure <strong class="font-medium text-content">100% automated Tally sync,</strong> and manage multi-entity compliance effortlessly.',
};

/** Section "Tally Prime - Native" — Figma node 1694:1539. */
export const tallyPower = {
  eyebrow: "TALLY PRIME - NATIVE",
  title: "We don’t replace Tally.",
  accentTitle: "We make it 10X more powerful.",
  description:
    "Keep Tally at the core. Add automation, visibility, and control across every business process.",
  cards: [
    {
      icon: "/assets/home/tally-sync.svg",
      title: "Bi-directional Sync",
      description:
        "Data flows both ways — create in Effortless, see it in Tally. Edit in Tally, reflected in Effortless.",
    },
    {
      icon: "/assets/home/tally-concurrent.svg",
      title: "Concurrent Access",
      description:
        "Your accountants keep working in Tally. Your teams work in Effortless. No conflicts, no downtime.",
    },
    {
      icon: "/assets/home/tally-multi-company.svg",
      title: "Multi-Company",
      description:
        "Managing 5 companies in Tally? Effortless handles all of them with branch-wise controls and consolidated views.",
    },
    {
      icon: "/assets/home/tally-clean-masters.svg",
      title: "Clean Masters",
      description:
        "Effortless enforces data quality — your Tally masters stay clean, your audit trail stays complete.",
    },
  ] satisfies HomeCard[],
};

/** Section "Build for India" — Figma node 1548:28811. */
export const builtForIndia = {
  eyebrow: "Build for India",
  title: "Built for the Realities of",
  accentTitle: "Indian Businesses.",
  description:
    "Every business that’s scaling faces the same challenges in different forms.",
  ctaLabel:
    "Effortless keeps your business running—without the mess. Discover How",
  cards: [
    {
      icon: "/assets/home/india-data-load.svg",
      title: "Incremental Data Load?",
      description: "Field teams stay productive even with little connectivity.",
      footnote: "No new fancy systems expense required.",
    },
    {
      icon: "/assets/home/india-staff.svg",
      title: "Staff won’t use it",
      description: "It’s simpler than WhatsApp. Protects them from blame.",
      footnote:
        "Daily Business Snapshot on WhatsApp, Biometric Integration.",
    },
    {
      icon: "/assets/home/india-complex.svg",
      title: "Too Complex?",
      description: "Branch-wise controls keep everything separate.",
      footnote:
        "Multi-Company Concurrent Sync, Cost Centre Income Statement.",
    },
    {
      icon: "/assets/home/india-accountants.svg",
      title: "Will Accountants Like It?",
      description: "They love it. Clean masters = fewer corrections.",
      footnote: "Tally (Concurrent & Bi-Directional), Audit Trail.",
    },
  ],
};

/** Section "Security Assurance" — Figma node 1548:28871. */
export const secureByDesign = {
  eyebrow: "Security Assurance",
  title: "Secure by",
  accentTitle: "Design",
  description:
    "ISO 27001 certified. 256-bit encryption. 2-Factor authentication user access. Compliant. Your data is safe here.",
  cards: [
    {
      icon: "/assets/home/security-levels.svg",
      title: "8-Levels of Security",
      description: "Enterprise Level Security",
      footnote:
        "The same security standards used by leading banks and financial institutions worldwide.",
    },
    {
      icon: "/assets/home/security-certified.svg",
      title: "Certified Excellence",
      description: "ISO 27001 Certification",
      footnote:
        "Our systems and processes meet international standards for information security management.",
    },
    {
      icon: "/assets/home/security-compliance.svg",
      title: "Compliance Automation",
      description: "MSME & GST Compliance Built-In",
      footnote:
        "Automatically generate compliant documents and filings that meet all regulatory requirements.",
    },
    {
      icon: "/assets/home/security-control.svg",
      title: "Control & Transparency",
      description: "Secure User Roles and Audit Trail",
      footnote:
        "Set permissions by role and track every action in the system for complete accountability.",
    },
  ],
};

/** Section "Get Started" — Figma node 1548:29036. */
export const growthCta = {
  eyebrow: "Get Started",
  title: "Growth Doesn’t Wait.",
  accentTitle: "Why Should You?",
  description: "Let Effortless help you scale—without the scramble.",
  cards: [
    {
      title: "Talk to Us",
      description:
        "Have questions about how Effortless can transform your business? Our team of experts is ready to help.",
      bullets: [
        "Schedule a personalized demo",
        "Get your specific questions answered",
        "Discuss your unique business challenges",
      ],
      ctaLabel: "Request a Callback",
      ctaVariant: "secondary" as const,
      note: "We’ll reach out within 4 business hours",
    },
    {
      title: "Experience Effortless",
      description:
        "See Effortless in action with a personalized demo tailored to your business.",
      bullets: [
        "No generic presentations",
        "Focus on your specific challenges",
        "Get a clear picture of your potential ROI",
      ],
      ctaLabel: "Schedule Demo",
      ctaVariant: "secondary" as const,
      note: "Choose a time that works for you",
    },
    {
      title: "Your Growth Engine Starts Here",
      description:
        "More growth, less overhead. Discover how India’s fastest growing businesses do it.",
      bullets: [
        "Automate invoicing, collections & approvals",
        "Track sales team performance",
        "Get cashflow clarity in real-time",
      ],
      ctaLabel: "See it in Action",
      ctaVariant: "primary" as const,
      note: "Clarity in 30 minutes. No pressure, just proof.",
    },
  ],
};

/**
 * Section "One Platform. Five Command Centers." — Figma node 1694:2020.
 *
 * NOTE: Figma designs five tabs but supplies content for only one of them
 * (and labels that tab "Effortless Purchases" while its content is the Sales
 * / "Revenue Engine" copy — an inconsistency in the source design). Tabs
 * without a `panel` are filtered out at render time so nothing empty ships;
 * fill in the remaining four here once the content exists.
 */
export interface CommandCenterTab {
  id: string;
  label: string;
  panel?: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    stat: {
      illustration: string;
      lead: string;
      value: string;
      headline: string;
      support: string;
    };
    features: { icon: string; title: string; description: string }[];
  };
}

/**
 * Section "One Platform. Five Command Centers." — Figma component 1746:24067.
 *
 * All five panels exist in the component (variants 1614:1319, 1614:1318,
 * 1614:1317, 1694:2159, 1694:2248) — earlier they looked missing because the
 * home page frame only instantiates one.
 *
 * The variants are offset by one against the tab strip: the panel shown under
 * "Effortless Purchases" carries Sales copy, the one under "Effortless Staff
 * Claims" carries Procurement copy, and so on. Each panel's eyebrow and
 * headline match a product page hero exactly ("The Profit Guardian" /
 * "Every Corporate Rupee Audited" is the Purchase & Expenses hero), so the
 * panels are paired here with the tab they actually describe rather than the
 * one they sit under in the file. Worth confirming with the designer.
 *
 * Every panel's body copy in Figma is the same placeholder line ("Give your
 * field team the tools they need to move f…"), so each tab uses the real
 * description from its product page hero instead.
 */
export const commandCenters: {
  eyebrow: string;
  title: string;
  accentTitle: string;
  tabs: CommandCenterTab[];
} = {
  eyebrow: "One Platform",
  title: "One Platform.",
  accentTitle: "Five Command Centers.",
  tabs: [
    {
      id: "purchases",
      label: "Effortless Purchases",
      panel: {
        eyebrow: "The Profit Guardian",
        title: "Every Corporate Rupee Audited. Before It Leaves the Bank",
        description:
          "Master your full procurement loop. Create Purchase Orders, Effortless AI Auto maps directly to incoming Vendor Bills & pending customer orders (3-way map) , flag Variances from PO, vendor compliance threats, and manage hard departmental budgets easily.",
        ctaLabel: "Explore Purchases",
        ctaHref: "/expenses",
        stat: {
          illustration: "/assets/home/cc-stat-illustration.svg",
          lead: "Achieve up to",
          value: "10X",
          headline: "Stronger Profit Protection from Expense Leakages",
          support: "to reduce unnecessary spending",
        },
        features: [
          {
            icon: "/assets/home/cc-price-lists.svg",
            title: "Purchase Order & Cost Centre Tagging",
            description:
              "Track expenses accurately with PO and cost centre tagging.",
          },
          {
            icon: "/assets/home/cc-schemes.svg",
            title: "AI-Powered 3-Way Reconciliation",
            description:
              "Automatically match POs, GRNs, and vendor bills with AI-powered reconciliation.",
          },
          {
            icon: "/assets/home/cc-outstanding.svg",
            title: "AI Powered Tax guard",
            description:
              "Stay compliant with AI-powered tax validation and controls.",
          },
          {
            icon: "/assets/home/cc-collections.svg",
            title: "Governance & Approvals",
            description:
              "Strengthen control with structured approvals and governance workflows.",
          },
          {
            icon: "/assets/home/cc-gps.svg",
            title: "The CFO's Consolidated Payment Deck",
            description:
              "Get a consolidated view of all payment requests in one place.",
          },
          {
            icon: "/assets/home/cc-visibility.svg",
            title: "CFO Dashboard",
            description:
              "Track cash flow, payables, and key financial metrics in real time.",
          },
        ],
      },
    },
    {
      id: "sales",
      label: "Effortless Sales",
      panel: {
        eyebrow: "The Revenue Engine",
        title: "Stop Asking \u201CWhere is the Order?\u201D",
        description:
          "Arm your fleet-on-street with an AI Powered mobile command center. Track live visits with authenticated check-ins, automate complex scheme logic on the fly, automate collections and instantly block orders for non-paying accounts.",
        ctaLabel: "Explore Sales",
        ctaHref: "/sales",
        stat: {
          illustration: "/assets/home/cc-stat-illustration.svg",
          lead: "Customers see up to",
          value: "10X",
          headline: "Faster order processing",
          support: "with real-time visibility & automation",
        },
        features: [
          {
            icon: "/assets/home/cc-gps.svg",
            title: "GPS Check-ins & Live Tracking",
            description: "Know where every field agent is, in real time.",
          },
          {
            icon: "/assets/home/cc-outstanding.svg",
            title: "Live Outstanding & Overdue Controls",
            description:
              "View & Restrict orders from customers having crossed credit limits and overdue.",
          },
          {
            icon: "/assets/home/cc-price-lists.svg",
            title: "Multi-Price Lists & Multi-Level Approvals",
            description: "Create and manage multiple price lists with ease.",
          },
          {
            icon: "/assets/home/cc-schemes.svg",
            title: "AI Powered The Schemes Engine",
            description:
              "Automate complex schemes with an AI-powered engine.",
          },
          {
            icon: "/assets/home/cc-collections.svg",
            title: "AI Powered Collections & Auto-Reconciliation with the Bank",
            description: "No One Asks, Has the Payment Come?",
          },
          {
            icon: "/assets/home/cc-visibility.svg",
            title: "AI Powered Owner Visibility Panel",
            description:
              "Get complete business visibility from a single AI-powered dashboard.",
          },
        ],
      },
    },
    {
      id: "buyer-commerce",
      label: "Effortless Buyer Commerce",
      panel: {
        eyebrow: "The Self-Service Engine",
        title: "Stop Being Your Customer\u2019s Help-Desk",
        description:
          "Stop WhatsApp chaos. Transition your regular B2B buyers to a white-labeled, AI Powered 24/7 web and mobile ordering App.",
        ctaLabel: "Explore Buyer Commerce",
        ctaHref: "/buyer-portal",
        stat: {
          illustration: "/assets/home/cc-stat-illustration.svg",
          lead: "Built to drive",
          value: "10X",
          headline: "Count of Buyers Growth without Loosing control",
          support: "Powered by automation & visibility",
        },
        features: [
          {
            icon: "/assets/home/cc-price-lists.svg",
            title: "Branded Catalogues & Smart Self-Ordering",
            description:
              "Share branded catalogues and enable hassle-free self-ordering.",
          },
          {
            icon: "/assets/home/cc-gps.svg",
            title: "Buyer Portal and Mobile App",
            description:
              "Empower buyers to place orders and track transactions anytime, anywhere.",
          },
          {
            icon: "/assets/home/cc-outstanding.svg",
            title: "The On-Demand Digital Ledger (SOA)",
            description:
              "Give customers instant access to their statements and account details.",
          },
          {
            icon: "/assets/home/cc-collections.svg",
            title: "Real-time Payables Tracking",
            description:
              "Track payables in real time and stay on top of every due payment.",
          },
          {
            icon: "/assets/home/cc-schemes.svg",
            title: "Real-Time Approval Checkpoints",
            description:
              "Ensure every transaction passes through the right approvals in real time.",
          },
          {
            icon: "/assets/home/cc-visibility.svg",
            title: "AI Powered Owner Visibility Panel",
            description:
              "Monitor business performance in real time with an AI-powered owner dashboard.",
          },
        ],
      },
    },
    {
      id: "staff-claims",
      label: "Effortless Staff Claims",
      panel: {
        eyebrow: "The Frictionless Fleet",
        title: "Happy Field Teams. Zero Expense Leakage",
        description:
          "Put an end to crumpled fuel receipts, fabricated mileage logs, and painful Excel calculation sheets. Automate local conveyance, travel claims, and daily allowances with robust compliance safeguards.",
        ctaLabel: "Explore Staff Claims",
        ctaHref: "/claims",
        stat: {
          illustration: "/assets/home/cc-stat-illustration.svg",
          lead: "Powering up to",
          value: "10X",
          headline: "Faster Claims Process - Happy Employees",
          support: "With paperless claim processing",
        },
        features: [
          {
            icon: "/assets/home/cc-price-lists.svg",
            title: "Role-Based Policy Limit Frameworks",
            description:
              "Enforce role-based limits and policies across every transaction.",
          },
          {
            icon: "/assets/home/cc-gps.svg",
            title: "My Bill Box",
            description:
              "Keep all your bills securely organized and easily accessible.",
          },
          {
            icon: "/assets/home/cc-schemes.svg",
            title: "AI Powered Policy Enforcements",
            description:
              "Automatically enforce business policies with AI-driven controls.",
          },
          {
            icon: "/assets/home/cc-collections.svg",
            title: "Manager Approvals with Admin-Overrides",
            description:
              "Enable manager approvals with admin override controls when needed.",
          },
          {
            icon: "/assets/home/cc-outstanding.svg",
            title: "The Integrated Single Payment Flow",
            description:
              "Streamline collections with a seamless end-to-end payment flow.",
          },
          {
            icon: "/assets/home/cc-visibility.svg",
            title: "CFO Dashboard",
            description:
              "Get complete financial visibility with a unified CFO dashboard.",
          },
        ],
      },
    },
    {
      id: "contracts",
      label: "Effortless Contracts",
      panel: {
        eyebrow: "The Recurring Revenue Module",
        title: "Put Your Recurring Revenue on AI Autopilot",
        description:
          "Never drop the ball on an AMC renewal, maintenance contract, or subscription milestone again. Automate complex pro-forma generations, compliant tax invoicing cycles, and collections tracking.",
        ctaLabel: "Explore Contracts",
        ctaHref: "/contracts",
        stat: {
          illustration: "/assets/home/cc-stat-illustration.svg",
          lead: "Achieve up to",
          value: "10X",
          headline: "Protection against Customer & Revenue churn",
          support: "without manual follow-ups",
        },
        features: [
          {
            icon: "/assets/home/cc-price-lists.svg",
            title: "Create Once, Bill Forever",
            description: "Set up a contract once and billing runs itself.",
          },
          {
            icon: "/assets/home/cc-collections.svg",
            title: "Smart Reminders",
            description:
              "Auto-alerts for renewals, expirations, and pending dues.",
          },
          {
            icon: "/assets/home/cc-schemes.svg",
            title: "Two Billing Styles, One System",
            description:
              "Milestone-based or recurring \u2014 handled the same way.",
          },
          {
            icon: "/assets/home/cc-gps.svg",
            title: "Multi-Branch Visibility",
            description:
              "See all contracts across every location in one place.",
          },
          {
            icon: "/assets/home/cc-outstanding.svg",
            title: "Forecast in One Screen",
            description:
              "Know exactly what revenue to expect next month.",
          },
          {
            icon: "/assets/home/cc-visibility.svg",
            title: "Tally Sync",
            description:
              "Every invoice flows to Tally without a single manual entry.",
          },
        ],
      },
    },
  ],
};

/** Section "Proof" — Figma nodes 1548:28938 (heading) / 1548:29011 (quotes). */
export const proof = {
  eyebrow: "Proof",
  title:
    "Founded by Seasoned Ex-Deloitte Consultants & CAs. Used by",
  accentTitle: "₹50Cr - ₹5000Cr turnover Leaders.",
  description:
    "Thousands of Businesses already manage their growth with Effortless.",
  testimonials: [
    {
      quote:
        "Effortless has brought my entire Sales and Operations team onto one platform and removed the clutter from Order to Cash Management. Now we can process orders 10X faster and seamlessly with full control.",
      name: "Mr. Gautham Jain",
      role: "Managing Director - Krish Fashion Private Limited",
    },
    {
      quote:
        "Effortless Procurement to Pay IDP (Intelligent data processor) is not one more OCR tool; it can do everything a well-trained accountant does to help the accountants to avoid 90% data entry. Effortless fixes the Leakages in expense chaos. It brings the procurement, finance and management teams in one place and gives full visibility, approval and cost control.",
      name: "Ritesh Menon",
      role: "Sr. Vice President Finance - Hansa CEquity Group",
    },
    {
      quote:
        "Managing 1000+ monthly recurring contracts used to take 5-7 days of work for three accountants. Now it's all in less than 2 hours. Effortless gives us control over customer contracts and avoids revenue leakage.",
      name: "Gaurav Sharma",
      role: "CFO - Precious Netcon",
    },
  ],
};
