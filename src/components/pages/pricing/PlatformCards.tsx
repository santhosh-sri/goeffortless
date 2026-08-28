import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import Badge from "@/components/ui/Badge";
import type { PricingPlatform } from "@/data/pricing";

/**
 * The two platform cards — Figma component 1329/1330, used both on /pricing
 * and at the top of each pricing detail page.
 *
 * Orange header bar carrying the product name and a filled green chip, then the
 * flow line in a tinted box, then the starting price.
 *
 * On /pricing the whole card is the link through to that platform's detail
 * page — the circular arrow reads as the affordance but is decorative, so the
 * hit area is the card rather than a 44px target in its corner. A detail page
 * renders its own card with `linked={false}`: it is already the destination, so
 * it drops both the arrow and the navigation.
 */
export function PlatformCards({
  platforms,
  linked = true,
}: {
  platforms: PricingPlatform[];
  /** Whether each card navigates to its detail page. Off on the detail pages. */
  linked?: boolean;
}) {
  // /pricing shows both cards side by side (646px each); a detail page shows
  // only its own, and Figma draws that one full-bleed at 1312 rather than
  // leaving the second column empty (e.g. 2410:59310 on the procurement page).
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-5",
        platforms.length > 1 && "lg:grid-cols-2"
      )}
    >
      {platforms.map((platform) => {
        const body = (
          <>
            <div className="flex items-center justify-between gap-3 bg-accent px-5 py-3.5">
              <p className="text-body font-semibold text-white">
                {platform.name}
              </p>
              <Badge tone="success">{platform.chip}</Badge>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <h3 className="text-heading-sm font-semibold text-content">
                {platform.title}
              </h3>

              <p className="rounded-sm bg-bg-inset px-4 py-3 text-[14px] leading-[22px] text-content-muted">
                {platform.flow}
              </p>

              <div className="mt-auto flex items-end justify-between gap-4 pt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] leading-[18px] text-content-subtle">
                    {platform.priceLabel}
                  </p>
                  <p className="text-heading-sm font-bold text-content">
                    {platform.price}
                  </p>
                </div>

                {linked && (
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent-subtle text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </>
        );

        return (
          <li key={platform.name} className="flex">
            {linked ? (
              <Link
                href={platform.href}
                aria-label={`See ${platform.name} pricing`}
                className="group flex w-full flex-col overflow-hidden rounded-card bg-surface shadow-card transition-shadow duration-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
              >
                {body}
              </Link>
            ) : (
              <div className="flex w-full flex-col overflow-hidden rounded-card bg-surface shadow-card">
                {body}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default PlatformCards;
