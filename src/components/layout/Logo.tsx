import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";

/**
 * Figma 2520:8380 — 36px mark + 132×24 wordmark, 8px gap.
 *
 * The mark is two layers, not one: the orange gradient ring (2520:8382, a
 * 36×36 PNG) with the dark tapered arrow (2520:8383 "Union") laid over it.
 * Only the ring was being rendered, which is why the mark read as a bare "C".
 * The arrow is positioned in percentages of the ring box so the lockup keeps
 * its Figma geometry at every size:
 *   x 13.53/36, y 14.15/36, w 22.458/36, h 8.1/36.
 *
 * The exported wordmark is #333333. Rather than ship a second asset, the dark
 * theme drives it to white with `brightness-0 invert`; the mark is full-colour
 * and is left alone — the arrow stays #333 on orange, as in the design.
 */
export function Logo({
  href = "/",
  size = "header",
  className,
}: {
  href?: string;
  /**
   * The footer draws the same lockup larger — 48px mark against a 176×32
   * wordmark (Figma 1886:43283) — where the header uses 36/132×24.
   */
  size?: "header" | "footer";
  className?: string;
}) {
  const footer = size === "footer";

  return (
    <Link
      href={href}
      aria-label="Effortless — home"
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        className
      )}
    >
      <span
        className={cn(
          "relative block shrink-0",
          footer ? "h-10 w-10 lg:h-12 lg:w-12" : "h-8 w-8 lg:h-9 lg:w-9"
        )}
      >
        <Image
          src="/assets/shared/effortless-mark.png"
          alt=""
          width={footer ? 48 : 36}
          height={footer ? 48 : 36}
          priority
          className="absolute inset-0 h-full w-full"
        />
        <Image
          src="/assets/shared/effortless-mark-union.svg"
          alt=""
          width={footer ? 30 : 22}
          height={footer ? 11 : 8}
          priority
          className="absolute left-[37.583%] top-[39.306%] h-[22.499%] w-[62.384%]"
        />
      </span>
      <Image
        src="/assets/shared/effortless-wordmark.svg"
        alt="Effortless"
        width={footer ? 176 : 132}
        height={footer ? 32 : 24}
        priority
        className={cn(
          "w-auto dark:brightness-0 dark:invert",
          footer ? "h-[26.67px] lg:h-8" : "h-[21.33px] lg:h-6"
        )}
      />
    </Link>
  );
}

export default Logo;
