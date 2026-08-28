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
  claimsHero,
  claimsProblemSolution,
  claimsFeatureHeading,
  claimsFeatureRows,
  claimsWhyThisMatters,
  claimsClosingCta,
} from "@/data/claims";

/**
 * Field Staff Claims & Reimbursements — Figma node 1864:23195 (1440 × 7707).
 *
 * Section order follows the frame's y-coordinates. Composed entirely from the
 * shared product-page template. Unlike Sales, Purchases and Contracts this
 * page has no "See it in Action" band in the design, so none is rendered.
 */
export function ClaimsPage({
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
          <ProductHero data={claimsHero} />
          <ProductProblemSolution data={claimsProblemSolution} />
          <ProductFeatureDeepDive
            heading={claimsFeatureHeading}
            rows={claimsFeatureRows}
          />
          <ProductWhyThisMatters data={claimsWhyThisMatters} />
          <ProductClosingCta data={claimsClosingCta} />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default ClaimsPage;
