import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import PlatformCards from "./PlatformCards";
import GetStartedSection from "./GetStartedSection";
import ComparisonTable from "./ComparisonTable";
import ExtensionCard from "./ExtensionCard";
import EditionCard from "./EditionCard";
import { pricingHero, pricingPlatforms } from "@/data/pricing";
import type { PricingDetail } from "@/data/pricingDetail";

/**
 * Pricing detail page — Figma 2410:56867 (Procurement, 1440 × 8900) and
 * 2410:54564 (Sales, 1440 × 12173).
 *
 * Both frames are the same page with different content, so one component
 * renders both from `src/data/pricingDetail.ts`.
 */
export function PricingDetailPage({
  detail,
  metadata,
}: {
  detail: PricingDetail;
  metadata?: Record<string, unknown>;
}) {
  const platform = pricingPlatforms[detail.platformIndex];

  return (
    <>
      <Metadata {...metadata} />

      <div className="min-h-screen bg-bg text-content">
        <SiteHeader />

        <main>
          <Section tone="subtle" spacing="md">
            <div className="flex flex-col gap-10">
              {/* Same hero as /pricing — Figma 2410:56886 repeats it verbatim,
                  hard line break before the accent clause included. */}
              <SectionHeading
                as="h1"
                eyebrow={pricingHero.eyebrow}
                title={pricingHero.title}
                accentTitle={pricingHero.accentTitle}
                description={pricingHero.description}
                accentOnNewLine
                headingClassName="lg:leading-[80px]"
              />

              {/*
                Only this platform's card, per the design — and unlinked: the
                page it would navigate to is this one, so the arrow goes too.
              */}
              <PlatformCards platforms={[platform]} linked={false} />
            </div>
          </Section>

          {/* ---- Platform Extensions ---- */}
          <Section spacing="lg">
            <div className="flex flex-col gap-10">
              <SectionHeading
                eyebrow={detail.extensions.eyebrow}
                title={detail.extensions.title}
                accentTitle={detail.extensions.accentTitle}
                description={detail.extensions.description}
              />

              {/* Figma: one full-width card on Procurement (2426:70023), three
                  424px cards on Sales (2426:70370). */}
              <ul
                className={cn(
                  "grid grid-cols-1 gap-5",
                  detail.extensions.items.length > 1 && "lg:grid-cols-3"
                )}
              >
                {detail.extensions.items.map((item) => (
                  <li key={item.name}>
                    <ExtensionCard item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* ---- Choose Your Edition ---- */}
          <Section tone="subtle" spacing="lg">
            <div className="flex flex-col gap-10">
              <SectionHeading
                eyebrow={detail.editions.eyebrow}
                title={detail.editions.title}
                accentTitle={detail.editions.accentTitle}
                description={detail.editions.description}
              />

              {/* 16px head-room so the "Most Complete" ribbon can hang above
                  the featured card's top edge. */}
              <ul className="grid grid-cols-1 gap-5 pt-4 lg:grid-cols-2">
                {detail.editions.plans.map((plan) => (
                  <li key={plan.name}>
                    <EditionCard plan={plan} />
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* ---- Compare every feature ---- */}
          <Section spacing="lg">
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow={detail.comparison.eyebrow}
                title={detail.comparison.title}
                accentTitle={detail.comparison.accentTitle}
                description={detail.comparison.description}
              />

              <ComparisonTable sections={detail.comparison.sections} />
            </div>
          </Section>

          <GetStartedSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default PricingDetailPage;
