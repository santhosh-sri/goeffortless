import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Logocarousel from "@/components/Logocarousel";
import { proof } from "@/data/home";
import { customerLogos } from "@/data/customerLogos";

/**
 * "Proof" — Figma nodes 1548:28937 / 1548:28938 / 1548:29011.
 *
 * Heading, then the customer logo row (rendered at 20% opacity per the design,
 * node 1897:45974), then three testimonial cards.
 *
 * Reuses the existing `Logocarousel` — the design's logo set is the same one
 * that component already maintains. It sets `!w-screen`, so it sits outside
 * the Container as a full-bleed row.
 */
export function ProofSection() {
  return (
    <section className="bg-bg py-12 lg:py-section-y-lg">
      <Container>
        <SectionHeading
          eyebrow={proof.eyebrow}
          title={proof.title}
          accentTitle={proof.accentTitle}
          description={proof.description}
        />
      </Container>

      {/* Design renders this row at 20% opacity (node 1897:45974). */}
      <div className="mt-8 overflow-hidden opacity-20 lg:mt-10">
        <Logocarousel logos={customerLogos} />
      </div>

      <Container className="mt-8 lg:mt-10">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {proof.testimonials.map((item) => (
            <li key={item.name} className="flex">
              <figure className="flex h-full w-full flex-col justify-between gap-6 rounded-card bg-surface p-5 shadow-card">
                <blockquote className="text-body text-content-muted">
                  {item.quote}
                </blockquote>

                <figcaption>
                  <p className="text-body-lg font-semibold text-accent">
                    {item.name}
                  </p>
                  <p className="text-[14px] leading-[18px] text-content-muted">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ProofSection;
