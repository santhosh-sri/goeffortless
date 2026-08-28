import React from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductClosingCtaData } from "./types";

/** Closing CTA — Figma 1893:45937 (Sales), 1943:71175 (Purchase). */
export function ProductClosingCta({ data }: { data: ProductClosingCtaData }) {
  return (
    <>
    {/* Component 970: white, 80px padding, 48 to the buttons, which are
        32px-padded and 24 apart. */}
    <Section spacing="lg">
      <div className="flex flex-col items-center gap-12">
        <SectionHeading
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
          headingClassName="font-medium"
          descriptionGap="sm"
          descriptionClassName="md:leading-6"
        />

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
          <Button calBooking fullWidth className="px-8 font-semibold sm:w-auto">
            {data.primary.label}
          </Button>

          <Button
            href={data.secondary.href}
            variant="secondary"
            fullWidth
            className="px-8 font-semibold sm:w-auto"
          >
            {data.secondary.label}
          </Button>
        </div>
      </div>
    </Section>
    {/* The product pages end with 80px of the grey page showing between this
        white band and the footer (Figma: CTA ends at y=9200, footer starts
        at 9280 on Sales; same on every product frame). */}
    <div aria-hidden="true" className="h-12 bg-bg-subtle lg:h-20" />
    </>
  );
}

export default ProductClosingCta;
