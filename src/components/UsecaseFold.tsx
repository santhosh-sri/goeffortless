import { FirstFoldContent } from "@/interface/type";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import Democta from "./Democta";
import FounderTestimonialCard from "./FounderTestimonials";
import Logocarousel from "./Logocarousel";
import PageTitle from "./PageTitle";
import SecondaryCta from "./SecondaryCta";
interface UsecaseFoldProps extends FirstFoldContent {
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
  isPartnerPage?: boolean;
}
const UsecaseFold: React.FC<UsecaseFoldProps> = ({
  pageHeading = "",
  pageName = "",
  ishome = false,
  logo = "",
  heading = "",
  description = "",
  bannerImage = "",
  businessTagline = "",
  ctaText = "",
  secondaryCtaText = "",
  secondaryCtaUrl = "",
  businessPartnersLogo = [],
  founderTestominial = [],
  setShowForm,
  isMobile,
  isPartnerPage,
}) => {
  const handleDirect = () => {
    if (secondaryCtaText?.toLowerCase().includes("join as a partner")) {
      const section = document.getElementById("PartnerForm");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (secondaryCtaUrl) {
      window.open(secondaryCtaUrl);
    } else {
      setShowForm && setShowForm(true);
    }
  };
  return (
    <>
      <div
        className={`text-[#FFFFFF] p-4 flex flex-col md:gap-10 items-center justify-center md:pt-[60px] mx-auto max-md:mt-[64px] ${
          isMobile ? "px-[15px] pt-[24px]" : "px-[60px]"
        }`}
      >
        <div
          className={`text-[#FFFFFF] flex max-md:flex-col gap-10 ${
            isPartnerPage ? "md:gap-[10px]" : "md:gap-[65px]"
          } items-center max-w-[1350px] mx-auto relative`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
            <div className="flex flex-col gap-4 md:items-start items-center justify-center md:gap-[20px] w-full">
              <PageTitle
                pageHeading={pageHeading}
                logo={logo}
                pageName={pageName}
                ishome={ishome}
              />
              {heading && (
                <h1
                  className={` ${
                    ishome
                      ? "font-[400] bg-custom-gradient md:leading-[90px]"
                      : `${
                          isPartnerPage
                            ? "font-[500] md:leading-[80px] md:max-w-[80%] "
                            : "font-[300] md:leading-[90px]"
                        } bg-gradient-to-r from-[#F08B32] to-[#FFFFFF]`
                  } max-md:text-center text-[32px] md:text-[72px] leading-[35px] bg-clip-text text-transparent`}
                >
                  {parse(heading)}
                </h1>
              )}
              <p
                className={` ${
                  ishome
                    ? "md:leading-8 leading-5"
                    : "md:max-w-[90%] leading-normal"
                } ${
                  isPartnerPage
                    ? "md:text-[20px] md:font-[300]"
                    : "md:text-[24px] font-[300]"
                } max-md:text-center text-[14px]`}
              >
                {description}
              </p>
              <div className={ishome ? "flex flex-col gap-[2rem] w-full" : ""}>
                {ishome && (
                  <div className="flex gap-2 items-start max-md:hidden">
                    <p className="text-[15px] font-[300] md:text-[20px] md:leading-8 leading-5 text-center text-[#F08B32]">
                      Work seamlessly with:
                    </p>
                    <Image
                      src={"/tallylogo.svg"}
                      alt="Effortless-logo"
                      width={240}
                      height={56}
                      className="relative left-[30px]"
                      unoptimized={true}
                    />
                  </div>
                )}
                <div
                  className={`${
                    ishome
                      ? "flex"
                      : "max-md:grid grid-cols-1 max-md:w-full max-md:[@media(min-width:439px)]:grid-cols-2 md:flex md:flex-row-reverse md:mt-[20px]"
                  } max-md:flex-col gap-[24px] mb-6`}
                >
                  {ctaText && (
                    <Democta
                      setShowForm={setShowForm}
                      customStyle={true}
                      ctaText={ctaText}
                    />
                  )}{" "}
                  {secondaryCtaText && (
                    <SecondaryCta
                      customStyle={true}
                      handleDirect={handleDirect}
                      secondaryCtaText={secondaryCtaText}
                      isOrange={isPartnerPage ? true : false}
                      ishome={ishome}
                    />
                  )}
                </div>
              </div>
            </div>
            <div
              className={
                !ishome
                  ? `${
                      isPartnerPage && !isMobile
                        ? "top-1/2 transform -translate-y-1/2 right-0 absolute"
                        : ""
                    }`
                  : ` ${
                      isMobile
                        ? ""
                        : "top-1/2 transform -translate-y-1/2 right-0 absolute"
                    }  flex justify-center`
              }
            >
              <Image
                src={bannerImage}
                alt="service-banner"
                width={600}
                height={442}
                priority
                unoptimized={true}
                className={`2xl:w-[712px] ${
                  isPartnerPage ? "md:relative md:top-[22px]" : ""
                }`}
              />
            </div>
          </div>
          {isPartnerPage && !isMobile && (
            <div
              className={` ${
                ishome ? "flex" : "!max-md:hidden"
              } md:hidden w-full gap-2 items-center`}
              id="firstFold"
            >
              {!ishome && (
                <SecondaryCta
                  customStyle={true}
                  secondaryCtaText={secondaryCtaText}
                  handleDirect={handleDirect}
                  ishome={ishome}
                  isOrange={isPartnerPage ? true : false}
                />
              )}
              <div className="w-[100%] text-[13px]">
                {ctaText && (
                  <Democta
                    customStyle={true}
                    setShowForm={setShowForm}
                    ctaText={ctaText}
                  />
                )}{" "}
              </div>
            </div>
          )}
          {founderTestominial && (
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 max-w-[1350px] mx-auto items-center justify-center">
              {founderTestominial?.map((testimonial, index) => (
                <FounderTestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          )}
        </div>
        {businessTagline && (
          <div
            className={`text-[#FFFFFF] flex flex-col gap-10  md:gap-[40px] items-center justify-center ${
              isPartnerPage && !isMobile ? "pt-[80px]" : ""
            }`}
          >
            <p className="text-[14px] leading-5 text-center md:text-[20px] max-w-[1350px] mx-auto">
              {businessTagline}
            </p>
          </div>
        )}
      </div>
      <Logocarousel />
    </>
  );
};

export default UsecaseFold;
