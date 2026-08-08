import type { GetStaticProps } from "next";
import PurchasesPage from "@/components/pages/purchases/PurchasesPage";
import { fetchServiceData } from "@/utils/fetchServiceData";

// Next requires serialisable props, so `null` rather than `undefined`.
interface Props {
  metadata: Record<string, unknown> | null;
}

/**
 * `/expenses` was previously served by the `[...services]` catch-all from the
 * CMS. A dedicated route takes precedence over the catch-all, so the redesigned
 * Purchase & Expenses page renders here instead. The slug stays `expenses`
 * because that is what the Products nav and the CMS entry already point at.
 *
 * The CMS entry is still read at build time for its `metadata` block only, so
 * the existing SEO tags are preserved while the page body comes from Figma.
 * A CMS failure must not break the page, so metadata falls back to undefined
 * and <Metadata> renders its defaults.
 */
export default function Expenses({ metadata }: Props) {
  return <PurchasesPage metadata={metadata ?? undefined} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let metadata: Record<string, unknown> | undefined;

  try {
    const content = await fetchServiceData("expenses");
    const parsed =
      typeof content === "string" ? JSON.parse(content) : content;
    metadata = parsed?.metadata;
  } catch (error) {
    console.error(
      "Failed to load /expenses metadata from CMS:",
      (error as Error).message
    );
  }

  return {
    props: { metadata: metadata ?? null },
    revalidate: 3600,
  };
};
