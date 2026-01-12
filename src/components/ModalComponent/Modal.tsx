import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnBackdrop?: boolean;
}

const Modal = ({
  open,
  onClose,
  children,
  closeOnBackdrop = true,
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
        className="absolute inset-0 transition-opacity animate-fadeIn"
        onClick={closeOnBackdrop ? onClose : undefined}
      />

      {/* Modal Container */}
      <div
        className="relative z-10 bg-[#15181BF0] rounded-xl shadow-xl border border-[#2A3038]
                   w-[1352px] mx-auto backdrop-blur-[2px]
                   transform transition-all animate-scaleIn max-md:m-5"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
