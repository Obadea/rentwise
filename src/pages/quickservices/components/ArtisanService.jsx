import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import image1 from "../../../assets/Image(1).png";
import image2 from "../../../assets/Image(2).png";
import image3 from "../../../assets/Image(3).png";
import image4 from "../../../assets/Image(4).png";
import image5 from "../../../assets/Image(5).png";
import image6 from "../../../assets/Image(6).png";
import image7 from "../../../assets/Image(7).png";
import image8 from "../../../assets/Image(8).png";
import image9 from "../../../assets/Image(9).png";
import image10 from "../../../assets/Image(10).png";
import image11 from "../../../assets/Image(11).png";
import image12 from "../../../assets/Image(12).png";
import { Form, Formik } from "formik";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

const categories = [
  {
    id: 1,
    name: "AC / Refrigeration Services",
    image: image1,
    options: [
      "A.C Gas Filling",
      "A.C Gas Repair and Installation",
      "Refrigerator Repair",
      "Freezer Repair",
      "Water Dispenser",
      "Cold Room Servicing",
      "Others",
    ],
  },
  {
    id: 2,
    name: "Bricklayer / Tiller / POP",
    image: image2,
    options: ["Bricklaying", "Tilling", "POP", "Stamp Concrete", "Others"],
  },
  {
    id: 3,
    name: "Carpentry Services",
    image: image3,
    options: [
      "Windows and Doors",
      "Cabinetry ",
      "Furniture",
      "Roofing",
      "Others",
    ],
  },
  {
    id: 4,
    name: "Cleaning / Laundry / Fumigation",
    image: image4,
    options: [
      "Indoor Cleaning",
      "Outdoor Cleaning",
      "Fumigation",
      "Laundry Service",
      "Upholstery",
      "Others",
    ],
  },
  {
    id: 5,
    name: "DSTV / CCTV",
    image: image5,
    options: ["CCTV Install / Repair", "DSTV Install / Repair", "Others"],
  },
  {
    id: 6,
    name: "Electrical / Inverter Services",
    image: image6,
    options: ["Electrical Installations", "Electrical Repairs", "Others"],
  },
  {
    id: 7,
    name: "Generator Services",
    image: image7,
    options: [
      "Generator Servicing",
      "Diesel Gen Repair",
      "Gasoline Gen Repair",
      "Others",
    ],
  },
  {
    id: 8,
    name: "Haulage / Movers Services",
    image: image8,
    options: ["Car", "Van", "Truck", "Others"],
  },
  {
    id: 9,
    name: "Home Interior Fittings",
    image: image9,
    options: [
      "Window Blinds Install / Repair",
      "Curtains Installation",
      "Others",
    ],
  },
  {
    id: 10,
    name: "Painter / Screeder / Wallpaper",
    image: image10,
    options: [
      "Exterior Painting",
      "Interior Painting",
      "Wall Screeding",
      "Wallpaper Install",
      "Tyrolean",
      "Others",
    ],
  },
  {
    id: 11,
    name: "Plumbing Services",
    image: image11,
    options: [
      "Plumbing Repair/Install",
      "Drain/Leaks Fixing",
      "Pumping Machine",
      "Toilet Repairs",
      "Water Treatment/Tank Washing",
      "Others",
    ],
  },
  {
    id: 12,
    name: "Welder Services",
    image: image12,
    options: [
      "Gas Metal Welding",
      "Gas Tungsten Welding",
      "General Welding",
      "Fabrication",
      "Others",
    ],
  },
];

function ArtisanService() {
  const [activePopup, setActivePopup] = useState();
  const [activeSelection, setActiveSelection] = useState({});

  const handlePopup = (id) => {
    setActivePopup(id);
  };

  const handleClose = () => {
    setActivePopup(null);
  };
  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id}
          className=" relative flex flex-col w-[350px] md:w-[40%] lg:w-[24%] p-3  bg-addpropertybg rounded-lg"
        >
          <div className="flex flex-row gap-4 justify-between lg:justify-normal items-center">
            <img src={category.image} alt={category.name} />{" "}
            {/* Add the correct src here */}
            <h4 className="font-bold text-base text-customdark">
              {category.name}
            </h4>
          </div>
          <div className="flex justify-end">
            {/* <button
              onClick={() => handlePopup(category.id)}
              className="text-customSearchblue font-medium text-sm mb-1"
            >
              Select
            </button> */}
            <Popover showArrow={true}>
              <PopoverTrigger>
                <p className="text-customSearchblue font-medium text-sm mb-1 mr-3 cursor-pointer">
                  Select
                </p>
              </PopoverTrigger>
              <PopoverContent>
                <CheckboxGroup
                  defaultValue={["buenos-aires", "london"]}
                  label={category.name}
                  radius="sm"
                >
                  {category.options.map((option) => (
                    <Checkbox value={option}>{option}</Checkbox>
                  ))}
                  <Button radius="sm" color="primary" className="mb-3">
                    Go
                  </Button>
                </CheckboxGroup>
              </PopoverContent>
            </Popover>
          </div>

          {/* //Pop up div */}
          {activePopup === category.id && (
            <div className="absolute min-w-full top-20 flex z-10 flex-col bg-white p-2 gap-2">
              <div className="flex text-end justify-end">
                <HighlightOffIcon
                  onClick={() => handleClose()}
                  className="cursor-pointer"
                />
              </div>
              <Formik
                initialValues={{}}
                onSubmit={(values) => {
                  console.log({ values });
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className="flex flex-col gap-4">
                      {category.options.map((option, index) => (
                        <label key={index} className="flex gap-3 pb-1">
                          <input
                            type="checkbox"
                            value={option}
                            onChange={(e) =>
                              setFieldValue(option, e.target.checked)
                            }
                            // checked={selectedOptions.includes(option)}
                            //   onchange={handleCheckboxChange}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-3 bg-customSearchblue text-white rounded-lg w-full"
                    >
                      Search
                    </button>
                  </Form>
                )}
              </Formik>
              {/* <form action="">
                <div className="flex flex-col gap-4">
                  {category.options.map((option, index) => (
                    <label key={index} className="flex gap-3 pb-1">
                      <input
                        type="checkbox"
                        value={option}
                        // checked={selectedOptions.includes(option)}
                        //   onchange={handleCheckboxChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                <button className="px-4 py-3 bg-customSearchblue text-white rounded-lg w-full">
                  Search
                </button>
              </form> */}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default ArtisanService;
