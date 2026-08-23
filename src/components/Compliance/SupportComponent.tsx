import React from "react";
import Image from "next/image";
import Democta from "../Democta";
import Button from "../ui/Button";
import { TrackDataProps } from "@/interface/type";

const SupportComponent = ({ keyvalues }: { keyvalues: TrackDataProps[] }) => {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <Democta customStyle={true} ctaText={"Book Demo"} />
        <Button
          variant="secondary"
          size="hero"
          calBooking
          leadingIcon={
            <Image
              src={"/supportcall.svg"}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
              unoptimized
            />
          }
          className="w-full font-semibold sm:w-auto"
        >
          Talk to an Expert (CA Support Available)
        </Button>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-x-[120px] gap-y-6">
        {keyvalues.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1 text-center">
            <p className="text-heading-md font-bold text-accent md:text-heading-lg">
              {item?.title}
            </p>
            <p className="text-label text-content-muted md:text-body">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-label text-content-subtle md:text-body">
        TDS automation software • GST reconciliation app • Purchase invoice app
        • Expense claim software India • Multi-GSTIN accounting • Cost centre
        reporting • Vendor bill booking • Tally integrated finance automation
      </p>
    </div>
  );
};

export default SupportComponent;
