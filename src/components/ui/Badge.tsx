import React from "react";
import { cn } from "@/lib/cn";

/**
 * Pill eyebrow above a section heading — "Say 👋 to Effortless", "Growing Pains".
 * Figma: radius 16, border black@8%, px 10 / py 6, 14px medium.
 */
export function Badge({
  tone = "subtle",
  className,
  children,
}: {
  tone?: "subtle" | "surface" | "accent" | "success";
  className?: string;
  children: React.ReactNode;
}) {
  const TONE = {
    subtle: "bg-bg-subtle border-line-subtle text-content",
    surface: "bg-surface border-line-subtle text-content",
    accent: "bg-accent-subtle border-accent/30 text-accent",
    // Filled green "Primary Product" chip — Figma node 2461:80238.
    success: "bg-success border-success text-white",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-[16px] border px-2.5 py-1.5",
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
