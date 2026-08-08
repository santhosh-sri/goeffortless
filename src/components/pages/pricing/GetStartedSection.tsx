import React from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { pricingGetStarted as data } from "@/data/pricing";

/**
 * "Growth Doesn't Wait. Why Should You?" — Figma node 2426:60966.
 *
 * The same band closes /pricing and both pricing detail pages, so it lives
 * here once rather than three times.
 */
export function GetStartedSection() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
        />

        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {data.cards.map((card) => (
            <li key={card.title} className="flex">
              <div className="flex w-full flex-col gap-4 rounded-card border border-line-subtle bg-surface p-5">
                <h3 className="text-heading-sm font-semibold text-content">
                  {card.title}
                </h3>

                <p className="text-body text-content-muted">
                  {card.description}
                </p>

                <ul className="flex list-disc flex-col gap-2 pl-5">
                  {card.points.map((point) => (
                    <li key={point} className="text-body text-content-muted">
                      {point}
                    </li>
                  ))}
                </ul>

                <Button
                  calBooking
                  variant={card.ctaVariant}
                  fullWidth
                  className="mt-auto font-semibold"
                >
                  {card.cta}
                </Button>

                <p className="text-center text-[13px] leading-[18px] text-content-subtle">
                  {card.footnote}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default GetStartedSection;
