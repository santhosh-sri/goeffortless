import { MetricCardData } from "@/interface/type";
import React from "react";

interface Props {
  cards: MetricCardData[];
}

const MetricCards: React.FC<Props> = ({ cards }) => {
  return (
    <section className="w-full md:w-[1036px] md:mx-auto max-md:px-5">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-white/10 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] rounded-lg p-4 md:p-5 text-center flex flex-col gap-3 md:gap-4"
            >
              {/* Value */}
              <div className="text-[28px] md:text-[40px] font-medium text-[#F08B32]">
                {card.value}
              </div>

              {/* Label */}
              <div className="text-[#E4E4E7] text-base md:text-xl leading-6 font-light border-t border-[#2A2A2A] pt-3">
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
