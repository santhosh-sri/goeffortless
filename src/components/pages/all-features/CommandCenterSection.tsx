import Image from "next/image";
import React from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { allFeaturesCommandCenter as data } from "@/data/allFeaturesPage";

/**
 * "No More Broken Pipes Between Systems" — Figma node 2426:65526, the white
 * band that closes the catalogue.
 *
 * Two columns separated by a vertical dashed rule, then a full-width strip of
 * integration logos and a CTA.
 *
 * The logo strip ships as a single 1312px export rather than six separate
 * marks: it is one decorative row in the design, and splitting it would mean
 * six more brand assets for no behavioural gain. It scrolls horizontally on
 * narrow viewports so the logos stay legible instead of shrinking to nothing.
 */
export function CommandCenterSection() {
  return (
    // Component 969 (2426:65526) is a white block with 40px padding, and the
    // page's grey shows for 80px on either side of it — so the band is grey
    // with the white painted inside it, not a white section.
    <Section tone="subtle" spacing="none" className="lg:py-20">
      <div className="-mx-gutter bg-bg px-gutter py-10">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            accentTitle={data.accentTitle}
            description={data.description}
            eyebrowTone="subtle"
            descriptionSize="lg"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[520fr_712fr] lg:gap-0">
            <div className="flex flex-col items-center gap-6 lg:pr-12">
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-heading-sm font-semibold text-content">
                  {data.before.title}
                </h3>
                <p className="text-body text-content-muted">
                  {data.before.description}
                </p>
              </div>
              <Image
                src={data.before.media}
                alt={data.before.mediaAlt}
                width={data.before.mediaWidth}
                height={data.before.mediaHeight}
                loading="lazy"
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full max-w-[520px]"
              />
            </div>

            <div className="flex flex-col items-center gap-6 border-t border-dashed border-line pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-heading-sm font-semibold text-accent">
                  {data.after.title}
                </h3>
                <p className="text-body text-content-muted">
                  {data.after.description}
                </p>
              </div>
              <Image
                src={data.after.media}
                alt={data.after.mediaAlt}
                width={data.after.mediaWidth}
                height={data.after.mediaHeight}
                loading="lazy"
                sizes="(min-width: 1024px) 712px, 100vw"
                className="h-auto w-full max-w-[712px]"
              />
            </div>
          </div>

          <div className="-mx-5 min-w-0 overflow-x-auto px-5 md:mx-0 md:px-0">
            <Image
              src={data.integrations.media}
              alt={data.integrations.mediaAlt}
              width={data.integrations.mediaWidth}
              height={data.integrations.mediaHeight}
              loading="lazy"
              sizes="(min-width: 768px) 1312px, 700px"
              className="h-auto w-full min-w-[700px]"
            />
          </div>

          <div className="flex justify-center">
            <Button calBooking className="font-semibold">
              {data.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CommandCenterSection;
