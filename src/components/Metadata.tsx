import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  og?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
    imageWidth?: string;
    imageHeight?: string;
  };
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  keywords,
  robots = "index, follow",
  og,
  jsonLd,
}) => {
  const router = useRouter();
  const canonicalUrl =
    og?.url || `https://www.goeffortless.ai${router.asPath.split("?")[0]}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* Open Graph Meta Tags */}
      {og?.title && <meta property="og:title" content={og.title} />}
      {og?.description && (
        <meta property="og:description" content={og.description} />
      )}
      <meta property="og:url" content={canonicalUrl} />
      {og?.type && <meta property="og:type" content={og.type} />}
      {og?.image && <meta property="og:image" content={og.image} />}
      {og?.image && (
        <meta
          property="og:image:width"
          content={og.imageWidth || "1200"}
        />
      )}
      {og?.image && (
        <meta
          property="og:image:height"
          content={og.imageHeight || "630"}
        />
      )}
      <meta property="og:site_name" content="Effortless" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@goaborad" />
      {og?.title && <meta name="twitter:title" content={og.title} />}
      {og?.description && (
        <meta name="twitter:description" content={og.description} />
      )}
      {og?.image && <meta name="twitter:image" content={og.image} />}

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd),
          }}
        />
      )}
    </Head>
  );
};

export default Metadata;
