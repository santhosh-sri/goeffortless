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
    label: "First Name",
    type: "text",
    colSpan: 2,
    validation: {
      required: "First Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    colSpan: 2,
    validation: {
      required: "Last Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "workMail",
    label: "Work Mail",
    type: "email",
    colSpan: 2,
    validation: {
      required: "Work Mail is required",
      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
    },
  },
  {
    name: "phone",
    label: "Mobile Number",
    type: "number",
    colSpan: 2,
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
    colSpan: 2,
    validation: {
      required: "Company Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "companyWebsite",
    label: "Company Website",
    type: "text",
    colSpan: 2,
  },
  {
    name: "numberOfClients",
    label: "Number of Clients",
    type: "text",
    colSpan: 2,
  },
  {
    name: "companyDescription",
    label: "Company Description",
    type: "textarea",
    colSpan: 2,
  },
  {
    name: "hearAboutUs",
    label: "How did you hear about us<span>?</span>",
    type: "text",
    colSpan: 2,
    placeholder: "How did you hear about us",
  },
];
