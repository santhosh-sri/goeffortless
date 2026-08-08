import ClaimsPage from "@/components/pages/claims/ClaimsPage";

/**
 * New route — Field Staff Claims & Reimbursements had no page of its own
 * before the redesign, and the Products nav pointed it at /expenses as a
 * best-fit stand-in. There is no CMS entry for this slug, so the metadata is
 * static here rather than fetched.
 */
const metadata = {
  title:
    "Field Staff Expense Claims & Reimbursement Software | Effortless",
  description:
    "Automate travel claims, daily allowances and local conveyance with role-based policy limits, duplicate-bill alerts, bulk settlement and Tally sync.",
  keywords:
    "expense claims software, travel reimbursement, employee expense management, field staff claims, Tally expense sync",
};

export default function Claims() {
  return <ClaimsPage metadata={metadata} />;
}
