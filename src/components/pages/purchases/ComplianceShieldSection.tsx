import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { purchasesComplianceShield as data } from "@/data/purchases";

/**
 * "The Compliance Shield" — Figma node 1943:64560.
 *
 * This is the one band that differs from the shared product-page template: the
 * Sales page runs its Reality Check here instead. Two columns separated by a
 * vertical dashed rule — a vendor bill screenshot on the left, four filled
 * status cards on the right. The rule is a CSS dashed border rather than an
 * exported asset, and it collapses to a horizontal rule when the columns stack.
 *
 * See the note in src/data/purchases.ts for why the four card colours are
 * literals rather than tokens.
 */
const TONE = {
  green: "bg-[#28B463]",
  orange: "bg-[#F1923E]",
  blue: "bg-[#3B82F6]",
  purple: "bg-[#8A38F5]",
} as const;

export function ComplianceShieldSection() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
          {/* ---- Before: the manual upload ---- */}
          <div className="flex flex-col items-center gap-6 lg:pr-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-heading-sm font-semibold text-content">
                {data.before.title}
              </h3>
              <p className="text-body text-content-muted">
                {data.before.subtitle}
              </p>
            </div>

            <Image
              src={data.before.media}
              alt={data.before.mediaAlt}
              width={data.before.mediaWidth}
              height={data.before.mediaHeight}
              loading="lazy"
              sizes="(min-width: 1024px) 616px, 100vw"
              className="h-auto w-full rounded-card"
            />
          </div>

          {/* ---- After: the automated checks ---- */}
          <div className="flex flex-col items-center gap-6 border-t border-dashed border-line pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-heading-sm font-semibold text-accent">
                {data.after.title}
              </h3>
              <p className="text-body text-content-muted">
                {data.after.subtitle}
              </p>
            </div>

            <ul className="flex w-full flex-col gap-4">
              {data.after.checks.map((check) => (
                <li
                  key={check.title}
                  className={cn(
                    "flex items-start gap-3 rounded-card p-4",
                    TONE[check.tone]
                  )}
                >
                  <Image
                    src={check.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />

                  <div className="flex flex-col gap-1">
                    <p className="text-body font-semibold text-white">
                      {check.title}
                    </p>
                    <p className="text-[14px] leading-[20px] text-white/90">
                      {check.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ComplianceShieldSection;
