import { MetricCardData } from "@/interface/type";
import React from "react";

interface Props {
  cards: MetricCardData[];
}

/** Three stat tiles — accent figure over a muted label, white card on the band. */
const MetricCards: React.FC<Props> = ({ cards }) => {
  return (
    <section className="w-full max-w-[1036px]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-5 text-center md:gap-4"
          >
            <div className="text-heading-md font-bold text-accent md:text-heading-lg">
              {card.value}
            </div>
            <div className="border-t border-line pt-3 text-body text-content-muted md:text-body-lg md:leading-6">
              {card.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricCards;
