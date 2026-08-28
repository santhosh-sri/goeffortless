import PricingDetailPage from "@/components/pages/pricing/PricingDetailPage";
import { pricingProcurement } from "@/data/pricingDetail";

/**
 * Effortless Procurement pricing detail — Figma node 2410:56867.
 * Reached from the Procurement card on /pricing. No CMS entry exists for this
 * slug, so the metadata is static.
 */
const metadata = {
  title: "Effortless Procurement Pricing — Grow & Scale Editions | Effortless",
  description:
    "Procure-to-pay pricing priced by the desk, not the seat. Compare the Grow and Scale editions feature by feature, including Claims and onboarding fees.",
  keywords:
    "procurement software pricing, procure to pay pricing India, vendor bill automation cost",
};

export default function ProcurementPricing() {
  return <PricingDetailPage detail={pricingProcurement} metadata={metadata} />;
}
