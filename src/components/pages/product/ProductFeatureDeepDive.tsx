import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductFeatureHeading, ProductFeatureRow } from "./types";

/**
 * "Feature Deep Dive" — Figma 1699:17373 + 1699:17380 (Sales), 1943:64659 +
 * 1943:64666 (Purchase), and the equivalent frames on the other product pages.
 *
 * Uniform 520px rows, media alternating left/right starting on the left,
 * 48px apart. Copy column: accent eyebrow, 24/30 semibold title, 20px muted
 * body paragraphs.
 *
 * Media ships as the per-row Figma export. Each row's decorative dot field is
 * ~2,600 individual <star> nodes in Figma — far past what is sane to emit as
 * DOM, and already baked into the export at the right position and opacity.
 */
export function ProductFeatureDeepDive({
  heading,
  rows,
}: {
  heading: ProductFeatureHeading;
  rows: ProductFeatureRow[];
}) {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          accentTitle={heading.accentTitle}
          description={heading.description}
        />

        <ul className="flex flex-col gap-10 lg:gap-12">
          {rows.map((row, index) => {
            const mediaRight = index % 2 === 1;

            return (
              <li
                key={row.title}
                className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12"
              >
                <div
                  className={cn("w-full lg:w-1/2", mediaRight && "lg:order-2")}
                >
                  <Image
                    src={row.media}
                    alt={row.mediaAlt}
                    width={645}
                    height={520}
                    loading="lazy"
                    sizes="(min-width: 1024px) 645px, 100vw"
                    className="h-auto w-full rounded-card"
                  />
                </div>

                <div
                  className={cn(
                    "flex w-full flex-col gap-3 lg:w-1/2",
                    mediaRight && "lg:order-1"
                  )}
                >
                  <p className="text-body font-semibold text-accent">
                    {row.eyebrow}
                  </p>

                  <h3 className="text-heading-sm font-semibold text-content">
                    {row.title}
                  </h3>

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
