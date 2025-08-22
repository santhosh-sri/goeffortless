// components/FoundingTeamCard.tsx
import { TeamMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";

const FoundingTeamCard: FC<TeamMember> = ({
  imageSrc,
  description,
  linkedInUrl,
  isColoured = false, // Default to false if not provided
}) => {
  return (
    <div className={`text-white rounded-lg shadow-md w-full ${isColoured ? "p-[6px] rounded-[16px] bg-[#15181B]" : ""}`}>
      <div className="relative w-full rounded-md overflow-hidden">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSrc}
            alt={"Team Member"}
            width={591}
            height={471}
            priority
          />
        </a>
      </div>
      <p className={`text-[13px] font-[300] leading-[20px] md:leading-[26px] text-[#E4E4E7] mt-4 whitespace-pre-line ${isColoured ? "p-[6px] md:text-[14px] md:min-h-[240px]" : "md:text-[20px] "}`}>
        {description}
      </p>
    </div>
  );
};

export default FoundingTeamCard;
