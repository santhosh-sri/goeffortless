import React, { useEffect, useState } from "react";
import { CertificationData } from "@/interface/type";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  certificate: CertificationData[];
}

/**
 * Certification / award badge grid with a lightbox. Tiles are white cards
 * with a `line` stroke; the lightbox is a scrim over the page.
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
              "flex cursor-pointer items-center justify-center rounded-xl border border-line bg-surface p-10 transition-shadow duration-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
              item?.big && "md:col-span-2 md:row-span-2",
              item?.col && "md:col-span-2 md:row-span-1"
            )}
          >
            <Image
              src={item?.button}
              alt="certification"
              width={item?.big ? 280 : 200}
              height={item?.big ? 280 : 80}
              className={cn(
                "h-auto max-w-full object-contain",
                // Every badge except the ISO seal is white artwork drawn for
                // the dark site; flatten those to ink so they read on white.
                !item?.big && "brightness-0 opacity-70"
              )}
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
