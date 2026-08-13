import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import type { ProductMedia, ProductScreenVideo } from "./types";

/**
 * Product hero media panel — the flattened Figma export, optionally with a
 * product recording playing inside the device mockup.
 *
 * The panel export bakes in the dot field, the device and a static screenshot,
 * so the recording is layered on top of the screen area rather than behind a
 * cut-out. `screen` is the screen rect as a percentage of the panel, measured
 * off each export's own bezel — the phone mockup on Sales sits at a different
 * scale from the one on Buyer Portal / Claims / Contracts, and Purchase &
 * Expenses uses a 16:10 laptop.
 *
 * Recordings ship as MP4 + WebM rather than the source GIFs: the captures are
 * 7-16 MB each, and at the size the mockup actually renders them (a phone
 * screen is ~165 CSS px wide) that is around 40x more bytes than the picture
 * can show.
 */
export function ProductHeroMedia({
  media,
  video,
}: {
  media: ProductMedia;
  video?: ProductScreenVideo;
}) {
  return (
    <div className="relative w-full">
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        priority
        sizes="(min-width: 1024px) 554px, 100vw"
        className="h-auto w-full rounded-card"
      />

      {video && (
        <div
          className="pointer-events-none absolute overflow-hidden"
          style={{
            left: `${video.device.left}%`,
            top: `${video.device.top}%`,
            width: `${video.device.width}%`,
            height: `${video.device.height}%`,
          }}
        >
          <video
            // Decorative: the surrounding copy already says what the product
            // does, and the clip carries no narration.
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={video.poster}
            className="absolute max-w-none object-fill"
            style={{
              // Blow the frame up until the device inside it fills this box,
              // then pull it back by the margin — so the clip's device lands
              // on the panel's device and the white surround is clipped off.
              width: `${100 / video.inset.w}%`,
              height: `${100 / video.inset.h}%`,
              left: `${(-100 * video.inset.x) / video.inset.w}%`,
              top: `${(-100 * video.inset.y) / video.inset.h}%`,
            }}
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

export default ProductHeroMedia;
