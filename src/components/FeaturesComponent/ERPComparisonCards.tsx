import { ERPComparisonCard } from "@/interface/type";
import Image from "next/image";
import React from "react";

interface Props {
  cards: ERPComparisonCard[];
}

const ERPComparisonCards: React.FC<Props> = ({ cards }) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col gap-5 rounded-xl border border-line bg-surface p-5"
          >
            {/* Header */}
            <div className="flex flex-col gap-2">
              <p className="text-caption text-content-subtle">
                {card.id}. {card.subTitle}
              </p>
              <p className="text-heading-sm font-semibold text-content">
                {card.title}
              </p>
            </div>
            {/* ERP Promise */}
            <div className="flex flex-col gap-1.5">
              <p className="text-label text-content-subtle">The ERP Promise:</p>
              <p className="text-body text-content">{card.secondTitle}</p>
            </div>
            {/* Effortless Reality */}
            <div className="flex flex-col gap-4">
              <p className="text-label font-semibold text-accent">
                The Effortless Reality:
              </p>

              <div className="flex flex-col gap-4">
                {card.erpPromise.map((item: any, i: any) => (
                  <div key={i} className="flex items-start gap-2">
                    <Image
                      src="/orangeTick.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mt-0.5 h-5 w-5 shrink-0"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-label font-semibold text-content">
                        {item.key}
                      </p>
                      <p className="text-label text-content-muted">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Result */}
            {card.result && (
              <div className="mt-auto border-t border-line pt-4">
                <p className="text-body font-medium text-accent">
                  Result: {card.result}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ERPComparisonCards;
