import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import YoutubeVideoCard from "@/components/YoutubeVideoCard";
import { salesSeeItInAction as data } from "@/data/sales";

/**
 * "See it in Action" — Figma node 1886:41801.
 *
 * The design's player area is an empty white placeholder, so this reuses the
 * existing "Effortless Sales" video from landing.json, presented in the new
 * section UI. The embed itself is the existing YoutubeVideoCard, so playback
 * behaviour matches the rest of the site. The guard stays in place so an empty
 * `videoId` renders the heading alone rather than a blank box.
 */
export function SeeItInActionSection() {
  return (
    <Section tone="subtle" spacing="md">
      <div className="flex flex-col items-center gap-8">
        <SectionHeading
          title={data.title}
          accentTitle={data.accentTitle}
          description={data.description}
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

export default SeeItInActionSection;
