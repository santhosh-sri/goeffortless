// components/TeamPhoto.tsx
import { TeamGroupMember } from "@/interface/type";
import Image from "next/image";
import { FC } from "react";
import { cn } from "@/lib/cn";

type Props = Pick<TeamGroupMember, "imageSrc" | "crop"> & {
  alt: string;
  sizes: string;
  className?: string;
};

/**
 * A team portrait on its pale slab, framed the way Figma frames it.
 *
 * The slab is 372/440; the cut-outs are exported at the same ratio, so a
 * plain cover neither crops nor letterboxes. Where the design zooms in on a
 * face the image fill carries a box larger than the slab, and that box
 * (width/height/left/top as % of the slab) is reproduced here on a wrapper
 * so `next/image` can keep `fill`.
 */
const TeamPhoto: FC<Props> = ({ imageSrc, crop, alt, sizes, className }) => {
  const boxed = typeof crop === "object";
  return (
    <span
      className={cn(
        "relative block aspect-[372/440] w-full overflow-hidden bg-[#ccd5e4]",
        className
      )}
    >
      <span
        className="absolute inset-0 block"
        style={
          boxed
            ? {
                width: `${crop.width}%`,
                height: `${crop.height}%`,
                left: `${crop.left}%`,
                top: `${crop.top}%`,
              }
            : undefined
        }
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes={sizes}
          className={cn(
            boxed
              ? "object-fill"
              : crop === "bottom"
              ? "object-cover object-bottom"
              : "object-cover"
          )}
        />
      </span>
    </span>
  );
};

export default TeamPhoto;
