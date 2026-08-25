import { faqs } from "@/interface/type";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/cn";
import MaskIcon from "../ui/MaskIcon";
import { ChevronDown } from "../ui";
import { COMPLIANCE_CARD } from "./card";

interface Props {
  faqs: faqs[];
}

const FaqCompliance: React.FC<Props> = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<Record<number, "yes" | "no">>({});

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleFeedback = (
    e: React.MouseEvent,
    index: number,
    value: "yes" | "no"
  ) => {
    e.stopPropagation();
    setFeedbacks((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {faqs.map((item, index) => {
        const currentFeedback = feedbacks[index];
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className={cn(COMPLIANCE_CARD, "select-none")}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-body font-medium text-content">
                {item.question}
              </span>
              <ChevronDown open={isOpen} className="text-content-muted" />
            </button>

            {isOpen && (
              <div className="flex flex-col gap-3 px-5 pb-5">
                <div className="text-body text-content-muted">{item.answer}</div>

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
                      onClick={(e) => handleFeedback(e, index, "yes")}
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
                      onClick={(e) => handleFeedback(e, index, "no")}
                    >
                      <MaskIcon
                        src="/no.svg"
                        tone={currentFeedback === "no" ? "content" : "content"}
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
  );
};

export default FaqCompliance;
