import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lexend } from 'next/font/google';
import { useEffect } from "react";
import TagManager from "react-gtm-module";
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // customize as needed
  variable: '--font-lexend',
  display: 'swap',
})
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
      if (process.env.GTM_ID) {
        TagManager.initialize({ gtmId: process.env.GTM_ID });
      }
    }, []);
  return (<div className={lexend.variable}><Component {...pageProps} />
    </div>);
}
