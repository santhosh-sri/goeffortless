import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./NewHeader";
import { Content } from "@/interface/type";

const NewPrivacyPolicy: React.FC<
  Pick<Content, "headerItems" | "footerData">
> = ({ headerItems, footerData }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [closeBanner, setCloseBanner] = useState(true);

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

  return (
    <div>
      <div className={`fixed top-0 w-full z-[999]`}>
        <Header
          {...headerItems}
          isMobile={isMobile}
          closeBanner={closeBanner}
          setCloseBanner={setCloseBanner}
        />
      </div>
      <div className="bg-[#08090A] text-[#EAEBEB]">
        <div className="container mx-auto px-4 text-center pt-32 pb-16 md:pt-40 md:pb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#e4e4e7] mb-2">
            Effortless &amp; EffortlessGeo
          </p>
          <p className="text-lg text-[#e4e4e7] mb-2">
            Agrya FinLabs Private Limited
          </p>
          <p className="text-sm text-[#e4e4e7]">
            Last Updated: 24 February 2026
          </p>
        </div>
        <div className="container mx-auto px-4 pb-24 max-w-4xl font-light">
          {/* 1. Introduction */}
          <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            This Privacy Policy explains how Agrya FinLabs Private Limited (
            <span className="font-medium text-white">
              &ldquo;Effortless,&rdquo;
            </span>{" "}
            <span className="font-medium text-white">&ldquo;we,&rdquo;</span>{" "}
            <span className="font-medium text-white">&ldquo;us,&rdquo;</span> or{" "}
            <span className="font-medium text-white">&ldquo;our&rdquo;</span>)
            collects, uses, shares, and protects information when you use our
            website (
            <a
              href="https://www.goeffortless.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A3FF]"
            >
              www.goeffortless.ai
            </a>
            ), our Cloud-based finance and business operations platform (
            <span className="font-medium text-white">
              &ldquo;Effortless&rdquo;
            </span>
            ), our field workforce management application (
            <span className="font-medium text-white">
              &ldquo;EffortlessGeo&rdquo;
            </span>
            ), and any related services, mobile applications, and tools
            (collectively, the{" "}
            <span className="font-medium text-white">
              &ldquo;Services&rdquo;
            </span>
            ).
          </p>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            This policy applies to all users of our Services, including
            Customers, Administrators, End Users, and website visitors.
          </p>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            By accessing or using our Services, you acknowledge that you have
            read and understood this Privacy Policy. If you are an End User
            whose employer has enabled the Services for you, your
            employer&apos;s privacy practices also apply to your data.
          </p>

          {/* 2. Definitions */}
          <h2 className="text-2xl font-medium mt-8 mb-4">2. Definitions</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">Customer(s):</span>{" "}
              Businesses, firms, or organizations that subscribe to and use the
              Services.
            </li>
            <li>
              <span className="font-medium text-white">Administrator(s):</span>{" "}
              Individuals appointed by Customers to manage the use of Services,
              configure settings, and oversee user accounts.
            </li>
            <li>
              <span className="font-medium text-white">End User(s):</span>{" "}
              Employees, staff, or individuals of Customers who use the Services
              as part of their work.
            </li>
            <li>
              <span className="font-medium text-white">
                Personal Information:
              </span>{" "}
              Information that identifies or can be used to identify an
              individual, such as name, email address, phone number, device
              identifiers, and location data.
            </li>
            <li>
              <span className="font-medium text-white">Business Data:</span>{" "}
              Data provided by Customers and Administrators for the purpose of
              using the Services, including financial records, invoices,
              transaction data, and employee information.
            </li>
          </ul>

          {/* 3. Information We Collect */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            3. Information We Collect
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.1 Account Information
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            When you create or update an Effortless account, we collect Personal
            Information such as:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>Name, email address, and phone number</li>
            <li>
              Business name, address, and registration details (e.g., GSTIN,
              PAN)
            </li>
            <li>Billing and payment information</li>
            <li>Role and designation within the organization</li>
            <li>Profile photo (if provided)</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.2 Business and Financial Data
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            When you use the Effortless platform, we process Business Data that
            you or your Administrator provides, including:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              Invoices, bills, purchase orders, sales orders, and credit/debit
              notes
            </li>
            <li>
              Ledger entries, journal vouchers, and other accounting records
            </li>
            <li>
              Customer and vendor master data (names, addresses, GSTINs, bank
              details)
            </li>
            <li>Inventory and stock data</li>
            <li>
              Bank statements and transaction records uploaded for
              reconciliation
            </li>
            <li>
              Tax filings and compliance-related data (GST returns, TDS records)
            </li>
            <li>
              Any documents, files, or attachments uploaded to the platform
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.3 Location Information (EffortlessGeo)
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            When your employer enables EffortlessGeo for your account, we
            collect the following location-related data:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">GPS Coordinates:</span>{" "}
              Real-time latitude and longitude of your device when you punch
              in/out, log a visit, or when location tracking is active.
            </li>
            <li>
              <span className="font-medium text-white">
                Background Location Data:
              </span>{" "}
              When enabled by your Administrator, EffortlessGeo may collect your
              device&apos;s location in the background (i.e., even when the app
              is not actively in use) during the active tracking period
              configured by your employer. Background tracking requires a daily
              check-in and does not operate indefinitely without user action.
            </li>
            <li>
              <span className="font-medium text-white">Geofence Events:</span>{" "}
              Entry and exit events when you enter or leave a predefined
              geographic boundary such as office premises, client sites, or
              warehouses.
            </li>
            <li>
              <span className="font-medium text-white">
                Location Timestamps:
              </span>{" "}
              The date and time associated with each location data point.
            </li>
            <li>
              <span className="font-medium text-white">
                Location Accuracy and Source:
              </span>{" "}
              Metadata about the precision of the location fix and whether it
              was derived from GPS, Wi-Fi, cell towers, or other sources.
            </li>
            <li>
              <span className="font-medium text-white">Visit Photos:</span>{" "}
              Photographs captured through the app during site visits, which may
              contain embedded location metadata (EXIF data).
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.4 Device Information
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We collect information about devices used to access the Services,
            including:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>Device model, manufacturer, and operating system version</li>
            <li>Unique device identifiers</li>
            <li>Browser type and version (for web access)</li>
            <li>
              Battery level at the time of location capture (EffortlessGeo)
            </li>
            <li>Network type and connectivity status (Wi-Fi, mobile data)</li>
            <li>App version and crash/error logs</li>
            <li>Language and timezone settings</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.5 Usage Information
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We automatically collect information about how you interact with the
            Services:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">Log Data:</span> IP
              address, pages/screens visited, features used, actions taken, date
              and time of access, and referring URLs.
            </li>
            <li>
              <span className="font-medium text-white">
                Attendance and Visit Data (EffortlessGeo):
              </span>{" "}
              Punch-in/punch-out timestamps and locations, visit logs
              (client/site visited, check-in/check-out times, location), and
              distance travelled.
            </li>
            <li>
              <span className="font-medium text-white">Feature Usage:</span>{" "}
              Which modules, reports, and tools you access and how frequently.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.6 Google Workspace Data
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            When you connect your Google account to Effortless, we may access
            certain Google user data depending on the permissions you grant,
            such as:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-[#e4e4e7]">
            <li>Email metadata</li>
            <li>Contacts</li>
            <li>Calendar events</li>
          </ul>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            We only access the minimum information necessary to provide our
            Services. This access is compliant with Google&apos;s API Services
            User Data Policy.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.7 Cookies and Similar Technologies
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            Our website and Services use cookies and similar tracking
            technologies to collect information about your browsing activity,
            preferences, and device. This may include cookies from third-party
            analytics and service providers. You can manage cookie preferences
            through your browser settings.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3.8 Information from Third Parties
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We may receive information about you from:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              Your employer or Administrator (e.g., employee details,
              organizational structure)
            </li>
            <li>
              Third-party integrations connected to your account (e.g., Tally
              ERP, banking APIs)
            </li>
            <li>Payment processors</li>
            <li>
              Publicly available business registries (e.g., GST portal for GSTIN
              validation)
            </li>
          </ul>

          {/* 4. How We Collect Information */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            4. How We Collect Information
          </h2>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We collect and receive information in the following ways:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">Directly from You:</span>{" "}
              When you create an account, fill in forms, upload data, configure
              settings, or communicate with us.
            </li>
            <li>
              <span className="font-medium text-white">
                From Your Employer/Administrator:
              </span>{" "}
              When your organization provides employee data to set up and manage
              Services.
            </li>
            <li>
              <span className="font-medium text-white">
                Automatically from Your Device:
              </span>{" "}
              Log data and usage analytics when you access our website or
              Services; device information and identifiers when you install or
              use our mobile apps; cookies and similar technologies when you
              browse our website.
            </li>
            <li>
              <span className="font-medium text-white">
                Foreground Location (EffortlessGeo):
              </span>{" "}
              When you actively use the app to punch in/out, log a visit, or
              interact with map features.
            </li>
            <li>
              <span className="font-medium text-white">
                Background Location (EffortlessGeo):
              </span>{" "}
              When your Administrator enables continuous location tracking, the
              app accesses your device&apos;s location in the background during
              the configured active period. This requires a daily check-in and
              explicit device-level permission from you.
            </li>
            <li>
              <span className="font-medium text-white">
                Geofence Monitoring (EffortlessGeo):
              </span>{" "}
              Your device sends location updates when you cross the boundary of
              a geofenced area configured by your Administrator.
            </li>
            <li>
              <span className="font-medium text-white">IP-Based Location:</span>{" "}
              We may use your IP address to approximate your general location
              for security and fraud detection purposes.
            </li>
            <li>
              <span className="font-medium text-white">
                Third-Party Services and Integrations:
              </span>{" "}
              When you connect external services (Google Workspace, Tally,
              banking APIs) to your Effortless account.
            </li>
            <li>
              <span className="font-medium text-white">Communications:</span>{" "}
              When you contact us for support, participate in surveys, or
              interact with our social media accounts.
            </li>
          </ul>

          {/* 5. How We Use Information */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            5. How We Use Information
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">
            5.1 Effortless Platform
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We use the information collected to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>Provide, maintain, update, and improve the Services</li>
            <li>
              Process accounting transactions, generate invoices, file GST
              returns, and manage financial records
            </li>
            <li>Sync data with connected integrations (e.g., Tally ERP)</li>
            <li>Facilitate bank reconciliation and payment processing</li>
            <li>Generate reports and business analytics for Customers</li>
            <li>
              Send service-related communications, alerts, and notifications
            </li>
            <li>Provide technical support and respond to your queries</li>
            <li>
              Monitor usage patterns to improve product features and user
              experience
            </li>
            <li>
              Ensure security, prevent fraud, and detect unauthorized access
            </li>
            <li>
              Comply with legal and regulatory obligations (e.g., GST, TDS,
              Income Tax)
            </li>
            <li>Administer billing, subscriptions, and account management</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">5.2 EffortlessGeo</h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We use location and related data to:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">
                Attendance Verification:
              </span>{" "}
              Verify that attendance punches are made from authorized or
              expected locations.
            </li>
            <li>
              <span className="font-medium text-white">Visit Tracking:</span>{" "}
              Confirm that field staff have visited assigned client sites and
              log visit durations and photo evidence.
            </li>
            <li>
              <span className="font-medium text-white">Live Tracking:</span>{" "}
              Enable Administrators to view real-time location of field staff
              during active tracking periods for coordination and safety
              purposes.
            </li>
            <li>
              <span className="font-medium text-white">
                Route and Distance Tracking:
              </span>{" "}
              Calculate distance travelled and display movement history for
              reimbursement, reporting, and operational planning.
            </li>
            <li>
              <span className="font-medium text-white">Geofence Alerts:</span>{" "}
              Notify Administrators when employees enter or leave designated
              areas.
            </li>
            <li>
              <span className="font-medium text-white">
                Reports and Analytics:
              </span>{" "}
              Generate location-based workforce management reports, including
              movement summaries, visit reports, and attendance analytics.
            </li>
            <li>
              <span className="font-medium text-white">
                Safety and Compliance:
              </span>{" "}
              Support employee safety monitoring and regulatory compliance
              requirements of the employer.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            5.3 Google Workspace Data
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            We use Google Workspace data solely to deliver the Services for
            which you have granted explicit consent, such as automating
            compliance tasks, managing scheduling, and organizing financial
            documents. We do not use Google Workspace data for advertising,
            marketing, or to develop AI/ML models.
          </p>

          {/* 6. Consent and Control */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            6. Consent and Control
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">
            6.1 Employer as Data Controller
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            For End Users, your employer (the Customer) determines which
            Services and features are enabled for your account and what data is
            collected. Effortless acts as a data processor on behalf of your
            employer. Questions about your employer&apos;s data practices should
            be directed to your organization&apos;s Administrator.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            6.2 Device-Level Permissions (EffortlessGeo)
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              Location access requires explicit permission from you via your
              device&apos;s operating system (Android or iOS).
            </li>
            <li>
              You may modify or revoke location permissions at any time through
              your device settings.
            </li>
            <li>
              Background location access requires separate, explicit consent and
              can be revoked independently from foreground access.
            </li>
            <li>
              Camera access (for visit photos) requires separate device-level
              permission.
            </li>
            <li>
              Revoking permissions may limit certain features from functioning
              correctly.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            6.3 Background Location Tracking (EffortlessGeo)
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              Background location tracking operates only during the active
              tracking period configured by your Administrator.
            </li>
            <li>
              A daily check-in is required for background tracking to remain
              active. Tracking does not operate indefinitely without user
              action.
            </li>
            <li>
              You will be clearly informed about background location collection
              through the app and your device&apos;s permission prompts before
              it begins.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">6.4 Transparency</h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              End Users can view their own location history, punch locations,
              visit logs, and movement data within the EffortlessGeo app.
            </li>
            <li>
              Customers and Administrators can access, export, and manage
              Business Data through the Effortless platform.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            6.5 Communication Preferences
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            Service-related communications (security alerts, billing notices,
            critical updates) are part of the Services and cannot be opted out
            of. Marketing and promotional communications can be opted out of at
            any time using the unsubscribe link in such emails or by contacting
            us.
          </p>

          {/* 7. Data Sharing and Disclosure */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            7. Data Sharing and Disclosure
          </h2>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            We do not sell, rent, or trade your Personal Information or location
            data to any third party for advertising or marketing purposes. We
            may share information in the following circumstances:
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            7.1 With Your Employer/Administrator
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            If you are an End User, your data (including location data from
            EffortlessGeo) is accessible to authorized Administrators within
            your organization for workforce and business management purposes.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            7.2 Service Providers
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We engage trusted third-party service providers to support our
            business operations. These include:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-[#e4e4e7]">
            <li>Cloud hosting and infrastructure providers</li>
            <li>
              Map and geolocation service providers (e.g., Google Maps APIs)
            </li>
            <li>Payment processors</li>
            <li>Email delivery and communication services</li>
            <li>Analytics and monitoring tools</li>
            <li>Customer support tools</li>
          </ul>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            These providers are contractually bound to use your data only for
            the purposes of providing services to us and to comply with
            applicable data protection requirements.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            7.3 Third-Party Integrations
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            When you or your Administrator connects third-party services (e.g.,
            Tally ERP, banking APIs, Google Workspace), data may be shared with
            those services as necessary for the integration to function. Please
            review the privacy policies of those third-party services.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            7.4 Legal Compliance
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            We may disclose information if required by law, regulation, legal
            process, or governmental request, or to protect the rights,
            property, or safety of Effortless, our users, or others.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            7.5 Business Transfers
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            In the event of a merger, acquisition, reorganization, or sale of
            assets, user data may be transferred to the acquiring entity under
            strict confidentiality agreements. Users will be notified of any
            such transfer.
          </p>

          {/* 8. Data Security */}
          <h2 className="text-2xl font-medium mt-8 mb-4">8. Data Security</h2>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            We implement industry-standard security measures to protect your
            data, including:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">Encryption:</span> All
              data in transit is encrypted using TLS. Data at rest is encrypted
              using AES-256 or equivalent standards.
            </li>
            <li>
              <span className="font-medium text-white">Access Controls:</span>{" "}
              Access to user data is restricted to authorized personnel only,
              with multi-factor authentication and role-based access controls.
            </li>
            <li>
              <span className="font-medium text-white">
                Infrastructure Security:
              </span>{" "}
              Our Services are hosted on secure, certified cloud infrastructure
              with regular security assessments.
            </li>
            <li>
              <span className="font-medium text-white">
                Monitoring and Auditing:
              </span>{" "}
              We continuously monitor our systems for vulnerabilities and
              conduct periodic security audits.
            </li>
            <li>
              <span className="font-medium text-white">Incident Response:</span>{" "}
              We maintain a security incident response process. In the event of
              a data breach, affected users and Customers will be notified as
              required by applicable law.
            </li>
          </ul>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            While we take commercially reasonable measures to protect your data,
            no method of electronic transmission or storage is completely
            secure. We cannot guarantee absolute security.
          </p>

          {/* 9. Data Retention and Deletion */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            9. Data Retention and Deletion
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">9.1 Retention</h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">
                Business Data and Account Data:
              </span>{" "}
              Retained for as long as the Customer&apos;s account is active and
              as required by the Customer&apos;s subscription and applicable
              laws (e.g., tax and financial record-keeping requirements under
              Indian law).
            </li>
            <li>
              <span className="font-medium text-white">
                Location Data (EffortlessGeo):
              </span>{" "}
              Retained for as long as the Customer&apos;s account is active and
              in accordance with the Customer&apos;s data retention policies.
            </li>
            <li>
              <span className="font-medium text-white">
                Usage Logs and Analytics:
              </span>{" "}
              Retained for a reasonable period to support product improvement,
              security monitoring, and troubleshooting.
            </li>
            <li>
              <span className="font-medium text-white">
                Google Workspace Data:
              </span>{" "}
              Retained only for as long as necessary to provide the Services you
              have consented to.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">9.2 Deletion</h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              Users may request deletion of their data by contacting their
              Administrator or by writing to us at{" "}
              <a
                href="mailto:security@goeffortless.ai"
                className="text-[#00A3FF]"
              >
                security@goeffortless.ai
              </a>
              .
            </li>
            <li>
              Upon termination of a Customer&apos;s account or upon a valid
              deletion request, associated data will be securely deleted within
              90 days, unless retention is required by applicable law or
              regulation.
            </li>
            <li>
              Aggregated, anonymized data that cannot be used to identify
              individual users may be retained for product analytics and
              improvement.
            </li>
          </ul>

          {/* 10. Google Workspace API Data */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            10. Google Workspace API Data
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">10.1 Limited Use</h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            Effortless does not retain, store, or use any data obtained through
            Google Workspace APIs, including Gmail, for developing, improving,
            or training generalized Artificial Intelligence (AI) and/or Machine
            Learning (ML) models. Our use of this data is strictly limited to
            providing the requested Services directly to the user.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            10.2 Scope of Access
          </h3>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            Effortless may access certain Google user data when you connect your
            Google account, such as email metadata, contacts, and calendar
            events, depending on the permissions you grant. We only access the
            minimum required information necessary to provide our Services. This
            access is compliant with Google&apos;s API Services User Data
            Policy.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            10.3 No Third-Party Sharing for Non-Service Purposes
          </h3>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            Google user data is not shared with third parties except:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">Service Providers</span>{" "}
              who perform specific functions for us and are bound by data
              protection agreements.
            </li>
            <li>
              <span className="font-medium text-white">Legal Compliance</span>{" "}
              requirements as described in Section 7.4.
            </li>
            <li>
              <span className="font-medium text-white">Business Transfers</span>{" "}
              as described in Section 7.5.
            </li>
          </ul>

          {/* 11. EffortlessGeo — Google Play Prominent Disclosure */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            11. EffortlessGeo — Google Play Prominent Disclosure
          </h2>
          <p className="mb-6 leading-relaxed text-[#e4e4e7] italic border-l border-[#818181] pl-4 ml-4">
            Note for dev team: This section’s content must also be displayed as
            an in-app disclosure screen before requesting background location
            permission, as required by Google Play policy.
          </p>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            EffortlessGeo collects your device&apos;s location data{" "}
            <span className="font-medium text-white">in the background</span> to
            enable your employer to track attendance, verify field visits, and
            monitor workforce movement during active tracking periods. This data
            collection occurs even when the app is closed or not in use, but
            requires a daily check-in to remain active.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">What is collected:</span>{" "}
              GPS coordinates, timestamps, movement data, and visit photographs.
            </li>
            <li>
              <span className="font-medium text-white">Why:</span> To provide
              attendance tracking, visit verification, live tracking, and route
              history services to your employer.
            </li>
            <li>
              <span className="font-medium text-white">Who has access:</span>{" "}
              Your employer&apos;s authorized Administrators and Effortless (as
              the service provider).
            </li>
          </ul>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            You can disable background location access at any time through your
            device&apos;s{" "}
            <span className="font-medium text-white">
              Settings &gt; Apps &gt; EffortlessGeo &gt; Permissions &gt;
              Location.
            </span>{" "}
            Disabling background location may prevent features like live
            tracking and automated attendance from working correctly.
          </p>

          {/* 12. Children's Privacy */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            12. Children&apos;s Privacy
          </h2>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            Our Services are designed for use by businesses and their employees.
            We do not knowingly collect Personal Information from anyone under
            the age of 18. If we become aware that data has been collected from
            a minor, we will take steps to delete it promptly. If you believe a
            minor has provided us with Personal Information, please contact us
            at{" "}
            <a
              href="mailto:security@goeffortless.ai"
              className="text-[#00A3FF]"
            >
              security@goeffortless.ai
            </a>
            .
          </p>

          {/* 13. Third-Party Links and Services */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            13. Third-Party Links and Services
          </h2>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            Our website and Services may contain links to third-party websites
            or integrations with third-party services. We are not responsible
            for the privacy practices or content of these third parties. We
            encourage you to review the privacy policies of any third-party
            services you access.
          </p>

          {/* 14. Changes to This Privacy Policy */}
          <h2 className="text-2xl font-medium mt-8 mb-4">
            14. Changes to This Privacy Policy
          </h2>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or for
            other operational reasons. When we make material changes, we will
            notify you through the Services, via email, or by updating the
            &ldquo;Last Updated&rdquo; date at the top of this page. Continued
            use of the Services after such changes constitutes acceptance of the
            revised policy.
          </p>

          {/* 15. Your Rights */}
          <h2 className="text-2xl font-medium mt-8 mb-4">15. Your Rights</h2>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            Subject to applicable law, you have the right to:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-[#e4e4e7]">
            <li>
              <span className="font-medium text-white">Access</span> the
              Personal Information we hold about you.
            </li>
            <li>
              <span className="font-medium text-white">Correct</span> inaccurate
              or incomplete Personal Information.
            </li>
            <li>
              <span className="font-medium text-white">Delete</span> your
              Personal Information, subject to legal retention requirements.
            </li>
            <li>
              <span className="font-medium text-white">Withdraw Consent</span>{" "}
              for data processing where consent is the basis for processing.
            </li>
            <li>
              <span className="font-medium text-white">Data Portability</span> —
              request a copy of your data in a commonly used, machine-readable
              format.
            </li>
            <li>
              <span className="font-medium text-white">Object</span> to certain
              types of data processing.
            </li>
          </ul>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            End Users should contact their organization&apos;s Administrator for
            requests related to Business Data. For all other requests, contact
            us at{" "}
            <a
              href="mailto:security@goeffortless.ai"
              className="text-[#00A3FF]"
            >
              security@goeffortless.ai
            </a>
            .
          </p>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            We will respond to valid requests within a reasonable timeframe and
            in accordance with applicable law.
          </p>

          {/* 16. Governing Law */}
          <h2 className="text-2xl font-medium mt-8 mb-4">16. Governing Law</h2>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            This Privacy Policy is governed by and construed in accordance with
            the laws of India. Any disputes arising under this policy shall be
            subject to the exclusive jurisdiction of the courts in Chennai,
            Tamil Nadu.
          </p>

          {/* 17. Contact Us */}
          <h2 className="text-2xl font-medium mt-8 mb-4">17. Contact Us</h2>
          <p className="mb-3 leading-relaxed text-[#e4e4e7]">
            For any questions, concerns, or requests related to this Privacy
            Policy or your data, please contact:
          </p>
          <p className="mb-2 leading-relaxed text-[#e4e4e7]">
            <span className="font-medium text-white">
              Agrya FinLabs Private Limited
            </span>
          </p>
          <p className="mb-2 leading-relaxed text-[#e4e4e7]">
            Email:{" "}
            <a
              href="mailto:security@goeffortless.ai"
              className="text-[#00A3FF]"
            >
              security@goeffortless.ai
            </a>
          </p>
          <p className="mb-6 leading-relaxed text-[#e4e4e7]">
            Address: Maan Sarovar Tower, First Floor, 375/271A, Scheme Road,
            Teynampet, Chennai, Tamil Nadu - 600018, India
          </p>
        </div>
      </div>
      <Footer {...footerData} isMobile={isMobile} />
    </div>
  );
};

export default NewPrivacyPolicy;
