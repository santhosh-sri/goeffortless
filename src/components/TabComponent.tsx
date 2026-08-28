import { cn } from "@/lib/cn";

/**
 * Segmented tab bar (Compliance TDS / Cost Center / GST, legacy pricing
 * period). Pills follow the home page's Command Center tabs: 8px radius,
 * 20/11 padding, 14/16 semibold; active is accent-filled with a tinted glow,
 * inactive is a white pill with the `line` stroke.
 */
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
      <div
        role="tablist"
        className={cn(
          "flex flex-wrap items-start justify-center gap-3",
          activeTab === "annually" ? "" : "max-md:overflow-x-auto"
        )}
      >
        {tabArr.map((item) => {
          const selected = activeTab === item.val;
          return (
            <div key={item.val} className="relative flex flex-col items-center">
              {/* Tooltip bubble - right aligned */}
              {activeTab === "annually" && item.tooltip && (
                <div className="absolute -top-6 left-12 z-10 whitespace-nowrap md:-top-10">
                  <div className="relative rounded-sm bg-success px-1.5 py-1 text-[10px] text-content-on-accent md:text-label">
                    <span className="font-medium">{item.tooltip}</span>
                    <span className="absolute -bottom-[7px] left-4 h-0 w-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-success" />
                  </div>
                </div>
              )}
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(item.val)}
                className={cn(
                  "whitespace-nowrap rounded-lg px-5 py-[11px] text-[14px] font-semibold leading-4 transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                  selected
                    ? "bg-accent text-content-on-accent shadow-[0px_4px_7px_rgba(240,139,50,0.25)]"
                    : "border border-line bg-surface text-content-muted hover:text-content"
                )}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabComponent;
