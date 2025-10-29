import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Quick Contact */}
        <div className="border border-[#E5E5E533] p-4 md:p-8 rounded-xl">
          <h2 className="text-lg md:text-[32px] text-white font-light mb-4 md:mb-8">
            Quick{" "}
            <span className="font-medium bg-custom-gradient bg-clip-text text-transparent">
              Contact
            </span>
          </h2>

          <div className="space-y-5">
            {/* Email */}
            <div className="flex gap-4 items-center bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-lg p-3 md:p-5">
              <Image src={"/envelope.svg"} alt="Icon" width={24} height={24} />
              <div>
                <p className="font-normal text-white text-base">
                  hello@goeffortless.ai
                </p>
                <p className="text-[#B1B1B1] font-light text-sm">
                  General inquiries
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex gap-4 items-center bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-lg p-3 md:p-5"
              onClick={() => {
                window.location.href = `tel:+919176544422`;
              }}
            >
              <Image
                src={"/phone.svg"}
                alt="Icon"
                width={24}
                height={24}
                className="invert brightness-0"
              />
              <div>
                <p className="font-normal text-base text-white">
                  +91 91765 44422
                </p>
                <p className="text-[#B1B1B1] text-sm">Mon–Sat, 11AM–7PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="border border-[#E5E5E533] p-4 md:p-8 rounded-xl">
          <h2 className="text-lg md:text-[32px] text-white font-light mb-4 md:mb-8">
            Connect{" "}
            <span className="font-medium bg-custom-gradient bg-clip-text text-transparent">
              With Us
            </span>
          </h2>

          <div className="space-y-5">
            {[
              {
                icon: "instagram.svg",
                url: "https://www.instagram.com/goeffortless.ai/",
                name: "Instagram",
              },
              {
                icon: "x.svg",
                url: "https://x.com/go_effortless",
                name: "Twitter",
              },
              {
                icon: "linkedIn.svg",
                url: "https://www.linkedin.com/company/igoeffortless/",
                name: "LinkedIn",
              },
            ].map((social) => (
              <button
                key={social.name}
                className="w-full flex gap-4 items-center bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-lg p-3 md:p-5 hover:bg-neutral-800 transition"
              >
                <div onClick={() => window.open(social?.url ?? "")}>
                  <Image
                    src={social?.icon ?? ""}
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-normal text-white">{social.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
