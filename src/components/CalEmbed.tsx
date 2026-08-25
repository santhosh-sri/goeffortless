import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

/**
 * Boots the Cal.com embed once for the whole app. Every demo CTA carries the
 * `data-cal-*` attributes from `CalcomConfig`; the embed script turns those
 * into the booking modal — without this bootstrap they are inert buttons.
 *
 * This used to live in the legacy Header and was lost in the chrome swap.
 * The site is white now, so the embed is themed light with the brand orange.
 */
export function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "demo" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#F08B32" },
          dark: { "cal-brand": "#F08B32" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}

export default CalEmbed;
