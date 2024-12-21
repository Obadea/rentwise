import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import CurrencyInput from "react-currency-input-field";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import exitImage from "../../assets/exit.png";
import saver from "../../assets/openaccount.png";
import talkstateman from "../../assets/talkstateman.png";
import { formatValue } from "react-currency-input-field";
import Footer from "../../components/Footer";

function AffordabilityCalculator() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [total, setTotal] = useState(1000);
  const [rent, setRent] = useState(1000);
  const [monthlySavings, setMonthlySavings] = useState(1000);
  const [charges, setCharges] = useState(1000);

  useEffect(() => {
    const total = num + num1 + num2;
    setTotal(total);
    const rent = total * 3;
    setRent(rent);
    const monthlySaving = rent / 12;
    setMonthlySavings(monthlySaving);
    const charges = monthlySaving * 0.05;
    setCharges(charges);

    console.log(total, rent, monthlySavings, charges);
  }, [num, num1, num2, monthlySavings]);

  const prefix = "₦";

  return (
    <div className=" bg-[#F2F2F2]  min-h-screen ">
      <Header className="fixed bg-white" />
      <div className="flex flex-col lg:gap-12 py-6 px-4 lg:px-24">
        <div className="mb-2">
          <Breadcrumb />
        </div>
        {/* <div className="hidden">
          <div className="flex flex-col gap-2">
            <div>
              <img src="" alt="" />s
            </div>
            <div>
              <h4 className="font-bold text-sm text-customblack2">
                See what I can afford
              </h4>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row xl:justify-center">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col lg:w-[475px]">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-3xl text-customNameBlack mt-7">
                  How much Rent can I afford?
                </h3>
                <p className="font-medium text-sm text-customStreetcolor">
                  The platform follows a simple rule, Your Annual rent should
                  not be more than 3 times your total{" "}
                  <span className="font-bold">monthly household income</span>
                </p>
              </div>

              <div className="flex flex-col gap-8 mt-6">
                <div>
                  <p className="font-normal text-sm text-customNameBlack">
                    Your Monthly Income{" "}
                  </p>
                  <CurrencyInput
                    id="validation-example-2-field"
                    placeholder="₦1,234,567"
                    allowDecimals={false}
                    className="pl-2 py-1 border border-customBlackShade w-full bg-[#F2F2F2] rounded-md focus:outline-none focus:border-gray-500"
                    onValueChange={(value) => setNum(parseInt(value) || 0)}
                    prefix={"₦"}
                    step={10}
                  />
                  <div className="flex justify-between text-xs text-[#666666] font-normal">
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
                    className="pl-2 py-1 border border-customBlackShade w-full bg-[#F2F2F2] rounded-md focus:outline-none focus:border-gray-500"
                    onValueChange={(value) => setNum1(parseInt(value) || 0)}
                    prefix={"₦"}
                    step={10}
                  />
                  <div className="flex justify-between text-xs text-[#666666] font-normal">
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
                    className="pl-2 py-1 border border-customBlackShade w-full bg-[#F2F2F2]  rounded-md focus:outline-none focus:border-gray-500"
                    onValueChange={(value) => setNum2(parseInt(value) || 0)}
                    prefix={"₦"}
                    step={10}
                  />
                  <div className="flex justify-between text-xs text-[#666666] font-normal">
                    <p>₦0.0</p>
                    <p>₦1,000,000,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculating affordability */}
            <div className="flex flex-col gap-8 px-4 py-6 bg-white">
              <div className="flex flex-col gap-8 ">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <p className="font-normal text-sm text-[#000000]">
                      Monthly household income
                    </p>
                    <p className="text-customNameBlack font-bold text-lg">
                      {formatValue({ prefix, value: String(total) })}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-medium text-sm text-customaccent">
                      Suggested Annual Rent
                    </p>
                    <p className="text-customaccent font-bold text-4xl">
                      {formatValue({ prefix, value: String(rent) })}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-300 flex flex-col pt-4 gap-6 ">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-[#666666]">
                      Your annual rent shouldn’t exceed
                    </p>
                    <h5 className="font-bold text-base text-[#333333]">
                      {formatValue({ prefix, value: String(rent) })}
                    </h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-[#666666] pr-3">
                      Minimum amount that can be saved monthly
                    </p>
                    <h5 className="font-bold text-base text-[#333333]">
                      {formatValue({ prefix, value: String(monthlySavings) })}
                    </h5>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-[#666666]">
                      System charges
                    </p>
                    <h5 className="font-bold text-base text-[#333333]">
                      {formatValue({ prefix, value: String(charges) })}
                    </h5>
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-customSearchblue text-white w-full p-3 rounded-lg">
                  Continue Search
                </button>
              </div>
            </div>

            <div className=" px-4 lg:px-0 flex flex-col gap-2">
              <div>
                <h2 className="font-normal text-base text-customNameBlack">
                  WHAT TO DO NEXT
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center p-4 bg-white">
                  <div className="flex flex-col justify-between gap-4">
                    <h4>Exit rent affordability calculator</h4>
                    <ArrowForwardIcon className="text-customSearchblue" />
                  </div>
                  <div>
                    <img src={exitImage} alt="exitimage" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between   p-4 bg-white">
                  <div className="flex flex-col justify-between gap-4">
                    <h4>Open rent saver account</h4>
                    <ArrowForwardIcon className="text-customSearchblue" />
                  </div>
                  <div>
                    <img src={saver} alt="saver-image" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center p-4 bg-white">
                  <div className="flex flex-col justify-between gap-4 ">
                    <h4>Talk to a state-man</h4>
                    <ArrowForwardIcon className="text-customSearchblue" />
                  </div>
                  <div>
                    <img src={talkstateman} alt="talkstateman" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AffordabilityCalculator;
