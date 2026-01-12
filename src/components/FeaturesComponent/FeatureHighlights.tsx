import { FeatureHighlightItem } from "@/interface/type";
import Image from "next/image";
import React from "react";

const FeatureHighlights: React.FC<FeatureHighlightItem> = ({ title, icon }) => {
  return (
    <section>
      <div className="flex flex-col items-center gap-4">
        <div>
          <Image
            src={icon}
            alt="icon"
            width={64}
            height={64}
            className="max-md:!w-[48px] max-md:!h-[48px]"
          />
        </div>

        <h3 className="text-white text-base md:text-xl font-normal md:font-semibold">
          {title}
        </h3>
      </div>
    </section>
  );
};

export default FeatureHighlights;
