import Image from "next/image";
import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { salesRealityCheck as data } from "@/data/sales";

/**
 * "The Reality Check" — Figma node 1699:2638.
 *
 * Two columns separated by a vertical dashed rule: the old way (a WhatsApp-style
 * chat card plus six red warning items) against the Effortless way (three phone
 * mockups). The rule is a CSS dashed border rather than an exported asset, and
 * it collapses to a horizontal rule when the columns stack.
 */
export function RealityCheckSection() {
  return (
    <Section tone="subtle" spacing="lg">
      <div className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
          {/* ---- The Old Way ---- */}
          <div className="flex flex-col items-center gap-6 lg:pr-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-heading-sm font-semibold text-content">
                {data.oldWay.title}
              </h3>
              <p className="text-body text-content-muted">
                {data.oldWay.subtitle}
              </p>
            </div>

            <div className="w-full rounded-xl bg-bg-inset p-4">
              <div className="flex items-start gap-3">
                <Image
                  src={data.oldWay.chat.avatar}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 rounded-pill object-cover"
                />
                <div className="flex flex-col gap-1.5">
                  <p className="text-body font-semibold text-accent">
                    {data.oldWay.chat.author}
                  </p>
                  <p className="w-fit rounded-lg bg-success/15 px-3 py-2 text-body text-content">
                    {data.oldWay.chat.message}
                  </p>
                  <p className="text-caption text-content-subtle">
                    {data.oldWay.chat.time}
                  </p>
                </div>
              </div>
            </div>

            <ul className="flex w-full flex-col gap-3">
              {data.oldWay.problems.map((problem) => (
                <li key={problem} className="flex items-center gap-3">
                  <Image
                    src="/assets/sales/reality-warning.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0"
                  />
                  <span className="text-body text-content">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- The Effortless Way ---- */}
          <div className="flex flex-col items-center gap-6 border-t border-dashed border-line pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-heading-sm font-semibold text-accent">
                {data.effortlessWay.title}
              </h3>
              <p className="text-body text-content-muted">
                {data.effortlessWay.subtitle}
              </p>
            </div>

            <Image
              src={data.effortlessWay.media}
              alt={data.effortlessWay.mediaAlt}
              width={560}
              height={500}
              loading="lazy"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full max-w-[560px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default RealityCheckSection;
