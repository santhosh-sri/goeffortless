import { CompanyValue } from "@/interface/type";
import { FC } from "react";
import { cn } from "@/lib/cn";
import MaskIcon from "./ui/MaskIcon";

/**
 * One cell of the Values / growth-features grid. Cells are divided by dashed
 * `line` rules (left of every cell but the first in a row on desktop, above
 * every cell but the first when stacked); the white CMS icons are painted
 * accent on an icon tile.
 */
const ValueCard: FC<CompanyValue & { className?: string }> = ({
  icon,
  title,
  description,
  growthFeatures,
  customLength = false,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-3 py-6 text-center md:py-8",
        customLength ? "md:px-4" : "md:px-5",
        "border-t border-dashed border-line first:border-t-0 md:border-t-0",
        "md:border-l md:border-dashed md:border-line md:first:border-l-0",
        className
      )}
    >
      <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-icon-tile">
        <MaskIcon src={icon} className="h-8 w-8" />
      </span>
      <h3 className="text-body font-medium text-content md:text-heading-sm">
        {title}
      </h3>
      <p
        className={cn(
          "text-label text-content-muted md:leading-6",
          growthFeatures ? "md:text-body" : "md:text-body-lg"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
