import Image from "next/image";
import React from "react";

interface SecondaryCtaProps {
  handleDirect: () => void;
  secondaryCtaText: string;
  customStyle?: true;
  ishome?: boolean;
  isOrange?: boolean;
}

const SecondaryCta: React.FC<SecondaryCtaProps> = ({
  handleDirect,
  secondaryCtaText,
  customStyle = false,
  ishome,
  isOrange,
}) => {
  return (
    <button
      onClick={handleDirect}
      id="democta"
      className={`group relative overflow-hidden transition-all duration-500 ease-in-out
        py-[12px] md:text-[16px] cursor-pointer border border-[#F08B32] text-[#F08B32] font-[500]
        md:px-6 px-[16px] rounded flex items-center justify-center  md:hover:pr-7
        ${customStyle ? "text-[14px]" : "md:text-[16px] text-[14px]"}
        ${ishome ? "w-[220px] max-md:w-full" : ""}  md:hover:!pr-[36px]`}
    >
      <span className="relative inline-flex items-center ">
        <span className="md:group-hover:mr-1 whitespace-nowrap transition-all duration-500">
          {secondaryCtaText}
        </span>
        <span className="absolute max-md:hidden top-1/2 right-[-1.4rem] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out md:block hidden">
          <Image
            src={isOrange ? "/secondary-arrow.svg" : "/arrow-white.svg"}
            alt="arrow"
            width={16}
            height={16}
            className="block"
            unoptimized
          />
        </span>
      </span>
    </button>
  );
};

export default SecondaryCta;
