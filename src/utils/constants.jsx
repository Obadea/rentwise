import palor1 from "../assets/palor1.jpg";
import palor2 from "../assets/palor2.jpg";
import palor3 from "../assets/palor3.jpg";
import palor4 from "../assets/palor4.jpg";
import palor5 from "../assets/palor5.jpg";
import palor6 from "../assets/palor6.jpg";
import palor7 from "../assets/palor7.jpg";

import rental1 from "../assets/rentalImg/image 21.png";
import rental2 from "../assets/rentalImg/image 12.png";
import rental3 from "../assets/rentalImg/image 14.png";
import rental4 from "../assets/rentalImg/image 27.png";
import rental5 from "../assets/rentalImg/image 25.png";
import rental6 from "../assets/rentalImg/image 10.png";
import rental7 from "../assets/rentalImg/image 11.png";
import rental8 from "../assets/rentalImg/image 26.png";
import rental9 from "../assets/rentalImg/image 19.png";
import rental10 from "../assets/rentalImg/image 20.png";
import rental11 from "../assets/rentalImg/image 22.png";
import rental12 from "../assets/rentalImg/image 24.png";
import rental9f from "../assets/rentalImg/image 17.png";
import {
  SvgCalenderNavIcon,
  SvgDashboardIcon,
  SvgNotiificationIcon,
  SvgProductsIcon,
  SvgReportIcon,
  SvgSettingsIcon,
  SvgSupplyNavIcon,
  SvgSupportIcon,
} from "./SvgIcons";
export const searchPageDropDown = [
  {
    title: "Price",
    select: ["100,000", "300,000", "500,00", "1,000,000"],
  },
  {
    title: "Bathrooms",
    select: ["2", "3", "4+"],
  },
  {
    title: "Bedrooms",
    select: ["2", "3", "4", "5+"],
  },
  {
    title: "Type",
    select: ["Apartment", "Duplex", "Bungalow", "Townhouse", "Penthouse"],
  },
  {
    title: "Lifestyle",
    select: [
      "Urban Living",
      "Suburban Living",
      "Rural Living",
      "Luxury Living",
      "Eco-Friendly Living",
    ],
  },
  {
    title: "More",
    select: ["Property Size", "Packing Availability", "Furnising Level"],
  },
];

export const propertyData = [
  {
    id: 1,
    img: palor1,
    title: "Ocean Breeze Estate",
    address: "22, Lekki Phase 1, Lagos.",
    bedroom: 4,
    bathroom: 3,
    sittingroom: 2,
    amount: 5000000,
  },
  {
    id: 2,
    img: palor2,
    title: "Sunrise Heights",
    address: "10, Victoria Island, Lagos.",
    bedroom: 3,
    bathroom: 2,
    sittingroom: 1,
    amount: 4500000,
  },
  {
    id: 3,
    img: palor3,
    title: "Harmony Gardens",
    address: "18, Garki Street, Abuja.",
    bedroom: 5,
    bathroom: 4,
    sittingroom: 3,
    amount: 7500000,
  },
  {
    id: 4,
    img: palor4,
    title: "Pinnacle Residences",
    address: "6, Wuse II, Abuja.",
    bedroom: 3,
    bathroom: 2,
    sittingroom: 2,
    amount: 6000000,
  },
  {
    id: 5,
    img: palor5,
    title: "Green Valley Estate",
    address: "12, Oluyole Estate, Ibadan.",
    bedroom: 4,
    bathroom: 3,
    sittingroom: 2,
    amount: 3500000,
  },
  {
    id: 6,
    img: palor6,
    title: "Royal Court",
    address: "9, Maitama District, Abuja.",
    bedroom: 6,
    bathroom: 5,
    sittingroom: 4,
    amount: 12000000,
  },
  {
    id: 7,
    img: palor1,
    title: "Golden Gate Apartments",
    address: "25, Maryland Crescent, Lagos.",
    bedroom: 2,
    bathroom: 1,
    sittingroom: 1,
    amount: 3000000,
  },
  {
    id: 8,
    img: palor1,
    title: "Silver Crest Villas",
    address: "15, Gwarinpa Estate, Abuja.",
    bedroom: 4,
    bathroom: 3,
    sittingroom: 2,
    amount: 8000000,
  },
  {
    id: 9,
    img: palor7,
    title: "Serenity Place",
    address: "5, Akobo Street, Ibadan.",
    bedroom: 3,
    bathroom: 2,
    sittingroom: 1,
    amount: 2500000,
  },
  {
    id: 10,
    img: palor1,
    title: "Tranquil Meadows",
    address: "31, Banana Island, Lagos.",
    bedroom: 5,
    bathroom: 4,
    sittingroom: 3,
    amount: 15000000,
  },
  {
    id: 11,
    img: palor1,
    title: "Cedarwood Court",
    address: "8, Independence Layout, Enugu.",
    bedroom: 3,
    bathroom: 2,
    sittingroom: 1,
    amount: 4000000,
  },
  {
    id: 12,
    img: palor1,
    title: "Amber Hills Estate",
    address: "19, Trans Amadi, Port Harcourt.",
    bedroom: 4,
    bathroom: 3,
    sittingroom: 2,
    amount: 6500000,
  },
];

