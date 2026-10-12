import React, { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { CaseStudyOption } from "@/data/caseStudies";

/**
 * The sticky filter bar: a single row of industry, product, problem-solved and
 * reset, then the match count.
 *
 * The design pins this under the header, so `top` has to clear it. The header's
 * height is measured rather than hard-coded: a fixed `top-24` drifted out of
 * step when the header shrank, leaving a strip where the page showed through.
 * The bar only becomes sticky where the full-width layout applies — on a phone
 * the whole row would eat the viewport.
 */
export interface CaseStudyFilterState {
  industry: string;
  product: string;
  useCase: string;
  search: string;
}

/** Nested `<optgroup>`s, so the two primary products own their add-ons. */
export interface ProductGroup {
  label: string;
  options: CaseStudyOption[];
}

const FIELD =
  "h-11 rounded-sm border-[1.5px] border-line bg-surface text-[14px] text-content " +
  "transition-colors duration-200 focus:border-accent focus:outline-none " +
  "focus:ring-[3px] focus:ring-accent-surface";

export function CaseStudyFilters({
  filters,
  onChange,
  onReset,
  industryOptions,
  productGroups,
  useCaseOptions,
  matchCount,
  totalCount,
}: {
  filters: CaseStudyFilterState;
  onChange: (key: keyof CaseStudyFilterState, value: string) => void;
  onReset: () => void;
  industryOptions: CaseStudyOption[];
  productGroups: ProductGroup[];
  useCaseOptions: CaseStudyOption[];
  matchCount: number;
  totalCount: number;
}) {
  const ids = useId();
  const headerHeight = useHeaderHeight();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { hidden, stuck } = useStickyBarState(sentinelRef, headerHeight);

  /*
    A filter change can shrink the list a long way. Read from far down the
    page — or from the footer — the reader would be left staring at whatever
    now sits there, so jump back to the top of the results, with the bar
    resting under the header. Only upward: a change made while the bar is
    still in its own place leaves the page where it is.
  */
  const scrollToResults = () => {
    requestAnimationFrame(() => {
      const sentinel = sentinelRef.current;
      if (!sentinel) return;
      const target =
        sentinel.getBoundingClientRect().top + window.scrollY - headerHeight;
      if (window.scrollY > target) {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    });
  };

  const change = (key: keyof CaseStudyFilterState, value: string) => {
    onChange(key, value);
    if (key !== "search") scrollToResults();
  };

  const reset = () => {
    onReset();
    scrollToResults();
  };
  // const searchId = `${ids}-search`;
  const industryId = `${ids}-industry`;
  const productId = `${ids}-product`;
  const useCaseId = `${ids}-usecase`;

  const hasActiveFilters =
    filters.industry !== "all" ||
    filters.product !== "all" ||
    filters.useCase !== "all" ||
    filters.search.trim() !== "";

  return (
    <>
      {/* Marks where the bar sits in the flow, so the scroll handler can tell
          whether it's stuck under the header without reading the bar's own
          (transformed) box. */}
      <div ref={sentinelRef} aria-hidden="true" />
      <div
        className={cn(
          "border-y border-line bg-surface transition-transform duration-300 ease-out xl:sticky xl:z-40",
          // Pinned, the header's own bottom edge already draws that line.
          stuck && "xl:border-t-transparent",
          hidden && "xl:-translate-y-full",
        )}
        style={{ top: headerHeight }}
      >
        <div className="mx-auto w-full max-w-frame px-5 md:px-10 lg:px-gutter">
          <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
            {/*
            Search is switched off for now and industry takes its slot. The
            filtering behind it still works, so uncommenting the field brings
            it back. The search glyph is a background image rather than an
            absolutely positioned node, so the input keeps a single box for
            focus ring and border to paint on.

          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor={searchId} className="sr-only">
              Search
            </label>
            <input
              id={searchId}
              type="search"
              value={filters.search}
              onChange={(e) => onChange("search", e.target.value)}
              placeholder="Search by company, city, industry, or keyword…"
              className={cn(FIELD, "w-full bg-no-repeat pl-11 pr-3.5")}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='M20 20l-3.5-3.5'/%3E%3C/svg%3E\")",
                backgroundPosition: "14px center",
              }}
            />
          </div>
          */}

            <div>
              <label htmlFor={industryId} className="sr-only">
                Industry
              </label>
              <Select
                id={industryId}
                value={filters.industry}
                onChange={(v) => change("industry", v)}
              >
                {industryOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <label htmlFor={productId} className="sr-only">
                Product
              </label>
              <Select
                id={productId}
                value={filters.product}
                onChange={(v) => change("product", v)}
              >
                <option value="all">All products</option>
                {productGroups.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((o) => (
                      /*
                      A module can hang off both primary products (Claims,
                      Banking, Approvals, Dashboard), so an id repeats across
                      groups — the key carries the group to stay unique.
                    */
                      <option key={`${group.label}-${o.id}`} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </div>

            <div>
              <label htmlFor={useCaseId} className="sr-only">
                Problem solved
              </label>
              <Select
                id={useCaseId}
                value={filters.useCase}
                onChange={(v) => change("useCase", v)}
              >
                {useCaseOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </div>

            <button
              type="button"
              onClick={reset}
              className={cn(
                FIELD,
                "px-4 font-medium text-content-muted sm:col-span-2 lg:col-span-1",
                "hover:border-accent hover:text-accent",
              )}
            >
              Reset
            </button>
          </div>

          <p className="flex items-center justify-between gap-3 pb-4 pt-3 text-caption text-content-muted">
            <span>
              Showing <strong className="text-content">{matchCount}</strong> of{" "}
              {totalCount} case studies
            </span>
            {hasActiveFilters && (
              <span className="font-semibold text-accent">Filters active</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

/** Tracks the site header's rendered height, falling back to its `xl` size. */
function useHeaderHeight() {
  const [height, setHeight] = useState(77);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const observer = new ResizeObserver(() =>
      setHeight(header.getBoundingClientRect().height),
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return height;
}

/**
 * `stuck` is true while the bar is pinned under the header rather than sitting
 * in its own place. `hidden` is true while the reader scrolls down past that
 * point — the bar slides up behind the header to give the stories the room,
 * and comes back on the first scroll up. Small moves are ignored so trackpad
 * jitter can't make it flicker.
 */
function useStickyBarState(
  sentinelRef: React.RefObject<HTMLDivElement | null>,
  headerHeight: number,
) {
  const [hidden, setHidden] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const sentinel = sentinelRef.current;
      const isStuck =
        !!sentinel && sentinel.getBoundingClientRect().top < headerHeight;
      setStuck(isStuck);

      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) < 8) return;
      lastY = y;
      setHidden(isStuck && delta > 0);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // A reload can restore the page mid-scroll, already pinned.
    const sentinel = sentinelRef.current;
    if (sentinel) setStuck(sentinel.getBoundingClientRect().top < headerHeight);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sentinelRef, headerHeight]);

  return { hidden, stuck };
}

/** `appearance-none` plus a drawn chevron, so the control matches the inputs. */
function Select({
  id,
  value,
  onChange,
  children,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        FIELD,
        "w-full cursor-pointer appearance-none bg-no-repeat pl-3.5 pr-9",
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath fill='none' stroke='%236B6B6B' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
        backgroundPosition: "right 14px center",
      }}
    >
      {children}
    </select>
  );
}

export default CaseStudyFilters;
