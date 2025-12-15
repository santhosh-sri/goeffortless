import React from "react";
import Democta from "../Democta";
import { TrackDataProps } from "@/interface/type";
import Image from "next/image";
import { CalcomConfig } from "@/utils/calConfig";

const SupportComponent = ({ keyvalues }: { keyvalues: TrackDataProps[] }) => {
  return (
    <div className="flex flex-col gap-10 pt-4">
      <div className="flex justify-center items-center flex-wrap gap-8">
        <Democta customStyle={true} ctaText={"Book Demo"} />
        <button
          id="democta"
          className="py-[14px] max-md:w-full cursor-pointer border border-[#F08B32] text-[#F08B32] font-medium px-5 rounded flex items-center justify-center text-[14px]"
          {...CalcomConfig}
        >
          <span className="flex items-center gap-2">
            <span className="">
              <Image
                src={"/supportcall.svg"}
                alt="tel"
                width={16}
                height={16}
                unoptimized
              />
            </span>
            <span className="whitespace-nowrap ">
              Talk to an Expert (CA Support Available)"
            </span>
          </span>
        </button>
      </div>
      <div className="flex justify-center items-center gap-x-[120px] gap-y-6 flex-wrap">
        {keyvalues.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-[#F08B32] font-normal text-3xl">
              {item?.title}
            </h2>
            <p className="text-[#E4E4E7] text-sm md:text-base font-normal">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[#E4E4E7] text-sm md:text-base font-light text-center">
          TDS automation software • GST reconciliation app • Purchase invoice
          app • Expense claim software India • Multi-GSTIN accounting • Cost
          centre reporting • Vendor bill booking • Tally integrated finance
          automation
        </p>
      </div>
    </div>
  );
};

export default SupportComponent;
