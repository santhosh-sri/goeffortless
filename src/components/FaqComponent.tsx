"use client";

import { FAQData } from "@/interface/type";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import SearchBar from "./SearchBar";

interface Props {
  faqs: FAQData;
}

const FaqComponent: React.FC<Props> = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState<Record<string, number[]>>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [feedbacks, setFeedbacks] = useState<{
    [category: string]: { [index: number]: "yes" | "no" };
  }>({});

  const toggleFAQ = (category: string, index: number) => {
    setOpenIndexes((prev) => {
      const prevOpen: number[] = prev[category] || []; // ensure it's always an array
      if (prevOpen.includes(index)) {
        return { ...prev, [category]: prevOpen.filter((i) => i !== index) };
      } else {
        return { ...prev, [category]: [...prevOpen, index] };
      }
    });
  };

  const handleFeedback = (
    e: any,
    category: string,
    index: number,
    value: "yes" | "no"
  ) => {
    e.stopPropagation();
    setFeedbacks((prev) => ({
      ...prev,
      [category]: { ...(prev[category] || {}), [index]: value },
    }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const ImageData: any = {
    General: "/circle-question-active.svg",
    "Sales, Invoicing & Collections": "/page.svg",
    "Teams & Field Operations": "/people-network.svg",
    "Expenses & Banking": "/bank-statement.svg",
    "Business Insights & Automation": "/decision-process.svg",
    "Security & Trust": "/shield-lock.svg",
    "Technical & Licensing": "/category-certificate.svg",
  };

  return (
    <>
      <SearchBar onChange={handleSearchChange} />
      <div className="space-y-8">
        {Object.entries(faqs).map(([category, items]) => {
          const filteredItems =
            items &&
            items.filter((item) =>
              item?.question?.toLowerCase().includes(searchQuery)
            );

          if (filteredItems.length === 0) return null;
          return (
            <div key={category} className="flex flex-col gap-5">
              <div className="border-b border-[#26262699] flex items-center gap-2">
                <div className="bg-[#262626] p-2 rounded">
                  <Image
                    src={ImageData[category]}
                    alt="category"
                    width={24}
                    height={24}
                    className=""
                    unoptimized
                  />
                </div>
                <h2 className="text-[#FAFAFA] py-3 text-lg font-semibold">
                  {category}
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {filteredItems?.map((item, index) => {
                  const currentFeedback = feedbacks[category]?.[index] || null;
                  const isOpen = openIndexes[category]?.includes(index);
                  return (
                    <div
                      key={index}
                      onClick={() => toggleFAQ(category, index)}
                      className="rounded-[8px] border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
            drop-shadow-sm select-none cursor-pointer"
                    >
                      <div className="w-full px-6 py-4 flex items-center justify-between">
                        <span className="text-left text-base text-[#FAFAFA] font-normal">
                          {item.question}
                        </span>

                        <Image
                          src={"/resource-right.svg"}
                          alt="resource"
                          width={16}
                          height={16}
                          className="transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                      {isOpen && (
                        <div className="px-6 pb-4 flex flex-col gap-3 transition-all duration-700 ease-in-out">
                          <div className="text-base font-light text-[#E5E5E5]">
                            {item.answer}
                          </div>
                          <div className="text-xs md:text-sm text-[#A1A1A1] font-normal flex justify-between items-center border-t border-[#26262699] pt-2">
                            <p>Was this helpful?</p>
                            <div className="flex gap-1">
                              <button
                                className={`px-2 py-1 transition-colors duration-300 flex gap-1 items-center rounded ${
                                  currentFeedback === "yes"
                                    ? "bg-[#FFFFFF] text-[#171717]"
                                    : "bg-transparent text-white"
                                }`}
                                onClick={(e) =>
                                  handleFeedback(e, category, index, "yes")
                                }
                              >
                                <Image
                                  src={`${
                                    currentFeedback === "yes"
                                      ? "/yes-active.svg"
                                      : "/yes.svg"
                                  }`}
                                  alt="resource"
                                  width={16}
                                  height={16}
                                  className="transition-transform duration-300"
                                  unoptimized
                                />
                                <span>Yes</span>
                              </button>
                              <button
                                className={`px-2 py-1 transition-colors duration-300 flex gap-1 items-center rounded ${
                                  currentFeedback === "no"
                                    ? "bg-[#82181A99] text-white"
                                    : "bg-transparent text-white"
                                }`}
                                onClick={(e) =>
                                  handleFeedback(e, category, index, "no")
                                }
                              >
                                <Image
                                  src={"/no.svg"}
                                  alt="resource"
                                  width={16}
                                  height={16}
                                  className="transition-transform duration-300"
                                  unoptimized
                                />
                                <span>No</span>
                              </button>
                            </div>
                          </div>
                          {currentFeedback && (
                            <div className="bg-[#26262666] px-2 py-1 transition-opacity duration-300">
                              {currentFeedback === "yes"
                                ? "Thank you for your feedback!"
                                : `Thank you. Please contact
                        support for more help.`}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FaqComponent;