export const sortMethods = [
  { key: "alphabetical", label: "Alphabetical Order (A-Z)" },
  { key: "reverseAlphabetical", label: "Reverse Alphabetical Order (Z-A)" },
  { key: "numericalAsc", label: "Numerical Order (Low to High)" },
  { key: "numericalDesc", label: "Numerical Order (High to Low)" },
  { key: "dateAsc", label: "Date (Oldest to Newest)" },
  { key: "dateDesc", label: "Date (Newest to Oldest)" },
  { key: "custom", label: "Custom Order" },
  { key: "lengthAsc", label: "By Length (Short to Long)" },
  { key: "lengthDesc", label: "By Length (Long to Short)" },
  { key: "random", label: "Random Order" },
  { key: "priority", label: "By Priority" },
  { key: "boolean", label: "Boolean Value (True/False)" },
  { key: "frequency", label: "By Frequency of Occurrence" },
];

export const propertyTitles = [
  "Title",
  "Price",
  "Property Type",
  "Address",
  "City",
  "State/county",
  "Zip/Postal Code",
  "Country",
  "Property Size",
  "Property ID",
  "Bedrooms",
  "Bathroom",
  "Garage",
  "Air Conditioning",
  "Barbeque",
  "Dryer",
  "Gym",
  "Laundry",
  "Lawn",
  "Microwave",
  "Outdoor Shower",
  "Refrigerator",
  "TV Cable",
  "Swimming Pool",
  "WiFi",
  "Washer",
  "Window Covering",
  "System rating",
];

export const commercialArray = [
  { label: "Office", key: "office" },
  { label: "Shop", key: "shop" },
  { label: "Short let", key: "shortlet" },
  { label: "Event centre", key: "eventcentre" },
];

export const residentArray = [
  { label: "Apartment", key: "apartment" },
  { label: "Single family home", key: "singlefamilyhome" },
  { label: "Multi family home", key: "multifamilyhome" },
];

export const majorCitiesInNigeria = [
  { label: "Lagos", value: "lagos" },
  { label: "Abuja", value: "abuja" },
  { label: "Port Harcourt", value: "portharcourt" },
  { label: "Kano", value: "kano" },
  { label: "Ibadan", value: "ibadan" },
  { label: "Benin City", value: "benincity" },
  { label: "Kaduna", value: "kaduna" },
  { label: "Enugu", value: "enugu" },
  { label: "Jos", value: "jos" },
  { label: "Abeokuta", value: "abeokuta" },
  { label: "Ilorin", value: "ilorin" },
  { label: "Owerri", value: "owerri" },
  { label: "Warri", value: "warri" },
  { label: "Onitsha", value: "onitsha" },
  { label: "Calabar", value: "calabar" },
  { label: "Maiduguri", value: "maiduguri" },
  { label: "Uyo", value: "uyo" },
  { label: "Bauchi", value: "bauchi" },
  { label: "Yola", value: "yola" },
  { label: "Sokoto", value: "sokoto" },
  { label: "Zaria", value: "zaria" },
  { label: "Minna", value: "minna" },
  { label: "Makurdi", value: "makurdi" },
  { label: "Osogbo", value: "osogbo" },
  { label: "Ekiti", value: "ekiti" },
  { label: "Akure", value: "akure" },
  { label: "Asaba", value: "asaba" },
  { label: "Katsina", value: "katsina" },
  { label: "Gombe", value: "gombe" },
  { label: "Ado Ekiti", value: "adoekiti" },
  { label: "Lokoja", value: "lokoja" },
  { label: "Abakaliki", value: "abakaliki" },
  { label: "Awka", value: "awka" },
  { label: "Jalingo", value: "jalingo" },
  { label: "Damaturu", value: "damaturu" },
  { label: "Dutse", value: "dutse" },
  { label: "Gusau", value: "gusau" },
  { label: "Yenagoa", value: "yenagoa" },
  { value: "New York", label: "New York" },
];

export const propertyPageDropDown = [
  {
    title: "Price",
    select: ["100,000", "300,000", "500,00", "1,000,000"],
  },
  {
    title: "Bathrooms",
    select: ["2", "3", "4+"],
  },
  {
    title: "Bedrooms",
    select: ["2", "3", "4", "5+"],
  },
  {
    title: "Type",
    select: ["Apartment", "Duplex", "Bungalow", "Townhouse", "Penthouse"],
  },
];

