import { CompanyValue } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";

const ValueCard: FC<CompanyValue & { className?: string }> = ({
  icon,
  title,
  description,
  width,
  height,
  isMobile,
  hidetopBorder,
  growthFeatures,
  customLength = false,
  hideLastBorder = false,
  className = "", // Add className prop
}) => {
  return (
    <div
      className={`
        w-[100%] text-white py-5 md:min-h-[200px] 
        flex flex-col items-center text-center gap-1 md:gap-3 
        ${customLength 
          ? "md:px-[16px] md:py-[20px] md:tracking-negative" 
          : "md:p-5 md:py-[32px]"
        }
        ${hideLastBorder ? "max-md:last:before:hidden" : ""}
        max-md:gradient-border-bottom
        md:gradient-border-left 
        ${className} // Apply the additional className
      `}
    >
      <Image
        src={icon}
        alt={title}
        width={isMobile ? 32 : 48}
        height={isMobile ? 32 : 48}
        className={isMobile ? `w-[32px] h-[32px]` : `w-[48px] h-[48px]`}
        unoptimized={true}
      />
      <h3
        className={`md:text-[24px] text-[16px] font-[400] leading-[30px] md:mt-3 ${
          customLength ? "md:min-h-[60px] xl:min-h-[20px]" : ""
        }`}
      >
        {title}
      </h3>
      <p
        className={`${growthFeatures ? "md:text-[16px]" : "md:text-[18px]"} ${
          customLength
            ? "md:leading-[32px] leading-[20px] md:!min-h-[96px]"
            : "leading-[20px] md:min-h-[60px]"
        } text-[13px] font-[300] text-[#FFFFFF] `}
      >
        {description}
      </p>
    </div>
  );
};

export default ValueCard;