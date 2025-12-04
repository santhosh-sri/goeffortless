import React from "react";
import { TrackDataProps } from "@/interface/type";

interface TrackData {
  trackData: TrackDataProps[];
}

const TrackSection: React.FC<TrackData> = ({ trackData }) => {
  return (
    <div className="flex flex-col gap-6">
      {trackData.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm even:border-l-[8px] even:border-l-[#F08B32]"
        >
          <div className="p-5 flex flex-col gap-4">
            <h2 className="text-base md:text-xl text-white font-medium">
              {item.title}
            </h2>
            <p className="text-sm md:text-base font-normal text-[#E4E4E7]">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackSection;
