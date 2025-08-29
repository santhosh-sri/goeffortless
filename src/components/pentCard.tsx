import { PentaCard } from "@/interface/type";
import Image from "next/image";
import React from "react";

const PentCard: React.FC<PentaCard> = ({ title, description, img }) => {
  return (
    <div className="text-[#FFF] flex flex-col gap-4 md:gap-6 p-[42px] md:p-9 rounded-xl bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] items-center justify-center md:w-[30%]">
      {img && <Image src={img} alt="Icon" width={38} height={38} />}
      <div className="flex flex-col gap-4 items-center justify-between text-center">
        <p className="text-[18px] leading-[23px] md:text-[24px] font-[500]">{title}</p>
        <p className="text-[15px] leading-[20px] md:text-[16px] md:leading-6">
          {description}
        </p>
        <div className="flex gap-1 items-center cursor-pointer">
          <p className="text-[#F08B32] text-[20px] font-[300]">Know More</p>
          <Image src={"/arrow-right.svg"} alt="arrow" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default PentCard;
