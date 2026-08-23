// components/MissionSection.tsx
import { MissionSectionContent } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import { parseCms } from "@/lib/cmsHtml";
import SecondaryCta from "./SecondaryCta";

/**
 * "About Effortless" split — team photo beside the story. Follows the product
 * pages' two-column rhythm: 40px between columns, 32/40 heading, 20px body.
 */
const MissionSection: FC<MissionSectionContent> = ({
  image,
  mobileImage,
  title,
  colouredTitle,
  intro,
  paragraphs,
  cta,
}) => {
  return (
    <section className="grid w-full grid-cols-1 items-center gap-8 text-content md:grid-cols-2 lg:gap-10">
      <Image
        src={image.src}
        alt={image.alt}
        width={660}
        height={470}
        priority
        className="hidden h-auto w-full rounded-xl md:block"
      />
      <div className="flex flex-col gap-5 max-md:items-center">
        <h2 className="text-heading-sm font-light text-content max-md:text-center md:text-heading-md">
          {title}
          {colouredTitle && (
            <span className="font-bold text-accent">{colouredTitle}</span>
          )}
        </h2>
        <p className="text-body text-content-muted max-md:text-center md:text-body-lg md:leading-6">
          {intro}
        </p>
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-body text-content-muted max-md:text-center md:text-body-lg md:leading-6 [&_b]:font-semibold [&_b]:text-content [&_strong]:font-semibold [&_strong]:text-content"
          >
            {parseCms(para)}
          </p>
        ))}
        {mobileImage && (
          <Image
            src={mobileImage.src}
            alt={mobileImage.alt}
            width={660}
            height={470}
            priority
            className="h-auto w-full rounded-xl md:hidden"
          />
        )}
        <div className="w-fit md:mt-3">
          <SecondaryCta
            isOrange={true}
            handleDirect={() => {
              window.location.href = cta.url;
            }}
            secondaryCtaText={cta?.text}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
