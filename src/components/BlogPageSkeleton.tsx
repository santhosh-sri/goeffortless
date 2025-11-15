import React from "react";

const BlogPageSkeleton = () => {
  return (
    <>
      <div className="flex flex-col md:gap-6 gap-4 items-center justify-center mt-[64px] md:mt-0 py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[90px] scroll-mt-20 animate-pulse">
        <div className="h-6 w-28 rounded bg-white/10 mb-4"></div>
        <div className="h-[30px] md:h-[60px] w-[80%] md:w-[70%] bg-white/10 rounded"></div>
        <div className="h-[30px] md:h-[60px] w-[60%] md:w-[50%] bg-white/10 rounded"></div>
        <div className="h-3 md:h-5 w-[90%] md:w-[70%] rounded bg-white/10"></div>
        <div className="h-3 md:h-5 w-[90%] md:w-[70%] rounded bg-white/10"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-7xl mx-auto px-4 py-10 animate-pulse">
        <aside className="md:w-1/4 w-full md:sticky md:top-20 h-fit p-5 pt-0">
          <div className="h-6 w-32 bg-white/10 rounded mb-5" />
          <ul className="flex flex-col gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i}>
                <div className="h-10 bg-white/10 rounded-md" />
              </li>
            ))}
          </ul>
        </aside>

        <div className="md:w-3/4 w-full space-y-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-5">
              <div className="h-7 w-2/3 bg-white/10 rounded" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-white/10 rounded" />
                <div className="h-4 w-5/6 bg-white/10 rounded" />
                <div className="h-4 w-3/4 bg-white/10 rounded" />
              </div>

              <div className="space-y-2 mt-6">
                <div className="h-5 w-1/4 bg-white/10 rounded" />
                <div className="h-4 w-5/6 bg-white/10 rounded" />
                <div className="h-4 w-4/6 bg-white/10 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPageSkeleton;
