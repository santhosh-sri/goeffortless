import { HomePagePricing } from "@/interface/type";
import React from "react";
import SecondaryCta from "./SecondaryCta";

type NewPricingCardProps = HomePagePricing & {
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlan?: React.Dispatch<React.SetStateAction<string>>;
};

const NewPricingCard: React.FC<NewPricingCardProps> = ({
  packageItems,
  setShowForm = () => {},
  setSelectedPlan = () => {},
}) => {
  const colouredText = ["annualPrice", "oneTimeImplementationFee"];
  return (
    <div className="flex flex-col items-center md:gap-[48px]">
      <div className="overflow-x-auto md:overflow-x-hidden text-white !w-full">
        {/* Add rounded-[8px] and overflow-hidden to clip table borders */}
        <div className="rounded-[12px] overflow-hidden border border-[#414141]">
          <table className="table-auto border-collapse text-center w-full">
            <thead className="bg-[#222222]">
              <tr>
                {/* Header will be dynamically generated based on packageItems */}
                <th className="p-3 border-r border-[#414141] last:border-r-0"></th>
                {packageItems?.map((plan, index) => (
                  <th
                    key={index}
                    className="text-center p-3 uppercase border-r border-[#414141] last:border-r-0"
                  >
                    <div>
                      <div>{plan.name}</div>
                      <button
                        onClick={() => {
                          setShowForm(true);
                          setSelectedPlan(plan.name);
                        }}
                        id="democta"
                        className="bg-[#F08B32] hover:bg-[#DD781F] py-[8px] px-4 w-full text-[13px] md:text-[14px] mt-[20px] max-w-[120px] text-white font-[400] cursor-pointer rounded-[4px]"
                      >
                        Contact Us
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
                  { label: "Annual Price", key: "annualPrice" },
                  {
                    label: "One-Time Implementation Fee",
                    key: "oneTimeImplementationFee",
                  },
                  { label: "Number of Users (Up To)", key: "numberOfUsers" },
                  { label: "OCR Scanning", key: "ocrScanning" },
                  { label: "Document Evidence", key: "documentStorage" },
                  { label: "Number of BRS", key: "numberOfBRS" },
                  { label: "Additional User", key: "additionalUsersPrice" },
                  { label: "", key: "" },
                ] as const
              ).map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-[#363636]">
                  <td
                    className={`p-3 text-[13px] md:text-[16px] text-left md:w-[438px] leading-5 border-r border-[#363636] ${
                      colouredText.includes(row.label)
                        ? "text-[#F08B32] text-[500]"
                        : "font-[400]"
                    }`}
                  >
                    {row?.label}
                  </td>
                  {packageItems?.map((plan, planIndex) => (
                    <td
                      key={planIndex}
                      className={`text-[13px] md:text-[16px] md:w-[438px] border-r border-[#363636] last:border-r-0 ${
                        colouredText.includes(row.key)
                          ? "text-[#F08B32] font-[500] leading-5"
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
                                  ? "text-[#F08B32] font-[500]"
                                  : "font-[300]"
                              } border-b border-[#363636] p-3 text-[13px] md:text-[16px] last:border-b-0 text-left leading-5`}
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

      <SecondaryCta
        secondaryCtaText={"View Detailed Comparison of Plans"}
        handleDirect={() => (window.location.href = "/pricing")}
      />
    </div>
  );
};

export default NewPricingCard;
