import { SliderProps } from "@/interface/type";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const SliderComponent: React.FC<SliderProps> = ({ sliderCards }) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };
  return (
    <div className="xl:!max-w-[1350px] mx-auto md:mx-auto !max-w-[calc(100vw-10px)] p-3 pt-[80px] mt-[-40px]">
      <Slider {...sliderSettings} className="flex md:items-center">
        {sliderCards?.map((card, index) => (
          <div className="!flex max-md:flex-col !gap-6 p-4 md:p-[65px] bg-[#15181B] rounded-xl mb-8 border-[1px] border-[#393939]" key={index}>
            <div className="!flex flex-col !gap-6">
              {card?.title && (
                <Image
                  src={card?.title}
                  alt="profile"
                  width={82}
                  height={30}
                  className="rounded-xl md:w-[80px] md:h-[30px]"
                />
              )}
              <div className="flex flex-col gap-6">
                {card?.organizationDetails?.map((item, index) => (
                  <div className="flex flex-col gap-3" key={index}>
                    <p className=" border-l-[3px] border-[#F08B32] pl-2 text-[#606060] text-[18px] md:text-[22px] md:leading-[27px] leading-[23px]">
                      {item?.name}
                    </p>
                    <p className="text-[#FFFFFF] md:text-[22px] md:leading-[27px] text-[16px] leading-[20px] md:max-w-[80%]">
                      {item?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2" key={index}>
              <p className="text-[#606060] md:text-[22px] md:leading-[27px] text-[18px] leading-[23px] border-l-[3px] border-[#F08B32] pl-2">
                Impact
              </p>
              <div className="flex max-md:flex-col md:flex-wrap md:items-center md:gap-4 gap-2 md:mt-[-38px]">
                {card?.impactDetails?.map((item, index) => (
                  <div
                    className={`flex md:flex-col md:items-start gap-4 items-center bg-[linear-gradient(90deg,#1E1F27_0%,#14151D_100%)] rounded-xl p-4 ${
                      index === 1 ? "md:mt-[20%]" : ""
                    }`}
                    key={index}
                  >
                    <p
                      className={`text-[18px] md:text-[36px] leading-[23px] font-semibold ${
                        item?.negativeImpact
                          ? "text-[#FF3737]"
                          : "text-[#5AB039]"
                      }`}
                    >
                      {item?.percentage}
                    </p>
                    <p className="text-[#FFFFFF] text-[16px] leading-[20px] md:text-[22px] md:leading-[27px] md:min-w-[223px]">
                      {item?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider> 
    </div>
  );
};

export default SliderComponent;
