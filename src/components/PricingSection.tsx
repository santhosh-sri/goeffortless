import { PricingSectionContents } from "@/interface/type";
import { CalcomConfig } from "@/utils/calConfig";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import TabComponent from "./TabComponent";
// import Link from "next/link";

interface PricingSectionProps {
  annualData: PricingSectionContents;
  halfYearlyData: PricingSectionContents;
  setSelectedPlan?: (plan: string) => void;
  showTab?: Boolean;
  activeTab?: string;
  setActiveTab?: (val: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  annualData,
  halfYearlyData,
  setSelectedPlan,
  showTab,
  activeTab: externalActiveTab,
  setActiveTab: externalSetActiveTab,
}) => {
  const [internalActiveTab, setInternalActiveTab] =
    React.useState<any>("annually");
  const activeTab = externalActiveTab ?? internalActiveTab;
  const setActiveTab = externalSetActiveTab ?? setInternalActiveTab;
  const currentData = activeTab === "annually" ? annualData : halfYearlyData;

  const {
    packageTitle,
    packageSubTitle,
    packageDescription,
    packageItems,
    packageDetails,
    showAnnum = true,
    Recommended = false,
  } = currentData;

  const tabList = [
    { val: "annually", label: "Annually", tooltip: "Best Value 👌" },
    { val: "halfyearly", label: "Half-Yearly" },
  ];
  return (
    <div>
      {showTab && (
        <TabComponent
          tabArr={tabList}
          activeTab={activeTab}
          setActiveTab={(val) => setActiveTab(val)}
        />
      )}
      <div className="bg-[linear-gradient(97.25deg,rgba(229,229,229,0.2)_-21.96%,rgba(255,255,255,0)_182.96%)] p-[1px] !rounded-xl mt-4">
        <div
          className={` ${
            Recommended ? "border-[1px] border-[#F08B32]" : ""
          } bg-[#15181B] rounded-xl !w-full max-md:min-w-[80%] md:min-w-[25%]`}
        >
          <div className="flex flex-col p-5 gap-2 text-[#FFFF] border-b border-[#393939] md:min-h-[220px]">
            <div className="flex gap-2 md:gap-3 md:items-center md:justify-between">
              <h3 className="xl:text-[24px] text-[20px] font-semibold leading-6 pb-1">
                {packageTitle}
              </h3>
              {Recommended && (
                <div className="flex gap-2 items-center p-[1px] border-[1px] border-[#757677] rounded-lg">
                  <div className="bg-[#141516] p-1 rounded-lg">
                    <p className="text-center text-[12px] bg-clip-text text-transparent bg-[linear-gradient(92.05deg,#F2994A_27.23%,#F2C94C_114.28%)] ">
                      Most Popular
                    </p>
                  </div>
                </div>
              )}
            </div>
            <p className="md:text-[26px] text-[20px] leading-6 font-semibold text-[#F08B32]">
              {packageSubTitle}{" "}
              {/* {showAnnum && (
                <span className="text-[#FFFFFF] text-[12px] font-[300] self-center text-center">
                  {activeTab === "annually" ? "per Annum" : "half yearly"}
                </span>
              )} */}
            </p>
            {packageDetails?.map((item, index) => (
              <p
                key={index}
                className="md:text-[16px] text-[14px] font-[300] leading-[22px]"
              >
                {item ? parse(item) : ""}
              </p>
            ))}
          </div>
          <div className="flex flex-col p-5 gap-3 text-[#FFFF] lg:min-h-[530px] xl:min-h-[400px]">
            {packageDescription && (
              <p className="md:text-[15px]  text-[14px] font-bold leading-[22px] text-[#F08B32]">
                {packageDescription}
              </p>
            )}
            {packageItems?.map((item, index) => (
              <div key={index} className="flex gap-4 text-[#FFFFFF]">
                <Image
                  src="/whiteTickk.svg"
                  alt="tick"
                  width={16}
                  height={16}
                />
                <p className="text-[14px] font-[300] leading-[22px]">{item}</p>
              </div>
            ))}
            <button
              className="bg-[#F08B32] text-white px-4 py-2 mt-2 rounded-[4px] hover:bg-[#D87A2C] transition-colors duration-300 text-[14px] font-[500]"
              onClick={() => {
                if (setSelectedPlan) {
                  if (packageTitle) {
                    setSelectedPlan(packageTitle);
                  }
                }
              }}
              {...CalcomConfig}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PricingCardsGroup = ({
  pricingCards,
  pricingCardsHalf,
  setSelectedPlan,
}: {
  pricingCards: PricingSectionContents[];
  pricingCardsHalf: PricingSectionContents[];
  setSelectedPlan?: (plan: string) => void;
}) => {
  const [activeTab, setActiveTab] = React.useState<string>("annually");
  return (
    <div
      className="flex max-md:flex-col max-xl:overflow-hidden w-full gap-6 md:hidden max-md:mt-4"
      id="pricing"
    >
      {pricingCards.map((cardContents, index) => (
        <PricingSection
          key={index}
          annualData={cardContents}
          halfYearlyData={pricingCardsHalf[index]}
          setSelectedPlan={setSelectedPlan}
          showTab={index === 0}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
      {/* <div className={`w-full`}>
        <Link href="/pricing-plan">
          <button className="border-[1px] border-[#F08B32] text-[#F08B32] px-4 py-2 rounded-[4px] w-full md:text-[16px] text-[14px] font-[500]">
            Compare all Plans in Detail
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default PricingSection;
