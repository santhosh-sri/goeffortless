import { HomePageVerticalSlider } from "@/interface/type";
import Image from "next/image";
import React, { useRef, useState } from "react";
import FeatureWrapper from "./FeatureWrapper";

const AccordionComponeny: React.FC<HomePageVerticalSlider> = ({
  features,
  isMobile,
}) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleFeatureClick = (index: number) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  const titleRef = useRef<HTMLHeadingElement | null>(null);

  React.useEffect(() => {
    if (isOpen !== null) {
      const titleElement = document.getElementById(`feature-${isOpen}`);
      if (titleElement) {
        titleElement.focus();
        window.scrollTo({
          top: titleElement.offsetTop - (window.innerHeight / 2 + 100),
          behavior: "smooth",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="w-full px-2 rounded-xl">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-full pt-1 px-2 max-md:gradient-border-bottom"
        >
          <button
            className="flex gap-2 items-center justify-between w-full text-[16px] font-[400] leading-[20px] text-[#FFFF]"
            onClick={() => handleFeatureClick(index)}
          >
            <div className="flex flex-col gap-1 items-start ">
              <div className="flex gap-2 items-center">
                {feature.image && (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={18}
                    height={18}
                    style={{
                      filter:
                        isOpen === index
                          ? "invert(66%) sepia(94%) saturate(2000%) hue-rotate(15deg) brightness(141.8%) contrast(100%)"
                          : "",
                    }}
                    unoptimized={true}
                  />
                )}

                <h2
                  ref={isOpen === index ? titleRef : null}
                  className={`text-[14px] !font-[400] leading-[24px] cursor-pointer text-left ${
                    isOpen === index ? "text-[#F08B32]" : "text-white"
                  }`}
                >
                  {feature.title}
                </h2>
              </div>
              {isOpen === index && (
                <p className="text-[12px] font-[300] text-[#F08B32] leading-[20px] cursor-pointer text-left">
                  {feature.description}
                </p>
              )}
            </div>
            <Image
              src={
                isOpen === index
                  ? "/arrow-up-oramge.svg"
                  : "/arrow-down-white.svg"
              }
              alt="open or close accordion"
              width={16}
              height={16}
              className={`${isOpen === index ? "relative top-[-17px]" : ""}`}
            />
          </button>
          {isOpen === index && (
            <div className="bg-[#15181B]">
              <FeatureWrapper
                GridCols={false}
                {...feature.featureCardsSection}
                isMobile={isMobile}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionComponeny;
