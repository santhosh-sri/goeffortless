import React from "react";
import Image from "next/image";
import TdsTableComponent from "./TdsTableComponent";
import { COMPLIANCE_CARD, COMPLIANCE_CARD_ACCENT } from "./card";

const Bullet = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <Image
      src={"/arrow-rights.svg"}
      alt=""
      width={20}
      height={20}
      className="h-5 w-5 shrink-0"
      unoptimized
    />
    <p className="text-label text-content-muted md:text-body">{text}</p>
  </div>
);

const TdsMatrix = (props: any) => {
  const { tableData, tdsMatrix } = props;

  return (
    <div className="flex w-full flex-col gap-6 lg:gap-10">
      <TdsTableComponent
        tableHeader={tableData?.tableHeader}
        tableBody={tableData?.tableBody}
        tdsMatrix={Object.keys(tdsMatrix)?.length > 0}
      />
      {tdsMatrix && Object.keys(tdsMatrix)?.length > 0 && (
        <>
          <div className={COMPLIANCE_CARD}>
            <div className="flex flex-col gap-3 p-5">
              <h3 className="text-body font-medium text-content md:text-body-lg">
                Threshold Rule Clarification
              </h3>
              <p className="text-label text-content-muted md:text-body">
                Once the total payments to a vendor cross the threshold in the
                financial year, TDS applies on the entire applicable amount, not
                just the excess.
              </p>
            </div>
          </div>
          <div className={COMPLIANCE_CARD}>
            <div className="flex flex-col gap-4 p-5">
              <h3 className="text-body font-medium text-content md:text-body-lg">
                Higher Rate if PAN Not Linked to Aadhaar
              </h3>
              <p className="text-label text-content-muted md:text-body">
                If the vendor&apos;s PAN is missing or inoperative:
              </p>
              <div className={`${COMPLIANCE_CARD_ACCENT} bg-bg-subtle`}>
                <div className="flex flex-col gap-3 p-5">
                  <p className="text-label text-content-muted md:text-body">
                    TDS must be deducted at{" "}
                    <span className="font-medium text-accent">
                      20% or higher rate (Sec 206AA / 206AB)
                    </span>
                  </p>
                  <p className="text-label text-content-muted md:text-body">
                    Effortless automatically flags &amp; applies this if PAN
                    validation is enabled.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`${COMPLIANCE_CARD} p-5`}>
              <div className="flex flex-col gap-4">
                <h3 className="text-body font-medium text-content md:text-body-lg">
                  Compliance Requirements
                </h3>
                {tdsMatrix?.requirements.map((item: string, index: number) => (
                  <Bullet key={index} text={item} />
                ))}
              </div>
            </div>
            <div className={`${COMPLIANCE_CARD} p-5`}>
              <div className="flex flex-col gap-4">
                <h3 className="text-body font-medium text-content md:text-body-lg">
                  Consequences of Non-Compliance
                </h3>
                {tdsMatrix?.consequences.map((item: string, index: number) => (
                  <Bullet key={index} text={item} />
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
