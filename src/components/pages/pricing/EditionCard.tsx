import Image from "next/image";
import React from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { PricingEdition } from "@/data/pricingDetail";

/**
 * Edition (Grow / Scale) card — Figma "Component 1317" / "1318"
 * (2410:58351 / 2410:58402).
 *
 * White card, 12px radius, raised shadow, 32/24 padding. The featured edition
 * adds the accent stroke and the "Most Complete" ribbon hanging 16px above
 * the top edge. Both editions share the tinted "Book Demo →" CTA — neither is
 * drawn as a solid primary button.
 */
const Tick = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M16 5.5 8 13.5l-4-4"
      stroke="rgb(var(--color-accent))"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Hollow 20px marker for an optional add-on — Figma 2514:80584. */
const Hollow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle
      cx="10"
      cy="10"
      r="7.25"
      stroke="rgb(var(--color-border-strong))"
      strokeWidth="1.5"
    />
  </svg>
);

export function EditionCard({ plan }: { plan: PricingEdition }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col justify-between gap-5 rounded-xl bg-surface px-6 py-8 shadow-card-raised",
        plan.featured ? "border border-accent" : "border border-transparent"
      )}
    >
      {plan.ribbon && (
        <span className="absolute -top-4 left-6 rounded-sm bg-accent px-4 py-2 text-label font-medium text-content-on-accent">
          {plan.ribbon}
        </span>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-heading-md font-semibold capitalize text-content">
            {plan.name}
          </h3>

          <div className="flex flex-wrap items-end justify-between gap-3">
            <span className="flex items-center gap-3">
              <Image
                src={plan.icon}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0"
              />
              <span className="text-[40px] font-bold leading-[48px] text-accent lg:text-[48px] lg:leading-[56px]">
                {plan.price}
              </span>
            </span>
            <span className="text-[13px] font-bold leading-4 text-content-muted">
              {plan.users}
            </span>
          </div>

          <p className="text-caption leading-4 tracking-[-0.2px] text-content-muted">
            {plan.terms}
          </p>

          <p className="rounded-sm bg-bg-subtle p-2 text-label leading-5 text-content">
            {plan.setup}
          </p>
        </div>

        {/* Each include row sits on its own dashed rule (Figma 2410:58380). */}
        <dl className="flex flex-col gap-4">
          {plan.includes.map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-2 border-b border-dashed border-line pb-4"
            >
              {row.optional ? <Hollow /> : <Tick />}
              <dt className="shrink-0 whitespace-nowrap text-body text-content-muted">
                {row.label}
              </dt>
              <span
                aria-hidden="true"
                className="mx-1 h-0 min-w-4 flex-1 self-center border-b border-dotted border-line"
              />
              <dd className="shrink-0 whitespace-nowrap text-body font-semibold text-content">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-[13px] leading-4 text-content-muted">
          {plan.extraUsers}
        </p>
      </div>

      {/* No resting arrow — it slides in on hover, as on every other CTA. */}
      <Button
        calBooking
        variant="tint"
        fullWidth
        className="h-10 min-h-0 rounded-lg px-4 py-3 text-[13px] font-bold leading-4"
      >
        {plan.cta}
      </Button>
    </div>
  );
}

export default EditionCard;
