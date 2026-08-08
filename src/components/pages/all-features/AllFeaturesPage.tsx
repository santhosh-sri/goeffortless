import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CommandCenterSection from "./CommandCenterSection";
import FeatureGroupSection from "./FeatureGroupSection";
import {
  allFeaturesHero,
  allFeaturesClosingCta,
} from "@/data/allFeaturesPage";

/**
 * All Features — Figma node 2426:64116 (1440 × 6262).
 *
 * A catalogue page rather than a product page, so it does not use the shared
 * product-page template: a centred hero, the command-centre comparison, three
 * groups of module cards, and a closing CTA.
 */
export function AllFeaturesPage({
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
            <SectionHeading
              as="h1"
              eyebrow={allFeaturesHero.eyebrow}
              title={allFeaturesHero.title}
              accentTitle={allFeaturesHero.accentTitle}
              description={allFeaturesHero.description}
            />
          </Section>

          <CommandCenterSection />
          <FeatureGroupSection />

          <Section spacing="md">
            <div className="flex flex-col items-center gap-8">
              <SectionHeading
                title={allFeaturesClosingCta.title}
                accentTitle={allFeaturesClosingCta.accentTitle}
                description={allFeaturesClosingCta.description}
              />

              <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
                <Button
                  href={allFeaturesClosingCta.primary.href}
                  fullWidth
                  className="font-semibold sm:w-auto"
                >
                  {allFeaturesClosingCta.primary.label}
                </Button>

                <Button
                  calBooking
                  variant="secondary"
                  fullWidth
                  className="font-semibold sm:w-auto"
                >
                  {allFeaturesClosingCta.secondary.label}
                </Button>
              </div>
            </div>
          </Section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default AllFeaturesPage;
