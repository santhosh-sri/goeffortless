import Image from "next/image";
import React from "react";

interface Props {
  data: any;
}

const ComplianceAuditPanel: React.FC<Props> = ({ data }) => {
  const { left, right } = data;

  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT */}
        <div className="flex max-md:flex-col gap-12">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-content text-lg md:text-xl font-bold text-center leading-[26px]">
                {left.title}
              </h3>
              <p className="text-content-muted text-sm md:text-base font-light text-center leading-5">
                {left.subtitle}
              </p>
            </div>
            <div className="bg-[#0B0B0B] border border-[#1F1F1F] rounded-xl p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-content text-sm font-normal">
                  {left.card.vendorName.label}
                </p>
                <p className="text-accent font-semibold">
                  {left.card.vendorName.value}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-content text-sm font-normal">
                  {left.card.gstin.label}
                </p>
                <p className="text-accent font-semibold">
                  {left.card.gstin.value}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-content text-sm font-normal">Line Items</p>
                <div className="flex flex-col gap-2">
                  {left.card.lineItems.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between text-content">
                      <span className="text-content-muted text-sm font-light">
                        {item.label}
                      </span>
                      <span className="text-sm font-normal text-content">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {left.card.summary.map((row: any, i: number) => (
                  <div key={i} className="flex justify-between">
                    <span
                      className={`${
                        row.label === "Total" ? "text-accent" : "text-content"
                      } text-base font-semibold`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={
                        row.highlight
                          ? "text-accent text-[18px] font-semibold"
                          : "text-white"
                      }
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full w-[1px] bg-[linear-gradient(180deg,#282828_0%,#FFFFFF_50%,#282828_100%)]" />
          <div className="md:hidden h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]" />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-accent text-lg md:text-xl font-bold text-center leading-[26px]">
              {right.title}
            </h3>
            <p className="text-content text-sm md:text-base leading-5 font-light text-center">
              {right.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-[30px]">
            {right.checks.map((check: any, i: number) => (
              <div
                key={i}
                className={`rounded-xl p-4 text-content`}
                style={{ backgroundColor: check.color }}
              >
                <div className="hidden md:flex gap-4">
                  <Image src={check.icon} alt="icon" width={40} height={40} />
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold">{check.title}</p>
                    <p className="text-sm leading-5 font-normal">
                      {check.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:hidden">
                  <div className="flex items-center gap-2">
                    <Image src={check.icon} alt="icon" width={40} height={40} />
                    <p className="text-base font-semibold">{check.title}</p>
                  </div>
                  <p className="text-sm leading-5 font-normal">
                    {check.description}
                  </p>
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
