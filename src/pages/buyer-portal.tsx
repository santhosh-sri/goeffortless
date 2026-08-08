import BuyerPortalPage from "@/components/pages/buyer-portal/BuyerPortalPage";

/**
 * New route — the Buyer Portal had no page of its own before the redesign, and
 * the Products nav pointed "Effortless Commerce: Self Serve Portal & App" at
 * /allFeatures as a best-fit stand-in. There is no CMS entry for this slug, so
 * the metadata is static here rather than fetched.
 */
const metadata = {
  title: "B2B Buyer Portal & Self-Service Ordering App | Effortless",
  description:
    "Give regular B2B buyers a white-labelled 24/7 ordering portal with your catalogue, MoQ and pricing rules, live statements, payables and repeat orders.",
  keywords:
    "B2B buyer portal, self service ordering, distributor ordering app, customer portal, statement of accounts",
};

export default function BuyerPortal() {
  return <BuyerPortalPage metadata={metadata} />;
}
