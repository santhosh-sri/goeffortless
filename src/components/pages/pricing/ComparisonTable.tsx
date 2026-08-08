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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="rgb(var(--color-danger))"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

function Cell({ value }: { value: PricingCell }) {
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
      <span className="block text-center text-[14px] font-semibold text-content">
        {value}
      </span>
    );
  }
  return (
    <span className="flex items-center justify-center gap-1.5">
      <Tick />
      <span className="text-[14px] font-medium text-content">
        {value.label}
      </span>
    </span>
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
        <label className="flex cursor-pointer items-center gap-2 text-body font-medium text-content">
          <input
            type="checkbox"
            checked={allOpen}
            onChange={toggleAll}
            className="h-4 w-4 accent-[rgb(var(--color-accent))]"
          />
          Expand All
        </label>
      </div>

      <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th
                scope="col"
                className="w-[46%] px-4 py-4 text-heading-sm font-semibold text-content"
              >
                Features
              </th>
              <th
                scope="col"
                className="w-[27%] border-l border-line px-4 py-4 text-center text-heading-sm font-normal text-content"
              >
                Grow
              </th>
              <th
                scope="col"
                className="w-[27%] border-l border-line px-4 py-4 text-center text-heading-sm font-normal text-content"
              >
                Scale
              </th>
            </tr>
          </thead>

          {sections.map((section) => {
            const isOpen = !collapsed[section.name];
            return (
              <tbody key={section.name}>
                <tr className="bg-bg-inset">
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
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-heading-sm font-semibold text-content">
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
                      <span
                        aria-hidden="true"
                        className="text-heading-sm leading-none text-content-muted"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </td>
                </tr>

                {isOpen &&
                  section.rows.map((row) => (
                    <tr key={row.label} className="border-b border-line-subtle">
                      <th
                        scope="row"
                        className="px-4 py-3.5 text-left text-[14px] font-normal leading-[20px] text-content"
                      >
                        {row.label}
                      </th>
                      <td className="border-l border-line-subtle px-4 py-3.5">
                        <Cell value={row.grow} />
                      </td>
                      <td className="border-l border-line-subtle px-4 py-3.5">
                        <Cell value={row.scale} />
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
