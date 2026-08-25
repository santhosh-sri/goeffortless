import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ProductHeroMedia from "./ProductHeroMedia";
import type { ProductHeroData } from "./types";

/**
 * Product page hero — Figma 1699:2449 (Sales), 1943:63654 (Purchase), and the
 * same frame on every other product page.
 *
 * Desktop: copy column beside the demo card on the `bg-subtle` band, 40px
 * apart. The card is 554px on the phone pages and 636px on Purchase &
 * Expenses, whose laptop is landscape — `demo.card` carries which. Two chips,
 * a two-tone H1, 20px body and a single 56px-tall CTA.
 */
const CARD_WIDTH = { phone: 554, laptop: 636 } as const;

export function ProductHero({ data }: { data: ProductHeroData }) {
  return (
    // 48px under the header and 80 above the next band (Figma 1699:2449 sits
    // at y=144 under a 96px header; the next frame starts 80 below it).
    <section className="bg-bg-subtle py-10 lg:pb-20 lg:pt-12">
      <Container className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        {/* ---- Copy ---- */}
        <div className="flex w-full flex-col gap-8 lg:flex-1">
          <div className="flex flex-col items-start gap-6">
            {/* Chips sit 16px over the H1; the paragraph hangs 24 below. */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {data.badges.map((badge) => (
                  <Badge key={badge.label} tone={badge.tone}>
                    {badge.label}
                  </Badge>
                ))}
              </div>

              {/* Figma sets the 64px H1 on an 80px line, not the display
                  token's 72. */}
              <h1 className="text-heading-md font-normal text-content md:text-heading-lg lg:text-display lg:leading-[80px]">
                {data.title}
                <br />
                <span className="font-bold text-accent">
                  {data.accentTitle}
                </span>
              </h1>
            </div>

            <p className="text-body text-content-muted md:text-body-lg md:leading-6">
              {data.description}
            </p>
          </div>

          {/*
            No resting arrow: goeffortless.ai reveals it on hover and hides it
            at rest, on this CTA as on the home hero's. `Button` slides it in
            by default, so the arrow is simply not pinned here any more.
          */}
          <Button
            calBooking
            size="md"
            // sm:self-start as well as sm:w-auto — the column is a flex-col,
            // so without it `align-self: stretch` overrides the width.
            className="w-full sm:w-auto sm:self-start"
          >
            {data.ctaLabel}
          </Button>
        </div>

        {/* ---- Media ---- */}
        {/*
          The width travels as a custom property rather than an interpolated
          class so Tailwind's scanner still sees a static utility.
        */}
        <div
          className="w-full xl:w-[var(--hero-media-w)] xl:shrink-0"
          style={
            {
              "--hero-media-w": `${CARD_WIDTH[data.demo.card]}px`,
            } as React.CSSProperties
          }
        >
          <ProductHeroMedia demo={data.demo} />
        </div>
      </Container>
    </section>
  );
}

export default ProductHero;
