import Image from "next/image";
import Slider from "react-slick";
import { customerLogos, type CustomerLogo } from "@/data/customerLogos";

/**
 * `logos` is optional so the pre-redesign dark pages keep rendering the
 * white-on-transparent set below unchanged, while the redesigned light pages
 * pass the full-colour set from src/data/customerLogos.ts.
 */
const Logocarousel = ({ logos }: { logos?: CustomerLogo[] } = {}) => {
  const defaultLogos = [
    { src: "/arvindpet.png", width: 137, height: 48, name: "Arvind Petrochem" },
    { src: "/Galla.png", width: 74, height: 48, name: "Galla Foods" },
    { src: "/rassense-logo.svg", width: 158, height: 48, name: "Rassense" },
    {
      src: "/Contraminds_Labs.png",
      width: 176,
      height: 48,
      name: "Contraminds Labs",
    },
    { src: "/nalashaa.png", width: 133, height: 48, name: "Nalashaa" },
    { src: "/Pepul.png", width: 130, height: 48, name: "Pepul" },
    {
      src: "/meine-electric-logo.svg",
      width: 172,
      height: 48,
      name: "Meine Electric",
    },
    { src: "/CTRLm.png", width: 176, height: 48, name: "CTRLm" },
    { src: "/MPL.png", width: 60, height: 48, name: "MPL" },
    {
      src: "/hansa-quality-logo.svg",
      width: 91,
      height: 48,
      name: "Hansa CEquity",
    },
    { src: "/iris.png", width: 154, height: 48, name: "Iris" },
    { src: "/integral.svg", width: 57, height: 48, name: "Integral" },
    { src: "/mithaicana-logo.png", width: 182, height: 48, name: "Mithaicana" },
    { src: "/GS-logo.png", width: 180, height: 48, name: "GS Group" },
    { src: "/kanvar-logo.png", width: 76, height: 48, name: "Kanvar" },
    { src: "/kria.png", width: 117, height: 48, name: "Kria Law" },
    { src: "/image.png", width: 68, height: 48, name: "Partner" },
    {
      src: "/krish_fashion.png",
      width: 150,
      height: 48,
      name: "Krish Fashion",
    },
  ];

  // The site is locked to the light theme, so the white-on-transparent
  // `defaultLogos` set is never the right fallback any more: every caller
  // that omits `logos` gets the maintained full-colour customer wall.
  void defaultLogos;
  const businessPartnersLogo = logos ?? customerLogos;

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
    <div className="!w-screen px-4">
      <Slider
        {...logosliderSettings}
        className="flex items-center justify-center"
      >
        {businessPartnersLogo?.map((logos, index) => (
          <div key={index} className="!flex !items-center !justify-center px-2">
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={logos?.src || ""}
                alt={
                  "alt" in logos
                    ? (logos as CustomerLogo).alt
                    : `${
                        (logos as { name?: string })?.name
                      } logo — Effortless customer`
                }
                width={logos?.width}
                height={logos?.height}
                className={`md:max-w-[140px] md:max-h-[64px] max-w-[80px] max-h-[40px] object-contain w-auto h-auto ${
                  (logos as CustomerLogo)?.keepColors
                    ? // Artwork carries filled shapes (an opaque tile, or a
                      // coloured plate behind the wordmark), so the dark-theme
                      // silhouette below would collapse it into a solid block.
                      ""
                    : (logos as CustomerLogo)?.invertOnLight
                    ? // Source is white-on-transparent: darken it on light,
                      // leave it alone on dark.
                      "invert dark:invert-0"
                    : // Full-colour source: shown as-is on light. On dark it is
                      // flattened to white, because several brand marks are
                      // near-black and would vanish against the dark surface.
                      "dark:brightness-0 dark:invert"
                }`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Logocarousel;
