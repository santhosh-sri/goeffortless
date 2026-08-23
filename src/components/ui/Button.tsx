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

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "hero";

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-content-on-accent border border-accent hover:bg-accent-hover hover:border-accent-hover",
  // Figma "White Pallet" secondary button: #FFFFFF fill, #F08B32 stroke. It is
  // filled, not transparent, so it stays white on a grey band. The dark
  // palette keeps the white fill and swaps the stroke/ink — see the
  // `btn-secondary` tokens.
  secondary:
    "bg-btn-secondary text-btn-secondary-ink border border-btn-secondary-line hover:bg-accent hover:text-content-on-accent hover:border-accent",
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
  "inline-flex items-center justify-center rounded-sm text-center font-medium " +
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
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    BASE,
    VARIANT[variant],
    variant !== "link" && SIZE[size],
    fullWidth && "w-full",
    className
  );

  const calAttrs = calBooking ? CalcomConfig : undefined;

  const content = (
    <>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </>
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
