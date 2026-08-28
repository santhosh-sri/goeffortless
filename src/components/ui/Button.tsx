import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { CalcomConfig } from "@/utils/calConfig";

/**
 * The single button primitive.
 *
 * Replaces `Democta`, `RedirectCta` and `SecondaryCta`, which were three
 * near-identical orange CTAs. Crucially it does NOT switch behaviour by
 * sniffing the label (`ctaText.includes("trial")`) the way `Democta` did —
 * intent is passed explicitly via `action`.
 */

export type ButtonVariant = "primary" | "secondary" | "tint" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "hero";

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-content-on-accent border border-accent hover:bg-accent-hover hover:border-accent-hover",
  // Figma "White Pallet" secondary button: #FFFFFF fill, #F08B32 stroke. It is
  // filled, not transparent, so it stays white on a grey band. The dark
  // palette keeps the white fill and swaps the stroke/ink — see the
  // `btn-secondary` tokens.
  // Hover keeps the white fill and orange ink (goeffortless.ai) — the slide-in
  // arrow is the affordance. Filling it orange also hid any accent-coloured
  // trailing icon (the hero's play glyph) against the same orange.
  secondary:
    "bg-btn-secondary text-btn-secondary-ink border border-btn-secondary-line hover:bg-accent-subtle",
  // Pricing edition "Book Demo →" (Figma 2410:58396): #FFEFE0 fill, accent
  // ink, no visible stroke. Fills solid on hover.
  tint:
    "bg-accent-surface text-accent border border-accent-surface hover:bg-accent hover:border-accent hover:text-content-on-accent",
  ghost:
    "bg-transparent text-content-muted border border-transparent hover:bg-surface-hover hover:text-content",
  link: "bg-transparent text-accent border-0 p-0 h-auto hover:underline underline-offset-4",
};

/** Figma: compact CTA px-24/py-12 @16px; hero CTA h-64 @20px. */
const SIZE: Record<ButtonSize, string> = {
  // Figma header component 2514:80690: 20px inline padding, 8px block,
  // 16px/20 label — 36px tall. Only the header uses this size.
  sm: "h-9 px-5 text-body gap-1.5",
  md: "min-h-[44px] px-6 py-3 text-body gap-2",
  lg: "min-h-[56px] lg:min-h-[64px] px-5 py-3.5 text-body lg:text-body-lg gap-2",
  // Product-page hero CTA (Figma 1699:2459): a fixed 56px, 16px inline
  // padding, 20px label, 24px trailing icon 8px away — it does not grow to 64
  // at `lg` the way the home hero's does.
  hero: "h-14 px-4 py-3.5 text-body-lg gap-2",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders to the right of the label at its natural size. */
  trailingIcon?: React.ReactNode;
  /** Renders to the left of the label at its natural size. */
  leadingIcon?: React.ReactNode;
  /** Stretch to the container width. */
  fullWidth?: boolean;
  /** Attach the Cal.com booking embed attributes. */
  calBooking?: boolean;
  /**
   * Reveal a trailing arrow on hover, the way the live site's CTAs do —
   * goeffortless.ai slides "→" in beside the label of every primary and
   * secondary action. On by default for the filled/outlined variants, off
   * for `ghost` and `link`. Pass `false` on a button whose `trailingIcon`
   * is already an arrow (the hero CTAs) so it doesn't get two.
   */
  hoverArrow?: boolean;
  /**
   * Swap the hover-revealed arrow for another glyph — the header's "Schedule
   * Demo" reveals a calendar, as on goeffortless.ai. Implies `hoverArrow`.
   */
  hoverIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    /** Open in a new tab; adds the matching rel for safety. */
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

// No `whitespace-nowrap` here: several CTAs carry sentence-length labels
// ("Effortless keeps your business running—without the mess. Discover How")
// which would otherwise force horizontal page overflow on narrow viewports.
const BASE =
  "group inline-flex items-center justify-center rounded-sm text-center font-medium " +
  "transition-colors duration-200 cursor-pointer select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    trailingIcon,
    leadingIcon,
    fullWidth,
    calBooking,
    hoverArrow,
    hoverIcon,
    className,
    children,
    ...rest
  } = props;

  // Not on the 36px header pair: goeffortless.ai leaves those alone, and the
  // 20px inline padding has no room for the overlay.
  const showHoverArrow =
    hoverArrow ??
    (!!hoverIcon ||
      (size !== "sm" &&
        (variant === "primary" || variant === "secondary" || variant === "tint")));

  const classes = cn(
    BASE,
    VARIANT[variant],
    variant !== "link" && SIZE[size],
    fullWidth && "w-full",
    className
  );

  const calAttrs = calBooking ? CalcomConfig : undefined;

  // The arrow is overlaid past the label's right edge rather than laid out
  // inline, and the label group nudges 12px left to meet it half way — so a
  // fixed-width button (the hero pair) never grows or wraps on hover; the
  // label + arrow stay centred on the label's resting centre.
  const content = (
    <span
      className={cn(
        "relative inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-out",
        showHoverArrow && "[@media(hover:hover)]:group-hover:-translate-x-3"
      )}
    >
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
      {showHoverArrow && (
        // Pointer devices only — there is no hover on touch, so the arrow
        // would never appear.
        <span
          aria-hidden="true"
          className="absolute left-full top-1/2 ml-2 hidden -translate-y-1/2 translate-x-[-6px] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 [@media(hover:hover)]:inline-flex"
        >
          {hoverIcon ?? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2.4 8h11.2M9.6 12l4-4-4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      )}
    </span>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...anchorProps } = rest as ButtonAsLink;

    if (external) {
      return (
        <a
          {...anchorProps}
          {...calAttrs}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <Link {...anchorProps} {...calAttrs} href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButton;

  return (
    <button {...buttonProps} {...calAttrs} type={type} className={classes}>
      {content}
    </button>
  );
}

export default Button;
