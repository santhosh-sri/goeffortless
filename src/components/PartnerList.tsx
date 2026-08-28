import { CompanyValue } from "@/interface/type";
import { FC } from "react";
import { cn } from "@/lib/cn";
import { parseCms } from "@/lib/cmsHtml";
import MaskIcon from "./ui/MaskIcon";

/**
 * One cell of the "Ideal Partners" (no icon, 4-up) and "Partner Benefits"
 * (icon, 3-up) grids. The dark site separated cells with white gradient
 * rules; on the light theme they are dashed `line` dividers, as on the
 * product pages' Billing Modes cards.
 */
const PartnerList: FC<CompanyValue> = ({
  index = 0,
  icon,
  title,
  description,
  topBottomBorder,
}) => {
  const withIcon = Boolean(icon);
  const columns = withIcon ? 3 : 4;
  const firstInRow = index % columns === 0;

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-start gap-4 py-6 text-start md:gap-5",
        withIcon ? "md:px-8 md:py-8" : "md:px-6",
        // Vertical rule between columns, horizontal rule between stacked cells.
        "border-t border-dashed border-line first:border-t-0 md:border-t-0",
        !firstInRow && "md:border-l md:border-dashed md:border-line",
        topBottomBorder && "md:border-t"
      )}
    >
      {icon && (
        // The CMS icons are white-on-transparent artwork drawn for the dark
        // site, so they are used as a mask and painted accent, as the product
        // pages' icon tiles are.
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-icon-tile">
          <MaskIcon src={icon} className="h-8 w-8" />
        </span>
      )}

      <h3
        className={cn(
          "w-full text-content",
          withIcon
            ? "text-heading-sm font-medium"
            : "text-heading-sm font-normal md:text-heading-md"
        )}
      >
        {parseCms(title)}
      </h3>

      <p className="w-full text-body text-content-muted md:text-body-lg md:leading-7">
        {description}
      </p>
    </div>
  );
};

export default PartnerList;
