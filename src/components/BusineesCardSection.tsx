import Image from "next/image";
import React from "react";
import RedirectCta from "./RedirectCta";

const BusineesCardSection = ({
  setShowForm,
  isMobile,
}: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
}) => {
  const images = [
    "Tally1.png",
    "Gmail final .png",
    "WhatsApp Final.png",
    "Barath Bill Pay Final.png",
    "Icici Bank Logo.png",
    "GSTN Final.png",
  ];
  return (
    <div
      className={`flex flex-col gap-4 md:gap-[48px] items-center justify-center`}
    >
      {" "}
      <p className="text-[#E4E4E7] text-[13px] md:text-[24px] font-[400] leading-[24px] text-center">
        Designed to work seamlessly with tools you already use:
      </p>
      <div className="grid grid-cols-3 items-center lg:grid-cols-6">
        {images.map((image, index) => (
          <div className={`${isMobile ? "w-full" : "w-[218px] "}`} key={index}>
            <Image
              key={index}
              src={image}
              alt="Icon"
              width={isMobile ? 128 : 218}
              height={96}
              className="md:h-[96px] h-[60px]"
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-fit mt-4">
        <RedirectCta
          setShowForm={setShowForm}
          ctaText={
            isMobile
              ? "How SMBs Grow with Effortless"
              : "See how Indian SMBs are Growing Faster with Effortless"
          }
        />{" "}
      </div>
    </div>
  );
};

export default BusineesCardSection;
