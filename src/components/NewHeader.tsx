"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ isMobile }: { isMobile: boolean }) => {
  const [expandedSections, setExpandedSections] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuClick = async (e: React.MouseEvent, href: string) => {
    if (href.includes("#")) {
      e.preventDefault();
      const [fullPath, hash] = href.split("#");

      if (pathname + window.location.search === fullPath) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        await router.push(href, { scroll: false });
        setOpenMenu(null);
        setHoveredIndex(null);

        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  };

  const menus = {
    about: [
      {
        label: "Our Story",
        link: "/about-us#ourstory",
        icon: "/book.svg",
        activeIcon: "/book-active.svg",
      },
      {
        label: "Leadership",
        link: "/about-us#leadership",
        icon: "/trainer.svg",
        activeIcon: "/trainer-active.svg",
      },
      {
        label: "Core values",
        link: "/about-us#corevalues",
        icon: "/handshake.svg",
        activeIcon: "/handshake-active.svg",
      },
      {
        label: "Certificates",
        link: "/certifications-awards",
        icon: "/award-certificates.svg",
        activeIcon: "/award-certificates-active.svg",
      },
    ],
    caseStudy: [
      {
        label: "Manufacturing",
        link: "/case-studies?type=Manufacturing#caseStudies",
        icon: "/industry.svg",
        activeIcon: "/industry-active.svg",
      },
      {
        label: "Distribution Businesses",
        link: "/case-studies?type=Distribution Businesses#caseStudies",
        icon: "/truck-fast.svg",
        activeIcon: "/truck-fast-active.svg",
      },
      {
        label: "B2B SaaS",
        link: "/case-studies?type=B2B SaaS#caseStudies",
        icon: "/briefcase.svg",
        activeIcon: "/briefcase-active.svg",
      },
      {
        label: "Retail",
        link: "/case-studies?type=Retail#caseStudies",
        icon: "/shop.svg",
        activeIcon: "/shop-active.svg",
      },
      {
        label: "Logistics",
        link: "/case-studies?type=Logistics#caseStudies",
        icon: "/pallet-package.svg",
        activeIcon: "/pallet-package-active.svg",
      },
    ],
  };

  const mobileMenu = [
    {
      href: "/about-us",
      label: "About Us",
      hasBottomBorder: true,
      subMenu: menus.about,
    },
    {
      href: "/case-studies",
      label: "Customer",
      hasBottomBorder: true,
      subMenu: menus.caseStudy,
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

  const primaryCTA =
    "bg-[#F08B32] md:text-[16px] text-[14px] md:font-[600] font-[400] text-[#fff] md:py-[12px] py-[7px] px-[20px] rounded font-ttHoves";
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
          isMobile ? "pt-[20px] pb-[16px] px-4" : "pt-[40px] px-[80px]"
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
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/about-us"
                  onClick={() => {
                    setOpenMenu(null);
                    setHoveredIndex(null);
                  }}
                  className={`text-base hover:text-white border-b-[2.5px] pb-2 hover:border-b-[#F08B32] font-normal cursor-pointer ${
                    openMenu === "about"
                      ? "border-b-[#F08B32] text-white"
                      : "border-b-transparent text-[#A8A8A8]"
                  }`}
                >
                  About Us
                </Link>
                {openMenu === "about" && (
                  <div className="absolute left-0 mt-4 w-[240px]  bg-[#15181B] rounded-lg p-2 z-50">
                    {menus.about.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        onClick={(e) => handleMenuClick(e, item.link)}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group flex items-center gap-2 px-4 py-2 text-base whitespace-nowrap 
             text-white hover:text-[#F08B32] relative transition-transform duration-300 ease-out hover:translate-x-[5px]"
                      >
                        <Image
                          src={
                            hoveredIndex === idx ? item.activeIcon : item.icon
                          }
                          alt="menu_icon"
                          width={20}
                          height={20}
                          className="transition-opacity duration-300"
                        />

                        <span className="transition-colors duration-300">
                          {item.label}
                        </span>

                        <Image
                          src="/arrow-rights.svg"
                          alt="arrow"
                          width={16}
                          height={16}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("caseStudy")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/case-studies"
                  onClick={() => {
                    setOpenMenu(null);
                    setHoveredIndex(null);
                  }}
                  className={`text-base font-normal hover:text-white border-b-[2.5px] pb-2 hover:border-b-[#F08B32] cursor-pointer ${
                    openMenu === "caseStudy"
                      ? "border-b-[#F08B32] text-white"
                      : "border-b-transparent text-[#A8A8A8]"
                  }`}
                >
                  Case Study
                </Link>
                {openMenu === "caseStudy" && (
                  <div className="absolute left-0 mt-4 w-[280px] bg-[#15181B] rounded-lg p-2 z-50">
                    {menus.caseStudy.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        onClick={(e) => handleMenuClick(e, item.link)}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group flex items-center gap-2 px-4 py-2 text-base whitespace-nowrap 
             text-white hover:text-[#F08B32] relative transition-transform duration-300 ease-out hover:translate-x-[5px]"
                      >
                        <Image
                          src={
                            hoveredIndex === idx ? item.activeIcon : item.icon
                          }
                          alt="menu_icon"
                          width={20}
                          height={20}
                          className="transition-opacity duration-300"
                        />

                        <span className="transition-colors duration-300">
                          {item.label}
                        </span>

                        <Image
                          src="/arrow-rights.svg"
                          alt="arrow"
                          width={16}
                          height={16}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <Link
                  href="/pricing"
                  className={`text-base font-normal text-[#A8A8A8] hover:text-white border-b-[2.5px] pb-2 border-b-transparent hover:border-b-[#F08B32] cursor-pointer`}
                >
                  Pricing
                </Link>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Phone Number */}
            <div
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
            </div>

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
                className={primaryCTA}
                data-cal-namespace="demo"
                data-cal-link="effortless/demo"
                data-cal-config='{"layout":"month_view"}'
              >
                Schedule Demo
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
                    className={`flex items-center justify-between py-4 px-[24px] text-white cursor-pointer transition-colors ${
                      openSubMenu === item.label
                        ? "!text-[#F08B32]"
                        : "text-white hover:text-[#F08B32]"
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
                    <div className="pb-4 space-y-2">
                      {item.subMenu.map((child, idx) => (
                        <Link
                          key={idx}
                          href={child.link}
                          className="flex items-center gap-2 text-sm text-[#A8A8A8] transition-colors py-2 px-6"
                          onClick={() => {
                            setExpandedSections(false);
                            setOpenSubMenu(null);
                          }}
                        >
                          <Image
                            src={child.icon}
                            alt={child.label}
                            width={20}
                            height={20}
                            className="opacity-80"
                          />
                          {child.label}
                          <Image
                            src="/white-arrow-right.svg"
                            alt="arrow"
                            width={16}
                            height={16}
                            className={`ml-auto transition-transform duration-300`}
                            unoptimized
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA Buttons */}
            <div className="grid grid-cols-2 gap-4 px-4 py-[30px]">
              <button
                className="w-full bg-[#F08B32] text-white py-3 px-4 rounded-sm text-[14px] font-[600] transition-colors"
                onClick={() => {
                  setExpandedSections(false);
                  setOpenSubMenu(null);
                }}
                data-cal-namespace="demo"
                data-cal-link="effortless/demo"
                data-cal-config='{"layout":"month_view"}'
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
