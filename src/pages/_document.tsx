import { Head, Html, Main, NextScript } from "next/document";
import { THEME_INIT_SCRIPT } from "@/context/ThemeProvider";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Sets data-theme on <html> before first paint — prevents theme flash. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://iili.io" />
        <link
          rel="dns-prefetch"
          href="https://us-central1-effortless-admin.cloudfunctions.net"
        />

        {/* Theme color — one per scheme so the browser chrome tracks the theme */}
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#FFFFFF"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#08090A"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="google-site-verification"
          content="aLnye-Afxcq2MwWVXVDdaoNH2eqUArP2OLOT1LgL_ek"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
