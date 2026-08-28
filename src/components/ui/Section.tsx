import React from "react";
import { cn } from "@/lib/cn";
import Container from "./Container";

/**
 * A full-bleed page band: owns the vertical rhythm and the background token,
 * and nests a Container for the gutter. Replaces the
 * `max-md:px-5 md:px-[80px] py-8 md:py-[60px]` string repeated across sections.
 */
export function Section({
  as: Tag = "section",
  tone = "default",
  spacing = "md",
  id,
  className,
  containerClassName,
  children,
}: {
  as?: React.ElementType;
  /** Which background token the band paints. */
  tone?: "default" | "subtle" | "inset";
  spacing?: "none" | "sm" | "md" | "lg";
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  const TONE = {
    default: "bg-bg",
    subtle: "bg-bg-subtle",
    inset: "bg-bg-inset",
  } as const;

  const SPACING = {
    none: "",
    sm: "py-8 md:py-10 lg:py-12",
    md: "py-10 md:py-14 lg:py-section-y",
    lg: "py-12 md:py-16 lg:py-section-y-lg",
  } as const;

  return (
    <Tag
      id={id}
      className={cn(TONE[tone], SPACING[spacing], "scroll-mt-24", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

export default Section;
