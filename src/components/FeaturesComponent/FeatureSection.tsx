import { FeatureSectionProps } from "@/interface/type";
import React from "react";

const FeatureSection: React.FC<FeatureSectionProps> = ({
  // title,
  // subtitle,
  // description,
  // image,
  feature,
  position,
}) => {
  const { subtitle, title, description, image } = feature;
  const isEven = position % 2 === 1;

  return (
    <section className="w-full py-20">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div
          className={`flex flex-col gap-4 ${
            isEven ? "md:order-1" : "md:order-2"
          }`}
        >
          {subtitle && (
            <span className="text-orange-400 text-sm font-semibold uppercase">
              {subtitle}
            </span>
          )}
          <h2 className="text-lg md:text-2xl font-medium text-[#EEEFFC]">
            {title}
          </h2>
          {description?.map((item: string) => (
            <p className="text-[#FFFFFF] text-xl font-light leading-8">
              {item}
            </p>
          ))}
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
