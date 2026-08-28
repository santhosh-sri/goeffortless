import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import {
  ProductHero,
  ProductFeatureDeepDive,
  ProductWhyThisMatters,
  ProductSeeItInAction,
  ProductClosingCta,
} from "@/components/pages/product";
import BillingModesSection from "./BillingModesSection";
import {
  contractsHero,
  contractsFeatureHeading,
  contractsFeatureRows,
  contractsWhyThisMatters,
  contractsSeeItInAction,
  contractsClosingCta,
} from "@/data/contracts";

/**
 * Contracts & Billing — Figma node 1943:71185 (1440 × 8436).
 *
 * Section order follows the frame's y-coordinates. Every band except the
 * billing modes split is the shared product-page template.
 */
export function ContractsPage({
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
          <ProductHero data={contractsHero} />
          <BillingModesSection />
          <ProductFeatureDeepDive
            heading={contractsFeatureHeading}
            rows={contractsFeatureRows}
          />
          <ProductWhyThisMatters data={contractsWhyThisMatters} />
          <ProductSeeItInAction data={contractsSeeItInAction} />
          <ProductClosingCta data={contractsClosingCta} />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default ContractsPage;
