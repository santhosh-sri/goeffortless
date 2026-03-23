import RequestDemoForm from "@/components/DemoForm";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

const Index = () => {
  const [showSucessPopup, setShowSucessPopup] = useState<boolean>(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Request a Demo - Effortless",
    description:
      "Schedule a free personalized demo of Effortless — the all-in-one growth platform for Indian SMBs. See how to automate billing, expenses, and sales operations.",
    url: "https://www.goeffortless.ai/contact-us",
    publisher: {
      "@type": "Organization",
      name: "Effortless",
      url: "https://www.goeffortless.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://www.goeffortless.ai/logo.svg",
      },
    },
  };

  return (
    <>
      <Head>
        <title>
          Request a Free Demo | Effortless — All-In-One Growth Platform
        </title>
        <meta
          name="description"
          content="Schedule a free personalized demo of Effortless — the all-in-one growth platform for Indian SMBs. See how to automate billing, expenses, and sales operations."
        />
        <meta
          property="og:title"
          content="Request a Free Demo | Effortless — All-In-One Growth Platform"
        />
        <meta
          property="og:description"
          content="Schedule a free personalized demo of Effortless — the all-in-one growth platform for Indian SMBs. Automate billing, expenses, and sales operations."
        />
        <meta
          property="og:url"
          content="https://www.goeffortless.ai/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://iili.io/F7C7h12.png" />
        <meta property="og:site_name" content="Effortless" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Request a Free Demo | Effortless" />
        <meta
          name="twitter:description"
          content="Schedule a free personalized demo of Effortless — the all-in-one growth platform for Indian SMBs."
        />
        <meta name="twitter:image" content="https://iili.io/F7C7h12.png" />
        <link rel="canonical" href="https://www.goeffortless.ai/contact-us" />
        <meta name="robots" content="noindex, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="bg-black md:w-screen flex flex-col min-h-screen gap-10 items-center justify-center overflow-hidden max-md:p-4">
        <Image
          src={"/logo-eff.svg"}
          alt="Effortless - All-In-One Growth Platform for Indian SMBs"
          width={150}
          height={50}
          className="w-[188px] h-[48px]"
        />
        <RequestDemoForm setShowForm={setShowSucessPopup} />
      </div>
    </>
  );
};

export default Index;
