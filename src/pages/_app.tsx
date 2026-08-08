// react-slick's stylesheet must load app-wide. It used to be imported inside
// Testimonials.tsx, so any page rendering a carousel WITHOUT that component
// (e.g. the redesigned home page) got an unstyled .slick-list and overflowed
// horizontally. Imported before globals.css so our overrides still win.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/tokens.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/context/ThemeProvider";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // customize as needed
  variable: "--font-lexend",
  display: "swap",
});
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.GTM_ID) {
      TagManager.initialize({ gtmId: process.env.GTM_ID });
    }
  }, []);
  return (
    <ThemeProvider>
      <PageTransition>
        <div className={lexend.variable}>
          <Component {...pageProps} />
        </div>
      </PageTransition>
    </ThemeProvider>
  );
}
