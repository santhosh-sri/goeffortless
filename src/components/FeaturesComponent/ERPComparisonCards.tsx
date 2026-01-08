import { ERPComparisonCard } from "@/interface/type";
import Image from "next/image";
import React from "react";

interface Props {
  cards: ERPComparisonCard[];
}

const ERPComparisonCards: React.FC<Props> = ({ cards }) => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={card.id}
            className="border border-white/10 rounded-lg p-5 flex flex-col gap-4 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)]"
          >
            {/* Header */}
            <div className="flex flex-col gap-3">
              <p className="text-xs leading-4 font-light text-[#E4E4E7]">
                {card.id}. {card.subTitle}
              </p>
              <p className="text-2xl font-semibold leading-[31px] text-white">
                {card.title}
              </p>
            </div>
            {/* ERP Promise */}
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-[18px] font-light text-[#E4E4E7]">
                The ERP Promise:
              </p>
              <p className="text-base leading-5 font-normal text-white">
                {card.secondTitle}
              </p>
            </div>
            {/* Effortless Reality */}
            <div className="flex flex-col gap-4">
              <p className="text-[#F08B32] font-semibold text-sm leading-5">
                The Effortless Reality:
              </p>

              <div className="flex flex-col gap-4">
                {card.erpPromise.map((item: any, i: any) => (
                  <div key={i} className="flex items-start gap-2">
                    <Image
                      src="/orangeTick.svg"
                      alt="orangeTick"
                      width={20}
                      height={20}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-white text-sm leading-[18px] font-semibold">
                        {item.key}
                      </p>
                      <p className="text-[#E4E4E7] text-sm leading-[18px] font-light">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Result */}
            {card.result && (
              <div className="border-t border-t-[#424242] py-4">
                <p className="text-[#F08B32] font-medium text-base leading-5">
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
