import { FounderTestimonial } from "@/interface/type";
import Image from "next/image";
import React from "react";

const FounderTestimonialCard: React.FC<FounderTestimonial> = ({
  rating,
  quote,
  name,
  designation,
  title,
}) => {
  return (
    <div
      className={`rounded-lg shadow-md ${
        rating ? "md:max-w-[600px]" : "w-full"
      }`}
    >
      <div className="bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] text-[#FFFFFF] p-6 rounded-md shadow-md">
        <p className="text-[16px] font-semibold mb-4 md:text-[20px] md:leading-[26px]">
          {title}
        </p>
        {rating && (
          <div className="flex items-center mb-3 text-[#F08B32] h-4 w-4 text-[16px]">
            {Array?.from({ length: rating ?? 0 }).map((_, idx) => (
              <Image
                src={"/orangstar.svg"}
                alt="star"
                width={16}
                height={16}
                className="h-4 w-4 text-[#F08B32]"
                key={idx}
              />
            ))}
          </div>
        )}
        <p
          className={`text-[14px] font-[300] mb-4 md:text-[16px] md:leading-[20px] ${
            rating ? "md:min-h-[80px]" : ""
          }`}
        >
          “{quote}”
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-medium md:text-[16px] md:leading-[20px] text-[#FFFFFF]">
              {name}
            </p>
            <p className="text-[12px] font-[300] md:text-[14px] md:leading-[18px] text-[#FFFFFF]">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderTestimonialCard;
