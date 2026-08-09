import React from "react";
import TdsTableComponent from "./TdsTableComponent";
import Image from "next/image";

const TdsMatrix = (props: any) => {
  const { tableData, tdsMatrix } = props;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <TdsTableComponent
          tableHeader={tableData?.tableHeader}
          tableBody={tableData?.tableBody}
          tdsMatrix={Object.keys(tdsMatrix)?.length > 0}
        />
      </div>
      {tdsMatrix && Object.keys(tdsMatrix)?.length > 0 && (
        <>
          <div
            className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm"
          >
            <div className="p-5 flex flex-col gap-4">
              <h2 className="text-base md:text-xl text-content font-medium">
                Threshold Rule Clarification
              </h2>
              <p className="text-sm md:text-base font-normal text-content-muted">
                Once the total payments to a vendor cross the threshold in the
                financial year, TDS applies on the entire applicable amount, not
                just the excess.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm"
          >
            <div className="p-5">
              <div className="flex flex-col gap-4">
                <h2 className="text-base md:text-xl text-content font-medium">
                  Higher Rate if PAN Not Linked to Aadhaar
                </h2>
                <p className="text-sm md:text-base font-normal text-content-muted">
                  If the vendor's PAN is missing or inoperative:
                </p>
                <div
                  className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm border-l-[8px] border-l-[#F08B32]"
                >
                  <div className="p-5 flex flex-col gap-4">
                    <p className="text-sm md:text-base font-normal text-content-muted">
                      TDS must be deducted at{" "}
                      <span className="text-accent">
                        20% or higher rate (Sec 206AA / 206AB)
                      </span>
                    </p>
                    <p className="text-sm md:text-base font-normal text-content-muted">
                      Effortless automatically flags & applies this if PAN
                      validation is enabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm p-5"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-base md:text-xl text-content font-medium">
                  Compliance Requirements
                </h3>
                {tdsMatrix &&
                  tdsMatrix?.requirements.map((item: string, index: number) => (
                    <div className="flex items-center gap-3" key={index}>
                      <Image
                        src={"/arrow-rights.svg"}
                        alt="resource"
                        width={20}
                        height={20}
                        className="transition-transform duration-300"
                        unoptimized
                      />
                      <p className="text-sm md:text-base font-normal text-content-muted">
                        {item}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className="rounded-lg border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm p-5"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-base md:text-xl text-content font-medium">
                  Consequences of Non-Compliance
                </h3>
                {tdsMatrix &&
                  tdsMatrix?.consequences.map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        src={"/arrow-rights.svg"}
                        alt="resource"
                        width={20}
                        height={20}
                        className="transition-transform duration-300"
                        unoptimized
                      />
                      <p className="text-sm md:text-base font-normal text-content-muted">
                        {item}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TdsMatrix;
