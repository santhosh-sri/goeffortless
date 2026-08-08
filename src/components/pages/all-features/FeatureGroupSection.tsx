import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Section from "@/components/ui/Section";
import { allFeaturesGroups } from "@/data/allFeaturesPage";
import type { AllFeaturesCard } from "@/data/allFeaturesPage";

/**
 * The module catalogue — Figma nodes 2426:64118, 2444:74938 and 2444:75354.
 *
 * Three labelled groups of cards. Each card is a coloured header bar, an icon
 * and title, a subtitle, a feature list and a footer label.
 *
 * The per-item glyphs are a fixed five-icon decorative rotation in the design,
 * reused across every card rather than chosen per feature, so they cycle by
 * index here. One card ("Field Reimbursement Claims") repeats the second glyph
 * for its last three rows instead of continuing the rotation; that looks like a
 * slip, so the consistent rotation is used throughout — flagged rather than
 * silently reproduced.
 */
const ITEM_ICONS = [
  "/assets/all-features/item-1.svg",
  "/assets/all-features/item-2.svg",
  "/assets/all-features/item-3.svg",
  "/assets/all-features/item-4.svg",
  "/assets/all-features/item-5.svg",
];

const HEADER_TONE = {
  primary: "bg-success text-white",
  addon: "bg-accent text-white",
  enabler: "bg-bg-inset text-content",
} as const;

function Card({ card }: { card: AllFeaturesCard }) {
  return (
    <li className="flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-card">
      <div
        className={cn(
          "flex items-center gap-3 px-5 py-4",
          card.chip ? "justify-between" : "justify-center",
          HEADER_TONE[card.tone]
        )}
      >
        <p className="text-body font-semibold">{card.header}</p>
        {card.chip && (
          <span className="rounded-[16px] border border-white/40 px-2.5 py-1 text-caption font-medium">
            {card.chip}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start gap-3">
          <Image
            src={card.icon}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] font-semibold leading-[24px] text-content">
              {card.title}
            </h3>
            <p className="text-[14px] leading-[20px] text-content-muted">
              {card.subtitle}
            </p>
          </div>
        </div>

        <ul className="flex flex-1 flex-col gap-3 border-t border-dashed border-line-subtle pt-4">
          {card.items.map((item, index) => (
            <li key={item.title} className="flex items-start gap-3">
              <Image
                src={ITEM_ICONS[index % ITEM_ICONS.length]}
                alt=""
                width={16}
                height={16}
                className="mt-1 h-4 w-4 shrink-0"
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-[15px] font-medium leading-[20px] text-content">
                  {item.title}
                </p>
                <p className="text-[13px] leading-[18px] text-content-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/*
          The design gives these footers no destination, so they are labels
          rather than invented links.
        */}
        <p className="rounded-sm bg-accent-subtle px-4 py-3 text-center text-body font-semibold text-accent">
          {card.footer} <span aria-hidden="true">→</span>
        </p>
      </div>
    </li>
  );
}

export function FeatureGroupSection() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-12 lg:gap-16">
        {allFeaturesGroups.map((group) => (
          <section key={group.label} className="flex flex-col gap-6 lg:gap-8">
            {/* Label centred on a dashed rule, per the design. */}
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 border-t border-dashed border-line" />
              <h2 className="text-body font-semibold text-accent md:text-body-lg">
                {group.label}
              </h2>
              <span className="h-px flex-1 border-t border-dashed border-line" />
            </div>

            <ul
              className={cn(
                "grid grid-cols-1 gap-6",
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
    </Section>
  );
}

export default FeatureGroupSection;
