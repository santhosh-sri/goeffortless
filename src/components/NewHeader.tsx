"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { usePathname, useRouter } from "next/navigation";
import { CalcomConfig } from "@/utils/calConfig";

const Header = ({ isMobile }: { isMobile: boolean }) => {
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

  const headerResources = [
    {
      title: "Learn",
      links: [
        {
          label: "Blog",
          link: "/stories",
          icon: "/book-open.svg",
          activeIcon: "/book-open-active.svg",
          soon: false,
        },
        {
          label: "FAQs",
          link: "/faqs",
          icon: "/circle-question.svg",
          activeIcon: "/circle-question-active.svg",
        },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          label: "Partners",
          link: "/partners",
          icon: "/crowd.svg",
          activeIcon: "/crowd-active.svg",
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
        },
        // {
        //   label: "Automation ROI",
        //   link: "/",
        //   icon: "/calculator.svg",
        //   activeIcon: "/calculator-active.svg",
        //   soon: false,
        // },
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
        },
        {
          label: "Certifications",
          link: "/certifications-awards",
          icon: "/header-certificate.svg",
          activeIcon: "/award-certificate-active.svg",
        },
        {
          label: "Contact Us",
          link: "/contact-us",
          icon: "/user-phone.svg",
          activeIcon: "/user-phone-active.svg",
        },
      ],
    },
  ];

  const mobileMenu = [
    { href: "/pricing", label: "Pricing", hasBottomBorder: true },
    {
      href: "/case-studies",
      label: "Case Study",
      hasBottomBorder: true,
    },
    {
      href: "",
      label: "Resources",
      hasBottomBorder: true,
      subMenu: headerResources,
    },
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

  const primaryCTA =
    "bg-[#F08B32] md:text-[16px] text-[14px] md:font-[600] font-[400] text-[#fff] md:py-[12px] py-[7px] px-[20px] rounded font-lexend";
  const secondaryCTA =
    "bg-[#FFFFFF] text-[16px] font-[600] text-[#52525B] py-[12px] md:px-[36px] px-3 rounded";

  return (
    <>
      {isMobile && expandedSections && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => {
            setExpandedSections(false);
            setOpenSubMenu(null);
          }}
        />
      )}

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
              <div>
                <Link
                  href="/pricing"
                  className={`text-base font-normal text-[#A8A8A8] hover:text-white cursor-pointer`}
                >
                  Pricing
                </Link>
              </div>
              <div>
                <Link
                  href="/case-studies"
                  className={`text-base font-normal text-[#A8A8A8] hover:text-white cursor-pointer`}
                >
                  Case Study
                </Link>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  // href="/case-studies"
                  onClick={() => {
                    setOpenMenu(null);
                    setHoveredIndex(null);
                  }}
                  className={`text-base font-normal hover:text-white cursor-pointer flex items-center gap-2 ${
                    openMenu === "resources" ? "text-white" : "text-[#A8A8A8]"
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
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50">
                    <div className="bg-[#15181B] rounded-lg p-6 w-[908px]">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                        {headerResources.map((section, sectionIdx) => (
                          <div key={sectionIdx}>
                            <h3 className="text-white font-semibold mb-3 border-b border-[#A0A0A01A] pb-1">
                              {section.title}
                            </h3>
                            <div className="space-y-3">
                              {section.links.map((link, linkIdx) => {
                                const isHovered =
                                  hoveredIndex?.section === sectionIdx &&
                                  hoveredIndex?.link === linkIdx;
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
                                    className="group flex items-center gap-2 p-2 text-base text-[#A0A0A0] whitespace-nowrap 
             hover:text-white hover:bg-[#1E2024] rounded relative transition-transform duration-300 ease-out"
                                  >
                                    <Image
                                      src={
                                        isHovered ? link.activeIcon : link.icon
                                      }
                                      alt="menu_icon"
                                      width={20}
                                      height={20}
                                      className="transition-opacity duration-300"
                                    />
                                    <span className="flex-1 transition-colors duration-300">
                                      {link.label}
                                    </span>
                                    {link.soon && (
                                      <span className="inline-flex capitalize items-center justify-center p-0.5 rounded-[2px] text-xs font-lexend  font-normal bg-[#FFA0431A] text-[#FFA043]">
                                        coming soon
                                      </span>
                                    )}
                                    {!link.soon && (
                                      <Image
                                        src="/arrow-white.svg"
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
          <div className="absolute top-full left-0 right-0 bg-[#08090A] z-50 rounded-b-lg">
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
                        src="/white-arrow-right.svg"
                        alt="navigate"
                        width={16}
                        height={16}
                        className="opacity-70"
                        unoptimized
                      />
                    )}
                  </div>

                  {item.subMenu && openSubMenu === item.label && (
                    <div className="px-6 pb-3 overflow-y-scroll h-[320px]">
                      {item.subMenu.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                          <h3 className="text-white my-1 border-t border-[#E5E5E533] border-dashed pt-2 pb-1">
                            {section.title}
                          </h3>
                          <div className="space-y-3">
                            {section.links.map((link, linkIdx) => {
                              const isHovered =
                                hoveredIndex?.section === sectionIdx &&
                                hoveredIndex?.link === linkIdx;

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
                                  className="group flex items-center gap-2 px-2 py-1 text-base text-[#A0A0A0] whitespace-nowrap 
                  hover:text-white hover:bg-[#1E2024] rounded relative transition-transform duration-300 ease-out select-none"
                                >
                                  <Image
                                    src={
                                      isHovered ? link.activeIcon : link.icon
                                    }
                                    alt="menu_icon"
                                    width={20}
                                    height={20}
                                    className="transition-opacity duration-300"
                                  />
                                  <span className="flex-1 transition-colors duration-300">
                                    {link.label}
                                  </span>
                                  {link.soon && (
                                    <span className="inline-flex capitalize items-center justify-center p-0.5 rounded-[2px] text-xs font-lexend font-normal bg-[#FFA0431A] text-[#FFA043]">
                                      coming soon
                                    </span>
                                  )}
                                  {!link.soon && (
                                    <Image
                                      src="/arrow-white.svg"
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
