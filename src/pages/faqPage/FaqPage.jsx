import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import { rentWiseFAQs } from "../../utils/constants";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Footer from "../../components/Footer";

const FaqPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 max-w-7xl mt-12">
        <Breadcrumb />
        <p className="text-center font-bold text-customStreetcolor text-6xl mt-6">
          Questions? Look here.
        </p>
        <p className="text-center text-customStreetcolor text-sm mt-6">
          Can't find an answer? Call us at 0805-555-3655 or email
          support@rentwise.rentals
        </p>
        <Accordion className="max-w-4xl mx-auto mt-12 mb-10">
          {rentWiseFAQs.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.title}
              aria-label={faq.title}
              classNames={{ title: "text-customblack text-xl font-bold" }}
            >
              {faq.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;