export const manageRentalCardData = [
  {
    title: "Property Listing Management",
    description:
      "Add, edit, and manage property listings with details descriptions, photos and rental terms",
    image: rental1, // Add your image path here
    buttonText: "Get Started",
  },
  {
    title: "Rent Collection and Tracking",
    description:
      "Set up and monitor rent collection, with reminders for tenants and real-time payment status updates",
    image: rental2,
    buttonText: "Get Started",
  },
  {
    title: "Easy eviction support",
    description:
      "Explore legal resources and expert advice for managing evictions when necessary",
    image: rental3,
    buttonText: "Get Started",
  },
  {
    title: "Tenant Screening and Verification",
    description:
      "Access tenant screening tools to verify identity, rental history, and creditworthiness",
    image: rental4,
    buttonText: "Get Started",
  },
  {
    title: " Financial Reporting and Expense Tracking",
    description:
      "View detailed reports on rent collected, expenses incurred, and net income",
    image: rental5,
    buttonText: "Get Started",
  },
  {
    title: "Smart Document Management",
    description:
      "AI categorizes and organizes all property-related documents (leases, payment receipts, maintenance records) for easy retrieval.",
    image: rental6,
    buttonText: "Get Started",
  },
  {
    title: "Maintenance Request Management",
    description:
      "Receive, track, and resolve tenant maintenance requests directly on the dashboard",
    image: rental7,
    buttonText: "Get Started",
  },
  {
    title: "Automated Renewal and Negotiation Alerts",
    description:
      "AI-driven alerts for lease renewal deadlines and rent increment opportunities based on market trends",
    image: rental8,
    buttonText: "Get Started",
  },
  {
    title: "Tenant Screening and Verification",
    description:
      "rentwise offers thorough tenant background checks, including employment verification, rental history, and credit score assessments",
    image: rental9f,
    buttonText: "Get Started",
  },
  {
    title: "Lease Agreement Management",
    description:
      "Create, store, and manage digital lease agreements with e-signature capabilities",
    image: rental9,
    buttonText: "Get Started",
  },
  {
    title: "Legal Compliance and Tenant Rights Awareness",
    description:
      "rentwise provides landlords with resources and updates on tenant rights and legal requirements in Lagos, ensuring that lease agreements comply with local laws",
    image: rental10,
    buttonText: "Get Started",
  },
  {
    title: "Tenant Communication Hub",
    description:
      "Built-in messaging system for seamless landlordtenant communication",
    image: rental11,
    buttonText: "Get Started",
  },
  {
    title: "Fair Pricing and Rent Comparisons",
    description:
      "rentwise rent comparison feature, which allows landlords to price their properties competitively based on current market trends",
    image: rental12,
    buttonText: "Get Started",
  },
];

export const rentWiseFAQs = [
  {
    title: "What is RentWise AI?",
    content:
      "RentWise AI is a smart rental platform designed to empower renters and landlords with data-driven insights. It simplifies the rental process, providing tools like the Wise-Report for informed decision-making.",
  },
  {
    title: "What is the Wise-Report?",
    content:
      "The Wise-Report is a personalized rental guide that offers:\n• Affordability recommendations based on income.\n• Neighborhood safety ratings and tenant satisfaction scores.\n• Detailed property performance history.\n• Transparency about hidden costs.",
  },
  {
    title: "How does RentWise benefit tenants?",
    content:
      "RentWise helps tenants:\n• Find affordable and suitable homes.\n• Avoid untrustworthy agents and hidden costs.\n• Make confident, data-backed rental decisions.",
  },
  {
    title: "How does RentWise benefit landlords?",
    content:
      "RentWise supports landlords by:\n• Attracting quality tenants through verified listings.\n• Reducing tenant turnover with predictive analytics.\n• Offering insights into property performance and management.",
  },
  {
    title: "Is the Wise-Report free?",
    content:
      "Access to the Wise-Report may involve a nominal fee depending on the level of detail required. Visit www.rentwise.rentals for pricing options.",
  },
  {
    title: "How accurate is the data on RentWise?",
    content:
      "RentWise uses advanced AI and reliable data sources to provide accurate, up-to-date insights. However, we recommend cross-verifying critical information independently.",
  },
  {
    title: "Can I list my property on RentWise?",
    content:
      "Yes, landlords can list their properties on RentWise to reach a wider audience of pre-screened, reliable tenants. Contact our support team for assistance.",
  },
];

export const sidenavData = [
  {
    sideTitle: "Dashboard",
    svgIcon: SvgDashboardIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Dashboard clicked"),
    notification: false,
  },
  {
    sideTitle: "Products",
    svgIcon: SvgProductsIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Products clicked"),
    notification: false,
  },
  {
    sideTitle: "Calendar",
    svgIcon: SvgCalenderNavIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Calendar clicked"),
    notification: true, // Display the notification dot
  },
  {
    sideTitle: "Suppliers",
    svgIcon: SvgSupplyNavIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Suppliers clicked"),
    notification: false,
  },
  {
    sideTitle: "Reports",
    svgIcon: SvgReportIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Reports clicked"),
    notification: false,
  },
];

export const section2 = [
  {
    sideTitle: "Notifications",
    svgIcon: SvgNotiificationIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Notifications clicked"),
    notification: true, // Display the notification dot
  },
  {
    sideTitle: "Settings",
    svgIcon: SvgSettingsIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Settings clicked"),
    notification: false,
  },
  {
    sideTitle: "Support",
    svgIcon: SvgSupportIcon, // Replace with actual SVG for the icon
    onClick: () => console.log("Support clicked"),
    notification: false,
  },
];
