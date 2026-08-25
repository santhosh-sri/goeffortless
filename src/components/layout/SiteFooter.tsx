import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { footerData } from "@/data/footer";
import Container from "@/components/ui/Container";
import Logo from "./Logo";

/**
 * Site footer — Figma node 1886:43277.
 *
 * Reuses `src/data/footer.ts` for its sections, social links and office list.
 *
 * Type scale, which is smaller than the rest of the site: column headings are
 * 16/20 semibold, Resources' sub-headings 14/16 medium accent, every link 13/16
 * muted, and office addresses 14/16 in body ink rather than muted. Column and
 * office dividers are dashed, and the logo lockup runs at the larger footer
 * size (48px mark) — see `Logo`'s `size` prop.
 *
 * Social and location icons come from the Figma node itself (1886:43288-43301,
 * 1886:43382) and are #666666, normalised into square 24/20 boxes. The
 * root-level `/instagram.svg` etc. are white artwork for the old dark site and
 * are still used by ContactSection, ProfileCard and the CMS pages, so they are
 * left in place rather than overwritten.
 */

type FooterItem = {
  title: string;
  url: string;
  external?: boolean;
  soon?: boolean;
};

function FooterLink({ item }: { item: FooterItem }) {
  const classes = cn(
    "inline-block rounded-sm py-1 text-[13px] leading-4 text-content-muted transition-colors duration-200",
    "hover:text-accent",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  );

  if (item.external) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {item.title}
      </a>
    );
  }

  return (
    <Link href={item.url} className={classes}>
      {item.title}
      {/* Block, not inline: at the 13px footer scale these columns are narrow
          enough that an inline marker broke "ROI Calculator" across three
          lines. Figma shows the label alone (1886:43353); the marker is kept
          because the link still points at "#". */}
      {item.soon && (
        <span className="block text-caption italic text-accent">
          coming soon
        </span>
      )}
    </Link>
  );
}

function LinkList({
  title,
  items,
  accentTitle = false,
}: {
  title?: string;
  items: FooterItem[];
  accentTitle?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <p
          className={cn(
            accentTitle
              ? // Resources' sub-headers are 14/16 medium accent (1886:43334),
                // not the 16/20 semibold used by the top-level columns.
                "text-label font-medium text-accent"
              : "text-body font-semibold text-content"
          )}
        >
          {title}
        </p>
      )}
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.title}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const { sections, social_links: socials, officeLocation } = footerData;

  return (
    <footer className="relative overflow-hidden bg-bg pt-12 lg:pt-16">
      <Container>
        {/* ---- Logo + socials ---- */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo size="footer" />

          {/* Figma 1886:43287 spaces the 24px icons 16px apart. The anchors
              carry `p-1` for a usable hit area, which contributes 8px of that,
              so the list gap is 8 rather than 16. */}
          <ul className="flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                  className="inline-flex rounded-sm p-1 transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 dark:invert"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Link columns ---- */}
        {/* Resources holds four sub-columns, so it needs ~3× the width of its
            siblings — an even 4-column split collides its links. */}
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_3fr_1fr] lg:gap-x-0">
          {sections.map((section, index) => {
            const withDivider = index > 0;
            // The rule sits on a column's own left edge, so `pl` alone only
            // pads the side after it and the previous column's links run
            // straight into it. The column before each divider carries the
            // matching right padding, giving every rule 32px of clearance on
            // both sides.
            const beforeDivider = index < sections.length - 1;

            return (
              <div
                key={section.title ?? index}
                className={cn(
                  "flex flex-col gap-6",
                  withDivider &&
                    "lg:border-l lg:border-dashed lg:border-line lg:pl-8",
                  beforeDivider && "lg:pr-8"
                )}
              >
                {"groups" in section && section.groups
                  ? section.groups.map((group) => (
                      <LinkList
                        key={group.title}
                        title={group.title}
                        items={group.items}
                      />
                    ))
                  : null}

                {"subColumns" in section && section.subColumns ? (
                  <div className="flex flex-col gap-6">
                    {section.title && (
                      <p className="text-body font-semibold text-content">
                        {section.title}
                      </p>
                    )}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                      {section.subColumns.map((column) => (
                        <LinkList
                          key={column.title}
                          title={column.title}
                          items={column.items}
                          accentTitle
                        />
                      ))}
                    </div>
                  </div>
                ) : null}

                {"items" in section && section.items ? (
                  <LinkList title={section.title} items={section.items} />
                ) : null}
              </div>
            );
          })}
        </div>

        {/* ---- Offices ---- */}
        <div className="mt-8 border-t border-line pt-8">
          <p className="text-body font-semibold text-content">Our Offices</p>

          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {officeLocation.map((office, index) => (
              <li
                key={office.title}
                className={cn(
                  "flex items-start justify-between gap-3",
                  index > 0 &&
                    "lg:border-l lg:border-dashed lg:border-line lg:pl-6"
                )}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-label leading-[18px] font-normal text-accent">
                    {office.title}
                  </p>
                  <p className="text-label leading-4 text-content">
                    {parse(office.desc)}
                  </p>
                </div>

                <a
                  href={office.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${office.title} office in Google Maps`}
                  className="mt-1 inline-flex shrink-0 rounded-sm p-1 transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  <Image
                    src="/assets/footer/location.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 dark:invert"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* ---- Oversized wordmark ---- */}
        {/*
          Figma 1886:43418 is 1312×196 filled with a radial grey ramp at 40%
          opacity, and `/Effortless.svg` is that artwork exactly — 1309×201,
          `#9A9A9A → #484848 → #9A9A9A`, `opacity="0.4"` baked in. It also
          crops itself: the glyphs run to y=218 inside a 201-tall viewBox, so
          the baseline trim comes from the asset rather than a clipped line
          box. Using it drops the CSS gradient this previously approximated.
        */}
        <Image
          src="/Effortless.svg"
          alt=""
          aria-hidden="true"
          width={1309}
          height={201}
          className="mt-6 w-full select-none lg:mt-12"
        />
      </Container>
    </footer>
  );
}

export default SiteFooter;
