import React, { useRef } from "react";

const SectionPill = ({ label }: { label: string }) => (
  <span className="flex justify-center items-center bg-[#F08B32] px-2.5 py-1 w-[72px] rounded text-white font-medium text-sm">
    {label}
  </span>
);

const TdsTableComponent = ({
  tableHeader,
  tableBody,
}: {
  tableHeader: any[];
  tableBody: any[];
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

  return (
    <div
      className="w-full rounded-lg bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5
    drop-shadow-sm"
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#2D2D2D]">
              {tableHeader.map((header, index) => {
                const isFirst = index === 0;
                const isLast = index === tableHeader.length - 1;
                const alignment =
                  index <= 1
                    ? "text-left"
                    : index <= 3
                    ? "text-right"
                    : "text-center";
                return (
                  <th
                    key={header?.key}
                    className={`py-5 text-white text-sm font-medium ${
                      isFirst && "pl-5"
                    } ${isLast && "pr-5"} ${
                      tableHeader.length <= 3 ? "text-left" : alignment
                    }`}
                  >
                    {header?.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((row, idx) => (
              <tr key={idx} className="border-b border-[#2D2D2D]">
                {tableHeader.map((col, index) => {
                  const isFirst = index === 0;
                  const isLast = index === tableHeader.length - 1;
                  const alignment =
                    index <= 1
                      ? "text-left"
                      : index <= 3
                      ? "text-right"
                      : "text-center";
                  return (
                    <td
                      key={col.key}
                      className={`py-5 text-white text-sm font-normal ${
                        isFirst && "pl-6"
                      } ${isLast && "pr-6"} ${
                        tableHeader.length <= 3 ? "text-left" : alignment
                      }`}
                    >
                      {col?.key === "section" ? (
                        <SectionPill label={row.section} />
                      ) : (
                        row[col.key]
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="sticky top-[69px] z-10 text-white border-b border-[#2D2D2D] bg-[linear-gradient(111.18deg,rgba(255,255,255,0.15)_-28.62%,rgba(255,255,255,0.05)_104.36%)]">
          <div className="flex w-full bg-black z-[99] relative">
            <div
              style={{
                background:
                  "linear-gradient(111.18deg, rgba(255, 255, 255, 0.2) -28.62%, rgba(255, 255, 255, 0) 104.36%)",
              }}
              className="w-[160px] p-3 text-sm font-medium border-r border-[#2D2D2D] text-white"
            >
              {tableHeader[0]?.label}
            </div>
            <div
              className="flex-1 overflow-x-auto no-scrollbar"
              ref={addScrollRef}
              onScroll={(e) =>
                syncScroll((e.target as HTMLDivElement).scrollLeft)
              }
            >
              <div
                style={{
                  background:
                    "linear-gradient(116deg, rgba(255, 255, 255, 0.20) -120.31%, rgba(255, 255, 255, 0.00) 127.83%)",
                }}
                className="flex min-w-max h-full"
              >
                {tableHeader.slice(1).map((header, index) => (
                  <div
                    key={header?.key}
                    className={`w-[172px] p-3 text-sm font-medium text-white ${
                      index < tableHeader.slice(1).length - 1 &&
                      "border-r [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"
                    }`}
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
          <div key={idx} className="flex border-b border-[#2D2D2D]">
            <div
              style={{
                background:
                  "linear-gradient(111deg, rgba(255, 255, 255, 0.20) -28.62%, rgba(255, 255, 255, 0.00) 104.36%)",
                boxShadow:
                  "0px 2px 5px -2px rgba(16, 25, 40, 0.06), 0px 2px 7px 0px rgba(16, 25, 40, 0.05), 0px 0px 0px 1px rgba(16, 25, 40, 0.05)",
              }}
              className="w-[160px] p-3 text-xs border-r border-[#2D2D2D] text-white"
            >
              {tableHeader[0].key === "section" ? (
                <SectionPill label={row[tableHeader[0].key]} />
              ) : (
                row[tableHeader[0].key]
              )}
            </div>
            <div
              className="flex-1 overflow-x-auto no-scrollbar"
              style={{
                background:
                  "linear-gradient(116deg, rgba(255, 255, 255, 0.20) -120.31%, rgba(255, 255, 255, 0.00) 127.83%)",
              }}
              ref={addScrollRef}
              onScroll={(e) =>
                syncScroll((e.target as HTMLDivElement).scrollLeft)
              }
            >
              <div className="flex min-w-max">
                {tableHeader.slice(1).map((col, index) => (
                  <div
                    key={col?.key}
                    className={`w-[172px] text-xs p-3 text-white ${
                      index < tableHeader.slice(1).length - 1 &&
                      "border-r-[1px] last:border-b-none [border-image-source:linear-gradient(180deg,#333333_0%,#B1B1B1_50%,#333333_100%)] [border-image-slice:1]"
                    }`}
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
