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
  statement:
    "Complete operational control for Indian Founders, MDs, and CFOs. Unlock sales, plug expense leakages, ensure 100% automated Tally sync, and manage multi-entity compliance effortlessly.",
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
        eyebrow: "The Revenue Engine",
        title: "Stop Asking “Where is the Order?”",
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
            description: "Automate complex schemes with an AI-powered engine.",
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
    { id: "sales", label: "Effortless Sales" },
    { id: "buyer-commerce", label: "Effortless Buyer Commerce" },
    { id: "staff-claims", label: "Effortless Staff Claims" },
    { id: "contracts", label: "Effortless Contracts" },
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
