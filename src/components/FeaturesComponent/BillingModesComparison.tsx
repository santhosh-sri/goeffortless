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
    <section className="">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {modes.map((mode, idx) => (
          <div
            key={idx}
            className="border bg-black border-[#1E1E1E] rounded-xl p-8"
          >
            {/* Title */}
            <h3
              className={`text-xl font-semibold text-center mb-8 ${mode.titleColor}`}
            >
              {mode.title}
            </h3>

            {/* Steps */}
            <div className="bg-[#0B0B0B] border border-[#1E1E1E] rounded-xl p-6 mb-8 space-y-5">
              {mode.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFE8D3] text-orange-500 flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-white">{step}</p>
                </div>
              ))}
            </div>

            {/* Why */}
            <div className="mb-6">
              <p className="text-orange-400 font-semibold mb-2">
                {mode.whyTitle}
              </p>
              <p className="text-gray-300">{mode.whyText}</p>
            </div>

            {/* Supports */}
            <div>
              <p className="text-orange-400 font-semibold mb-4">Supports:</p>
              <ul className="space-y-3">
                {mode.supports.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BillingModesComparison;
