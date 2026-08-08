import React from "react";
import Container from "@/components/ui/Container";
import Logocarousel from "@/components/Logocarousel";
import { trustStrip } from "@/data/home";
import { customerLogos } from "@/data/customerLogos";

/**
 * Statement + customer logo marquee under the hero — Figma node 1548:28520.
 *
 * Reuses the existing `Logocarousel` (react-slick + the maintained customer
 * logo list) rather than duplicating it. That component renders images only,
 * with no colour styling, so it carries over to the light theme unchanged.
 *
 * It sets `!w-screen`, so it is rendered outside the Container as a full-bleed
 * row — nesting it inside would overflow the page horizontally.
 */
export function TrustStripSection() {
  return (
    <section className="bg-bg py-10 lg:py-14">
      <Container>
        <p className="text-center text-body text-content-muted md:text-body-lg">
          {trustStrip.statement}
        </p>
      </Container>

      {/* Full-colour brand originals exported from Figma (1822:6049); the
          previous set was white-on-transparent and invisible on light. */}
      <div className="mt-8 overflow-hidden">
        <Logocarousel logos={customerLogos} />
      </div>
    </section>
  );
}

export default TrustStripSection;
