import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";

type ProfileCardProps = {
  name?: string;
  title?: string;
  linkedinUrl?: string;
  isColoured?: boolean;
};

/**
 * Name plate over a team photo. The translucent dark plate is deliberate on
 * both themes — it sits on the photograph, not the page — so the white text
 * and the white LinkedIn glyph stay.
 */
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  linkedinUrl,
  isColoured,
}) => {
  return (
    <div className="absolute bottom-0 flex w-full items-center justify-between gap-3 overflow-hidden bg-black/50 p-3 text-white backdrop-blur-lg">
      <div className="flex min-w-0 flex-col gap-0.5">
        <h3
          className={cn(
            "truncate font-medium",
            isColoured ? "text-label" : "text-body-lg"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "truncate text-white/80",
            isColoured ? "text-caption" : "text-body"
          )}
        >
          {title}
        </p>
      </div>
      {linkedinUrl ? (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          // The image is decorative, so the link needs its own name: without
          // one a screen reader announces a row of identical "link" items.
          aria-label={`${name} on LinkedIn`}
          className="inline-flex shrink-0 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Image
            src="/linkedin.svg"
            alt="linkedin"
            width={isColoured ? 26 : 36}
            height={isColoured ? 26 : 36}
          />
        </a>
      ) : (
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 cursor-default rounded-sm opacity-50"
        >
          <Image
            src="/linkedin.svg"
            alt=""
            width={isColoured ? 26 : 36}
            height={isColoured ? 26 : 36}
          />
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
