// components/CareersSection.tsx
import { CareersSectionContent } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import PageTitle from "./PageTitle";

const CareersSection: FC<CareersSectionContent> = ({
  label,
  headline,
  subheadline,
  highlightWords,
  teamImage,
  missionHeading,
  missionDescription,
}) => {
  return (
    <div
      className={`text-[#FFFFFF] flex flex-col md:gap-[72px] gap-[40px] items-center justify-center md:pt-[64px] mx-auto max-md:px-5 max-md:pt-[112px] md:px-[80px]`}
    >
      <div className="flex flex-col !gap-6 items-center justify-center">
        <PageTitle pageHeading={label} />
        <h1 className="font-[300] md:font-[400] text-[32px] md:text-[72px] md:leading-[90px] leading-[42px] text-center text-white flex flex-col items- gap-2 md:gap-4 md:max-w-[1000px]">
          <div className="flex items-center justify-center md:gap-4 gap-2 flex-wrap">
            <span>We’re </span>
            <Image
              src="/orange-search.svg"
              alt="search"
              width={32}
              height={32}
              className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
              priority
              unoptimized={true}
            />
            {highlightWords?.text && (
              <span className=" text-center border-[1px] border-[#F08B32] rounded-[50px] px-4 md:px-8 bg-gradient-to-r from-[#F08B32] to-[#FFFFFF] bg-clip-text text-transparent font-[400] text-[32px] md:text-[72px] md:leading-[86px]">
                {highlightWords?.text}
              </span>
            )}
            <span className="text-[32px] md:text-[72px] md:leading-[90px] font-[300] md:font-[400] text-white md:-ml-4">
              difference
            </span>
            <Image
              src="/greeen-arrow.svg"
              alt="arrow"
              width={48}
              height={48}
              priority
              className="w-[32px] h-[32px] md:w-[56px] md:h-[56px]"
            />
            <span className="text-[32px] md:text-[72px] md:leading-[90px] font-[300] md:font-[400] text-white">
              makers
            </span>
          </div>
        </h1>

        <p className="text-[#E4E4E7] font-[300] md:text-[24px] text-[14px] md:mt-[14px] text-center">
          {subheadline}
        </p>
      </div>

      <div className="rounded-lg">
        <Image
          src={teamImage.src}
          alt={teamImage.alt}
          width={1200}
          height={700}
          unoptimized={true}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-5 w-full max-w-[1350px] mx-auto">
        <div className="col-span-2 w-full text-[#FFFFFF] md:text-[32px] text-[16px] leading-[28px] md:!leading-[42px] font-[500]">
          {missionHeading?.map((line, i) => <p key={i}>{line}</p>)}
        </div>

        <div className="col-span-3 w-full text-[#E4E4E7] !font-[300] leading-[20px] md:text-[22px] text-[13px] md:leading-[28px] pt-[4px]">
          {missionDescription}
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
