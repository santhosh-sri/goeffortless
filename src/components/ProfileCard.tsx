import Image from "next/image";
import React from "react";

type ProfileCardProps = {
  name?: string;
  title?: string;
  linkedinUrl?: string;
  isColoured?: boolean;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  linkedinUrl,
  isColoured,
}) => {
  return (
    <div
      className="flex items-center justify-between bg-[#00000080] backdrop-blur-lg overflow-hidden
 text-white p-2 w-full absolute bottom-0"
    >
      <div className="flex flex-col gap-1 !w-[80%]">
        <h2 className={`${isColoured ? "text-sm" : "text-2xl"} font-normal`}>
          {name}
        </h2>
        <p className={`${isColoured ? "text-xs" : "text-lg"} font-light`}>
          {title}
        </p>
      </div>
      <div className={`!w-[20%] flex justify-end`}>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Image
            src={"linkedIn.svg"}
            alt="Icon"
            width={`${isColoured ? 26 : 40}`}
            height={`${isColoured ? 26 : 40}`}
          />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
