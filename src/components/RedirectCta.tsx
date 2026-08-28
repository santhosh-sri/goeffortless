import Button from "./ui/Button";

/** Cal.com booking CTA on the CMS pages — the shared primary `Button`. */
const RedirectCta = ({
  ctaText,
  fullWidth,
}: {
  ctaText?: string;
  fullWidth?: boolean;
}) => {
  return (
    <Button
      calBooking
      className={fullWidth ? "w-full font-semibold" : "w-full font-semibold sm:w-auto"}
    >
      {ctaText}
    </Button>
  );
};

export default RedirectCta;
