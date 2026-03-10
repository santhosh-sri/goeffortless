import React from "react";

const TabComponent = ({
  tabArr,
  activeTab,
  setActiveTab,
}: {
  tabArr: any[];
  activeTab: string | any;
  setActiveTab: (value: string) => void | any;
}) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-1 md:gap-3 bg-[#15181B] p-2 rounded-lg max-md:overflow-x-scroll">
        {tabArr.map((item) => (
          <button
            key={item.val}
            onClick={() => setActiveTab(item.val)}
            className={`px-3 md:px-5 py-1 md:py-2.5 whitespace-nowrap rounded-sm text-base md:text-xl md:leading-[24px] font-normal transition-colors ${
              activeTab === item.val
                ? "text-[#F08B32] bg-[linear-gradient(110deg,rgba(255,255,255,0.10)_-28.47%,rgba(255,255,255,0.00)_128.66%)] shadow-[0_2px_5px_-2px_rgba(16,25,40,0.06),0_2px_7px_0_rgba(16,25,40,0.05),0_0_0_1px_rgba(16,25,40,0.05)]"
                : "text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
