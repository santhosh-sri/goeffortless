import React from "react";
import InfoCard from "@/components/ui/InfoCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { tallyPower } from "@/data/home";

/**
 * "We don't replace Tally" — Figma node 1694:1539.
 *
 * Desktop: 4 cards in a row, 20px gutters, 40px below the heading block.
 * The first card is featured — no border, `shadow-raised` instead.
 * Tablet drops to 2 columns, mobile to 1.
 */
export function TallyPowerSection() {
  return (
    <Section tone="subtle" spacing="md">
      <div className="flex flex-col items-center gap-8 lg:gap-10">
        <SectionHeading
          eyebrow={tallyPower.eyebrow}
          title={tallyPower.title}
          accentTitle={tallyPower.accentTitle}
          description={tallyPower.description}
        />

        <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tallyPower.cards.map((card, index) => (
            <li key={card.title} className="flex">
              <InfoCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                iconTone="tile"
                bodySize="sm"
                emphasis={index === 0 ? "raised" : "outline"}
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default TallyPowerSection;
