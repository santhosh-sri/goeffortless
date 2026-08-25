import React from "react";
import { cn } from "@/lib/cn";

/**
 * A feature's own glyph, tinted with the accent colour.
 *
 * The catalogue's icons in `public/` are drawn `fill="white"` / `stroke="white"`
 * for the old dark theme, so rendering them as images would put white artwork
 * on the light card and modal. They are painted as a CSS mask instead: the
 * element carries the accent background and the SVG's alpha punches the shape
 * out of it. That tints fill- and stroke-based files alike without touching the
 * 74 source files, and it follows the accent token in both themes.
 *
 * `next/image` cannot do this, so these deliberately bypass it. The files are
 * 1–3KB of inline path data, small enough that the optimiser buys nothing.
 */
export function FeatureItemIcon({
  src,
  size = 20,
  className,
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("block shrink-0 bg-accent", className)}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url("${src}")`,
        maskImage: `url("${src}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export default FeatureItemIcon;
