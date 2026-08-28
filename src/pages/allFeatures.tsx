import type { GetStaticProps } from "next";
import AllFeaturesPage from "@/components/pages/all-features/AllFeaturesPage";
import { fetchServiceData } from "@/utils/fetchServiceData";

// Next requires serialisable props, so `null` rather than `undefined`.
interface Props {
  metadata: Record<string, unknown> | null;
}

/**
 * `/allFeatures` was previously served by the `[...services]` catch-all from
 * the CMS. A dedicated route takes precedence over the catch-all, so the
 * redesigned page renders here instead. The slug keeps its existing casing
 * because every "See All Features" CTA across the site already points at it.
 *
 * The CMS entry is still read at build time for its `metadata` block only, so
 * the existing SEO tags are preserved while the page body comes from Figma.
 */
export default function AllFeatures({ metadata }: Props) {
  return <AllFeaturesPage metadata={metadata ?? undefined} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let metadata: Record<string, unknown> | undefined;

  try {
    const content = await fetchServiceData("allFeatures");
    const parsed =
      typeof content === "string" ? JSON.parse(content) : content;
    metadata = parsed?.metadata;
  } catch (error) {
    console.error(
      "Failed to load /allFeatures metadata from CMS:",
      (error as Error).message
    );
  }

  return {
    props: { metadata: metadata ?? null },
    revalidate: 3600,
  };
};
