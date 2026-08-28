import React, { useEffect, useState } from "react";
import { CertificationData } from "@/interface/type";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  certificate: CertificationData[];
}

/**
 * Certification / award badge grid with a lightbox. Per Figma 2903:28214 the
 * band is grey (#F5F5F7, set by the section's `bgColour`) and the tiles are
 * white cards with a #CECECF stroke — white in both themes, see below. The
 * lightbox is a scrim over the page.
 */
const CertificationGrid: React.FC<Props> = ({ certificate }: any) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
        {certificate?.map((item: any, index: number) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(item?.view)}
            aria-label="View certificate"
            className={cn(
              // The plate is deliberately theme-independent: these are
              // third-party marks in fixed brand colours, and on the dark
              // surface FICCI's black wordmark and IAMAI's tagline vanish
              // outright. A white chip keeps every badge on-brand and legible
              // in both themes, so the fill and stroke are pinned to the light
              // palette (#FFFFFF / #CECECF) rather than following the tokens.
              "flex cursor-pointer items-center justify-center rounded-xl border border-[#CECECF] bg-white p-10 transition-shadow duration-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
              item?.big && "md:col-span-2 md:row-span-2",
              item?.col && "md:col-span-2 md:row-span-1"
            )}
          >
            <Image
              src={item?.button}
              alt="certification"
              // Figma draws the ISO seal at 320 square inside its 460 tile.
              width={item?.big ? 320 : 200}
              height={item?.big ? 320 : 80}
              // Full-colour badges exported from Figma (2903:28214); they sit
              // on a white card, so no ink-flattening filter any more.
              className="h-auto max-w-full object-contain"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-content/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative flex h-full w-full flex-col items-center">
            <div className="flex w-full justify-end p-4">
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-content shadow-raised"
              >
                <Image src="/round-close.svg" alt="" width={24} height={24} />
              </button>
            </div>
            <Image
              src={selectedImage}
              alt="Certificate"
              width={800}
              height={700}
              className="h-[85%] w-auto rounded-xl bg-surface object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationGrid;
