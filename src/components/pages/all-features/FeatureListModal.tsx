import React from "react";
import Modal from "@/components/ModalComponent/Modal";
import type { AllFeaturesCard } from "@/data/allFeaturesPage";
import FeatureItemIcon from "./FeatureItemIcon";

/**
 * The "See all NN features" dialog — Figma node 2117:5702.
 *
 * A 1180 × 816 white card holding the card's complete feature list in a
 * four-column grid of 276px chips: a 32px peach icon tile, a title, and its
 * description below.
 *
 * The frame sets a fixed 24px gap between the title and the description, drawn
 * against one-line titles. The real catalogue wraps titles to three lines, so
 * that gap aligns nothing and only opens a void inside the short chips — and
 * an inner gap wider than the chip's own padding reads as content escaping the
 * box. The pair is spaced on the card's 8/16 rhythm instead: 16px of padding
 * around 8px between title and description.
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

      <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-5 pb-5">
        {/*
          The close control rides a sticky bar rather than sitting `absolute`
          over the card: the list is long enough to scroll, and an absolute
          glyph had chips sliding under it with nothing behind, so the two
          collided. The bar carries the surface fill (and the card's top
          radius, which it would otherwise square off) so rows pass cleanly
          beneath it, and the control stays reachable at any scroll position.
        */}
        <div className="sticky top-0 z-10 -mx-5 flex justify-end rounded-t-xl bg-surface px-5 pb-3 pt-5">
          {/* Figma: a 20px close glyph inset 20 from the top-right corner. */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-5 w-5 items-center justify-center text-danger transition-opacity hover:opacity-70"
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
        </div>

        {/*
          `auto-rows-fr` sizes every row to the tallest chip in the whole grid
          rather than the tallest in its own row, so all 24 chips come out one
          size. Without it each row self-sizes and the grid steps up and down
          as the descriptions change length.
        */}
        <ul className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {card.allItems.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 rounded-xl border border-line p-4"
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
                <h3 className="min-w-0 break-words text-[13px] font-semibold capitalize leading-4 text-content">
                  {item.title}
                </h3>
              </div>

              <p className="text-caption text-content-muted">
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
