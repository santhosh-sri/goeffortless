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
    <Section tone="subtle" spacing="lg">
      <div className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
          {data.modes.map((mode, index) => (
            <div
              key={mode.title}
              className={cn(
                "flex flex-col gap-6",
                index === 0
                  ? "lg:pr-12"
                  : "border-t border-dashed border-line pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
              )}
            >
              <h3
                className={cn(
                  "text-center text-heading-sm font-semibold",
                  mode.accent ? "text-accent" : "text-content"
                )}
              >
                {mode.title}
              </h3>

              {/* Numbered steps */}
              <ol className="flex flex-col gap-4 rounded-card border border-line-subtle p-5">
                {mode.steps.map((step, stepIndex) => (
                  <li key={step} className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-accent-subtle text-body font-semibold text-accent"
                    >
                      {stepIndex + 1}
                    </span>
                    <span className="text-body text-content">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="flex flex-col gap-2">
                <p className="text-body font-semibold text-accent">
                  {data.reasonLabel}
                </p>
                <p className="text-body text-content-muted">{mode.reason}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-body font-semibold text-accent">
                  {data.supportsLabel}
                </p>
                <ul className="flex flex-col gap-3">
                  {mode.supports.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Image
                        src="/assets/shared/check-circle.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 shrink-0"
                      />
                      <span className="text-body text-content md:text-body-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default BillingModesSection;
