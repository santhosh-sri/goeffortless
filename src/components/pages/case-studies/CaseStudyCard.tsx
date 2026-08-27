import React, { useId, useState } from "react";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/data/caseStudies";

/**
 * One story. Collapsed it is a headline, a tinted stat block, a snapshot line
 * and two rows of chips; expanded it adds the pain, the challenges, the fix,
 * the outcomes and an executive quote.
 *
 * The design keeps the expanded body inside the same card rather than opening a
 * dialog, so a reader can compare two open stories side by side. Each card owns
 * its own open state for that reason — unlike the nav accordions, these are not
 * mutually exclusive.
 */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-label font-semibold uppercase tracking-[0.06em] text-accent">
      {children}
    </p>
  );
}

export function CaseStudyCard({
  study,
  useCaseLabel,
  productLabels,
}: {
  study: CaseStudy;
  useCaseLabel: string;
  productLabels: string[];
}) {
  const [open, setOpen] = useState(false);
  const bodyId = useId();

  return (
    <article className="flex h-full flex-col gap-5 rounded-xl border border-line bg-surface p-6 transition-[colors,box-shadow] duration-200 hover:border-line-strong hover:shadow-card-raised lg:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-sm bg-accent-surface px-2.5 py-1 text-caption font-bold tracking-[0.02em] text-accent">
          {useCaseLabel}
        </span>
        <span className="shrink-0 text-caption tabular-nums text-content-muted">
          Case {study.id}
        </span>
      </div>

      <h4 className="text-balance text-[22px] font-bold leading-[1.25] tracking-negative text-content">
        {study.title}
      </h4>

      {/* Figma tints this block with the accent surface rather than a gradient;
          the prototype's linear-gradient reads as a flat fill at this size. */}
      <div className="flex flex-col gap-1.5 rounded-lg border border-accent-surface bg-accent-surface/60 px-5 py-4">
        {study.stat.map((line) => (
          <p
            key={line}
            className="text-[20px] font-bold leading-[1.2] tracking-negative text-accent-hover"
          >
            {line}
          </p>
        ))}
      </div>

      <p className="text-[14px] font-medium leading-[18px] text-content-muted">
        {study.snapshot}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {productLabels.map((label) => (
          <span
            key={label}
            className="inline-flex items-center rounded-sm bg-accent-surface px-2.5 py-1 text-caption font-semibold text-accent"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {study.chips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center rounded-sm bg-surface-muted px-2.5 py-1 text-caption text-content-muted"
          >
            {chip}
          </span>
        ))}
      </div>

      {open && (
        <div
          id={bodyId}
          className="flex flex-col gap-6 border-t border-line pt-6"
        >
          <div>
            <Label>The Growing Pain</Label>
            <p className="text-pretty text-body text-content">{study.pain}</p>
          </div>

          <div>
            <Label>Key Challenges</Label>
            <ul className="flex flex-col gap-2.5">
              {study.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-body text-content-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-danger"
                  />
                  <span className="text-pretty">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label>The Effortless Fix</Label>
            <p className="text-pretty text-body text-content">{study.fix}</p>
          </div>

          <div>
            <Label>Quantifiable Outcomes</Label>
            <ul className="flex flex-col gap-3">
              {study.outcomes.map((outcome) => (
                <li key={outcome.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[12px] font-bold text-content-on-accent"
                  >
                    ✓
                  </span>
                  <span className="text-pretty text-body text-content-muted">
                    <strong className="font-bold text-content">
                      {outcome.title}:
                    </strong>{" "}
                    {outcome.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="rounded-r-lg border-l-[3px] border-accent bg-bg-subtle px-6 py-5">
            <Label>Executive Perspective</Label>
            <p className="text-pretty text-[17px] italic leading-[1.55] text-content">
              “{study.quote.text}”
            </p>
            <footer className="mt-3 text-caption font-semibold text-content-muted">
              — {study.quote.by}
            </footer>
          </blockquote>
        </div>
      )}

      {/* `mt-auto` pins the footer to the bottom of the tallest card in a row. */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <span
          title="Enterprise Grade Tally Sync: 2-Way industry-leading deep integration with Tally Prime; your books remain updated — always."
          className="inline-flex cursor-help items-center gap-1.5 rounded-full bg-bg-subtle px-3 py-1.5 text-caption font-semibold text-content-muted"
        >
          <span
            aria-hidden="true"
            className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-success text-[9px] font-bold text-white"
          >
            ✓
          </span>
          2-Way Tally Prime Sync
        </span>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={open ? bodyId : undefined}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-sm border border-line bg-surface px-3.5 py-2",
            "text-[14px] font-medium text-content transition-colors duration-200",
            "hover:border-accent-surface hover:bg-accent-surface hover:text-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          )}
        >
          {open ? "Collapse ↑" : "Read the story ↓"}
        </button>
      </div>
    </article>
  );
}

export default CaseStudyCard;
