import React from "react";
import Header from "../landingpage/components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import CurrencyInput from "react-currency-input-field";

function AffordabilityCalculator() {
  return (
    <div>
      <Header />
      <div>
        <div>
          {" "}
          <Breadcrumb />
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-customblack2">
                See what I can afford
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-3xl text-customNameBlack">
                How much Rent can I afford?
              </h3>
              <p className="font-medium text-sm text-customaccent">
                The platform follows a simple rule, Your Annual rent should not
                be more than 3 times your total{" "}
                <span className="font-bold">monthly household income</span>
              </p>
            </div>

            {/* Calculating affordability */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-normal text-sm text-customNameBlack">
                  Your Monthly Income{" "}
                </p>
                <CurrencyInput
                  id="validation-example-2-field"
                  placeholder="₦1,234,567"
                  allowDecimals={false}
                  className="pl-2 py-1 border border-customBlackShade w-full lg:w-[130px] rounded-md focus:outline-none focus:border-gray-500"
                  //   onValueChange={(value) => setNum2(parseInt(value))}
                  prefix={"₦"}
                  step={10}
                />
                <div className="flex justify-between">
                  <p>₦0.0</p>
                  <p>₦1,000,000,000</p>
                </div>
              </div>
              <div>
                <p className="font-normal text-sm text-customNameBlack">
                  Spouse’s Monthly Income (If any) 200,000
                </p>
                <CurrencyInput
                  id="validation-example-2-field"
                  placeholder="₦1,234,567"
                  allowDecimals={false}
                  className="pl-2 py-1 border border-customBlackShade w-full lg:w-[130px] rounded-md focus:outline-none focus:border-gray-500"
                  //   onValueChange={(value) => setNum2(parseInt(value))}
                  prefix={"₦"}
                  step={10}
                />
                <div className="flex justify-between">
                  <p>₦0.0</p>
                  <p>₦1,000,000,000</p>
                </div>
              </div>
              <div>
                <p className="font-normal text-sm text-customNameBlack">
                  Monthly Income from other investments (If any)
                </p>
                <CurrencyInput
                  id="validation-example-2-field"
                  placeholder="₦1,234,567"
                  allowDecimals={false}
                  className="pl-2 py-1 border border-customBlackShade w-full lg:w-[130px] rounded-md focus:outline-none focus:border-gray-500"
                  //   onValueChange={(value) => setNum2(parseInt(value))}
                  prefix={"₦"}
                  step={10}
                />
                <div className="flex justify-between">
                  <p>₦0.0</p>
                  <p>₦1,000,000,000</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffordabilityCalculator;
