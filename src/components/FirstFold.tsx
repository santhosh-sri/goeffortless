import { FirstFoldContent } from "@/interface/type";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import CtaSection from "./ctaSection";
import FounderTestimonialCard from "./FounderTestimonials";
import PageTitle from "./PageTitle";

const FirstFold: React.FC<FirstFoldContent> = ({
  pageHeading = "",
  pageName = "",
  ishome = false,
  mheading = "",
  logo = "",
  heading = "",
  description = "",
  bannerImage = "",
  mobileBannerImage = "",
  businessTagline = "",
  ctaText = "",
  secondaryCtaText = "",
  ctaUrl = "",
  secondaryCtaLink = "",
  businessPartnersLogo = [],
  founderTestominial = [],
}) => {
  return (
    <div className="text-[#FFFFFF] p-4 pt-[40px] flex flex-col gap-8  md:gap-[60px] items-center justify-center md:pt-[90px]">
      <div className="flex flex-col gap-4 items-center justify-center md:gap-[40px] max-w-[1350px] mx-auto">
        <PageTitle
          pageHeading={pageHeading}
          logo={logo}
          pageName={pageName}
          ishome={ishome}
        />
        {mheading && (
          <h1 className="md:hidden block font-[600] text-[24px] md:text-[72px] md:leading-[90px] leading-[30px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFFFFF]">
            {parse(mheading)}
          </h1>
        )}
        {heading && (
          <h1 className="max-md:hidden  block font-[600] text-[24px] md:text-[72px] md:leading-[90px] leading-[30px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFFFFF]">
            {parse(heading)}
          </h1>
        )}
        <p className="text-[15px] md:text-[24px] md:leading-8 leading-5 text-center">
          {description}
        </p>
      </div>
      {bannerImage && (
        <div
          className="flex flex-col w-full gap-8 md:flex-col-reverse md:gap-[80px] items-center justify-center max-w-[1350px] mx-auto"
          id="firstFold"
        >
          {bannerImage && (
            <Image
              src={bannerImage}
              alt="service-banner"
              width={1200}
              height={700}
              unoptimized={true}
              priority
              className="w-full h-auto object-cover hidden md:block"
            />
          )}
          {mobileBannerImage && (
            <Image
              src={mobileBannerImage}
              alt="service-banner"
              width={1200}
              height={700}
              unoptimized={true}
              priority
              className="w-full h-auto object-cover md:hidden"
            />
          )}
          {ctaText && (
            <CtaSection
              ctaLink={ctaUrl}
              ctaText={ctaText}
              secondaryCtaText={secondaryCtaText}
              secondaryCtaLink={secondaryCtaLink}
            />
          )}
        </div>
      )}
      {founderTestominial.length > 0 && (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 max-w-[1350px] mx-auto items-center justify-center">
          {founderTestominial?.map((testimonial, index) => (
            <FounderTestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      )}
      {businessTagline && (
        <p className="text-[14px] leading-5 text-center md:text-[20px] max-w-full mx-auto">
          {businessTagline}
        </p>
      )}
      <div className="flex w-full max-w-full mx-auto flex-nowrap items-center justify-start md:justify-center gap-8 md:gap-10 overflow-x-auto p-4">
        {businessPartnersLogo?.map((logos, index) => (
          <Image
            key={index}
            src={logos?.src || ""}
            alt="service-banner"
            width={logos?.width}
            height={logos?.height}
            className="flex-shrink-0 w-auto h-10 md:h-12"
          />
        ))}
      </div>
    </div>
  );
};

export default FirstFold;
