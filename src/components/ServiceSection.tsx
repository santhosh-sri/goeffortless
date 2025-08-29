import { ServiceContent } from "@/interface/type";
import parse from "html-react-parser";
import Link from "next/link";
import React from "react";
import AccordionComponeny from "./AccordionComponeny";
import BusineesCardSection from "./BusineesCardSection";
import CallbackCardSection from "./CallBackCardSection";
import ValueCard from "./CompanyValues";
import ComplianceCardSection from "./ComplianceCard";
import DashboardFeaturesDynamic from "./DashboardFeatures";
import Democta from "./Democta";
import FaqSection from "./FaqSection";
import FeatureBanner from "./FeatureSection";
import FeatureWrapper from "./FeatureWrapper";
import FounderTestimonialCard from "./FounderTestimonials";
import FoundingTeamCard from "./FoundingTeamCard";
import GrowthCards from "./GrowthCards";
import HomePageCarousel from "./HomepageProductCarousel";
import IdeasCardSection from "./IdeasCard";
import JobCard from "./JobCard";
import MissionSection from "./MissionSection";
import NewPricingCard from "./NewPricingCard";
import PageTitle from "./PageTitle";
import PartnerForm from "./PartnerForm";
import PartnerList from "./PartnerList";
import PentCard from "./pentCard";
import PricingFeatures from "./PricingFeatures";
import PricingSection from "./PricingSection";
import ProductDetails from "./ProductCard";
import RedirectCta from "./RedirectCta";
import ServiceListCard from "./ServiceList";
import SliderComponent from "./SliderComponent";
import Testimonials from "./Testimonials";
import Timeline from "./Timeline";
import TopImagecard from "./TopImageCard";
import USeCaseCard from "./USeCaseCard";
import UsecaseFeatures from "./usecaseFeatues";
import Verticalslider from "./VerticlaSlider";
import MentorsCard from "./MentorsCard";
import CertificationGrid from "./CertificationAwards";

interface ServiceSectionProps extends ServiceContent {
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
  isHomePage?: boolean;
  isPricingPage?: boolean;
  isPartnerPage?: boolean;
  isCareersPage?: boolean;
  isPricingPlanPage?: boolean;
  setSelectedPlan?: React.Dispatch<React.SetStateAction<string>>;
  certificate?: any;
}

