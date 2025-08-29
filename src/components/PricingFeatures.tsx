import parse from "html-react-parser";
import { useRef, useState } from "react";
import { pricingData, pricingHeader } from "../data/pricingFeatures";

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
}

interface PricingHeader {
  [key: string]: PlanData;
}

interface PricingData {
  [sectionName: string]: Feature[];
}

const PricingFeatures = ({
  setShowForm = () => {},
  setSelectedPlan = () => {},
}: {
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlan?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    Overview: true,
    "Fleet on Street Selling": false,
    "Purchase & Expense Management": false,
    "Cross team Workflows": false,
    "Banking and Cashflow Visibility": false,
    "Buyer Portal": false,
    "Field & Office Team Tracking": false,
    "Business Health Dashboard": false,
    "Integrations & Support": false,
  });

  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Synchronize scroll across all horizontal scroll containers (mobile)
  const handleScroll = (scrollLeft: number): void => {
    scrollRefs.current.forEach((ref) => {
      if (ref && ref.scrollLeft !== scrollLeft) {
        ref.scrollLeft = scrollLeft;
      }
    });
  };

  const planOrder = Object.keys(pricingHeader);

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
                {feature.name}
              </td>
              {planOrder.map((tier, i) => (
                <td
                  key={tier}
                  className={`py-4 text-center w-[15%] border-[#2D2D2D] border-b-[1px] ${
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
          top: 80px;
          z-index: 10;
        }
        .desktop-sticky-header {
          position: sticky;
          top: -10px;
          z-index: 10;
        }
      `}</style>

      {/* Expand All Toggle */}
      <div className="flex items-center justify-end px-6 mb-4 md:mt-[30px]">
        <input
          type="checkbox"
          className="mr-2 accent-[#F08B32]"
          checked={Object.values(expandedSections).every((v) => v)}
          onChange={toggleExpandAll}
        />
        <label className="text-[16px] text-white">Expand All</label>
      </div>

      {/* DESKTOP VIEW */}
      <div className="w-full rounded-xl  bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] hidden md:block">
        {/* Desktop Pricing Header - Made Sticky */}
        <div className="desktop-sticky-header z-[999]  bg-black grid grid-cols-[57%_repeat(2,1fr)] items-end min-h-[150px] bg-[linear-gradient(111.18deg,rgba(255,255,255,0.15)_-28.62%,rgba(255,255,255,0.05)_104.36%)] border border-[#2D2D2D]">
          <div className="p-3">
            <h2 className="text-[13px] md:text-[24px] font-semibold text-[#E4E4E7] md:text-white ml-3">
              Features
            </h2>
          </div>
          {Object.entries(pricingHeader as PricingHeader).map(
            ([key, data], index) => (
              <div
                key={key}
                className={`p-[16px] text-center ${"border-l [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"}`}
              >
                <h3 className="text-[24px] font-[300] text-[#E4E4E7] md:text-white capitalize">
                  {data.name || key.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-[#F08B32] text-2xl font-[500]">
                  {parse(data.price)}
                </p>
                <button
                  onClick={() => {
                    setShowForm(true);
                    setSelectedPlan(data.name || key);
                  }}
                  className="bg-[#F08B32] hover:bg-[#DD781F] p-[8px] w-full rounded text-[13px] md:text-[14px] mt-[8px] max-w-[120px] text-white font-[400] cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            )
          )}
        </div>

        {/* Desktop Features Sections */}
        <div className="grid grid-cols-[60%_repeat(3,1fr)] box-shadow-[0px_0px_0px_1px_#1019280D]">
          {Object.entries(pricingData as PricingData).map(([key, features]) => (
            <div key={key} className="col-span-full">
              <button
                onClick={() => toggleSection(key)}
                className={`${
                  expandedSections[key]
                    ? "bg-black border-t border-b [border-image-source:linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)] [border-image-slice:1]"
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
        <div className="sticky-header border-b border-[#2D2D2D] bg-[linear-gradient(111.18deg,rgba(255,255,255,0.15)_-28.62%,rgba(255,255,255,0.05)_104.36%)]">
          {/* Mobile Pricing Header - Fixed Layout */}
          <div className="flex w-full bg-black z-[99] relative">
            {/* Left sticky column for Features label */}
            <div
              style={{
                background:
                  "linear-gradient(111.18deg, rgba(255, 255, 255, 0.2) -28.62%, rgba(255, 255, 255, 0) 104.36%)",
              }}
              className="w-[190px] px-[20px] p-2 sm:p-3 flex-shrink-0 flex flex-col justify-end border-r border-[#2D2D2D]"
            >
              <div className="text-[#E4E4E7] text-[20px]">Features</div>
            </div>

            {/* Right scrollable area for pricing plans */}
            <div
              className="flex-1 overflow-x-auto scrollbar-hide"
              ref={(el: HTMLDivElement | null) => {
                if (el && !scrollRefs.current.includes(el)) {
                  scrollRefs.current.push(el);
                }
              }}
              onScroll={(e) =>
                handleScroll((e.target as HTMLDivElement).scrollLeft)
              }
            >
              <div
                style={{
                  background:
                    "linear-gradient(95.6deg, rgba(255, 255, 255, 0.2) -30%, rgba(255, 255, 255, 0) 183.85%)",
                }}
                className="flex min-w-max h-full"
              >
                {/* Dynamic Plan Components */}
                {Object.entries(pricingHeader as PricingHeader).map(
                  ([planKey, planData], index) => (
                    <div
                      key={planKey}
                      className={`w-[150px] h-full p-2 sm:p-3 text-center flex-shrink-0 ${
                        index <
                        Object.keys(pricingHeader as PricingHeader).length - 1
                          ? "border-r [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"
                          : ""
                      }`}
                    >
                      <h3 className="text-[#E4E4E7] text-[16px] font-[500] capitalize">
                        {planData.name ||
                          planKey.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <p className="text-[#F08B32] text-[18px] font-[500] my-1">
                        {parse(planData.price)}
                      </p>
                      <button
                        onClick={() => {
                          setShowForm(true);
                          setSelectedPlan(planData.name || planKey);
                        }}
                        className="bg-[#F08B32] py-[8px] px-4 w-full rounded text-[13px] md:text-[14px] mt-[8px] max-w-[120px] text-white font-[400] cursor-pointer"
                      >
                        {planData.trial || "Contact Us"}
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Features List */}
        <div className="pb-4 w-full">
          {Object.entries(pricingData as PricingData).map(
            ([sectionName, features]) => (
              <div key={sectionName} className="border-b border-[#2D2D2D]">
                {/* Mobile Section Header */}
                <button
                  onClick={() => toggleSection(sectionName)}
                  className={`${
                    expandedSections[sectionName]
                    ? "bg-black border-t border-b [border-image-source:linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)] [border-image-slice:1]"
                    : "border border-[#2D2D2D] border-t-0"
                  } w-full flex items-center justify-between p-3 sm:p-4 transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-base sm:text-lg">
                      {expandedSections[sectionName] ? "−" : "+"}
                    </span>
                    <span className="text-left font-medium text-sm sm:text-base">
                      {sectionName}
                    </span>
                  </div>
                </button>

                {/* Mobile Features Details */}
                {expandedSections[sectionName] && (
                  <div className="w-full">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex border-t border-[#2D2D2D]"
                      >
                        {/* Feature Name - Sticky */}
                        <div
                          style={{
                            background:
                              "linear-gradient(111deg, rgba(255, 255, 255, 0.20) -28.62%, rgba(255, 255, 255, 0.00) 104.36%)",
                            boxShadow:
                              "0px 2px 5px -2px rgba(16, 25, 40, 0.06), 0px 2px 7px 0px rgba(16, 25, 40, 0.05), 0px 0px 0px 1px rgba(16, 25, 40, 0.05)",
                          }}
                          className="w-[190px] px-[20px] p-2 sm:p-3 text-xs sm:text-sm flex-shrink-0 border-r border-[#2D2D2D] flex items-center"
                        >
                          <span className="line-clamp-3 ">{feature.name}</span>
                        </div>

                        {/* Feature Values - Synchronized scroll */}
                        <div
                          className="flex-1 overflow-x-auto scrollbar-hide"
                          style={{
                            background:
                              "linear-gradient(116deg, rgba(255, 255, 255, 0.20) -120.31%, rgba(255, 255, 255, 0.00) 127.83%)",
                          }}
                          ref={(el: HTMLDivElement | null) => {
                            if (el && !scrollRefs.current.includes(el)) {
                              scrollRefs.current.push(el);
                            }
                          }}
                          onScroll={(e) =>
                            handleScroll(
                              (e.target as HTMLDivElement).scrollLeft
                            )
                          }
                        >
                          <div className="flex min-w-max h-full">
                            {planOrder.map((tier, tierIndex) => (
                              <div
                                key={tier}
                                
                                className={`w-[150px] py-3 text-center flex-shrink-0 ${
                                  tierIndex < planOrder.length - 1
                                    ? " border-r-[1px] last:border-b-none [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"
                                    : ""
                                } flex items-center justify-center`}
                              >
                                <span
                                  className={`text-[16px] font-[500] max-md:text-[13px] ${
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
                        </div>
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
