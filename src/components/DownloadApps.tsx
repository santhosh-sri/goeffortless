"use client";

import { DownloadSectionProps } from "@/interface/type";
import Image from "next/image";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Section from "./ui/Section";

/**
 * One app block on /download-apps — copy beside the phone render, laid out
 * like the product hero. The two blocks alternate bands (`tone`), so the page
 * runs white heading → grey → white → grey strip → footer.
 */
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
  tone = "subtle",
}: DownloadSectionProps & { tone?: "default" | "subtle" }) => {
  return (
    <Section
      tone={tone}
      spacing="lg"
      containerClassName="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            <Badge tone={tone === "subtle" ? "surface" : "subtle"}>{appName}</Badge>
            <h2 className="text-heading-md font-light text-content md:text-heading-lg">
              {title} <span className="font-bold text-accent">{highlight}</span>
            </h2>
          </div>
          <p className="text-body text-content-muted md:text-body-lg md:leading-6">
            {description}
          </p>
          <p className="text-body text-content-muted md:text-body-lg md:leading-6">
            {subDescription}
          </p>
        </div>

        <div className="w-full md:hidden">
          <Image
            src={imageSrc}
            alt="App preview"
            width={357}
            height={740}
            className="mx-auto h-auto w-full max-w-[300px]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <Image
              src="/appstore.png"
              alt="Download on the App Store"
              width={188}
              height={56}
              className="h-12 w-auto md:h-14"
            />
          </a>
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <Image
              src="/googlePlay.png"
              alt="Get it on Google Play"
              width={188}
              height={56}
              className="h-12 w-auto md:h-14"
            />
          </a>
        </div>

        <Button calBooking size="hero" className="w-full font-semibold sm:w-auto sm:min-w-[260px] sm:self-start">
          Book a Demo
        </Button>

        {option && (
          <p className="text-body text-content-muted md:text-body-lg md:leading-6">
            {option}
          </p>
        )}
      </div>

      <div className="hidden w-full md:block lg:w-[357px] lg:shrink-0">
        <Image
          src={imageSrc}
          alt="App preview"
          width={357}
          height={740}
          className="mx-auto h-auto w-full max-w-[357px]"
        />
      </div>
    </Section>
  );
};

export default DownloadApps;
