import parse from "html-react-parser";
import { useState } from "react";
import {
  pricingData,
  pricingHeader,
  pricingHeaderHalf,
  pricingDataHalf,
} from "../data/pricingFeatures";
import { CalcomConfig } from "@/utils/calConfig";
import TabComponent from "./TabComponent";

// Type definitions
interface Feature {
  name: string;
  lite: string;
  premium: string;
  premiumPro: string;
  [key: string]: string;
}

interface PlanData {
  name?: string;
  price: string;
  trial?: string;
  tag?: string;
  billed?: string;
}

interface PricingHeader {
  [key: string]: PlanData;
}

interface PricingData {
  [sectionName: string]: Feature[];
}

const PricingFeatures = ({
  setSelectedPlan = () => {},
}: {
  setSelectedPlan?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    Overview: true,
    "Integrations, Data Exchange, Security & Support": false,
    "Fleet on Street Selling": false,
    "Purchase & Expense Management": false,
    "Banking and Cashflow Management": false,
    "Cross-Team Workflows": false,
    "Office & Live Field Team Tracking": false,
    "Customer Workflows": false,
    "Business Health Dashboard": false,
    "Buyer Portal (Unlimited)": false,
  });

  const [activeTab, setActiveTab] = useState<any>("annually");
  const commonHeader =
    activeTab === "annually" ? pricingHeader : pricingHeaderHalf;
  const commonData = activeTab === "annually" ? pricingData : pricingDataHalf;

  const tabList = [
    { val: "annually", label: "Annually", tooltip: "Best Value 👌" },
    { val: "halfyearly", label: "Half-Yearly" },
  ];

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleExpandAll = () => {
    const allExpanded = Object.values(expandedSections).every((v) => v);
    setExpandedSections(
      Object.fromEntries(
        Object.entries(expandedSections).map(([k]) => [k, !allExpanded])
      )
    );
  };

  const planOrder = Object.keys(commonHeader);

  // Desktop table render
  const renderDesktopTable = (features: Feature[]) => (
    <div className="">
      <table className="w-full border-separate border-spacing-0 border-l-[1px] border-r-[1px] border-[#2D2D2D] box-shadow-[0px_0px_0px_1px_#1019280D]">
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className="border-t-0 border-[#2D2D2D] box-shadow-[0px_0px_0px_1px_#1019280D] first:border-t-0"
            >
              <td className="py-4 pl-6 pr-4 text-[14px] font-[400] text-[#E4E4E7] md:text-[#fff] min-w-[300px] w-[40%] border-b border-r border-[#2D2D2D]">
                {parse(feature.name)}
              </td>
              {planOrder.map((tier, i) => (
                <td
                  key={tier}
                  className={`py-4 text-center w-[20%] border-[#2D2D2D] border-b-[1px] ${
                    i !== planOrder.length
                      ? " border-l-[1px] last:border-b-none [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"
                      : ""
                  }`}
                >
                  <span
                    className={`text-[16px] font-[500] ${
                      feature[tier] === "✕"
                        ? "text-red-500"
                        : feature[tier] === "✓"
                        ? "text-emerald-400"
                        : "text-gray-100"
                    }`}
                  >
                    {parse(feature[tier])}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="text-[#E4E4E7] text-[13px] w-full">
      {/* Mobile Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .sticky-header {
          position: sticky;
          top: 70px;
          z-index: 10;
        }
        .desktop-sticky-header {
          position: sticky;
          top: 88px;
          z-index: 10;
        }
      `}</style>

      <div className="mt-[32px] md:mt-[64px] max-md:mb-4">
        <TabComponent
          tabArr={tabList}
          activeTab={activeTab}
          setActiveTab={(val) => setActiveTab(val)}
        />
      </div>
      {/* Expand All Toggle */}
      <div className="flex items-center justify-end max-md:px-0 px-0 mb-4 md:mt-[30px]">
        <input
          type="checkbox"
          className="mr-2 accent-[#F08B32] cursor-pointer"
          checked={Object.values(expandedSections).every((v) => v)}
          onChange={toggleExpandAll}
        />
        <label className="text-[13px] md:text-base text-white cursor-pointer">
          Expand All
        </label>
      </div>

      {/* DESKTOP VIEW */}
      <div className="w-full rounded-xl  bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] hidden md:block">
        {/* Desktop Pricing Header - Made Sticky */}
        <div className="desktop-sticky-header z-[999]  bg-black grid grid-cols-[50%_repeat(2,1fr)] items-end min-h-[150px] bg-[linear-gradient(111.18deg,rgba(255,255,255,0.15)_-28.62%,rgba(255,255,255,0.05)_104.36%)] border border-[#2D2D2D]">
          <div className="p-3">
            <h2 className="text-[13px] md:text-[24px] font-semibold text-[#E4E4E7] md:text-white ml-3">
              Features
            </h2>
          </div>
          {Object.entries(commonHeader as PricingHeader).map(([key, data]) => (
            <div
              key={key}
              className={`flex flex-col gap-3 p-[16px] items-center text-center ${"border-l [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"}`}
            >
              <h3 className="text-[24px] font-[300] text-[#E4E4E7] md:text-white capitalize">
                {data.name || key.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <p className="text-[#F08B32] text-2xl font-[500]">
                {parse(data.price)}
              </p>
              <p
                style={{
                  background:
                    "linear-gradient(124.77deg, rgba(255, 255, 255, 0.1) -5.51%, rgba(255, 255, 255, 0) 104.11%)",
                }}
                className="flex items-center justify-center px-3 py-1.5 rounded-[42px] text-[13px] font-normal w-fit  border border-white/10"
              >
                {data.tag}
              </p>
              <p className="text-sm font-light text-[#E4E4E7]">{data.billed}</p>
              <button
                onClick={() => {
                  setSelectedPlan(data.name || key);
                }}
                {...CalcomConfig}
                className="bg-[#F08B32] hover:bg-[#DD781F] p-[8px] w-full rounded text-[13px] md:text-[14px] max-w-[125px] text-white font-[400] cursor-pointer whitespace-nowrap"
              >
                Schedule Demo
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Features Sections */}
        <div className="grid grid-cols-[50%_repeat(2,1fr)] box-shadow-[0px_0px_0px_1px_#1019280D]">
          {Object.entries(commonData as PricingData).map(([key, features]) => (
            <div key={key} className="col-span-full">
              <button
                onClick={() => toggleSection(key)}
                className={`${
                  expandedSections[key]
                    ? "bg-black border-t border-b [border-image-source:linear-gradient(270deg,#333333_0%,#b1b1b1_50%,#333333_100%)] [border-image-slice:1]"
                    : "border border-[#2D2D2D] border-t-0"
                } w-full flex items-center justify-between py-5 text-white transition-colors`}
              >
                <span className="text-[20px] font-[500] text-[#FFFFFF] px-6">
                  {key}
                </span>
                <span className="text-[20px] text-[#FFFFFF] leading-[24px] font-[500] pr-6">
                  {expandedSections[key] ? "−" : "+"}
                </span>
              </button>
              {expandedSections[key] && renderDesktopTable(features)}
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden">
        {/* Mobile Header - Made Sticky */}
        <div className="sticky-header bg-[linear-gradient(111.18deg,rgba(255,255,255,0.15)_-28.62%,rgba(255,255,255,0.05)_104.36%)]">
          <div className="grid grid-cols-2 w-full bg-black z-[99] relative border-b [border-image-source:linear-gradient(270deg,#333333_0%,#b1b1b1_50%,#333333_100%)] [border-image-slice:1]">
            {/* Features label */}
            {/* <div
              style={{
                background:
                  "linear-gradient(111.18deg, rgba(255, 255, 255, 0.2) -28.62%, rgba(255, 255, 255, 0) 104.36%)",
              }}
              className="flex-1 px-4 py-3 flex flex-col justify-end border-r border-[#2D2D2D]"
            >
              <div className="text-[#E4E4E7] text-[16px]">Features</div>
            </div> */}

            {/* Plan headers - fixed width columns, no scroll */}
            {Object.entries(commonHeader as PricingHeader).map(
              ([planKey, planData], index) => (
                <div
                  key={planKey}
                  style={{
                    background:
                      "linear-gradient(95.6deg, rgba(255, 255, 255, 0.2) -30%, rgba(255, 255, 255, 0) 183.85%)",
                  }}
                  className={`flex-shrink-0 py-4 px-3 text-center flex flex-col gap-1.5 ${
                    index <
                    Object.keys(commonHeader as PricingHeader).length - 1
                      ? "border-r [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"
                      : ""
                  }`}
                >
                  <h3 className="text-[#E4E4E7] text-base font-light capitalize">
                    {planData.name || planKey.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <p className="text-[#F08B32] text-xl font-medium">
                    {parse(planData.price)}
                  </p>
                  <p
                    style={{
                      background:
                        "linear-gradient(124.77deg, rgba(255, 255, 255, 0.1) -5.51%, rgba(255, 255, 255, 0) 104.11%)",
                    }}
                    className="flex items-center justify-center px-2 py-1 rounded-[42px] text-[8px] font-normal w-fit border border-white/10 mx-auto"
                  >
                    {planData.tag}
                  </p>
                  <p className="text-[10px] font-light text-[#E4E4E7]">
                    {planData.billed}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedPlan(planData.name || planKey);
                    }}
                    {...CalcomConfig}
                    className="bg-[#F08B32] py-1.5 px-2 w-full rounded text-sm text-white font-medium cursor-pointer"
                  >
                    {planData.trial || "Schedule Demo"}
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Mobile Features List */}
        <div className="w-full">
          {Object.entries(commonData as PricingData).map(
            ([sectionName, features]) => (
              <div
                key={sectionName}
                className="border-b [border-image-source:linear-gradient(270deg,#333333_0%,#b1b1b1_50%,#333333_100%)] [border-image-slice:1]"
              >
                {/* Mobile Section Header */}
                <button
                  onClick={() => toggleSection(sectionName)}
                  className={`${
                    expandedSections[sectionName]
                      ? "bg-black border-b [border-image-source:linear-gradient(270deg,#333333_0%,#b1b1b1_50%,#333333_100%)] [border-image-slice:1]"
                      : "border border-[#2D2D2D] border-t-0 border-x-0"
                  } w-full flex items-center justify-between px-2 py-3 transition-colors`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-left font-medium text-sm sm:text-base">
                      {sectionName}
                    </span>
                    <span className="text-base sm:text-lg">
                      {expandedSections[sectionName] ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Mobile Features Details */}
                {expandedSections[sectionName] && (
                  <div className="w-full">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-2 border-b last:border-b-0 [border-image-source:linear-gradient(270deg,#333333_0%,#b1b1b1_50%,#333333_100%)] [border-image-slice:1]"
                      >
                        {/* Feature Name */}
                        {/* <div
                          style={{
                            background:
                              "linear-gradient(111deg, rgba(255, 255, 255, 0.20) -28.62%, rgba(255, 255, 255, 0.00) 104.36%)",
                          }}
                          className="flex-1 px-3 py-3 text-xs text-[#E4E4E7] border-r border-[#2D2D2D] flex items-center"
                        >
                          <span>{parse(feature.name)}</span>
                        </div> */}

                        {/* Plan Values - fixed width, no scroll */}

                        <span className="text-left font-light text-[13px] leading-4 col-span-2 px-2 py-3">
                          {parse(feature.name)}
                        </span>
                        {planOrder.map((tier, tierIndex) => (
                          <div
                            key={tier}
                            className={`flex-shrink-0 text-center flex items-center justify-center p-3 ${
                              tierIndex < planOrder.length - 1
                                ? "border-r [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"
                                : ""
                            }`}
                            style={{
                              background: "#121314",
                            }}
                          >
                            <span
                              className={`text-[13px] font-[500] ${
                                feature[tier] === "✓"
                                  ? "text-emerald-400"
                                  : feature[tier] === "✕"
                                  ? "text-red-500"
                                  : "text-[#E4E4E7]"
                              }`}
                            >
                              {parse(feature[tier])}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingFeatures;
