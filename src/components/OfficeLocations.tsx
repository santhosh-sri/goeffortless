"use client";

import { Location } from "@/interface/type";
import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactSection from "./ContactSection";

interface OfficeLocationsProps {
  locations: Location[];
}

const OfficeLocations: React.FC<OfficeLocationsProps> = ({ locations }) => {
  return (
    <section className="w-full pb-10">
      <div className="border border-[#E5E5E533] p-4 md:p-8 rounded-xl">
        <h2 className="text-xl md:text-[32px]  font-light text-content mb-4 md:mb-8">
          Office{" "}
          <span className="bg-custom-gradient bg-clip-text text-transparent font-medium">
            Locations
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden md:h-[320px]"
            >
              <div className="overflow-hidden max-md:h-[188px]">
                <Image
                  src={loc.locationSrc}
                  alt={loc.locationName}
                  width={632}
                  height={320}
                  className="transition-transform duration-500 ease-in-out hover:scale-105 object-cover object-top w-full"
                />
              </div>

              <div className="md:absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.1)_0%,_#000000_50%)] p-2 md:p-5 text-white">
                <h2 className="text-base font-medium text-accent">
                  {loc.locationName}
                </h2>
                <div className="flex justify-between gap-3">
                  <p className="text-sm mt-1">{loc.details}</p>

                  <div className="self-end">
                    <a
                      href={loc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-6 h-6 items-center justify-center"
                    >
                      <Image
                        src="/location-2.svg"
                        alt="Location"
                        width={24}
                        height={24}
                        className="cursor-pointer object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-8">
        <ContactSection />
      </div>
      <div className="border border-[#E5E5E533] p-4 md:p-8 rounded-xl mt-6 md:mt-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default OfficeLocations;
