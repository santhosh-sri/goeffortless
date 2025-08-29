import Head from "next/head";
import React from "react";

interface MetadataProps {
  title?: string;
  description?: string;
  og?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
  };
}

const Metadata: React.FC<MetadataProps> = ({ title, description, og }) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      
      {/* Open Graph Meta Tags */}
      {og?.title && <meta property="og:title" content={og.title} />}
      {og?.description && <meta property="og:description" content={og.description} />}
      {og?.url && <meta property="og:url" content={og.url} />}
      {og?.type && <meta property="og:type" content={og.type} />}
      {og?.image && <meta property="og:image" content={og.image} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {og?.title && <meta name="twitter:title" content={og.title} />}
      {og?.description && <meta name="twitter:description" content={og.description} />}
      {og?.image && <meta name="twitter:image" content={og.image} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      {og?.url && <link rel="canonical" href={og.url} />}
    </Head>
  );
};

export default Metadata;