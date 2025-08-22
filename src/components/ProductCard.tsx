import React, { useState } from "react";
import { ProductTab } from "@/interface/type"; // Ensure this is defined correctly in your types

interface ProductDetailsProps {
  producttabs: ProductTab[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ producttabs }) => {
  const [selectedTab, setSelectedTab] = useState<string>(producttabs[0].name);

  const handleTabChange = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const selectedTabData = producttabs.find((tab) => tab.name === selectedTab);

  return (
    <div className="">
      {/* Tab Headers */}
      <div className="flex  md:justify-between mb-6 border-[1px] p-2 rounded-lg border-gray-700 bg-[linear-gradient(125.31deg,rgba(255,255,255,0.1)_56.15%,rgba(255,255,255,0)_104.12%)] md:min-w-[400px]">
        {producttabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabChange(tab.name)}
            className={`text-[13px] font-[400] p-2 md:px-8 leading-[16px] text-[white] ${
              selectedTab === tab.name
                ? "bg-[linear-gradient(111.18deg,rgba(255,255,255,0.4)_-28.62%,rgba(255,255,255,0.128)_104.36%)] rounded-lg"
                : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      {selectedTabData && (
        <div className="bg-[#121316] p-6 rounded-md text-white border border-gray-700">
          <h2 className="text-xl font-bold mb-4">{selectedTabData.name}</h2>
          <p className="text-sm text-gray-300 mb-4">
            {selectedTabData.content}
          </p>

          {/* Perfect For List */}
          <h3 className="font-semibold text-md mb-2">Perfect For:</h3>
          <ul className="list-disc list-inside text-sm text-gray-300">
            {selectedTabData.perfectFor.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
