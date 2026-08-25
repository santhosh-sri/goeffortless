/**
 * Site-wide announcement strip above the header — the "Live Masterclass"
 * banner on goeffortless.ai. "Save My Spot" opens the webinar sign-up form
 * (the same Google Form the footer's "Webinars" link points at).
 */
export const announcement = {
  text: "Live Masterclass: Fix the process blocks slowing your business. Every Tue & Thu · 4–4:30 PM",
  ctaLabel: "Save My Spot",
  ctaHref:
    "https://docs.google.com/forms/d/e/1FAIpQLScY9QisYn1E8Sj1vxXwvkQv6qZltjCqWzdg_DLiwtpZbak3ww/viewform",
  /** sessionStorage key; a dismissal lasts for the tab session, as on live. */
  storageKey: "headerBannerClosed",
};
