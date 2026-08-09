import React from "react";
import RedirectCta from "../RedirectCta";
import { CommandCenterCardProps } from "@/interface/type";
import Image from "next/image";
import SecondaryCta from "../SecondaryCta";
import { useRouter } from "next/navigation";

const CommandCenterCard: React.FC<CommandCenterCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  features,
  ctaText,
  ctaUrl,
}) => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col gap-4 bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)] p-5 rounded-xl shadow-md border border-white/10">
      {/* Icon */}
      <div className="flex flex-col gap-2">
        <div className="self-center">
          <Image
            src={icon}
            alt="Icon"
            width={48}
            height={48}
            className="w-[32px] h-[32px] md:!w-[48px] md:!h-[48px]"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-2xl font-semibold text-accent text-center">
          {title}
        </h3>
        <p className="text-xs leading-4 text-content-muted font-medium text-center">
          {subtitle}
        </p>
      </div>
      {/* Description */}
      <div>
        <p className="text-base text-content font-normal text-center">
          {description}
        </p>

        <hr className="h-[1px] border-[#3A3A3A] mt-5" />
      </div>
      {/* Features */}
      <div className="flex flex-col gap-4 text-sm text-content font-normal">
        {features.map((feature, index) => (
          <p key={index} className="flex items-start gap-2">
            <Image
              src="/orangeTick.svg"
              alt="orangeTick"
              width={20}
              height={20}
            />
            <span className="text-sm font-normal">{feature}</span>
          </p>
        ))}
      </div>

      {/* CTA */}
      <SecondaryCta
        secondaryCtaText={ctaText}
        isOrange={true}
        handleDirect={() => router.push(`${ctaUrl}`)}
      />
    </div>
  );
};

export default CommandCenterCard;
