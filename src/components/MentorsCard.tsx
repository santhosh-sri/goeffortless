// components/FoundingTeamCard.tsx
import { TeamMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";

const MentorsCard: FC<TeamMember> = ({
  imageSrc,
  description,
  linkedInUrl,
}) => {
  return (
    <div className={`text-white rounded-2xl shadow-md w-full grid md:grid-cols-2 gap-5 p-5 md:bg-[#15181B]`}>
      <div className="relative w-full overflow-hidden">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSrc}
            alt={"Team Member"}
            width={350}
            height={330}
            priority
            className="h-full"
          />
        </a>
      </div>
      <p className={`text-[13px] md:text-[20px] font-[300] leading-[20px] md:leading-[26px] text-[#E4E4E7] whitespace-pre-line md:min-h-[260px]`}>
        {description}
      </p>
    </div>
  );
};

export default MentorsCard;
