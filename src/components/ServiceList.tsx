import { servicesList } from "@/interface/type";
import Image from "next/image";
import React from "react";

const ServiceListCard: React.FC<servicesList> = ({ src, text }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <Image
        src={src}
        alt="profile"
        width={40}
        height={40}
        className="rounded-xl md:w-10 md:h-10"
      />
      <p className="text-[11px] font-[400] leading-[16px] text-[#FFFFFF] text-center max-md:min-h-[50px]">
        {text}
      </p>
    </div>
  );
};

export default ServiceListCard;
