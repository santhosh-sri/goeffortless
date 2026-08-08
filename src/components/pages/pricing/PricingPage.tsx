import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PlatformCards from "./PlatformCards";
import GetStartedSection from "./GetStartedSection";
import { pricingHero, pricingPlatforms } from "@/data/pricing";

/**
 * Pricing — Figma node 2426:60796 (1440 × 2134).
 *
 * A short landing page: hero, the two platform cards, and the shared
 * "Get Started" band. Each platform card links through to its detail page.
 */
export function PricingPage({
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
          <Section tone="subtle" spacing="md">
            <div className="flex flex-col gap-10">
              <SectionHeading
                as="h1"
                eyebrow={pricingHero.eyebrow}
                title={pricingHero.title}
                accentTitle={pricingHero.accentTitle}
                description={pricingHero.description}
              />

              <PlatformCards platforms={pricingPlatforms} />
            </div>
          </Section>

          <GetStartedSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default PricingPage;
