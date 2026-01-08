import React from "react";

interface BarItem {
  label: string;
  value: number;
  unit: string;
  color: string;
  note?: string;
  percent: number;
}

interface InputFieldConfig {
  id: string;
  label: string;
  placeholder: string;
}

interface BreakdownItem {
  label: string;
  value: string;
  desc: string;
}

interface Props {
  data: {
    title: string;
    fields: InputFieldConfig[];
    bars: BarItem[];
    productivityLoss: string;
    lossDesc: string;
    spanText: string;
    breakdownTitle: string;
    breakdown: BreakdownItem[];
    totalImpact: string;
  };
}

const ROICalculator: React.FC<Props> = ({ data }) => {
  const maxValue = Math.max(...data.bars.map((b) => b.value));

  return (
    <div className=" bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] rounded-lg p-8 md:p-10 border border-white/10">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <p className="text-white font-normal text-base leading-6">
                {field.label}
              </p>
              <div className="text-[#E4E4E7] bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] w-full rounded p-3 py-2 md:p-4 text-base font-light shadow-md border border-white/10">
                {field.placeholder}
              </div>
            </div>
          ))}
        </div>
        {/* Header */}
        <div className="text-center">
          <h2 className="text-lg md:text-2xl font-semibold text-white leading-[31px]">
            {data.title}
          </h2>
        </div>

        {/* Bars */}
        <div className="flex flex-col gap-4 md:gap-6">
          {data.bars.map((bar, i) => (
            <div key={i} className="flex flex-col gap-3">
              <p className="text-sm md:text-base leading-[25px] text-white font-semibold">
                {bar.label}
              </p>

              <div
                className="rounded-lg px-4 py-3 text-white md:text-base text-xs font-medium whitespace-nowrap"
                style={{
                  backgroundColor: bar.color,
                  width: `${(bar.percent / maxValue) * 100}%`,
                }}
              >
                ₹{bar.value} {bar.unit}
              </div>

              {bar.note && (
                <p className="text-xs text-[#F08B32] leading-4 font-normal">
                  {bar.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Productivity Loss */}
        <div className=" shadow-md border border-white/10 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] py-10 px-4 rounded-lg flex flex-col gap-4">
          <p className="md:text-base text-sm font-medium text-white text-center">
            {data.productivityLoss}{" "}
            <span className="font-light">{data.spanText}</span>
          </p>
          <p className="text-sm md:text-base font-light text-white text-center">
            You also avoid the{" "}
            <span className="text-[#F08B32] font-medium">
              ₹9L Productivity Loss
            </span>{" "}
            of switching to a Generic Cloud ERP.
          </p>
        </div>

        {/* Breakdown */}
        <p className="text-center text-xl md:text-2xl font-semibold text-white leading-[31px]">
          {data.breakdownTitle}
        </p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.breakdown.map((item, i) => (
              <div
                key={i}
                className=" shadow-md border border-white/10 rounded-xl p-4 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] flex flex-col gap-[9px]"
              >
                <p className="text-white text-sm leading-5 font-normal">
                  {item.label}
                </p>
                <p className="text-[#F08B32] text-xl md:text-2xl font-medium leading-8">
                  {item.value}
                </p>
                <p className="text-white text-sm leading-4 font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Total Impact */}
        <div className=" shadow-md border border-white/10 rounded-xl p-4 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)]">
          <p className="text-[#F08B32] text-xl md:text-3xl font-medium">
            Total Impact: {data.totalImpact}
          </p>
          <p className="text-base md:text-[18px] leading-[28px] font-light text-white">
            By choosing integration over migration, you save ₹81.10 Lakhs in
            upfront capital.
          </p>
          <p className="text-base md:text-[18px] leading-[28px] font-light text-white">
            Plus, with improved cash flow and leakage control, your Total Year 1
            Impact is{" "}
            <span className="text-[#F08B32] font-medium">₹1.08 Cr</span> added
            to your bottom line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
