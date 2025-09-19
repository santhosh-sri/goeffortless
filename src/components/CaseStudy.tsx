import { CaseStudyProps } from "@/interface/type";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

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
  const primaryCTA =
    "flex justify-center gap-2 items-center bg-[#F08B32] xl:text-base text-sm xl:font-[600] font-[400] text-[#fff] xl:py-[14px] py-[7px] px-[16px] rounded-[32px] font-ttHoves max-md:w-full";

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/sample.pdf"; // replace with your file path or dynamic URL
  //   link.download = `${title || "case-study"}.pdf`;
  //   link.click();
  // };

  // const handleEmail = () => {
  //   debugger
  //   window.location.href =
  //     "mailto:hello@goeffortless.ai";
  // };

  // const handleShare = () => {
  //   const url = encodeURIComponent(window.location.href);
  //   const text = encodeURIComponent("Check this out on Effortless!");
  //   window.open(
  //     `https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=${text}`,
  //     "_blank",
  //     "noopener,noreferrer"
  //   );
  // };

  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <>
      <div className="bg-black/75 h-dvh w-dvw flex justify-center items-center fixed top-0 left-0 z-[999] md:p-4 pt-[40px] pb-[40px]">
        <div className="z-[9999] relative md:p-[20px] w-[1280px] h-full md:h-auto flex flex-col mx-5 max-md:overflow-y-auto">
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
              <div className="h-[24px] w-[1px] bg-[#646464]" />
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/customer-mail.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <div className="h-[24px] w-[1px] bg-[#646464]" />
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/connected-dots.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <div className="h-[24px] w-[1px] bg-[#646464]" />
              <button onClick={onClose}>
                <Image
                  className="cursor-pointer"
                  src="/print.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
              <div className="h-[24px] w-[1px] bg-[#646464]" />
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
          {/* <div className="bg-white flex items-center justify-end p-3 block md:hidden">
            <Image
              onClick={onClose}
              className="cursor-pointer"
              src="/e-remove.svg"
              alt="Close"
              width={24}
              height={24}
            />
          </div> */}

          <div className="flex-1 overflow-y-auto md:overflow-visible bg-white bg-[url('/Layer.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply p-3 md:p-6">
            <div className="flex max-md:justify-between items-center gap-4">
              <Image
                src={"/slide-logo.svg"}
                alt="Effortless Logo"
                height={64}
                width={98}
                className="w-[60px] h-[40px] md:w-[98px] md:h-[64px]"
              />
              <div className="flex justify-end md:hidden">
                <div className="flex gap-3 items-center">
                  <button onClick={onClose}>
                    <Image
                      className="cursor-pointer"
                      src="/download.svg"
                      alt="Close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="h-[24px] w-[1px] bg-[#646464]" />
                  <button onClick={onClose}>
                    <Image
                      className="cursor-pointer"
                      src="/customer-mail.svg"
                      alt="Close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="h-[24px] w-[1px] bg-[#646464]" />
                  <button onClick={onClose}>
                    <Image
                      className="cursor-pointer"
                      src="/connected-dots.svg"
                      alt="Close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="h-[24px] w-[1px] bg-[#646464]" />
                  <button onClick={onClose}>
                    <Image
                      className="cursor-pointer"
                      src="/print.svg"
                      alt="Close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="h-[24px] w-[1px] bg-[#646464]" />
                  <button onClick={onClose}>
                    <Image
                      className="cursor-pointer"
                      src="/e-remove.svg"
                      alt="Close"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
              <h1 className="hidden md:block text-[#000000] text-base xl:text-[26px] font-normal">
                {parse(title)}
              </h1>
            </div>

            <h1 className="md:hidden mt-2 text-[#000000] text-base xl:text-[26px] font-normal">
              {parse(title)}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4">
              <div className="">
                <div className="flex flex-col gap-4 xl:gap-6">
                  <div>
                    <h2 className="text-sm xl:text-[22px] font-normal text-[#000000] leading-[100%] -tracking-[1%]">
                      {subtitle}
                    </h2>
                    <p className="mt-2 font-light text-[13px] xl:text-base text-[#000000] tracking-0">
                      {fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm xl:text-[22px] font-normal text-[#000000] leading-[100%] tracking-0">
                      Key Challenges
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {challenges.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 font-light text-[13px] xl:text-base text-[#000000]"
                        >
                          <span className="mt-1">
                            <Image
                              src="/shape-triangle.svg"
                              alt="bullet"
                              width={16}
                              height={16}
                              className="w-3 h-3 md:w-4 md:h-4"
                            />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm xl:text-[22px] font-normal text-[#000000] leading-[100%] tracking-0">
                      {fixTitle}
                    </h3>
                    <p className="mt-2 font-light text-[13px] xl:text-base text-[#000000] -tracking-[1%]">
                      {parse(fixDescription)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-evenly gap-2">
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {stats.map((s, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <p
                        className={`flex items-baseline gap-1 text-[#F08B32] font-bold text-xl xl:text-[40px]`}
                      >
                        {s.raiseType && (
                          <Image
                            src={`${
                              s.raiseType === "down"
                                ? "/arrow-down.svg"
                                : "/arrow-up.svg"
                            }`}
                            alt="r-arrow"
                            height={32}
                            width={32}
                            className={`w-[14px] h-[14px] md:h-[32px] md:w-[32px]`}
                          />
                        )}
                        <span>{s.value}</span>
                      </p>
                      <p className="text-xs xl:text-base font-normal leading-[100%] tracking-0 text-[#08090A] mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 md:mt-6 bg-[#F0F0F0] rounded-xl p-5">
                  <p className="text-[#000000] text-[13px] xl:text-lg leading-[100%] font-light tracking-0">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-2 text-[#000000] text-sm xl:text-base font-medium flex items-center gap-1">
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
                <div className="flex justify-end">
                  <button
                    className={primaryCTA}
                    data-cal-namespace="demo"
                    data-cal-link="goeffortless/demo"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                  >
                    <Image
                      src="/window-cursor.svg"
                      alt="bullet"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span>Click here to See it Live</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-2 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-2 md:pt-4">
              {contacts.map((c, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <p className="font-medium text-sm xl:text-base text-[#F08B32] leading-[100%] tracking-0">
                    {c.label}
                  </p>
                  <p className="font-light text-sm xl:text-base text-[#000000] leading-[100%] tracking-0">
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
                  className="max-md:w-[127px] max-md:h-[32px]"
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
