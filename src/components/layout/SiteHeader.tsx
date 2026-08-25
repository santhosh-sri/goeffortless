import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { LOGIN_URL, visibleNav } from "@/data/navigation";
import Button from "@/components/ui/Button";
// Banner is commented out below — kept for when it is wanted again.
// import AnnouncementBanner from "./AnnouncementBanner";
import Container from "@/components/ui/Container";
// import ThemeToggle from "@/components/ui/ThemeToggle";
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
    // The Figma header component applies -rotate-90 to a chevron-down, so it
    // points right when closed; it rotates down while the panel is open.
    className="shrink-0 transition-transform duration-200 -rotate-90 group-aria-expanded:rotate-0"
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
  // Click-away is measured against the whole header, not just the nav row.
  // The dropdown panel is a sibling of the nav row (see the comment on the
  // panel below), so a nav-only ref treated every click *inside* the panel as
  // an outside click: `pointerdown` unmounted the panel before the link's
  // `click` could fire, and no dropdown link ever navigated.
  const headerRef = useRef<HTMLElement | null>(null);
  // Tracks what opened the current menu. Hovering a nav item already opens it,
  // so a plain `expanded ? null : label` toggle read the hover-opened state and
  // closed the panel on the very click meant to open it.
  const openedBy = useRef<"hover" | "click" | null>(null);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
    setExpandedGroup(null);
    openedBy.current = null;
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
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        openedBy.current = null;
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
    setOpenMenu((current) => {
      if (current !== label) openedBy.current = "hover";
      return label;
    });
  };

  /**
   * Click on a nav trigger. A menu the pointer merely hovered open is *kept*
   * open and promoted to "click"; only a second, deliberate click closes it.
   */
  const toggleWithClick = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu((current) => {
      if (current === label && openedBy.current === "click") {
        openedBy.current = null;
        return null;
      }
      openedBy.current = "click";
      return label;
    });
  };

  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      // A menu the user deliberately clicked open stays open until they click
      // away or press Escape; only hover-opened menus time out.
      if (openedBy.current === "click") return;
      setOpenMenu(null);
      openedBy.current = null;
    }, 300);
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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-line-subtle bg-bg/90 backdrop-blur-[32px]"
    >
      {/*
        Announcement strip — hidden for now, not needed. goeffortless.ai pins
        it with the header; uncomment to bring the Live Masterclass bar back.
        The component and its copy in `@/data/announcement` are left in place.
      */}
      {/* <AnnouncementBanner /> */}
      <Container className="flex items-center justify-between gap-4 py-3 xl:pb-5 xl:pt-10">
        <Logo />

        {/*
          The full nav switches in at xl, not lg. At exactly 1024px the logo
          (176), nav (542) and actions (239) need 957px but the gutter leaves
          896, so the "Schedule Demo" button pushed 29px past the viewport and
          every page scrolled sideways. The drawer covers 1024-1279 instead,
          which also avoids cramming five dropdown panels into that width.
        */}
        {/*
          Figma's 32px nav gap is a 1440 measurement. Between 1280 and ~1400
          the same gap overflows the 1172px of content the gutters leave, and
          flex resolved it by wrapping "Case Studies" and "Schedule Demo" onto
          two lines. Hold 32px from 1440 up — the frame the design was measured
          on — and fall back to 24px below it. The breakpoint is written out
          rather than using `2xl:`, which is 1536 and would miss 1440 itself.
        */}
        {/* ---- Desktop navigation ---- */}
        <div
          className="hidden shrink-0 items-center gap-6 xl:flex min-[1440px]:gap-8"
          onMouseLeave={closeWithDelay}
        >
          <nav aria-label="Main">
            <ul className="flex items-center gap-6 min-[1440px]:gap-8">
              {visibleNav.map((item) => {
                if (!item.menu) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href ?? "#"}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "whitespace-nowrap rounded-sm text-body transition-colors duration-200",
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
                      onClick={() => toggleWithClick(item.label)}
                      className={cn(
                        "group flex items-center gap-2 whitespace-nowrap rounded-sm text-body transition-colors duration-200",
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
        <div className="hidden shrink-0 items-center gap-3 xl:flex min-[1440px]:gap-4">
          {/* Theme switch parked while the site is locked to the white theme —
              see THEME_LOCKED_LIGHT in ThemeProvider. */}
          {/* <ThemeToggle /> */}
          <Button
            href={LOGIN_URL}
            external
            variant="secondary"
            size="sm"
            className="whitespace-nowrap font-semibold"
          >
            Login
          </Button>
          <Button
            calBooking
            size="sm"
            className="whitespace-nowrap font-semibold"
            // goeffortless.ai reveals a calendar glyph on hover here (the
            // legacy `/calendar-clock.svg`, white artwork for the filled
            // button), where the other CTAs reveal an arrow.
            hoverIcon={
              <Image
                src="/calendar-clock.svg"
                alt=""
                width={20}
                height={20}
                // The reveal span is absolutely positioned and shrink-wraps,
                // so the global `img { max-width: 100% }` collapsed this to 0.
                className="h-5 w-5 max-w-none"
              />
            }
          >
            Schedule Demo
          </Button>
        </div>

        {/* ---- Mobile / tablet actions ---- */}
        <div className="flex items-center gap-2 xl:hidden">
          {/* <ThemeToggle /> */}
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
          className="absolute inset-x-0 top-full hidden animate-fadeIn xl:block"
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
          className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-line bg-bg xl:hidden"
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
