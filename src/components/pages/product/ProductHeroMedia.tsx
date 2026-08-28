import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import type { ProductHeroDemo } from "./types";

/**
 * Product hero demo card — Figma 2697:25466 (phone pages, 554×540) and
 * 2726:9342 (Purchase & Expenses, 636×594).
 *
 * The card is built, not exported: a white 12px-radius surface with the
 * palette's card shadow, and the two decorative dot fields placed as the SVGs
 * Figma exports for them. Both cards use the same two groups — a 125×400 strip
 * of stars hanging off the top-right edge at (475, 4), and a 482×308 field of
 * circles anchored bottom-left, whose Figma origin is its bottom row (y=427 on
 * the laptop card, y=620 on the phone card, both past the card edge and
 * clipped). Everything beyond the card is cut off by `overflow-hidden`.
 *
 * The GIF goes straight on top, the way the design file places it, and it is
 * transparent outside the device (the prototype at 1943:63635 shows the dots
 * running up to the MacBook's edge). Previously the card shipped as a
 * flattened export with a device and a static screenshot baked in, and the
 * recording was layered over the screen; the two never matched exactly. Now
 * the device only exists in the recording.
 *
 * The GIFs are re-encoded from the files inside the Figma document — 1080×1920
 * / 1920×1080 at 16 MB each — to twice their rendered size at 12fps, palette
 * with a reserved transparent index. They must not be regenerated from the
 * desktop exports, which are opaque.
 *
 * The phone card's rectangle is the GIF's own 9:16, so `object-cover` is a
 * no-op there. The laptop card's 596×380 window crops the 16:9 recording
 * instead — Figma sizes the image to 129.85% × 114.62% of the window and
 * offsets it (-15.03%, -7.88%), which lands the MacBook flush with the
 * window's left and right edges.
 */
const LAYOUT = {
  // Every box is a percentage of the card so the layout scales with it below
  // its native width. Stars: 125×400 at (475, 4). Circles: 482×308 with its
  // top at (0, 312) on the phone card and (0, 119) on the laptop card.
  phone: {
    card: "aspect-[554/540]",
    window: "left-[26.648%] top-[7.407%] h-[85.185%] w-[46.706%]",
    image: "h-full w-full object-cover",
    stars: "left-[85.740%] top-[0.741%] h-[74.074%] w-[22.563%]",
    circles: "left-0 top-[57.778%] h-[57.037%] w-[87.004%]",
  },
  laptop: {
    card: "aspect-[636/594]",
    window: "left-[3.145%] top-[18.013%] h-[63.973%] w-[93.711%]",
    image: "h-[114.62%] w-[129.85%] max-w-none left-[-15.03%] top-[-7.88%]",
    stars: "left-[74.686%] top-[0.673%] h-[67.340%] w-[19.654%]",
    circles: "left-0 top-[20.034%] h-[51.852%] w-[75.786%]",
  },
} as const;

export function ProductHeroMedia({ demo }: { demo: ProductHeroDemo }) {
  const layout = LAYOUT[demo.card];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-surface shadow-raised",
        layout.card
      )}
    >
      <Image
        src="/assets/product/hero-dots-stars.svg"
        alt=""
        aria-hidden="true"
        width={125}
        height={400}
        // SVG: the optimiser refuses it (dangerouslyAllowSVG is off) and
        // would 400 before falling back to the file.
        unoptimized
        className={cn("absolute max-w-none", layout.stars)}
      />
      <Image
        src="/assets/product/hero-dots-ellipses.svg"
        alt=""
        aria-hidden="true"
        width={482}
        height={308}
        unoptimized
        className={cn("absolute max-w-none", layout.circles)}
      />

      <div className={cn("absolute overflow-hidden", layout.window)}>
        <video
          // Decorative: the surrounding copy already says what the product
          // does, and the clip carries no narration.
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={demo.poster}
          width={demo.width}
          height={demo.height}
          className={cn("absolute", layout.image)}
        >
          <source src={demo.mov} type="video/quicktime" />
          <source src={demo.webm} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default ProductHeroMedia;
