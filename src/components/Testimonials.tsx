import { TestimonalProps } from "@/interface/type";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Settings for React Slick
const sliderSettings = {
  infinite: false,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 9000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        autoplaySpeed: 9000,
        autoplay: true,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: true,
        speed: 500,
        autoplaySpeed: 9000,
        autoplay: true,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        autoplaySpeed: 9000,
        autoplay: true,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const logosliderSettings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const Testimonials: React.FC<TestimonalProps> = ({
  testimonials,
  bgColour,
  businessPartnersLogo,
}) => {
  return (
    <div className="">
      <div className="!w-screen px-5 pt-4 md:pt-0">
        <Slider
          {...logosliderSettings}
          className="flex md:!items-center mb-1 md:mb-8"
        >
          {businessPartnersLogo?.map((logos, index) => (
            <div
              key={index}
              className="!flex !items-center !justify-center !h-[60px] md:!h-[80px] px-2"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={logos?.src || ""}
                  alt={`Partner logo ${index + 1}`}
                  width={logos?.width}
                  height={logos?.height}
                  className="md:max-w-[140px] md:max-h-[64px] max-w-[80px] max-h-[40px] opacity-[20%] object-contain w-auto h-auto"
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:!max-w-[1350px] mx-auto lg:mx-auto !max-w-[calc(100vw-10px)] md:px-[20px] max-md:mb-10 pt-[25px]">
        <Slider {...sliderSettings} className="flex md:items-center">
          {testimonials?.map((card, index) => (
            <div
              className="!flex gap-5 !items-center max-lg:justify-center !rounded-xl"
              key={index}
            >
              <div
                className={` ${
                  card?.title
                    ? `${
                        bgColour
                          ? "bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)]"
                          : "bg-[#121317]"
                      } flex-col-reverse`
                    : `${
                        bgColour
                          ? "bg-[linear-gradient(111.18deg,rgba(255,255,255,0.1)_-28.62%,rgba(255,255,255,0)_104.36%)]"
                          : "bg-[#121317]"
                      } flex-col `
                } p-4 flex gap-3  !rounded-xl xl:!w-[95%] !w-[90%] lg:w-[70%]`}
              >
                <div className="flex items-start gap-3 md:gap-4 ">
                  {card?.profile && (
                    <Image
                      src={card?.profile}
                      alt="profile"
                      width={64}
                      height={64}
                      className="rounded-xl md:w-[64px] md:h-[64px]"
                      unoptimized={true}
                    />
                  )}
                  <div className="flex flex-col md:gap-1 items-start">
                    <p className="text-[16px] leading-6 font-[400] text-[#FFFFFF]">
                      {card?.name}
                    </p>
                    <div>
                      <p className="text-[#E4E4E7] md:text-[16px] text-[13px] leading-5 !font-[300]">
                        {card?.designation}
                      </p>
                      <p className="text-[#E4E4E7] md:text-[16px] text-[13px] leading-5 !font-[300] md:min-h-[40px]">
                        {card?.contribution}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {card?.title && (
                    <p className="text-[16px] md:text-[20px] leading-6 font-[400] text-[#FFFFFF]">
                      {card?.title}
                    </p>
                  )}
                  <p className="text-[14px] md:leading-[22px] font-[300] leading-[24px] text-[#E4E4E7] md:!min-h-[135px] !min-h-[140px]">
                    {card?.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;