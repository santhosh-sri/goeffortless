import { faqs } from "@/interface/type";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const FaqSection: React.FC<faqs> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 bg-[#15181B] mx-4 rounded-xl md:max-w-[1350px] md:mx-auto mb-4 last:mb-0">
      <button
        className="flex gap-3 items-center text-left justify-between w-full text-[16px] font-[400] leading-[20px] text-[#FFFF] pb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <Image
          src={isOpen ? "/accordion-open.svg" : "/accordion_open.svg"}
          className="h-6 w-6"
          alt="open or close accordion"
          width={6}
          height={6}
        />
      </button>
      {isOpen && (
        <p className="text-[16px] font-[300] leading-[25px] text-[#E4E4E7] p-3 bg-[#08090A] rounded-xl">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqSection;
