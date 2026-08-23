import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import type { AllFeaturesCard, AllFeaturesGroup } from "@/data/allFeaturesPage";

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
 * The per-item glyphs are a fixed five-icon decorative rotation in the design,
 * reused across every card rather than chosen per feature. Figma cycles them in
 * a different order on each card and repeats one glyph four times running on
 * "Purchase Orders & Vendor Expense Management", so there is no rule to encode.
 * They cycle by index here — flagged rather than silently reproduced.
 */
const ITEM_ICONS = [
  "/assets/all-features/item-1.svg",
  "/assets/all-features/item-2.svg",
  "/assets/all-features/item-3.svg",
  "/assets/all-features/item-4.svg",
  "/assets/all-features/item-5.svg",
];

/** Figma: green #16BA84, orange #F08B32, neutral #D8D8D8 with dark text. */
const HEADER_TONE = {
  primary: "bg-success text-white",
  addon: "bg-accent text-content-on-accent",
  enabler: "bg-surface-muted text-content",
} as const;

function Card({ card }: { card: AllFeaturesCard }) {
  // The core-product cards are the wide variant; everything else is narrow.
  const wide = card.tone === "primary";
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
            {card.items.map((item, index) => (
              <li key={item.title} className="flex items-start gap-2">
                <Image
                  src={ITEM_ICONS[index % ITEM_ICONS.length]}
                  alt=""
                  width={16}
                  height={16}
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-[13px] capitalize leading-4 text-content">
                    {item.title}
                  </p>
                  <p className="text-caption leading-4 text-content-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/*
          The design gives these footers no destination, so they are labels
          rather than invented links.
        */}
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
      </div>
    </li>
  );
}

/**
 * A run of groups, without a band of its own — the page composes the bands,
 * because Figma splits these groups across the subtle and white backgrounds.
 */
export function FeatureGroups({ groups }: { groups: AllFeaturesGroup[] }) {
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
                : "md:grid-cols-2 xl:grid-cols-3"
            )}
          >
            {group.cards.map((card, index) => (
              <Card key={`${card.title}-${index}`} card={card} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default FeatureGroups;
