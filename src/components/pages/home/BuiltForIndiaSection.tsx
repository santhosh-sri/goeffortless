import React from "react";
import Button from "@/components/ui/Button";
import InfoCard from "@/components/ui/InfoCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { builtForIndia } from "@/data/home";

/**
 * "Built for the Realities of Indian Businesses" — Figma node 1548:28811.
 *
 * Same tile-icon card as the Tally row, plus a divider-separated footnote.
 * First card is featured (shadow, no border). 80px band padding, 48px stack.
 */
export function BuiltForIndiaSection() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col items-center gap-8 lg:gap-12">
        <div className="flex w-full flex-col items-center gap-8 lg:gap-10">
          <SectionHeading
            eyebrow={builtForIndia.eyebrow}
            title={builtForIndia.title}
            accentTitle={builtForIndia.accentTitle}
            description={builtForIndia.description}
          />

          <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {builtForIndia.cards.map((card) => (
              <li key={card.title} className="flex">
                <InfoCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  footnote={card.footnote}
                  iconTone="tile"
                  bodySize="sm"
                  className="w-full"
                />
              </li>
            ))}
          </ul>
        </div>

        <Button calBooking fullWidth className="sm:w-auto">
          {/* The full sentence wraps to three lines on a phone, so narrow
              viewports get the short label instead. */}
          <span className="sm:hidden">{builtForIndia.ctaLabelShort}</span>
          <span className="max-sm:hidden">{builtForIndia.ctaLabel}</span>
        </Button>
      </div>
    </Section>
  );
}

export default BuiltForIndiaSection;
