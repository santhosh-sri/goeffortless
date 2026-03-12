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
    <div className="flex justify-center pt-7 md:pt-5">
      <div
        className={`inline-flex items-end gap-1 md:gap-3 bg-[#15181B] p-1 md:p-2 rounded md:rounded-lg ${
          activeTab === "annually" ? "" : "max-md:overflow-x-scroll"
        }`}
      >
        {tabArr.map((item) => (
          <div key={item.val} className="relative flex flex-col items-center">
            {/* Tooltip bubble - right aligned */}
            {activeTab === "annually" && item.tooltip && (
              <div className="absolute -top-6 md:-top-10 left-12 whitespace-nowrap z-10">
                <div className="bg-[#16BA84] text-white text-[10px] md:text-sm px-1.5 py-1 rounded relative">
                  <span className="font-medium">{item.tooltip}</span>
                  {/* Triangle pointer - left aligned to point at button */}
                  <span className="absolute left-4 -bottom-[7px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#16BA84]" />
                </div>
              </div>
            )}
            <button
              onClick={() => setActiveTab(item.val)}
              className={`px-3 py-1 md:py-2.5 whitespace-nowrap rounded-sm text-sm md:text-xl md:leading-[24px] transition-colors ${
                activeTab === item.val
                  ? "text-[#F08B32] bg-[linear-gradient(110deg,rgba(255,255,255,0.10)_-28.47%,rgba(255,255,255,0.00)_128.66%)] shadow-[0_2px_5px_-2px_rgba(16,25,40,0.06),0_2px_7px_0_rgba(16,25,40,0.05),0_0_0_1px_rgba(16,25,40,0.05)] font-medium"
                  : "text-white font-light"
              }`}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