const ServiceSection = ({
  tagLine,
  isHomePage = false,
  colouredTagLine,
  bgColour,
  showGreyBoderLine,
  showForm,
  title,
  Customtitle,
  href,
  description,
  featureCardsSection,
  topImagecards,
  businessOutcomes,
  callBackCards,
  growthCards,
  dashboardSection,
  useCaseSection,
  timelineSteps,
  servicesList,
  IdeasCard,
  complianceCards,
  useCases,
  pentaCards,
  pricingCards,
  newPricingCards,
  missionCard,
  showGreyTopBorder,
  testimonialsSection,
  sliderSection,
  founderTestominial,
  producttabs,
  GridCols = false,
  pricingFeatures = false,
  verticalSlider,
  homePageVerticalSlider,
  featuresBanner,
  founderTeams,
  mangementTeams,
  mentorsCard,
  investors,
  companyValuesItems,
  growthFeaturesCard,
  partnerList,
  partnerBenifits,
  jobCardDetails,
  colouredTitle,
  faqsSection = [],
  setShowForm = () => {},
  isMobile,
  isCareersPage = false,
  isPricingPage,
  isPricingPlanPage,
  setSelectedPlan,
  certificate,
}: ServiceSectionProps) => {
  return (
    <div className={`${bgColour ? bgColour : "bg-[#08090A]"} md:px-[80px]`}>
      {showGreyTopBorder && (
        <div className="mt-[40px] md:mt-[60px] h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
      )}
      <div
        className={`flex flex-col md:gap-6 gap-4 items-center justify-center ${
          tagLine === "Governance & Recognition" ? "mt-[64px] md:mt-0" : ""
        } py-[32px] max-w-[1350px] mx-auto max-md:px-5 ${
          isPricingPage || isPricingPlanPage
            ? "md:py-[64px]"
            : isCareersPage && !companyValuesItems
            ? "md:pb-[90px]"
            : "md:py-[80px]"
        }`}
        id={href}
      >
        {(colouredTagLine || tagLine) && (
          <PageTitle pageHeading={tagLine} pageName={colouredTagLine} />
        )}
        {Customtitle && (
          <h1
            className={`${
              tagLine === "Governance & Recognition" ? "" : "max-md:pt-[80px]"
            } font-[300] md:font-medium text-[24px] md:text-[72px] md:leading-[90px] leading-[30px] text-center md:tracking-[-3px] bg-clip-text text-transparent`}
            style={{
              background: "linear-gradient(90deg, #F08B32 59.38%, #FFF 96.86%)",
              WebkitBackgroundClip: "text", // For Safari and some Webkit browsers
            }}
          >
            {parse(Customtitle)}
          </h1>
        )}
        {title && (
          <div className="flex gap-2 md:gap-[16px]">
            <h3 className="!font-[300] text-[24px] md:text-[32px] md:leading-[43px] leading-6 text-center text-[#FFFFFF]">
              {parse(title)}
              {colouredTitle && (
                <span
                  className={`${"!font-[500]"} text-[24px] md:text-[32px] md:leading-[43px] leading-[32px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFF]`}
                >
                  {tagLine === "Ideal Partners" && isMobile ? <div></div> : ""}
                  {parse(colouredTitle)}
                </span>
              )}
            </h3>
          </div>
        )}
        {description && (
          <p
            className={` ${
              isHomePage
                ? "md:text-[24px] md:leading-[24px]"
                : Customtitle
                ? "md:text-[24px] text-[14px] md:font-[300] md:leading-[24px] md:mt-[4px]"
                : "md:text-[20px] md:leading-[24px] text-[16px]"
            } text-[#E4E4E7]  leading-[20px] text-center md:mb-[10px] font-[400] md:font-[300] md:pb-[20px]`}
          >
            {description}
          </p>
        )}
        {featureCardsSection && (
          <FeatureWrapper GridCols={GridCols} {...featureCardsSection} />
        )}
        {timelineSteps && (
          <div className="flex flex-col md:grid md:grid-cols-3 items-center justify-center md:justify-between">
            {timelineSteps.map((step, idx) => (
              <Timeline key={idx} {...step} />
            ))}
          </div>
        )}
        {producttabs && (
          <div className="flex max-md:flex-col gap-6 max-md:items-center justify-center">
            <ProductDetails producttabs={producttabs} />
            {servicesList && (
              <div className="grid grid-cols-3  md:grid-cols-4 gap-5 items-center justify-center bg-[#121316] p-4 rounded-xl border border-gray-700">
                {servicesList?.map((card, index) => (
                  <ServiceListCard key={index} {...card} />
                ))}
              </div>
            )}
          </div>
        )}{" "}
        {growthCards && (
          <div className="flex flex-col gap-8 md:gap-[48px] items-center justify-center">
            <div className="flex max-md:flex-col md:grid md:grid-cols-2 max-md:gap-8 gap-4 items-center justify-center bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] md:px-[60px] p-5 md:pt-8 md:py-[40px] rounded-lg shadow-[0px_2px_7px_0px_#1019280D]">
              {growthCards?.map((card, index) => (
                <GrowthCards
                  key={index}
                  {...card}
                  isMobile={isMobile}
                  index={index}
                />
              ))}{" "}
            </div>
            <BusineesCardSection
              setShowForm={setShowForm}
              isMobile={isMobile}
            />
          </div>
        )}
        {callBackCards && (
          <div className="md:grid md:grid-cols-3 gap-4 flex flex-col items-center justify-center mt-[-10px]">
            {callBackCards?.map((card, index) => (
              <CallbackCardSection
                key={index}
                {...card}
                setShowForm={setShowForm}
              />
            ))}
          </div>
        )}
        {homePageVerticalSlider && (
          <div
            className={`flex flex-col gap-[40px] items-center ${
              isMobile ? "w-full" : "pt-[1.5rem] pb-[1rem]"
            }`}
          >
            {isMobile ? (
              <AccordionComponeny
                {...homePageVerticalSlider}
                isMobile={isMobile}
              />
            ) : (
              <HomePageCarousel {...homePageVerticalSlider} />
            )}{" "}
            <RedirectCta
              setShowForm={setShowForm}
              ctaText={"Explore Effortless Now"}
            />
          </div>
        )}
        {verticalSlider && <Verticalslider section={verticalSlider} />}
        {featuresBanner && (
          <div>
            {featuresBanner?.map((item, index) => (
              <div key={item?.title ?? index}>
                <FeatureBanner {...item} />
              </div>
            ))}
          </div>
        )}
        {dashboardSection && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {dashboardSection.map((card, index) => (
              <div
                key={index}
                className={`w-full ${
                  (index === 2 || index === 5) && !card?.noCols
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <DashboardFeaturesDynamic {...card} />
              </div>
            ))}
          </div>
        )}
        {useCaseSection && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {useCaseSection.map((card, index) => (
              <div
                key={index}
                className={`w-full ${
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
              >
                <UsecaseFeatures {...card} />
              </div>
            ))}
          </div>
        )}
        {businessOutcomes && (
          <div className="md:grid md:grid-cols-4 gap-5 flex flex-col items-center justify-center">
            {businessOutcomes?.map((card, index) => (
              <TopImagecard key={index} {...card} />
            ))}
          </div>
        )}
        {topImagecards && (
          <div className="md:grid md:grid-cols-3 gap-5 flex flex-col items-center justify-center">
            {topImagecards?.map((card, index) => (
              <TopImagecard key={index} {...card} />
            ))}
          </div>
        )}
        {complianceCards && (
          <div className="md:grid md:grid-cols-4 md:!gap-4 flex flex-col gap-4 items-center justify-center">
            {complianceCards?.map((card, index) => (
              <ComplianceCardSection key={index} {...card} />
            ))}
          </div>
        )}
        {IdeasCard && (
          <div className="md:grid md:grid-cols-2 flex flex-col gap-8 items-center justify-center">
            {IdeasCard?.map((card, index) => (
              <IdeasCardSection key={index} {...card} />
            ))}
          </div>
        )}
        {founderTestominial && (
          <div className="flex flex-col gap-10 max-w-[1350px] mx-auto w-full items-start">
            {founderTestominial?.map((testimonial, index) => (
              <FounderTestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        )}
        {founderTeams && (
          <div className="flex flex-col md:gap-10 gap-6 max-w-[1350px] mx-auto w-full md:pt-[40px]">
            <p className="font-[500] text-[32px] leading-[24px] text-[#FFFFFF] text-left">
              Leadership Team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 !gap-6 w-full items-start">
              {founderTeams?.map((team, index) => (
                <FoundingTeamCard key={index} {...team} />
              ))}
            </div>
          </div>
        )}
        {mangementTeams && (
          <div className="flex flex-col md:gap-10 gap-6 max-w-[1350px] mx-auto w-full items-start">
            <p className="font-[500] text-[32px] leading-[24px] text-[#FFFFFF] text-left">
              Management Team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 !gap-6 w-full">
              {mangementTeams?.map((team, index) => (
                <FoundingTeamCard key={index} {...team} />
              ))}
            </div>
          </div>
        )}
        {mentorsCard && (
          <>
            <p className="font-[500] text-[32px] leading-[32px] text-[#FFFFFF] self-start">
              Well-Wishers & Advisors{" "}
            </p>
            <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 !gap-6 w-full">
                {mentorsCard?.map((team, index) => (
                  <MentorsCard key={index} {...team} />
                ))}
              </div>
            </div>
          </>
        )}
        {investors && (
          <div className="flex flex-col md:gap-10 gap-6 max-w-[1350px] mx-auto w-full md:pb-[40px]">
            <p className="font-[500] text-[32px] leading-[24px] text-[#FFFFFF] text-left">
              Angel Investors
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 !gap-6 w-full">
              {investors?.map((team, index) => (
                <FoundingTeamCard key={index} {...team} />
              ))}
            </div>
          </div>
        )}
        {growthFeaturesCard && (
          <div className="flex flex-col md:gap-[20px] items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full items-start md:mb-[20px]">
              {growthFeaturesCard.slice(0, 3).map((team, index) => (
                <ValueCard
                  key={index}
                  {...team}
                  isMobile={isMobile}
                  growthFeatures
                  // Add right border to the last item (index 2) in the 3-column grid
                  className={index === 2 ? "gradient-border-right-special" : ""}
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:gap-6 md:w-[70%] items-start">
              {growthFeaturesCard.slice(3, 5).map((team, index) => (
                <ValueCard
                  key={index + 3}
                  {...team}
                  isMobile={isMobile}
                  hideLastBorder={true}
                  growthFeatures
                  // Add right border to the last item (index 1) in the 2-column flex
                  className={index === 1 ? "gradient-border-right-special" : ""}
                />
              ))}
            </div>
            {
              <div className="md:pt-[40px] max-md:w-full">
                <RedirectCta
                  setShowForm={setShowForm}
                  ctaText={
                    isMobile
                      ? "Discover How"
                      : "Effortless keeps your business running—without the mess. Discover How."
                  }
                />
              </div>
            }
          </div>
        )}
        {companyValuesItems && (
          <div className="md:flex md:flex-col md:gap-[42px] items-center">
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 w-full items-start">
              {companyValuesItems.slice(0, 4).map((team, index) => (
                <ValueCard
                  key={index}
                  {...team}
                  customLength={true}
                  hidetopBorder={true}
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:gap-6 md:w-[100%] items-start ">
              {companyValuesItems.slice(4, 7).map((team, index) => (
                <ValueCard key={index + 3} {...team} customLength={true} />
              ))}
            </div>
          </div>
        )}
        {partnerList && (
          <div className="flex flex-col md:gap-[60px] gap-5 items-center">
            <div className="grid grid-cols-1 md:grid-cols-4 w-full items-start max-md:gradient-border-top">
              {partnerList?.map((team, index) => (
                <PartnerList key={index} {...team} index={index} />
              ))}
            </div>
            <div className="w-fit">
              <Democta ctaText={"Partner With Us"} extraWidth />
            </div>
          </div>
        )}
        {partnerBenifits && (
          <div className="flex flex-col md:gap-[60px] gap-5 items-center md:mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 w-full items-start">
              {partnerBenifits?.slice(0, 3).map((team, index) => (
                <PartnerList key={index} {...team} index={index} />
              ))}
              {partnerBenifits?.slice(3).map((team, index) => (
                <PartnerList
                  key={index}
                  {...team}
                  index={index}
                  topBottomBorder={true}
                />
              ))}
            </div>
            <div className="w-fit">
              <Democta ctaText={"Partner With Us"} extraWidth />
            </div>
          </div>
        )}
        {jobCardDetails && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
            {jobCardDetails?.map((team, index) => (
              <JobCard key={index} {...team} isMobile={isMobile} />
            ))}
          </div>
        )}
        {missionCard && <MissionSection {...missionCard} />}
        {testimonialsSection && (
          <div className="">
            <Testimonials {...testimonialsSection} bgColour={bgColour} />
          </div>
        )}
        {sliderSection && (
          <div>
            <SliderComponent {...sliderSection} />
          </div>
        )}
        {newPricingCards && (
          <div className="max-md:hidden flex flex-col md:gap-[4.5rem] gap-8 md:items-center md:justify-center mt-[-20px]">
            <NewPricingCard
              {...newPricingCards}
              setShowForm={setShowForm}
              setSelectedPlan={setSelectedPlan}
            />
          </div>
        )}
        {pentaCards && (
          <div className="flex flex-wrap gap-6 md:gap-9 w-full justify-center">
            {pentaCards?.map((cardContents, index) => (
              <PentCard key={index} {...cardContents} />
            ))}
          </div>
        )}
        {showForm && (
          <div id="PartnerForm" className="w-full max-w-[777px] md:mt-4">
            <PartnerForm />
          </div>
        )}{" "}
        {useCases && (
          <div className="flex max-md:flex-col gap-6 items-center justify-center">
            {useCases?.map((cardContents, index) => (
              <USeCaseCard key={index} {...cardContents} />
            ))}
          </div>
        )}
      </div>
      {pricingCards && (
        <div
          className={` ${isHomePage == true ? "md:hidden" : "md:block"} 
          ${isPricingPlanPage ? "" : "max-md:px-5 "} ${
            isPricingPage ? "md:pb-[64px]" : "md:pb-[80px] "
          } flex flex-col md:gap-[4.5rem] gap-8 !w-full max-md:pb-[32px] md:max-w-[1360px] md:mx-auto`}
        >
          {pricingFeatures && (isPricingPlanPage || !isMobile) && (
            <PricingFeatures
              setShowForm={setShowForm}
              setSelectedPlan={setSelectedPlan}
            />
          )}{" "}
          {pricingCards && !isPricingPlanPage && (
            <div
              className="flex max-md:flex-col max-xl:overflow-hidden w-full gap-6 md:hidden"
              id="pricing"
            >
              {pricingCards?.map((cardContents, index) => (
                <PricingSection
                  key={index}
                  {...cardContents}
                  setShowForm={setShowForm}
                  setSelectedPlan={setSelectedPlan}
                />
              ))}
            </div>
          )}
          {pricingFeatures && !isHomePage && isMobile && isPricingPage && (
            <div className={`w-full`}>
              <Link href="/pricing-plan">
                <button className="border-[1px] border-[#F08B32] text-[#F08B32] px-4 py-2 rounded-[4px] w-full md:text-[16px] text-[14px] font-[500]">
                  Compare all Plans in Detail
                </button>
              </Link>
            </div>
          )}{" "}
          {/* {pricingFeatures && !isHomePage && isMobile && (
              <div className={`${!isHomePage ? "max-md:w-[50%]" : ""}`}>
                <Democta
                  ctaText={!isHomePage ? "Contact Us" : "View Full Details"}
                  setShowForm={setShowForm}
                />
              </div>
            )}{" "} */}
        </div>
      )}
      {faqsSection?.length > 0 && (
        <div className="md:pb-[100px] pb-[60px]">
          {faqsSection?.map((items, index) => (
            <FaqSection key={index} {...items} />
          ))}
        </div>
      )}
      {certificate && (
        <div className="md:pb-[100px] pb-[60px]">
          <CertificationGrid certificate={certificate} />
        </div>
      )}

      {showGreyBoderLine && (
        <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
      )}
    </div>
  );
};

export default ServiceSection;
