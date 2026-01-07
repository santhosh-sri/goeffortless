import FirstFold from "@/components/FirstFold";
import useElementVisibility from "@/data/useElementVisibility";
import {
  ComplianceTabSection,
  Content,
  ServiceContent,
} from "@/interface/type";
import React, { useEffect, useState } from "react";
import CareersSection from "./CareersBanner";
import Footer from "./Footer";
import Header from "./NewHeader";
import Metadata from "./Metadata";
import ServiceSection from "./ServiceSection";
import UsecaseFold from "./UsecaseFold";
import BlogWithSidebar from "./BlogWithSidebar";
import HeaderBanner from "./HeaderBanner";

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
      <div>
        <div className={`fixed top-0 w-full z-[999]`}>
          {closeBanner && <HeaderBanner setCloseBanner={setCloseBanner} />}
          <Header {...headerItems} isMobile={isMobile} />
        </div>
        <div
          className={`bg-[#08090A] ${closeBanner ? "md:mt-24" : "md:mt-20"}`}
        >
          {firstFold && <FirstFold {...firstFold} />}
          {careersBanner && <CareersSection {...careersBanner} />}
          {usecaseFold && (
            <UsecaseFold
              {...usecaseFold}
              isMobile={isMobile}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
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
        <div
          className={`${
            (isHomePage ||
              isPricingPlanPage ||
              isPricingPage ||
              isCareersPage ||
              isDownloadPage ||
              isBlogPage ||
              isCompliancePage) &&
            "pt-[60px] md:pt-[120px] bg-black"
          }`}
        >
          <Footer isMobile={isMobile} />
        </div>
        {/* {isFormVisible &&
          isCtaVisible &&
          hideCta &&
          !careersBanner &&
          !showForm && (
            <div
              className={` md:hidden fixed bottom-0 w-full p-4 bg-[#08090A] shadow-md z-[999]`}
            >
              <Democta
                ctaText={firstFold?.ctaText || usecaseFold?.ctaText}
              />
            </div>
          )} */}
      </div>
    </>
  );
};

export default Landing;
