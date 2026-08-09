import { LanguageModalConfig } from "@/interface/type";
import Image from "next/image";
import React from "react";

type DemoVideo = {
  id: string;
  title: string;
  subtitle: string;
  videoId: string;
};

type LanguageOption = {
  id: string;
  label: string;
  flag: string;
  value: string;
  videos?: DemoVideo[];
};

interface Props {
  data: LanguageModalConfig;
  onSelect: (language: LanguageOption) => void;
  onClose: () => void;
}

const LanguageModalContent: React.FC<Props> = ({ data, onSelect, onClose }) => {
  return (
    <div className="text-center p-8 flex flex-col gap-3">
      <div className="flex items-center justify-end">
        <button onClick={onClose} className="text-red-500 text-xl font-bold">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M10 10L22 22"
              stroke="#FF0000"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 22L22 10"
              stroke="#FF0000"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-[32px] font-medium bg-custom-gradient bg-clip-text text-transparent">
          {data.title}
        </h2>
        <p className="text-content text-lg md:text-2xl font-light my-0">
          {data.subtitle}
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 place-items-center">
          {data.options.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className="
              w-full max-w-[416px] h-auto md:h-[270px] rounded-xl bg-[#121317] p-6
              flex flex-col gap-2 items-center justify-center border border-white/10
            "
            >
              <Image src={item.flag} alt="flag" width={48} height={48} />
              <span className="text-base md:text-lg text-content">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageModalContent;
