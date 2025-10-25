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
    <section className="w-full py-10">
      <div className="border border-[#E5E5E533] p-2 md:p-8 rounded-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Office{" "}
          <span className="bg-custom-gradient bg-clip-text text-transparent">
            Locations
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden h-[320px]"
            >
              <div className="overflow-hidden">
                <Image
                  src={loc.locationSrc}
                  alt={loc.locationName}
                  width={632}
                  height={320}
                  className="transition-transform duration-500 ease-in-out hover:scale-105 object-cover object-top w-full"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.1)_0%,_#000000_50%)] p-2 md:p-5 text-white">
                <h2 className="text-base font-medium text-[#F08B32]">
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
      <div className="mt-8">
        <ContactSection />
      </div>
      <div className="border border-[#E5E5E533] p-2 md:p-8 rounded-xl mt-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default OfficeLocations;
