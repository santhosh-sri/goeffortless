import { footerData } from "@/data/footer";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ isMobile }: { isMobile?: boolean }) => {
  const { sections, logo, social_links, mwebsections, officeLocation } =
    footerData;
  const footerItem = isMobile ? mwebsections : sections;
  return (
    <div className="bg-[#15181B] max-md:p-4 p-[80px] !pb-0 !pt-[40px]">
      <footer
        className=" text-white flex flex-col  gap-4 md:gap-8 max-w-[1350px] mx-auto"
        id="footer"
      >
        <div className="flex flex-col-reverse w-full gap-4 md:gap-[40px]">
          <Image
            src={"/Effortless.svg"}
            alt="Effortless"
            height={400}
            width={300}
            className="w-full"
            unoptimized={true}
          />
          <div>
            {" "}
            <h3 className="text-[#FFFFFF] text-[16px] font-[600] mb-3">
              Our Offices{" "}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-x-4 gap-y-6 justify-center w-full">
              {officeLocation?.map((section, index) => (
                <div
                  key={index}
                  className={`${
                    section?.border &&
                    (!isMobile || (isMobile && section?.isMobile))
                      ? index === 1
                        ? "gradient-border-left dashed !pr-0"
                        : "gradient-border-left dashed !pr-0"
                      : "border-none"
                  }`}
                >
                  <div className="flex gap-2 justify-between items-center py-2">
                    <div className="flex-1">
                      {" "}
                      {section?.title && (
                        <h4 className="text-[#F08B32] text-sm font-normal mb-1 md:mb-3">
                          {section?.title ?? ""}
                        </h4>
                      )}
                      {section.desc && (
                        <div className="text-[#FFFFFF] text-[12px] font-[300]">
                          {typeof section.desc === "string"
                            ? parse(section.desc)
                            : section.desc}
                        </div>
                      )}
                    </div>
                    <div>
                      <a
                        href={section.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/location-2.svg"
                          alt="Location"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[1px] w-full bg-[linear-gradient(270deg,#282828_0%,#FFFFFF_50%,#282828_100%)]"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-x-1 gap-y-6 items-start  justify-center w-full">
            {footerItem?.map((section, index) => (
              <div
                key={index}
                className={`${
                  section?.border
                    ? index == 1
                      ? "gradient-border-left dashed min-h-[130px] md:min-h-[200px] md:pr-8"
                      : "gradient-border-left dashed md:min-h-[200px] md:pr-8"
                    : "border-none"
                }`}
              >
                {section?.title && (
                  <h3 className="text-[#FFFFFF] text-[16px] font-[600] mb-1 md:mb-3">
                    {section?.title ?? ""}
                  </h3>
                )}
                <ul className="">
                  {section.items?.map((item, idx) =>
                    typeof item === "object" &&
                    item !== null &&
                    "url" in item ? (
                      <Link href={item.url || ""} key={idx}>
                        <li
                          className="text-[#FFFFFF] text-[13px] md:text-[16px] font-[300] mb-1 md:mb-[10px] gap-[12px]"
                          key={idx}
                        >
                          {item.title ?? ""}
                        </li>
                      </Link>
                    ) : (
                      <li
                        className="text-[#FFFFFF] text-[13px] md:text-[16px] font-[300] leading-5 md:leading-normal"
                        key={idx}
                      >
                        {typeof item === "string" ? parse(item) : item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            {logo?.src && (
              <Link href="/">
                <Image
                  src={logo?.src}
                  alt={logo.alt ?? ""}
                  className="!w-[188px] !h-[48px] cursor-pointer max-md:w-[106px] max-md:h-[96px]"
                  width={188}
                  height={48}
                  unoptimized={true}
                />
              </Link>
            )}

            {/* Social Media Icons */}
            <div className="flex md:gap-5 gap-2 cursor-pointer">
              {social_links?.map((social, idx) => (
                <div key={idx} onClick={() => window.open(social?.url ?? "")}>
                  <Image
                    src={social?.icon ?? ""}
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
