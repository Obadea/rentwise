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
import jsPDF from "jspdf";
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
import ShareButton from "./ShareButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import phoneMockup from "../../assets/phoemokup.png";
import { toNaira } from "../../utils/helperFunction";
import { useAuth } from "../../utils/AuthContext";
import html2canvas from "html2canvas";
import Logo from "../../components/Logo";
function AffordabilityCalculator() {
  // const [num, setNum] = useState("");
  // const [num1, setNum1] = useState("");
  // const [num2, setNum2] = useState("");

  const [total, setTotal] = useState(1000);
  const [rent, setRent] = useState(1000);
  const [monthlySavings, setMonthlySavings] = useState(1000);
  const [charges, setCharges] = useState(1000);
  const [searchParams, setSearchParams] = useSearchParams(); // For managing query parameters

  const [num, setNum] = useState(searchParams.get("num") || "");
  const [num1, setNum1] = useState(searchParams.get("num1") || "");
  const [num2, setNum2] = useState(searchParams.get("num2") || "");
  // const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  // Function to update URL parameters
  const updateURLParams = (key, value) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  };

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

    // Update URL parameters
    updateURLParams("num", num);
    updateURLParams("num1", num1);
    updateURLParams("num2", num2);

    console.log(total, rent, monthlySavings, charges);
  }, [num, num1, num2, monthlySavings]);

  const prefix = "₦";

  // const handleCopy = () => {
  //   // Get the current URL
  //   const url = window.location.href;

  //   // Copy the URL to the clipboard
  //   navigator.clipboard.writeText(url).then(() => {
  //     // Set the copied state to true
  //     setIsCopied(true);

  //     // Revert back to "Copy" after 3 seconds
  //     setTimeout(() => {
  //       setIsCopied(false);
  //     }, 3000);
  //   });
  // };

  // const downloadPDF = () => {
  //   const doc = new jsPDF();

  //   doc.setFontSize(16);
  //   doc.text("Rent Affordability Calculator Results", 10, 20);

  //   doc.setFontSize(12);
  //   doc.text(`Total Monthly Income: ₦${total.toLocaleString()}`, 10, 40);
  //   doc.text(`Maximum Annual Rent: ₦${rent.toLocaleString()}`, 10, 50);
  //   doc.text(
  //     `Expected Monthly Savings: ₦${monthlySavings.toLocaleString()}`,
  //     10,
  //     60
  //   );
  //   doc.text(
  //     `Outstanding Income for Home Expenses: ₦${(
  //       total - monthlySavings
  //     ).toLocaleString()}`,
  //     10,
  //     70
  //   );

  //   doc.save("Rent_Affordability_Calculator.pdf");
  // };

  const downloadPDF = async () => {
    // Select the element for generating the PDF
    const element = document.getElementById("pdf-content");
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Initialize jsPDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add the image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    // Add a clickable link at the bottom-right corner
    const marginBottom = 10; // Distance from the bottom
    const linkX = pageWidth - 70; // Adjust the X-coordinate for the link
    const linkY = pageHeight - marginBottom; // Adjust the Y-coordinate for the link

    pdf.setTextColor(0, 0, 255); // Set link color to blue
    pdf.textWithLink("www.rentwise.rentals", linkX, linkY, {
      url: "https://www.rentwise.rentals",
    });

    // Save the PDF
    pdf.save("Rent_Affordability_Calculator.pdf");
  };

  const shareOnWhatsApp = () => {
    const message = `Rent Affordability Calculator Results:
  - Total Monthly Income: ₦${total.toLocaleString()}
  - Maximum Annual Rent: ₦${rent.toLocaleString()}
  - Expected Monthly Savings: ₦${monthlySavings.toLocaleString()}
  - Outstanding Income for Home Expenses: ₦${(
    total - monthlySavings
  ).toLocaleString()}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
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
          <p className="font-bold text-customStreetcolor text-start text-2xl mt-14 mb-4">
            My Rent Calculator
          </p>
          <div className="flex flex-col items-center justify-center  w-full mx-auto">
            <div className="grid lg:grid-cols-[1.3fr_1fr] lg:rounded-s-xl w-full mb-14 gridrows-1 gap-6 lg:gap-0 rounded-xl">
              <div className=" bg-white px-8 pt-4 pb-6 space-y-5 rounded-s-xl shadow-lg w-full">
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
                  classNames={{
                    label: `font-bold lg:text-lg `,
                    value: `${
                      total < 900000
                        ? "text-danger"
                        : total <= 7996660
                        ? "text-warning"
                        : "text-primary"
                    }`,
                  }}
                  showValueLabel={true}
                  size="md"
                  value={total}
                />
                {/* Share Icon */}
                <div className="flex justify-end gap-2">
                  {/* <Button isIconOnly isDisabled={!total}>
                  <ShareIcon className="text-customStreetcolor" />
                </Button> */}
                  <ShareButton
                    total={total}
                    whatsAppFunction={shareOnWhatsApp}
                  />
                  <Button isIconOnly isDisabled={!total} onPress={downloadPDF}>
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
                    <p>Expected Monthly savings:</p>
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
                    View Apartment within this Range
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 py-16  flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] items-center gap-8 bg-black rounded-xl shadow-lg p-8 ">
              {/* Phone Mockup */}
              <div className="relative flex justify-center">
                <div className="absolute w-[500px] -top-[247px]">
                  {/* <div className="w-[270px] h-[270px] bg-red-300  absolute rounded-full top-[124px] right-[114px]" /> */}
                  <div className="hidden lg:block w-[270px] h-[270px] bg-gradient-to-br from-black via-blue-700/35 to-blue-900 absolute rounded-full top-[124px] right-[114px]" />

                  <img
                    src={phoneMockup} // Replace this with the phone mockup image URL
                    alt="Phone Mockup"
                    draggable={false}
                    className="absolute w-full hidden lg:block"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="text-center lg:text-left ">
                <h2 className="text-2xl lg:text-3xl font-bold  leading-snug text-customwhite">
                  {`
                Get 2.5% interest when you save ${
                  monthlySavings
                    ? `${toNaira(monthlySavings)}  rentage Monthly`
                    : "your Expected Monthly Savings"
                }
                to Avoid Landlord WAHALA`}
                </h2>
                <p className="mt-4 text-customwhite">
                  Imagine this: It's time to renew your rent, but instead of
                  stress and sleepless nights, you have peace of mind knowing
                  you're financially prepared. A Rent Saver Account is more than
                  just a savings plan—it's your safety net, your promise to
                  yourself that you'll never have to scramble or borrow when
                  rent day arrives.
                </p>
                <div className="flex flex-col lg:flex-row  w-full gap-4 mt-6">
                  <Button
                    className=" text-customwhite h-12"
                    radius="md"
                    color="primary"
                    onPress={() => {
                      navigate("/open-saver-account");
                    }}
                  >
                    Open Rent-saver Account{" "}
                  </Button>
                  <Button
                    className=" text-customwhite h-12"
                    radius="md"
                    color="primary"
                    variant="bordered"
                  >
                    How it works{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Image for pdf */}
      <div className="bg-gray-100 py-6 px-4 absolute bottom-0 -z-40 opacity-0">
        <h2 className="text-2xl font-bold text-center mb-6">
          PDF File for Rent Affordability Calculator
        </h2>
        <div
          id="pdf-content"
          className="bg-white p-6 pt-0 rounded-lg shadow-md max-w-md mx-auto"
        >
          <Logo />
          <h3 className="text-xl font-bold my-4 text-center">
            My Rent Calculator
          </h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 text-left p-2">SN</th>
                <th className="border-b-2 text-left p-2">Income Items</th>
                <th className="border-b-2 text-right p-2">Amount (₦)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">1</td>
                <td className="p-2 border-b">Your Monthly Income</td>
                <td className="p-2 border-b text-right">{num}</td>
              </tr>
              <tr>
                <td className="p-2 border-b">2</td>
                <td className="p-2 border-b">Spouse's Monthly Income</td>
                <td className="p-2 border-b text-right">{num1}</td>
              </tr>
              <tr>
                <td className="p-2 border-b">3</td>
                <td className="p-2 border-b">Income from Other Sources</td>
                <td className="p-2 border-b text-right">{num2}</td>
              </tr>
              <tr>
                <td className="p-2 border-t font-bold" colSpan="2">
                  Total Monthly Income (TMHI)
                </td>
                <td className="p-2 border-t text-right font-bold">
                  ₦{total.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="p-2" colSpan="2">
                  Maximum Rent You Can Afford (3 * TMHI)
                </td>
                <td className="p-2 text-right">₦{rent.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="p-2" colSpan="2">
                  Expected Monthly Savings
                </td>
                <td className="p-2 text-right">
                  ₦{monthlySavings.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="p-2" colSpan="2">
                  Outstanding Income for Other Expenses
                </td>
                <td className="p-2 text-right">
                  ₦{(total - monthlySavings).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="flex justify-center mt-6">
          <Button onPress={downloadPDF} className="text-white bg-blue-500">
            Download PDF
          </Button>
        </div> */}
      </div>
    </>
  );
}

export default AffordabilityCalculator;
