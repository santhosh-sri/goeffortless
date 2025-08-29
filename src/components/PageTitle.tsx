import { FirstFoldContent } from "@/interface/type";
import Image from "next/image";
import React from "react";

const PageTitle: React.FC<FirstFoldContent> = ({
  pageHeading,
  pageName,
  logo,
  ishome,
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(124.77deg, rgba(255, 255, 255, 0.1) -5.51%, rgba(255, 255, 255, 0) 104.11%)",
      }}
    className=" rounded-[42px]">
    <div
      style={{
        background:
          "linear-gradient(124.77deg, rgba(255, 255, 255, 0.1) -5.51%, rgba(255, 255, 255, 0) 104.11%)",
      }}
      className={`flex ${
        ishome ? "gap-1" : "gap-2"
      } bg-[#303032] m-[2px] p-2 px-[10px] py-[6px]  w-fit items-center justify-center rounded-[42px] text-[#ffff]`}
    >
      {ishome && (
        <p className="text-[14px] md:text-[14px] leading-5 font-[400]">
          Say 👋 to
        </p>
      )}{" "}
      {logo && (
        <Image
          src={logo}
          alt="Effortless-logo"
          width={20}
          height={20}
          className="mt-[-2px]"
        />
      )}
      {pageName && (
        <p className="text-[14px] md:text-[15px] leading-5 text-[#F08B32] font-[400]">
          {pageName}
        </p>
      )}
      {pageHeading && (
        <p
          className={`text-[14px] ${
            ishome ? "md:text-[14px]" : "md:text-[15px]"
          } leading-5 font-[400]`}
        >
          {pageHeading}
        </p>
      )}
    </div>
    </div>
  );
};

export default PageTitle;
