import { footerData } from "@/data/footer";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const FooterLink = ({
  item,
  className,
}: {
  item: { title: string; url: string; external?: boolean; soon?: boolean };
  className: string;
}) => {
  if (item.soon) {
    return (
      <li
        className={`${className} group cursor-default flex flex-col items-start gap-0.5`}
      >
        {item.title}
        <span className="hidden group-hover:block text-[10px] text-accent leading-tight whitespace-nowrap">
          Coming Soon
        </span>
      </li>
    );
  }
  if (item.external) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <li className={className}>{item.title}</li>
      </a>
    );
  }
  return (
    <Link href={item.url || ""}>
      <li className={className}>{item.title}</li>
    </Link>
  );
};

const Footer = ({ isMobile }: { isMobile?: boolean }) => {
  const { sections, logo, social_links, mwebsections, officeLocation } =
    footerData;
  return (
    // <div className="relative">
    //   <div className="absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-b from-[#15181B] to-transparent -translate-y-full pointer-events-none"></div>
    <div
      className="bg-surface max-md:p-4 p-[80px] !pb-0 !pt-[40px]"
      // bg-bottom bg-no-repeat bg-cover
      // style={{ backgroundImage: "url('/footerbg.svg')" }}
    >
      <footer
        className=" text-content flex flex-col  gap-4 md:gap-8 max-w-[1350px] mx-auto"
        id="footer"
      >
        <div className="flex flex-col-reverse w-full gap-4 md:gap-[40px]">
          <Image
            src={"/Effortless.svg"}
            alt="Effortless"
            height={400}
            width={300}
            className="w-full"
          />
          <div>
            {" "}
            <h3 className="text-content text-[16px] font-[600] mb-1">
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
                        <h4 className="text-accent text-sm font-normal mb-1 md:mb-3">
                          {section?.title ?? ""}
                        </h4>
                      )}
                      {section.desc && (
                        <div className="text-content text-[12px] font-[300]">
                          {typeof section.desc === "string"
                            ? parse(section.desc)
                            : section.desc}
                        </div>
                      )}
                    </div>
                    <div className="md:hover:bg-bg md:p-2 md:rounded">
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

          {/* Desktop Footer Menu */}
          {!isMobile && (
            <div className="hidden md:flex gap-6 items-stretch w-full">
              {sections?.map((section, index) => {
                // Grouped section (Our Customers + Ecosystem stacked)
                if ("groups" in section && section.groups) {
                  return (
                    <div
                      key={index}
                      className={`md:pr-0 ${
                        section.border ? "gradient-border-left dashed" : ""
                      }`}
                    >
                      {section.groups.map(
                        (
                          group: {
                            title: string;
                            items: { title: string; url: string }[];
                          },
                          gIdx: number
                        ) => (
                          <div key={gIdx} className={gIdx > 0 ? "mt-2" : ""}>
                            <h3 className="text-content text-[16px] font-[600] mb-1 md:mb-2">
                              {group.title}
                            </h3>
                            <ul>
                              {group.items.map((item, iIdx) => (
                                <FooterLink
                                  key={iIdx}
                                  item={item}
                                  className="text-content-muted hover:text-content text-[12px] md:text-[14px] font-[300] mb-1 md:mb-[10px]"
                                />
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  );
                }

                // Resources section with sub-columns
                if ("subColumns" in section && section.subColumns) {
                  return (
                    <div
                      key={index}
                      className={`flex-1 md:pr-0 flex flex-col ${
                        section.border ? "gradient-border-left dashed" : ""
                      }`}
                    >
                      <h3 className="text-content text-[16px] font-[600] mb-1 md:mb-2">
                        {section.title}
                      </h3>
                      <div className="grid grid-cols-4 gap-4 flex-1">
                        {section.subColumns.map(
                          (
                            col: {
                              title: string;
                              items: { title: string; url: string }[];
                            },
                            cIdx: number
                          ) => (
                            <div
                              key={cIdx}
                              className={`md:pr-0 ${
                                cIdx === 0
                                  ? "border-none"
                                  : "gradient-border-left dashed"
                              }`}
                            >
                              <h4 className="text-accent text-sm font-normal mb-1 md:mb-3">
                                {col.title}
                              </h4>
                              <ul>
                                {col.items.map((item, iIdx) => (
                                  <FooterLink
                                    key={iIdx}
                                    item={item}
                                    className="text-content-muted hover:text-content text-[12px] md:text-[14px] font-[300] mb-1 md:mb-[10px]"
                                  />
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  );
                }

                // Regular section (Products, Legal)
                return (
                  <div
                    key={index}
                    className={`md:pr-0 ${
                      section.border ? "gradient-border-left dashed" : ""
                    }`}
                  >
                    {section?.title && (
                      <h3 className="text-content text-[16px] font-[600] mb-1 md:mb-3">
                        {section.title}
                      </h3>
                    )}
                    <ul>
                      {section.items?.map((item, idx) => (
                        <FooterLink
                          key={idx}
                          item={item}
                          className="text-content-muted hover:text-content text-[13px] md:text-[14px] font-[300] mb-1 md:mb-[10px] gap-[12px]"
                        />
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {/* Mobile Footer Menu */}
          {isMobile && (
            <div className="flex flex-col gap-4 w-full">
              {/* Row 1: Products | Our Customers + Ecosystem */}
              <div className="grid grid-cols-2 gap-x-1">
                {/* Products */}
                <div>
                  <h3 className="text-content text-[16px] font-[600] mb-1">
                    Products
                  </h3>
                  <ul>
                    {mwebsections?.[0]?.items?.map(
                      (item: { title: string; url: string }, idx: number) => (
                        <FooterLink
                          key={idx}
                          item={item}
                          className="text-content-muted hover:text-content text-[13px] font-[300] mb-1"
                        />
                      )
                    )}
                  </ul>
                </div>
                {/* Our Customers + Ecosystem */}
                <div className="gradient-border-left dashed">
                  {(mwebsections?.[1] as any)?.groups?.map(
                    (
                      group: {
                        title: string;
                        items: { title: string; url: string }[];
                      },
                      gIdx: number
                    ) => (
                      <div key={gIdx} className={gIdx > 0 ? "mt-3" : ""}>
                        <h3 className="text-content text-[16px] font-[600] mb-1">
                          {group.title}
                        </h3>
                        <ul>
                          {group.items.map((item, iIdx) => (
                            <FooterLink
                              key={iIdx}
                              item={item}
                              className="text-content-muted hover:text-content text-[13px] font-[300] mb-1"
                            />
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Row 2: Resources with subtitles (2-col grid) */}
              <div>
                <h3 className="text-content text-[16px] font-[600] mb-2">
                  Resources
                </h3>
                <div className="grid grid-cols-2 gap-x-1 gap-y-3">
                  {(mwebsections?.[2] as any)?.subColumns?.map(
                    (
                      col: {
                        title: string;
                        items: { title: string; url: string }[];
                      },
                      cIdx: number
                    ) => (
                      <div
                        key={cIdx}
                        className={
                          cIdx % 2 !== 0 ? "gradient-border-left dashed" : ""
                        }
                      >
                        <h4 className="text-accent text-sm font-normal mb-1">
                          {col.title}
                        </h4>
                        <ul>
                          {col.items.map((item, iIdx) => (
                            <FooterLink
                              key={iIdx}
                              item={item}
                              className="text-content-muted hover:text-content text-[13px] font-[300] mb-1"
                            />
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Row 3: Legal */}
              <div>
                <h3 className="text-content text-[16px] font-[600] mb-1">
                  Legal
                </h3>
                <ul>
                  {mwebsections?.[3]?.items?.map(
                    (item: { title: string; url: string }, idx: number) => (
                      <FooterLink
                        key={idx}
                        item={item}
                        className="text-content-muted hover:text-content text-[13px] font-[300] mb-1"
                      />
                    )
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            {logo?.src && (
              <Link href="/">
                <Image
                  src={logo?.src}
                  alt={logo.alt ?? ""}
                  className="md:w-[188px] md:h-[48px] cursor-pointer w-[150px] h-[40px]"
                  width={188}
                  height={48}
                />
              </Link>
            )}

            {/* Social Media Icons */}
            <div className="flex md:gap-3 gap-2 cursor-pointer">
              {social_links?.map((social, idx) => (
                <div
                  key={idx}
                  onClick={() => window.open(social?.url ?? "")}
                  className="md:hover:bg-bg md:p-1 md:rounded"
                >
                  <Image
                    src={social?.icon ?? ""}
                    alt={social?.alt || "Social media icon"}
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
    // </div>
  );
};

export default Footer;
