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
 * Reuses `src/data/footer.ts` wholesale: its sections, social links and office
 * list already match the redesign one-for-one (including Pricing being
 * commented out, which matches the hidden Pricing nav item).
 *
 * Two implementation notes:
 *  - Social icons ship as white SVGs for the old dark site, so they are
 *    inverted in light and left alone in dark.
 *  - The oversized "Effortless" wordmark is rendered as gradient-clipped text
 *    rather than an exported image — it stays crisp at any width, scales with
 *    the viewport, and remains selectable. Marked aria-hidden as decoration.
 */

type FooterItem = {
  title: string;
  url: string;
  external?: boolean;
  soon?: boolean;
};

function FooterLink({ item }: { item: FooterItem }) {
  const classes = cn(
    "inline-block rounded-sm py-1 text-body text-content-muted transition-colors duration-200",
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
      {item.soon && (
        <span className="ml-1.5 text-caption italic text-accent">
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
    <div className="flex flex-col">
      {title && (
        <p
          className={cn(
            "pb-1 text-body font-semibold",
            accentTitle ? "text-accent" : "text-content"
          )}
        >
          {title}
        </p>
      )}
      <ul className="flex flex-col">
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
          <Logo />

          <ul className="flex items-center gap-5">
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
                    width={20}
                    height={20}
                    className="h-5 w-5 invert dark:invert-0"
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

            return (
              <div
                key={section.title ?? index}
                className={cn(
                  "flex flex-col gap-6",
                  withDivider && "lg:border-l lg:border-line lg:pl-8"
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
        <div className="mt-10 border-t border-line pt-8">
          <p className="text-body-lg font-semibold text-content">Our Offices</p>

          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {officeLocation.map((office, index) => (
              <li
                key={office.title}
                className={cn(
                  "flex items-start justify-between gap-3",
                  index > 0 && "lg:border-l lg:border-line lg:pl-6"
                )}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-body font-semibold text-accent">
                    {office.title}
                  </p>
                  <p className="text-[14px] leading-[20px] text-content-muted">
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
                    src="/location.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 invert dark:invert-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* ---- Oversized wordmark ---- */}
      <p
        aria-hidden="true"
        className={cn(
          "mt-6 select-none bg-gradient-to-b from-content/30 to-content/5 bg-clip-text",
          "px-4 text-center font-semibold leading-[0.8] text-transparent",
          "text-[18vw] lg:mt-10"
        )}
      >
        Effortless
      </p>
    </footer>
  );
}

export default SiteFooter;
