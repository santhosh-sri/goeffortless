"use client";

import { BlogCardProps } from "@/interface/type";
import Image from "next/image";
import Link from "next/link";
import BlogWithSidebar from "./BlogWithSidebar";

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  desc,
  date,
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className="group relative block w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative w-full h-[300px] md:h-[350px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_65.38%,#000_100%)]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 ">
        <h3 className="text-lg md:text-xl text-white font-normal">{title}</h3>
        <div className="flex gap-3 items-center">
          <div>
            <p className="hidden opacity-0 group-hover:block group-hover:opacity-100 text-base text-[#E5E5E5] font-light transition-opacity duration-300 ease-in-out">
              {desc}
            </p>
            <p className="text-base font-normal text-[#F08B32] mt-2">{date}</p>
          </div>
          <div>
            <div className="w-10 h-10 bg-[#FFFFFF] rounded-lg hidden opacity-0 group-hover:flex group-hover:opacity-100 justify-center items-center transition-opacity duration-300 ease-in-out">
              <Image
                src="/arrow-up-right.svg"
                alt="arrow-up"
                width={24}
                height={24}
                className="cursor-pointer object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
