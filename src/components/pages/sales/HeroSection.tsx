import Image from "next/image";
import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { salesHero } from "@/data/sales";

/**
 * Sales hero — Figma node 1699:2449.
 *
 * Desktop: 718px copy column + 554px media panel on the `bg-subtle` band.
 * Two chips ("Primary Product" filled green, "The Revenue Engine" outlined),
 * a two-tone 64px H1, 20px body, and a single 56px-tall CTA.
 *
 * The media panel ships as the flattened Figma export. In Figma the decorative
 * dot field behind the phone is ~2,600 individual <star> nodes; rendering those
 * as DOM would be absurd, and they are baked into the export at the correct
 * position and opacity.
 */
const ARROW = (
  <Image
    src="/assets/shared/arrow-right.svg"
    alt=""
    width={24}
    height={24}
    className="h-6 w-6 shrink-0"
  />
);

export function HeroSection() {
  return (
    <section className="bg-bg-subtle py-10 lg:py-16">
      <Container className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-8">
        {/* ---- Copy ---- */}
        <div className="flex w-full flex-col gap-8 lg:flex-1">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-wrap items-center gap-3">
              {salesHero.badges.map((badge) => (
                <Badge key={badge.label} tone={badge.tone}>
                  {badge.label}
                </Badge>
              ))}
            </div>

            <h1 className="text-heading-md font-normal text-content md:text-heading-lg lg:text-display">
              {salesHero.title}
              <br />
              <span className="font-bold text-accent">
                {salesHero.accentTitle}
              </span>
            </h1>

            <p className="text-body text-content-muted md:text-body-lg">
              {salesHero.description}
            </p>
          </div>

          <Button
            calBooking
            size="lg"
            trailingIcon={ARROW}
            // sm:self-start as well as sm:w-auto — the column is a flex-col,
            // so without it `align-self: stretch` overrides the width.
            className="w-full font-semibold sm:w-auto sm:self-start"
          >
            {salesHero.ctaLabel}
          </Button>
        </div>

        {/* ---- Media ---- */}
        <div className="w-full lg:w-[554px] lg:shrink-0">
          <Image
            src={salesHero.media.src}
            alt={salesHero.media.alt}
            width={salesHero.media.width}
            height={salesHero.media.height}
            priority
            sizes="(min-width: 1024px) 554px, 100vw"
            className="h-auto w-full rounded-card"
          />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
