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
import ComplianceShieldSection from "./ComplianceShieldSection";
import {
  purchasesHero,
  purchasesFeatureHeading,
  purchasesFeatureRows,
  purchasesWhyThisMatters,
  purchasesSeeItInAction,
  purchasesClosingCta,
} from "@/data/purchases";

/**
 * Purchase & Expenses — Figma node 1943:63635 (1440 × 9551).
 *
 * Section order follows the frame's y-coordinates. Every band except the
 * Compliance Shield is the shared product-page template.
 */
export function PurchasesPage({
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
          <ProductHero data={purchasesHero} />
          <ComplianceShieldSection />
          <ProductFeatureDeepDive
            heading={purchasesFeatureHeading}
            rows={purchasesFeatureRows}
          />
          <ProductWhyThisMatters data={purchasesWhyThisMatters} />
          <ProductSeeItInAction data={purchasesSeeItInAction} />
          <ProductClosingCta data={purchasesClosingCta} />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default PurchasesPage;
