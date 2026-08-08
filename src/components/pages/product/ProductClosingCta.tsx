import React from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductClosingCtaData } from "./types";

/** Closing CTA — Figma 1893:45937 (Sales), 1943:71175 (Purchase). */
export function ProductClosingCta({ data }: { data: ProductClosingCtaData }) {
  return (
    <Section spacing="md">
      <div className="flex flex-col items-center gap-8">
        <SectionHeading
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
        />

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button calBooking fullWidth className="font-semibold sm:w-auto">
            {data.primary.label}
          </Button>

          <Button
            href={data.secondary.href}
            variant="secondary"
            fullWidth
            className="font-semibold sm:w-auto"
          >
            {data.secondary.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default ProductClosingCta;
