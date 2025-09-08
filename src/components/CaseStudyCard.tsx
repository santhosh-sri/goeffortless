import { CaseStudyCardProps } from "@/interface/type";
import Image from "next/image";
import React, { useState } from "react";
import CaseStudy from "./CaseStudy";

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  details,
  onReadMore,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col border border-transparent gap-3 items-start rounded-lg bg-[linear-gradient(111deg,rgba(255,255,255,0.10)_-28.62%,rgba(255,255,255,0)_104.36%)] shadow-[0_2px_5px_-2px_rgba(16,25,40,0.06),0_2px_7px_0_rgba(16,25,40,0.05),0_0_0_1px_rgba(16,25,40,0.05)] p-5">
      <div className="">
        <Image
          src={"/blur.png"}
          alt="r-arrow"
          height={64}
          width={144}
          className="h-[64px] blur-lg"
        />
      </div>
      <h2 className="font-medium text-white text-xl leading-[100%] tracking-[0] mt-1">
        {title}
      </h2>
      <p className="font-light text-lg text-white leading-[100%] tracking-[0]">
        {description}
      </p>
      <p
        className="flex items-center gap-1 cursor-pointer"
        onClick={onReadMore}
      >
        <span className="font-light text-[#F08B32] text-[16px] leading-[100%] tracking-[1%]">
          Read more
        </span>
        <Image
          src={"/read-arrow.svg"}
          alt="r-arrow"
          height={16}
          width={16}
          className="h-4 w-4"
        />
      </p>
    </div>
  );
};
export default CaseStudyCard;