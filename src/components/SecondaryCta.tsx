import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

interface SecondaryCtaProps {
  handleDirect: () => void;
  secondaryCtaText: string;
  customStyle?: true;
  ishome?: boolean;
  isOrange?: boolean;
  secondaryIcon?: string;
  isFeaturePage?: boolean;
}

/**
 * Secondary (outlined) CTA on the CMS pages — the shared `Button` in its
 * `secondary` variant. `customStyle` marks the hero placement, which uses the
 * 56px hero size to sit level with the primary CTA beside it.
 */
const SecondaryCta: React.FC<SecondaryCtaProps> = ({
  handleDirect,
  secondaryCtaText,
  customStyle = false,
  secondaryIcon,
}) => {
  return (
    <Button
      variant="secondary"
      size={customStyle ? "hero" : "md"}
      onClick={handleDirect}
      leadingIcon={
        secondaryIcon ? (
          <Image src={secondaryIcon} alt="" width={24} height={24} className="h-6 w-6" />
        ) : undefined
      }
      className="w-full font-semibold sm:w-auto"
    >
      {secondaryCtaText}
    </Button>
  );
};

export default SecondaryCta;
