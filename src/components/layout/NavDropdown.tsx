import parse from "html-react-parser";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import type { NavGroup, NavMenu } from "@/data/navigation";

/**
 * Desktop dropdown panel — Figma "Dropdowns" (node 1746:23989).
 *
 * A menu is a set of columns; each column stacks one or more groups. Products
 * is 2 columns, Solutions 3, Resources 4. Item glyphs are emoji rendered as
 * text, matching the design (they are not exported vectors in Figma).
 */

/** Panel width by column count. Full width inside the mobile drawer. */
const PANEL_WIDTH: Record<number, string> = {
  1: "lg:w-[460px]",
  2: "lg:w-[900px]",
  3: "lg:w-[1000px]",
  4: "lg:w-[1140px]",
};

/** Written out in full so Tailwind's scanner can see each class. */
const GRID_COLS: Record<number, string> = {
  1: "",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

function NavGroupBlock({
  group,
  onNavigate,
}: {
  group: NavGroup;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="border-b border-line pb-2">
        <p className="text-label font-semibold uppercase tracking-wide text-content">
          {group.title}
          {group.note && (
            <span className="ml-1.5 font-normal normal-case text-accent">
              {group.note}
            </span>
          )}
        </p>
        {group.subtitle && (
          <p className="pt-0.5 text-caption font-light text-content-subtle">
            {group.subtitle}
          </p>
        )}
      </div>

      <ul className="flex flex-col pt-1">
        {group.links.map((link) => {
          const inner = (
            <>
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {link.emoji && (
                  <span aria-hidden="true" className="text-body leading-none">
                    {link.emoji}
                  </span>
                )}
                <span className="text-body font-normal text-content">
                  {link.label}
                </span>
                {link.badge && (
                  <span className="rounded-sm bg-accent-subtle px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                    {link.badge}
                  </span>
                )}
                {link.comingSoon && (
                  <span className="text-caption font-light italic text-accent">
                    coming soon
                  </span>
                )}
              </span>

              {link.tagline && (
                <span className="block text-caption font-medium text-accent">
                  {link.tagline}
                </span>
              )}

              {link.description && (
                <span className="block text-caption font-light leading-4 text-content-muted">
                  {parse(link.description)}
                </span>
              )}
            </>
          );

          const classes = cn(
            "flex flex-col gap-1 rounded-sm px-3 py-2.5 transition-colors duration-200",
            "hover:bg-surface-hover",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset"
          );

          return (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onNavigate}
                  className={classes}
                >
                  {inner}
                </a>
              ) : (
                <Link href={link.href} onClick={onNavigate} className={classes}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
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
        "rounded-lg border border-line bg-surface-raised p-4 shadow-overlay lg:p-6",
        "w-full lg:max-w-[calc(100vw-4rem)]",
        PANEL_WIDTH[columns] ?? PANEL_WIDTH[1]
      )}
    >
      <div
        className={cn("grid grid-cols-1 gap-x-8 gap-y-6", GRID_COLS[columns])}
      >
        {menu.columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-5">
            {column.map((group) => (
              <NavGroupBlock
                key={group.title}
                group={group}
                onNavigate={onNavigate}
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
              "flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3",
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
