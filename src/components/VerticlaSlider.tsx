// components/Verticalslider.tsx
import { Feature, SectionData } from "@/interface/type";
import Image from "next/image";
import { FC, useState } from "react";

interface VerticalSliderProps {
  section: SectionData;
}

const Verticalslider: FC<VerticalSliderProps> = ({ section }) => {
  const [activeFeature, setActiveFeature] = useState<Feature>(
    section?.features[0]
  );

  return (
    <div className="text-white flex max-md:flex-col">
      {/* Left panel */}
      <div className="md:w-1/3 space-y-6 p-6">
        <h2 className="md:text-[30px] font-[400] text-[20px] md:leading-[32px] leading-[28px]">
          {section.title}
        </h2>

        <ul className="space-y-4">
          {section.features.map((feature: any) => (
            <li
              key={feature.key}
              onClick={() => setActiveFeature(feature)}
              className={`cursor-pointer transition-all ${
                feature?.key === activeFeature?.key
                  ? "text-orange-400 border-l-2 border-orange-400 pl-2"
                  : "pl-2 text-white"
              }`}
            >
              {feature.title}
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 pt-6">
          {section?.store_buttons?.map((button, idx) => (
            <a
              key={idx}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={button.image}
                alt={button.label}
                className="h-10"
                width={158}
                height={58}
                unoptimized={true}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="md:w-2/3 flex flex-col md:flex-row border-[1px] rounded-lg border-[#E5E5E533] justify-between p-6 bg-[#15181B]">
        <div className="max-w-xl flex flex-col gap-2">
          <h3 className="md:text-[24px] font-[400] text-[20px] leading-[28px]">
            {activeFeature.title}
          </h3>
          <p className="text-[#E4E4E7] md:text-[17px] text-[14px] font-[300] leading-[28px]">
            {activeFeature.description}
          </p>
        </div>
        <Image
          src={activeFeature.image}
          alt={activeFeature.title}
          width={228}
          height={458}
          className="w-48 mt-6 md:mt-0"
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default Verticalslider;
