import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductWhyThisMattersData } from "./types";

/**
 * "Why This Matters" — Figma 1886:41780 (Sales), 1943:71149 (Purchase).
 *
 * Three centred items, each a 48px filled circle with a white glyph.
 * The violet is a one-off across the product pages, so it stays local rather
 * than becoming a global token.
 */
const TONE = {
  accent: "bg-accent",
  violet: "bg-[#8B5CF6]",
  success: "bg-success",
} as const;

export function ProductWhyThisMatters({
  data,
}: {
  data: ProductWhyThisMattersData;
}) {
  return (
    <Section spacing="md">
      <div className="flex flex-col items-center gap-8 lg:gap-10">
        <SectionHeading
          title={data.title}
          accentTitle={data.accentTitle}
          as="h2"
        />

        <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
          {data.items.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-pill",
                  TONE[item.tone]
                )}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </span>

              <p className="text-body font-semibold text-content">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default ProductWhyThisMatters;
