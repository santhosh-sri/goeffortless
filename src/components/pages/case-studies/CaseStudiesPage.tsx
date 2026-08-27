import React, { useMemo, useState } from "react";
import Metadata from "@/components/Metadata";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  caseStudies,
  caseStudiesByTheNumbers,
  caseStudiesClosingCta,
  caseStudiesHero,
  caseStudiesMidCta,
  caseStudiesObjection,
  caseStudyProducts,
  caseStudySections,
  caseStudyUseCases,
} from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyFilters, {
  type CaseStudyFilterState,
  type ProductGroup,
} from "./CaseStudyFilters";

/**
 * Case Studies — built from the Claude Design handoff bundle
 * (`case-studies-page-build`), which supersedes the CMS-rendered page the
 * `[...services]` catch-all used to serve for this slug.
 *
 * The prototype shipped its own header, footer and dark closing band. Those are
 * scaffolding: the real page uses `SiteHeader`/`SiteFooter`, and the closing CTA
 * sits on the subtle band every other redesigned page closes with rather than
 * the prototype's `#1A1A1A`. Bringing a dark band back would be the only one on
 * the light-theme site — flagged rather than reproduced.
 *
 * The prototype's design-system tokens map onto the theme's almost exactly
 * (`--orange-500` is `accent`, `--ink-900` is `content`, `--surface-page` is
 * `bg-subtle`), so nothing new is introduced for this page.
 */

/**
 * Products grouped under the two primary products, from the prototype's
 * `renderVals`. Several add-ons hang off both, so ids repeat between groups —
 * that is intentional, and filtering matches on the id either way.
 */
const PRODUCT_GROUPS: ProductGroup[] = [
  {
    label: "Effortless Procurement",
    options: [
      { id: "procurement", label: "Purchase Orders & Vendor Expense" },
      { id: "claims", label: "Field Reimbursement Claims (add-on)" },
      { id: "banking", label: "Banking & Cash Flow" },
      { id: "approvals", label: "Cross-Team Approvals" },
      { id: "dashboard", label: "Business Health Dashboard" },
    ],
  },
  {
    label: "Effortless Sales",
    options: [
      { id: "sales", label: "Sales & Fleet on Street" },
      { id: "connect", label: "Buyer Portal / Effortless Connect (add-on)" },
      { id: "contracts", label: "Recurring Contract Billing (add-on)" },
      { id: "claims", label: "Field Reimbursement Claims (add-on)" },
      { id: "field", label: "Field Team Tracking" },
      { id: "banking", label: "Banking & Cash Flow" },
      { id: "approvals", label: "Cross-Team Approvals" },
      { id: "dashboard", label: "Business Health Dashboard" },
    ],
  },
];

const EMPTY_FILTERS: CaseStudyFilterState = {
  industry: "all",
  product: "all",
  useCase: "all",
  search: "",
};

const USE_CASE_LABELS = new Map(caseStudyUseCases.map((u) => [u.id, u.label]));
const PRODUCT_LABELS = new Map(caseStudyProducts.map((p) => [p.id, p.label]));

