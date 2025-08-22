import { FeatureBannerItem } from "@/interface/type";
import Image from "next/image";
import React from "react";

const FeatureBanner: React.FC<FeatureBannerItem> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  howItSolvesItTitle,
  features = [],
}) => {
  return (
    <div className="md:border-t-2 border-gray-700 md:border-dashed text-white max-w-[1350px] mx-auto max-md:bg-[#15181B] max-md:border-[1px] max-md:rounded-lg max-md:mb-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-md:p-4">
        {/* Left: Image */}
        <div className="max-md:hidden md:col-span-4 flex justify-center items-center">
          <Image
            src={imageSrc || "/placeholder.png"}
            alt={imageAlt || "Feature Image"}
            width={400}
            height={420}
            className="object-contain rounded-md shadow-lg md:p-7 h-[320px]"
          />
        </div>

        {/* Middle: Title & Description */}
        <div className="md:col-span-4 flex flex-col justify-center md:p-7 md:border-l-2 md:border-dashed border-gray-700">
          <h2 className="text-[20px] font-[400] leading-[26px] mb-4">{title}</h2>
          <p className="text-[#FFFFFF] text-[16px] font-[300] leading-[26px]">{description}</p>
        </div>
        {/* Left: Image */}
        <div className="md:hidden md:col-span-4 flex justify-center items-center">
          <Image
            src={imageSrc || "/placeholder.png"}
            alt={imageAlt || "Feature Image"}
            width={300}
            height={300}
            className="object-contain rounded-md shadow-lg md:p-7"
          />
        </div>
        {/* Right: Features with border */}
        <div className="md:col-span-4 md:border-l-2 md:border-gray-700 border-dashed md:p-7">
          <h3 className="text-[20px] font-[400] leading-[26px] mb-4">{howItSolvesItTitle}</h3>
          <ul className="list-disc list-inside space-y-2 text-[#FFFFFF] text-[16px] font-[300] leading-[26px]">
            {features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
