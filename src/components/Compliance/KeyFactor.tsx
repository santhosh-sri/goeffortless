import Image from "next/image";
import React from "react";
import { COMPLIANCE_CARD } from "./card";

const KeyFactor = ({ keyFactor }: { keyFactor: string[] }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {keyFactor.map((item, index) => (
        <div key={index} className={`${COMPLIANCE_CARD} p-5`}>
          <div className="flex items-center gap-3">
            <Image
              src={"/arrow-rights.svg"}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
              unoptimized
            />
            <p className="text-label text-content md:text-body">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyFactor;
