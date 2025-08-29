import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Content } from "@/interface/type";
import RequestDemoForm from "./DemoForm";

const PrivacyPolicy: React.FC<Pick<Content, "headerItems" | "footerData">> = ({
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            This Privacy Policy governs your use of the website located, any
            related services provided by Agrya FinLabs Private Limited.
          </p>
        </div>
        <div className="container mx-auto px-4 pb-24 max-w-4xl">
          <h2 className="text-2xl font-medium mt-8 mb-4">Overview</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            By accessing{" "}
            <a
              href="https://www.goeffortless.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A3FF]"
            >
              www.goeffortless.ai
            </a>
            , you agree to abide by these Terms of Service and to comply with
            all applicable laws and regulations. If you do not agree with these
            Terms of Service, you are prohibited from using or accessing this
            website or using any other services provided by Agrya Consulting
            Private Limited.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            We, Agrya Consulting Private Limited, reserve the right to review
            and amend any of these Terms of Service at our sole discretion. Upon
            doing so, we will update this page. Any changes to these Terms of
            Service will take effect immediately from the date of publication.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            These Terms of Service were last updated on 21 June 2021.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Limitations of Use</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            By using this website, you warrant on behalf of yourself, your
            users, and other parties you represent that you will not: modify,
            copy, prepare derivative works of, decompile, or reverse engineer
            any materials and software contained on this website; remove any
            copyright or other proprietary notations from any materials and
            software on this website; transfer the materials to another person
            or "mirror" the materials on any other server; knowingly or
            negligently use this website or any of its associated services in a
            way that abuses or disrupts our networks or any other service Agrya
            Consulting Private Limited provides; use this website or its
            associated services to transmit or publish any harassing, indecent,
            obscene, fraudulent, or unlawful material; use this website or its
            associated services in violation of any applicable laws or
            regulations; use this website in conjunction with sending
            unauthorised advertising or spam; harvest, collect or gather user
            data without the user's consent; or use this website or its
            associated services in such a way that may infringe the privacy,
            intellectual property rights, or other rights of third parties.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            The intellectual property in the materials contained in this website
            are owned by or licensed to Agrya Consulting Private Limited and are
            protected by applicable copyright and trademark law.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            We grant our users permission to download one copy of the materials
            for personal, non-commercial transitory use.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            This constitutes the grant of a license, not a transfer of title.
            This license shall automatically terminate if you violate any of
            these restrictions or the Terms of Service, and may be terminated by
            Agrya Consulting Private Limited at any time.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Liability</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Our website and the materials on our website are provided on an 'as
            is' basis. To the extent permitted by law, Agrya Consulting Private
            Limited makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property, or other violation of rights.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            In no event shall Agrya Consulting Private Limited or its suppliers
            be liable for any consequential loss suffered or incurred by you or
            any third party arising from the use or inability to use this
            website or the materials on this website, even if Agrya Consulting
            Private Limited or an authorised representative has been notified,
            orally or in writing, of the possibility of such damage.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            In the context of this agreement, "consequential loss" includes any
            consequential loss, indirect loss, real or anticipated loss of
            profit, loss of benefit, loss of revenue, loss of business, loss of
            goodwill, loss of opportunity, loss of savings, loss of reputation,
            loss of use and/or loss or corruption of data, whether under
            statute, contract, equity, tort (including negligence), indemnity or
            otherwise.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            Because some jurisdictions do not allow limitations on implied
            warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Accuracy of Materials
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            The materials appearing on our website are not comprehensive and are
            for general information purposes only. Agrya Consulting Private
            Limited does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials
            on this website, or otherwise relating to such materials or on any
            resources linked to this website.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Links</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Agrya Consulting Private Limited has not reviewed all of the sites
            linked to its website and is not responsible for the contents of any
            such linked site. The inclusion of any link does not imply
            endorsement, approval or control by Agrya Consulting Private Limited
            of the site. Use of any such linked site is at your own risk and we
            strongly advise you make your own investigations with respect to the
            suitability of those sites.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Right to Terminate</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            We may suspend or terminate your right to use our website/product
            and terminate these Terms of Service immediately upon written notice
            to you for any breach of these Terms of Service.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Fees and Payments</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Agrya's services are available under different subscription plans.
            Payments for the specific subscription plans can be made through
            various online payment modes such as UPI, credit card, account
            transfer etc., All the fees paid are non-refundable. Agrya will
            raise an invoice based on the usage of it's services on a monthly
            basis and the customer has to clear the payment within 7 days from
            the date of the invoice to avoid any termination of services. The
            customer can give notice of 30 days to cancel their Service
            Agreement.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Severance</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Any term of these Terms of Service which is wholly or partially void
            or unenforceable is severed to the extent that it is void or
            unenforceable. The validity of the remainder of these Terms of
            Service is not affected.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">Governing Law</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            These Terms of Service are governed by and construed in accordance
            with the laws of India. You irrevocably submit to the exclusive
            jurisdiction of the courts in that State or location.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Data Usage and Retention Policy
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless does not retain, store, or use any data obtained through
            Google Workspace APIs, including GMail, for developing, improving,
            or training generalized Artificial Intelligence (AI) and/or Machine
            Learning (ML) models. Our use of this data is strictly limited to
            providing the requested services directly to the user. We are
            committed to maintaining the privacy and confidentiality of user
            data in accordance with our privacy policy and Google Workspace API
            data usage policies.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Access to Google User Data
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless may access certain Google user data when you connect your
            Google account to our application, such as email metadata, contacts,
            and calendar events, depending on the permissions you grant. We only
            access the minimum required information necessary to provide our
            services effectively. This access is fully compliant with Google's
            API Service policies and restricted to authorized and consented data
            usage.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Use of Google User Data
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless uses the accessed Google user data solely to deliver the
            services for which the user has granted explicit consent. For
            instance, we utilize email metadata and calendar events to automate
            compliance tasks, manage scheduling, and organize financial
            documents. We do not use this data for any other purpose, including
            advertising or marketing, and we do not use it to develop AI/ML
            models. The data remains within Effortless' platform to enhance and
            personalize user experiences based on the features users have opted
            into.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Data Sharing, Transfer, or Disclosure
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless does not share, transfer, or disclose your Google user
            data to third parties except under the following circumstances:‍
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share data with trusted
              service providers who perform specific functions for us (e.g.,
              cloud storage, email delivery services) and have agreed to comply
              with our data protection requirements.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose your data if
              required by law or in response to legal processes to protect the
              rights, property, or safety of Effortless, our users, or others.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, user data may be transferred to
              the acquiring entity under strict confidentiality agreements.
            </li>
          </ul>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless ensures that any third-party partners or vendors we work
            with adhere to the same level of privacy and security standards we
            maintain.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Data Protection Mechanisms for Sensitive Data
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless implements industry-standard security measures to protect
            all user data, including data accessed from Google services. These
            measures include:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Encryption:</strong> All data, both in transit and at rest,
              is encrypted using advanced encryption protocols to prevent
              unauthorized access.
            </li>
            <li>
              <strong>Access Controls:</strong> Access to user data is
              restricted to authorized personnel only, and we use multi-factor
              authentication and role-based access controls to safeguard
              sensitive information.
            </li>
            <li>
              <strong>Monitoring & Auditing:</strong> We continuously monitor our
              systems for potential vulnerabilities and conduct regular security
              audits to ensure the integrity and safety of all user data.
            </li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4">
            Retention and Deletion of Google User Data
          </h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Effortless retains Google user data only for as long as necessary to
            provide the services you have signed up for and to fulfill the
            purposes outlined in our privacy policy. We maintain retention
            schedules in compliance with legal and regulatory requirements.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong>Data Deletion:</strong> Users have the right to request the
            deletion of their data at any time. Upon such requests or upon the
            termination of your account, Effortless will securely delete all
            stored Google user data associated with your account within [a
            specified time frame, e.g., 30 days], unless required otherwise by
            legal obligations.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            <strong>Data Retention Limits:</strong> If the data is no longer
            needed for the provision of services or if you revoke your consent,
            Effortless will automatically delete the data in a secure manner.
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

export default PrivacyPolicy;
