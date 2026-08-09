import React from "react";

import { ReadinessCard } from "@/interface/type";

interface Props {
  cards: ReadinessCard[];
}

const ReadinessCards: React.FC<Props> = ({ cards }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface border border-[#E5E5E533] rounded-2xl p-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] rounded-lg p-4 shadow-md"
          >
            {/* Icon */}
            <div className="">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C0 1.79086 1.79086 0 4 0H44C46.2091 0 48 1.79086 48 4V44C48 46.2091 46.2091 48 44 48H4C1.79086 48 0 46.2091 0 44V4Z"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M32 18L21 29L16 24"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <p className="text-content font-normal text-base leading-5 -tracking-[0.48px]">
                {card.title}
              </p>
              <p className="text-content text-sm font-light leading-[18px]">
                {card.description}
                {card.footnote && (
                  <sup className="ml-1 text-xs text-content">{card.footnote}</sup>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadinessCards;
