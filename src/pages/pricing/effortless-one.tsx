import PricingDetailPage from "@/components/pages/pricing/PricingDetailPage";
import { pricingOne } from "@/data/pricingDetail";

/**
 * Effortless One pricing detail — Figma node 3212:15820. Reached from the
 * full-width One card on /pricing. No CMS entry exists for this slug, so the
 * metadata is static.
 */
const metadata = {
  title: "Effortless One Pricing — Grow & Scale Editions | Effortless",
  description:
    "Order-to-cash and procure-to-pay in one subscription, priced by the desk, not the seat. Compare the Grow and Scale editions feature by feature, including Buyer Commerce, Claims and Contracts.",
  keywords:
    "order to cash and procure to pay software pricing India, sales and procurement suite cost, Effortless One pricing",
};

export default function OnePricing() {
  return <PricingDetailPage detail={pricingOne} metadata={metadata} />;
}
