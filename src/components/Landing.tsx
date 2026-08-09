import FirstFold from "@/components/FirstFold";
import useElementVisibility from "@/data/useElementVisibility";
import {
  ComplianceTabSection,
  Content,
  ServiceContent,
} from "@/interface/type";
import React, { useEffect, useState } from "react";
import CareersSection from "./CareersBanner";
import SiteFooter from "./layout/SiteFooter";
import SiteHeader from "./layout/SiteHeader";
import Metadata from "./Metadata";
import ServiceSection from "./ServiceSection";
import UsecaseFold from "./UsecaseFold";
import BlogWithSidebar from "./BlogWithSidebar";
import HeaderBanner from "./HeaderBanner";
// import TrialForm from "./TrialForm";

//Landing component
const Landing: React.FC<Content> = ({
  headerItems,
  firstFold,
  careersBanner,
  serviceContent,
  usecaseFold,
  isHomePage = false,
  productsSection = {},
  footerData,
  isPricingPage,
  isPricingPlanPage,
  isCareersPage,
  isBlogPage,
  metadata, // Add metadata prop
  isDownloadPage,
  isCompliancePage,
  tds,
  gst,
  costCenters,
  isFeaturePage,
}) => {
  const isFormVisible = useElementVisibility("firstFold", {
    top: 80,
    bottom: 100,
  });
  const isCtaVisible = useElementVisibility("footer", {
    top: 80,
    bottom: 100,
  });
  const hideCta = useElementVisibility("pricing", {
    top: 50,
    bottom: 120,
  });
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleShowForm = () => setShowForm(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeTab, setActiveTab] = React.useState<any>("tds");
  const [closeBanner, setCloseBanner] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // You can set your mobile breakpoint here
  };

  useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  const tabDataMap: Record<any, ComplianceTabSection | undefined> = {
    tds,
    gst,
    costCenters,
  };
  const activeServiceContent = isCompliancePage
    ? tabDataMap[activeTab]?.serviceContent
    : serviceContent;

  return (
    <>
      {/* Render Metadata component */}
      <Metadata {...metadata} />
      {/*
        These pages are still CMS-driven and predate the redesign, but they no
        longer pin data-theme="dark": their colours come from the token layer
        now, so they follow the light/dark toggle like the rebuilt pages. The
        chrome is the redesigned SiteHeader/SiteFooter, which is sticky rather
        than fixed, so the old top-offset spacers are gone with it.
      */}
      <div className="min-h-screen bg-bg text-content" data-cms-content>
        <SiteHeader />
        <div>
          {firstFold && <FirstFold {...firstFold} />}
          {careersBanner && <CareersSection {...careersBanner} />}
          {usecaseFold && (
            <UsecaseFold
              {...usecaseFold}
              isMobile={isMobile}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              // onTrialRequest={handleShowForm}
            />
          )}
          {isBlogPage && <BlogWithSidebar />}
          {/* <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div> */}
          {activeServiceContent &&
            activeServiceContent?.map((contentItem, index) => (
              <ServiceSection
                key={index}
                {...contentItem}
                setSelectedPlan={setSelectedPlan}
                isMobile={isMobile}
                isHomePage={isHomePage}
                isPartnerPage={usecaseFold?.isPartnerPage}
                isPricingPage={isPricingPage}
                isPricingPlanPage={isPricingPlanPage}
                isCareersPage={isCareersPage}
                isDownloadPage={isDownloadPage}
                isCompliancePage={isCompliancePage}
              />
            ))}
        </div>
        <SiteFooter />
        {/* {isFormVisible &&
          isCtaVisible &&
          hideCta &&
          !careersBanner &&
          !showForm && (
            <div
              className={` md:hidden fixed bottom-0 w-full p-4 bg-bg shadow-md z-[999]`}
            >
              <Democta
                ctaText={firstFold?.ctaText || usecaseFold?.ctaText}
              />
            </div>
          )} */}
      </div>
      {/* {showForm && <TrialForm setShowForm={setShowForm} />} */}
    </>
  );
};

export default Landing;
