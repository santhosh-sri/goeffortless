import { useEffect, useState } from "react";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/NewHeader";
import PageTitle from "@/components/PageTitle";
import { BlogCardProps } from "@/interface/type";
import { GetStaticProps } from "next";

interface BlogPageProps {
  initialBlogs: BlogCardProps[];
}

const transformBlogs = (data: any[]): BlogCardProps[] => {
  return data.map((item) => {
    const imageUrl = item.imageUrl;
    const desc = item.listDescription || "Read the full article";
    const date = new Date(
      item.publishedAt.split("-").reverse().join("-")
    ).toLocaleDateString("en-US", { year: "numeric", month: "long" });

    return {
      imageUrl,
      title: item.listTitle || "Untitled",
      desc,
      date,
      href: `/blogs/${item.slug}`,
    };
  });
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  try {
    const res = await fetch(
      "https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs"
    );

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    const initialBlogs = transformBlogs(data.blogs || []);

    return {
      props: {
        initialBlogs,
      },
      revalidate: 3600, // Re-generate page every hour
    };
  } catch (err: any) {
    console.error(err.message || "Failed to fetch blogs");
    return {
      props: {
        initialBlogs: [],
      },
      revalidate: 60, // Retry sooner on failure
    };
  }
};

const Index = ({ initialBlogs }: BlogPageProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [blogs] = useState<BlogCardProps[]>(initialBlogs);
  const [closeBanner, setCloseBanner] = useState(true);

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

  return (
    <>
      <Head>
        <title>Effortless Blogs: The Effortless Edge — AI Automation & Sales Insights</title>
        <meta
          name="description"
          content="Stay ahead with The Effortless Edge — your source for insights on AI-driven automation, smarter sales, and efficient financial workflows for growing Indian businesses."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Effortless Blogs: The Effortless Edge — AI Automation & Sales Insights"
        />
        <meta
          property="og:description"
          content="Stay ahead with The Effortless Edge — your source for insights on AI-driven automation, smarter sales, and efficient financial workflows for growing Indian businesses."
        />
        <meta property="og:url" content="https://www.goeffortless.ai/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://iili.io/F7C7h12.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Effortless" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@goaborad" />
        <meta name="twitter:title" content="Effortless Blogs: The Effortless Edge — AI Automation & Sales Insights" />
        <meta name="twitter:description" content="Stay ahead with The Effortless Edge — your source for insights on AI-driven automation, smarter sales, and efficient financial workflows for growing Indian businesses." />
        <meta name="twitter:image" content="https://iili.io/F7C7h12.png" />
        <link rel="canonical" href="https://www.goeffortless.ai/blogs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "The Effortless Edge — Blog",
              "description": "Insights on AI-driven automation, smarter sales, and efficient financial workflows for growing Indian businesses.",
              "url": "https://www.goeffortless.ai/blogs",
              "publisher": {
                "@type": "Organization",
                "name": "Effortless",
                "url": "https://www.goeffortless.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.goeffortless.ai/logo.svg"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.goeffortless.ai"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blogs",
                  "item": "https://www.goeffortless.ai/blogs"
                }
              ]
            })
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
      <div className={`bg-[#08090A] md:px-[80px] mt-8 md:mt-[60px]`}>
        <div className="flex flex-col md:gap-6 gap-4 items-center justify-center mt-[64px] md:mt-0 py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[90px] scroll-mt-20">
          <PageTitle pageHeading={"Blogs"} />
          <h1
            className={`font-[300] md:font-medium text-[24px] md:text-[72px] md:leading-[90px] leading-[30px] text-center md:tracking-[-3px] bg-clip-text text-transparent`}
            style={{
              background: "linear-gradient(90deg, #F08B32 59.38%, #FFF 96.86%)",
              WebkitBackgroundClip: "text",
            }}
          >
            <span className="text-white font-light">The </span>
            <span className="font-medium">Effortless Edge</span>
          </h1>
          <p
            className={`md:text-2xl text-sm md:mt-[4px] text-[#E4E4E7] text-center font-[400] md:font-[300]`}
          >
            Stay ahead with The Effortless Edge - your source for insights on
            AI-driven automation, smarter sales, and efficient financial
            workflows for growing businesses.
          </p>
        </div>
        <div className="max-md:px-5">
          {blogs?.length > 0 ? (
            <div className="md:pb-[100px] pb-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogs.map((items, index) => (
                <BlogCard key={index} {...items} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-[#E4E4E7]">
              No blogs found
            </div>
          )}
        </div>
      </div>
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Index;
