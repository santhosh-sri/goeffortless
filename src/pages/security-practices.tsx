import SecurityPractices from "@/components/SecurityPractices";
import securityData from "@/data/security-practices.json";
import Head from "next/head";

const SecurityPracticesPage = () => {
  return (
    <>
      <Head>
        <title>
          Security Practices | Effortless — ISO 27001 Certified Platform
        </title>
        <meta
          name="description"
          content="Effortless security practices — ISO 27001 certified. Data encryption, access controls, and compliance measures protecting your business data."
        />
        <link
          rel="canonical"
          href="https://www.goeffortless.ai/security-practices"
        />
        <meta property="og:title" content="Security Practices | Effortless" />
        <meta
          property="og:description"
          content="Effortless security practices — ISO 27001 certified. Data encryption, access controls, and compliance measures protecting your business data."
        />
        <meta
          property="og:url"
          content="https://www.goeffortless.ai/security-practices"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Effortless" />
        <meta property="og:image" content="https://iili.io/F7C7h12.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <SecurityPractices {...securityData} />
    </>
  );
};

export default SecurityPracticesPage;
