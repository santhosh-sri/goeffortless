import Image from "next/image";
import React from "react";

const TdsAutomation = ({ tdsAutomation }: { tdsAutomation: string[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tdsAutomation.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
        drop-shadow-sm p-5"
        >
          <div className="flex items-center gap-3">
            <Image
              src={"/tdstick.svg"}
              alt="resource"
              width={48}
              height={48}
              unoptimized
            />
            <p className="text-sm md:text-xl font-normal text-content">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TdsAutomation;
