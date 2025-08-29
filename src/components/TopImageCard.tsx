import { TopImagecards } from "@/interface/type";
import Image from "next/image";
import React from "react";

const TopImagecard: React.FC<TopImagecards> = ({
  title,
  description,
  img,
  list,
  height,
}) => {
  return (
    <div className="rounded-lg shadow-md">
      <div
        className={`text-[#FFF] flex flex-col gap-2 md:gap-4 p-4 md:p-5 rounded-xl bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)]`}
      >
        {img && (
          <Image
            src={img}
            alt="Icon"
            width={32}
            height={32}
            className="md:w-[40px] md:h-[40px]"
            unoptimized={true}
          />
        )}
        <p
          className={`text-[16px] md:text-[20px] md:leading-[28px] leading-[20px] font-semibold ${
            height == "medium" ? "md:min-h-[60px]" : "min-h-[20px]"
          }`}
        >
          "{title}"
        </p>

        {description && (
          <p
            className={`text-[14px] leading-[20px] md:text-[16px] md:leading-6 font-[300] ${
              height ? "md:min-h-[100px]" : "md:min-h-[40px]"
            }`}
          >
            {description}
          </p>
        )}
        {list && (
          <ol
            className={height == "medium" ? "md:min-h-[260px]" : "min-h-[40px]"}
          >
            {list?.map((item, index) => (
              <li
                key={index}
                className="text-[14px] leading-[17px] md:text-[16px] md:leading-[24px] list-disc ml-4 pb-1"
              >
                {item}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default TopImagecard;
