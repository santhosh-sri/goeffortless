import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({
  setShowForm = () => {},
  isMobile,
}: {
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}) => {
  const [expandedSections, setExpandedSections] = useState(false);

  // Navigation items array
  const navigationItems = [
    { href: "/", label: "Home", hasBottomBorder: true },
    { href: "/pricing", label: "Pricing", hasBottomBorder: true },
    { href: "/partners", label: "Partners", hasBottomBorder: true },
    { href: "/about-us", label: "About Us", hasBottomBorder: true },
  ];

  const handleClick = () => {
    if (isMobile) {
      window.location.href = `tel:${9176544422}`;
    } else {
      setShowForm(true);
      setExpandedSections(false);
    }
  };

  const primaryCTA =
    "bg-[#F08B32] md:text-[16px] text-[14px] md:font-[600] font-[400] text-[#fff] md:py-[12px] py-[7px] px-[20px] rounded font-ttHoves";
  const secondaryCTA =
    "bg-[#FFFFFF] text-[16px] font-[600] text-[#52525B] py-[12px] md:px-[36px] px-3 rounded ";

  return (
    <>
      {/* Blur Background Overlay */}
      {isMobile && expandedSections && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setExpandedSections(false)}
        />
      )}

      <header className="bg-[#08090A] text-white md:pt-[40px] relative z-40">
        <div
          className={`md:max-w-[1080px] mx-auto flex justify-between items-center px-4 py-3 ${
            isMobile ? "pt-[32px] pb-[16px]" : "bg-[#FFFFFF14]"
          } rounded-xl`}
        >
          {/* Logo and Phone */}
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

          {/* Navigation and Buttons */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <div className="items-center text-sm gap-2 flex md:hidden">
              <Image
                src={"/phone.svg"}
                alt="Effortless-logo"
                width={16}
                height={16}
                className="w-[20px] h-[20px]"
                unoptimized={true}
              />
              <p className="mr-3 text-[14px] font-[400] cursor-pointer">
                +91 91765 44422{" "}
              </p>
            </div>
            <div
              className="items-center text-sm gap-2 hidden md:flex"
              onClick={() => {
                const inputElement = document.createElement("input");
                inputElement.type = "tel";
                inputElement.focus();
                document.body.appendChild(inputElement);
                inputElement.setSelectionRange(0, 0);
                setTimeout(() => {
                  document.body.removeChild(inputElement);
                }, 100);
              }}
            >
              <Image
                src={"/phone.svg"}
                alt="Effortless-logo"
                width={16}
                height={16}
                className="w-[20px] h-[20px]"
                unoptimized={true}
              />
              <p className="mr-3 text-[16px] font-[400] cursor-pointer max-lg:hidden">
                +91 91765 44422{" "}
              </p>
            </div>
            {!isMobile && (
              <Link href="https://i.goeffortless.ai/" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <button className={isMobile ? primaryCTA : secondaryCTA}>
                    Login
                  </button>
                </a>
              </Link>
            )}
            <div
              onClick={() => setExpandedSections(!expandedSections)}
              className="flex p-1 border-[1px] border-[#E5E5E533] rounded-sm items-center md:hidden cursor-pointer"
            >
              <Image
                src={!expandedSections ? "/hamburger.svg" : "/close.svg"}
                alt="hamburger"
                className={isMobile ? "" : "md:!w-[188px] !h-[48px]"}
                width={24}
                height={24}
                priority
                unoptimized={true}
              />
            </div>
            {!isMobile && (
              <button
                className={primaryCTA}
                onClick={() => {
                  setShowForm(true);
                }}
              >
                Get a Demo
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
            <div className=" grid grid-cols-2 gap-4 px-4 py-[30px]">
              <button
                className="w-full bg-[#F08B32] text-white py-3 px-4 rounded-lg text-[14px] font-[600] transition-colors"
                onClick={() => {
                  setShowForm(true);
                  setExpandedSections(false);
                }}
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
