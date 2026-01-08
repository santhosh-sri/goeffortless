import { MetricCardData } from "@/interface/type";
import React from "react";

interface Props {
  cards: MetricCardData[];
}

const MetricCards: React.FC<Props> = ({ cards }) => {
  return (
    <section className="w-[1036px] mx-auto">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-white/10 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] rounded-lg py-5 px-4 text-center flex flex-col gap-4"
            >
              {/* Value */}
              <div className="text-[40px] font-medium text-[#F08B32]">
                {card.value}
              </div>

              {/* Label */}
              <div className="text-[#E4E4E7] text-xl leading-6 font-light border-t border-[#2A2A2A] py-3">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricCards;
