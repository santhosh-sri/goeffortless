import FirstFold from "@/components/FirstFold";
import useElementVisibility from "@/data/useElementVisibility";
import { Content } from "@/interface/type";
import React, { useEffect, useState } from "react";
import CareersSection from "./CareersBanner";
import RequestDemoForm from "./DemoForm";
import Footer from "./Footer";
import Header from "./Header";
import Metadata from "./Metadata";
import ServiceSection from "./ServiceSection";
import UsecaseFold from "./UsecaseFold";

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
  metadata, // Add metadata prop
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

  return (
    <>
      {/* Render Metadata component */}
      <Metadata {...metadata} />

      <div>
        <div className={`max-md:fixed max-md:top-0 w-full max-md:z-[999]`}>
          <Header
            {...headerItems}
            setShowForm={setShowForm}
            isMobile={isMobile}
          />
        </div>
        <div className="bg-[#08090A]">
          {firstFold && <FirstFold {...firstFold} />}
          {careersBanner && <CareersSection {...careersBanner} />}
          {usecaseFold && (
            <UsecaseFold
              {...usecaseFold}
              setShowForm={setShowForm}
              isMobile={isMobile}
            />
          )}
          {/* <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div> */}
          {serviceContent &&
            serviceContent?.map((contentItem, index) => (
              <ServiceSection
                key={index}
                {...contentItem}
                setShowForm={setShowForm}
                setSelectedPlan={setSelectedPlan}
                isMobile={isMobile}
                isHomePage={isHomePage}
                isPartnerPage={usecaseFold?.isPartnerPage}
                isPricingPage={isPricingPage}
                isPricingPlanPage={isPricingPlanPage}
                isCareersPage={isCareersPage}
              />
            ))}
          {showForm && (
            <RequestDemoForm
              setShowForm={setShowForm}
              selectedPlan={selectedPlan}
            />
          )}
        </div>
        <div
          className={`${
            (isHomePage || isPricingPlanPage || isPricingPage||isCareersPage) &&
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
                setShowForm={setShowForm}
              />
            </div>
          )} */}
      </div>
    </>
  );
};

export default Landing;
