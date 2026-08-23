import { TrackDataProps } from "@/interface/type";
import Image from "next/image";
import React from "react";
import { parseCms } from "@/lib/cmsHtml";
import { COMPLIANCE_CARD } from "./card";

/**
 * Recolours white artwork to the accent orange (#F08B32). Used for the TDS
 * section glyphs (/194A.svg …), which mix filled silhouettes with cut-outs
 * and so cannot be used as a mask the way plain glyph icons can.
 */
export const TINT_ACCENT =
  "[filter:brightness(0)_saturate(100%)_invert(63%)_sepia(49%)_saturate(1364%)_hue-rotate(337deg)_brightness(98%)_contrast(92%)]";

const TdsApply = ({ tdsApply }: { tdsApply: TrackDataProps[] }) => {
  return (
    <div
      className={`grid w-full grid-cols-1 gap-6 ${
        tdsApply?.length > 4 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {tdsApply?.map((item, index) => (
        <div key={index} className={`${COMPLIANCE_CARD} p-5`}>
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-icon-tile">
              <Image
                src={item.icon || "/tdstick.svg"}
                alt=""
                width={48}
                height={48}
                className={`h-12 w-12 ${TINT_ACCENT}`}
                unoptimized
              />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-body font-medium text-content md:text-body-lg">
                {item?.title}
              </h3>
              {item.desc && (
                <p className="text-label text-content-muted">
                  {parseCms(item.desc)}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TdsApply;
