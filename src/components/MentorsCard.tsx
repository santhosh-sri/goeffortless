// components/MentorsCard.tsx
import { TeamMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import ProfileCard from "./ProfileCard";

/** Advisor tile: photo beside the bio, on a white card with a `line` stroke. */
const MentorsCard: FC<TeamMember> = ({
  imageSrc,
  description,
  linkedInUrl,
  name,
  title,
}) => {
  return (
    <div className="grid w-full gap-5 rounded-xl border border-line bg-surface p-5 md:grid-cols-[312px_1fr]">
      <div className="relative w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={name ?? "Team Member"}
          width={312}
          height={330}
          priority
          className="h-auto w-full md:h-[330px] md:w-[312px] md:object-cover"
        />
        {name && (
          <ProfileCard name={name} title={title} linkedinUrl={linkedInUrl} />
        )}
      </div>
      <p className="whitespace-pre-line text-label text-content-muted md:text-body-lg md:leading-6">
        {description}
      </p>
    </div>
  );
};

export default MentorsCard;
