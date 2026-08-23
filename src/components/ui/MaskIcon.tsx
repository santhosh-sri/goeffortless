import React from "react";
import { cn } from "@/lib/cn";

/**
 * Paints a monochrome SVG in a token colour.
 *
 * Much of the CMS artwork under /public is white-on-transparent, drawn for
 * the dark site. Rather than ship recoloured duplicates, the file is used as
 * a CSS mask over a token-coloured box, so it follows the theme like text.
 * Only for single-colour glyphs — a mask discards the source's own colours.
 */
export function MaskIcon({
  src,
  tone = "accent",
  className,
}: {
  src: string;
  tone?: "accent" | "content" | "muted" | "on-accent" | "success";
  className?: string;
}) {
  const TONE = {
    accent: "bg-accent",
    content: "bg-content",
    muted: "bg-content-muted",
    "on-accent": "bg-content-on-accent",
    success: "bg-success",
  } as const;

  return (
    <span
      aria-hidden="true"
      className={cn("block h-6 w-6 shrink-0", TONE[tone], className)}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

export default MaskIcon;
