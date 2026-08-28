import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/cn";
import type { AllFeaturesCard, AllFeaturesGroup } from "@/data/allFeaturesPage";
import FeatureItemIcon from "./FeatureItemIcon";
import FeatureListModal from "./FeatureListModal";

/**
 * The module catalogue — Figma nodes 2426:64118 (Core Products), 2444:74938
 * (procurement add-ons) and 2444:75354 (sales add-ons).
 *
 * Labelled groups of cards. Each card is a coloured header bar, an icon and
 * title, a subtitle, a feature list and a footer label.
 *
 * The design draws two card widths and the layout differs with them. The two
 * core products are 646px and put the subtitle beside the 40px icon; the 424px
 * add-on and enabler cards use a 24px icon and drop the subtitle to its own
 * full-width line below. `tone` selects between them.
 *
 * The design gives every row one of five decorative glyphs, cycled without
 * regard to the feature — it repeats one four times running on "Purchase
 * Orders & Vendor Expense Management". Each row carries its own icon from the
 * catalogue instead; see `FeatureItemIcon`.
 */

/** Figma: green #16BA84, orange #F08B32, neutral #D8D8D8 with dark text. */
const HEADER_TONE = {
  primary: "bg-success text-white",
  addon: "bg-accent text-content-on-accent",
  enabler: "bg-surface-muted text-content",
} as const;

function Card({
  card,
  onOpenAll,
}: {
  card: AllFeaturesCard;
  onOpenAll: (card: AllFeaturesCard) => void;
}) {
  // The core-product cards are the wide variant; everything else is narrow.
  const wide = card.tone === "primary";
  const allItems = card.allItems?.length ? card.allItems : undefined;
  // The icon exports bake in their own peach tile, so they are sized as a
  // whole rather than wrapped in one: 40px on the wide card, 24px otherwise.
  const iconSize = wide ? 40 : 24;

  const subtitle = (
    <p className="text-[13px] leading-4 text-content-muted">{card.subtitle}</p>
  );

  return (
    <li className="flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-card-raised">
      <div
        className={cn(
          "flex items-center gap-3 p-5",
          card.chip ? "justify-between" : "justify-center",
          HEADER_TONE[card.tone]
        )}
      >
        <p
          className={cn(
            "text-[20px] capitalize leading-normal",
            card.tone === "enabler" ? "font-semibold" : "font-bold"
          )}
        >
          {card.header}
        </p>
        {card.chip && (
          <span className="shrink-0 rounded-sm bg-surface px-1.5 py-1 text-[13px] font-medium leading-4 text-success">
            {card.chip}
          </span>
        )}
      </div>

      {/* justify-between pins the footer to the bottom of the tallest card. */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "flex border-b border-dashed border-line",
              wide ? "gap-2 pb-3" : "flex-col gap-2 pb-2"
            )}
          >
            <div className="flex items-center gap-2">
              <Image
                src={card.icon}
                alt=""
                width={iconSize}
                height={iconSize}
                style={{ width: iconSize, height: iconSize }}
                className="shrink-0"
              />
              {!wide && (
                <h3 className="text-[20px] font-medium leading-normal tracking-negative text-content">
                  {card.title}
                </h3>
              )}
            </div>

            {wide ? (
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="text-[20px] font-medium leading-[22px] text-content">
                  {card.title}
                </h3>
                {subtitle}
              </div>
            ) : (
              subtitle
            )}
          </div>

          <ul className="flex flex-col gap-4">
            {card.items.map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <FeatureItemIcon
                  src={item.icon}
                  size={16}
                  className="mt-0.5"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-[13px] capitalize leading-4 text-content">
                    {item.title}
                  </p>
                  <p className="text-caption text-content-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/*
          The footer opens the full-list dialog (Figma 2117:5702), and falls
          back to a static label for any card that has no list yet.

          The count is derived from the list rather than taken from the design
          copy: several footers name a number the written catalogue cannot
          fill — Sales reads 25 against a 24-card frame — so the label states
          what the dialog actually contains.
        */}
        {allItems ? (
          <button
            type="button"
            onClick={() => onOpenAll(card)}
            className="flex items-center justify-center gap-1 rounded-lg bg-accent-surface px-4 py-3 text-[13px] font-bold leading-4 text-accent transition-opacity hover:opacity-80"
          >
            {`See all ${String(allItems.length).padStart(2, "0")} features`}
            <Image
              src="/assets/all-features/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 shrink-0"
            />
          </button>
        ) : (
          <p className="flex items-center justify-center gap-1 rounded-lg bg-accent-surface px-4 py-3 text-[13px] font-bold leading-4 text-accent">
            {card.footer}
            <Image
              src="/assets/all-features/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 shrink-0"
            />
          </p>
        )}
      </div>
    </li>
  );
}

/**
 * A run of groups, without a band of its own — the page composes the bands,
 * because Figma splits these groups across the subtle and white backgrounds.
 */
export function FeatureGroups({ groups }: { groups: AllFeaturesGroup[] }) {
  const [openCard, setOpenCard] = useState<AllFeaturesCard | null>(null);

  return (
    <div className="flex flex-col gap-12 lg:gap-20">
      {groups.map((group) => (
        <section key={group.label} className="flex flex-col gap-6 lg:gap-8">
          {/* Label centred on a dashed rule, per the design. */}
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 border-t border-dashed border-line" />
            <h2 className="text-center text-body font-bold capitalize tracking-[-0.24px] text-accent md:text-heading-sm">
              {group.label}
            </h2>
            <span className="h-px flex-1 border-t border-dashed border-line" />
          </div>

          <ul
            className={cn(
              "grid grid-cols-1 gap-x-5 gap-y-10",
              group.cards.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 xl:grid-cols-3",
            )}
          >
            {group.cards.map((card, index) => (
              <Card
                key={`${card.title}-${index}`}
                card={card}
                onOpenAll={setOpenCard}
              />
            ))}
          </ul>
        </section>
      ))}

      <FeatureListModal
        card={openCard}
        open={openCard !== null}
        onClose={() => setOpenCard(null)}
      />
    </div>
  );
}

export default FeatureGroups;
