import { ProductsCardSection } from "@/interface/type";
import Image from "next/image";
import React from "react";

const ProductsSection: React.FC<ProductsCardSection> = ({
  title,
  subTitle,
  href,
  description,
}) => {
  return (
    <div id={href}>
      <div className="bg-[#121316] p-4 rounded-xl flex flex-col gap-4 md:gap-5">
        <div className="bg-[#000000] p-4 rounded-xl flex flex-col gap-2 md:gap-8 text-[#FFF] items-center justify-center">
          <Image
            src={"/effortless-logo.svg"}
            alt="Effortless-logo"
            width={82}
            height={12}
            unoptimized={true}
          />
          <h3 className="text-[34px] font-[600] leading-8 md:text-[64px]">
            {title}
          </h3>
          <p className="text-[11px] leading-3 text-[300] md:text-[20px] md:leading-6">
            {subTitle}
          </p>
        </div>
        <p className="text-[#737373] text-[12px] text-[300] leading-4 md:text-[16px] md:leading-5">
          {description}
        </p>
        {/* <div className="flex gap-2 items-center cursor-pointer">
          <p className="text-[11px] leading-3 font-[300] text-[#FFFF] md:text-[20px]">
            Explore Now
          </p>
          <Image
            src={"/right-arrow-white.svg"}
            alt="right-arrow"
            width={12}
            height={12}
            className="md:!w-[24px] md:!h-[24px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProductsSection;
