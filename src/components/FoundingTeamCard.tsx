// components/FoundingTeamCard.tsx
import { TeamMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import ProfileCard from "./ProfileCard";

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
      className={`text-white shadow-md w-full ${
        isColoured ? "p-[6px] rounded-3xl md:rounded-2xl bg-[#15181B]" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden rounded-2xl`}>
        <Image
          src={imageSrc}
          alt={"Team Member"}
          width={591}
          height={471}
          priority
        />
        <ProfileCard
          name={name}
          title={title}
          linkedinUrl={linkedInUrl}
          isColoured={isColoured}
        />
      </div>
      <p
        className={`text-[13px] font-[300] leading-[20px] md:leading-[26px] text-[#E4E4E7] mt-4 whitespace-pre-line ${
          isColoured
            ? "p-3 md:p-1.5 md:text-[14px] md:min-h-[240px]"
            : "md:text-[20px] "
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default FoundingTeamCard;
