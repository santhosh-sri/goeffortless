import { TimelineStep } from "@/interface/type";
import Image from "next/image";
import React from "react";

const Timeline: React.FC<TimelineStep> = ({ dayLabel, title, points }) => {
  return (
    <div className="relative pb-8 max-md:pb-4 flex flex-col md:items-center md:justify-center">
      <div className="flex md:flex-col-reverse mb-4 md:items-center gap-2 max-md:ml-[-8px]">
        {/* Circle for the tick icon */}
        <Image
          src="/whiteTickk.svg"
          alt="tick"
          width={16}
          height={16}
          className="z-[999]"
          unoptimized={true}
        />

        {/* Day Label */}
        <h4 className="text-[#F08B32] text-[16px] md:text-[18px] font-semibold">
          {dayLabel}
        </h4>
      </div>

      {/* Card for title and points */}
      <div className="rounded-xl bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] p-5 text-white border border-gray-700 max-md:ml-6 md:ml-6 md:min-h-[210px]">
        <h5 className="font-semibold text-[16px] md:text-[20px] mb-2 leading-[24px] text-center">
          {title}
        </h5>
        <ol className="list-disc list-inside text-sm space-y-1 text-gray-300">
          {points.map((point, idx) => (
            <li
              className="md:text-[18px] text-[14px] leading-5 md:leading-[24px] font-[300]"
              key={idx}
            >
              {point}
            </li>
          ))}
        </ol>
      </div>
      <div className="absolute top-[45px] left-0 transform -translate-y-1/2 w-full h-px bg-gray-700 max-md:hidden "></div>

      {/* Connect lines for Desktop */}
      <div className="absolute top-[10%] left-0 transform -translate-x-1/2 w-px h-full bg-gray-700 md:hidden"></div>
    </div>
  );
};

export default Timeline;
