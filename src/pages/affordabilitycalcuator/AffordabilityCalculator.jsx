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
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
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
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [total, setTotal] = useState(1000);
  const [rent, setRent] = useState(1000);
  const [monthlySavings, setMonthlySavings] = useState(1000);
  const [charges, setCharges] = useState(1000);

  useEffect(() => {
    const total =
      Number(num?.replace(/,/g, "")) +
      Number(num1?.replace(/,/g, "")) +
      Number(num2?.replace(/,/g, ""));
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
          <div className="grid lg:grid-cols-[1.3fr_1fr] lg:rounded-s-xl w-full my-14 gridrows-1 gap-6 lg:gap-0 rounded-xl">
            <div className=" bg-white px-8 pt-11 pb-6 space-y-5 rounded-s-xl shadow-lg w-full">
              <Input
                variant="underlined"
                label="Your Monthly Income"
                placeholder="Enter the amount you earn as income monthly"
                type="text"
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");

                  const formattedValue = numericValue.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  );
                  setNum(formattedValue);
                }}
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">₦</span>
                  </div>
                  // setNum(parseInt(formattedValue) || 0);
                }
                value={num}
                classNames={{
                  label: "font-bold lg:text-lg text-sm",
                  input: "text-sm",
                }}
              />
              <Input
                variant="underlined"
                label="Your Spouse Income"
                placeholder="Enter the amount your spouse earn monthly"
                type="text"
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");

                  const formattedValue = numericValue.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  );
                  setNum1(formattedValue);
                  // setNum1(parseInt(e.target.value) || 0);
                }}
                classNames={{
                  label: "font-bold lg:text-lg text-sm",
                  input: "text-sm",
                }}
                value={num1}
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">₦</span>
                  </div>
                  // setNum(parseInt(formattedValue) || 0);
                }
              />
              <Input
                variant="underlined"
                label="Monthly Income from other investments"
                placeholder="Enter income (if any) from other investments"
                type="text"
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");

                  const formattedValue = numericValue.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  );
                  setNum2(formattedValue);
                  // setNum2(parseInt(e.target.value) || 0)
                }}
                classNames={{
                  label: "font-bold lg:text-lg text-sm",
                  input: "text-sm",
                }}
                value={num2}
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">₦</span>
                  </div>
                  // setNum(parseInt(formattedValue) || 0);
                }
              />
              <Progress
                className=""
                color={
                  total < 900000
                    ? "danger"
                    : total <= 7996660
                    ? "warning"
                    : "primary"
                }
                formatOptions={{ style: "currency", currency: "NGN" }}
                // label="Total monthly household income (TMHI)"
                label={
                  <>
                    <p className="hidden lg:block">
                      Total monthly household income (TMHI)
                    </p>
                    <p className="lg:hidden">TMHI</p>
                  </>
                }
                maxValue={19999999}
                classNames={{ label: "font-bold lg:text-lg " }}
                showValueLabel={true}
                size="md"
                value={total}
              />
              {/* Share Icon */}
              <div className="flex justify-end gap-2">
                <Button isIconOnly isDisabled={!total}>
                  <ShareIcon className="text-customStreetcolor" />
                </Button>
                <Button isIconOnly isDisabled={!total}>
                  <DownloadRoundedIcon className="text-customStreetcolor" />
                </Button>
              </div>
            </div>
            <div className="bg-black text-white rounded-xl relative lg:right-2 right-0 shadow-lg">
              <div className="bg-primary px-8 py-6 flex items-center rounded-t-xl justify-center lg:text-lg text-sm">
                <p>Maximum Annual rent you should comfortably afford</p>
              </div>
              <div className="p-8">
                <p className="text-center font-bold text-3xl overflow-scroll scrollbar-hide">
                  {formatValue({ prefix, value: String(rent) })}
                </p>
                <p className="text-customStreetcolor text-end text-sm">
                  (3*TMHI)
                </p>
                <div className="flex justify-between mt-8 text-xs lg:text-sm">
                  <p>Expected Monhtly savings:</p>
                  <p>
                    {formatValue({ prefix, value: String(monthlySavings) })}
                  </p>
                </div>
                <div className="flex justify-between mt-8 text-xs lg:text-sm">
                  <p>Outstanding Income for home expenses:</p>
                  <p>
                    {formatValue({
                      prefix,
                      value: String(total - monthlySavings),
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
      </div>
      <Footer />
    </div>
  );
}

export default AffordabilityCalculator;
