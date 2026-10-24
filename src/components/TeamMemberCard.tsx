// components/TeamMemberCard.tsx
import { TeamGroupMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import TeamPhoto from "./TeamPhoto";

/**
 * Team tile for the grouped teams on /about-us — Figma 3296:10601.
 *
 * White card, 1px `line` stroke, 12px radius and padding; the cut-out photo
 * sits on a pale blue slab (the photos are transparent PNGs, so the slab is
 * the backdrop, not a tint), then name and title with the LinkedIn mark on
 * the right. No bio — the design drops it for these tiles.
 */
const TeamMemberCard: FC<TeamGroupMember> = ({
  imageSrc,
  crop,
  name,
  title,
  linkedInUrl,
}) => {
  const linkedIn = (
    <Image src="/team/linkedin.svg" alt="" width={40} height={40} />
  );

  return (
    <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-line bg-surface p-3">
      <TeamPhoto
        imageSrc={imageSrc}
        crop={crop}
        alt={name}
        sizes="(min-width: 1024px) 286px, (min-width: 640px) 50vw, 100vw"
        className="rounded-lg"
      />

      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          {/* Lexend runs wider than the SF Pro in Figma, so the longest
              names wrap to a second line rather than get clipped. */}
          <h3 className="text-body-lg font-semibold leading-6 text-content">
            {name}
          </h3>
          <p className="text-body text-content-muted">{title}</p>
        </div>
        {linkedInUrl ? (
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex shrink-0 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
          >
            {linkedIn}
          </a>
        ) : (
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 cursor-default opacity-50"
          >
            {linkedIn}
          </span>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
