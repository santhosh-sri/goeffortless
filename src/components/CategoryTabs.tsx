import React from "react";
import TabComponent from "./TabComponent";

const categories = [
  { val: "All", label: "All" },
  { val: "Manufacturing", label: "Manufacturing" },
  { val: "Distribution Businesses", label: "Distribution Businesses" },
  { val: "B2B SaaS", label: "B2B SaaS" },
  { val: "Retail", label: "Retail" },
  { val: "Logistics", label: "Logistics" },
];

const CategoryTabs = ({ active, setActive }: any) => {
  return (
    <TabComponent
      tabArr={categories}
      activeTab={active}
      setActiveTab={setActive}
    />
  );
};

export default CategoryTabs;