export function CaseStudiesPage({
  metadata,
}: {
  metadata?: Record<string, unknown>;
}) {
  const [filters, setFilters] = useState<CaseStudyFilterState>(EMPTY_FILTERS);

  const setFilter = (key: keyof CaseStudyFilterState, value: string) =>
    setFilters((current) => ({ ...current, [key]: value }));

  const visibleSections = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    const matches = (study: (typeof caseStudies)[number]) => {
      if (filters.industry !== "all" && study.section !== filters.industry) {
        return false;
      }
      if (filters.useCase !== "all" && study.useCase !== filters.useCase) {
        return false;
      }
      if (
        filters.product !== "all" &&
        !study.products.includes(filters.product)
      ) {
        return false;
      }
      if (query) {
        // Same fields the prototype searched: everything a reader can see
        // before expanding, plus the pain and the fix.
        const haystack = [
          study.title,
          study.snapshot,
          study.pain,
          study.fix,
          ...study.chips,
          ...study.stat,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    };

    const filtered = caseStudies.filter(matches);

    // Sections keep their authored order, and so do the use-case groups inside
    // them — both are editorial sequences, not alphabetical.
    const sections = caseStudySections
      .map((section) => {
        const inSection = filtered.filter((s) => s.section === section.id);
        if (inSection.length === 0) return null;

        const groups = caseStudyUseCases
          .map((useCase) => {
            const cards = inSection.filter((s) => s.useCase === useCase.id);
            if (cards.length === 0) return null;
            return { id: useCase.id, label: useCase.label, cards };
          })
          .filter((g): g is NonNullable<typeof g> => g !== null);

        return { ...section, groups };
      })
      .filter((s): s is NonNullable<typeof s> => s !== null);

    return { sections, matchCount: filtered.length };
  }, [filters]);

  const industryOptions = useMemo(
    () => [
      { id: "all", label: "All industries" },
      ...caseStudySections.map((s) => ({ id: s.id, label: s.title })),
    ],
    []
  );

  const useCaseOptions = useMemo(
    () => [
      { id: "all", label: "All problems solved" },
      ...caseStudyUseCases,
    ],
    []
  );

  return (
    <>
      <Metadata {...metadata} />

      <div className="min-h-screen bg-bg text-content">
        <SiteHeader />

        <main>
          {/* ---- Hero ---- */}
          <Section tone="subtle" spacing="lg">
            <div className="mx-auto flex max-w-[960px] flex-col items-center gap-6 text-center">
              <SectionHeading
                as="h1"
                eyebrow={caseStudiesHero.eyebrow}
                title={caseStudiesHero.title}
                accentTitle={caseStudiesHero.accentTitle}
                titleSuffix={caseStudiesHero.titleSuffix}
                accentOnNewLine
                description={caseStudiesHero.description}
              />

              <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-3">
                <Button calBooking size="lg" fullWidth className="sm:w-auto">
                  {caseStudiesHero.primaryCta}
                </Button>
                <Button
                  href={caseStudiesHero.secondaryCta.href}
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="sm:w-auto"
                >
                  {caseStudiesHero.secondaryCta.label}
                </Button>
              </div>

              <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-caption font-semibold uppercase tracking-[0.02em] text-content-muted">
                {caseStudiesHero.proofPoints.map((point, index) => (
                  <React.Fragment key={point}>
                    {index > 0 && (
                      <li aria-hidden="true" className="text-line-strong">
                        ·
                      </li>
                    )}
                    <li>{point}</li>
                  </React.Fragment>
                ))}
              </ul>

              {/* Jump links to all six sections, regardless of the filter —
                  the prototype keeps them fixed so the page's shape stays
                  legible while filtering. */}
              <nav
                aria-label="Jump to industry"
                className="flex flex-wrap justify-center gap-2"
              >
                {caseStudySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#section-${section.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-caption font-semibold text-content-muted transition-colors duration-200 hover:border-accent-surface hover:bg-accent-surface hover:text-accent"
                  >
                    <span className="font-bold text-accent">{section.num}</span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </Section>

          <CaseStudyFilters
            filters={filters}
            onChange={setFilter}
            onReset={() => setFilters(EMPTY_FILTERS)}
            industryOptions={industryOptions}
            productGroups={PRODUCT_GROUPS}
            useCaseOptions={useCaseOptions}
            matchCount={visibleSections.matchCount}
            totalCount={caseStudies.length}
          />

          {/* ---- Stories ---- */}
          <Section id="case-study-sections" spacing="lg">
            {visibleSections.sections.length === 0 ? (
              <div className="flex flex-col items-center gap-5 rounded-xl border border-dashed border-line bg-surface px-5 py-24 text-center">
                <p className="text-heading-sm font-medium text-content">
                  No case studies match those filters.
                </p>
                <p className="text-body text-content-muted">
                  Try broadening the industry, product, or problem-solved
                  filter.
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setFilters(EMPTY_FILTERS)}
                >
                  Reset filters
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-20">
                {visibleSections.sections.map((section) => (
                  <section
                    key={section.id}
                    id={`section-${section.id}`}
                    className="scroll-mt-48"
                  >
                    <div className="mb-3 flex items-baseline gap-5">
                      <span className="text-heading-sm tabular-nums text-accent">
                        {section.num}
                      </span>
                      <h2 className="text-heading-md font-medium tracking-negative text-content">
                        {section.title}
                      </h2>
                    </div>
                    <p className="mb-8 max-w-[820px] text-pretty text-body-lg text-content-muted">
                      {section.intro}
                    </p>
                    <div className="mb-10 h-px bg-line" />

                    <div className="flex flex-col gap-14">
                      {section.groups.map((group) => (
                        <div key={group.id}>
                          <div className="mb-5 flex flex-wrap items-center gap-3">
                            <h3 className="text-heading-sm font-medium tracking-negative text-content">
                              {group.label}
                            </h3>
                            <span className="rounded-full bg-surface-muted px-2.5 py-1 text-caption font-semibold text-content-muted">
                              {group.cards.length}{" "}
                              {group.cards.length === 1 ? "story" : "stories"}
                            </span>
                          </div>

                          <ul className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                            {group.cards.map((study) => (
                              <li key={study.id} className="flex">
                                <CaseStudyCard
                                  study={study}
                                  useCaseLabel={
                                    USE_CASE_LABELS.get(study.useCase) ??
                                    study.useCase
                                  }
                                  productLabels={study.products.map(
                                    (id) => PRODUCT_LABELS.get(id) ?? id
                                  )}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </Section>

          {/* ---- Mid-page conversion strip ---- */}
          <section className="border-y border-accent-surface bg-accent-subtle py-14">
            <Container className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex-1 basis-[480px]">
                <p className="mb-2.5 text-label font-semibold uppercase tracking-[0.06em] text-accent">
                  {caseStudiesMidCta.eyebrow}
                </p>
                <h2 className="mb-2.5 text-heading-md font-medium tracking-negative text-content">
                  {caseStudiesMidCta.title}
                </h2>
                <p className="max-w-[640px] text-pretty text-body text-content-muted">
                  {caseStudiesMidCta.description}
                </p>
              </div>
              <Button calBooking size="lg" className="shrink-0">
                {caseStudiesMidCta.ctaLabel}
              </Button>
            </Container>
          </section>

          {/* ---- By the numbers ---- */}
          <Section spacing="lg">
            <div className="mb-10 text-center">
              <p className="mb-2 text-label font-semibold uppercase tracking-[0.06em] text-accent">
                {caseStudiesByTheNumbers.eyebrow}
              </p>
              <h2 className="text-heading-md font-medium tracking-negative text-content">
                {caseStudiesByTheNumbers.title}
              </h2>
            </div>

            <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
              {caseStudiesByTheNumbers.stats.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-line bg-bg-subtle px-4 py-6 text-center"
                >
                  <p className="mb-2 text-[32px] font-bold leading-[1.1] tracking-negative text-accent-hover">
                    {item.stat}
                  </p>
                  <p className="text-caption font-semibold text-content-muted">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          {/* ---- Objection-buster ---- */}
          <Section tone="subtle" spacing="md">
            <div className="mx-auto max-w-[820px] text-center">
              <p className="mb-3 text-label font-semibold uppercase tracking-[0.06em] text-accent">
                {caseStudiesObjection.eyebrow}
              </p>
              <p className="text-pretty text-[24px] font-medium leading-[1.5] tracking-negative text-content">
                {caseStudiesObjection.lead}
                <em className="font-bold not-italic text-accent">
                  {caseStudiesObjection.emphasis}
                </em>
                {caseStudiesObjection.body}
                <span className="text-content-muted">
                  {caseStudiesObjection.tail}
                </span>
              </p>
            </div>
          </Section>

          {/* ---- Closing CTA ---- */}
          <Section tone="subtle" spacing="lg" className="border-t border-line">
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              <SectionHeading
                title={caseStudiesClosingCta.title}
                accentTitle={caseStudiesClosingCta.accentTitle}
                description={caseStudiesClosingCta.description}
                headingClassName="font-medium"
                descriptionGap="sm"
              />
              <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
                <Button
                  href={caseStudiesClosingCta.secondary.href}
                  variant="secondary"
                  fullWidth
                  className="px-8 sm:w-auto"
                >
                  {caseStudiesClosingCta.secondary.label}
                </Button>
                <Button calBooking fullWidth className="px-8 sm:w-auto">
                  {caseStudiesClosingCta.primary}
                </Button>
              </div>
            </div>
          </Section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default CaseStudiesPage;
