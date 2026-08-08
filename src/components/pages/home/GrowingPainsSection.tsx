import React from "react";
import Button from "@/components/ui/Button";
import InfoCard from "@/components/ui/InfoCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { growingPains } from "@/data/home";

/**
 * "Growing Pains" — Figma node 1548:28589.
 *
 * Desktop: 3 × 2 grid of Component 1163 cards (radius 18, #CECECF border,
 * 21px padding, 48px icon, 24/30 title, 16/20 muted body), 20px gutters,
 * 48px below the heading block, then a full-width accent CTA.
 *
 * Tablet drops to 2 columns and mobile to 1 — derived, no Figma frames exist
 * below 1440.
 */
export function GrowingPainsSection() {
  return (
    <Section spacing="lg" className="lg:pt-0">
      <div className="flex flex-col items-center gap-8 lg:gap-12">
        <div className="flex w-full flex-col items-center gap-8">
          <SectionHeading
            eyebrow={growingPains.eyebrow}
            title={growingPains.title}
            accentTitle={growingPains.accentTitle}
            description={growingPains.description}
          />

          <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {growingPains.cards.map((card) => (
              <li key={card.title} className="flex">
                <InfoCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
        </div>

        <Button calBooking fullWidth className="sm:w-auto">
          {growingPains.ctaLabel}
        </Button>
      </div>
    </Section>
  );
}

export default GrowingPainsSection;
