import Image from "next/image";
import MaskIcon from "./ui/MaskIcon";

const CARD = "rounded-xl border border-line bg-surface p-5 md:p-8";
const ROW =
  "flex w-full items-center gap-4 rounded-lg bg-bg-subtle p-4 text-left transition-colors duration-200 hover:bg-accent-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus";

/** Quick Contact + Connect With Us cards on /contact-us. */
export default function ContactSection() {
  const socials = [
    {
      icon: "/assets/footer/instagram.svg",
      url: "https://www.instagram.com/goeffortless.ai/",
      name: "Instagram",
    },
    {
      icon: "/assets/footer/x.svg",
      url: "https://x.com/go_effortless",
      name: "Twitter",
    },
    {
      icon: "/assets/footer/linkedin.svg",
      url: "https://www.linkedin.com/company/igoeffortless/",
      name: "LinkedIn",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Quick Contact */}
        <div className={CARD}>
          <h2 className="mb-5 text-heading-sm font-light text-content md:mb-6 md:text-heading-md">
            Quick <span className="font-bold text-accent">Contact</span>
          </h2>

          <div className="flex flex-col gap-4">
            <a href="mailto:hello@goeffortless.ai" className={ROW}>
              <MaskIcon src="/envelope.svg" className="h-6 w-6" />
              <span>
                <span className="block text-body text-content">
                  hello@goeffortless.ai
                </span>
                <span className="block text-label text-content-muted">
                  General inquiries
                </span>
              </span>
            </a>

            <a href="tel:+919176544422" className={ROW}>
              <MaskIcon src="/phone.svg" className="h-6 w-6" />
              <span>
                <span className="block text-body text-content">
                  +91 91765 44422
                </span>
                <span className="block text-label text-content-muted">
                  Mon–Sat, 11AM–7PM IST
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Connect With Us */}
        <div className={CARD}>
          <h2 className="mb-5 text-heading-sm font-light text-content md:mb-6 md:text-heading-md">
            Connect <span className="font-bold text-accent">With Us</span>
          </h2>

          <div className="flex flex-col gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={ROW}
              >
                <Image src={social.icon} alt="" width={24} height={24} className="h-6 w-6" />
                <span className="text-body text-content">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
