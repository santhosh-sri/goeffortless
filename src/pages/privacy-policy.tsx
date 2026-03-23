import NewPrivacyPolicy from "@/components/NewPrivacyPolicy";
import privacyData from "@/data/privacy-policy.json";
import Head from "next/head";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Effortless — All-In-One Growth Platform</title>
        <meta name="description" content="Effortless & EffortlessGeo" />
        <link
          rel="canonical"
          href="https://www.goeffortless.ai/privacy-policy"
        />
        <meta property="og:title" content="Privacy Policy | Effortless" />
        <meta property="og:description" content="Effortless & EffortlessGeo" />
        <meta
          property="og:url"
          content="https://www.goeffortless.ai/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Effortless" />
      </Head>
      <NewPrivacyPolicy {...privacyData} />
    </>
  );
};

export default PrivacyPolicyPage;
