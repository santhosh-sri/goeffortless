// components/Verticalslider.tsx
import { HomePageVerticalSlider } from "@/interface/type";
import Image from "next/image";
import { FC, useState } from "react";
import FeatureWrapper from "./FeatureWrapper";

const HomePageCarousel: FC<HomePageVerticalSlider> = ({
  features,
  isMobile,
}) => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(0);

  // Function to handle click on a feature title
  const handleFeatureClick = (index: number) => {
    setSelectedFeature(index); // Otherwise, select the clicked feature
  };

  return (
    <div className="text-white">
      <div className="flex gap-8 items-start">
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 w-full p-2 pl-3 ${
                selectedFeature === index
                  ? "bg-[#FFFFFF1F] rounded border-l-[1px] border-[#F08B32]"
                  : ""
              }`}
            >
              <div
                className="flex gap-2 items-center"
                onMouseEnter={() => handleFeatureClick(index)}
              >
                {feature.image && (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={18}
                    height={18}
                    style={{
                      filter:
                        selectedFeature === index
                          ? "invert(66%) sepia(94%) saturate(2000%) hue-rotate(15deg) brightness(141.8%) contrast(100%)"
                          : "",
                    }}
                    className="w-5 h-5"
                    unoptimized={true}
                  />
                )}
                <h2
                  className={`text-[18px] !font-[400] leading-[24px] cursor-pointer text-left ${
                    selectedFeature === index ? "text-[#F08B32]" : "text-white"
                  }`}
                >
                  {feature.title}
                </h2>
              </div>
              {selectedFeature === index && (
                <p className="text-[13px] font-[300] text-[#F08B32] leading-[20px] cursor-pointer">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="w-[68%] p-4 border-[1px] border-[#E5E5E533] rounded-lg bg-[#15181B]">
          {selectedFeature !== null && (
            <FeatureWrapper
              GridCols={false}
              isMobile={isMobile}
              {...features[selectedFeature].featureCardsSection}
              index={selectedFeature}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePageCarousel;

