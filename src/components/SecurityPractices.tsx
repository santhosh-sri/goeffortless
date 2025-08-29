import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Content } from "@/interface/type";
import RequestDemoForm from "./DemoForm";

const SecurityPractices: React.FC<Pick<Content, "headerItems" | "footerData">> = ({
  headerItems,
  footerData,
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  return (
    <div>
      <div className={`max-md:fixed max-md:top-0 w-full max-md:z-[999]`}>
        <Header
          {...headerItems}
          setShowForm={setShowForm}
          isMobile={isMobile}
        />
      </div>
      <div className="bg-[#08090A] text-[#EAEBEB]">
        <div className="container mx-auto px-4 text-center pt-32 pb-16 md:pt-40 md:pb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Security at Effortless
          </h1>
          <p className="text-lg text-gray-300 mb-2 max-w-3xl mx-auto">
            Protecting and empowering your business to grow and thrive.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Last Updated on: <span className="font-bold">10th May 2024</span>
          </p>
        </div>
        <div className="container mx-auto px-4 pb-24 max-w-4xl">
          <h2 className="text-2xl font-medium mt-8 mb-4">
            Organizational Security
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            At Effortless, we ensure that each customer's data is logically
            segregated from others, maintaining strict data isolation. We employ
            state-of-the-art encryption both at rest and in transit, and our
            data retention and backup procedures are meticulously designed to
            provide the highest level of data protection.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-100">
            Employee Background Checks
          </h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            We conduct comprehensive background checks on all employees,
            performed by reputable external agencies. These checks are crucial
            to verifying no criminal history, confirming past employment, and
            validating educational qualifications. Employees are assigned roles
            only after their backgrounds are thoroughly vetted, ensuring they
            pose no security risks.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-100">
            Security Awareness Training
          </h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            Security training begins at induction, with each employee signing
            confidentiality and acceptable use agreements. Ongoing education on
            information security, privacy, and compliance is provided, tailored
            to the specific needs of their roles. This includes regular testing
            to measure their knowledge and identify areas for improvement.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-100">
            Dedicated Security and Privacy Teams
          </h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            Our specialized teams are tasked with implementing and managing our
            security and privacy programs. They develop our security
            architecture, run regular security assessments, and monitor our
            networks for any signs of suspicious activity, providing
            round-the-clock protection.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-100">
            Internal Audit and Compliance
          </h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless has a dedicated team to ensure our policies and
            procedures meet industry standards. This team performs regular
            internal audits and supports external audits, ensuring we comply
            with regulatory requirements and best practices.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-100">
            Endpoint Security
          </h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            All employee workstations and mobile devices are secured with
            up-to-date operating systems, antivirus software, and are configured
            according to our strict security standards. This includes data
            encryption, the use of strong passwords, and systems to ensure
            automatic locking during periods of inactivity.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Physical Security</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">At the Workplace:</strong> Access
            to our facilities is regulated through the use of programmed access
            cards, which are monitored and managed by our HR team. Detailed logs
            are maintained to quickly identify and rectify any access
            discrepancies.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">At Data Centers:</strong> Physical
            security at our data centers is managed by trusted co-location
            providers, with Effortless handling server and storage management.
            Access is limited to authorized personnel only, with two-factor
            authentication and biometric checks required for entry.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">
              Network and Infrastructure Security:
            </strong>
            Our network is protected by firewalls and segmented to secure
            sensitive data. Regular monitoring and strict control of firewall
            access ensure that only authorized traffic can access our network.
            Our Network Operations Center proactively manages and responds to
            alerts on network security.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Advanced Security Measures
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">DDoS Prevention:</strong> We use
            advanced DDoS mitigation tools to protect our services from
            distributed denial-of-service attacks.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">Server Hardening:</strong> Servers
            are hardened to eliminate any unnecessary services, close unused
            ports, and change default settings to enhance security.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">
              Intrusion Detection and Prevention:
            </strong>{" "}
            We employ systems to detect and prevent unauthorized access,
            monitoring all network traffic and system activities for unusual or
            suspicious patterns.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Single Sign-On (SSO)
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless provides Single Sign-On (SSO) functionality, allowing
            users to access multiple services through the same sign-in page and
            authentication credentials. Our integrated Identity and Access
            Management (IAM) system supports various identity providers,
            including popular options such as Google Sign-In and Apple ID
            sign-in. This integration facilitates a seamless login experience,
            enabling users to authenticate using their existing Google or Apple
            ID credentials when accessing Effortless services.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            Utilizing Google Sign-In and Apple ID sign-in not only streamlines
            the authentication process but also enhances security and
            compliance. These platforms are known for their robust security
            measures, which help reduce the risk of unauthorized access and
            password fatigue. By incorporating these trusted identity providers,
            Effortless ensures effective access control and simplifies the
            management of user identities and permissions.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Data Security Practices
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">Encryption:</strong> We use robust
            encryption protocols for data in transit and at rest, ensuring that
            sensitive information is securely encoded.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">Data Isolation:</strong> Our
            architecture ensures that no client can access another's data, with
            strict controls and auditing to enforce this segregation.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong className="text-gray-100">Secure Data Handling:</strong> All
            changes to systems go through a rigorous change management process,
            and any new features are thoroughly tested against security
            vulnerabilities.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Incident Response and Breach Notification
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            We have a formal incident response protocol to handle security
            breaches effectively. This includes immediate investigation,
            mitigation measures, and compliance with legal obligations to notify
            affected parties and regulatory bodies.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Conclusion</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            At Effortless, we are committed to maintaining the highest standards
            of security. We continuously strive to enhance our security measures
            and protocols. For any questions or additional information, please
            contact our security team at{" "}
            <a
              href="mailto:security@goeffortless.ai"
              className="text-[#00A3FF]"
            >
              security@goeffortless.ai
            </a>
            . Thank you for trusting Effortless with your business needs.
          </p>
        </div>
         {showForm && (
            <RequestDemoForm
              setShowForm={setShowForm}
            />
          )}
      </div>
      <Footer {...footerData} isMobile={isMobile} />
    </div>
  );
};

export default SecurityPractices; 