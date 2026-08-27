import React, { useId } from "react";
import { cn } from "@/lib/cn";
import type { CaseStudyOption } from "@/data/caseStudies";

/**
 * The sticky filter bar: a search field over an industry / product /
 * problem-solved row, a reset, and the match count.
 *
 * The design pins this under the header, so `top` has to clear it. The header
 * is 96px at `xl` and shorter below, and the bar only becomes sticky where the
 * full-width layout applies — on a phone the whole row would eat the viewport.
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

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-label font-medium uppercase tracking-[0.04em] text-content-muted"
    >
      {children}
    </label>
  );
}

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
  const searchId = `${ids}-search`;
  const industryId = `${ids}-industry`;
  const productId = `${ids}-product`;
  const useCaseId = `${ids}-usecase`;

  const hasActiveFilters =
    filters.industry !== "all" ||
    filters.product !== "all" ||
    filters.useCase !== "all" ||
    filters.search.trim() !== "";

  return (
    <div className="border-y border-line bg-surface xl:sticky xl:top-24 xl:z-40">
      <div className="mx-auto w-full max-w-frame px-5 py-5 md:px-10 lg:px-gutter">
        <div className="mb-3 flex flex-col gap-1.5">
          <FieldLabel htmlFor={searchId}>Search</FieldLabel>
          {/* The search glyph is a background image rather than an absolutely
              positioned node, so the input keeps a single box for focus ring
              and border to paint on. */}
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

        <div className="grid grid-cols-1 items-end gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(3,1fr)_auto]">
          <div className="flex flex-col gap-1.5">
            <FieldLabel htmlFor={industryId}>Industry</FieldLabel>
            <Select
              id={industryId}
              value={filters.industry}
              onChange={(v) => onChange("industry", v)}
            >
              {industryOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <FieldLabel htmlFor={productId}>Product</FieldLabel>
            <Select
              id={productId}
              value={filters.product}
              onChange={(v) => onChange("product", v)}
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

          <div className="flex flex-col gap-1.5">
            <FieldLabel htmlFor={useCaseId}>Problem solved</FieldLabel>
            <Select
              id={useCaseId}
              value={filters.useCase}
              onChange={(v) => onChange("useCase", v)}
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
            onClick={onReset}
            className={cn(
              FIELD,
              "px-4 font-medium text-content-muted",
              "hover:border-accent hover:text-accent"
            )}
          >
            Reset
          </button>
        </div>

        <p className="mt-3.5 flex items-center justify-between gap-3 text-caption text-content-muted">
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
  );
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
        "w-full cursor-pointer appearance-none bg-no-repeat pl-3.5 pr-9"
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
