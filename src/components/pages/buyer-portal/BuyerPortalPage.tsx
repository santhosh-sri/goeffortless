import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import {
  ProductHero,
  ProductProblemSolution,
  ProductFeatureDeepDive,
  ProductWhyThisMatters,
  ProductClosingCta,
} from "@/components/pages/product";
import {
  buyerPortalHero,
  buyerPortalProblemSolution,
  buyerPortalFeatureHeading,
  buyerPortalFeatureRows,
  buyerPortalWhyThisMatters,
  buyerPortalClosingCta,
} from "@/data/buyerPortal";

/**
 * Buyer Portal — Figma node 1864:15745 (1440 × 7451).
 *
 * Section order follows the frame's y-coordinates. Composed entirely from the
 * shared product-page template. Like Field Staff Claims, the design has no
 * "See it in Action" band, so none is rendered.
 */
export function BuyerPortalPage({
  metadata,
}: {
  metadata?: Record<string, unknown>;
}) {
  return (
    <>
      <Metadata {...metadata} />

      <div className="min-h-screen bg-bg text-content">
        <SiteHeader />

        <main>
          <ProductHero data={buyerPortalHero} />
          <ProductProblemSolution data={buyerPortalProblemSolution} />
          <ProductFeatureDeepDive
            heading={buyerPortalFeatureHeading}
            rows={buyerPortalFeatureRows}
          />
          <ProductWhyThisMatters data={buyerPortalWhyThisMatters} />
          <ProductClosingCta data={buyerPortalClosingCta} />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default BuyerPortalPage;
