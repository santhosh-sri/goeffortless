import React from "react";
import InfoCard from "@/components/ui/InfoCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { secureByDesign } from "@/data/home";

/**
 * "Secure by Design" — Figma node 1548:28871.
 *
 * Same tile-icon card, but titles are 20px semibold and the description is
 * 16px medium with a 14/18 footnote. First card featured.
 */
export function SecureByDesignSection() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col items-center gap-8 lg:gap-10">
        <SectionHeading
          eyebrow={secureByDesign.eyebrow}
          title={secureByDesign.title}
          accentTitle={secureByDesign.accentTitle}
          description={secureByDesign.description}
        />

        <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {secureByDesign.cards.map((card, index) => (
            <li key={card.title} className="flex">
              <InfoCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                footnote={card.footnote}
                iconTone="tile"
                titleSize="sm"
                bodyEmphasis
                footnoteSize="sm"
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

export default SecureByDesignSection;
