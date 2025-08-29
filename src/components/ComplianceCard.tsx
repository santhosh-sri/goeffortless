import { ComplianceCard } from "@/interface/type";
import Image from "next/image";
import React from "react";

const ComplianceCardSection: React.FC<ComplianceCard> = ({
  title,
  description,
  img,
  subTitle,
}) => {
  return (
    <div className="rounded-xl shadow-md">
      <div className="text-[#FFF]  flex flex-col gap-2 p-5 md:p-3 items-center  justify-center rounded-xl bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] md:min-w-[280px]">
        {img && (
          <Image
            src={img}
            alt="Icon"
            width={48}
            height={48}
            className="w-[32px] h-[32px] md:!w-[48px] md:!h-[48px]"
            unoptimized={true}
          />
        )}
        <p className="text-[16px] leading-[23px] md:text-[20px] md:leading-[30px] font-[500] text-[#F08B32] text-center">
          {title}
        </p>
        <p className="text-[#FFFFFF] text-[14px] leading-[23px] md:text-[16px] md:leading-[26px] font-[400] text-center md:min-h-[12px]">
          {subTitle}
        </p>
        <p className="text-[#FFFFFF] text-[13px] leading-[17px] md:text-[14px] font-[300] md:leading-[18px] md:min-h-[60px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ComplianceCardSection;
