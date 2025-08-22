import { IdeasCard } from "@/interface/type";
import Image from "next/image";
import React from "react";

const IdeasCardSection: React.FC<IdeasCard> = ({ title, description, img }) => {
  return (
    <div className="text-[#FFF] flex flex-col gap-2 md:gap-4 md:p-6 md:pb-0 p-4 pb-0 items-center rounded-xl bg-[#121316]">
      <p className="text-[14px] leading-[23px] md:text-[24px] md:leading-[30px] font-[600]">
        {title}
      </p>
      <p className="text-[12px] leading-[17px] text-[#E4E4E7] md:text-[18px] md:leading-6 md:min-h-[120px]">
        {description}
      </p>
      {img && (
        <Image
          src={img}
          alt="Icon"
          width={200}
          height={320}
          className="md:!w-[450px] md:!h-[250px]"
        />
      )}
    </div>
  );
};

export default IdeasCardSection;
