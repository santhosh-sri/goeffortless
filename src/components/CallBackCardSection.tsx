import { CallBackcards } from "@/interface/type";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import Button from "./ui/Button";

/**
 * "Get Started" card trio (blog detail, CMS pages). White card with a `line`
 * stroke; the featured card carries the lift shadow and a primary CTA, the
 * others a secondary one.
 */
const CallbackCardSection: React.FC<CallBackcards> = ({
  title,
  description,
  ctaText,
  subText,
  list,
  image,
  primary = false,
  redirectUrl,
  icon,
}) => {
  const handleClick = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
      return;
    }
  };

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col gap-3 rounded-xl border border-line bg-surface p-5 text-content",
        primary && "shadow-lift"
      )}
    >
      {image && (
        <Image src={image} alt="" width={40} height={40} className="md:hidden" />
      )}
      {icon && (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-icon-tile md:hidden">
          <Image src={icon} alt="" width={24} height={24} />
        </span>
      )}
      <p className="text-body-lg font-semibold text-content md:text-heading-sm">
        {title}
      </p>

      <p className="text-label text-content-muted md:text-body md:leading-6">
        {description}
      </p>
      <ul className="ml-5 list-disc">
        {list?.map((item, index) => (
          <li
            key={index}
            className="pb-1 text-label text-content-muted md:text-body md:leading-6"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col items-center gap-2 pt-3">
        <Button
          calBooking={!redirectUrl}
          onClick={handleClick}
          variant={primary ? "primary" : "secondary"}
          fullWidth
          className="font-semibold"
        >
          {ctaText}
        </Button>

        <p className="text-center text-caption text-content-muted md:text-label">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default CallbackCardSection;
