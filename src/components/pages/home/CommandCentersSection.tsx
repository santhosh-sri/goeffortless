import Image from "next/image";
import React, { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { commandCenters } from "@/data/home";

/**
 * "One Platform. Five Command Centers." — Figma nodes 1694:2020 / 1614:1477.
 *
 * Tab bar: 8px radius, 20/11 padding, 14/16 semibold. Active pill is
 * `--color-success` (#16BA84) with a drop shadow tinted the same green.
 * Panel: copy + stat card on the left, a 2×3 feature grid (310px cards,
 * 32px accent-tinted icon tiles) on the right. First feature card is featured.
 *
 * All five panels come from the Figma component 1746:24067. The filter below
 * is kept as a guard so a tab can never render an empty panel.
 */
export function CommandCentersSection() {
  const tabs = useMemo(
    () => commandCenters.tabs.filter((tab) => tab.panel),
    []
  );
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  if (!active?.panel) return null;

  const { panel } = active;
  const showTabs = tabs.length > 1;

  return (
    <Section spacing="lg">
      <div className="flex flex-col items-center gap-8 lg:gap-12">
        <SectionHeading
          eyebrow={commandCenters.eyebrow}
          title={commandCenters.title}
          accentTitle={commandCenters.accentTitle}
        />

        {showTabs && (
          <div
            role="tablist"
            aria-label="Command centers"
            className="flex w-full flex-wrap items-start justify-center gap-3 max-lg:overflow-x-auto"
          >
            {tabs.map((tab) => {
              const selected = tab.id === active.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  id={`cc-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`cc-panel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "whitespace-nowrap rounded-lg px-5 py-[11px] text-[14px] font-semibold leading-4",
                    "transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                    selected
                      ? // The glow is tinted with the pill's own green
                        // (#16BA84 at 25%), not the accent orange.
                        "bg-success text-white shadow-[0px_4px_7px_rgba(22,186,132,0.25)]"
                      : "border border-line bg-surface text-content-muted hover:text-content"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        <div
          role={showTabs ? "tabpanel" : undefined}
          id={`cc-panel-${active.id}`}
          aria-labelledby={showTabs ? `cc-tab-${active.id}` : undefined}
          className="flex w-full flex-col items-start gap-5 lg:flex-row"
        >
          {/* ---- Copy + stat ---- */}
          <div className="flex w-full flex-col gap-5 lg:flex-1">
            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex items-center justify-center rounded-[16px] border border-accent/15 bg-accent/[0.07] px-3 py-1 text-[13px] font-semibold leading-[19.5px] text-accent">
                {panel.eyebrow}
              </span>

              <h3 className="text-heading-sm font-semibold text-content">
                {panel.title}
              </h3>

              <p className="text-body text-content-muted md:text-body-lg">
                {panel.description}
              </p>
            </div>

            {/* Figma renders this hug-width (168×46), not stretched across the
                column — the exported `w-full` sits on a wrapper that itself
                hugs. Full width is kept below lg, where the column is narrow. */}
            <Button
              href={panel.ctaHref}
              fullWidth
              className="h-[46px] rounded-lg text-[15px] font-bold lg:w-auto lg:self-start"
              trailingIcon={<span aria-hidden="true">→</span>}
            >
              {panel.ctaLabel}
            </Button>

            <div className="flex w-full flex-col items-center gap-5 rounded-card bg-accent-surface p-5 sm:flex-row">
              <Image
                src={panel.stat.illustration}
                alt=""
                width={100}
                height={100}
                className="h-[100px] w-[100px] shrink-0"
              />

              <span
                aria-hidden="true"
                className="hidden h-[184px] w-px shrink-0 border-l border-dashed border-accent/40 sm:block"
              />

              <div className="flex flex-1 flex-col gap-2 text-center sm:text-left">
                <p className="text-body leading-[18px] text-content-muted">
                  {panel.stat.lead}
                </p>
                <p className="text-[64px] font-bold leading-none text-accent lg:text-[80px] lg:leading-[94px]">
                  {panel.stat.value}
                </p>
                <p className="text-body-lg font-semibold text-content">
                  {panel.stat.headline}
                </p>
                <p className="text-body-lg text-content-muted">
                  {panel.stat.support}
                </p>
              </div>
            </div>
          </div>

          {/* ---- Feature grid ---- */}
          <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:w-[640px] xl:shrink-0">
            {panel.features.map((feature, index) => (
              <li key={feature.title} className="flex">
                <div
                  className={cn(
                    "flex h-full w-full flex-col justify-between gap-3 rounded-card bg-surface p-5",
                    index === 0
                      ? "shadow-[0px_4px_8px_rgba(0,0,0,0.1)]"
                      : "border border-line"
                  )}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent/[0.15]">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </span>

                  <h4 className="text-[14px] font-semibold leading-4 text-content">
                    {feature.title}
                  </h4>

                  <p className="text-[13px] leading-4 text-content-muted">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default CommandCentersSection;
