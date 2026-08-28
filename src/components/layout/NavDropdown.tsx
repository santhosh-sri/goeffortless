import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React, { useId, useState } from "react";
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
 *   group   20px icon + 16/20 bold uppercase title + 13/16 subtitle
 *   rule    dashed #cececf. Solutions and Resources put it under the group
 *           header; Products, the only panel stacking several groups in one
 *           column, uses it to close each group instead — see `groupRule`.
 *   item    20px icon at 8px gap, then two densities — see `itemScale`.
 *           Products is 14/18 label + 12/14 description at 16/12 padding and a
 *           4px radius; Resources is 16/20 + 13/16 at an even 16 and 8px. Both
 *           reveal an accent arrow on hover. Solutions rows are accordions
 *           instead (see `NavAccordionItem`).
 *
 * Products' right-hand column runs tighter still — 14px group titles and 8px
 * item block padding — via the per-group `dense` flag.
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

/**
 * Written out in full so Tailwind's scanner can see each class.
 *
 * Products is the only two-column panel, and its columns are not equal: on the
 * 1121px frame the left box (2359:51646) is 521px against the right box's
 * (2426:70581) 560px. `grid-cols-2` split the 1081px of content 530/530, which
 * put the dashed rule ~20px right of where the design draws it.
 */
const GRID_COLS: Record<number, string> = {
  1: "",
  2: "xl:grid-cols-[521fr_560fr]",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
};

/**
 * Icons are single-colour #F08B32 artwork exported from Figma. They ship at
 * their designed box (20px for items, 40px for Products group headers) rather
 * than one global size, because the design uses both.
 */
