import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { contractsBillingModes as data } from "@/data/contracts";

/**
 * "Two Modes. One Platform." — Figma node 1985:112327.
 *
 * The band that replaces the Reality Check on this page. Two billing workflows
 * separated by a vertical dashed rule, each a numbered step card followed by a
 * rationale and a capability checklist. The rule is a CSS dashed border rather
 * than an exported asset, and collapses to a horizontal rule when the columns
 * stack — the same treatment as the sibling sections on Sales and Purchases.
 */
export function BillingModesSection() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
          eyebrowTone="subtle"
          descriptionSize="lg"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
          {data.modes.map((mode, index) => (
            <div
              key={mode.title}
              className={cn(
                "flex flex-col gap-8",
                index === 0
                  ? "lg:pr-12"
                  : "border-t border-dashed border-line pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
              )}
            >
              <h3
                className={cn(
                  "text-center text-[20px] font-semibold leading-[26px]",
                  mode.accent ? "text-accent" : "text-content"
                )}
              >
                {mode.title}
              </h3>

              {/* 1985:112340: a white 18px card with the 0/4/8 lift, 20px
                  padding, holding the dashed step box and the two notes.
                  `shadow-panel`, not `shadow-lift`: lift's 4px offset equals
                  half its blur, so nothing reaches above the box and this
                  borderless white card had no top edge against the page. */}
              {/* `flex-1` so both cards run to the tallest column's height:
                  the two modes list different numbers of steps and supports,
                  and the shadow makes the shorter card's early end obvious. */}
              <div className="flex flex-1 flex-col gap-5 rounded-card bg-surface p-5 shadow-panel">
                <ol className="flex flex-col gap-4 rounded-lg border border-dashed border-line p-5">
                  {mode.steps.map((step, stepIndex) => (
                    <li key={step} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-accent/20 text-label font-medium text-accent"
                      >
                        {stepIndex + 1}
                      </span>
                      <span className="text-label font-medium text-content">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <p className="text-body font-medium text-accent">
                      {data.reasonLabel}
                    </p>
                    <p className="text-body text-content">{mode.reason}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-body font-medium text-accent">
                      {data.supportsLabel}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {mode.supports.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Image
                            src="/assets/shared/check-circle.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="h-6 w-6 shrink-0"
                          />
                          <span className="text-[20px] leading-6 text-content">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default BillingModesSection;
