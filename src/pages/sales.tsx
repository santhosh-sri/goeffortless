import type { GetStaticProps } from "next";
import SalesPage from "@/components/pages/sales/SalesPage";
import { fetchServiceData } from "@/utils/fetchServiceData";

// Next requires serialisable props, so `null` rather than `undefined`.
interface Props {
  metadata: Record<string, unknown> | null;
}

/**
 * `/sales` was previously served by the `[...services]` catch-all from the CMS.
 * A dedicated route takes precedence over the catch-all, so the redesigned page
 * renders here instead.
 *
 * The CMS entry is still read at build time for its `metadata` block only, so
 * the existing SEO tags are preserved while the page body comes from Figma.
 * A CMS failure must not break the page, so metadata falls back to undefined
 * and <Metadata> renders its defaults.
 */
export default function Sales({ metadata }: Props) {
  return <SalesPage metadata={metadata ?? undefined} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  let metadata: Record<string, unknown> | undefined;

  try {
    const content = await fetchServiceData("sales");
    const parsed =
      typeof content === "string" ? JSON.parse(content) : content;
    metadata = parsed?.metadata;
  } catch (error) {
    console.error(
      "Failed to load /sales metadata from CMS:",
      (error as Error).message
    );
  }

  return {
    props: { metadata: metadata ?? null },
    revalidate: 3600,
  };
};
