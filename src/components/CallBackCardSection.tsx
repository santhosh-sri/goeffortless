import { CallBackcards } from "@/interface/type";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CallbackCardSection: React.FC<CallBackcards> = ({
  title,
  description,
  ctaText,
  subText,
  list,
  image,
  primary = false,
  redirectUrl,
  setShowForm = () => {},
  icon,
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
      return;
    }
    setShowForm(true);
  };

  return (
    <div className="rounded-lg shadow-md">
      <div className="text-[#FFF] flex flex-col justify-between gap-2 p-4 rounded-xl bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] md:h-[346px]">
        {image && (
          <Image
            src={image}
            alt={image}
            width={40}
            height={40}
            className="md:hidden"
          />
        )}
        {icon && (
          <div className="bg-white bg-opacity-10 p-2 block md:hidden h-[40px] w-[40px]">
            <Image src={icon} alt={"callback-icon"} width={24} height={24} />
          </div>
        )}
        <p className="text-[16px] md:text-[24px] md:leading-[30px] font-[500] leading-[23px] text-[#FFFFFF]">
          {title}
        </p>

        <p className="text-[14px] leading-[20px] md:text-[16px] font-[300] md:leading-6 md:min-h-[65px] pb-2">
          {description}
        </p>
        <ol className="ml-1">
          {list?.map((item, index) => (
            <li
              key={index}
              className="text-[13px] leading-[17px] md:text-[16px] font-[300] md:leading-[26px] list-disc ml-4 pb-1"
            >
              {item}
            </li>
          ))}
        </ol>
        <div className="mt-auto flex flex-col items-center gap-[8px]">
          <button
            onClick={handleClick}
            className={`group relative overflow-hidden transition-all duration-500 ease-in-out
            mt-4 py-2 px-4 rounded flex items-center justify-center
            text-[14px] md:text-[16px] font-[500] w-[100%]
            ${
              primary
                ? "bg-[#F08B32] text-white"
                : "border border-[#F08B32] text-[#F08B32]"
            }
          `}
          >
            <span className="relative flex items-center md:group-hover:translate-x-[-10px] transition-transform duration-300 ease-in-out">
              {ctaText}
              <span className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <Image
                  src="/arrow-white.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="block"
                  unoptimized={true}
                />
              </span>
            </span>
          </button>

          <p className="text-[13px] leading-[17px] md:text-[14px] font-[300] md:leading-6 text-center text-[#E4E4E7]">
            {subText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallbackCardSection;
