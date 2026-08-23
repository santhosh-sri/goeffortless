import React from "react";

import { ReadinessCard } from "@/interface/type";

interface Props {
  cards: ReadinessCard[];
}

const ReadinessCards: React.FC<Props> = ({ cards }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 rounded-xl border border-line bg-surface p-5 md:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-lg bg-bg-subtle p-4"
          >
            {/* Icon */}
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-icon-tile">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="rgb(var(--color-accent))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {/* Content */}
            <div className="flex flex-col gap-1.5">
              <p className="text-body font-medium text-content">{card.title}</p>
              <p className="text-label text-content-muted">
                {card.description}
                {card.footnote && (
                  <sup className="ml-1 text-caption text-content-subtle">
                    {card.footnote}
                  </sup>
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
