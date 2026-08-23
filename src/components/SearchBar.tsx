"use client";

import { ChangeEvent } from "react";
import MaskIcon from "./ui/MaskIcon";

type SearchBarProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ onChange }: SearchBarProps) {
  return (
    <div className="mx-auto w-full max-w-[640px]">
      <label className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
        <MaskIcon src="/search-bar.svg" tone="muted" className="h-5 w-5" />
        <input
          type="search"
          placeholder="Search questions..."
          aria-label="Search questions"
          onChange={onChange}
          className="w-full bg-transparent text-body text-content placeholder:text-content-subtle focus:outline-none"
        />
      </label>
    </div>
  );
}
