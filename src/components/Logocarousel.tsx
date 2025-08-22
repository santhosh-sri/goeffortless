import Image from "next/image";
import Slider from "react-slick";

const Logocarousel = () => {
  const businessPartnersLogo = [
    { src: "/RASSENSE 1.png", width: 158, height: 48 },
    { src: "/CTRLm.png", width: 176, height: 48 },
    { src: "/Pepul.png", width: 130, height: 48 },
    { src: "/MEINE ELECTRIC 1.svg", width: 172, height: 48 },
    { src: "/Insta.png", width: 150, height: 48 },
    { src: "/integral.svg", width: 57, height: 48 },
    { src: "/InnBuilt-logo 1.png", width: 48, height: 19 },
    { src: "/Galla.png", width: 74, height: 48 },
    { src: "/Hansa Cequity Logo 1.png", width: 91, height: 48 },
  ];
  
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="!w-screen md:mt-[10px] px-4 pt-[20px]">
      <Slider
        {...logosliderSettings}
        className="flex items-center justify-center"
      >
        {businessPartnersLogo?.map((logos, index) => (
          <div
            key={index}
            className="!flex !items-center !justify-center !h-[80px] md:!h-[100px] px-2"
          >
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={logos?.src || ""}
                alt={`Partner logo ${index + 1}`}
                width={logos?.width}
                height={logos?.height}
                className="md:max-w-[140px] md:max-h-[64px] max-w-[80px] max-h-[40px] object-contain w-auto h-auto"
                unoptimized={true}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Logocarousel;