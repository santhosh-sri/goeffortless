"use client";

import { DownloadSectionProps } from "@/interface/type";
import { CalcomConfig } from "@/utils/calConfig";
import Image from "next/image";

const DownloadApps = ({
  appName = "Effortless",
  title = "All Your Sales & Finance in",
  highlight = "One Powerful App",
  description = "Stay on top of sales, collections, and reimbursements—all in real time.",
  subDescription = "From order to payment, Effortless keeps everything connected so your business runs smoother, faster, and smarter.",
  appStoreLink = "#",
  playStoreLink = "#",
  imageSrc,
  option,
}: DownloadSectionProps) => {
  return (
    <div>
      <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
      <section className="w-full bg-[#15181B] flex flex-col gap-6 lg:flex-row max-lg:items-center justify-between lg:px-[80px] md:pt-20">
        <div className="max-w-3xl space-y-6 max-md:py-8 max-md:px-5">
          <div className="inline-block bg-[linear-gradient(124.77deg,rgba(255,255,255,0.1)_-5.51%,rgba(255,255,255,0)_104.11%)] text-sm px-3 py-1 rounded-full text-white">
            {appName}
          </div>

          <h1 className="text-xl md:text-[32px] font-light leading-snug text-white">
            {title}{" "}
            <span className="bg-custom-gradient bg-clip-text text-transparent font-medium">
              {highlight}
            </span>
          </h1>

          <p className="text-[#E4E4E7] text-sm md:text-xl font-light">
            {description}
          </p>

          <p className="text-[#E4E4E7] text-sm md:text-xl font-light">
            {subDescription}
          </p>

          <div className="md:hidden">
            <Image
              src={imageSrc}
              alt="App preview"
              width={357}
              height={740}
              className="justify-self-center"
            />
          </div>

          <div className="flex max-lg:justify-center gap-8 pt-4">
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                width={188}
                height={56}
              />
            </a>
            <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/googlePlay.png"
                alt="Get it on Google Play"
                width={188}
                height={56}
              />
            </a>
          </div>
          <div className=" flex max-lg:justify-center">
            <button
              {...CalcomConfig}
              className="bg-[#F08B32] text-white text-sm md:text-xl font-medium p-2 md:p-4 rounded hover:bg-[#F08B32] transition-all w-full md:w-[412px]"
            >
              Book a Demo
            </button>
          </div>

          <p className="text-[#E4E4E7] text-sm md:text-xl font-light md:pb-4 !md:mb-6">
            {option}
          </p>
        </div>

        <div className="hidden md:block">
          <Image
            src={imageSrc}
            alt="App preview"
            width={357}
            height={740}
            className="justify-self-center"
          />
        </div>
      </section>
      <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
    </div>
  );
};

export default DownloadApps;
