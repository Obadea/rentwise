import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import imageHeader from "../../assets/palor4.jpg";
import { Button, Checkbox, Image, Input } from "@nextui-org/react";
import Footer from "../../components/Footer";
import SimilarListing from "../propertyPage/components/SimilarListing";

const PaymentPage = () => {
  return (
    <div>
      <Header newclassName="sticky" />
      <div className="max-w-7xl mx-auto pt-10">
        <Breadcrumb />

        <div className="grid lg:grid-cols-2 gap-24 grid-rows-2 lg:grid-rows-1">
          <div className="mt-10 p-6 lg:p-0">
            <p className="text-2xl font-bold mb-11">Paymennt Overview</p>
            <Image src={imageHeader} className="lg:w-[84%] w-full " isZoomed />
            <div className="grid grid-cols-2 grid-rows-5 mt-5 lg:w-[84%] w-full space-y-2 text-[]">
              <p className="text-customStreetcolor">
                Name of shortlet apartment:
              </p>
              <p className="text-customStreetcolor text-right">
                Glory Suite, Allen Avenue
              </p>
              <p className="text-customStreetcolor">Duration:</p>
              <p className="text-customStreetcolor text-right">1 week</p>
              <p className="text-customStreetcolor">Amount x 1 </p>
              <p className="text-customStreetcolor text-right">₦876,000</p>
              <p className="text-customStreetcolor">VAT</p>
              <p className="text-customStreetcolor text-right">₦0.00 </p>
              <p className="text-customStreetcolor font-bold text-lg">TOTAL</p>
              <p className="text-customStreetcolor text-right text-lg">
                ₦876,000{" "}
              </p>
            </div>
          </div>
          <div className="mt-10 lg:p-0 p-6">
            <p className="text-2xl font-bold mb-11">Paymennt Method</p>
            <div>
              <Input label="Cardholder Name" labelPlacement="outside" />
              <Input
                label="Card Number"
                labelPlacement="outside"
                type="number"
              />
              <div className="flex  gap-6">
                <Input
                  label="Date"
                  labelPlacement="outside"
                  type="number"
                  className="w-full"
                />
                <Input
                  label="CVV"
                  labelPlacement="outside"
                  className="w-full"
                />{" "}
              </div>
            </div>
            <p className="my-7">
              {" "}
              <Checkbox /> Save my details for future transactions
            </p>
            <Button className="w-full" color="primary">
              Proceed
            </Button>
          </div>
        </div>
        <SimilarListing />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
