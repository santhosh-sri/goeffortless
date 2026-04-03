import { FirstFoldContent } from "@/interface/type";
import parse from "html-react-parser";
import Image from "next/image";
import React, { useState } from "react";
import Democta from "./Democta";
import FounderTestimonialCard from "./FounderTestimonials";
import Logocarousel from "./Logocarousel";
import PageTitle from "./PageTitle";
import SecondaryCta from "./SecondaryCta";
import TabComponent from "./TabComponent";
import Modal from "./ModalComponent/Modal";
import LanguageModalContent from "./ModalComponent/LanguageModalContent";
import GrowthVideosContent from "./ModalComponent/GrowthVideosContent";
import YoutubeVideoCard from "./YoutubeVideoCard";

type DemoModalStep = "language" | "videos" | "play";
type DemoVideo = {
  id: string;
  title: string;
  subtitle: string;
  videoId: string;
};

type LanguageOption = {
  id: string;
  label: string;
  flag: string;
  value: string;
  videos?: DemoVideo[];
};

interface UsecaseFoldProps extends FirstFoldContent {
  isMobile?: boolean;
  isPartnerPage?: boolean;
  isCustomerPage?: boolean;
  isCompliancePage?: boolean;
  activeTab?: string;
  setActiveTab?: any;
  isFeaturePage?: boolean;
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
  isMobile,
  isPartnerPage,
  isCustomerPage,
  isCompliancePage,
  activeTab,
  setActiveTab,
  languageModalConfig,
  isFeaturePage = false,
  secondaryIcon,
  bannerAlt,
}) => {
  const [openDemoModal, setOpenDemoModal] = useState(false);
  const [demoStep, setDemoStep] = useState<DemoModalStep>("language");
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageOption | null>(null);
  const [activeVideo, setActiveVideo] = useState<DemoVideo | null>(null);

  const handleDirect = () => {
    const cta = secondaryCtaText?.toLowerCase().trim();

    if (!cta) return;

    // 1. Open modal
    if (cta === "see it in action") {
      setOpenDemoModal(true);
      return;
    }

    // 2. Scroll to section
    if (cta.includes("join as a partner")) {
      const section = document.getElementById("PartnerForm");
      section?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // 3. Open external link
    if (secondaryCtaUrl) {
      window.open(secondaryCtaUrl, "_blank");
    }
  };

  const closeDemoModal = () => {
    setOpenDemoModal(false);
    setDemoStep("language");
    setSelectedLanguage(null);
  };

  const tabList = [
    { val: "tds", label: "TDS" },
    { val: "costCenters", label: "Cost Center" },
    { val: "gst", label: "GST" },
  ];
  return (
    <>
      <div
        className={`text-[#FFFFFF] p-4 flex flex-col md:gap-10 items-center justify-center md:pt-[60px] mx-auto max-md:mt-[64px] ${
          isMobile ? "px-[15px] pt-[24px]" : "px-[60px]"
        }`}
      >
        <div
          className={`text-[#FFFFFF] max-md:flex max-md:flex-col gap-10 w-full ${
            isPartnerPage ? "md:gap-[10px]" : "md:gap-[65px]"
          } items-center justify-between relative`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-5 w-full items-center">
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
                  } max-md:text-center text-[32px] md:text-[70px] leading-[35px] bg-clip-text text-transparent`}
                >
                  {parse(heading)}
                </h1>
              )}
              <p
                className={` ${
                  ishome || isFeaturePage
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
              <div
                className={
                  ishome || isFeaturePage
                    ? "flex flex-col gap-[2rem] w-full"
                    : ""
                }
              >
                <div
                  className={`${
                    ishome || isFeaturePage
                      ? "flex"
                      : "max-md:grid grid-cols-1 max-md:w-full max-md:[@media(min-width:439px)]:grid-cols-2 md:flex md:flex-row-reverse md:mt-[20px]"
                  } max-md:flex-col gap-[24px]`}
                >
                  {ctaText && <Democta customStyle={true} ctaText={ctaText} />}{" "}
                  {secondaryCtaText && (
                    <SecondaryCta
                      customStyle={true}
                      handleDirect={handleDirect}
                      secondaryCtaText={secondaryCtaText}
                      isOrange={isPartnerPage || ishome ? true : false}
                      ishome={ishome}
                      isFeaturePage={isFeaturePage}
                      secondaryIcon={secondaryIcon}
                    />
                  )}
                </div>
              </div>
            </div>
            <div
              className={
                !ishome
                  ? `${
                      (isPartnerPage ||
                        isCustomerPage ||
                        isCompliancePage ||
                        isFeaturePage) &&
                      !isMobile
                        ? "top-1/2 transform -translate-y-1/2 right-0 absolute"
                        : ""
                    }`
                  : ` ${
                      isMobile
                        ? ""
                        : "top-1/2 transform -translate-y-1/2 right-0 absolute"
                    }  flex justify-center ${ishome && "flex-col gap-10"}`
              }
            >
              <Image
                src={bannerImage}
                alt={bannerAlt || "Effortless platform dashboard"}
                width={620}
                height={442}
                priority
                className={`2xl:w-[712px] ${
                  isPartnerPage ? "md:relative md:top-[22px]" : ""
                }`}
              />
              {ishome && (
                <div className="flex gap-2 items-end justify-center">
                  <p className="text-xl font-[300] md:leading-8 leading-5 text-center text-[#F08B32]">
                    Work seamlessly with:
                  </p>
                  <Image
                    src={"/tallylogo.png"}
                    alt="tallyprime-logo"
                    width={171}
                    height={40}
                      />
                </div>
              )}
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
                  isOrange={isPartnerPage || ishome ? true : false}
                  secondaryIcon={secondaryIcon}
                  isFeaturePage={isFeaturePage}
                />
              )}
              <div className="w-[100%] text-[13px]">
                {ctaText && <Democta customStyle={true} ctaText={ctaText} />}{" "}
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
              isPartnerPage && !isMobile ? "pt-[24px]" : ""
            }`}
          >
            <p className="text-[14px] text-center md:text-2xl max-w-[1350px] mx-auto">
              {businessTagline}
            </p>
          </div>
        )}
      </div>
      {!isCustomerPage && !isFeaturePage && !isCompliancePage && (
        <Logocarousel />
      )}
      {isCompliancePage && (
        <TabComponent
          tabArr={tabList}
          activeTab={activeTab}
          setActiveTab={(val) => setActiveTab(val)}
        />
      )}
      <Modal open={openDemoModal} onClose={closeDemoModal}>
        {demoStep === "language" && (
          <LanguageModalContent
            data={languageModalConfig}
            onSelect={(language) => {
              setSelectedLanguage(language);
              setDemoStep("videos");
            }}
            onClose={closeDemoModal}
          />
        )}

        {demoStep === "videos" && (
          <GrowthVideosContent
            onBack={() => setDemoStep("language")}
            onPlay={(video) => {
              setActiveVideo(video);
              setDemoStep("play");
            }}
            onClose={closeDemoModal}
            videos={selectedLanguage?.videos || []}
          />
        )}

        {demoStep === "play" && activeVideo && (
          <YoutubeVideoCard
            onBack={() => setDemoStep("videos")}
            title={activeVideo.title}
            videoId={activeVideo.videoId}
            onClose={closeDemoModal}
          />
        )}
      </Modal>
    </>
  );
};

export default UsecaseFold;
