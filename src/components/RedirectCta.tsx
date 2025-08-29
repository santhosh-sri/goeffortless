import Image from "next/image";
import React from "react";

const RedirectCta = ({
  setShowForm,
  ctaText,
}: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  ctaText?: string;
}) => {
  return (
    <button
      onClick={() => {
        setShowForm(true);
      }}
      id="democta"
      className="
        group
        relative
        bg-[#F08B32]
        py-[12px]
        px-[30px]
        rounded
        text-[14px]
        md:text-[16px]
        text-white
        font-[500]
        cursor-pointer
        flex
        items-center
        justify-center
        md:w-fit
        max-md:w-full
        overflow-hidden
        transition-all
        duration-500
        ease-in-out
        md:hover:!pr-[50px]
      "
    >
      <span className="relative z-10">{ctaText}</span>
      <div
        className="
          absolute
          max-md:hidden
          right-2
          flex
          items-center
          justify-center
          transition-all
          duration-500
          ease-in-out
          opacity-0
          translate-x-4
          group-hover:opacity-100
          group-hover:translate-x-0
          pr-4
        "
      >
        <Image
          src="/arrow-white.svg"
          alt="arrow"
          width={16}
          height={16}
          unoptimized={true}
          className=""
        />
      </div>
    </button>
  );
};

export default RedirectCta;
