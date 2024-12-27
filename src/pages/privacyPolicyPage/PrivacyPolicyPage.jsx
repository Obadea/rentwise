import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/BreadCrumb";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Header />
      <div className="container max-w-7xl mx-auto p-6 bg-white mt-14">
        <Breadcrumb />
        <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-10">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: January 1, 2025
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At RentWise, your privacy is of paramount importance to us. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information when you use our platform and services. By accessing or
          using RentWise, you agree to the terms of this Privacy Policy.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We collect personal and non-personal information to provide and
            improve our services. The types of information we may collect
            include:
          </p>
          <div className="ml-6">
            <p className="font-semibold">a. Personal Information:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Contact Information: Name, email address, phone number, and
                postal address.
              </li>
              <li>
                Account Details: Username, password, and other account-related
                information.
              </li>
              <li>
                Financial Information: Payment details, bank account
                information, and transaction history.
              </li>
              <li>
                Property Details: Information about properties you own or
                manage.
              </li>
            </ul>
            <p className="font-semibold">b. Non-Personal Information:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Browser type, IP address, device information, and operating
                system.
              </li>
              <li>
                Usage data, such as pages viewed, time spent on our platform,
                and interaction metrics.
              </li>
            </ul>
            <p className="font-semibold">c. Information from Third Parties:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Publicly available data, tenant reviews, and credit checks (with
                your consent).
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              To Provide Services: Facilitate property listings, tenant
              screening, and rent collection.
            </li>
            <li>
              To Enhance User Experience: Personalize content, improve platform
              functionality, and optimize services.
            </li>
            <li>
              For Communication: Respond to inquiries, send notifications, and
              provide updates about our services.
            </li>
            <li>
              For Analytics and Marketing: Understand user preferences, monitor
              performance, and deliver targeted advertisements.
            </li>
            <li>
              To Ensure Security: Detect and prevent fraudulent activities and
              protect user accounts.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. How We Share Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We value your privacy and only share your information under specific
            circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              With Your Consent: When you explicitly agree to share your data.
            </li>
            <li>
              Service Providers: Trusted third-party vendors that assist in
              delivering our services.
            </li>
            <li>
              Legal Compliance: When required by law or to respond to legal
              processes.
            </li>
            <li>
              Business Transactions: In the event of a merger, acquisition, or
              sale of assets.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            We do not sell or rent your personal information to third parties.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Data Retention
          </h2>
          <p className="text-gray-700">
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy or comply with
            legal obligations. Once your data is no longer needed, we securely
            delete or anonymize it.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Your Rights
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Access and Correction: Review and update your personal
              information.
            </li>
            <li>
              Data Portability: Request a copy of your data in a portable
              format.
            </li>
            <li>Opt-Out: Unsubscribe from marketing communications.</li>
            <li>
              Erasure: Request the deletion of your personal data, subject to
              legal and contractual obligations.
            </li>
            <li>Restrict Processing: Limit how we use your information.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:contactwiseman@rentwise.rentals"
              className="text-blue-600 underline"
            >
              contactwiseman@rentwise.rentals{" "}
            </a>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Security Measures
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Encryption: Secure data transmission through SSL/TLS protocols.
            </li>
            <li>
              Access Controls: Restricted access to sensitive information.
            </li>
            <li>
              Regular Audits: Periodic security reviews and vulnerability
              assessments.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Despite our efforts, no method of data transmission or storage is
            100% secure. Users are encouraged to safeguard their account
            credentials.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Enhance website functionality.</li>
            <li>Analyze platform usage.</li>
            <li>Deliver personalized advertisements.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can manage your cookie preferences through your browser
            settings.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Third-Party Links
          </h2>
          <p className="text-gray-700">
            Our platform may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites. We
            encourage users to review their privacy policies.
          </p>
        </section>

        {/* Section 9 & 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700">
            RentWise reserves the right to update this Privacy Policy at any
            time. Changes will be communicated via email or prominently posted
            on our platform. Your continued use of RentWise after updates
            constitutes your acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have questions or concerns about this Privacy Policy or our
            data practices, contact us at:
          </p>
          <ul className="list-none text-gray-700 mt-4">
            <li>
              Email:{" "}
              <a
                href="mailto:contactwiseman@rentwise.rentals"
                className="text-blue-600 underline"
              >
                contactwiseman@rentwise.rentals
              </a>
            </li>
            <li>Phone: 0805-5555-3555</li>
            <li>Address: 128, Lekki -Epe Road, Lekki Garden, Lekki Lagos</li>
          </ul>
        </section>

        <p className="text-gray-700 mt-8">
          Thank you for trusting RentWise. We are committed to protecting your
          privacy and enhancing your rental experience.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
