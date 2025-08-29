import { DashboardSection } from "@/interface/type";
import Image from "next/image";
import React from "react";

const DashboardFeaturesDynamic: React.FC<DashboardSection> = (card) => {
  const {
    title = "",
    solution = "",
    img = "",
    layout = "",
    description = "",
    subTitle = "",
    subDesc = "",
  } = card;
  return (
    <div className="w-fit bg-[#15181B] p-4 rounded-lg  border-[1px] border-[#E5E5E533]">
      <section
        className={
          layout != "test"
            ? "flex flex-col gap-2"
            : "md:grid md:grid-cols-2 items-center justify-between flex flex-col gap-2"
        }
      >
        <div className="md:min-h-[110px] flex flex-col gap-3">
          <h2 className="md:font-[500] text-[#EEEFFC] md:text-[24px] text-[18px] leading-[20px] md:leading-[24px]">
            {title}
          </h2>
          {solution && (
            <p className="">
              💡
              <span className=" text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFFFFF]">
                {solution}
              </span>
            </p>
          )}
          {description && (
            <p className="!font-[300] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-[#FFFFFF]">
              {description}
            </p>
          )}
          {layout == "test" && subTitle && (
            <div>
              <p className="!font-[500] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-[#F08B32]">
                {subTitle}
              </p>
              <p className="!font-[300] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-[#FFFFFF]">
                {subDesc}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          {img && (
            <Image
              src={img}
              width={596}
              height={212}
              alt="bannerImage"
              className="h-[320px]"
            />
          )}
          {layout != "test" && subTitle && (
            <div>
              <p className="!font-[500] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-[#F08B32]">
                {subTitle}
              </p>
              <p className="!font-[300] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] text-[#FFFFFF]">
                {subDesc}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardFeaturesDynamic;
