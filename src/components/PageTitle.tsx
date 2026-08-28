import { FirstFoldContent } from "@/interface/type";
import Image from "next/image";
import React from "react";
import Badge from "./ui/Badge";

/**
 * The eyebrow chip above a CMS page's heading.
 *
 * Previously a dark #303032 pill with a white gradient sheen; now the same
 * `Badge` the redesigned pages use. `tone` lets the caller match the band
 * (white chip on grey, grey chip on white — see Badge).
 */
const PageTitle: React.FC<
  FirstFoldContent & { tone?: React.ComponentProps<typeof Badge>["tone"] }
> = ({ pageHeading, pageName, logo, ishome, tone = "surface" }) => {
  return (
    <Badge tone={tone}>
      {ishome && <span>Say 👋 to</span>}
      {logo && (
        <Image
          src={logo}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4"
        />
      )}
      {pageName && <span className="text-accent">{pageName}</span>}
      {pageHeading && <span>{pageHeading}</span>}
    </Badge>
  );
};

export default PageTitle;
