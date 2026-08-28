import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MaskIcon from "@/components/ui/MaskIcon";
import { announcement } from "@/data/announcement";

/**
 * The announcement strip goeffortless.ai runs above its header. Rendered
 * closed on the server and opened after mount so the dismissed state in
 * sessionStorage never causes a hydration mismatch.
 */
export function AnnouncementBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(sessionStorage.getItem(announcement.storageKey) !== "true");
    } catch {
      setOpen(true);
    }
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(announcement.storageKey, "true");
    } catch {
      // Private mode — the banner simply comes back next load.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="bg-accent-surface text-accent">
      <Container className="flex items-center justify-between gap-4 py-2.5">
        <p className="flex min-w-0 items-center gap-2 text-label font-medium md:text-body">
          {/* White legacy artwork — painted accent through a mask. */}
          <MaskIcon src="/calendar-days.svg" tone="accent" className="h-6 w-6" />
          <span className="truncate">{announcement.text}</span>
        </p>

        <div className="flex shrink-0 items-center gap-3 md:gap-6">
          <Button
            href={announcement.ctaHref}
            external
            variant="secondary"
            size="sm"
            onClick={dismiss}
            className="whitespace-nowrap font-semibold"
          >
            {announcement.ctaLabel}
          </Button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-danger transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default AnnouncementBanner;
