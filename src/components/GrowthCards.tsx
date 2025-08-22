import { GrowthCardsContent } from "@/interface/type";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";

const GrowthCards: React.FC<GrowthCardsContent> = ({
  title,
  description,
  image,
  height,
  width,
  showLine,
  isMobile,
  index,
}) => {
  return (
    <>
      <div
        className={`flex ${index === 0 ? "items-end" : "items-center"} justify-center`}
      >
        <div className="flex flex-col md:gap-4 gap-3 items-center justify-center md:px-4">
          <p
            className={`${
              showLine ? "text-[#FFFFFF]" : "text-[#F08B32]"
            } text-[14px] md:text-[20px] font-[500] md:leading-[26px] leading-[16px] text-center`}
          >
            {title}
          </p>
          {description && (
            <p className="text-[#FFFFFF] text-[14px] md:text-[16px] font-[300] leading-[20px] text-center md:pb-3 md:px-[40px]">
              {parse(description)}
            </p>
          )}
          {image && width && height && (
            <Image
              src={image}
              alt="Icon"
              width={width}
              height={height}
              unoptimized={true}
              className="w-full h-auto"
            />
          )}{" "}
        </div>
        {showLine && !isMobile && (
          <div className="md:ml-[15%] md:mr-[5%] w-[3px] h-full min-h-[480px] bg-[linear-gradient(180deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
        )}{" "}
      </div>
      {showLine && isMobile && (
        <div className="w-full h-[2px] md:min-w-[420px] bg-[linear-gradient(90deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
      )}
    </>
  );
};

export default GrowthCards;
