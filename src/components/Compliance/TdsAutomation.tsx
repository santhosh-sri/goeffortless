import React from "react";
import MaskIcon from "../ui/MaskIcon";
import { COMPLIANCE_CARD } from "./card";

const TdsAutomation = ({ tdsAutomation }: { tdsAutomation: string[] }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {tdsAutomation.map((item, index) => (
        <div key={index} className={`${COMPLIANCE_CARD} p-5`}>
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-icon-tile">
              <MaskIcon src="/tdstick.svg" className="h-7 w-7" />
            </span>
            <p className="text-label text-content md:text-body-lg md:leading-6">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TdsAutomation;
