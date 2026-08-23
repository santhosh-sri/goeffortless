import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CommandCenterSection from "./CommandCenterSection";
import FeatureGroups from "./FeatureGroups";
import {
  allFeaturesHero,
  allFeaturesGroups,
  allFeaturesClosingCta,
} from "@/data/allFeaturesPage";

/**
 * All Features — Figma node 2426:64116 (1440 × 6262).
 *
 * A catalogue page rather than a product page, so it does not use the shared
 * product-page template: a hero, three groups of module cards, the
 * command-centre comparison and a closing CTA.
 *
 * The bands do not line up with the sections. Figma paints the hero *and* the
 * Core Products group on one #F4F5F7 band, then the two add-on groups and the
 * command centre on white, then the CTA back on #F4F5F7 — so the page composes
 * the bands and `FeatureGroups` renders without one of its own.
 */
export function AllFeaturesPage({
  metadata,
}: {
  metadata?: Record<string, unknown>;
}) {
  const [coreGroup, ...addOnGroups] = allFeaturesGroups;

  return (
    <>
      <Metadata {...metadata} />

      <div className="min-h-screen bg-bg text-content">
        <SiteHeader />

        <main>
          {/* Hero content starts 48 under the header (2426:65375 at y=144),
              48 above the core group, and the band runs 80 below it. */}
          <Section tone="subtle" spacing="lg" className="lg:pt-12">
            <div className="flex flex-col gap-12">
              <SectionHeading
                as="h1"
                eyebrow={allFeaturesHero.eyebrow}
                title={allFeaturesHero.title}
                accentTitle={allFeaturesHero.accentTitle}
                description={allFeaturesHero.description}
                // Figma carries a literal <br> after "The Engine behind".
                accentOnNewLine
                headingClassName="lg:leading-[80px]"
                descriptionClassName="md:leading-6"
              />

              <FeatureGroups groups={[coreGroup]} />
            </div>
          </Section>

          <Section spacing="lg">
            <FeatureGroups groups={addOnGroups} />
          </Section>

          <CommandCenterSection />

          {/* Component 970 on the grey band: 80 above and below, 48 to the
              buttons, 20 between title and description. */}
          <Section tone="subtle" spacing="lg">
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              <SectionHeading
                title={allFeaturesClosingCta.title}
                accentTitle={allFeaturesClosingCta.accentTitle}
                description={allFeaturesClosingCta.description}
                headingClassName="font-medium"
                descriptionGap="sm"
                descriptionClassName="md:leading-6"
              />

              {/* Figma orders these outline-first, with the demo as the fill. */}
              <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
                <Button
                  href={allFeaturesClosingCta.secondary.href}
                  variant="secondary"
                  fullWidth
                  className="px-8 font-semibold sm:w-auto"
                >
                  {allFeaturesClosingCta.secondary.label}
                </Button>

                <Button
                  calBooking
                  fullWidth
                  className="px-8 font-semibold sm:w-auto"
                >
                  {allFeaturesClosingCta.primary.label}
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
