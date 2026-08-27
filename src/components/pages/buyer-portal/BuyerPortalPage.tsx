import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import {
  ProductHero,
  ProductProblemSolution,
  ProductFeatureDeepDive,
  ProductWhyThisMatters,
  ProductSeeItInAction,
  ProductClosingCta,
} from "@/components/pages/product";
import {
  buyerPortalHero,
  buyerPortalProblemSolution,
  buyerPortalFeatureHeading,
  buyerPortalFeatureRows,
  buyerPortalWhyThisMatters,
  buyerPortalSeeItInAction,
  buyerPortalClosingCta,
} from "@/data/buyerPortal";

/**
 * Buyer Portal — Figma node 1864:15745 (1440 × 7451).
 *
 * Section order follows the frame's y-coordinates. Composed entirely from the
 * shared product-page template. The design has no "See it in Action" band, but
 * the portal walkthrough video is rendered in one above the closing CTA.
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
          <ProductSeeItInAction data={buyerPortalSeeItInAction} />
          <ProductClosingCta data={buyerPortalClosingCta} />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default BuyerPortalPage;
