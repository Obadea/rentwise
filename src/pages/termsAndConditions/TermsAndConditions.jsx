import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/BreadCrumb";

const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="max-w-7xl mx-auto p-6 bg-white my-14 ">
          <Breadcrumb />
          <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-16">
            RentWise Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Effective Date: January 1, 2025
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to RentWise! These Terms and Conditions ("Terms") govern
            your use of the RentWise platform ("Platform") and services
            ("Services"), including our website, mobile application, and related
            offerings. By accessing or using RentWise, you agree to comply with
            and be bound by these Terms. If you do not agree, please refrain
            from using our Services.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Definitions
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>"Platform"</strong>: RentWise's website, mobile
                applications, and any related software or services.
              </li>
              <li>
                <strong>"User"</strong>: Any individual or entity that accesses
                or uses RentWise, including landlords, tenants, and prospective
                renters.
              </li>
              <li>
                <strong>"Landlord"</strong>: Property owners or their
                representatives who list properties on the Platform.
              </li>
              <li>
                <strong>"Tenant"</strong>: Individuals seeking rental properties
                via the Platform.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Eligibility
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                You must be at least 18 years old and capable of entering into a
                legally binding agreement to use the Platform.
              </li>
              <li>
                By registering or using the Platform, you confirm that all
                information provided is accurate and up-to-date.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Account Registration
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Users must create an account to access certain features of the
                Platform.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials and are liable for any activities conducted
                under your account.
              </li>
              <li>
                Notify RentWise immediately if you suspect unauthorized access
                to your account.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Use of Services
            </h2>
            <p className="text-gray-700 mb-4">
              The Platform is provided solely for informational purposes to
              facilitate rental agreements between Landlords and Tenants. Users
              agree not to misuse the Platform, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Uploading false, misleading, or inappropriate content.</li>
              <li>
                Engaging in fraudulent activities or impersonating another
                individual.
              </li>
              <li>Attempting to breach the Platform's security.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Property Listings
            </h2>
            <h3 className="font-semibold text-gray-700">For Landlords:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                You represent and warrant that you are the owner or have the
                authority to list the property.
              </li>
              <li>
                All information provided, including pricing and property
                details, is accurate and truthful.
              </li>
              <li>
                RentWise reserves the right to remove or modify listings that
                violate these Terms.
              </li>
            </ul>
            <h3 className="font-semibold text-gray-700">For Tenants:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                You agree to use the Platform solely to search for rental
                properties and not for any unauthorized purposes.
              </li>
              <li>
                RentWise does not guarantee the availability, quality, or
                legality of listed properties.
              </li>
            </ul>
          </section>

          {/* Additional Sections */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Payments
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Payment terms for any Services provided by RentWise will be
                outlined separately and are subject to these Terms.
              </li>
              <li>
                RentWise is not responsible for rent collection or financial
                disputes between Landlords and Tenants unless specified
                otherwise in our services.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Wise-Report
            </h2>
            <p className="text-gray-700">
              The Wise-Report is a proprietary tool designed to assist Users
              with rental decision-making by providing data-driven insights.
              RentWise does not guarantee the accuracy, completeness, or
              reliability of the Wise-Report and is not liable for decisions
              made based on its content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content on the Platform, including text, graphics, logos, and
              software, is the property of RentWise and is protected under
              applicable intellectual property laws. Users may not reproduce,
              distribute, or create derivative works from the Platform's content
              without explicit written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Privacy Policy
            </h2>
            <p className="text-gray-700">
              RentWise is committed to protecting your privacy. Please review
              our Privacy Policy for information on how we collect, use, and
              disclose your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              RentWise provides the Platform "as is" and does not guarantee
              uninterrupted, error-free, or secure access. RentWise is not
              liable for direct, indirect, incidental, or consequential damages
              arising from your use of the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              15. Contact Information
            </h2>
            <p className="text-gray-700">
              If you have questions or concerns regarding these Terms, please
              contact us at:
            </p>
            <ul className="list-none text-gray-700 mt-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@rentwise.rentals"
                  className="text-blue-600 underline"
                >
                  support@rentwise.rentals
                </a>
              </li>
              <li>Phone: 0805-5555-3655</li>
              <li>Address: 128, Lekki -Epe Road, Lekki Garden, Lekki Lagos</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
