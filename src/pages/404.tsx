import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
      <div className="min-h-screen bg-[#08090A] flex flex-col items-center justify-center px-4 text-center">
        <Link href="/">
          <Image
            src="/logo-eff.svg"
            alt="Effortless logo"
            width={160}
            height={40}
            className="mb-8"
          />
        </Link>
        <h1 className="text-[48px] md:text-[72px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F08B32] to-[#FFFFFF] mb-4">
          404
        </h1>
        <p className="text-[#FFFFFF] text-[20px] md:text-[24px] mb-2">
          Page not found
        </p>
        <p className="text-[#9CA3AF] text-[16px] md:text-[18px] mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link
            href="/"
            className="px-6 py-3 bg-[#F08B32] text-white rounded-lg font-medium hover:bg-[#F08B32] transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/blogs"
            className="px-6 py-3 border border-[#333] text-white rounded-lg font-medium hover:border-[#F08B32] transition-colors"
          >
            Read Our Blog
          </Link>
        </div>
        <div className="mt-12 flex gap-6 text-[#9CA3AF] text-[14px]">
          <Link
            href="/sales"
            className="hover:text-[#F08B32] transition-colors"
          >
            Sales
          </Link>
          <Link
            href="/expenses"
            className="hover:text-[#F08B32] transition-colors"
          >
            Expenses
          </Link>
          <Link
            href="/contracts"
            className="hover:text-[#F08B32] transition-colors"
          >
            Contracts
          </Link>
          <Link
            href="/pricing"
            className="hover:text-[#F08B32] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-[#F08B32] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
