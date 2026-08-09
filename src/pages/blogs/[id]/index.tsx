import { useState, useEffect } from "react";
import Head from "next/head";
import PageTitle from "@/components/PageTitle";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CallbackCardSection from "@/components/CallBackCardSection";
import { GetStaticProps, GetStaticPaths } from "next";

interface BlogData {
  title?: string;
  description?: string;
  content?: string;
  seoMetaKeywords?: string;
  imageUrl?: string;
  publishedAt?: string;
  author?: string;
  listDescription?: string;
}

interface BlogResponse {
  blog?: BlogData;
}

const callBackCards = [
  {
    title: "Talk to Us",
    description:
      "Have questions about how Effortless can transform your business? Our team of experts is ready to help.",
    ctaText: "Request a Callback",
    subText: "We'll reach out within 4 business hours",
    list: [
      "Schedule a personalized demo",
      "Get your specific questions answered",
      "Discuss your unique business challenges",
    ],
  },
  {
    title: "Request Demo",
    description:
      "See Effortless in action with a personalized demo tailored to your business.",
    ctaText: "Schedule a Demo",
    subText: "Choose a time that works for you",
    list: [
      "No generic presentations",
      "Focus on your specific challenges",
      "Get a clear picture of your potential ROI",
    ],
  },
  {
    title: "Your Growth Engine Starts Here",
    description:
      "More growth, less overhead. Discover how India's fastest growing businesses do it.",
    ctaText: "See it in Action",
    primary: true,
    subText: "Clarity in 30 minutes. No pressure, just proof.",
    list: [
      "Automate invoicing, collections & approvals",
      "Track sales team performance",
      "Get cashflow clarity in real-time",
    ],
  },
];

interface BlogDetailProps {
  blog: BlogResponse;
  slug: string;
  htmlContent: string;
}

