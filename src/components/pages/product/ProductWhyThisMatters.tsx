import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductWhyThisMattersData } from "./types";

/**
 * "Why This Matters" — Figma 1886:41780 (Sales), 1943:71149 (Purchase).
 *
 * Three centred 220px items, each a 64px filled circle with a 32px white glyph.
 *
 * Both frames sample #F08B32 / #28B463 / #8A38F5. Orange and violet are the
 * palette's Orange and Purple tokens; the green is deliberately not the
 * #16BA84 `success` token used for status elsewhere, and stays local.
 */
const TONE = {
  accent: "bg-accent",
  violet: "bg-palette-purple",
  success: "bg-[#28B463]",
} as const;

export function ProductWhyThisMatters({
  data,
}: {
  data: ProductWhyThisMattersData;
}) {
  return (
    // Component 969: white, 80px padding, 48 between heading and the trio.
    <Section spacing="lg">
      <div className="flex flex-col items-center gap-8 lg:gap-12">
        <SectionHeading
          title={data.title}
          accentTitle={data.accentTitle}
          as="h2"
          headingClassName="font-medium"
        />

        {/*
          Figma lays these out as fixed 220px items 180px apart rather than as
          thirds of the row, which keeps the outer two well inside the gutters.
          The gap closes up at `md`, where three 220px items only just fit.
        */}
        <ul className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8 lg:gap-[180px]">
          {data.items.map((item) => (
            <li
              key={item.label}
              className="flex w-[220px] flex-col items-center gap-4 text-center"
            >
              <span
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-pill",
                  TONE[item.tone]
                )}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </span>

              <p className="text-[20px] font-semibold capitalize leading-6 text-content">
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
