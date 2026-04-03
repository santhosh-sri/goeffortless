import TermsOfService from "@/components/TermsOfService";
import termsData from "@/data/terms-of-service.json";
import Head from "next/head";

const TermsOfServicePage = () => {
  return (
    <>
      <Head>
        <title>
          Terms of Service | Effortless — All-In-One Growth Platform
        </title>
        <meta
          name="description"
          content="This Terms of Service governs your use of the website located, any related services"
        />
        <link
          rel="canonical"
          href="https://www.goeffortless.ai/terms-of-service"
        />
        <meta property="og:title" content="Terms of Service | Effortless" />
        <meta
          property="og:description"
          content="This Terms of Service governs your use of the website located, any related services"
        />
        <meta
          property="og:url"
          content="https://www.goeffortless.ai/terms-of-service"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Effortless" />
        <meta property="og:image" content="https://iili.io/F7C7h12.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <TermsOfService {...termsData} />
    </>
  );
};

export default TermsOfServicePage;
