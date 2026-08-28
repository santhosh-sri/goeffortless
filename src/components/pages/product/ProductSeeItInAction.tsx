import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import YoutubeVideoCard from "@/components/YoutubeVideoCard";
import type { ProductVideoData } from "./types";

/**
 * "See it in Action" — Figma 1886:41801 (Sales), 1943:71170 (Purchase).
 *
 * The design leaves the player area an empty white placeholder on every product
 * page, so each page passes the video already referenced for that product in
 * the CMS, presented in the new section UI. The embed is the existing
 * YoutubeVideoCard so playback behaviour matches the rest of the site; the
 * guard keeps an empty videoId rendering the heading alone rather than a
 * blank box.
 */
export function ProductSeeItInAction({ data }: { data: ProductVideoData }) {
  return (
    // Figma 1886:41801: on the grey band, 80 above and below, 40 between the
    // heading and the player.
    <Section tone="subtle" spacing="lg">
      <div className="flex flex-col items-center gap-10">
        <SectionHeading
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
          headingClassName="font-medium"
          descriptionClassName="md:leading-6"
        />

        {data.videoId && (
          <div className="w-full max-w-[1216px]">
            <YoutubeVideoCard videoId={data.videoId} type="page" widescreen />
          </div>
        )}
      </div>
    </Section>
  );
}

export default ProductSeeItInAction;
