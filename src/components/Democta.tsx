import Image from "next/image";
import Button from "./ui/Button";

const ARROW = (
  <Image
    src="/assets/shared/arrow-right.svg"
    alt=""
    width={24}
    height={24}
    className="h-6 w-6 shrink-0"
  />
);

/**
 * Primary CTA on the CMS pages. Visually it is the shared `Button`; what
 * remains here is the legacy label-sniffing routing (partner scroll, partner
 * portal, Cal.com booking) the JSON content still relies on.
 */
const Democta = ({
  ctaText = "Request a Demo",
  customStyle = false,
  extraWidth,
  onTrialRequest,
}: {
  ctaText?: string;
  ctaUrl?: string;
  customStyle?: boolean;
  extraWidth?: boolean;
  onTrialRequest?: () => void;
}) => {
  const lower = ctaText.toLowerCase();
  const isTrialCta = lower.includes("trial");
  const shouldAttachCal = !lower.includes("partner") && !isTrialCta;

  const handleDirect = () => {
    if (isTrialCta && onTrialRequest) {
      onTrialRequest();
      return;
    }
    if (lower === "partner with us") {
      const section = document.getElementById("PartnerForm");
      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: sectionTop - 120, behavior: "smooth" });
      }
    } else if (ctaText === "Partner Portal Login") {
      window.open("https://partner.goeffortless.ai/auth/login", "_blank");
    }
  };

  return (
    <Button
      onClick={handleDirect}
      calBooking={shouldAttachCal}
      size={customStyle ? "hero" : "md"}
      trailingIcon={customStyle ? ARROW : undefined}
      hoverArrow={!customStyle}
      className={
        extraWidth
          ? "w-full font-semibold sm:w-auto"
          : "w-full font-semibold sm:w-auto sm:min-w-[220px]"
      }
    >
      {ctaText}
    </Button>
  );
};

export default Democta;
