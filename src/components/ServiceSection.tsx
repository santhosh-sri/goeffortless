import { ServiceContent } from "@/interface/type";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { parseCms } from "@/lib/cmsHtml";
import Section from "./ui/Section";
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
import { PricingCardsGroup } from "./PricingSection";
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
import CaseStudiesSection from "./CaseStudySection";
import FaqComponent from "./FaqComponent";
import OfficeLocations from "./OfficeLocations";
import DownloadApps from "./DownloadApps";
import BlogCard from "./BlogCard";
import BlogWithSidebar from "./BlogWithSidebar";
import TrackSection from "./Compliance/TrackSection";
import FaqCompliance from "./Compliance/FaqCompliance";
import KeyFactor from "./Compliance/KeyFactor";
import TdsApply from "./Compliance/TdsApply";
import TdsAutomation from "./Compliance/TdsAutomation";
import SupportComponent from "./Compliance/SupportComponent";
import TdsMatrix from "./Compliance/TdsMatrix";
import CommandCenterCard from "./Homepage/CommandCenterCard";
import ComparisonSection from "./FeaturesComponent/ComparisonSection";
import FeatureSection from "./FeaturesComponent/FeatureSection";
import YoutubeVideoCard from "./YoutubeVideoCard";
import FeatureHighlights from "./FeaturesComponent/FeatureHighlights";
import ComplianceAuditPanel from "./FeaturesComponent/ComplianceAuditPanel";
import BillingModesComparison from "./FeaturesComponent/BillingModesComparison";
import ButtonComponent from "./FeaturesComponent/ButtonComponent";
import ERPComparisonCards from "./FeaturesComponent/ERPComparisonCards";
import ROICalculator from "./FeaturesComponent/ROICalculator";
import ReadinessCards from "./FeaturesComponent/ReadinessCards";
import MetricCards from "./FeaturesComponent/MetricCards";

