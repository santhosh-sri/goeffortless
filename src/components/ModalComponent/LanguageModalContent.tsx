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
        <button type="button" onClick={onClose} aria-label="Close">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="rgb(var(--color-bg-subtle))" />
            <path d="M10 10L22 22M10 22L22 10" stroke="rgb(var(--color-danger))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-sm font-semibold text-accent md:text-heading-md">
          {data.title}
        </h2>
        <p className="my-0 text-body-lg text-content-muted md:text-heading-sm md:font-normal">
          {data.subtitle}
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 place-items-center">
          {data.options.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className="
              flex h-auto w-full max-w-[416px] flex-col items-center justify-center gap-2 rounded-xl border border-line bg-bg-subtle p-6 transition-colors hover:border-accent hover:bg-accent-subtle md:h-[270px]
            "
            >
              <Image src={item.flag} alt="flag" width={48} height={48} />
              <span className="text-body font-medium text-content md:text-body-lg">
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
