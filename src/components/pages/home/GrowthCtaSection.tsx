import React from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { growthCta } from "@/data/home";

/**
 * Closing CTA row — Figma node 1548:29036.
 *
 * Structurally distinct from InfoCard: left-aligned, bulleted list, and a
 * full-width CTA with a note pinned to the bottom, so it carries its own
 * markup rather than bending the shared card out of shape.
 */
export function GrowthCtaSection() {
  return (
    <Section tone="subtle" spacing="lg">
      <div className="flex flex-col items-center gap-8 lg:gap-12">
        <SectionHeading
          eyebrow={growthCta.eyebrow}
          title={growthCta.title}
          accentTitle={growthCta.accentTitle}
          description={growthCta.description}
          className="lg:max-w-[1000px]"
        />

        <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {growthCta.cards.map((card) => (
            <li key={card.title} className="flex">
              {/* Figma's first card is the hover state on show, not a
                  featured card — every card rests bordered and lifts on
                  hover. The border turns transparent rather than being
                  dropped, so the lift shifts nothing. */}
              <div className="flex w-full flex-col gap-4 rounded-card border border-line bg-surface p-5 text-left transition-[colors,box-shadow] duration-200 hover:border-transparent hover:shadow-raised">
                <div className="flex flex-col gap-2">
                  <h3 className="text-heading-sm font-medium text-content">
                    {card.title}
                  </h3>

                  <p className="text-body font-normal text-content-muted">
                    {card.description}
                  </p>

                  <ul className="list-disc ps-6 text-body font-normal leading-[26px] text-content-muted">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-col items-center gap-2 pt-2">
                  <Button
                    calBooking
                    variant={card.ctaVariant}
                    fullWidth
                    className="font-semibold"
                  >
                    {card.ctaLabel}
                  </Button>

                  <p className="text-center text-[14px] font-normal leading-[18px] text-content-muted">
                    {card.note}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default GrowthCtaSection;