interface ServiceSectionProps extends ServiceContent {
  isMobile?: boolean;
  isHomePage?: boolean;
  isPricingPage?: boolean;
  isPartnerPage?: boolean;
  isCareersPage?: boolean;
  isPricingPlanPage?: boolean;
  setSelectedPlan?: React.Dispatch<React.SetStateAction<string>>;
  isDownloadPage?: boolean;
  isCompliancePage?: boolean;
  /** Render this section's title as the page <h1> (CMS pages have no hero). */
  isPageHeading?: boolean;
  isLastSection?: boolean;
  complianceAuditData?: any;
  billingModesData?: any;
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
  pricingCardsHalf,
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
  isMobile,
  isCareersPage = false,
  isPricingPage,
  isPricingPlanPage,
  setSelectedPlan,
  certificate,
  caseStudies = [],
  faqs,
  marginTop,
  officelocation,
  downloadApps = [],
  isDownloadPage = false,
  blogs = [],
  trackData = [],
  tdsFAQ = [],
  keyFactor = [],
  tdsApply = [],
  tdsAutomation = [],
  keyvalues = [],
  tdsMatrix = {},
  tableData = {},
  isLastSection = false,
  commandCenterCards = [],
  comparisonData,
  salesFeature = [],
  videoId,
  FeatureItem = [],
  complianceAuditData,
  billingModesData,
  erpComparisonData = [],
  roiCalculatorData,
  readinessCardsData = [],
  metricCardData = [],
  demoCtaButton,
  demoSecButton,
  isPageHeading = false,
}: ServiceSectionProps) => {
  const PageHeadingTag = isPageHeading ? "h1" : "h2";
  // `title` is the page heading only when no Customtitle already took it.
  const SecondaryHeadingTag = isPageHeading && !Customtitle ? "h1" : "h2";

  return (
    <>
      {/*
        The CMS alternates bands with `bgColour` (the dark site's #15181B);
        on the light theme that is the grey `subtle` band, and its absence the
        white page — the same white/grey rhythm the product pages follow. The
        gradient hairlines that used to top and tail the dark bands are gone.
      */}
      <Section
        tone={bgColour ? "subtle" : "default"}
        spacing="lg"
        id={href}
        containerClassName="flex flex-col gap-10 lg:gap-12"
      >
        {caseStudies?.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:gap-12">
            {(colouredTagLine || tagLine || Customtitle || title || description) && (
              // Same anatomy as SectionHeading: chip 16 over the title, the
              // description 24 below that pair. Built inline because the CMS
              // titles carry markup that parseCms has to rewrite.
              <div className="flex w-full flex-col items-center gap-6 text-center">
                <div className="flex w-full flex-col items-center gap-4">
                  {(colouredTagLine || tagLine) && (
                    <PageTitle
                      pageHeading={tagLine}
                      pageName={colouredTagLine}
                      tone={bgColour ? "surface" : "subtle"}
                    />
                  )}
                  {Customtitle && (
                    // The CMS pages have no hero fold, so the first section's
                    // title is the page heading and must be an h1, not an h2.
                    <PageHeadingTag className="text-heading-md font-normal text-content md:text-heading-lg lg:text-display">
                      {parseCms(Customtitle)}
                    </PageHeadingTag>
                  )}
                  {title && (
                    <SecondaryHeadingTag className="text-heading-sm font-light text-content md:text-heading-md">
                      {parseCms(title)}
                      {colouredTitle && (
                        <>
                          {" "}
                          <span className="font-bold text-accent">
                            {parseCms(colouredTitle)}
                          </span>
                        </>
                      )}
                    </SecondaryHeadingTag>
                  )}
                </div>
                {description && (
                  <p className="max-w-[1036px] text-body text-content-muted md:text-body-lg">
                    {description}
                  </p>
                )}
              </div>
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
                  <div className="grid grid-cols-3  md:grid-cols-4 gap-5 items-center justify-center bg-surface p-4 rounded-xl border border-gray-700">
                    {servicesList?.map((card, index) => (
                      <ServiceListCard key={index} {...card} />
                    ))}
                  </div>
                )}
              </div>
            )}{" "}
            {growthCards && (
              <div className="flex flex-col gap-8 md:gap-[48px] items-center justify-center">
                <div className="flex max-md:flex-col md:grid md:grid-cols-2 max-md:gap-8 gap-4 items-center justify-center bg-[linear-gradient(111.18deg,rgb(var(--color-text)/0.06)_-28.62%,rgb(var(--color-text)/0)_104.36%)] md:px-[60px] p-5 md:pt-8 md:py-[40px] rounded-lg shadow-[0px_2px_7px_0px_#1019280D]">
                  {growthCards?.map((card, index) => (
                    <GrowthCards
                      key={index}
                      {...card}
                      isMobile={isMobile}
                      index={index}
                    />
                  ))}{" "}
                </div>
                <BusineesCardSection isMobile={isMobile} />
              </div>
            )}
            {callBackCards && (
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col items-center justify-center">
                {callBackCards?.map((card, index) => (
                  <CallbackCardSection key={index} {...card} />
                ))}
              </div>
            )}
            {homePageVerticalSlider && (
              <div
                className={`flex flex-col gap-[40px] items-center ${
                  isMobile ? "w-full" : ""
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
                <RedirectCta ctaText={"Explore Effortless Now"} />
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
            {commandCenterCards?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
                {commandCenterCards.map((card, index) => (
                  <CommandCenterCard key={index} {...card} />
                ))}
              </div>
            )}
            {comparisonData && <ComparisonSection data={comparisonData} />}
            {complianceAuditData && (
              <ComplianceAuditPanel data={complianceAuditData} />
            )}
            {billingModesData?.length > 0 && (
              <BillingModesComparison modes={billingModesData} />
            )}
            {salesFeature?.length > 0 && (
              <div className="flex flex-col gap-12">
                {salesFeature.map((feature, index) => (
                  <FeatureSection
                    key={index}
                    feature={feature}
                    position={index}
                  />
                ))}
              </div>
            )}
            {FeatureItem?.length > 0 && (
              <div className="flex max-md:flex-col max-md:gap-[40px] items-center justify-center gap-[180px]">
                {FeatureItem.map((highlight, index) => (
                  <FeatureHighlights key={index} {...highlight} />
                ))}
              </div>
            )}
            {videoId && <YoutubeVideoCard videoId={videoId} type="page" />}
            {(demoCtaButton || demoSecButton) && (
              <ButtonComponent
                demoCtaButton={demoCtaButton}
                demoSecButton={demoSecButton}
              />
            )}
            {erpComparisonData?.length > 0 && (
              <ERPComparisonCards cards={erpComparisonData} />
            )}
            {roiCalculatorData && (
              <div className="w-full">
                <ROICalculator data={roiCalculatorData} />
              </div>
            )}
            {readinessCardsData?.length > 0 && (
              <ReadinessCards cards={readinessCardsData} />
            )}
            {metricCardData?.length > 0 && (
              <MetricCards cards={metricCardData} />
            )}
            {complianceCards && (
              <>
                <div className="md:grid md:grid-cols-4 md:!gap-4 flex flex-col gap-4 items-center justify-center">
                  {complianceCards?.map((card, index) => (
                    <ComplianceCardSection key={index} {...card} />
                  ))}
                </div>
                {tagLine === "Built for India" && (
                  <div className="md:pt-[40px] max-md:w-full">
                    <RedirectCta
                      ctaText={
                        isMobile
                          ? "Discover How"
                          : "Effortless keeps your business running—without the mess. Discover How."
                      }
                    />
                  </div>
                )}
              </>
            )}
            {IdeasCard && (
              <div className="md:grid md:grid-cols-2 flex flex-col gap-8 items-center justify-center">
                {IdeasCard?.map((card, index) => (
                  <IdeasCardSection key={index} {...card} />
                ))}
              </div>
            )}
            {founderTestominial && (
              <div className="flex w-full flex-col items-start gap-10">
                {founderTestominial?.map((testimonial, index) => (
                  <FounderTestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            )}
            {founderTeams && (
              <div className="flex w-full flex-col gap-6 md:gap-10">
                <p className="text-heading-md font-medium text-content">
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
              <div className="flex w-full flex-col items-start gap-6 md:gap-10">
                <p className="text-heading-md font-medium text-content">
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
                <p className="self-start text-heading-md font-medium text-content">
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
              <div className="flex w-full flex-col gap-6 md:gap-10">
                <p className="text-heading-md font-medium text-content">
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
                    />
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full items-start ">
                  {growthFeaturesCard.slice(3, 6).map((team, index) => (
                    <ValueCard
                      key={index + 3}
                      {...team}
                      isMobile={isMobile}
                      hideLastBorder={true}
                      growthFeatures
                    />
                  ))}
                </div>
                {
                  <div className="md:pt-[40px] max-md:w-full">
                    <RedirectCta
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
              <div className="flex w-full flex-col items-center md:gap-6">
                <div className="grid w-full grid-cols-1 items-start md:grid-cols-4 md:gap-6">
                  {companyValuesItems.slice(0, 4).map((team, index) => (
                    <ValueCard
                      key={index}
                      {...team}
                      customLength={true}
                      // hideLastBorder={true}
                    />
                  ))}
                </div>
                <div className="grid w-full grid-cols-1 items-start md:grid-cols-3 md:gap-6">
                  {companyValuesItems.slice(4, 7).map((team, index) => (
                    <ValueCard key={index} {...team} customLength={true} />
                  ))}
                </div>
              </div>
            )}
            {partnerList && (
              <div className="flex w-full flex-col items-center gap-8 lg:gap-12">
                <div className="grid w-full grid-cols-1 items-start md:grid-cols-4">
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
              <div className="flex w-full flex-col items-center gap-8 lg:gap-12">
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
              <div className="max-md:hidden flex flex-col md:gap-[4.5rem] gap-8 md:items-center md:justify-center">
                <NewPricingCard
                  {...newPricingCards}
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
              <div id="PartnerForm" className="w-full scroll-mt-28">
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
            {trackData?.length > 0 && (
              <div>
                <TrackSection trackData={trackData} />
              </div>
            )}
            {keyFactor?.length > 0 && (
              <div className="w-full">
                <KeyFactor keyFactor={keyFactor} />
              </div>
            )}
            {tdsApply?.length > 0 && (
              <div className="w-full">
                <TdsApply tdsApply={tdsApply} />
              </div>
            )}
            {tableData && Object.keys(tableData)?.length > 0 && (
              <div className="w-full">
                <TdsMatrix tableData={tableData} tdsMatrix={tdsMatrix} />
              </div>
            )}
            {tdsAutomation?.length > 0 && (
              <div className="w-full">
                <TdsAutomation tdsAutomation={tdsAutomation} />
              </div>
            )}
            {tdsFAQ?.length > 0 && (
              <div className="w-full">
                <FaqCompliance faqs={tdsFAQ} />
              </div>
            )}
            {keyvalues?.length > 0 && (
              <div>
                <SupportComponent keyvalues={keyvalues} />
              </div>
            )}
          </div>
        )}
        {pricingCards && (
          <div
            className={` ${isHomePage == true ? "md:hidden" : "md:block"} flex flex-col md:gap-[4.5rem] gap-8 w-full`}
          >
            {pricingFeatures && (isPricingPlanPage || !isMobile) && (
              <PricingFeatures setSelectedPlan={setSelectedPlan} />
            )}{" "}
            {pricingCards && pricingCardsHalf && !isPricingPlanPage && (
              <PricingCardsGroup
                pricingCards={pricingCards}
                pricingCardsHalf={pricingCardsHalf}
                setSelectedPlan={setSelectedPlan}
              />
            )}
          </div>
        )}
        {faqsSection?.length > 0 && (
          <div>
            {faqsSection?.map((items, index) => (
              <FaqSection key={index} {...items} />
            ))}
          </div>
        )}
        {certificate && <CertificationGrid certificate={certificate} />}
        {caseStudies?.length > 0 && (
          <div className="scroll-mt-20">
            <CaseStudiesSection caseStudies={caseStudies} />
          </div>
        )}
        {faqs && <FaqComponent faqs={faqs} />}
        {officelocation && <OfficeLocations locations={officelocation} />}
        {blogs?.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {blogs?.map((items, index) => (
              <BlogCard key={index} {...items} />
            ))}
          </div>
        )}
      </Section>

      {downloadApps?.length > 0 &&
        downloadApps.map((items, index) => (
          // Each app block is its own band, alternating from grey so the
          // white heading section above is followed by grey → white.
          <DownloadApps
            key={index}
            {...items}
            tone={index % 2 === 0 ? "subtle" : "default"}
          />
        ))}

    </>
  );
};

export default ServiceSection;
