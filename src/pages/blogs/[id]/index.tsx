import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PageTitle from "@/components/PageTitle";
import Header from "@/components/NewHeader";
import Footer from "@/components/Footer";
import BlogPageSkeleton from "@/components/BlogPageSkeleton";
import CallbackCardSection from "@/components/CallBackCardSection";

interface BlogResponse {
  blog?: {
    title?: string;
    description?: string;
    content?: string;
    seoMetaKeywords?: string;
  };
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
      "More growth, less overhead. Discover how India’s fastest growing businesses do it.",
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

export default function BlogDetail({ blog }: any) {
  const {
    title: metaTitle,
    description,
    seoMetaKeywords,
    id: ids,
  } = blog?.blog || {};

  const router = useRouter();
  const { id } = router.query;

  const [isMobile, setIsMobile] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

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

  // useEffect(() => {
  //   const columns = document.querySelectorAll<HTMLElement>(
  //     ".htmlContainer .tiptap-column[data-width]"
  //   );

  //   columns.forEach((column) => {
  //     const width = column.getAttribute("data-width")?.trim();
  //     if (!width) return;

  //     // Set a CSS custom property
  //     column.style.setProperty("--column-width", width);

  //     // Fallback for browsers not supporting var() in flex-basis
  //     column.style.flex = `0 0 ${width}`;
  //     column.style.flexBasis = width;
  //     column.style.maxWidth = width;
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>Effortless Blogs: {title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={seoMetaKeywords} />
        <meta property="og:title" content={`Effortless Blogs: ${metaTitle}`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://www.goeffortless.ai/blogs/${ids}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://iili.io/F7C7h12.png" />
      </Head>
      <div className={`fixed top-0 w-full z-[999]`}>
        <Header isMobile={isMobile} />
      </div>
      <div className={`bg-[#08090A] md:px-[80px]`}>
        {isLoading ? (
          <div className="">
            <BlogPageSkeleton />
          </div>
        ) : htmlContent ? (
          <>
            <div className="flex flex-col md:gap-6 gap-4 items-center justify-center mt-[64px] md:mt-0 py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[90px] scroll-mt-20">
              <PageTitle pageHeading={"Blogs"} />
              <h1
                className={`font-[300] md:font-medium text-[24px] md:text-[72px] md:leading-[90px] leading-[30px] text-center md:tracking-[-3px] bg-clip-text text-transparent`}
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
            <div className="md:pb-[100px] pb-[60px] max-md:py-[32px] max-md:px-5">
              <div
                className="text-[#E4E4E7] flex flex-col gap-3 htmlContainer"
                dangerouslySetInnerHTML={{ __html: cleanHTML(htmlContent) }}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col md:gap-6 text-[#E4E4E7] gap-4 items-center justify-center mt-[64px] py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[90px] scroll-mt-20">
            Blog not found
          </div>
        )}
      </div>

      <div className="mt-[40px] md:mt-[60px] h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
      <div className={`bg-[#15181B] md:px-[80px]`}>
        <div className="flex flex-col md:gap-6 gap-4 items-center justify-center  py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[64px] scroll-mt-20">
          <PageTitle pageHeading={"Get Started"} />
          <h1
            className={`font-[300] md:font-medium  text-[24px] md:text-[32px] text-center bg-clip-text text-transparent`}
            style={{
              background: "linear-gradient(90deg, #F08B32 59.38%, #FFF 96.86%)",
              WebkitBackgroundClip: "text",
            }}
          >
            <span className="text-white font-light">Growth Doesn’t Wait. </span>
            <span className="font-medium">Why Should You?</span>
          </h1>
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
      <div className="md:pt-[100px] pt-[60px] ">
        <Footer isMobile={isMobile} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const res = await fetch(
    `https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs/${params.id}?format=html`
  );
  const blog = await res.json();

  return { props: { blog } };
}
