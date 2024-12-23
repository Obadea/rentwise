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
import LinkIcon from "@mui/icons-material/Link";
import {
  Button,
  Card,
  CardHeader,
  Image,
  Input,
  Link,
  Progress,
  Tooltip,
} from "@nextui-org/react";
import ShareIcon from "@mui/icons-material/Share";
import { SvgLinkIcon } from "../../utils/SvgIcons";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
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
    <div className=" bg-[#F2F2F2] ">
      <Header newclassName="sticky" />
      {/* <div className="flex flex-col lg:gap-12 py-6 px-4 lg:px-24 "> */}
      <div className="lg:px-20 px-4 my-10 w-full xl:w-[1260px] mx-auto">
        <div className="mb-2 lg:mt-16">
          <Breadcrumb />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl text-customNameBlack mt-7">
            How much Rent can I afford?
          </h3>
          <p className="font-medium text-sm text-customStreetcolor">
            The platform follows a simple rule, Your Annual rent should not be
            more than 3 times your total{" "}
            <span className="font-bold">monthly household income</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center  w-full mx-auto">
          <div className="grid grid-cols-[1.3fr_1fr] rounded-s-xl w-full my-14">
            <div className=" bg-white px-8 pt-11 pb-6 space-y-5 rounded-s-xl shadow-lg">
              <Input
                variant="underlined"
                label="Your Monthly Income"
                placeholder="Enter the amount you earn as income monthly"
                type="number"
                onChange={(e) => setNum(parseInt(e.target.value) || 0)}
              />
              <Input
                variant="underlined"
                label="Your Spouse Income"
                placeholder="Enter the amount your spouse earn monthly"
                type="number"
                onChange={(e) => setNum1(parseInt(e.target.value) || 0)}
              />
              <Input
                variant="underlined"
                label="Monthly Income from other investments"
                placeholder="Enter income (if any) from other investments"
                type="number"
                onChange={(e) => setNum2(parseInt(e.target.value) || 0)}
              />
              <Progress
                className=""
                color="primary"
                formatOptions={{ style: "currency", currency: "NGN" }}
                label="Total monthly household income(TMHI)"
                maxValue={rent}
                showValueLabel={true}
                size="md"
                value={total}
              />
              {/* Share Icon */}
              <div>
                <Button isIconOnly>
                  <ShareIcon className="text-customStreetcolor" />
                </Button>
              </div>
            </div>
            <div className="bg-black text-white rounded-xl relative right-2 shadow-lg">
              <div className="bg-primary px-8 py-6 flex items-center rounded-t-xl justify-center ">
                <p>Maximum Annual rent you should comfortably afford</p>
              </div>
              <div className="p-8">
                <p className="text-center font-bold text-3xl">
                  {formatValue({ prefix, value: String(rent) })}
                </p>
                <p className="text-customStreetcolor text-end text-sm">
                  (3*TMHI)
                </p>
                <div className="flex justify-between mt-8">
                  <p>Expected Monhtly savings:</p>
                  <p>
                    {formatValue({ prefix, value: String(monthlySavings) })}
                  </p>
                </div>
                <div className="flex justify-between mt-8">
                  <p>Outstanding Income for home expenses:</p>
                  <p>
                    {formatValue({
                      prefix,
                      value: String(monthlySavings - num),
                    })}
                  </p>
                </div>
                <Button
                  className="w-full mt-14"
                  color="primary"
                  isDisabled={!total}
                >
                  Continue Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-xl text-customNameBlack mt-7">
          WHAT TO DO NEXT
        </h3>
        <div className="flex flex-col lg:flex-row gap-6 mt-8 w-full mx-auto">
          <Card>
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={saver}
                // src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">
                  Rent<span className="text-customyellow">w</span>ise
                </p>
                <p className="text-small text-default-500">
                  <Link href="./" showAnchorIcon>
                    Open rent saver account
                  </Link>
                </p>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={talkstateman}
                // src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">
                  Rent<span className="text-customyellow">w</span>ise
                </p>{" "}
                <p className="text-small text-default-500">
                  <Link href="./" showAnchorIcon>
                    Talk to a wise-man
                  </Link>
                </p>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={exitImage}
                // src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">
                  Rent<span className="text-customyellow">w</span>ise
                </p>{" "}
                <p className="text-small text-default-500">
                  <Link href="./" showAnchorIcon>
                    Exit rent affordability calculator
                  </Link>
                </p>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* <div className="flex flex-col lg:flex-row xl:justify-center">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col lg:w-[595px] w-full">
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
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default AffordabilityCalculator;
