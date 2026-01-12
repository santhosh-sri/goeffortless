"use client";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { usePathname, useRouter } from "next/navigation";
import { CalcomConfig } from "@/utils/calConfig";
import HeaderBanner from "./HeaderBanner";

const Header = ({
  isMobile,
  closeBanner,
  setCloseBanner,
}: {
  isMobile: boolean;
  closeBanner: boolean;
  setCloseBanner: any;
}) => {
  const [expandedSections, setExpandedSections] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<{
    section: number;
    link: number;
  } | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const resourcePath =
    pathname === "/pricing" ||
    pathname === "/case-studies" ||
    pathname === "/" ||
    pathname === "/partners" ||
    pathname === "/sales" ||
    pathname === "/expenses" ||
    pathname === "/contracts" ||
    pathname === "/allFeatures" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-of-service" ||
    pathname === "/security-practices";

  const productPath =
    pathname === "/pricing" ||
    pathname === "/case-studies" ||
    pathname === "/" ||
    pathname === "/partners" ||
    pathname === "/blogs" ||
    pathname === "/compliance" ||
    pathname === "/faqs" ||
    pathname === "/download-apps" ||
    pathname === "/certifications-awards" ||
    pathname === "/calculator.svg" ||
    pathname === "/about-us" ||
    pathname === "/migratingFeature" ||
    pathname === "/contact-us" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-of-service" ||
    pathname === "/security-practices";

  const handleMenuClick = async (e: React.MouseEvent, href: string) => {
    // if (href.includes("#")) {
    e.preventDefault();
    const [fullPath, hash] = href.split("#");
    const path = fullPath;

    if (pathname + window.location.search === path) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setExpandedSections(false);
    } else {
      await router.push(href);
      setOpenMenu(null);
      setExpandedSections(false);
      setHoveredIndex(null);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
    // }
  };

  const headerProducts = [
    {
      title: "Workflows",
      links: [
        {
          label: "Sales & Collections",
          spl: " The “Revenue Engine”",
          desc: "GPS Check-ins, Orders, Schemes, & Auto-Tally Sync",
          link: "/sales",
          icon: "/salesMenu.svg",
          activeIcon: "/salesMenu.svg",
          soon: false,
        },
        {
          label: "Expenses & Claims",
          spl: " The “Profit Guardian”",
          desc: "Vendor Bills, Employee Claims, Approvals & Policy Limits.",
          link: "/expenses",
          icon: "/expenseMenu.svg",
          activeIcon: "/expenseMenu.svg",
          soon: false,
        },
        {
          label: "Contracts & Billing",
          spl: " The “Recurring Revenue”",
          desc: "Recurring Invoices, Proformas, & Auto-Renewals.",
          link: "/contracts",
          icon: "/contractMenu.svg",
          activeIcon: "/contractMenu.svg",
          soon: false,
        },
        {
          label: "All Product Features",
          desc: "Complete feature list across all modules.",
          link: "/allFeatures",
          icon: "/allmenu.svg",
          activeIcon: "/allmenu.svg",
        },
      ],
    },
  ];

  const headerResources = [
    {
      title: "Learn",
      links: [
        {
          label: "Blog",
          link: "/blogs",
          icon: "/book-open.svg",
          activeIcon: "/book-open-active.svg",
          desc: "Strategies for growth & control",
        },
        {
          label: "Webinars",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScY9QisYn1E8Sj1vxXwvkQv6qZltjCqWzdg_DLiwtpZbak3ww/viewform",
          icon: "/webinarMenu.svg",
          activeIcon: "/webinarMenu.svg",
          desc: "Live sessions & masterclasses",
        },
        {
          label: "Compliance Basics",
          link: "/compliance",
          icon: "/compliance.svg",
          activeIcon: "/compliance-active.svg",
          desc: "TDS, GST & Cost Center",
        },
        {
          label: "FAQs",
          link: "/faqs",
          icon: "/circle-question.svg",
          activeIcon: "/circle-question-active.svg",
          desc: "Common questions answered",
        },
      ],
    },
    {
      title: "Tools",
      links: [
        {
          label: "Download Apps",
          link: "/download-apps",
          icon: "/downloadMenu.svg",
          activeIcon: "/download-active.svg",
          desc: "iOS & Android App",
        },
        {
          label: "Automation ROI",
          link: " ",
          icon: "/calculator.svg",
          activeIcon: "/calculator-active.svg",
          soon: true,
          desc: "Calculate your savings",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          link: "/about-us",
          icon: "/circle-info-sparkle.svg",
          activeIcon: "/circle-info-sparkle-active.svg",
          desc: "Our mission & leadership",
        },
        {
          label: "Certifications",
          link: "/certifications-awards",
          icon: "/header-certificate.svg",
          activeIcon: "/award-certificate-active.svg",
          desc: "ISO 27001 & Security",
        },
        {
          label: "Contact Us",
          link: "/contact-us",
          icon: "/user-phone.svg",
          activeIcon: "/user-phone-active.svg",
          desc: "Get in touch with us",
        },
      ],
    },
    {
      title: "Featured",
      links: [
        {
          label: "Thinking of Migrating?",
          link: "/migratingFeature",
          icon: "/migrateMenu.svg",
          activeIcon: "/migrateMenu.svg",
          desc: "Effortless vs <br/> SAP/Oracle/ERPs/Tally Plugins",
        },
      ],
    },
  ];

  const mobileMenu = [
    {
      href: "",
      label: "Products",
      subMenu: headerProducts,
      hasBottomBorder: true,
    },
    {
      href: "/case-studies",
      label: "Case Studies",
      hasBottomBorder: true,
    },
    { href: "/partners", label: "Partners", hasBottomBorder: true },
    {
      href: "",
      label: "Resources",
      hasBottomBorder: true,
      subMenu: headerResources,
    },
    { href: "/pricing", label: "Pricing", hasBottomBorder: true },
  ];

  const handleMouseEnter = (menuName: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setOpenMenu(menuName);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 400);
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#F08B32" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
    if (isMobile && expandedSections) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedSections, isMobile]);

  const primaryCTA =
    "bg-[#F08B32] md:text-[16px] text-[14px] md:font-[600] font-[400] text-[#fff] md:py-[12px] py-[7px] px-[20px] rounded font-lexend";
  const secondaryCTA =
    "bg-[#FFFFFF] text-[16px] font-[600] text-[#52525B] py-[12px] md:px-[36px] px-3 rounded";

  useEffect(() => {
    setMounted(true);

    const isBannerClosed =
      sessionStorage.getItem("headerBannerClosed") === "true";

    setCloseBanner(isBannerClosed);
  }, []);

  const handleCloseBanner = () => {
    sessionStorage.setItem("headerBannerClosed", "true");
    setCloseBanner(true);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("headerBannerClosed");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isMobile && expandedSections && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setExpandedSections(false);
            setOpenSubMenu(null);
          }}
        />
      )}
      {!closeBanner && <HeaderBanner setCloseBanner={handleCloseBanner} />}

      <header
        className={`bg-[#08090A] text-white ${
          isMobile ? "pt-[20px] pb-[16px] px-4" : "py-[20px] px-[80px]"
        } relative z-50`}
      >
        <div className="flex justify-between items-center rounded-xl">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/header-logo.svg"
                alt="Effortless-logo"
                className={isMobile ? "" : "!w-[188px] !h-[48px]"}
                width={110}
                height={isMobile ? 28 : 70}
                priority
                unoptimized={true}
              />
            </Link>
          </div>

          {!isMobile && (
            <div className="flex items-center gap-[40px] relative">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onClick={() => {
                    setOpenMenu("products");
                    setHoveredIndex(null);
                  }}
                  className={`text-base font-normal hover:text-white cursor-pointer flex items-center gap-2 ${
                    openMenu === "products" || !productPath
                      ? "text-white"
                      : "text-[#A8A8A8]"
                  }`}
                >
                  <span>Products</span>
                  <Image
                    src={
                      openMenu === "products"
                        ? "/chevron-down.svg"
                        : "/resource-down.svg"
                    }
                    alt="resource"
                    width={16}
                    height={16}
                    className="transition-transform duration-300"
                    unoptimized
                  />
                </div>
                {openMenu === "products" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[462px]">
                    <div className="bg-[#15181BF0] rounded-lg p-5 border border-[#2A3038] backdrop-blur-[2px]">
                      <div className="">
                        {headerProducts.map((section, sectionIdx) => (
                          <div key={sectionIdx}>
                            <h3 className="text-white font-semibold border-b border-[#A0A0A01A] pb-2">
                              {section.title}
                            </h3>
                            <div className="">
                              {section.links.map((link, linkIdx) => {
                                const isHovered =
                                  (hoveredIndex?.section === sectionIdx &&
                                    hoveredIndex?.link === linkIdx) ||
                                  pathname === link.link;
                                return (
                                  <Link
                                    key={linkIdx}
                                    href={link.soon ? "#" : link.link}
                                    onClick={(e) => {
                                      if (!link.soon) {
                                        handleMenuClick(e, link.link);
                                      }
                                    }}
                                    onMouseEnter={() =>
                                      setHoveredIndex({
                                        section: sectionIdx,
                                        link: linkIdx,
                                      })
                                    }
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`group flex justify-between items-start gap-2 p-4 text-base text-[#A0A0A0] whitespace-nowrap 
           hover:text-white hover:bg-[#23292F] rounded relative transition-transform duration-300 ease-out ${
             isHovered && "bg-[#23292F]"
           }`}
                                  >
                                    <span className="flex flex-col gap-2">
                                      <span className="flex-1 transition-colors duration-300 text-[#F1F3F5] text-base leading-5 font-normal flex gap-2 items-center group-hover:text-white">
                                        <Image
                                          src={link.activeIcon}
                                          alt="menu_icon"
                                          width={20}
                                          height={20}
                                          className="transition-opacity duration-300"
                                        />
                                        {link.label}
                                        {link.spl && (
                                          <span className="text-xs font-light text-[#F08B32] group-hover:text-[#F08B32]">
                                            {link.spl}
                                          </span>
                                        )}
                                      </span>
                                      <span className="text-[#B0B6BF] group-hover:text-white text-[13px] leading-4 font-light">
                                        {link.desc}
                                      </span>
                                    </span>
                                    {/* {link.soon && (
                                      <span className="inline-flex capitalize items-center justify-center p-0.5 rounded-[2px] text-xs font-lexend  font-normal bg-[#FFA0431A] text-[#FFA043]">
                                        coming soon
                                      </span>
                                    )} */}
                                    {!link.soon && (
                                      <Image
                                        src="/newHeader.svg"
                                        alt="arrow"
                                        width={16}
                                        height={16}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                      />
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Link
                  href="/case-studies"
                  className={`text-base font-normal ${
                    pathname === "/case-studies"
                      ? "text-white"
                      : "text-[#A8A8A8]"
                  } hover:text-white cursor-pointer`}
                >
                  Case Studies
                </Link>
              </div>
              <div>
                <Link
                  href="/partners"
                  className={`text-base font-normal ${
                    pathname === "/partners" ? "text-white" : "text-[#A8A8A8]"
                  } hover:text-white cursor-pointer`}
                >
                  Partners
                </Link>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onClick={() => {
                    setOpenMenu("resources");
                    setHoveredIndex(null);
                  }}
                  className={`text-base font-normal hover:text-white cursor-pointer flex items-center gap-2 ${
                    openMenu === "resources" || !resourcePath
                      ? "text-white"
                      : "text-[#A8A8A8]"
                  }`}
                >
                  <span>Resources</span>
                  <Image
                    src={
                      openMenu === "resources"
                        ? "/chevron-down.svg"
                        : "/resource-down.svg"
                    }
                    alt="resource"
                    width={16}
                    height={16}
                    className="transition-transform duration-300"
                    unoptimized
                  />
                </div>
                {openMenu === "resources" && (
                  <div className="absolute -translate-x-1/2 top-full mt-2 z-50 w-[1320px] mx-auto">
                    <div className="bg-[#15181BF0] rounded-lg p-6 border border-[#2A3038] backdrop-blur-[2px]">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                        {headerResources.map((section, sectionIdx) => (
                          <div key={sectionIdx}>
                            <h3 className="text-white font-semibold border-b border-[#A0A0A01A] pb-2">
                              {section.title}
                            </h3>
                            <div className="">
                              {section.links.map((link, linkIdx) => {
                                const isHovered =
                                  (hoveredIndex?.section === sectionIdx &&
                                    hoveredIndex?.link === linkIdx) ||
                                  pathname === link.link;
                                return (
                                  <Link
                                    key={linkIdx}
                                    href={link.soon ? "#" : link.link}
                                    onClick={(e) => {
                                      if (link.soon) {
                                        e.preventDefault();
                                        return;
                                      }
                                      if (link.label === "Webinars") {
                                        e.preventDefault();
                                        window.open(
                                          link.link,
                                          "_blank",
                                          "noopener,noreferrer"
                                        );
                                        return;
                                      }

                                      handleMenuClick(e, link.link);
                                    }}
                                    onMouseEnter={() =>
                                      setHoveredIndex({
                                        section: sectionIdx,
                                        link: linkIdx,
                                      })
                                    }
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`group flex items-center gap-2 p-4 text-base text-[#A0A0A0] whitespace-nowrap 
             hover:text-white hover:bg-[#23292F] rounded relative transition-transform duration-300 ease-out ${
               isHovered && "bg-[#23292F]"
             }`}
                                  >
                                    <span className="flex flex-col gap-2 w-full">
                                      <span className="flex justify-between items-center">
                                        <span className="flex-1 transition-colors duration-300 text-[#F1F3F5] text-base leading-5 font-normal flex gap-2 items-center group-hover:text-white">
                                          <Image
                                            src={link.activeIcon}
                                            alt="menu_icon"
                                            width={20}
                                            height={20}
                                            className="transition-opacity duration-300"
                                          />
                                          {link.label}
                                        </span>
                                        {!link.soon &&
                                          link.label !==
                                            "Thinking of Migrating?" && (
                                            <Image
                                              src="/newHeader.svg"
                                              alt="arrow"
                                              width={16}
                                              height={16}
                                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                          )}
                                      </span>
                                      <span
                                        className={`${
                                          link.label ===
                                          "Thinking of Migrating?"
                                            ? "text-[#F08B32] group-hover:text-[#FFA043] "
                                            : "text-[#B0B6BF] group-hover:text-white"
                                        } text-[13px] leading-4 font-light`}
                                      >
                                        {parse(link.desc)}{" "}
                                        {link.soon && (
                                          <span className="text-[#B0B6BF] group-hover:text-white">
                                            -{" "}
                                            <span className="capitalize text-xs font-lexend  font-normal text-[#FFA043] group-hover:text-[#FFA043]">
                                              coming soon
                                            </span>
                                          </span>
                                        )}
                                      </span>
                                      {link.label ===
                                        "Thinking of Migrating?" && (
                                        <Image
                                          src="/migrating.png"
                                          alt="migration"
                                          width={152}
                                          height={160}
                                          className="transition-opacity duration-300 self-center"
                                        />
                                      )}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Link
                  href="/pricing"
                  className={`text-base font-normal ${
                    pathname === "/pricing" ? "text-white" : "text-[#A8A8A8]"
                  } hover:text-white cursor-pointer`}
                >
                  Pricing
                </Link>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Phone Number */}
            {/* <div
              className="flex items-center text-sm gap-2"
              onClick={() => {
                window.location.href = `tel:+919176544422`;
              }}
            >
              <Image
                src={"/phone.svg"}
                alt="phone-icon"
                width={16}
                height={16}
                className="w-[20px] h-[20px]"
                unoptimized={true}
              />
              <p className="mr-3 text-[14px] md:text-[16px] font-[400] cursor-pointer">
                +91 91765 44422
              </p>
            </div> */}

            {/* Login Button */}
            {!isMobile && (
              <Link href="https://i.goeffortless.ai/" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <button className={secondaryCTA}>Login</button>
                </a>
              </Link>
            )}

            {/* Mobile Hamburger/Close Icon */}
            {isMobile && (
              <div
                onClick={() => {
                  setExpandedSections(!expandedSections);
                  setOpenSubMenu(null);
                }}
                className="flex p-1 border-[1px] border-[#E5E5E533] rounded-sm items-center cursor-pointer"
              >
                <Image
                  src={!expandedSections ? "/hamburger.svg" : "/close.svg"}
                  alt="hamburger-menu"
                  width={24}
                  height={24}
                  priority
                  unoptimized={true}
                />
              </div>
            )}

            {!isMobile && (
              <button
                {...CalcomConfig}
                className={`group relative overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center w-[220px] max-md:w-full  md:hover:!pr-[36px] ${primaryCTA}`}
              >
                <span className="relative inline-flex items-center ">
                  <span className="md:group-hover:mr-1 whitespace-nowrap transition-all duration-500">
                    Schedule Demo
                  </span>
                  <span className="absolute max-md:hidden top-1/2 right-[-1.4rem] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out md:block hidden">
                    <Image
                      src="/calendar-clock.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      className="block"
                      unoptimized
                    />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>

        {isMobile && expandedSections && (
          <div className="absolute top-full left-0 right-0 bg-[#15181BF0] backdrop-blur-[2px] z-50 rounded-b-lg">
            <div className="space-y-0">
              {mobileMenu.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#E5E5E533] border-dashed"
                >
                  <div
                    className={`flex items-center justify-between py-3 px-[24px] text-white cursor-pointer transition-colors ${
                      openSubMenu === item.label
                        ? "!text-[#F08B32]"
                        : "text-white"
                    }`}
                    onClick={() => {
                      if (item.subMenu) {
                        setOpenSubMenu(
                          openSubMenu === item.label ? null : item.label
                        );
                      } else {
                        setExpandedSections(false);
                        setOpenSubMenu(null);
                        router.push(item.href);
                      }
                    }}
                  >
                    <span className="text-[16px] font-[400]">{item.label}</span>
                    {item.subMenu ? (
                      <Image
                        src={
                          openSubMenu === item.label
                            ? "/chevron-up.svg"
                            : "/chevron-down.svg"
                        }
                        alt="toggle submenu"
                        width={16}
                        height={16}
                        className="transition-transform duration-300"
                        unoptimized
                      />
                    ) : (
                      <Image
                        src="/newRightArrow.svg"
                        alt="navigate"
                        width={16}
                        height={16}
                        className="opacity-70"
                        unoptimized
                      />
                    )}
                  </div>

                  {item.subMenu && openSubMenu === item.label && (
                    <div
                      className={`px-6 pb-3 ${
                        openSubMenu === "Products"
                          ? ""
                          : "overflow-y-scroll h-[320px]"
                      }`}
                    >
                      {item.subMenu.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                          <h3 className="text-[#A0A0A0] my-1 border-t border-[#E5E5E533] border-dashed pt-2 pb-1">
                            {section.title}
                          </h3>
                          <div className="space-y-3">
                            {section.links.map((link, linkIdx) => {
                              // const isHovered =
                              //   hoveredIndex?.section === sectionIdx &&
                              //   hoveredIndex?.link === linkIdx;

                              return (
                                <Link
                                  key={linkIdx}
                                  href={link.soon ? "#" : link.link}
                                  onClick={(e) => {
                                    if (link.label === "Webinars") {
                                      e.preventDefault();
                                      window.open(
                                        link.link,
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                      return;
                                    }
                                    if (!link.soon) {
                                      handleMenuClick(e, link.link);
                                    }
                                  }}
                                  onMouseEnter={() =>
                                    setHoveredIndex({
                                      section: sectionIdx,
                                      link: linkIdx,
                                    })
                                  }
                                  onMouseLeave={() => setHoveredIndex(null)}
                                  className="group flex items-center gap-2 px-2 py-1 text-base text-[#A0A0A0] whitespace-nowrap 
                  rounded relative transition-transform duration-300 ease-out select-none"
                                >
                                  <Image
                                    src={link.activeIcon}
                                    alt="menu_icon"
                                    width={20}
                                    height={20}
                                    className="transition-opacity duration-300"
                                  />
                                  <span className="flex-1 transition-colors duration-300 text-white font-light">
                                    {link.label}
                                  </span>
                                  {link.soon && (
                                    <span className="inline-flex capitalize items-center justify-center px-2 py-1 rounded text-xs font-lexend font-normal bg-[#FFA0431A] text-[#FFA043]">
                                      coming soon
                                    </span>
                                  )}
                                  {!link.soon && (
                                    <Image
                                      src="/newRightArrow.svg"
                                      alt="arrow"
                                      width={16}
                                      height={16}
                                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0"
                                    />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA Buttons */}
            <div className="grid grid-cols-2 gap-4 px-4 py-4">
              <button
                className="w-full bg-[#F08B32] text-white py-3 px-4 rounded-sm text-[14px] whitespace-nowrap font-[600] transition-colors"
                onClick={() => {
                  setExpandedSections(false);
                  setOpenSubMenu(null);
                }}
                {...CalcomConfig}
              >
                Schedule Demo
              </button>
              <Link
                href="https://i.goeffortless.ai/"
                className="block"
                legacyBehavior
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <button
                    className="w-full bg-transparent border border-[#F08B32] text-[#F08B32] py-3 px-4 rounded-sm text-[14px] font-[600] transition-colors hover:text-white"
                    onClick={() => {
                      setExpandedSections(false);
                      setOpenSubMenu(null);
                    }}
                  >
                    Login
                  </button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
