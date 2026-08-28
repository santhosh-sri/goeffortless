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
import RealityCheckSection from "./RealityCheckSection";
import {
  salesHero,
  salesFeatureHeading,
  salesFeatureRows,
  salesWhyThisMatters,
  salesSeeItInAction,
  salesClosingCta,
} from "@/data/sales";

/**
 * Sales & Collections — Figma node 1636:2296 (1440 × 9994).
 *
 * Section order follows the frame's y-coordinates. Every band except the
 * Reality Check is the shared product-page template, so only that section
 * lives here. Header (2520:8465) and footer (2444:75998) are the same
 * components as the home page.
 */
export function SalesPage({
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
          <ProductHero data={salesHero} />
          <RealityCheckSection />
          <ProductFeatureDeepDive
            heading={salesFeatureHeading}
            rows={salesFeatureRows}
          />
          <ProductWhyThisMatters data={salesWhyThisMatters} />
          <ProductSeeItInAction data={salesSeeItInAction} />
          <ProductClosingCta data={salesClosingCta} />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default SalesPage;
