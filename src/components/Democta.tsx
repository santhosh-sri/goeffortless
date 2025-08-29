import Image from "next/image";

const Democta = ({
  ctaText = "Request a Demo",
  ctaUrl = "",
  customStyle = false,
  setShowForm = () => {},
  extraWidth,
}: {
  ctaText?: string;
  ctaUrl?: string;
  customStyle?: boolean;
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  extraWidth?: boolean;
}) => {
  const handleDirect = () => {
    if (ctaText?.toLowerCase() === "partner with us") {
      const section = document.getElementById("PartnerForm");
      if (section) {
        const offset = 250;
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop - offset,
          behavior: "smooth",
        });
      }
    } else if (ctaText === "Partner Portal Login") {
      window.open("https://partner.goeffortless.ai/auth/login", "_blank");
    } else {
      setShowForm(true);
    }
  };

  return (
    <button
      onClick={handleDirect}
      id="democta"
      className={`group relative p-[10px] overflow-hidden transition-all duration-500 ease-in-out font-[500] cursor-pointer flex items-center justify-center gap-1 w-full ${extraWidth ? "" : "md:w-[230px]"} 
        ${
          customStyle
            ? "max-md:py-[12px] max-md:px-[16px] rounded max-md:text-[14px] md:px-[24px]"
            : "py-[12px] px-6 rounded"
        } 
        bg-[#F08B32] text-white md:text-[16px] text-[14px] ${extraWidth && "md:hover:!pl-[24px] md:hover:!pr-[40px]"}`}
    >
      <span className="relative inline-flex items-center ">
        <span className="md:group-hover:mr-1 transition-all duration-500">
          {ctaText}
        </span>
        <span className="absolute max-md:hidden top-1/2 right-[-1.4rem] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out md:block hidden">
          <Image
            src="/arrow-white.svg"
            alt="arrow"
            width={16}
            height={16}
            className="block"
            unoptimized
          />
        </span>
      </span>
    </button>
  );
};

export default Democta;
