import Link from "next/link";
import React from "react";
import Badge from "@/components/ui/Badge";
import type { PricingPlatform } from "@/data/pricing";

/**
 * The two platform cards — Figma component 1329/1330, used both on /pricing
 * and at the top of each pricing detail page.
 *
 * Orange header bar carrying the product name and a filled green chip, then the
 * flow line in a tinted box, then the starting price and a circular arrow that
 * links through to that platform's detail page.
 */
export function PlatformCards({
  platforms,
}: {
  platforms: PricingPlatform[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {platforms.map((platform) => (
        <li key={platform.name} className="flex">
          <div className="flex w-full flex-col overflow-hidden rounded-card bg-surface shadow-card">
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

                <Link
                  href={platform.href}
                  aria-label={`See ${platform.name} pricing`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent-subtle text-accent transition hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PlatformCards;
