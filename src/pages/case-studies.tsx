import type { GetStaticProps } from "next";
import CaseStudiesPage from "@/components/pages/case-studies/CaseStudiesPage";
import { fetchServiceData } from "@/utils/fetchServiceData";

// Next requires serialisable props, so `null` rather than `undefined`.
interface Props {
  metadata: Record<string, unknown> | null;
}

/**
 * `/case-studies` was previously served by the `[...services]` catch-all from
 * the CMS. A dedicated route takes precedence over the catch-all, so the
 * rebuilt page renders here instead — the same move `/allFeatures` made.
 *
 * The CMS entry is still read at build time for its `metadata` block only, so
 * the existing SEO tags and breadcrumb JSON-LD are preserved while the page
 * body comes from the design handoff.
 */
export default function CaseStudies({ metadata }: Props) {
  return <CaseStudiesPage metadata={metadata ?? undefined} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let metadata: Record<string, unknown> | undefined;

  try {
    const content = await fetchServiceData("case-studies");
    const parsed = typeof content === "string" ? JSON.parse(content) : content;
    metadata = parsed?.metadata;
  } catch (error) {
    console.error(
      "Failed to load /case-studies metadata from CMS:",
      (error as Error).message
    );
  }

  return {
    props: { metadata: metadata ?? null },
    revalidate: 3600,
  };
};
