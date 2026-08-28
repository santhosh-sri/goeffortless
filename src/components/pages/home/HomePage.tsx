import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "./HeroSection";
import TrustStripSection from "./TrustStripSection";
import GrowingPainsSection from "./GrowingPainsSection";
import CommandCentersSection from "./CommandCentersSection";
import TallyPowerSection from "./TallyPowerSection";
import BuiltForIndiaSection from "./BuiltForIndiaSection";
import ProofSection from "./ProofSection";
import SecureByDesignSection from "./SecureByDesignSection";
import GrowthCtaSection from "./GrowthCtaSection";

/**
 * Single page-level wrapper for the redesigned home page
 * (Figma "Home Page Final", node 1548:28466).
 *
 * Sections live beside this file in `src/components/pages/home/`; their copy
 * lives in `src/data/home.ts`.
 */
export function HomePage({
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
          <TrustStripSection />
          <GrowingPainsSection />
          <CommandCentersSection />
          <TallyPowerSection />
          <BuiltForIndiaSection />
          <ProofSection />
          <SecureByDesignSection />
          <GrowthCtaSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default HomePage;
