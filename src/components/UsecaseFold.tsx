import { FirstFoldContent } from "@/interface/type";
import Image from "next/image";
import React, { useState } from "react";
import { parseCms } from "@/lib/cmsHtml";
import Container from "./ui/Container";
import Democta from "./Democta";
import FounderTestimonialCard from "./FounderTestimonials";
import Logocarousel from "./Logocarousel";
import PageTitle from "./PageTitle";
import SecondaryCta from "./SecondaryCta";
import TabComponent from "./TabComponent";
import DemoVideoModal from "./DemoVideoModal";
import YoutubeVideoCard from "./YoutubeVideoCard";

type DemoVideo = {
  id: string;
  title: string;
  subtitle: string;
  videoId: string;
};

interface UsecaseFoldProps extends FirstFoldContent {
  isMobile?: boolean;
  isPartnerPage?: boolean;
  isCustomerPage?: boolean;
  isCompliancePage?: boolean;
  activeTab?: string;
  setActiveTab?: any;
  isFeaturePage?: boolean;
  onTrialRequest?: () => void;
}

/**
 * Hero fold of the CMS pages (Partners, Compliance).
 *
 * Laid out like the product-page hero (`ProductHero`): a `bg-subtle` band,
 * 48px under the header and 80 above the next band, copy column beside a
 * 636px media column, chip 16px over a 64/80 H1, 20px body, 56px CTAs.
 * The old fold pinned the image with absolute positioning and painted the
 * heading with a gradient; both are gone.
 */
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
  founderTestominial = [],
  isCustomerPage,
  isCompliancePage,
  isPartnerPage,
  activeTab,
  setActiveTab,
  languageModalConfig,
  isFeaturePage = false,
  secondaryIcon,
  bannerAlt,
  onTrialRequest,
}) => {
  const [openDemoModal, setOpenDemoModal] = useState(false);

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

  const closeDemoModal = () => setOpenDemoModal(false);

  const tabList = [
    { val: "tds", label: "TDS" },
    { val: "costCenters", label: "Cost Center" },
    { val: "gst", label: "GST" },
  ];

  // The legacy markup highlights by leaving the accent words *unstyled* and
  // painting the rest white — see parseCms.
  const legacyHighlight = /#fff(fff)?\b/i.test(heading);
  const showLogos = !isCustomerPage && !isFeaturePage && !isCompliancePage;

  return (
    <>
      <section className="bg-bg py-10 lg:pb-20 lg:pt-12">
        <Container className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
          {/* ---- Copy ---- */}
          <div className="flex w-full flex-col gap-8 lg:flex-1">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-4">
                {(pageHeading || pageName || ishome) && (
                  <PageTitle
                    pageHeading={pageHeading}
                    logo={logo}
                    pageName={pageName}
                    ishome={ishome}
                    tone="surface"
                  />
                )}
                {heading && (
                  <h1 className="text-heading-md font-normal text-content md:text-heading-lg lg:text-display lg:leading-[80px]">
                    {parseCms(heading, { bareTextAccent: legacyHighlight })}
                  </h1>
                )}
              </div>
              {description && (
                <p className="text-body text-content-muted md:text-body-lg md:leading-6">
                  {description}
                </p>
              )}
            </div>

            {(ctaText || secondaryCtaText) && (
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center">
                {/* Partners leads with the outlined action (Figma 2835:25082);
                    every other page leads with the filled one. Reordered in
                    markup rather than with `flex-row-reverse`, so tab order
                    follows what is on screen. */}
                {(isPartnerPage
                  ? ["secondary", "primary"]
                  : ["primary", "secondary"]
                ).map((slot) =>
                  slot === "primary"
                    ? ctaText && (
                        <Democta
                          key="primary"
                          ctaText={ctaText}
                          onTrialRequest={onTrialRequest}
                        />
                      )
                    : secondaryCtaText && (
                        <SecondaryCta
                          key="secondary"
                          handleDirect={handleDirect}
                          secondaryCtaText={secondaryCtaText}
                          secondaryIcon={secondaryIcon}
                        />
                      )
                )}
              </div>
            )}
          </div>

          {/* ---- Media ---- */}
          {bannerImage && (
            <div className="flex w-full flex-col gap-10 lg:w-[636px] lg:shrink-0">
              <Image
                src={bannerImage}
                alt={bannerAlt || "Effortless platform dashboard"}
                width={636}
                height={454}
                priority
                className="h-auto w-full rounded-xl"
              />
              {ishome && (
                <div className="flex items-end justify-center gap-2">
                  <p className="text-body-lg text-accent">
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
          )}
        </Container>

        {founderTestominial?.length > 0 && (
          <Container className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12">
            {founderTestominial.map((testimonial, index) => (
              <FounderTestimonialCard key={index} {...testimonial} />
            ))}
          </Container>
        )}
      </section>

      {showLogos && (
        // Statement + customer logo marquee, as the home page's TrustStrip.
        <section className="flex flex-col gap-10 bg-bg py-10">
          {businessTagline && (
            <Container>
              <p className="text-center text-body text-content-muted md:text-body-lg">
                {businessTagline}
              </p>
            </Container>
          )}
          <div className="overflow-hidden">
            <Logocarousel />
          </div>
        </section>
      )}

      {isCompliancePage && (
        <div className="bg-bg pt-10">
          <TabComponent
            tabArr={tabList}
            activeTab={activeTab}
            setActiveTab={(val) => setActiveTab(val)}
          />
        </div>
      )}

      <DemoVideoModal
        open={openDemoModal}
        onClose={closeDemoModal}
        config={languageModalConfig}
      />
    </>
  );
};

export default UsecaseFold;
