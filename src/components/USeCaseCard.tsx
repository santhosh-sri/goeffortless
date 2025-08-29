import { UseCaseCard } from "@/interface/type";
import Image from "next/image";
import React from "react";

const USeCaseCard: React.FC<UseCaseCard> = ({ title, description, img }) => {
  return (
    <div className="text-[#FFF] flex flex-col gap-[32px] md:gap-[56px] p-[42px] md:p-9 rounded-xl bg-[#121316] items-center justify-center">
      {img && (
        <Image src={img} alt="Icon" width={48} height={48} unoptimized={true} />
      )}
      <div className="flex flex-col gap-[18px] items-center justify-between text-center">
        <p className="text-[18px] leading-[23px] md:text-[26px] md:h-[90px]">
          {title}
        </p>
        <p className="text-[13px] leading-[17px] md:text-[18px] md:leading-6">
          {description}
        </p>
        {/* <div className="flex gap-1 items-center cursor-pointer">
          <p className="text-[#F08B32] text-[20px] font-[300]">Learn more</p>
          <Image src={"/arrow-right.svg"} alt="arrow" width={16} height={16} />
        </div> */}
      </div>
    </div>
  );
};

export default USeCaseCard;
