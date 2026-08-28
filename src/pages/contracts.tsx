import type { GetStaticProps } from "next";
import ContractsPage from "@/components/pages/contracts/ContractsPage";
import { fetchServiceData } from "@/utils/fetchServiceData";

// Next requires serialisable props, so `null` rather than `undefined`.
interface Props {
  metadata: Record<string, unknown> | null;
}

/**
 * `/contracts` was previously served by the `[...services]` catch-all from the
 * CMS. A dedicated route takes precedence over the catch-all, so the redesigned
 * Contracts & Billing page renders here instead.
 *
 * The CMS entry is still read at build time for its `metadata` block only, so
 * the existing SEO tags are preserved while the page body comes from Figma.
 * A CMS failure must not break the page, so metadata falls back to undefined
 * and <Metadata> renders its defaults.
 */
export default function Contracts({ metadata }: Props) {
  return <ContractsPage metadata={metadata ?? undefined} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let metadata: Record<string, unknown> | undefined;

  try {
    const content = await fetchServiceData("contracts");
    const parsed =
      typeof content === "string" ? JSON.parse(content) : content;
    metadata = parsed?.metadata;
  } catch (error) {
    console.error(
      "Failed to load /contracts metadata from CMS:",
      (error as Error).message
    );
  }

  return {
    props: { metadata: metadata ?? null },
    revalidate: 3600,
  };
};
