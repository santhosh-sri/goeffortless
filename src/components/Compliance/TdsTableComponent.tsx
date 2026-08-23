import React, { useRef } from "react";
import { cn } from "@/lib/cn";
import { COMPLIANCE_CARD } from "./card";

const SectionPill = ({ label }: { label: string }) => (
  <span className="inline-flex w-[72px] items-center justify-center rounded-sm bg-accent px-2.5 py-1 text-label font-medium text-content-on-accent">
    {label}
  </span>
);

/**
 * Rate / threshold tables on the Compliance page. Desktop is a plain table;
 * mobile pins the first column and scroll-syncs the rest. Grid lines and
 * header fill come from the `line` / `bg-subtle` tokens.
 */
const TdsTableComponent = ({
  tableHeader,
  tableBody,
  tdsMatrix,
}: {
  tableHeader: any[];
  tableBody: any[];
  tdsMatrix?: any;
}) => {
  const scrollRefs = useRef<HTMLDivElement[]>([]);

  const syncScroll = (left: number) => {
    scrollRefs.current.forEach((el) => {
      if (el.scrollLeft !== left) el.scrollLeft = left;
    });
  };

  const addScrollRef = (el: HTMLDivElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  const alignFor = (index: number) => {
    if (tableHeader.length <= 3 || !tdsMatrix) return "text-left";
    return index <= 1 ? "text-left" : index <= 3 ? "text-right" : "text-center";
  };

  return (
    <div className={cn(COMPLIANCE_CARD, "w-full overflow-hidden")}>
      {/* ================= DESKTOP ================= */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-line bg-bg-subtle">
              {tableHeader.map((header, index) => (
                <th
                  key={header?.key}
                  className={cn(
                    "px-4 py-4 text-label font-medium text-content",
                    index === 0 && "pl-5",
                    index === tableHeader.length - 1 && "pr-5",
                    alignFor(index)
                  )}
                >
                  {header?.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((row, idx) => (
              <tr key={idx} className="border-b border-line last:border-b-0">
                {tableHeader.map((col, index) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-4 py-4 text-label text-content-muted",
                      index === 0 && "pl-5",
                      index === tableHeader.length - 1 && "pr-5",
                      alignFor(index)
                    )}
                  >
                    {col?.key === "section" ? (
                      <SectionPill label={row.section} />
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="sticky top-[69px] z-10 border-b border-line bg-bg-subtle">
          <div className="relative flex w-full">
            <div className="w-[160px] border-r border-line p-3 text-label font-medium text-content">
              {tableHeader[0]?.label}
            </div>
            <div
              className="no-scrollbar flex-1 overflow-x-auto"
              ref={addScrollRef}
              onScroll={(e) =>
                syncScroll((e.target as HTMLDivElement).scrollLeft)
              }
            >
              <div className="flex h-full min-w-max">
                {tableHeader.slice(1).map((header, index) => (
                  <div
                    key={header?.key}
                    className={cn(
                      "w-[172px] p-3 text-label font-medium text-content",
                      index < tableHeader.slice(1).length - 1 &&
                        "border-r border-line"
                    )}
                  >
                    {header?.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rows */}
        {tableBody.map((row, idx) => (
          <div key={idx} className="flex border-b border-line last:border-b-0">
            <div className="w-[160px] border-r border-line bg-bg-subtle p-3 text-caption text-content">
              {tableHeader[0].key === "section" ? (
                <SectionPill label={row[tableHeader[0].key]} />
              ) : (
                row[tableHeader[0].key]
              )}
            </div>
            <div
              className="no-scrollbar flex-1 overflow-x-auto"
              ref={addScrollRef}
              onScroll={(e) =>
                syncScroll((e.target as HTMLDivElement).scrollLeft)
              }
            >
              <div className="flex min-w-max">
                {tableHeader.slice(1).map((col, index) => (
                  <div
                    key={col?.key}
                    className={cn(
                      "w-[172px] p-3 text-caption text-content-muted",
                      index < tableHeader.slice(1).length - 1 &&
                        "border-r border-line"
                    )}
                  >
                    {row[col.key]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TdsTableComponent;