function NavIcon({
  name,
  size,
  className,
}: {
  name: string;
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={`/assets/nav/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

function NavGroupBlock({
  group,
  onNavigate,
  openRow,
  onToggleRow,
  iconSize = 20,
  rule = "header",
  scale = "roomy",
  isLast = false,
}: {
  group: NavGroup;
  onNavigate?: () => void;
  /** Label of the one accordion open across the panel — see `NavDropdown`. */
  openRow?: string | null;
  onToggleRow?: (label: string) => void;
  iconSize?: number;
  /** See `NavMenu.groupRule`. */
  rule?: "header" | "group";
  /** See `NavMenu.itemScale`. */
  scale?: "compact" | "roomy";
  /** Last group in its column — the group rule is omitted under it. */
  isLast?: boolean;
}) {
  const dense = group.dense;
  /*
   * Products closes each group with the rule instead of underlining the
   * header: every group wrapper there (2359:51921, 2426:70517, 2364:52293)
   * carries `border-b border-dashed` with 20px above it, and the last group in
   * a column (2426:70476, 2426:70582) has none. It had been drawn between the
   * header and its links, as Solutions and Resources do.
   */
  const closesGroup = rule === "group" && !isLast;

  return (
    <div
      className={cn(
        "flex flex-col",
        closesGroup && "border-b border-dashed border-line pb-5"
      )}
    >
      {/*
        Products (2359:51911) sets its header flush with the column edge and
        insets only the links. Solutions (2518:7782) and Resources (1746:23993)
        instead inset the header by the same 16px as their rows, and hang the
        rule off the padding box so it still spans the full column.
      */}
      <div
        className={cn(
          "flex items-start gap-2",
          rule === "header" &&
            "border-b border-dashed border-line px-2 pb-3 md:px-4"
        )}
      >
        {group.icon && <NavIcon name={group.icon} size={iconSize} />}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p
            className={cn(
              "font-bold uppercase leading-5 text-content",
              dense ? "text-label" : "text-body"
            )}
          >
            {group.title}
            {/* `shrink-0` in Figma — never let "(Add-on)" break mid-word. */}
            {group.note && (
              <span className="ml-2 whitespace-nowrap text-caption font-medium normal-case text-accent">
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

      <ul className={cn("flex flex-col", dense ? "pt-2" : "pt-3")}>
        {group.links.map((link) => (
          <li key={link.label}>
            {link.children?.length ? (
              <NavAccordionItem
                link={link}
                onNavigate={onNavigate}
                open={openRow === link.label}
                onToggle={() => onToggleRow?.(link.label)}
              />
            ) : (
              <NavItemLink
                link={link}
                onNavigate={onNavigate}
                dense={dense}
                scale={scale}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * A Solutions row, which is an accordion rather than a link — Figma 1571:31323
 * (collapsed 1571:31325, expanded "Frame 1000014745").
 *
 * Collapsed it is a 16/20 label with an accent chevron at 8px radius. Open, the
 * header keeps the #F4F5F7 fill and squares off its bottom corners while a
 * white body drops below it holding the bulleted children, each of which picks
 * up the same fill and hover arrow as a Products row.
 *
 * The row is a button, not a link: Figma gives it no navigable affordance of
 * its own, and the children are the destinations.
 *
 * Open/closed is owned by the panel rather than the row, so opening one row
 * closes whichever was open — three columns of expanded accordions made the
 * panel scroll and buried the rest of the menu.
 */
function NavAccordionItem({
  link,
  onNavigate,
  open,
  onToggle,
}: {
  link: NavLink;
  onNavigate?: () => void;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          "flex w-full items-center gap-2 rounded-lg p-2 text-left md:p-4",
          "transition-colors duration-200 hover:bg-bg-subtle",
          open && "rounded-b-none bg-bg-subtle",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset"
        )}
      >
        {link.icon && <NavIcon name={link.icon} size={20} />}

        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-body font-medium text-content">
            {link.label}
          </span>
          {link.description && (
            <span className="text-[13px] leading-4 text-content-muted">
              {link.description}
            </span>
          )}
        </span>

        <NavIcon
          name="chevron-down"
          size={16}
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ul
          id={panelId}
          className="flex flex-col gap-1 rounded-b-lg bg-surface px-2 py-2 md:px-4"
        >
          {link.children?.map((child) => {
            /* Figma bakes the bullet into the string; kept out of the
               accessible name so it is not announced. */
            const body = (
              <>
                <span
                  aria-hidden="true"
                  className="text-label leading-[18px] text-content"
                >
                  •
                </span>
                <span className="min-w-0 flex-1 text-label leading-[18px] font-medium text-content">
                  {child.label}
                </span>
                {child.href && (
                  <span className="flex shrink-0 items-center opacity-0 transition-opacity duration-200 group-hover/child:opacity-100 group-focus-visible/child:opacity-100">
                    <NavIcon name="arrow-right" size={16} />
                  </span>
                )}
              </>
            );

            const rowClasses = cn(
              "group/child flex items-center gap-2.5 rounded-sm p-2",
              child.href &&
                cn(
                  "transition-colors duration-200 hover:bg-bg-subtle",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset"
                )
            );

            return (
              <li key={child.label}>
                {/*
                  Read-only where no page exists yet: no hover fill, no arrow
                  and nothing focusable, so the row cannot be mistaken for a
                  destination. Adding an `href` restores the link.
                */}
                {child.href ? (
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    className={rowClasses}
                  >
                    {body}
                  </Link>
                ) : (
                  <span className={rowClasses}>{body}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function NavItemLink({
  link,
  onNavigate,
  dense = false,
  scale = "roomy",
}: {
  link: NavLink;
  onNavigate?: () => void;
  dense?: boolean;
  /** See `NavMenu.itemScale`. */
  scale?: "compact" | "roomy";
}) {
  const compact = scale === "compact";

  const inner = (
    <>
      {/*
        Both panels that use this row draw an accent arrow hard right of the
        title row on hover and nothing at rest — Products at 2359:51451
        (Component 1301) and Resources at 1568:30371 (Variant2). It is rendered
        in both states and faded in, so hovering cannot reflow the row; hence
        `justify-between` here rather than only on hover.
      */}
      <span className="flex w-full items-start justify-between gap-3">
        <span className="flex items-start gap-2">
          {link.icon && (
            <span className="flex h-[18px] items-center">
              <NavIcon name={link.icon} size={20} />
            </span>
          )}

          <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
            <span
              className={cn(
                "font-medium text-content",
                compact ? "text-label leading-[18px]" : "text-body"
              )}
            >
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

        <span className="flex h-[18px] shrink-0 items-center opacity-0 transition-opacity duration-200 group-hover/item:opacity-100 group-focus-visible/item:opacity-100">
          <NavIcon name="arrow-right" size={16} />
        </span>
      </span>

      {link.tagline && (
        <span className="block text-caption font-semibold leading-[14px] text-accent">
          {link.tagline}
        </span>
      )}

      {link.description && (
        <span
          className={cn(
            "block font-normal text-content-muted",
            compact ? "text-caption leading-[14px]" : "text-[13px] leading-4"
          )}
        >
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

  /*
   * Hover fill is #F4F5F7 in both panels, which is already the `bg-subtle`
   * token. The rest is where they part: a Products row (2359:51452) is 4px
   * with 16/12 padding, a Resources row (1568:30371) is 8px with an even 16.
   * `group/item` is named so the arrow keys off this row rather than one of
   * the panel's outer hover groups.
   */
  const classes = cn(
    "group/item flex flex-col gap-2 p-2 transition-colors duration-200",
    compact
      ? cn("rounded-sm md:px-4", dense ? "md:py-2" : "md:py-3")
      : "rounded-lg md:p-4",
    "hover:bg-bg-subtle",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset"
  );

  // A row with no destination reads as text — see `NavChild.href`. The hover
  // fill goes with the link, so nothing about it invites a click.
  if (!link.href) {
    return (
      <span className={classes.replace("hover:bg-bg-subtle", "")}>{inner}</span>
    );
  }

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
  const twoColumn = columns === 2;

  /*
   * One accordion open at a time across the whole panel, not one per column:
   * Solutions draws three columns of them side by side, and leaving each to
   * its own state let every row sit open at once, which pushed the panel past
   * the fold and left the columns badly out of step with each other.
   */
  const [openRow, setOpenRow] = useState<string | null>(null);
  const toggleRow = (label: string) =>
    setOpenRow((current) => (current === label ? null : label));

  return (
    <div
      className={cn(
        // Opaque on purpose. A translucent panel was tried to match the live
        // site's glass, but on the light theme the page behind stayed legible
        // through it and the two layers read as overlapping rather than
        // stacked — the panel covers the page instead.
        "rounded-lg border border-line bg-surface-raised p-4 shadow-overlay",
        // The border is for the drawer, where this renders as a card nested in
        // a list and needs its own edge. The desktop panel drops it entirely
        // and leans on the shadow: it hangs off the header as one surface, and
        // a stroke around three sides only drew a seam across that.
        "xl:rounded-t-none xl:rounded-b-2xl xl:border-0 xl:p-5 xl:shadow-menu",
        "w-full xl:max-w-[calc(100vw-4rem)]",
        // Products is 781px tall in Figma and the panel hangs off a 96px
        // header, so on a short laptop it would run past the fold with the
        // "Explore All Features" CTA unreachable. Scroll inside instead.
        "xl:max-h-[calc(100dvh-6rem-1rem)] xl:overflow-y-auto xl:overscroll-contain",
        PANEL_WIDTH[columns] ?? PANEL_WIDTH[1]
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-y-6",
          // The two-column panel pads its columns individually (below), so the
          // rule lands on the box boundary rather than inside a gap.
          twoColumn ? "xl:gap-x-0" : "gap-x-5",
          GRID_COLS[columns]
        )}
      >
        {menu.columns.map((column, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-4 px-[20px]",
              /*
               * Figma nests a second 20px pad inside each Products column, so
               * its content sits 40px from the panel edge. That is not carried
               * over: it leaves the left column 431px for the group title, and
               * "Extensions for Both Primary Products (Add-on)" needs 440px in
               * Lexend — the design was drawn in the narrower SF Pro Text and
               * fits on one line there. The column boxes and the rule between
               * them still land where Figma puts them; only the inner pad is
               * dropped, which buys the title 472px and keeps it unwrapped.
               */
              // Figma draws the rule on the left of every column but the
              // first; on mobile the columns stack, so it is xl-only.
              menu.columnDividers &&
                index > 0 &&
                "xl:border-l xl:border-dashed xl:border-line"
            )}
          >
            {column.map((group, groupIndex) => (
              <NavGroupBlock
                key={group.title}
                group={group}
                onNavigate={onNavigate}
                openRow={openRow}
                onToggleRow={toggleRow}
                iconSize={menu.groupIconSize}
                rule={menu.groupRule}
                scale={menu.itemScale}
                isLast={groupIndex === column.length - 1}
              />
            ))}

            {/*
              The CTA belongs to the last column, not the panel. Figma has it
              inside the right-hand block (2426:70582), so it is 520px wide and
              sits under "One Platform. Endless Possibilities." — it had been
              rendered as a sibling of the grid and stretched the full 1121px
              panel, spanning both columns.
            */}
            {menu.cta && index === menu.columns.length - 1 && (
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavDropdown;
