import { FeatureSectionProps } from "@/interface/type";
import Image from "next/image";
import React from "react";

const FeatureSection: React.FC<FeatureSectionProps> = ({
  // title,
  // subtitle,
  // description,
  // image,
  feature,
  position,
}) => {
  const { subtitle, title, description, image, points } = feature;
  const isEven = position % 2 === 1;

  return (
    <section className="w-full">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div
          className={`flex flex-col gap-3 md:gap-4 ${
            isEven ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="flex flex-col gap-2">
            {subtitle && (
              <span className="text-[#F08B32] text-base font-normal">
                {subtitle}
              </span>
            )}
            <h2 className="text-xl md:text-2xl font-medium text-[#EEEFFC]">
              {title}
            </h2>
          </div>
          {description?.map((item: string) => (
            <p className="text-[#FFFFFF] text-base md:text-xl font-light leading-6 md:leading-8">
              {item}
            </p>
          ))}
          {points?.length > 0 && (
            <div>
              <ul className="space-y-3">
                {points.map((item: any, i: any) => (
                  <li key={i} className="flex items-start gap-2 text-white">
                    <Image
                      src="/pointsTick.svg"
                      alt="pointsTick"
                      width={24}
                      height={24}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image */}
        <div
          className={`flex justify-center ${
            isEven ? "md:order-2" : "md:order-1"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-xl rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
