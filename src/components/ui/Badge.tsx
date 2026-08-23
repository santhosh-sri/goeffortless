import React from "react";
import { cn } from "@/lib/cn";

/**
 * Pill eyebrow above a section heading — "Say 👋 to Effortless", "Growing Pains".
 * Figma 1548:28592: radius 16, border black@8%, px 10 / py 6, 14px medium.
 *
 * That node fills the pill white, so `surface` is the default. `subtle` had
 * been, which tinted it #F4F5F7 — the same value as the `subtle` section band
 * these eyebrows usually sit on, so the fill vanished and only the border read.
 *
 * The palettes (2682:25297 / 2694:25363) define the pill as "Tag in white bg"
 * (#F4F5F7 → `subtle`) and "Tag in grey bg" (#FFFFFF → `surface`): the fill
 * is the opposite of the band. Both neutral tones draw their stroke with
 * `.tag-stroke` rather than `border-line-subtle`, because the dark palette
 * specifies a gradient for it (and for the `subtle` fill), which a plain
 * border-color cannot carry. The border stays on the box, transparent, so the
 * metrics are unchanged.
 */
export function Badge({
  tone = "surface",
  className,
  children,
}: {
  tone?: "subtle" | "surface" | "plain" | "accent" | "success";
  className?: string;
  children: React.ReactNode;
}) {
  // Padding lives with the tone: the chips are 28px tall with their 1px
  // stroke, except the filled green one, which Figma draws at 26 (8/4 padding,
  // no visible stroke).
  const TONE = {
    subtle:
      "tag-stroke [background:var(--tag-bg)] border-transparent px-2.5 py-1.5 text-content",
    surface: "tag-stroke bg-surface border-transparent px-2.5 py-1.5 text-content",
    // White chip with a white stroke — Figma 1699:17374, the "Feature" eyebrow
    // on the grey band: no visible outline at all.
    plain: "bg-surface border-surface px-2.5 py-1.5 text-content",
    accent: "bg-accent-subtle border-accent/30 px-2.5 py-1.5 text-accent",
    // Filled green "Primary Product" chip — Figma node 2461:80238.
    success: "bg-success border-success px-2 py-1 text-white",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-[16px] border",
        "text-label font-medium",
        TONE[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
