// components/FoundingTeamCard.tsx
import { TeamMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import ProfileCard from "./ProfileCard";

const MentorsCard: FC<TeamMember> = ({
  imageSrc,
  description,
  linkedInUrl,
  name,
  title,
  // isColoured
}) => {
  return (
    <div
      className={`text-white rounded-2xl shadow-md w-full grid md:grid-cols-2 gap-5 p-0 md:p-5 md:bg-[#15181B]`}
    >
      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={"Team Member"}
          width={312}
          height={330}
          priority
          className="h-full w-full md:w-[312px] md:h-[330px]"
        />
        {name && (
          <ProfileCard
            name={name}
            title={title}
            linkedinUrl={linkedInUrl}
            // isColoured={isColoured}
          />
        )}
      </div>
      <p
        className={`text-[13px] md:text-[20px] font-[300] leading-[20px] md:leading-[26px] text-[#E4E4E7] whitespace-pre-line`}
      >
        {description}
      </p>
    </div>
  );
};

export default MentorsCard;
