// components/FoundingTeamCard.tsx
import { TeamMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import { cn } from "@/lib/cn";
import ProfileCard from "./ProfileCard";

/** Team member tile: photo with the name plate, bio below. */
const FoundingTeamCard: FC<TeamMember> = ({
  imageSrc,
  description,
  linkedInUrl,
  isColoured = false, // Default to false if not provided
  name,
  title,
}) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col gap-4 rounded-xl border border-line bg-surface hover:border-none hover:shadow-panel",
        isColoured ? "p-1.5" : "p-2"
      )}
    >
      <div className="relative w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={name ?? "Team Member"}
          width={591}
          height={471}
          priority
          className="h-auto w-full"
        />
        <ProfileCard
          name={name}
          title={title}
          linkedinUrl={linkedInUrl}
          isColoured={isColoured}
        />
      </div>
      <p
        className={cn(
          "whitespace-pre-line text-label text-content-muted md:leading-6",
          isColoured
            ? "px-1.5 pb-1.5 md:text-label"
            : "px-2 pb-2 md:text-body-lg"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default FoundingTeamCard;
