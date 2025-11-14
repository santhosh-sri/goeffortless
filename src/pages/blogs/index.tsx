import React, { useEffect, useState } from "react";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import Footer from "@/components/Footer";
import Header from "@/components/NewHeader";
import PageTitle from "@/components/PageTitle";
import { BlogCardProps } from "@/interface/type";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
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
        href: `/blogs/${item.id}`,
      };
    });
  };

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://us-central1-effortless-admin.cloudfunctions.net/api/v1/blogs"
      );

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      const transformed = transformBlogs(data.blogs || []);
      setBlogs(transformed);
    } catch (err: any) {
      console.error(err.message || "Failed to fetch blogs");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    fetchBlogs();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Effortless Blogs: The Effortless Edge</title>
        <meta
          name="description"
          content="Stay ahead with The Effortless Edge - your source for insights on
            AI-driven automation, smarter sales, and efficient financial
            workflows for growing businesses."
        />
        <meta
          property="og:title"
          content="Effortless Blogs: The Effortless Edge"
        />
        <meta
          property="og:description"
          content="Stay ahead with The Effortless Edge - your source for insights on
            AI-driven automation, smarter sales, and efficient financial
            workflows for growing businesses."
        />
        <meta property="og:url" content="https://www.goeffortless.ai/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://iili.io/F7C7h12.png" />
      </Head>
      <div className={`fixed top-0 w-full z-[999]`}>
        <Header isMobile={isMobile} />
      </div>
      <div className={`bg-[#08090A] md:px-[80px]`}>
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
          ) : isLoading ? (
            <div className="md:pb-[100px] pb-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, index) => (
                <BlogCardSkeleton key={index} />
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
