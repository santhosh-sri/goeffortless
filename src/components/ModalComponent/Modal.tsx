import React, { ReactNode, useEffect } from "react";
import { cn } from "@/lib/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnBackdrop?: boolean;
  /** Overrides the default 1352px container width for narrower dialogs. */
  className?: string;
  /** Id of the element labelling the dialog, for screen readers. */
  labelledBy?: string;
}

const Modal = ({
  open,
  onClose,
  children,
  closeOnBackdrop = true,
  className,
  labelledBy,
}: ModalProps) => {
  // ESC key close
  useEffect(() => {
    if (!open) return;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      // Restore scroll
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-content/60 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={closeOnBackdrop ? onClose : undefined}
      />

      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={cn(
          "relative z-10 mx-auto rounded-xl border border-line bg-surface text-content shadow-overlay transition-all animate-scaleIn",
          // `cn` only joins — it has no tailwind-merge — so emitting the
          // default width alongside a caller's own would leave both on the
          // element and let stylesheet order pick the winner, which it did:
          // a caller asking for `w-[1180px]` still rendered at 1352. The
          // default is dropped whenever the caller sets its own width.
          /(^|\s)w-/.test(className ?? "")
            ? null
            : "w-[1352px] max-w-[calc(100vw-40px)]",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
