import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import type { NavGroup, NavLink, NavMenu } from "@/data/navigation";

/**
 * Desktop dropdown panel — Figma "Dropdowns" (node 1746:23989).
 *
 * A menu is a set of columns; each column stacks one or more groups. Products
 * is 2 columns, Solutions 3, Resources 4.
 *
 * Figma spec carried over from Products 2359:51640 / Solutions 1746:24019 /
 * Resources 1746:23990:
 *   panel   20px padding, 16px bottom radius, shadow 0 20 80 -24 / 20%
 *   group   20px icon + 16/20 bold uppercase title + 13/16 subtitle,
 *           dashed #cececf bottom rule, 12px below it
 *   item    16px inline / 8-12px block padding, 20px icon at 8px gap,
 *           14/18 medium label, 12/14 accent tagline, 12/14 muted description
 */

/**
 * Panel width by column count, taken from the Figma frames: Products
 * (2359:51640) is 1121, Solutions (1746:24019) and Resources (1746:23990) are
 * both 1312 — exactly the 1440 frame less its 64px gutters. Full width inside
 * the mobile drawer.
 */
const PANEL_WIDTH: Record<number, string> = {
  1: "xl:w-[460px]",
  2: "xl:w-[1121px]",
  3: "xl:w-[1312px]",
  4: "xl:w-[1312px]",
};

/** Written out in full so Tailwind's scanner can see each class. */
const GRID_COLS: Record<number, string> = {
  1: "",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
};

/**
 * Icons are single-colour #F08B32 artwork exported from Figma. They ship at
 * their designed box (20px for items, 40px for Products group headers) rather
 * than one global size, because the design uses both.
 */
function NavIcon({ name, size }: { name: string; size: number }) {
  return (
    <Image
      src={`/assets/nav/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="shrink-0 object-contain"
    />
  );
}

function NavGroupBlock({
  group,
  onNavigate,
  iconSize = 20,
}: {
  group: NavGroup;
  onNavigate?: () => void;
  iconSize?: number;
}) {
  return (
    <div className="flex flex-col">
      {/* Group header — dashed rule beneath, per every dropdown node. */}
      <div className="flex items-start gap-2 border-b border-dashed border-line px-2 pb-3 md:px-4">
        {group.icon && <NavIcon name={group.icon} size={iconSize} />}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-body font-bold uppercase text-content">
            {group.title}
            {group.note && (
              <span className="ml-2 text-caption font-medium normal-case text-accent">
                {group.note}
              </span>
            )}
          </p>
          {group.subtitle && (
            <p className="text-[13px] leading-4 text-content-muted">
              {group.subtitle}
            </p>
          )}
        </div>
      </div>

      <ul className="flex flex-col pt-3">
        {group.links.map((link) => (
          <li key={link.label}>
            <NavItemLink link={link} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavItemLink({
  link,
  onNavigate,
}: {
  link: NavLink;
  onNavigate?: () => void;
}) {
  const inner = (
    <>
      <span className="flex items-start gap-2">
        {link.icon && (
          <span className="flex h-[18px] items-center">
            <NavIcon name={link.icon} size={20} />
          </span>
        )}

        <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-label leading-[18px] font-medium text-content">
            {link.label}
          </span>
          {/* Filled green pill in the Figma panel, not an accent tint — it
              matches the "Primary Product" chip on the product page heroes. */}
          {link.badge && (
            <span className="rounded-sm bg-success px-2 py-1 text-[10px] leading-3 uppercase tracking-wide text-white">
              {link.badge}
            </span>
          )}
        </span>
      </span>

      {link.tagline && (
        <span className="block text-caption font-semibold leading-[14px] text-accent">
          {link.tagline}
        </span>
      )}

      {link.description && (
        <span className="block text-caption font-normal leading-[14px] text-content-muted">
          {parse(link.description)}
          {link.comingSoon && (
            <span className="text-accent"> coming soon…</span>
          )}
        </span>
      )}

      {link.image && (
        <Image
          src={link.image.src}
          alt=""
          aria-hidden="true"
          width={link.image.width}
          height={link.image.height}
          className="mt-1 self-center object-contain"
        />
      )}
    </>
  );

  const classes = cn(
    "flex flex-col gap-2 rounded-lg px-2 py-2 transition-colors duration-200 md:px-4 md:py-3",
    "hover:bg-surface-hover",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset"
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={link.href} onClick={onNavigate} className={classes}>
      {inner}
    </Link>
  );
}

export function NavDropdown({
  menu,
  onNavigate,
}: {
  menu: NavMenu;
  onNavigate?: () => void;
}) {
  const columns = menu.columns.length;

  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-surface-raised p-4 shadow-overlay",
        "xl:rounded-t-none xl:rounded-b-2xl xl:border-t-0 xl:p-5",
        "w-full xl:max-w-[calc(100vw-4rem)]",
        // Products is 781px tall in Figma and the panel hangs off a 96px
        // header, so on a short laptop it would run past the fold with the
        // "Explore All Features" CTA unreachable. Scroll inside instead.
        "xl:max-h-[calc(100dvh-6rem-1rem)] xl:overflow-y-auto xl:overscroll-contain",
        PANEL_WIDTH[columns] ?? PANEL_WIDTH[1]
      )}
    >
      <div
        className={cn("grid grid-cols-1 gap-x-5 gap-y-6", GRID_COLS[columns])}
      >
        {menu.columns.map((column, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-4",
              // Figma draws the rule on the left of every column but the
              // first; on mobile the columns stack, so it is xl-only.
              menu.columnDividers &&
                index > 0 &&
                "xl:border-l xl:border-dashed xl:border-line xl:pl-5"
            )}
          >
            {column.map((group) => (
              <NavGroupBlock
                key={group.title}
                group={group}
                onNavigate={onNavigate}
                iconSize={menu.groupIconSize}
              />
            ))}
          </div>
        ))}
      </div>

      {menu.cta && (
        <div className="pt-4">
          <Link
            href={menu.cta.href}
            onClick={onNavigate}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2",
              "text-body font-semibold text-content-on-accent",
              "transition-colors duration-200 hover:bg-accent-hover",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            )}
          >
            {menu.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
