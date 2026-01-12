"use client";

import Image from "next/image";
import { ChangeEvent } from "react";

type SearchBarProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ onChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-[640px] mx-auto my-6">
      <div className="flex gap-2 items-center bg-[#2626264D] text-white rounded-lg px-3 py-2.5 shadow-md">
        <Image src={"/search-bar.svg"} alt="" width={20} height={20} />
        <input
          type="text"
          placeholder="Search questions..."
          onChange={onChange}
          className="bg-transparent focus:outline-none w-full text-sm placeholder-[#E5E5E580]"
        />
      </div>
    </div>
  );
}
