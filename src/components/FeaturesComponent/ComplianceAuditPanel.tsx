import Image from "next/image";
import React from "react";

interface Props {
  data: any;
}

const ComplianceAuditPanel: React.FC<Props> = ({ data }) => {
  const { left, right } = data;

  return (
    <section className="">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
        {/* LEFT */}
        <div>
          <h3 className="text-white text-xl font-semibold text-center">
            {left.title}
          </h3>
          <p className="text-gray-400 text-center mb-8">{left.subtitle}</p>

          <div className="bg-[#0B0B0B] border border-[#1F1F1F] rounded-xl p-6 space-y-6">
            <div>
              <p className="text-gray-400">{left.card.vendorName.label}</p>
              <p className="text-orange-400 font-semibold">
                {left.card.vendorName.value}
              </p>
            </div>

            <div>
              <p className="text-gray-400">{left.card.gstin.label}</p>
              <p className="text-orange-400 font-semibold">
                {left.card.gstin.value}
              </p>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Line Items</p>
              {left.card.lineItems.map((item: any, i: number) => (
                <div key={i} className="flex justify-between text-white">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            {left.card.summary.map((row: any, i: number) => (
              <div key={i} className="flex justify-between">
                <span className="text-white">{row.label}</span>
                <span
                  className={
                    row.highlight
                      ? "text-orange-400 font-semibold"
                      : "text-white"
                  }
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-orange-400 text-xl font-semibold text-center">
            {right.title}
          </h3>
          <p className="text-gray-400 text-center mb-8">{right.subtitle}</p>

          <div className="space-y-5">
            {right.checks.map((check: any, i: number) => (
              <div
                key={i}
                className={`rounded-xl p-5 text-white`}
                style={{ backgroundColor: check.color }}
              >
                <div className="flex gap-4">
                  <Image src={check.icon} alt="" width={40} height={40} />
                  <div>
                    <p className="font-semibold">{check.title}</p>
                    <p className="text-sm opacity-90">{check.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceAuditPanel;
