import { CompanyValue } from "@/interface/type";
import parse from "html-react-parser";
import Image from "next/image";
import { FC } from "react";

const PartnerList: FC<CompanyValue> = ({
  index,
  icon,
  title,
  description,
  topBottomBorder,
}) => {
  return (
    <div
      className={`
        text-white relative
        flex flex-col md:gap-5 gap-3 
        items-start text-start w-full
       
        ${
          icon
            ? `${topBottomBorder ? "md:gradient-border-top-bottom" : "md:gradient-border-top md:min-h-[450px]"} !min-h-0 md:!h-[515px]  max-md:gradient-border-bottom md:px-8 py-4`
            : `md:gradient-border-left md:!min-h-[310px] max-md:gradient-border-bottom md:first:before:hidden py-4 pt-2`
        }
      `
        .trim()
        .replace(/\s+/g, " ")}
    >
      {icon && (
        <div className="flex-shrink-0 md:pt-8 pt-2">
          <Image
            src={icon}
            alt={title}
            width={46}
            height={46}
            className="md:h-[46px] md:w-[46px] w-[44px] h-[44px] object-contain"
          />
        </div>
      )}

      <h3
        className={`
          flex-shrink-0 w-full
          ${
            icon
              ? "md:text-[30px] text-[16px] leading-[26px] md:leading-[38px] font-[500] md:min-h-[76px]"
              : "md:text-[40px] font-[400] md:leading-[48px] md:min-h-[96px] text-[20px] leading-[24px]"
          }
        `
          .trim()
          .replace(/\s+/g, " ")}
      >
        {parse(title)}
      </h3>

      <p
        className={`
          flex-1 leading-[20px] md:leading-[32px] text-[#FFFFFF] font-[300] w-full
          ${
            icon
              ? "md:text-[20px] text-[13px] md:h-[250px] md:font-[400] md:pb-8 pb-4"
              : "md:text-[18px] text-[13px] md:pb-8 max-md:pb-[10px]"
          }
        `
          .trim()
          .replace(/\s+/g, " ")}
      >
        {description}
      </p>
    </div>
  );
};

export default PartnerList;