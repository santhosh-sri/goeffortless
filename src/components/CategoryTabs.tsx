import { useState } from "react";

const categories = [
  "All",
  "Manufacturing",
  "Distribution Businesses",
  "B2B SaaS",
  "Retail",
  "Logistics",
];

const CategoryTabs = ({ active, setActive }: any) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-1 md:gap-3 bg-[#15181B] p-1 md:p-2 rounded-lg overflow-x-scroll">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-3 md:px-5 py-2.5 rounded-sm text-sm text-base font-normal transition-colors ${
              active === category
                ? "text-[#F08B32] bg-[linear-gradient(110deg,rgba(255,255,255,0.10)_-28.47%,rgba(255,255,255,0.00)_128.66%)] shadow-[0_2px_5px_-2px_rgba(16,25,40,0.06),0_2px_7px_0_rgba(16,25,40,0.05),0_0_0_1px_rgba(16,25,40,0.05)]"
                : "text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
