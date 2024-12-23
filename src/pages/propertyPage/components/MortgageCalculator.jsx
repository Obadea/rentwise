import React from "react";
import mortage from "../../../assets/mortage-div.png";
import mortage1 from "../../../assets/Div [d-flex].png";
import mortage2 from "../../../assets/Div [row].png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { toNaira } from "../../../utils/helperFunction";
import { Skeleton } from "@nextui-org/react";
import { SvgCircleIcon } from "../../../utils/SvgIcons";

// Register components needed for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

function MortgageCalculator({ id, propertyData }) {
  const data = {
    labels: [
      "Monthly Mortgage Payment",
      "Property Tax",
      "Home Insurance",
      "Monthly HOA Fees",
    ],
    datasets: [
      {
        label: "Morgage Results",
        data: [
          propertyData?.mortgageResults?.monthlyMortgagePayment,
          propertyData?.mortgageResults?.propertyTax,
          propertyData?.mortgageResults?.homeInsurance,
          propertyData?.mortgageResults?.PMI,
          propertyData?.mortgageResults?.monthlyHOAFees,
        ],
        // data: [300, 50, 100, 7],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#C2D500",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Optional chart options
  const options = {
    responsive: true,
    cutout: "82%", // Adjust this value to make the chart thinner (50%-90% works well)
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  // Custom plugin for center text
  const centerTextPlugin = {
    id: "centerText", // Unique plugin ID
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.save();

      const text = toNaira(
        propertyData?.mortgageResults?.monthlyTotal
          ? propertyData?.mortgageResults?.monthlyTotal
          : 0
      ); // Your custom text
      const value = "Monthly";

      // Set text properties
      ctx.font = "bold 30px Monospace";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Calculate position (center of chart)
      const x = width / 2;
      const y = height / 2;

      // Draw text
      ctx.fillText(text, x, y - 10); // Main text
      ctx.font = " 17px Monospace";
      ctx.fillStyle = "gray";
      ctx.fillText(value, x, y + 20); // Value below the text

      ctx.restore();
    },
  };

  return (
    <div id={id} className="lg:p-10 p-4  bg-white mt-10 rounded-md">
      <p className="font-medium text-xl text-customdark border-b-2 pb-4 border-[#D9D9D9] mb-10">
        {" "}
        Mortgage Calculator
      </p>
      {propertyData ? (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
          <div className="flex items-center justify-center w-[82%] m-auto ">
            <Doughnut
              data={data}
              options={options}
              plugins={[centerTextPlugin]}
            />
          </div>
          <div>
            <div className="flex border-b-2 pb-4 border-[#D9D9D9] mb-4 justify-between">
              <div className="flex items-center gap-3">
                <SvgCircleIcon className="fill-customgray3" />
                <p className="font-medium">Down Payment</p>
              </div>

              <p className="text-customStreetcolor">
                {toNaira(propertyData?.mortgageResults?.downPayment)}
              </p>
            </div>
            <div className="flex border-b-2 pb-4 border-[#D9D9D9] mb-4 justify-between">
              <div className="flex items-center gap-3">
                <SvgCircleIcon className="fill-customgray3" />
                <p className="font-medium">Loan Amount</p>
              </div>

              <p className="text-customStreetcolor">
                {toNaira(propertyData?.mortgageResults?.loanAmount)}
              </p>
            </div>
            <div className="flex border-b-2 pb-4 border-[#D9D9D9] mb-4 justify-between">
              <div className="flex items-center gap-3">
                <SvgCircleIcon className="fill-[#FF6384]" />
                <p className="font-medium">Monthly Mortgage Payment</p>
              </div>

              <p className="text-customStreetcolor">
                {toNaira(propertyData?.mortgageResults?.monthlyMortgagePayment)}
              </p>
            </div>
            <div className="flex border-b-2 pb-4 border-[#D9D9D9] mb-4 justify-between">
              <div className="flex items-center gap-3">
                <SvgCircleIcon className="fill-[#36A2EB]" />
                <p className="font-medium">Property Tax</p>
              </div>

              <p className="text-customStreetcolor">
                {toNaira(propertyData?.mortgageResults?.propertyTax)}
              </p>
            </div>
            <div className="flex border-b-2 pb-4 border-[#D9D9D9] mb-4 justify-between">
              <div className="flex items-center gap-3">
                <SvgCircleIcon className="fill-[#FFCE56]" />
                <p className="font-medium">Home Insurance</p>
              </div>

              <p className="text-customStreetcolor">
                {toNaira(propertyData?.mortgageResults?.homeInsurance)}
              </p>
            </div>
            <div className="flex border-b-2 pb-4 border-[#D9D9D9] mb-4 justify-between">
              <div className="flex items-center gap-3">
                <SvgCircleIcon className="fill-[#4BC0C0]" />
                <p className="font-medium">PMI</p>
              </div>

              <p className="text-customStreetcolor">
                {toNaira(propertyData?.mortgageResults?.PMI)}
              </p>
            </div>
            <div className="flex border-b-2 pb-4 border-[#D9D9D9] mb-4 justify-between">
              <div className="flex items-center gap-3">
                <SvgCircleIcon className="fill-[#C2D500]" />
                <p className="font-medium">Monthly HOA Fees</p>
              </div>

              <p className="text-customStreetcolor">
                {toNaira(propertyData?.mortgageResults?.monthlyHOAFees)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-10 grid-cols-1">
          <Skeleton className=" rounded-full h-[340px] w-[340px]" />
          <Skeleton />
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator;
