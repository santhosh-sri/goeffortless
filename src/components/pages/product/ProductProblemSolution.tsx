import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductProblemSolutionData } from "./types";

/**
 * "Problem/Solution Split" — Figma 1864:24118 (Field Staff Claims) and
 * 1864:16668 (Buyer Portal), which are the same frame with different copy.
 *
 * Two columns separated by a vertical dashed rule: the status quo on the left,
 * the Effortless equivalent on the right, each a heading, a one-line subtitle
 * and a single image. The rule is a CSS dashed border rather than an exported
 * asset, and collapses to a horizontal rule when the columns stack.
 *
 * The band is white in Figma (`bg-white` on both frames), not the grey
 * `subtle` band. Only the first side's photo is a 12px-rounded rectangle; the
 * phone composite on the right is transparent around the devices and carries
 * no radius.
 *
 * The Sales page has its own richer version of this band (a chat card plus a
 * warning list), so that one stays under sales/ rather than folding extra
 * variants into this component.
 */
export function ProductProblemSolution({
  data,
}: {
  data: ProductProblemSolutionData;
}) {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          accentTitle={data.accentTitle}
          titleSuffix={data.titleSuffix}
          description={data.description}
          eyebrowTone="subtle"
          descriptionClassName="md:leading-6"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
          {data.sides.map((side, index) => (
            <div
              key={side.title}
              className={cn(
                "flex flex-col items-center gap-6",
                index === 0
                  ? "lg:pr-12"
                  : "border-t border-dashed border-line pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
              )}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <h3
                  className={cn(
                    "text-heading-sm font-semibold",
                    side.accent ? "text-accent" : "text-content"
                  )}
                >
                  {side.title}
                </h3>
                <p className="text-body text-content-muted">{side.subtitle}</p>
              </div>

              {/* Both sides share one box so the taller 3:4 photo does not
                  outgrow the wider phone composite; the photo letterboxes
                  inside it rather than being cropped. */}
              <div className="flex w-full max-w-[608px] items-center justify-center lg:aspect-[1016/896]">
                <Image
                  src={side.media.src}
                  alt={side.media.alt}
                  width={side.media.width}
                  height={side.media.height}
                  loading="lazy"
                  sizes="(min-width: 1024px) 608px, 100vw"
                  className={cn(
                    "h-auto w-full object-contain lg:h-full lg:w-auto",
                    index === 0 && "rounded-xl"
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ProductProblemSolution;
