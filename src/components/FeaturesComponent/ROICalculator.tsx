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
    <div className="w-full rounded-xl border border-line bg-surface p-5 md:p-10">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <p className="text-body text-content">
                {field.label}
              </p>
              <div className="w-full rounded-sm border border-line bg-bg-subtle p-3 text-body text-content-muted md:p-4">
                {field.placeholder}
              </div>
            </div>
          ))}
        </div>
        {/* Header */}
        <div className="text-center">
          <h2 className="text-body-lg font-semibold text-content md:text-heading-sm">
            {data.title}
          </h2>
        </div>

        {/* Bars */}
        <div className="flex flex-col gap-4 md:gap-6">
          {data.bars.map((bar, i) => (
            <div key={i} className="flex flex-col gap-3">
              <p className="text-label font-semibold text-content md:text-body">
                {bar.label}
              </p>

              <div
                className="whitespace-nowrap rounded-lg px-4 py-3 text-caption font-medium text-white md:text-body"
                style={{
                  backgroundColor: bar.color,
                  width: `${(bar.percent / maxValue) * 100}%`,
                }}
              >
                ₹{bar.value} {bar.unit}
              </div>

              {bar.note && (
                <p className="text-caption text-accent">
                  {bar.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Productivity Loss */}
        <div className="flex flex-col gap-4 rounded-xl border border-line bg-bg-subtle px-4 py-5 md:py-10">
          <p className="text-center text-label font-medium text-content md:text-body">
            {data.productivityLoss}{" "}
            <span className="font-normal text-content-muted">{data.spanText}</span>
          </p>
          <p className="text-center text-label text-content-muted md:text-body">
            You also avoid the{" "}
            <span className="text-accent font-medium">
              ₹9L Productivity Loss
            </span>{" "}
            of switching to a Generic Cloud ERP.
          </p>
        </div>

        {/* Breakdown */}
        <p className="text-center text-body-lg font-semibold text-content md:text-heading-sm">
          {data.breakdownTitle}
        </p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.breakdown.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 rounded-xl border border-line bg-bg-subtle p-4"
              >
                <p className="text-label text-content-muted">
                  {item.label}
                </p>
                <p className="text-body-lg font-bold text-accent md:text-heading-sm">
                  {item.value}
                </p>
                <p className="text-label text-content-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Total Impact */}
        <div className="flex flex-col gap-2 rounded-xl border border-line bg-bg-subtle p-4">
          <p className="text-body-lg font-bold text-accent md:text-heading-md">
            Total Impact: {data.totalImpact}
          </p>
          <p className="text-body text-content-muted md:text-body-lg md:leading-7">
            By choosing integration over migration, you save ₹81.10 Lakhs in
            upfront capital.
          </p>
          <p className="text-body text-content-muted md:text-body-lg md:leading-7">
            Plus, with improved cash flow and leakage control, your Total Year 1
            Impact is{" "}
            <span className="text-accent font-medium">₹1.08 Cr</span> added
            to your bottom line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
