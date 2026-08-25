import React, { useState } from "react";
import { cn } from "@/lib/cn";
import type {
  PricingCell,
  PricingTableSection,
} from "@/data/pricingTables";

/**
 * The feature comparison table — Figma nodes 2426:66274 / 2426:67870.
 *
 * Each module is a collapsible section, open by default to match the design,
 * with an "Expand All" toggle above the table. On narrow viewports the table
 * scrolls horizontally rather than reflowing: the Grow/Scale columns only mean
 * anything side by side.
 */
const Tick = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 6 9 17l-5-5"
      stroke="rgb(var(--color-success))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cross = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="rgb(var(--color-danger))"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

function Cell({ value, accent }: { value: PricingCell; accent?: boolean }) {
  if (value === true) {
    return (
      <span className="flex justify-center" title="Included">
        <Tick />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="flex justify-center" title="Not included">
        <Cross />
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  if (typeof value === "string") {
    return (
      <span
        className={cn(
          "block text-center text-body font-semibold",
          accent ? "text-accent" : "text-content"
        )}
      >
        {value}
      </span>
    );
  }
  return (
    <span className="flex items-center justify-center gap-1.5">
      <Tick />
      <span className="text-body font-medium text-content">
        {value.label}
      </span>
    </span>
  );
}

/**
 * Figma 2426:70810 sets the trailing "(billed annually)" qualifier in accent
 * for the Over View module only.
 */
function RowLabel({ label, highlight }: { label: string; highlight?: boolean }) {
  const match = highlight ? label.match(/^(.*?)(\s\(.*\))$/) : null;
  if (!match) return <>{label}</>;
  return (
    <>
      {match[1]}
      <span className="text-accent">{match[2]}</span>
    </>
  );
}

export function ComparisonTable({
  sections,
}: {
  sections: PricingTableSection[];
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const allOpen = sections.every((s) => !collapsed[s.name]);

  const toggleAll = () => {
    setCollapsed(
      allOpen
        ? Object.fromEntries(sections.map((s) => [s.name, true]))
        : {}
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <label className="flex cursor-pointer items-center gap-2 text-body font-semibold text-content">
          {/*
            Figma 2426:66282: a 16px accent square, 2px radius, with a white
            tick (M3 on-primary). `accent-color` on a native checkbox cannot
            deliver that — the browser picks the tick's colour itself, and
            against #F08B32 Chrome chooses black. So the box is drawn here:
            the input is stripped with `appearance-none` and the tick is a
            sibling revealed on `peer-checked`, which also gives the unchecked
            state a designed outline instead of the browser default.
          */}
          <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
            <input
              type="checkbox"
              checked={allOpen}
              onChange={toggleAll}
              className="peer h-4 w-4 cursor-pointer appearance-none rounded-[2px] border border-line bg-surface transition-colors checked:border-accent checked:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none absolute hidden h-3 w-3 text-white peer-checked:block"
            >
              <path
                d="M3.5 8.5l3 3 6-6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Expand All
        </label>
      </div>

      {/* Full-bleed on mobile so the table uses the whole screen width, and
          min-w-0 because this is a flex item. Note that a scroll container
          inflates documentElement.scrollWidth without the page actually being
          scrollable — check document.body.scrollWidth when testing for
          horizontal overflow here. */}
      <div className="-mx-5 min-w-0 overflow-x-auto px-5 md:mx-0 md:px-0">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            {/*
              Figma 2426:66293 gives all three header cells a `border-t`, which
              closes the box above "Features / Grow / Scale" — without it the
              column rules started in mid-air. The row's own `border-b` draws
              the line under it; both are #CECECF, the `line` token.
            */}
            <tr className="border-y border-line">
              <th
                scope="col"
                className="w-[51%] px-6 py-5 text-heading-sm font-medium text-content"
              >
                Features
              </th>
              <th
                scope="col"
                className="w-[24.5%] border-l border-line px-6 py-5 text-center text-heading-sm font-normal text-content"
              >
                Grow
              </th>
              <th
                scope="col"
                className="w-[24.5%] border-l border-line px-6 py-5 text-center text-heading-sm font-normal text-content"
              >
                Scale
              </th>
            </tr>
          </thead>

          {sections.map((section) => {
            const isOpen = !collapsed[section.name];
            return (
              <tbody key={section.name}>
                <tr className="bg-bg-subtle">
                  <td colSpan={3} className="p-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setCollapsed((prev) => ({
                          ...prev,
                          [section.name]: isOpen,
                        }))
                      }
                      className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-body-lg font-medium leading-6 text-content">
                          {section.name}
                        </span>
                        {section.badge && (
                          <span
                            className={cn(
                              "rounded-sm px-2 py-0.5 text-caption font-medium text-white",
                              section.badge === "Primary Product"
                                ? "bg-success"
                                : section.badge === "Add-On"
                                ? "bg-accent"
                                : "bg-content-subtle"
                            )}
                          >
                            {section.badge}
                          </span>
                        )}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 text-content"
                      >
                        <path
                          d="M3 8h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        {!isOpen && (
                          <path
                            d="M8 3v10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        )}
                      </svg>
                    </button>
                  </td>
                </tr>

                {isOpen &&
                  section.rows.map((row, index) => (
                    <tr key={row.label} className="border-b border-line">
                      {row.alsoLabel ? (
                        // Two features sharing one value: the labels stack,
                        // split by a rule, inside a single 120px row.
                        <th
                          scope="row"
                          className="p-0 text-left text-label font-medium leading-5 text-content"
                        >
                          <span className="block border-b border-line px-6 py-5">
                            <RowLabel
                              label={row.label}
                              highlight={section.highlightNotes}
                            />
                          </span>
                          <span className="block px-6 py-5">
                            {row.alsoLabel}
                          </span>
                        </th>
                      ) : (
                        <th
                          scope="row"
                          className="px-6 py-5 text-left text-label font-medium leading-5 text-content"
                        >
                          <RowLabel
                            label={row.label}
                            highlight={section.highlightNotes}
                          />
                        </th>
                      )}
                      {section.growMerged ? (
                        index === 0 && (
                          <td
                            rowSpan={section.rows.length}
                            className="border-l border-line px-6 py-4 align-middle"
                          >
                            <Cell value={section.growMerged} />
                          </td>
                        )
                      ) : (
                        <td className="border-l border-line px-6 py-4">
                          <Cell value={row.grow} accent={row.accent} />
                        </td>
                      )}
                      <td className="border-l border-line px-6 py-4">
                        <Cell value={row.scale} accent={row.accent} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;
