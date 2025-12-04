import { faqs } from "@/interface/type";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  faqs: faqs[];
}

const FaqCompliance: React.FC<Props> = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<Record<number, "yes" | "no">>({});

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleFeedback = (
    e: React.MouseEvent,
    index: number,
    value: "yes" | "no"
  ) => {
    e.stopPropagation();
    setFeedbacks((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, index) => {
        const currentFeedback = feedbacks[index];
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="rounded-[8px] border border-white/10 border-r-white/0 border-t-0
              bg-gradient-to-tr from-white/10 via-white/5 to-white/0
              shadow-sm shadow-black/5 drop-shadow-sm select-none cursor-pointer"
          >
            <div className="w-full px-4 py-4 flex justify-between">
              <span className="text-[#FAFAFA]">{item.question}</span>
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
              <div className="px-4 pb-4 flex flex-col gap-3">
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
                      onClick={(e) => handleFeedback(e, index, "yes")}
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
                      onClick={(e) => handleFeedback(e, index, "no")}
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
  );
};

export default FaqCompliance;
