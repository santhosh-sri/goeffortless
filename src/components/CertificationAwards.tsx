import React, { useEffect, useState } from "react";
import { CertificationData } from "@/interface/type";
import Image from "next/image";

interface Props {
  certificate: CertificationData[];
}

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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mx-auto p-3 md:p-5">
        {certificate?.map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item?.view)}
            className={`flex items-center justify-center bg-[#15181B] rounded-3xl p-10 cursor-pointer border border-[#2A2D31]
              ${item?.big ? "md:row-span-2 md:col-span-2" : ""} ${
              item?.col ? "md:row-span-1 md:col-span-2" : ""
            }`}
          >
            <Image
              src={item?.button}
              alt="certification"
              width={item?.big ? 280 : 200}
              height={item?.big ? 280 : 80}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#15181B] backdrop-blur-md z-[999]"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex flex-col items-center">
            <div className="p-2 w-full flex justify-end">
              <Image
                onClick={() => setSelectedImage(null)}
                className="cursor-pointer"
                src="/round-close.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </div>
            <Image
              src={selectedImage}
              alt="overlay"
              width={800}
              height={700}
              className="object-contain h-[90%]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationGrid;
