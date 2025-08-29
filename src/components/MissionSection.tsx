// components/MissionSection.tsx
import { MissionSectionContent } from "@/interface/type";
import parse from "html-react-parser";
import Image from "next/image";
import { FC } from "react";
import SecondaryCta from "./SecondaryCta";

const MissionSection: FC<MissionSectionContent> = ({
  image,
  mobileImage,
  title,
  colouredTitle,
  intro,
  paragraphs,
  cta,
}) => {
  return (
    <section className="text-white grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-[24px] justify-center">
      <Image
        src={image.src}
        alt={image.alt}
        width={660}
        height={470}
        unoptimized={true}
        priority
        className="md:w-[616px] md:!h-[416px] hidden md:block"
      />
      <div className="flex flex-col gap-5 max-md:items-center">
        <h2 className="text-[24px] md:text-[32px] font-[300] leading-[26px] max-md:text-center">
          {title}
          <span className="!bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFF] font-[500]">
            {colouredTitle}
          </span>
        </h2>
        <p className="text-[#E4E4E7] md:text-[18px] text-[13px] font-[300] leading-[20px] md:leading-[24px] max-md:text-center">
          {intro}
        </p>
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-[#E4E4E7] md:text-[18px] text-[13px] font-[300] leading-[20px] md:leading-[24px] max-md:text-center"
          >
            {parse(para)}
          </p>
        ))}
        {mobileImage && (
          <Image
            src={mobileImage.src}
            alt={mobileImage.alt}
            width={660}
            height={470}
            unoptimized={true}
            priority
            className="md:w-[616px] md:!h-[416px] md:hidden"
          />
        )}
        <div className="w-fit items-center md:mt-[34px]">
          <SecondaryCta
            isOrange={true}
            handleDirect={() => {
              window.location.href = cta.url;
            }}
            secondaryCtaText={cta?.text}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
