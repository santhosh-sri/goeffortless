import { CaseStudyCardProps } from "@/interface/type";
import Image from "next/image";
import React from "react";

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  details,
  onReadMore,
}) => {
  return (
    <div
      className="flex flex-col gap-3 justify-between rounded-lg bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] p-5 cursor-pointer "
      onClick={onReadMore}
    >
      <div className="">
        <Image
          src={"/blur.png"}
          alt="r-arrow"
          height={64}
          width={144}
          className="h-[40px] md:h-[64px] blur-lg"
        />
      </div>
      <h2 className="font-medium text-white text-base md:text-xl leading-[100%] tracking-[0] mt-1">
        {title}
      </h2>
      <p className="font-light text-sm md:text-base text-white leading-[100%] tracking-[0]">
        {description}
      </p>
      <p className="flex items-center gap-1 mt-1">
        <span className="font-light text-[#F08B32] text-sm md:text-base leading-[100%] tracking-[1%]">
          Read more
        </span>
        <Image
          src={"/read-arrow.svg"}
          alt="r-arrow"
          height={16}
          width={16}
          className="h-[14px] md:h-4 w-[14px] md:w-4"
        />
      </p>
    </div>
  );
};
export default CaseStudyCard;