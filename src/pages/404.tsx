import Head from "next/head";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";

/**
 * Not-found page.
 *
 * Deliberately standalone — no header or footer — so a bad URL lands on
 * something calm rather than the full chrome. Everything it does draw comes
 * from the shared lockup, buttons and palette tokens, so it tracks the theme
 * instead of restating hex values that only held for the old dark site.
 */
export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Effortless</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to the Effortless homepage to explore our growth platform for Indian SMBs."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 text-center">
        {/*
          The shared lockup, not `/logo-eff.svg`: that asset is the legacy
          dark-theme export whose wordmark is white, so on this white page only
          the orange mark was visible and "effortless" disappeared.
        */}
        <Logo className="mb-8" />

        <h1 className="mb-4 bg-gradient-to-r from-accent to-content bg-clip-text text-[48px] font-semibold text-transparent md:text-[72px]">
          404
        </h1>
        <p className="mb-2 text-heading-sm text-content md:text-heading-md">
          Page not found
        </p>
        <p className="mb-8 max-w-md text-body text-content-muted md:text-body-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/" className="font-semibold">
            Go to Homepage
          </Button>
          <Button href="/blogs" variant="secondary" className="font-semibold">
            Read Our Blog
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-label text-content-muted">
          <Link href="/sales" className="transition-colors hover:text-accent">
            Sales
          </Link>
          <Link href="/expenses" className="transition-colors hover:text-accent">
            Expenses
          </Link>
          <Link
            href="/contracts"
            className="transition-colors hover:text-accent"
          >
            Contracts
          </Link>
          {/* <Link href="/pricing" className="transition-colors hover:text-accent">
            Pricing
          </Link> */}
          <Link
            href="/contact-us"
            className="transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