export default function BlogDetail({
  blog,
  slug,
  htmlContent,
}: BlogDetailProps) {
  const {
    title: metaTitle,
    description,
    seoMetaKeywords,
    imageUrl,
    publishedAt,
    author,
    listDescription,
  } = blog?.blog || {};

  const [isMobile, setIsMobile] = useState(false);
  const [closeBanner, setCloseBanner] = useState(true);

  const title = metaTitle || "Untitled";
  const desc = listDescription || description || "Read the full article";
  const canonicalUrl = `https://www.goeffortless.ai/blogs/${slug}`;

  // Format publish date for structured data
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return undefined;
    try {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        return new Date(parts.reverse().join("-")).toISOString();
      }
      return new Date(dateStr).toISOString();
    } catch {
      return undefined;
    }
  };

  const publishDate = formatDate(publishedAt);

  // JSON-LD structured data for BlogPosting
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description || listDescription || desc,
    image: imageUrl || "https://iili.io/F7C7h12.png",
    url: canonicalUrl,
    ...(publishDate && { datePublished: publishDate }),
    ...(publishDate && { dateModified: publishDate }),
    author: {
      "@type": "Person",
      name: author || "Effortless Team",
      url: "https://www.goeffortless.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Effortless",
      url: "https://www.goeffortless.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://www.goeffortless.ai/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    ...(seoMetaKeywords && { keywords: seoMetaKeywords }),
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.goeffortless.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.goeffortless.ai/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cleanHTML = (html: string) => {
    return html
      .replace(/<(?!iframe)(\w+)[^>]*>\s*<\/\1>/gi, "")
      .replace(/<(?!iframe)(\w+)[^>]*>(?:\s|&nbsp;)*<\/\1>/gi, "");
  };

  return (
    <>
      <Head>
        <title>{`${title} | Effortless Blog`}</title>
        <meta
          name="description"
          content={description || listDescription || desc}
        />
        {seoMetaKeywords && <meta name="keywords" content={seoMetaKeywords} />}

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={`${title} | Effortless Blog`} />
        <meta
          property="og:description"
          content={description || listDescription || desc}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={imageUrl || "https://iili.io/F7C7h12.png"}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Effortless" />
        {publishDate && (
          <meta property="article:published_time" content={publishDate} />
        )}
        <meta property="article:author" content="https://www.goeffortless.ai" />
        <meta property="article:section" content="Business & Technology" />
        {seoMetaKeywords &&
          seoMetaKeywords
            .split(",")
            .slice(0, 5)
            .map((tag, i) => (
              <meta
                property="article:tag"
                content={tag.trim()}
                key={`tag-${i}`}
              />
            ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@go_effortless" />
        <meta name="twitter:title" content={`${title} | Effortless Blog`} />
        <meta
          name="twitter:description"
          content={description || listDescription || desc}
        />
        <meta
          name="twitter:image"
          content={imageUrl || "https://iili.io/F7C7h12.png"}
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPostingJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      </Head>
      <div className={`fixed top-0 w-full z-[999]`}>
        <SiteHeader />
      </div>
      <div className={`bg-bg md:px-[80px]`}>
        {htmlContent ? (
          <>
            <div className="flex flex-col md:gap-6 gap-4 items-center justify-center mt-8 md:mt-[64px] py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[90px] scroll-mt-20">
              <PageTitle pageHeading={"Blogs"} />
              <h1
                className={`font-[300] md:font-medium text-[24px] md:text-[70px] md:leading-[90px] leading-[30px] text-center md:tracking-[-3px] bg-clip-text text-transparent`}
                style={{
                  background:
                    "linear-gradient(90deg, #F08B32 59.38%, #FFF 96.86%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                <span className="font-medium">{title}</span>
              </h1>
              <p
                className={`md:text-2xl text-sm md:mt-[4px] text-content-muted text-center font-[300] md:font-[400] capitalize`}
              >
                {desc}
              </p>
            </div>
            <article className="md:pb-[100px] pb-[60px] max-md:py-[32px] max-md:px-5">
              <div
                className="text-content-muted flex flex-col gap-3 htmlContainer"
                dangerouslySetInnerHTML={{ __html: cleanHTML(htmlContent) }}
              />
            </article>
          </>
        ) : (
          <div className="flex flex-col md:gap-6 text-content-muted gap-4 items-center justify-center mt-[64px] py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[90px] scroll-mt-20">
            Blog not found
          </div>
        )}
      </div>
      <div className="bg-surface">
        <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
        <div className={`md:px-[80px]`}>
          <div className="flex flex-col md:gap-6 gap-4 items-center justify-center  py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[64px] scroll-mt-20">
            <PageTitle pageHeading={"Get Started"} />
            <h2
              className={`font-[300] md:font-medium  text-[24px] md:text-[32px] text-center bg-clip-text text-transparent`}
              style={{
                background:
                  "linear-gradient(90deg, #F08B32 59.38%, #FFF 96.86%)",
                WebkitBackgroundClip: "text",
              }}
            >
              <span className="text-content font-light">
                Growth Doesn&apos;t Wait.{" "}
              </span>
              <span className="font-medium">Why Should You?</span>
            </h2>
            <p
              className={`md:text-2xl text-sm md:mt-[4px] text-content-muted text-center font-[400] md:font-[300]`}
            >
              Let Effortless help you scale—without the scramble.
            </p>
            {callBackCards && (
              <div className="md:grid md:grid-cols-3 gap-4 flex flex-col items-center justify-center">
                {callBackCards?.map((card, index) => (
                  <CallbackCardSection key={index} {...card} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
      </div>
      <div className="md:pt-[100px] pt-[60px] bg-bg">
        <SiteFooter />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch(
      "https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs?limit=1000"
    );
    const data = await res.json();
    const paths = (data.blogs || []).map((blog: { slug: string }) => ({
      params: { id: blog.slug },
    }));
    return {
      paths,
      fallback: "blocking", // SSR on first request for new posts, then cache
    };
  } catch {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.id) ? params.id[0] : params?.id;

  try {
    const res = await fetch(
      `https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs/${slug}?format=html`
    );

    if (!res.ok) {
      return { notFound: true };
    }

    const blog: BlogResponse = await res.json();

    if (!blog?.blog) {
      return { notFound: true };
    }

    return {
      props: {
        blog,
        slug,
        htmlContent: blog.blog.content || "",
      },
      revalidate: 3600, // Re-generate page every hour
    };
  } catch {
    return { notFound: true };
  }
};
