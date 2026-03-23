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
          content="Protecting and empowering your business to grow and thrive."
        />
        <link
          rel="canonical"
          href="https://www.goeffortless.ai/security-practices"
        />
        <meta property="og:title" content="Security Practices | Effortless" />
        <meta
          property="og:description"
          content="Protecting and empowering your business to grow and thrive."
        />
        <meta
          property="og:url"
          content="https://www.goeffortless.ai/security-practices"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Effortless" />
      </Head>
      <SecurityPractices {...securityData} />
    </>
  );
};

export default SecurityPracticesPage;
