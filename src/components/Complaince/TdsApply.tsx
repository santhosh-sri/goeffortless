import { TrackDataProps } from "@/interface/type";
import Image from "next/image";
import React from "react";

const TdsApply = ({ tdsApply }: { tdsApply: TrackDataProps[] }) => {
  return (
    <div
      className={`grid grid-cols-1 ${
        tdsApply?.length > 4 ? "md:grid-cols-3" : "md:grid-cols-2"
      } gap-6`}
    >
      {tdsApply?.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm p-5"
        >
          <div className="flex items-center gap-4">
            <Image
              src={item.icon || "/tdstick.svg"}
              alt="resource"
              width={48}
              height={48}
              unoptimized
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-white font-medium text-base md:text-xl">
                {item?.title}
              </h2>
              <p className="text-[#E4E4E7] text-sm font-light">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TdsApply;
