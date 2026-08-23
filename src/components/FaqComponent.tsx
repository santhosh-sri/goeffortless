"use client";

import { FAQData } from "@/interface/type";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { cn } from "@/lib/cn";
import SearchBar from "./SearchBar";
import MaskIcon from "./ui/MaskIcon";

interface Props {
  faqs: FAQData;
}

/**
 * /faqs — searchable, categorised accordion. Cards are the product pages'
 * white card with a `line` stroke; category icons are the dark site's white
 * glyphs painted accent on an icon tile.
 */
const FaqComponent: React.FC<Props> = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState<Record<string, number[]>>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [feedbacks, setFeedbacks] = useState<{
    [category: string]: { [index: number]: "yes" | "no" };
  }>({});

  const toggleFAQ = (category: string, index: number) => {
    setOpenIndexes((prev) => {
      const prevOpen: number[] = prev[category] || []; // ensure it's always an array
      if (prevOpen.includes(index)) {
        return { ...prev, [category]: prevOpen.filter((i) => i !== index) };
      } else {
        return { ...prev, [category]: [...prevOpen, index] };
      }
    });
  };

  const handleFeedback = (
    e: any,
    category: string,
    index: number,
    value: "yes" | "no"
  ) => {
    e.stopPropagation();
    setFeedbacks((prev) => ({
      ...prev,
      [category]: { ...(prev[category] || {}), [index]: value },
    }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const ImageData: any = {
    General: "/circle-question-active.svg",
    "Sales, Invoicing & Collections": "/page.svg",
    "Teams & Field Operations": "/people-network.svg",
    "Expenses & Banking": "/bank-statement.svg",
    "Business Insights & Automation": "/decision-process.svg",
    "Security & Trust": "/shield-lock.svg",
    "Technical & Licensing": "/category-certificate.svg",
  };

  return (
    <div className="flex w-full flex-col gap-10">
      <SearchBar onChange={handleSearchChange} />
      <div className="flex flex-col gap-10">
        {Object.entries(faqs).map(([category, items]) => {
          const filteredItems =
            items &&
            items.filter((item) =>
              item?.question?.toLowerCase().includes(searchQuery)
            );

          if (filteredItems.length === 0) return null;
          return (
            <div key={category} className="flex flex-col gap-5">
              <div className="flex items-center gap-3 border-b border-line pb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-icon-tile">
                  <MaskIcon src={ImageData[category]} className="h-5 w-5" />
                </span>
                <h2 className="text-body-lg font-semibold text-content">
                  {category}
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {filteredItems?.map((item, index) => {
                  const currentFeedback = feedbacks[category]?.[index] || null;
                  const isOpen = openIndexes[category]?.includes(index);
                  return (
                    <div
                      key={index}
                      className="select-none rounded-xl border border-line bg-surface"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFAQ(category, index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="text-body font-medium text-content">
                          {item.question}
                        </span>
                        <Image
                          src={"/assets/shared/chevron-down.svg"}
                          alt=""
                          width={16}
                          height={16}
                          className={cn(
                            "h-4 w-4 shrink-0 transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                          unoptimized
                        />
                      </button>
                      {isOpen && (
                        <div className="flex flex-col gap-3 px-5 pb-5">
                          <div className="text-body text-content-muted">
                            {item.answer}
                          </div>
                          <div className="flex items-center justify-between border-t border-line pt-3 text-caption text-content-muted md:text-label">
                            <p>Was this helpful?</p>
                            <div className="flex gap-1">
                              <button
                                type="button"
                                className={cn(
                                  "flex items-center gap-1 rounded-sm px-2 py-1 transition-colors duration-300",
                                  currentFeedback === "yes"
                                    ? "bg-success/15 text-success"
                                    : "text-content hover:bg-surface-hover"
                                )}
                                onClick={(e) =>
                                  handleFeedback(e, category, index, "yes")
                                }
                              >
                                <MaskIcon
                                  src="/yes.svg"
                                  tone={currentFeedback === "yes" ? "success" : "content"}
                                  className="h-4 w-4"
                                />
                                <span>Yes</span>
                              </button>
                              <button
                                type="button"
                                className={cn(
                                  "flex items-center gap-1 rounded-sm px-2 py-1 transition-colors duration-300",
                                  currentFeedback === "no"
                                    ? "bg-danger/10 text-danger"
                                    : "text-content hover:bg-surface-hover"
                                )}
                                onClick={(e) =>
                                  handleFeedback(e, category, index, "no")
                                }
                              >
                                <MaskIcon
                                  src="/no.svg"
                                  tone="content"
                                  className={cn("h-4 w-4", currentFeedback === "no" && "!bg-danger")}
                                />
                                <span>No</span>
                              </button>
                            </div>
                          </div>
                          {currentFeedback && (
                            <div className="rounded-sm bg-bg-subtle px-3 py-2 text-label text-content-muted">
                              {currentFeedback === "yes"
                                ? "Thank you for your feedback!"
                                : "Thank you. Please contact support for more help."}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqComponent;
