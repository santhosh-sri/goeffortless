import PricingDetailPage from "@/components/pages/pricing/PricingDetailPage";
import { pricingSales } from "@/data/pricingDetail";

/**
 * Effortless Sales pricing detail — Figma node 2410:54564, the tallest frame
 * in the file. Reached from the Sales card on /pricing. No CMS entry exists
 * for this slug, so the metadata is static.
 */
const metadata = {
  title: "Effortless Sales Pricing — Grow & Scale Editions | Effortless",
  description:
    "Order-to-cash pricing priced by the desk, not the seat. Compare the Grow and Scale editions feature by feature, including Buyer Commerce, Claims and Contracts.",
  keywords:
    "sales software pricing India, order to cash pricing, field sales app cost",
};

export default function SalesPricing() {
  return <PricingDetailPage detail={pricingSales} metadata={metadata} />;
}
