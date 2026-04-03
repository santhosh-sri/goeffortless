import NewPrivacyPolicy from "@/components/NewPrivacyPolicy";
import privacyData from "@/data/privacy-policy.json";
import Head from "next/head";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Effortless — All-In-One Growth Platform</title>
        <meta name="description" content="Read the Effortless privacy policy. Learn how Agrya FinLabs Pvt. Ltd. collects, uses, and protects your data across all Effortless products." />
        <link
          rel="canonical"
          href="https://www.goeffortless.ai/privacy-policy"
        />
        <meta property="og:title" content="Privacy Policy | Effortless" />
        <meta property="og:description" content="Read the Effortless privacy policy. Learn how Agrya FinLabs Pvt. Ltd. collects, uses, and protects your data across all Effortless products." />
        <meta
          property="og:url"
          content="https://www.goeffortless.ai/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Effortless" />
        <meta property="og:image" content="https://iili.io/F7C7h12.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <NewPrivacyPolicy {...privacyData} />
    </>
  );
};

export default PrivacyPolicyPage;
