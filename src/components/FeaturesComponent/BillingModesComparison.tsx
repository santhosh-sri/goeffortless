import Image from "next/image";
import React from "react";

interface Mode {
  title: string;
  titleColor: string;
  steps: string[];
  whyTitle: string;
  whyText: string;
  supports: string[];
}

interface Props {
  modes: Mode[];
}

const BillingModesComparison: React.FC<Props> = ({ modes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
      {modes.map((mode, idx) => (
        <div className="flex max-md:flex-col  gap-12 h-full items-stretch">
          <div className="flex flex-col gap-5 md:gap-8 h-full flex-1">
            <h3
              className={`text-lg md:text-xl font-semibold text-center ${mode.titleColor}`}
            >
              {mode.title}
            </h3>
            <div
              key={idx}
              className="border bg-black border-[#1E1E1E] rounded-xl p-5 md:p-8 flex flex-col gap-4 md:gap-6 flex-1"
            >
              {/* Steps */}
              <div className="bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] border border-[#1E1E1E] rounded-xl p-4 md:p-5 flex flex-col gap-4">
                {mode.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 md:w-10 md:h-10 shrink-0 rounded-full bg-[#FFE8D3] text-accent text-sm md:text-base flex items-center justify-center font-medium">
                      {i + 1}
                    </div>
                    <p className="text-content text-sm md:text-base font-medium leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Why */}
              <div className="flex flex-col gap-3">
                <p className="text-accent text-base font-medium">
                  {mode.whyTitle}
                </p>
                <p className="text-content font-light text-sm md:text-base">
                  {mode.whyText}
                </p>
              </div>

              {/* Supports */}
              <div className="flex flex-col gap-3">
                <p className="text-accent font-medium text-sm md:text-base">
                  Supports:
                </p>
                <ul className="flex flex-col gap-3">
                  {mode.supports.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-content">
                      <Image
                        src="/pointsTick.svg"
                        alt="pointsTick"
                        width={24}
                        height={24}
                      />
                      <span className="text-base md:text-xl text-content font-light leading-6">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {idx === 0 && (
            <>
              <div className="hidden md:block h-full w-[1px] bg-[linear-gradient(180deg,#282828_0%,#FFFFFF_50%,#282828_100%)]" />
              <div className="md:hidden h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BillingModesComparison;
