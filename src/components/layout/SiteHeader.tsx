import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { LOGIN_URL, visibleNav } from "@/data/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

/**
 * Site header — Figma node 2520:8379.
 *
 * Desktop: 96px tall, white/blurred, 64px gutters, 32px nav gap,
 * 16/20 nav labels, Login (outlined) + Schedule Demo (filled) at 20/8 padding.
 * Tablet and mobile collapse to a drawer; the design has no frames for those
 * widths, so the breakpoint behaviour is derived (see docs/redesign).
 */
const CHEVRON = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 transition-transform duration-200 group-aria-expanded:rotate-180"
  >
    <path d="m4 6 4 4 4-4" />
  </svg>
);

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
    setExpandedGroup(null);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Escape closes whatever is open; click-away closes the desktop dropdown.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [closeAll]);

  // Lock scroll behind the mobile drawer.
  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawerOpen]);

  const openWithHover = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 300);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  const openMenuItem = visibleNav.find((item) => item.label === openMenu);

  const isActive = (href?: string) =>
    !!href && (pathname === href || pathname?.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line-subtle bg-bg/90 backdrop-blur-[32px]">
      <Container className="flex items-center justify-between gap-4 py-3 lg:pb-5 lg:pt-10">
        <Logo />

        {/* ---- Desktop navigation ---- */}
        <div
          ref={navRef}
          className="hidden items-center gap-8 lg:flex"
          onMouseLeave={closeWithDelay}
        >
          <nav aria-label="Main">
            <ul className="flex items-center gap-8">
              {visibleNav.map((item) => {
                if (!item.menu) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href ?? "#"}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "rounded-sm text-body transition-colors duration-200",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-4 focus-visible:ring-offset-bg",
                          isActive(item.href)
                            ? "text-accent"
                            : "text-content-muted hover:text-content"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const expanded = openMenu === item.label;

                return (
                  <li
                    key={item.label}
                    onMouseEnter={() => openWithHover(item.label)}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenMenu(expanded ? null : item.label)
                      }
                      className={cn(
                        "group flex items-center gap-2 rounded-sm text-body transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-4 focus-visible:ring-offset-bg",
                        expanded
                          ? "text-content"
                          : "text-content-muted hover:text-content"
                      )}
                    >
                      {item.label}
                      {CHEVRON}
                    </button>

                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* ---- Desktop actions ---- */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button
            href={LOGIN_URL}
            external
            variant="secondary"
            size="sm"
            className="font-semibold"
          >
            Login
          </Button>
          <Button calBooking size="sm" className="font-semibold">
            Schedule Demo
          </Button>
        </div>

        {/* ---- Mobile / tablet actions ---- */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            onClick={() => setDrawerOpen((v) => !v)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md border border-line",
              "bg-surface text-content transition-colors duration-200 hover:bg-surface-hover",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            )}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {drawerOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Panels are rendered here, not inside the nav item, so a 1140px-wide
          menu stays inside the page gutters instead of clipping at the
          viewport edge. */}
      {openMenuItem?.menu && (
        <div
          className="absolute inset-x-0 top-full hidden animate-fadeIn lg:block"
          onMouseEnter={() => openWithHover(openMenuItem.label)}
          onMouseLeave={closeWithDelay}
        >
          <Container className="flex justify-center pt-1">
            <NavDropdown menu={openMenuItem.menu} onNavigate={closeAll} />
          </Container>
        </div>
      )}

      {/* ---- Mobile / tablet drawer ---- */}
      {drawerOpen && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-line bg-bg lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {visibleNav.map((item) => {
                  if (!item.menu) {
                    return (
                      <li key={item.label} className="border-b border-line">
                        <Link
                          href={item.href ?? "#"}
                          onClick={closeAll}
                          className="block py-4 text-body text-content"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  const expanded = expandedGroup === item.label;

                  return (
                    <li key={item.label} className="border-b border-line">
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() =>
                          setExpandedGroup(expanded ? null : item.label)
                        }
                        className="group flex w-full items-center justify-between py-4 text-body text-content"
                      >
                        {item.label}
                        {CHEVRON}
                      </button>

                      {expanded && (
                        <div className="pb-4">
                          <NavDropdown menu={item.menu} onNavigate={closeAll} />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex flex-col gap-3 pt-6">
              <Button
                href={LOGIN_URL}
                external
                variant="secondary"
                fullWidth
                onClick={closeAll}
              >
                Login
              </Button>
              <Button calBooking fullWidth onClick={closeAll}>
                Schedule Demo
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
