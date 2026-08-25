import React from "react";
import Modal from "@/components/ModalComponent/Modal";
import type { AllFeaturesCard } from "@/data/allFeaturesPage";
import FeatureItemIcon from "./FeatureItemIcon";

/**
 * The "See all NN features" dialog — Figma node 2117:5702.
 *
 * A 1180 × 816 white card holding the card's complete feature list in a
 * four-column grid of 276px chips: a 32px peach icon tile, a title, and a
 * one-line description under a fixed gap.
 *
 * Two departures from the frame, both flagged rather than reproduced:
 *  - The frame has no heading, only a bare close control, so nothing names the
 *    product whose features are listed. The card's title is rendered as a
 *    screen-reader-only heading to label the dialog; add a visible one if the
 *    design gains it.
 *  - The frame is drawn at one fixed width with no narrow variant. Below `md`
 *    this falls back to a single column and the grid scrolls, so the dialog
 *    stays usable on a phone.
 *
 * Figma cycles five decorative glyphs here without mapping any to a feature.
 * Each row shows its own icon from the catalogue instead — see
 * `FeatureItemIcon` — since a real glyph per feature is more use than a
 * rotation, and the design's own repetition carries no meaning to preserve.
 */

export function FeatureListModal({
  card,
  open,
  onClose,
}: {
  card: AllFeaturesCard | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!card?.allItems?.length) return null;

  const titleId = "feature-list-modal-title";

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      className="w-[1180px] max-w-[calc(100vw-32px)]"
    >
      <h2 id={titleId} className="sr-only">
        {card.title} — all {card.allItems.length} features
      </h2>

      {/* Figma: a 20px close glyph inset 20 from the top-right corner. */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-5 w-5 items-center justify-center text-danger transition-opacity hover:opacity-70"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 5L15 15M15 5L5 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* 52 of clearance under the close control, 20 of padding, 12 gutters. */}
      <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-5 pb-5 pt-[52px]">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {card.allItems.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-6 rounded-lg border border-line p-3"
            >
              <div className="flex items-start gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-surface">
                  <FeatureItemIcon src={item.icon} size={20} />
                </span>
                {/*
                  `min-w-0` plus a wrap rule, because the catalogue carries
                  titles with long unbroken runs — "Single Window for all
                  Payment Types (Vendor/Customer/Statutory/Advances/Others)"
                  overflows the 276px chip otherwise.
                */}
                <h3 className="min-w-0 break-words text-[13px] font-semibold leading-4 text-content">
                  {item.title}
                </h3>
              </div>

              <p className="text-caption leading-4 text-content-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default FeatureListModal;
