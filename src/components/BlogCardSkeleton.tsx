import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="relative block w-full rounded-xl overflow-hidden shadow-md animate-pulse bg-[#1a1a1a]">
      <div className="relative w-full h-[300px] md:h-[350px] bg-surface" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_65.38%,#000_100%)]" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="h-6 w-3/4 bg-surface rounded-md mb-3" />

        <div className="flex gap-3 items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="hidden md:block">
              <div className="h-4 w-5/6 bg-surface rounded-md mb-1" />
              <div className="h-4 w-2/3 bg-surface rounded-md" />
            </div>
            <div className="h-4 w-20 bg-surface rounded-md mt-2" />
          </div>

          <div className="w-10 h-10 bg-surface rounded-lg hidden md:flex justify-center items-center" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
