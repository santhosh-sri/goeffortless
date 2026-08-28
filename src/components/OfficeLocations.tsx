"use client";

import { Location } from "@/interface/type";
import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactSection from "./ContactSection";
import MaskIcon from "./ui/MaskIcon";

interface OfficeLocationsProps {
  locations: Location[];
}

/**
 * /contact-us body: office photo cards, the quick-contact pair, then the
 * form — each a white card with a `line` stroke, stacked 32px apart.
 */
const OfficeLocations: React.FC<OfficeLocationsProps> = ({ locations }) => {
  return (
    <section className="flex w-full flex-col gap-6 md:gap-8">
      <div className="rounded-xl border border-line bg-surface p-5 md:p-8">
        <h2 className="mb-5 text-heading-sm font-light text-content md:mb-8 md:text-heading-md">
          Office <span className="font-bold text-accent">Locations</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface"
            >
              <div className="overflow-hidden">
                <Image
                  src={loc.locationSrc}
                  alt={loc.locationName}
                  width={632}
                  height={320}
                  className="h-[188px] w-full object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105 md:h-[240px]"
                />
              </div>

              <div className="flex items-start justify-between gap-3 p-4 md:p-5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-body font-medium text-accent">
                    {loc.locationName}
                  </h3>
                  <p className="text-label text-content-muted">{loc.details}</p>
                </div>

                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Icon-only link: the pin is decorative, so the name has
                  // to come from the office it points at.
                  aria-label={`Open ${loc.locationName} in Google Maps`}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  <MaskIcon src="/location-2.svg" tone="muted" className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactSection />

      <div className="rounded-xl border border-line bg-surface p-5 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default OfficeLocations;
