import React from "react";
import Metadata from "@/components/Metadata";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import PlatformCards from "./PlatformCards";
import GetStartedSection from "./GetStartedSection";
import ComparisonTable from "./ComparisonTable";
import { pricingHero, pricingPlatforms } from "@/data/pricing";
import type { PricingDetail } from "@/data/pricingDetail";

/**
 * Pricing detail page — Figma 2410:56867 (Procurement, 1440 × 8900) and
 * 2410:54564 (Sales, 1440 × 12173).
 *
 * Both frames are the same page with different content, so one component
 * renders both from `src/data/pricingDetail.ts`.
 */
export function PricingDetailPage({
  detail,
  metadata,
}: {
  detail: PricingDetail;
  metadata?: Record<string, unknown>;
}) {
  const platform = pricingPlatforms[detail.platformIndex];

  return (
    <>
      <Metadata {...metadata} />

      <div className="min-h-screen bg-bg text-content">
        <SiteHeader />

        <main>
          <Section tone="subtle" spacing="md">
            <div className="flex flex-col gap-10">
              {/* Same hero as /pricing — Figma 2410:56886 repeats it verbatim,
                  hard line break before the accent clause included. */}
              <SectionHeading
                as="h1"
                eyebrow={pricingHero.eyebrow}
                title={pricingHero.title}
                accentTitle={pricingHero.accentTitle}
                description={pricingHero.description}
                accentOnNewLine
                headingClassName="lg:leading-[80px]"
              />

              {/* Only this platform's card, per the design. */}
              <PlatformCards platforms={[platform]} />
            </div>
          </Section>

          {/* ---- Platform Extensions ---- */}
          <Section spacing="lg">
            <div className="flex flex-col gap-10">
              <SectionHeading
                eyebrow={detail.extensions.eyebrow}
                title={detail.extensions.title}
                accentTitle={detail.extensions.accentTitle}
                description={detail.extensions.description}
              />

              <ul className="flex flex-col gap-5">
                {detail.extensions.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex flex-col gap-4 rounded-card border border-line-subtle bg-surface p-5 shadow-card">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-body font-bold uppercase tracking-wide text-accent">
                            {item.name}
                          </h3>
                          <p className="text-[14px] leading-[20px] text-content-muted">
                            {item.subtitle}
                          </p>
                        </div>
                        <Badge tone="accent">{item.chip}</Badge>
                      </div>

                      <p className="rounded-sm bg-bg-inset px-4 py-3 text-[14px] leading-[22px] text-content-muted">
                        {item.flow}
                      </p>

                      <dl className="flex flex-col">
                        {item.rows.map((row) => (
                          <div
                            key={row.label}
                            className="flex items-center justify-between gap-4 border-t border-dashed border-line-subtle py-3"
                          >
                            <dt className="text-body text-content-muted">
                              {row.label}
                            </dt>
                            <dd className="text-body font-semibold text-content">
                              {row.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* ---- Choose Your Edition ---- */}
          <Section tone="subtle" spacing="lg">
            <div className="flex flex-col gap-10">
              <SectionHeading
                eyebrow={detail.editions.eyebrow}
                title={detail.editions.title}
                accentTitle={detail.editions.accentTitle}
                description={detail.editions.description}
              />

              <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {detail.editions.plans.map((plan) => (
                  <li key={plan.name} className="relative flex pt-4">
                    {plan.ribbon && (
                      <span className="absolute left-6 top-0 z-10 rounded-sm bg-accent px-3 py-1 text-label font-semibold text-white">
                        {plan.ribbon}
                      </span>
                    )}

                    <div
                      className={cn(
                        "flex w-full flex-col gap-4 rounded-card bg-surface p-6",
                        plan.featured
                          ? "border-2 border-accent"
                          : "border border-line-subtle"
                      )}
                    >
                      <h3 className="text-heading-md font-semibold text-content">
                        {plan.name}
                      </h3>

                      <div className="flex flex-wrap items-end justify-between gap-3">
                        <p className="text-heading-lg font-bold text-accent">
                          {plan.price}
                        </p>
                        <p className="text-[14px] font-semibold text-content-muted">
                          {plan.users}
                        </p>
                      </div>

                      <p className="text-[13px] leading-[18px] text-content-muted">
                        {plan.terms}
                      </p>

                      <p className="rounded-sm bg-bg-inset px-4 py-2.5 text-body text-content">
                        {plan.setup}
                      </p>

                      <dl className="flex flex-col">
                        {plan.includes.map((row) => (
                          <div
                            key={row.label}
                            className="flex items-center justify-between gap-4 border-b border-dashed border-line-subtle py-3"
                          >
                            <dt className="flex items-center gap-2 text-body text-content">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M20 6 9 17l-5-5"
                                  stroke="rgb(var(--color-accent))"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {row.label}
                            </dt>
                            <dd className="text-body font-semibold text-content">
                              {row.value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <p className="text-[14px] text-content-muted">
                        {plan.extraUsers}
                      </p>

                      <Button
                        calBooking
                        variant={plan.featured ? "primary" : "secondary"}
                        fullWidth
                        className="mt-auto font-semibold"
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* ---- Compare every feature ---- */}
          <Section spacing="lg">
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow={detail.comparison.eyebrow}
                title={detail.comparison.title}
                accentTitle={detail.comparison.accentTitle}
                description={detail.comparison.description}
              />

              <ComparisonTable sections={detail.comparison.sections} />
            </div>
          </Section>

          <GetStartedSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default PricingDetailPage;
