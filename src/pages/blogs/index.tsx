import { useEffect, useState } from "react";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import PageTitle from "@/components/PageTitle";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
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
      "https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs?limit=1000"
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
        <title>
          Effortless Blogs: The Effortless Edge — AI Automation & Sales Insights
        </title>
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
        <meta name="twitter:site" content="@go_effortless" />
        <meta
          name="twitter:title"
          content="Effortless Blogs: The Effortless Edge — AI Automation & Sales Insights"
        />
        <meta
          name="twitter:description"
          content="Stay ahead with The Effortless Edge — your source for insights on AI-driven automation, smarter sales, and efficient financial workflows for growing Indian businesses."
        />
        <meta name="twitter:image" content="https://iili.io/F7C7h12.png" />
        <link rel="canonical" href="https://www.goeffortless.ai/blogs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "The Effortless Edge — Blog",
              description:
                "Insights on AI-driven automation, smarter sales, and efficient financial workflows for growing Indian businesses.",
              url: "https://www.goeffortless.ai/blogs",
              publisher: {
                "@type": "Organization",
                name: "Effortless",
                url: "https://www.goeffortless.ai",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.goeffortless.ai/logo.svg",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              ],
            }),
          }}
        />
      </Head>
      <div className="min-h-screen bg-bg text-content">
        <SiteHeader />
        <main>
          {/* Grey hero band, as on the product pages. */}
          <section className="bg-bg-subtle py-10 lg:pb-20 lg:pt-12">
            <Container className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <PageTitle pageHeading={"Blogs"} tone="surface" />
                <h1 className="text-heading-md font-normal text-content md:text-heading-lg lg:text-display lg:leading-[80px]">
                  The <span className="font-bold text-accent">Effortless Edge</span>
                </h1>
              </div>
              <p className="max-w-[1036px] text-body text-content-muted md:text-body-lg md:leading-6">
                Stay ahead with The Effortless Edge - your source for insights
                on AI-driven automation, smarter sales, and efficient financial
                workflows for growing businesses.
              </p>
            </Container>
          </section>

          <Section spacing="lg">
            {blogs?.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((items, index) => (
                  <BlogCard key={index} {...items} />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center text-body text-content-muted">
                No blogs found
              </div>
            )}
          </Section>
        </main>
        <div aria-hidden="true" className="h-12 bg-bg-subtle lg:h-20" />
        <SiteFooter />
      </div>
    </>
  );
};

export default Index;
