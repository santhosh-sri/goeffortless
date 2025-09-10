import { CaseStudyProps } from "@/interface/type";
import Image from "next/image";
import React from "react";

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  subtitle,
  fullDescription,
  challenges,
  fixTitle,
  fixDescription,
  stats,
  testimonial,
  contacts,
  logo,
  onClose,
}) => {
  return (
    <>
      <div className="h-dvh w-dvw flex justify-center items-center fixed top-0 left-0 z-[999] md:p-4 pt-[40px] pb-[40px]">
        <div className="z-[9999] relative md:p-[20px] w-full h-full md:h-auto flex flex-col mx-5 max-md:overflow-y-auto">
          <div className="flex justify-end hidden md:flex">
            <div className="flex gap-3 bg-white py-2 px-4 items-center">
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/download.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <div className="h-[24px] w-[1px] bg=[#646464]" />
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/customer-mail.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <div className="h-[24px] w-[1px] bg=[#646464]" />
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/connected-dots.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <div className="h-[24px] w-[1px] bg=[#646464]" />
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/print.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <div className="h-[24px] w-[1px] bg=[#646464]" />
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/e-remove.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="bg-white flex items-center justify-end p-3 block md:hidden">
            <Image
              onClick={onClose}
              className="cursor-pointer"
              src="/e-remove.svg"
              alt="Close"
              width={24}
              height={24}
            />
          </div>

          <div className="flex-1 overflow-y-auto md:overflow-visible bg-white bg-[url('/Layer.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply p-3 md:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={"/slide-logo.svg"}
                alt="Effortless Logo"
                height={80}
                width={122}
                className="w-[90px] h-[60px] md:w-[122px] md:h-[80px]"
              />
              <h1 className="text-[#000000] text-xl xl:text-[32px] font-normal xl:leading-[100%] -tracking-[3%]">
                {title}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4">
              <div className="md:col-span-2">
                <div className="flex flex-col gap-4 xl:gap-6">
                  <div>
                    <h2 className="text-lg xl:text-2xl font-normal text-[#000000] xl:leading-[100%] -tracking-[1%]">
                      {subtitle}
                    </h2>
                    <p className="mt-2 font-light text-base xl:text-xl text-[#000000] xl:leading-[100%] tracking-0">
                      {fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg xl:text-2xl font-normal text-[#000000] xl:leading-[100%] tracking-0">
                      Key Challenges
                    </h3>
                    <ul className="mt-3 list-disc list-inside space-y-2">
                      {challenges.map((item, idx) => (
                        <li
                          key={idx}
                          className="font-light text-base xl:text-xl text-[#000000] xl:leading-[100%] tracking-0"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg xl:text-2xl font-normal text-[#000000] xl:leading-[100%] tracking-0">
                      {fixTitle}
                    </h3>
                    <p className="mt-2 font-light text-base xl:text-xl text-[#000000] xl:leading-[100%] -tracking-[1%]">
                      {fixDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-evenly">
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {stats.map((s, idx) => (
                    <div key={idx} className="flex flex-col items-start">
                      <p className={`${s.raiseType === 'up' && "items-baseline"} flex gap-1 text-[#F08B32] font-bold text-2xl xl:text-5xl`}>
                        {s.raiseType && <Image
                          src={`${s.raiseType === 'down' ? "/arrow-down.png" : "/arrow-up.png"}`}
                          alt="r-arrow"
                          height={32}
                          width={20}
                          className={`h-[32px] w-[20px]`}
                        />}
                        <span>{s.value}</span>
                      </p>
                      <p className="text-sm xl:text-base font-normal xl:leading-[100%] tracking-0 text-[#08090A] mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 md:mt-6 bg-[#F0F0F0] rounded-xl p-5">
                  <p className="text-[#000000] text-base xl:text-xl font-light xl:leading-[100%] tracking-0">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-2 text-[#000000] text-base xl:text-xl font-medium flex items-center gap-1">
                    <Image
                      className="cursor-pointer"
                      src="/circle-user.svg"
                      alt="Close"
                      width={24}
                      height={24}
                    />{" "}
                    <span>{testimonial.author}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-2 md:pt-4">
              {contacts.map((c, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <p className="font-medium text-base xl:text-xl text-[#F08B32] leading-[100%] tracking-0">
                    {c.label}
                  </p>
                  <p className="font-light text-base xl:text-xl text-[#000000] leading-[100%] tracking-0">
                    {c.value}
                  </p>
                </div>
              ))}

              <div className="flex items-center">
                <Image
                  src={"/casestudylogo.svg"}
                  alt="Effortless Logo"
                  height={48}
                  width={188}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
