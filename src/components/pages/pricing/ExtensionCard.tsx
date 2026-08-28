import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import type { PricingExtension } from "@/data/pricingDetail";

/**
 * Platform-extension card — Figma "Component 1320" (2426:70023 on
 * Procurement, 2426:70371/70401/70426 on Sales).
 *
 * White card, 12px radius, raised shadow, 20px padding, 12px rhythm: a 40px
 * accent glyph with the solid "Add-On" chip opposite, the uppercase accent
 * name over its subtitle (dashed rule beneath), the flow strip, then the
 * price rows split by a dashed rule after the edition rows.
 */
export function ExtensionCard({ item }: { item: PricingExtension }) {
  // Figma draws the dashed rule after the edition rows, before the
  // onboarding-fee rows; every extension has exactly two onboarding rows or
  // one, so split on the label.
  const feeIndex = item.rows.findIndex((row) =>
    /onboarding/i.test(row.label)
  );
  const editionRows = feeIndex === -1 ? item.rows : item.rows.slice(0, feeIndex);
  const feeRows = feeIndex === -1 ? [] : item.rows.slice(feeIndex);

  const Row = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-start justify-between gap-4 text-body">
      <dt className="text-content-muted">{label}</dt>
      <dd className="font-bold text-content">{value}</dd>
    </div>
  );

  return (
    <div className="flex h-full flex-col gap-3 rounded-xl bg-surface p-5 shadow-card-raised">
      <div className="flex items-start justify-between">
        <span className="relative block h-10 w-10 shrink-0">
          <Image
            src={item.icon}
            alt=""
            fill
            className="object-contain"
            sizes="40px"
          />
        </span>
        <span className="rounded-sm bg-accent px-2 py-1 text-[13px] font-medium leading-4 text-content-on-accent">
          {item.chip}
        </span>
      </div>

      <div className="flex flex-col gap-2 border-b border-dashed border-line pb-3">
        <h3 className="text-body-lg font-bold uppercase leading-6 text-accent">
          {item.name}
        </h3>
        <p className="text-label text-content-muted">{item.subtitle}</p>
      </div>

      <p className="rounded-sm bg-bg-subtle p-2 text-label leading-5 text-content">
        {item.flow}
      </p>

      <dl className="flex flex-col gap-3">
        <div
          className={cn(
            "flex flex-col gap-3",
            feeRows.length > 0 && "border-b border-dashed border-line pb-3"
          )}
        >
          {editionRows.map((row) => (
            <Row key={row.label} {...row} />
          ))}
        </div>
        {feeRows.length > 0 && (
          <div className="flex flex-col gap-3">
            {feeRows.map((row) => (
              <Row key={row.label} {...row} />
            ))}
          </div>
        )}
      </dl>
    </div>
  );
}

export default ExtensionCard;
