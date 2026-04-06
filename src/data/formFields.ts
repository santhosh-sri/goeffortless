export const formFields = [
  {
    name: "firstname",
    label: "Full Name",
    type: "text",
    colSpan: 2, // Takes full width
    validation: {
      required: "Full Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "email",
    label: "Work Email ID",
    type: "email",
    colSpan: 1, // Half width
    validation: {
      required: "Work Email is required",
      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
    },
  },
  {
    name: "phone",
    label: "Mobile Number",
    type: "number",
    colSpan: 1, // Half width
    validation: {
      required: "Mobile Number is required",
      pattern: { value: /^\d{10}$/, message: "Invalid 10-digit number" },
    },
    maxLength: 10,
    numericOnly: true,
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    colSpan: 1, // Half width
    validation: { required: "Company Name is required" },
  },
  {
    name: "team_size",
    label: "Team Size",
    type: "select",
    colSpan: 1, // Full width
    options: ["1-3", "4-10", "11-25", "26-75", "75-200", "200+"],
    validation: { required: "Please select your ERP" },
  },
  {
    name: "location",
    label: "Company Location",
    type: "text",
    colSpan: 1,
    validation: { required: "Company Location is required" },
  },

  {
    name: "your_current_erp",
    label: "Your Current ERP",
    type: "select",
    colSpan: 1,
    options: ["Tally", "Zoho Books", "Others"],
    validation: { required: "Please select your ERP" },
  },

  {
    name: "preferred_contact_time",
    label: "Preferred Contact Time",
    type: "select",
    colSpan: 2, // Full width
    options: [
      "Morning (9 AM–12 PM)",
      "Afternoon (12 PM–3 PM)",
      "Evening (3 PM–6 PM)",
    ],
    validation: { required: "Please select a preferred contact time" },
  },
];
export const partnerFormFields = [
  {
    name: "firstName",
    label: "Full Name",
    type: "text",
    colSpan: 2,
    validation: {
      required: "First Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "workMail",
    label: "Work Mail",
    type: "email",
    colSpan: 1,
    validation: {
      required: "Work Mail is required",
      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
    },
  },
  {
    name: "phone",
    label: "Mobile Number",
    type: "number",
    colSpan: 1,
    validation: {
      required: "Mobile Number is required",
      pattern: { value: /^\d{10}$/, message: "Invalid 10-digit number" },
    },
    maxLength: 10,
    numericOnly: true,
  },
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    colSpan: 1,
    validation: {
      required: "Company Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "companyWebsite",
    label: "Company Website",
    type: "text",
    colSpan: 1,
  },
  {
    name: "currentERP",
    label: "Current ERP",
    type: "text",
    colSpan: 1
  },
  {
    name: "numberOfClients",
    label: "Number of Clients",
    type: "text",
    colSpan: 1,
  },
  {
    name: "hearAboutUs",
    label: "How did you hear about us<span>?</span>",
    type: "text",
    colSpan: 1,
    placeholder: "How did you hear about us",
  },
  {
    name: "companyDescription",
    label: "Company Description",
    type: "textarea",
    colSpan: 2,
  },
];
export const trialFormFields = [
  {
    name: "clientFirmName",
    label: "Client Firm Name",
    type: "text",
    colSpan: 2,
    validation: {
      required: "Client Firm Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "website",
    label: "Website / URL",
    type: "text",
    colSpan: 1,
    placeholder: "Website URL",
  },
  {
    name: "clientFullName",
    label: "Client Full Name",
    type: "text",
    colSpan: 1,
    validation: {
      required: "Client Full Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "clientEmail",
    label: "Client Work Email ID",
    type: "email",
    colSpan: 1,
    validation: {
      required: "Email is required",
      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
    },
  },
  {
    name: "clientPhone",
    label: "Client's Mobile Number",
    type: "number",
    colSpan: 1,
    validation: {
      required: "Mobile Number is required",
      pattern: { value: /^\d{10}$/, message: "Invalid 10-digit number" },
    },
    maxLength: 10,
    numericOnly: true,
    placeholder: "+91",
  },
  {
    name: "clientRole",
    label: "Client Role / Designation",
    type: "select",
    colSpan: 1,
    options: [
      "CEO/MD",
      "CFO/Finance Head",
      "COO/Operations Head",
      "VP/Director",
      "Manager",
      "Other",
    ],
    validation: { required: "Please select a role" },
    placeholder: "Select your Role",
  },
  {
    name: "industryType",
    label: "Client Org's Industry Type",
    type: "select",
    colSpan: 1,
    options: [
      "Manufacturing",
      "Distribution",
      "Retail",
      "Logistics",
      "B2B SaaS",
      "Healthcare",
      "F&B",
      "Other",
    ],
    placeholder: "Select your Industry",
  },
  {
    name: "turnover",
    label: "Client Org's Turnover (Approx.)",
    type: "select",
    colSpan: 1,
    options: [
      "Under ₹1 Cr",
      "₹1-10 Cr",
      "₹10-50 Cr",
      "₹50-100 Cr",
      "₹100+ Cr",
    ],
    placeholder: "Select your Turnover",
  },
  {
    name: "partnerName",
    label: "Partner Name (If Any)",
    type: "text",
    colSpan: 1,
    placeholder: "Share your Effortless-certified Partner's Name",
  },
  {
    name: "businessProblems",
    label: "Please Write Down Top 3 Business Problems that Client faces",
    type: "textarea",
    colSpan: 2,
    placeholder:
      "1. Managing orders thru WhatsApp, 2. Managing Approvals over emails, 3. Petty Cash management has zero visibility",
  },
  {
    name: "hearAboutUs",
    label: "How did you hear about us?",
    type: "select",
    colSpan: 2,
    options: [
      "LinkedIn",
      "Google Search",
      "Referral",
      "Social Media",
      "Webinar",
      "Other",
    ],
    placeholder: "LinkedIn",
  },
];
export const contactFormFields = [
  {
    name: "firstname",
    label: "Full Name",
    type: "text",
    colSpan: 2, // Takes full width
    validation: {
      required: "Full Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    colSpan: 1, // Half width
    validation: { required: "Company Name is required" },
  },
  {
    name: "location",
    label: "Company Location",
    type: "text",
    colSpan: 1,
    validation: { required: "Company Location is required" },
  },
  {
    name: "email",
    label: "Work Email ID",
    type: "email",
    colSpan: 1, // Half width
    validation: {
      required: "Work Email is required",
      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
    },
  },
  {
    name: "phone",
    label: "Mobile Number",
    type: "number",
    colSpan: 1, // Half width
    validation: {
      required: "Mobile Number is required",
      pattern: { value: /^\d{10}$/, message: "Invalid 10-digit number" },
    },
    maxLength: 10,
    numericOnly: true,
  },
  {
    name: "your_current_erp",
    label: "Your Current ERP",
    type: "select",
    colSpan: 1,
    options: ["Tally", "Zoho Books", "Others"],
    validation: { required: "Please select your ERP" },
  },

  {
    name: "preferred_contact_time",
    label: "Preferred Contact Time",
    type: "select",
    colSpan: 1,
    options: [
      "Morning (9 AM–12 PM)",
      "Afternoon (12 PM–3 PM)",
      "Evening (3 PM–6 PM)",
    ],
    validation: { required: "Please select a preferred contact time" },
  },
  // {
  //   name: "subject",
  //   label: "Subject",
  //   type: "text",
  //   colSpan: 2,
  //   placeholder: 'What’s this about?',
  //   validation: { required: "Subject is required" },
  // },
  {
    name: "message",
    label: "Message",
    type: "textArea",
    colSpan: 2,
    validation: { required: "Message is required" },
  }

];
