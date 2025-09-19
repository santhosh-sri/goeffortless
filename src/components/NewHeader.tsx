import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

const Header = ({ isMobile }: { isMobile: boolean }) => {
  const [expandedSections, setExpandedSections] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Data for the dropdown menus
  const menus = {
    about: [
      { label: "Our Story", link: "/about-us" },
      { label: "Leadership", link: "/about-us" },
      { label: "Core values", link: "/about-us" },
      { label: "Certificates", link: "/certifications_awards" },
    ],
    caseStudy: [
      { label: "Manufacturing", link: "/customer_stories" },
      { label: "Distribution Businesses", link: "/customer_stories" },
      { label: "B2B SaaS", link: "/customer_stories" },
      { label: "Retail", link: "/customer_stories" },
      { label: "Logistics", link: "/customer_stories" },
    ],
  };

  // Navigation items array for mobile view
  const navigationItems = [
    { href: "/", label: "Home", hasBottomBorder: true },
    { href: "/pricing", label: "Pricing", hasBottomBorder: true },
    { href: "/partners", label: "Partners", hasBottomBorder: true },
    { href: "/about-us", label: "About Us", hasBottomBorder: true },
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

  // useEffect for Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#F08B33" },
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
          onClick={() => setExpandedSections(false)}
        />
      )}

      <header
        className={`bg-[#08090A] text-white ${
          isMobile ? "pt-[32px] pb-[16px]" : "pt-[40px] px-[80px]"
        } relative z-50`}
      >
        <div className="flex justify-between items-center px-4 py-3 rounded-xl">
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

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="flex items-center gap-[40px] relative">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-base font-normal cursor-pointer">
                  About Us
                </div>
                {openMenu === "about" && (
                  <div className="absolute top-full left-0 mt-2 w-fit bg-[#15181B] rounded-md p-2 z-50">
                    {menus.about.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        className="block px-4 py-2 text-sm whitespace-nowrap hover:text-[#F08B32]"
                      >
                        {item.label}
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
                <div className="text-base font-normal cursor-pointer">
                  Case Study
                </div>
                {openMenu === "caseStudy" && (
                  <div className="absolute top-full left-0 mt-2 w-fit bg-[#15181B] rounded-md p-2 z-50">
                    {menus.caseStudy.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        className="block px-4 py-2 text-sm whitespace-nowrap hover:text-[#F08B32]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/pricing"
                className="text-base font-normal cursor-pointer"
              >
                Pricing
              </Link>
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
                onClick={() => setExpandedSections(!expandedSections)}
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

            {/* Schedule Demo Button */}
            {!isMobile && (
              <button
                className={primaryCTA}
                data-cal-namespace="demo"
                data-cal-link="goeffortless/demo"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
              >
                Schedule Demo
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobile && expandedSections && (
          <div className="absolute top-full left-0 right-0 bg-[#08090A] z-50 rounded-b-lg">
            {/* Navigation Menu */}
            <div className="space-y-0">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center justify-between py-4 px-[24px] text-white hover:text-[#F08B32] transition-colors ${
                    item.hasBottomBorder
                      ? "border-b-[2px] border-[#E5E5E533] border-dashed"
                      : ""
                  }`}
                  onClick={() => setExpandedSections(false)}
                >
                  <span className="text-[16px] font-[400]">{item.label}</span>
                  <Image
                    src="/white-arrow-right.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="opacity-70"
                    unoptimized={true}
                  />
                </Link>
              ))}
            </div>

            {/* Bottom CTA Buttons */}
            <div className="grid grid-cols-2 gap-4 px-4 py-[30px]">
              <button
                className="w-full bg-[#F08B32] text-white py-3 px-4 rounded-lg text-[14px] font-[600] transition-colors"
                onClick={() => setExpandedSections(false)}
                data-cal-namespace="demo"
                data-cal-link="goeffortless/demo"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
              >
                Speak to Us
              </button>
              <Link
                href="https://i.goeffortless.ai/"
                className="block"
                legacyBehavior
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <button
                    className="w-full bg-transparent border border-[#F08B32] text-[#F08B32] py-3 px-4 rounded-lg text-[14px] font-[600] transition-colors hover:text-white"
                    onClick={() => setExpandedSections(false)}
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
