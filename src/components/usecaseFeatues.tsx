import { USeCaseSection } from "@/interface/type";
import Image from "next/image";
import React from "react";

const UsecaseFeatures: React.FC<USeCaseSection> = (card) => {
  const {
    title = "",
    solution = [],
    img = "",
    position = "",
    layout = "",
    border = "",
  } = card;
  return (
    <>
      <div className="w-fit border-t-[2px] border-dashed border-[#E5E5E533]">
        <section
          className={
            layout === "test"
              ? "md:grid md:grid-cols-2 md:gap-4 items-center justify-between flex flex-col gap-2 p-4 md:p-8"
              : `flex flex-col gap-2 p-4 md:p-8 ${
                  border === "borderBetween"
                    ? "md:border-r-[2px] border-dashed border-[#E5E5E533]"
                    : border === "last"
                      ? "md:border-r-[2px] border-dashed border-[#E5E5E533]"
                      : ""
                }`
          }
        >
          {img && position && (
            <Image
              src={img}
              width={596}
              height={212}
              alt="bannerImage"
              className={`h-[320px] ${position ? "max-md:hidden" : "block"} `}
              unoptimized={true}
            />
          )}
          <div className="md:min-h-[110px] flex flex-col gap-3">
            <h2 className="md:font-[400] text-[#EEEFFC] md:text-[20px] text-[18px] leading-[20px] md:leading-[26px]">
              {title}
            </h2>
            {solution && (
              <ol>
                {solution?.map((item, index) => (
                  <li
                    className="ml-4 list-disc pb-3 text-[14px] md:text-[16px] font-[300] leading-[20px] md:leading-[24px] text-[#E4E4E7]"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
          {img && (
            <Image
              src={img}
              width={596}
              height={212}
              alt="bannerImage"
              className={`md:h-[320px] ${position ? "md:hidden" : "block"} `}
              unoptimized={true}
            />
          )}
        </section>
      </div>
      {border == "last" && (
        <hr className="border-t-[2px] border-dashed border-[#E5E5E533]"></hr>
      )}{" "}
    </>
  );
};

export default UsecaseFeatures;
