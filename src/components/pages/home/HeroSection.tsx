import Image from "next/image";
import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import DemoVideoModal from "@/components/DemoVideoModal";
import { demoVideoConfig } from "@/data/demoVideos";
import Container from "@/components/ui/Container";

/**
 * Home hero — Figma node 1548:28486.
 *
 * Desktop: two columns inside the 1312px content width — 716px of copy
 * (32px stack gap) and a 596px media column. H1 64/72, body 20px muted,
 * two 64px-tall CTAs in a 504px row, and the "Works seamlessly with: Tally"
 * strip beneath the product shot.
 *
 * Tablet/mobile are derived — Figma has no frames below 1440.
 */
const PLAY = (
  <Image
    src="/seeAction.svg"
    alt=""
    width={24}
    height={24}
    className="h-6 w-6 shrink-0"
  />
);

export function HeroSection() {
  // "See it in Action" opens the demo-video picker, as on goeffortless.ai —
  // it is not a link to the features page.
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="bg-bg-subtle py-[48px]">
      <Container className="flex flex-col items-start gap-10 lg:flex-row lg:gap-0">
        {/* ---- Copy ---- */}
        <div className="flex w-full flex-col justify-center gap-8 lg:flex-1 lg:pr-5">
          <div className="flex flex-col justify-center gap-6">
            {/* items-start so the badge hugs its text instead of stretching
                to the column width (Figma 1548:28490 is hug-width). */}
            <div className="flex flex-col items-start justify-center gap-4">
              <Badge tone="surface">Say 👋 to Effortless</Badge>

              <h1 className="text-heading-md font-normal text-content md:text-heading-lg lg:text-display">
                The All-In-One Growth Platform for{" "}
                <span className="font-bold text-accent">
                  Indian Businesses.
                </span>
              </h1>
            </div>

            <p className="text-body text-content-muted md:text-body-lg">
              Grow without Jhanjhat or using your broken old tools. Effortless
              handles Sales, Approvals, Schemes, Purchases, Expenses, Contracts,
              Cash &amp; Operational Chaos — all in one place.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row xl:w-[504px] lg:gap-5">
            {/* No resting arrow — it slides in on hover like every other
                CTA (goeffortless.ai). Opens the Cal.com booking modal. */}
            <Button calBooking size="md" fullWidth className="sm:flex-1">
              Talk to Sales
            </Button>

            <Button
              type="button"
              onClick={() => setDemoOpen(true)}
              variant="secondary"
              size="md"
              fullWidth
              leadingIcon={PLAY}
              className="sm:flex-1"
            >
              See it in Action
            </Button>
          </div>
        </div>

        {/* ---- Media ---- */}
        <div className="flex w-full flex-col items-center justify-center gap-6 xl:w-[596px] xl:shrink-0 lg:gap-8 lg:pl-5">
          {/*
            The shadow belongs on the artwork, not the box. `object-contain`
            letterboxes this transparent PNG inside the aspect box, so a
            box-shadow here cast a hard-edged rectangle up and to the right of
            a frame nothing actually fills — clearly visible once the hero band
            went grey. `drop-shadow` follows the image's alpha instead, which
            is what Figma shows: soft shading above and right of the devices,
            and nothing below them.
          */}
          <div className="relative aspect-[682/418] w-full">
            <Image
              src="/assets/home/hero-dashboard.png"
              alt="Effortless dashboard shown on a tablet and a phone"
              fill
              priority
              sizes="(min-width: 1024px) 576px, 100vw"
              className="object-contain drop-shadow-media"
            />
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-3">
            <p className="text-body font-normal text-accent md:text-heading-sm lg:text-heading-md">
              Works seamlessly with:
            </p>
            <Image
              src="/assets/shared/tally-prime.svg"
              alt="Tally Prime"
              width={171}
              height={40}
              className="h-8 w-auto lg:h-10 dark:brightness-0 dark:invert"
            />
          </div>
        </div>
      </Container>
      <DemoVideoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        config={demoVideoConfig}
      />
    </section>
  );
}

export default HeroSection;
