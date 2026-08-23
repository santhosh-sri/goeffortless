import React from "react";
import { TrackDataProps } from "@/interface/type";
import { cn } from "@/lib/cn";
import { COMPLIANCE_CARD, COMPLIANCE_CARD_ACCENT } from "./card";

interface TrackData {
  trackData: TrackDataProps[];
}

const TrackSection: React.FC<TrackData> = ({ trackData }) => {
  return (
    <div className="flex w-full flex-col gap-6">
      {trackData.map((item, index) => (
        <div
          key={index}
          className={cn(index % 2 === 1 ? COMPLIANCE_CARD_ACCENT : COMPLIANCE_CARD)}
        >
          <div className="flex flex-col gap-3 p-5">
            <h3 className="text-body font-medium text-content md:text-body-lg">
              {item.title}
            </h3>
            <p className="text-label text-content-muted md:text-body">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackSection;
