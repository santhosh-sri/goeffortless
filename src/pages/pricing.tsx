import type { GetStaticProps } from "next";
import PricingPage from "@/components/pages/pricing/PricingPage";
import { fetchServiceData } from "@/utils/fetchServiceData";

// Next requires serialisable props, so `null` rather than `undefined`.
interface Props {
  metadata: Record<string, unknown> | null;
}

/**
 * `/pricing` used to 404 on purpose: the slug was listed in HIDDEN_SLUGS in
 * pages/[...services]/index.tsx because the CMS page was not ready. Now that
 * the redesigned page exists, this dedicated route serves it and the slug has
 * been removed from that list.
 *
 * The CMS entry is still read at build time for its `metadata` block only.
 */
export default function Pricing({ metadata }: Props) {
  return <PricingPage metadata={metadata ?? undefined} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let metadata: Record<string, unknown> | undefined;

  try {
    const content = await fetchServiceData("pricing");
    const parsed =
      typeof content === "string" ? JSON.parse(content) : content;
    metadata = parsed?.metadata;
  } catch (error) {
    console.error(
      "Failed to load /pricing metadata from CMS:",
      (error as Error).message
    );
  }

  return {
    props: { metadata: metadata ?? null },
    revalidate: 3600,
  };
};
