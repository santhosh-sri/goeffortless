// components/CareersSection.tsx
import { CareersSectionContent } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import Container from "./ui/Container";
import PageTitle from "./PageTitle";

/**
 * About Us hero — the "We're 🔍 [difference] → makers" headline, team photo
 * and mission split. Sits on the grey hero band like the product pages.
 */
const CareersSection: FC<CareersSectionContent> = ({
  label,
  href,
  subheadline,
  highlightWords,
  teamImage,
  missionHeading,
  missionDescription,
}) => {
  return (
    <section id={href} className="scroll-mt-24 bg-bg-subtle py-10 lg:pb-20 lg:pt-12">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <PageTitle pageHeading={label} tone="surface" />
            <h1 className="max-w-[1000px] text-center text-heading-md font-normal text-content md:text-heading-lg lg:text-display lg:leading-[80px]">
              <span className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <span>We’re</span>
                <Image
                  src="/orange-search.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="h-8 w-8 md:h-12 md:w-12"
                  priority
                />
                {highlightWords?.text && (
                  <span className="rounded-full border border-accent px-4 font-bold text-accent md:px-8">
                    {highlightWords?.text}
                  </span>
                )}
                <span>difference</span>
                <Image
                  src="/greeen-arrow.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="h-8 w-8 md:h-14 md:w-14"
                  priority
                />
                <span>makers</span>
              </span>
            </h1>
          </div>

          <p className="max-w-[1036px] text-center text-body text-content-muted md:text-body-lg md:leading-6">
            {subheadline}
          </p>
        </div>

        <Image
          src={teamImage.src}
          alt={teamImage.alt}
          width={1200}
          height={700}
          priority
          className="h-auto w-full rounded-xl object-cover"
        />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
          <div className="text-heading-sm font-medium text-content md:text-heading-md lg:col-span-2">
            {missionHeading?.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="text-body text-content-muted md:text-body-lg md:leading-7 lg:col-span-3">
            {missionDescription}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareersSection;
