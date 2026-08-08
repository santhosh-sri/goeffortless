import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";

/**
 * Figma 2520:8380 — 36px mark + 132×24 wordmark, 8px gap.
 *
 * The exported wordmark is #333333. Rather than ship a second asset, the dark
 * theme drives it to white with `brightness-0 invert`; the mark is full-colour
 * and is left alone.
 */
export function Logo({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
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
      <Image
        src="/assets/shared/effortless-mark.png"
        alt=""
        width={36}
        height={36}
        priority
        className="h-8 w-8 lg:h-9 lg:w-9"
      />
      <Image
        src="/assets/shared/effortless-wordmark.svg"
        alt="Effortless"
        width={132}
        height={24}
        priority
        className="h-5 w-auto lg:h-6 dark:brightness-0 dark:invert"
      />
    </Link>
  );
}

export default Logo;
