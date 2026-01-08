import { ComparisonProps } from "@/interface/type";
import Image from "next/image";

interface ComparisonSectionProps {
  data: ComparisonProps;
}

const ComparisonSection = ({ data }: ComparisonSectionProps) => {
  const { left, right } = data;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[43px]">
        {/* LEFT */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl leading-[26px] font-medium text-center">
                {left.title}
              </h2>
              <p className="text-base leading-5 text-center text-[#E4E4E7]">
                {left.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {/* Chat bubble */}
              <div className="bg-[#323232] rounded-xl p-4 flex gap-3 items-start">
                <div>
                  <Image src="/chatUser.svg" alt="" width={40} height={40} />
                </div>
                <div className=" flex flex-col gap-2">
                  <p className="text-sm text-[#F08B32] leading-[22px] font-normal">
                    {left.chat.label}
                  </p>
                  <div className="bg-[#DCF8C6] text-black text-sm leading-[22px] rounded-xl !rounded-bl-[4px] font-normal p-3">
                    {left.chat.message}
                  </div>
                  <p className="text-xs font-normal text-[#E4E4E7]">
                    {left.chat.time}
                  </p>
                </div>
              </div>

              {/* Pain points */}
              <ul className="flex flex-col gap-5">
                {left.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-base font-normal text-[#FFFFFF]"
                  >
                    <span className="text-[#FF0000] text-lg">⚠</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-full w-[1px] bg-[linear-gradient(180deg,#282828_0%,#FFFFFF_50%,#282828_100%)]" />
        </div>
        {/* RIGHT */}
        <div className="flex flex-col gap-[43px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl leading-[26px] font-medium text-[#F08B32] text-center">
              {right.title}
            </h2>
            <p className="text-base leading-5 text-center text-[#E4E4E7]">
              {right.subtitle}
            </p>
          </div>

          <div className="flex justify-center items-end gap-6">
            <Image
              src={right.images}
              alt="App screen"
              width={510}
              height={448}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
