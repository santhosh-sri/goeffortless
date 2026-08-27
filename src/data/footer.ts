export const footerData = {
  mwebsections: [
    {
      title: "Products",
      items: [
        { title: "Procurement", url: "/expenses" },
        { title: "Sales & Collections", url: "/sales" },
        { title: "Expense & Claims", url: "/expenses" },
        { title: "Contract & Billing", url: "/contracts" },
        { title: "Buyer Portal", url: "/buyer-portal" },
        { title: "All Product Features", url: "/allFeatures" },
      ],
    },
    {
      border: true,
      groups: [
        // Case Studies is hidden for now (see HIDDEN_SLUGS in the catch-all
        // route), and it was this group's only item, so the whole group goes
        // rather than leaving an empty "Our Customers" heading.
        // {
        //   title: "Our Customers",
        //   items: [{ title: "Case Studies", url: "/case-studies" }],
        // },
        {
          title: "Ecosystem",
          items: [{ title: "Partners", url: "/partners" }],
        },
        {
          title: "Find Your Fit",
          items: [{ title: "Pricing", url: "/pricing" }],
        },
      ],
    },
    {
      title: "Resources",
      border: true,
      subColumns: [
        {
          title: "Learn",
          items: [
            { title: "Blog", url: "/blogs" },
            { title: "Webinars", url: "https://docs.google.com/forms/d/e/1FAIpQLScY9QisYn1E8Sj1vxXwvkQv6qZltjCqWzdg_DLiwtpZbak3ww/viewform", external: true },
            { title: "Compliance Basics", url: "/compliance" },
            { title: "FAQs", url: "/faqs" },
          ],
        },
        {
          title: "Tools",
          items: [
            { title: "Download Apps", url: "/download-apps" },
            { title: "ROI Calculator", url: "#", soon: true },
          ],
        },
        {
          title: "Company",
          items: [
            { title: "About Us", url: "/about-us" },
            { title: "Certifications", url: "/certifications-awards" },
            { title: "Contact Us", url: "/contact-us" },
          ],
        },
        {
          title: "Featured",
          items: [
            {
              title: "Thinking of Migrating?",
              url: "/migratingFeature",
            },
          ],
        },
      ],
    },
    {
      title: "Legal",
      items: [
        { title: "Privacy Policy", url: "/privacy-policy" },
        { title: "Terms of Service", url: "/terms-of-service" },
        { title: "Security Practices", url: "/security-practices" },
      ],
    },
  ],
  sections: [
    {
      title: "Products",
      items: [
        { title: "Procurement", url: "/expenses" },
        { title: "Sales & Collections", url: "/sales" },
        { title: "Expense & Claims", url: "/expenses" },
        { title: "Contract & Billing", url: "/contracts" },
        { title: "Buyer Portal", url: "/buyer-portal" },
        { title: "All Product Features", url: "/allFeatures" },
      ],
    },
    {
      border: true,
      groups: [
        // Case Studies is hidden for now (see HIDDEN_SLUGS in the catch-all
        // route), and it was this group's only item, so the whole group goes
        // rather than leaving an empty "Our Customers" heading.
        // {
        //   title: "Our Customers",
        //   items: [{ title: "Case Studies", url: "/case-studies" }],
        // },
        {
          title: "Ecosystem",
          items: [{ title: "Partners", url: "/partners" }],
        },
        {
          title: "Find Your Fit",
          items: [{ title: "Pricing", url: "/pricing" }],
        },
      ],
    },
    {
      title: "Resources",
      border: true,
      subColumns: [
        {
          title: "Learn",
          items: [
            { title: "Blog", url: "/blogs" },
            { title: "Webinars", url: "https://docs.google.com/forms/d/e/1FAIpQLScY9QisYn1E8Sj1vxXwvkQv6qZltjCqWzdg_DLiwtpZbak3ww/viewform", external: true },
            { title: "Compliance Basics", url: "/compliance" },
            { title: "FAQs", url: "/faqs" },
          ],
        },
        {
          title: "Tools",
          items: [
            { title: "Download Apps", url: "/download-apps" },
            { title: "ROI Calculator", url: "#", soon: true },
          ],
        },
        {
          title: "Company",
          items: [
            { title: "About Us", url: "/about-us" },
            { title: "Certifications", url: "/certifications-awards" },
            { title: "Contact Us", url: "/contact-us" },
          ],
        },
        {
          title: "Featured",
          items: [
            {
              title: "Thinking of Migrating?",
              url: "/migratingFeature",
            },
          ],
        },
      ],
    },
    {
      title: "Legal",
      border: true,
      items: [
        { title: "Privacy Policy", url: "/privacy-policy" },
        { title: "Terms of Service", url: "/terms-of-service" },
        { title: "Security Practices", url: "/security-practices" },
      ],
    },
  ],
  logo: {
    src: "/header-logo.svg",
    alt: "Effortless",
  },
  social_links: [
    {
      icon: "/assets/footer/instagram.svg",
      url: "https://www.instagram.com/goeffortless.ai/",
      alt: "Effortless on Instagram",
    },
    {
      icon: "/assets/footer/x.svg",
      url: "https://x.com/go_effortless",
      alt: "Effortless on X (Twitter)",
    },
    {
      icon: "/assets/footer/linkedin.svg",
      url: "https://www.linkedin.com/company/igoeffortless/",
      alt: "Effortless on LinkedIn",
    },
    {
      icon: "/assets/footer/youtube.svg",
      url: "https://www.youtube.com/@Effortless_official",
      alt: "Effortless on YouTube",
    },
    {
      icon: "/assets/footer/facebook.svg",
      url: "https://www.facebook.com/GoEffortlessOfficial",
      alt: "Effortless on Facebook",
    },
  ],
  officeLocation: [
    {
      title: "Chennai HQ",
      desc: "Agrya FinLabs Pvt. Ltd.<br/>Maan Sarovar Tower, First Floor 375/271A, Scheme Rd, Teynampet, Chennai, Tamil Nadu - 600018",
      url: `https://maps.app.goo.gl/ZU1JDbuuFzVWnRZg9`,
    },
    {
      title: "Bangalore",
      isMobile: true,
      border: true,
      desc: "4th floor, 241, Tribe CoWorking, above LG showroom, Sector 6, HSR Layout, Bengaluru, Karnataka - 560102",
      url: `https://maps.app.goo.gl/29sAA2a3pFsMqywB6`,
    },
    {
      title: "Mumbai",
      isMobile: false,
      border: true,
      desc: "1206-07, Ajmera Sikova, LBS Marg, Ashok Silk Mills Ln, Ghatkopar, Mumbai, Maharashtra - 400086",
      url: `https://maps.app.goo.gl/KzuyVBkWb6CkeA5Q6`,
    },
    {
      title: "Hyderabad",
      isMobile: true,
      border: true,
      desc: "7th Floor, Vasavi MPM Grand, 824, beside Ameerpet Metro, Hyderabad, Telangana - 500073",
      url: `https://maps.app.goo.gl/oYDrhUz1kiL7X8jM6`,
    },
  ],
};
