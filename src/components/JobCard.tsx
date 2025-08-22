// components/JobCard.tsx
import { JobCardList } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";

const JobCard: FC<JobCardList> = ({
  title,
  type,
  mode,
  location,
  description,
  url,
  isMobile,
}) => {
  const jobHeader = [
    {
      title: "Full time",
      img: "fulltime.svg",
    },
    {
      title: "On-Site",
      img: "onsite.svg",
    },
    {
      title: "Chennai",
      img: "location.svg",
    },
  ];
  return (
    <div className="max-md:p-5 rounded-xl md:p-6 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] text-white shadow-md w-full space-y-4">
      <h3 className="md:text-[18px] text-[16px] font-[400] leading-[22px]">
        {title}
      </h3>
      <div className="flex gap-4">
        {jobHeader.map((item, index) => (
          <div
            className="bg-[#303032] rounded-lg md:px-2 md:py-1 p-[7px] flex md:gap-2 gap-1 items-center"
            key={index}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={13}
              height={13}
              className="w-[13px] h-[13px]"
            />
            <span className="text-[#E4E4E7] md:text-[14px] text-[12px] font-[300] leading-[20px]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[#E4E4E7] md:text-[16px] text-[13px] font-[300] leading-[20px]">
        {description}
      </p>
      <div
        className="flex items-center gap-1  max-md:!mt-8 md:!mb-6"
        onClick={() => window.open(url, "_blank")}
      >
        <p className="md:text-[#E4E4E7] max-md:text-[#F08B32] text-[13px] md:text-[16px] font-[300] leading-[20px]">
          Explore Now
        </p>
        <Image
          src={isMobile ? "/secondary-arrow.svg" : "/arrow-white.svg"}
          alt="arrow"
          width={14}
          height={10}
        />
      </div>
    </div>
  );
};

export default JobCard;
