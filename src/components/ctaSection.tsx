import React from "react";
import Democta from "./Democta";

const CtaSection = ({
  ctaText = "",
  secondaryCtaText = "",
  ctaLink = "",
  secondaryCtaLink = "",
}) => {
  const handleDirect = () => {
    const redirectScreen = ctaLink
      ? ctaLink
      : secondaryCtaLink
      ? secondaryCtaLink
      : "/demo";
    window.location.href = redirectScreen;
  };
  return (
    <div className="flex w-full gap-6 items-center justify-center">
      {ctaText && (
        <button
          onClick={handleDirect}
          id="democta"
          className="bg-[#F08B32] hover:bg-[#DD781F] px-6 py-[14px] w-full md:!max-w-[30%] rounded text-[16px]  text-white md:text-[20px] font-[600] cursor-pointer"
        >
          {ctaText}
        </button>
      )}
      {secondaryCtaText && (
        <button
          className="py-[14px] w-full md:text-[20px] md:!max-w-[30%] cursor-pointer !border-[1px] border-[#F08B32] text-[#F08B32] font-semibold  text-[16px] px-4 rounded"
          onClick={handleDirect}
        >
          {secondaryCtaText}
        </button>
      )}
    </div>
  );
};

export default CtaSection;
