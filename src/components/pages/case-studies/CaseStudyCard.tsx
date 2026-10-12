import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/data/caseStudies";

/**
 * One story. The card shows a headline, a tinted stat block, a snapshot line
 * and two rows of chips; "Read the story" opens the full story — the pain, the
 * challenges, the fix, the outcomes and an executive quote — in a centred
 * dialog.
 *
 * The dialog grows out of the card it was opened from and shrinks back into it
 * on close (a FLIP animation via the Web Animations API), so the reader keeps
 * track of which story they opened. The card itself hides while its dialog is
 * up, which sells the "lifted out" effect.
 */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-label font-semibold uppercase tracking-[0.06em] text-accent">
      {children}
    </p>
  );
}

const ENTER_MS = 420;
const EXIT_MS = 300;
const EASING = "cubic-bezier(0.2, 0.8, 0.2, 1)";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** The parts the card and the dialog share. */
function StoryHeader({
  study,
  useCaseLabel,
  trailing,
}: {
  study: CaseStudy;
  useCaseLabel: string;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center rounded-sm bg-accent-surface px-2.5 py-1 text-caption font-bold tracking-[0.02em] text-accent">
        {useCaseLabel}
      </span>
      <div className="flex shrink-0 items-center gap-4">
        <span className="text-caption tabular-nums text-content-muted">
          Case {study.id}
        </span>
        {trailing}
      </div>
    </div>
  );
}

function StorySummary({
  study,
  productLabels,
}: {
  study: CaseStudy;
  productLabels: string[];
}) {
  return (
    <>
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
    </>
  );
}

function TallyBadge() {
  return (
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
  const cardRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = useState<DOMRect | null>(null);

  const openStory = () => {
    if (cardRef.current) setOrigin(cardRef.current.getBoundingClientRect());
  };

  const closeStory = useCallback(() => {
    setOrigin(null);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <article
        ref={cardRef}
        className={cn(
          "flex h-full w-full flex-col gap-5 rounded-xl border border-line bg-surface p-6 transition-[colors,box-shadow] duration-200 hover:border-line-strong hover:shadow-card-raised lg:p-7",
          origin && "invisible"
        )}
      >
        <StoryHeader study={study} useCaseLabel={useCaseLabel} />

        <h4 className="text-balance text-[22px] font-bold leading-[1.25] tracking-negative text-content">
          {study.title}
        </h4>

        <StorySummary study={study} productLabels={productLabels} />

        {/* `mt-auto` pins the footer to the bottom of the tallest card in a row. */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <TallyBadge />

          <button
            ref={triggerRef}
            type="button"
            aria-haspopup="dialog"
            onClick={openStory}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-sm border border-line bg-surface px-3.5 py-2",
              "text-[14px] font-medium text-content transition-colors duration-200",
              "hover:border-accent-surface hover:bg-accent-surface hover:text-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            )}
          >
            Read the story →
          </button>
        </div>
      </article>

      {origin &&
        createPortal(
          <StoryDialog
            study={study}
            useCaseLabel={useCaseLabel}
            productLabels={productLabels}
            origin={origin}
            onClose={closeStory}
          />,
          document.body
        )}
    </>
  );
}

function StoryDialog({
  study,
  useCaseLabel,
  productLabels,
  origin,
  onClose,
}: {
  study: CaseStudy;
  useCaseLabel: string;
  productLabels: string[];
  origin: DOMRect;
  onClose: () => void;
}) {
  const titleId = useId();
  const backdropRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);

  /** The transform that maps the dialog's box back onto the card's. */
  const originTransform = useCallback(() => {
    const box = dialogRef.current!.getBoundingClientRect();
    const dx = origin.left + origin.width / 2 - (box.left + box.width / 2);
    const dy = origin.top + origin.height / 2 - (box.top + box.height / 2);
    const sx = origin.width / box.width;
    const sy = origin.height / box.height;
    return `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
  }, [origin]);

  // Grow out of the card before the first paint, so there's no flash of the
  // dialog at full size.
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (prefersReducedMotion()) {
      dialog.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 150 });
    } else {
      dialog.animate(
        [{ transform: originTransform(), opacity: 0.6 }, { transform: "none", opacity: 1 }],
        { duration: ENTER_MS, easing: EASING }
      );
      // The content would smear while the box scales, so it fades in once
      // the box is most of the way there.
      bodyRef.current?.animate(
        [{ opacity: 0 }, { opacity: 0, offset: 0.45 }, { opacity: 1 }],
        { duration: ENTER_MS, easing: "ease-out" }
      );
    }
    backdropRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: ENTER_MS,
      easing: "ease-out",
    });
    closeRef.current?.focus({ preventScroll: true });
  }, [originTransform]);

  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;

    const dialog = dialogRef.current;
    if (!dialog || prefersReducedMotion()) {
      onClose();
      return;
    }

    bodyRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: EXIT_MS / 2,
      fill: "forwards",
    });
    backdropRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: EXIT_MS,
      fill: "forwards",
    });
    dialog
      .animate(
        [{ transform: "none", opacity: 1 }, { transform: originTransform(), opacity: 0.6 }],
        { duration: EXIT_MS, easing: EASING, fill: "forwards" }
      )
      .finished.then(onClose, onClose);
  }, [onClose, originTransform]);

  // Lock the page behind, and close on Escape.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8">
      <div
        ref={backdropRef}
        aria-hidden="true"
        onClick={close}
        className="absolute inset-0 bg-content/60 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-full w-[880px] max-w-full origin-center flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-overlay will-change-transform"
      >
        <div ref={bodyRef} className="flex min-h-0 flex-col">
          {/* The header stays put while the story scrolls under it, so the
              close control is always within reach. */}
          <div className="border-b border-line px-6 py-4 lg:px-8">
            <StoryHeader
              study={study}
              useCaseLabel={useCaseLabel}
              trailing={
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close story"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-content-muted transition-colors hover:bg-surface-muted hover:text-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M5 5L15 15M15 5L5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              }
            />
          </div>

          <div className="flex min-h-0 flex-col gap-6 overflow-y-auto overscroll-contain px-6 py-6 lg:px-8 lg:py-7">
            <h2
              id={titleId}
              className="text-balance text-[26px] font-bold leading-[1.2] tracking-negative text-content"
            >
              {study.title}
            </h2>

            <StorySummary study={study} productLabels={productLabels} />

            <div className="flex flex-col gap-6 border-t border-line pt-6">
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

            <div className="border-t border-line pt-5">
              <TallyBadge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyCard;
