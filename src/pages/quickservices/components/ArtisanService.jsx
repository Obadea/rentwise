import React, { useState } from "react";

const categories = [
  {
    id: 1,
    name: "AC / Refrigeration Services",
    image: "",
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
    image: "",
    options: ["", "", "", ""],
  },
  {
    id: 3,
    name: "Carpentry Services",
    image: "",
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
    image: "",
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
    image: "",
    options: ["CCTV Install / Repair", "DSTV Install / Repair", "Others"],
  },
  {
    id: 6,
    name: "Electrical / Inverter Services",
    image: "",
    options: ["Electrical Installations", "Electrical Repairs", "Others"],
  },
  {
    id: 7,
    name: "Generator Services",
    image: "",
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
    image: "",
    options: ["Car", "Van", "Truck", "Others"],
  },
  {
    id: 9,
    name: "Home Interior Fittings",
    image: "",
    options: [
      "Window Blinds Install / Repair",
      "Curtains Installation",
      "Others",
    ],
  },
  {
    id: 10,
    name: "Painter / Screeder / Wallpaper",
    image: "",
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
    image: "",
    options: [
      "Plumbing Repair/Install",
      "Drain/Leaks Fixing",
      "Pumping Machine",
      "Toilet Repairs",
      "Water Treatment/Tank Washing",
      "Others",
    ],
  },
  { id: 12, name: "Welder Services", image: "", options: ["", "", "", ""] },
  {
    id: 1,
    name: "A.C Gas Repair and Installation",
    image: "",
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
  const [activePopup, setActivePopup] = useState(false);
  const [activeSelection, setActiveSelection] = useState({});

  // const handlePopup() => {
  //     setActivePopup(!activePopup)
  // }
  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col bg-addpropertybg">
          <div className="flex flex-row gap-4 justify-between items-center">
            <img src={category.imageUrl} alt={category.name} />{" "}
            {/* Add the correct src here */}
            <h4 className="font-bold text-base text-customdark">
              {category.name}
            </h4>
          </div>
          <div>
            <p className="text-customSearchblue">Select</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ArtisanService;
