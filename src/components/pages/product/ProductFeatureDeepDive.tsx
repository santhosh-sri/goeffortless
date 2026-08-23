import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductFeatureHeading, ProductFeatureRow } from "./types";

/**
 * "Feature Deep Dive" — Figma 1699:17373 + 1699:17380 (Sales), 1943:64659 +
 * 1943:64666 (Purchase), and the equivalent frames on the other product pages
 * (all inside 1868:34313).
 *
 * Heading block, then rows 48px apart, 40px below the heading. Each row is a
 * 636px media card and a 636px copy column 40px apart, media alternating
 * left/right starting on the left, copy centred on the card. Rows are 520px
 * tall except where a card is taller (`mediaHeight`).
 *
 * The media card is the same 12px-radius white card as the hero, with the
 * palette's card shadow (0 4 16 black @ 10% — Figma's render of 1699:17382
 * darkens the margin by ~6% at the bottom edge). Each export is cropped to the
 * card itself. The earlier exports carried Figma's 16px shadow margin, baked
 * onto the grey band colour, which drew a hard grey halo around every image on
 * this white section — that halo is what read as a heavy shadow.
 *
 * Copy (1699:20068): 16/20 medium accent eyebrow, 8px, 24px medium title;
 * 20px to the body; 20/28 muted paragraphs 20px apart.
 */
export function ProductFeatureDeepDive({
  heading,
  rows,
}: {
  heading: ProductFeatureHeading;
  rows: ProductFeatureRow[];
}) {
  return (
    // The deep dive is an inner 1312px frame with no fill of its own, so it
    // sits on the page frame's #F5F5F7 — the grey band, not white.
    <Section tone="subtle" spacing="lg">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          accentTitle={heading.accentTitle}
          description={heading.description}
          // 1699:17373: "Feature" regular + bold accent, white stroke-less
          // chip, 20 to the description.
          eyebrowTone="plain"
          headingClassName="font-normal"
          descriptionGap="sm"
          descriptionClassName="md:leading-6"
        />

        <ul className="flex flex-col gap-10 lg:gap-12">
          {rows.map((row, index) => {
            const mediaRight = index % 2 === 1;

            return (
              <li
                key={row.title}
                className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10"
              >
                <div
                  className={cn("w-full lg:w-1/2", mediaRight && "lg:order-2")}
                >
                  <Image
                    src={row.media}
                    alt={row.mediaAlt}
                    width={636}
                    height={row.mediaHeight ?? 520}
                    loading="lazy"
                    sizes="(min-width: 1024px) 636px, 100vw"
                    className="h-auto w-full rounded-xl"
                  />
                </div>

                <div
                  className={cn(
                    "flex w-full flex-col gap-5 lg:w-1/2",
                    mediaRight && "lg:order-1"
                  )}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-body font-medium text-accent">
                      {row.eyebrow}
                    </p>

                    <h3 className="text-heading-sm font-medium text-content">
                      {row.title}
                    </h3>
                  </div>

                  {row.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-body text-content-muted md:text-body-lg"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {row.checks && (
                    <ul className="mt-2 flex flex-col gap-3">
                      {row.checks.map((check) => (
                        <li key={check} className="flex items-center gap-3">
                          <Image
                            src="/assets/shared/check-circle.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="h-5 w-5 shrink-0"
                          />
                          <span className="text-body text-content md:text-body-lg">
                            {check}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export default ProductFeatureDeepDive;
