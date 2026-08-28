import { HomePagePricing } from "@/interface/type";
import React, { useState } from "react";
import parse from "html-react-parser";
// import SecondaryCta from "./SecondaryCta";
import { CalcomConfig } from "@/utils/calConfig";
// import { useRouter } from "next/navigation";
import TabComponent from "./TabComponent";

type NewPricingCardProps = HomePagePricing & {
  setSelectedPlan?: React.Dispatch<React.SetStateAction<string>>;
};

const NewPricingCard: React.FC<NewPricingCardProps> = ({
  packageItems,
  packageItemsHalf,
  setSelectedPlan = () => {},
}) => {
  // const router = useRouter();
  const colouredText = ["annualPrice", "oneTimeImplementationFee"];
  const [activeTab, setActiveTab] = useState<any>("annually");
  const commonItems =
    activeTab === "annually" ? packageItems : packageItemsHalf;
  const tabList = [
    {
      val: "annually",
      label: "Annually",
      tooltip: "Best Value 👌",
    },
    { val: "halfyearly", label: "Half-Yearly" },
  ];
  return (
    <div className="flex flex-col items-center md:gap-[48px]">
      <div className="">
        <TabComponent
          tabArr={tabList}
          activeTab={activeTab}
          setActiveTab={(val) => setActiveTab(val)}
        />
      </div>
      <div className="overflow-x-auto md:overflow-x-hidden text-content !w-full">
        {/* Add rounded-[8px] and overflow-hidden to clip table borders */}
        <div className="rounded-[12px] overflow-hidden border border-[#414141]">
          <table className="table-auto border-collapse text-center w-full">
            <thead className="bg-[#222222]">
              <tr>
                {/* Header will be dynamically generated based on packageItems */}
                <th className="p-3 border-r border-[#414141] last:border-r-0"></th>
                {commonItems?.map((plan, index) => (
                  <th
                    key={index}
                    className="text-center p-3 capitalize border-r border-[#414141] last:border-r-0"
                  >
                    <div className="flex flex-col gap-3 items-center">
                      <div>{plan.name}</div>
                      <p className="text-accent text-[500] my-0 text-xl">
                        {plan.annualPrice}
                      </p>
                      <p
                        style={{
                          background:
                            "linear-gradient(124.77deg, rgba(255, 255, 255, 0.1) -5.51%, rgba(255, 255, 255, 0) 104.11%)",
                        }}
                        className="flex items-center justify-center px-3 py-1.5 rounded-[42px] text-[13px] font-normal w-fit  border border-white/10"
                      >
                        {plan.tag}
                      </p>
                      <p className="text-sm font-light text-content-muted">
                        {plan.billed}
                      </p>
                      <button
                        onClick={() => {
                          setSelectedPlan(plan.name);
                        }}
                        {...CalcomConfig}
                        id="democta"
                        className="bg-[#F08B32] hover:bg-[#DD781F] py-[8px] px-4 w-full text-[13px] md:text-[14px] max-w-[150px] text-white font-[400] cursor-pointer rounded-[4px] whitespace-nowrap"
                      >
                        Schedule Demo
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#FFFFFF0A]">
              {/* Rows will be dynamically generated based on the feature types */}
              {(
                [
                  // { label: "Annual Price", key: "annualPrice" },
                  {
                    label:
                      "One-Time Setup <span style='color: #F08B32'>(CA-Led Onboarding)</span>",
                    key: "oneTimeImplementationFee",
                  },
                  {
                    label:
                      "Number of Users <span style='color: #F08B32'>(Up To)</span>",
                    key: "numberOfUsers",
                  },
                  {
                    label:
                      "IDP Scans <span style='color: #F08B32'>(99.9% Accuracy)</span>",
                    key: "ocrScanning",
                  },
                  {
                    label:
                      "Document Evidence Storage <span style='color: #F08B32'>(Bills, POs, DC, GRN, Contracts)</span>",
                    key: "documentStorage",
                  },
                  {
                    label:
                      "Linked Bank Accounts <span style='color: #F08B32'>(Auto-BRS)</span>",
                    key: "numberOfBRS",
                  },
                  {
                    label:
                      "Additional User <span style='color: #F08B32'>(on top of Base Plan Users)</span>",
                    key: "additionalUsersPrice",
                  },
                  { label: "", key: "" },
                ] as const
              ).map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-[#363636]">
                  <td
                    className={`p-3 text-[13px] md:text-[16px] text-left md:w-[438px] leading-5 border-r border-[#363636] ${
                      colouredText.includes(row.label)
                        ? "text-accent text-[500]"
                        : "font-[400]"
                    }`}
                  >
                    {parse(row?.label)}
                  </td>
                  {commonItems?.map((plan, planIndex) => (
                    <td
                      key={planIndex}
                      className={`text-[13px] md:text-[16px] md:w-[438px] border-r border-[#363636] last:border-r-0 ${
                        colouredText.includes(row.key)
                          ? "text-accent font-[500] leading-5"
                          : "font-[300]"
                      }`}
                    >
                      {row.key === "" ? (
                        <ul className="">
                          {plan.features?.map((feature, idx) => (
                            <li
                              key={idx}
                              className={`${
                                idx == 0
                                  ? "text-accent font-[500]"
                                  : "font-[300]"
                              } border-b border-[#363636] p-3 text-[13px] md:text-[16px] last:border-b-0 text-left leading-5 h-[65px] content-center`}
                            >
                              {feature}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="p-3">
                          {plan[row.key as keyof typeof plan]}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <SecondaryCta
        secondaryCtaText={"View Detailed Comparison of Plans"}
        handleDirect={() => router.push("/pricing")}
        isOrange={true}
      /> */}
    </div>
  );
};

export default NewPricingCard;
