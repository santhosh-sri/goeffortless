import { cn } from "@/lib/cn";

/**
 * Accordion disclosure chevron. Inline so it inherits `currentColor` and
 * keeps its 1:0.6 aspect ratio — the asset version was a fixed #CECECF
 * stroke stretched into a square box.
 */
export const ChevronDown: React.FC<{ className?: string; open?: boolean }> = ({
  className,
  open = false,
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={cn(
      "h-4 w-4 shrink-0 transition-transform duration-300",
      open && "rotate-180",
      className
    )}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDown;
