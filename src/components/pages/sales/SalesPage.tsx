import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "./HeroSection";
import RealityCheckSection from "./RealityCheckSection";
import FeatureDeepDiveSection from "./FeatureDeepDiveSection";
import WhyThisMattersSection from "./WhyThisMattersSection";
import SeeItInActionSection from "./SeeItInActionSection";
import ClosingCtaSection from "./ClosingCtaSection";

/**
 * Sales & Collections — Figma node 1636:2296 (1440 × 9994).
 *
 * Section order follows the frame's y-coordinates. Header (2520:8465) and
 * footer (2444:75998) are the same components as the home page.
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
          <HeroSection />
          <RealityCheckSection />
          <FeatureDeepDiveSection />
          <WhyThisMattersSection />
          <SeeItInActionSection />
          <ClosingCtaSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default SalesPage;
