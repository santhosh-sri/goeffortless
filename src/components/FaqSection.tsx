import { faqs } from "@/interface/type";
import React from "react";
import { useState } from "react";
import { ChevronDown } from "./ui";

const FaqSection: React.FC<faqs> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 bg-surface mx-4 rounded-xl md:max-w-[1350px] md:mx-auto mb-4 last:mb-0">
      <button
        className="flex gap-3 items-center text-left justify-between w-full text-[16px] font-[400] leading-[20px] text-content pb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown open={isOpen} className="h-5 w-5 text-content-muted" />
      </button>
      {isOpen && (
        <p className="text-[16px] font-[300] leading-[25px] text-content-muted p-3 bg-bg rounded-xl">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqSection;
