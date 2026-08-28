import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";

/**
 * Icon + title + description card.
 *
 * Consolidates the six near-identical cards the codebase carried separately
 * (IdeasCard, USeCaseCard, pentCard, ServiceList, GrowthCards, Timeline body)
 * and covers both card treatments in the Figma home page:
 *
 *  - `iconTone="plain"`  Component 1163 (node 1548:28598) — bare 48px icon,
 *                        1px #CECECF border, 21px padding, 16/20 body.
 *  - `iconTone="tile"`   Component 1296 (node 1694:1549) — 24px icon on a
 *                        40px accent-tinted tile, 20px padding, 14/18 body.
 *
 * Figma draws the first card of each row borderless-on-a-shadow. That is the
 * hover state being shown off, not a "featured" card — every card in the row is
 * peer content, and freezing the treatment on the first one made card one look
 * like a different component from cards two onwards. So the lift is bound to
 * `:hover` and every card rests on the same 1px border.
 */
export function InfoCard({
  icon,
  iconAlt = "",
  title,
  description,
  align = "center",
  iconTone = "plain",
  bodySize = "md",
  titleSize = "md",
  bodyEmphasis = false,
  footnoteSize = "caption",
  footnote,
  href,
  className,
  children,
}: {
  /** Path to an icon asset in /public, or a ready-made node. */
  icon?: string | React.ReactNode;
  iconAlt?: string;
  title?: string;
  description?: string;
  align?: "center" | "start";
  iconTone?: "plain" | "tile";
  bodySize?: "sm" | "md";
  /** 24/30 medium (default) or the 20px semibold of the security row. */
  titleSize?: "sm" | "md";
  /** Renders the description in medium weight (Figma node 1548:28895). */
  bodyEmphasis?: boolean;
  footnoteSize?: "caption" | "sm";
  /** Divider-separated caption pinned to the bottom (Figma node 1548:28832). */
  footnote?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const centered = align === "center";
  const tiled = iconTone === "tile";
  const Tag = href ? "a" : "div";

  const iconSize = tiled ? 24 : 48;

  const iconNode =
    typeof icon === "string" ? (
      <Image
        src={icon}
        alt={iconAlt}
        width={iconSize}
        height={iconSize}
        className={cn(
          "shrink-0 object-contain",
          tiled ? "h-6 w-6" : "h-12 w-12"
        )}
      />
    ) : (
      icon
    );

  return (
    <Tag
      {...(href ? { href } : {})}
      className={cn(
        "flex h-full flex-col rounded-card bg-surface",
        "transition-[colors,box-shadow] duration-200",
        tiled ? "gap-4 p-5" : "gap-4 p-[21px]",
        // The border stays in the box on hover, turned transparent rather than
        // dropped, so the lift does not shift the card by a pixel.
        "border border-line hover:border-transparent hover:shadow-raised",
        href && "hover:border-accent hover:bg-surface-hover",
        href &&
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {icon &&
        (tiled ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-icon-tile p-1">
            {iconNode}
          </span>
        ) : (
          iconNode
        ))}

      {title && (
        <h3
          className={cn(
            "text-content",
            titleSize === "sm"
              ? "text-[20px] font-semibold"
              : "text-heading-sm font-medium",
            tiled && titleSize === "md" && "tracking-[-0.72px]"
          )}
        >
          {parse(title)}
        </h3>
      )}

      {description && (
        <p
          className={cn(
            "text-content-muted",
            bodyEmphasis ? "font-medium" : "font-normal",
            bodySize === "sm" ? "text-[14px] leading-[18px]" : "text-body"
          )}
        >
          {parse(description)}
        </p>
      )}

      {footnote && (
        <p
          className={cn(
            "mt-auto w-full border-t border-line pt-2 font-normal text-content-muted",
            footnoteSize === "sm" ? "text-[14px] leading-[18px]" : "text-caption"
          )}
        >
          {parse(footnote)}
        </p>
      )}

      {children}
    </Tag>
  );
}

export default InfoCard;
