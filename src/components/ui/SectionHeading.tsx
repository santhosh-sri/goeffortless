import parse from "html-react-parser";
import React from "react";
import { cn } from "@/lib/cn";
import Badge from "./Badge";

/**
 * The badge + two-tone heading + description block that opens nearly every
 * section in the Figma design.
 *
 * Figma: 16px stack gap; heading 32px light with a bold accent clause;
 * description 20px muted, capped at ~1036px and centred.
 */
export function SectionHeading({
  eyebrow,
  title,
  accentTitle,
  titleSuffix,
  description,
  align = "center",
  as: Heading = "h2",
  className,
  headingClassName,
  accentOnNewLine,
}: {
  eyebrow?: string;
  /** Leading, non-accented part of the heading. Accepts inline HTML. */
  title: string;
  /** Accented clause. Accepts inline HTML. */
  accentTitle?: string;
  /**
   * Non-accented text after the accent clause, for headings where the accent
   * sits mid-sentence — 'The "Expense Leak" Audit'. Accepts inline HTML.
   */
  titleSuffix?: string;
  description?: string;
  align?: "center" | "start";
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Extra classes on the heading element itself, e.g. a one-off line-height. */
  headingClassName?: string;
  /**
   * Break before the accent clause instead of letting it wrap naturally.
   * The pricing hero (Figma 2426:60821) carries a literal <br> there, so
   * "Expand as you grow." always starts its own line.
   */
  accentOnNewLine?: boolean;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}

      <Heading
        className={cn(
          "font-light text-content",
          Heading === "h1"
            ? "text-heading-md md:text-heading-lg lg:text-display"
            : "text-heading-sm md:text-heading-md",
          headingClassName
        )}
      >
        {parse(title)}
        {accentTitle &&
          (accentOnNewLine ? (
            // Only forced from the `lg` breakpoint up: below it the heading is
            // small enough that an early break leaves a short, ragged line.
            <span className="font-bold text-accent lg:block">
              {" "}
              {parse(accentTitle)}
            </span>
          ) : (
            <>
              {" "}
              <span className="font-bold text-accent">
                {parse(accentTitle)}
              </span>
            </>
          ))}
        {titleSuffix && <>{" "}{parse(titleSuffix)}</>}
      </Heading>

      {description && (
        <p
          className={cn(
            "max-w-[1036px] text-body font-normal text-content-muted md:text-body-lg",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
