import React from "react";
import { cn } from "@/lib/cn";

/**
 * Horizontal page gutter + content cap.
 * Figma: 1440 frame with 64px gutters -> 1312px of content.
 * Gutters step down on tablet and mobile.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-frame px-5 md:px-10 lg:px-gutter",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export default Container;
