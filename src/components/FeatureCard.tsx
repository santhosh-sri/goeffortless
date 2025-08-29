import { FeatureCard } from "@/interface/type";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";

const Featurecard: React.FC<FeatureCard> = ({
  title,
  description,
  img,
  bg,
  imgPosition = "",
}) => {
  return (
    <div
      className={`${
        bg
          ? bg
          : "bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] border-[1px] border-[#393939]"
      } text-[#FFF] flex flex-col  p-4 md:p-3 rounded-lg md:gap-3 `}
    >
      <div
        className={`pb-4 md:pb-[[1px] flex items-start justify-between ${
          imgPosition ? "flex-row-reverse items-start gap-1" : ""
        }`}
      >
        {title && (
          <p className="text-[14px] md:text-[16px] md:leading-[22px] leading-[23px] md:min-h-[40px] w-[90%]">
            {parse(title)}
          </p>
        )}
        <div className="bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] p-2 block h-[40px] w-[40px] rounded-[4px]">
          {img && (
            <Image
              src={img}
              alt="Icon"
              width={20}
              height={20}
              unoptimized={true}
            />
          )}
        </div>
      </div>
      {description && (
        <p className="text-[13px] font-[300] leading-[17px] md:text-[14px] md:leading-[18px] md:min-h-[54px] flex-grow">
          {parse(description)}
        </p>
      )}
    </div>
  );
};

export default Featurecard;
