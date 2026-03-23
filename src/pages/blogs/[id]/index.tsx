import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PageTitle from "@/components/PageTitle";
import Header from "@/components/NewHeader";
import Footer from "@/components/Footer";
import BlogPageSkeleton from "@/components/BlogPageSkeleton";
import CallbackCardSection from "@/components/CallBackCardSection";

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
}

export default function BlogDetail({ blog, slug }: BlogDetailProps) {
  const {
    title: metaTitle,
    description,
    seoMetaKeywords,
    imageUrl,
    publishedAt,
    author,
    listDescription,
  } = blog?.blog || {};

  const router = useRouter();
  const { id } = router.query;

  const [isMobile, setIsMobile] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [title, setTitle] = useState<string>(metaTitle || "");
  const [desc, setDesc] = useState<string>(
    listDescription || description || ""
  );
  const [isLoading, setIsLoading] = useState(true);
  const [closeBanner, setCloseBanner] = useState(true);

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
    headline: metaTitle || title,
    description: description || listDescription || desc,
    image: imageUrl || "https://iili.io/F7C7h12.png",
    url: canonicalUrl,
    ...(publishDate && { datePublished: publishDate }),
    ...(publishDate && { dateModified: publishDate }),
    author: {
      "@type": "Organization",
      name: author || "Effortless",
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
        name: metaTitle || title || "Blog Post",
        item: canonicalUrl,
      },
    ],
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    if (!id) return;

    const fetchBlogHTML = async () => {
      try {
        const res = await fetch(
          `https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs/${id}?format=html`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: BlogResponse = await res.json();
        setHtmlContent(data.blog?.content || "");
        setTitle(data.blog?.title || "Untitled");
        setDesc(data.blog?.description || "Read the full article");
      } catch (err: any) {
        console.error(err.message || "Failed to fetch blog");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogHTML();
  }, [id]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cleanHTML = (html: string) => {
    return (
      html
        // remove empty tags EXCEPT iframe
        .replace(/<(?!iframe)(\w+)[^>]*>\s*<\/\1>/gi, "")
        .replace(/<(?!iframe)(\w+)[^>]*>(?:\s|&nbsp;)*<\/\1>/gi, "")
    );
  };

  return (
    <>
      <Head>
        <title>{`${metaTitle || title} | Effortless Blog`}</title>
        <meta
          name="description"
          content={description || listDescription || desc}
        />
        {seoMetaKeywords && <meta name="keywords" content={seoMetaKeywords} />}

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${metaTitle || title} | Effortless Blog`}
        />
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
        <meta property="og:site_name" content="Effortless" />
        {publishDate && (
          <meta property="article:published_time" content={publishDate} />
        )}
        <meta property="article:author" content="https://www.goeffortless.ai" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${metaTitle || title} | Effortless Blog`}
        />
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
        <Header
          isMobile={isMobile}
          closeBanner={closeBanner}
          setCloseBanner={setCloseBanner}
        />
      </div>
      <div className={`bg-[#08090A] md:px-[80px]`}>
        {isLoading ? (
          <div className="">
            <BlogPageSkeleton />
          </div>
        ) : htmlContent ? (
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
                className={`md:text-2xl text-sm md:mt-[4px] text-[#E4E4E7] text-center font-[300] md:font-[400] capitalize`}
              >
                {desc}
              </p>
            </div>
            <article className="md:pb-[100px] pb-[60px] max-md:py-[32px] max-md:px-5">
              <div
                className="text-[#E4E4E7] flex flex-col gap-3 htmlContainer"
                dangerouslySetInnerHTML={{ __html: cleanHTML(htmlContent) }}
              />
            </article>
          </>
        ) : (
          <div className="flex flex-col md:gap-6 text-[#E4E4E7] gap-4 items-center justify-center mt-[64px] py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[90px] scroll-mt-20">
            Blog not found
          </div>
        )}
      </div>
      <div className="bg-[#15181B]">
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
              <span className="text-white font-light">
                Growth Doesn&apos;t Wait.{" "}
              </span>
              <span className="font-medium">Why Should You?</span>
            </h2>
            <p
              className={`md:text-2xl text-sm md:mt-[4px] text-[#E4E4E7] text-center font-[400] md:font-[300]`}
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
      <div className="md:pt-[100px] pt-[60px] bg-[#08090A]">
        <Footer isMobile={isMobile} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const slug = Array.isArray(params.id) ? params.id[0] : params.id;

  const res = await fetch(
    `https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs/${slug}?format=html`
  );
  const blog = await res.json();

  // Return 404 if blog not found
  if (!blog?.blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
      slug,
    },
  };
}
