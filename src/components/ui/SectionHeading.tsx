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
  eyebrowTone = "surface",
  descriptionGap = "md",
  descriptionSize = "md",
  descriptionClassName,
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
  /**
   * The eyebrow chip's fill is the opposite of the band it sits on (palette
   * "Tag in white bg" / "Tag in grey bg"): `subtle` on white sections,
   * `surface` on grey ones, `plain` where Figma drops the stroke.
   */
  eyebrowTone?: React.ComponentProps<typeof Badge>["tone"];
  /**
   * Title → description distance. Figma uses 24 on most headings and 20 on
   * the Feature Deep Dive and closing CTA ones.
   */
  descriptionGap?: "sm" | "md";
  /** `lg` is the 24px/0.24 tracking description on Compliance Shield, Billing Modes and the Command Center. */
  descriptionSize?: "md" | "lg";
  descriptionClassName?: string;
}) {
  const centered = align === "center";

  return (
    // Eyebrow and title sit 16px apart; the description hangs 24 (or 20)
    // below that pair — two gaps, so two boxes.
    <div
      className={cn(
        "flex w-full flex-col",
        descriptionGap === "sm" ? "gap-5" : "gap-6",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-4",
          centered ? "items-center" : "items-start"
        )}
      >
      {eyebrow && <Badge tone={eyebrowTone}>{eyebrow}</Badge>}

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
      </div>

      {description && (
        <p
          className={cn(
            "max-w-[1036px] font-normal text-content-muted",
            descriptionSize === "lg"
              ? "text-body-lg md:text-[24px] md:leading-[30px] md:tracking-[0.24px]"
              : "text-body md:text-body-lg",
            centered && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
