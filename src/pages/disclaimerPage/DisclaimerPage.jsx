import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";

const DisclaimerPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-md">
        <Breadcrumb />
        <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-10">
          RentWise Disclaimer
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: January 1, 2025
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. General Disclaimer
          </h2>
          <p className="text-gray-700">
            RentWise ("we," "our," "us") provides services, tools, and reports
            (such as the Wise-Report) to assist users in making informed rental
            decisions. While we strive to ensure the accuracy and reliability of
            the information provided, RentWise cannot guarantee that all data,
            analyses, or recommendations will be error-free or entirely
            comprehensive. Users are advised to verify critical information
            independently.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. No Legal or Financial Advice
          </h2>
          <p className="text-gray-700">
            The content and services offered by RentWise, including the
            Wise-Report and associated tools, are provided for informational
            purposes only. They should not be considered as legal, financial, or
            professional advice. Users should consult appropriate professionals
            for advice tailored to their specific circumstances.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Third-Party Data and Content
          </h2>
          <p className="text-gray-700">
            RentWise may rely on third-party sources to gather data, such as
            property details, neighborhood analyses, or safety ratings. We make
            reasonable efforts to validate this data but cannot be held liable
            for inaccuracies or omissions from these external sources.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            RentWise, its employees, affiliates, or partners, will not be held
            liable for any loss, damage, or inconvenience arising from the use
            or inability to use our services, reports, or platform, including
            but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Financial loss due to property decisions.</li>
            <li>Misinterpretation of data provided in the Wise-Report.</li>
            <li>
              Issues stemming from interactions with landlords, agents, or other
              third parties.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. User Responsibility
          </h2>
          <p className="text-gray-700">
            Users of RentWise services are responsible for their decisions and
            actions based on the information provided. RentWise does not
            endorse, guarantee, or act as an intermediary for any landlord,
            tenant, or third-party service provider.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Service Availability
          </h2>
          <p className="text-gray-700">
            While RentWise aims to provide uninterrupted access to its platform
            and services, we do not guarantee that our services will always be
            available, secure, or free of errors. Scheduled maintenance,
            technical issues, or unforeseen events may impact service
            availability.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Property and Landlord Disputes
          </h2>
          <p className="text-gray-700">
            RentWise does not own, manage, or directly interact with properties
            or landlords. Any disputes arising between tenants and landlords or
            related third parties must be resolved independently. RentWise is
            not responsible for mediating or resolving such disputes.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Modifications to Disclaimer
          </h2>
          <p className="text-gray-700">
            RentWise reserves the right to update this Disclaimer at any time
            without prior notice. Users are encouraged to review this document
            periodically for any changes. Continued use of our services after
            modifications constitutes acceptance of the updated Disclaimer.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Governing Law
          </h2>
          <p className="text-gray-700">
            This Disclaimer is governed by the laws of the Federal Republic of
            Nigeria and any disputes shall be subject to the exclusive
            jurisdiction of the courts of Nigeria.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            For questions or concerns regarding this Disclaimer or our services,
            please contact us:
          </p>
          <ul className="list-none text-gray-700">
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

        {/* Acknowledgment */}
        <section className="pt-4 border-t border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Acknowledgment
          </h2>
          <p className="text-gray-700">
            By using RentWise services, users acknowledge and accept this
            Disclaimer in its entirety. If you do not agree with any part of
            this document, please refrain from using our platform and services.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DisclaimerPage;
