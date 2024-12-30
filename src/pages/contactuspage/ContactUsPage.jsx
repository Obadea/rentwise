// import React from "react";
// import Header from "../../components/Header";
// import Breadcrumb from "../../components/BreadCrumb";
// import Footer from "../../components/Footer";
// import imageInbackground from "../../assets/interior-workspace_inspired_by_technology.jpg";
// import {
//   Button,
//   Checkbox,
//   CheckboxGroup,
//   Form,
//   Input,
//   Link,
//   Textarea,
// } from "@nextui-org/react";
// import { toast } from "react-toastify";
// import { useMutation } from "@tanstack/react-query";
// import { contactUs } from "../../utils/endpoint";
// // import { Checkbox } from "@mui/material";

// function ContactUsPage() {
//   const [action, setAction] = React.useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);

//   const mutation = useMutation({
//     mutationFn: contactUs,
//     onSuccess: async (data) => {
//       setIsLoading(false);
//       console.log(data);
//       toast("Sent Successful", { type: "success", draggable: true });
//     },

//     onError: async (err) => {
//       setIsLoading(false);
//       toast(
//         "error sending message" ? err?.response?.data.message : err.message,
//         {
//           type: "error",
//           draggable: true,
//         }
//       );
//       console.log(err);
//     },
//   });

//   return (
//     <div className="bg-textcolor">
//       <Header newclassName="sticky" className="bg-textcolor" />
//       <div
//         className={` px-4 bg-cover bg-center h-[240px] flex items-end pb-12 lg:px-24`}
//         style={{
//           backgroundImage: `url(${imageInbackground})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "240px",
//         }}
//       >
//         <h3 className="font-bold text-white text-3xl">Contact Us</h3>
//       </div>
//       <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[10%] lg:items-start py-12 pb-6 px-2 lg:px-20 max-w-7xl mx-auto">
//         <div className="flex flex-[3] flex-col  lg:gap-10 lg:py-4 lg:px-8 bg-white ">
//           <h4 className="font-normal text-lg text-customStreetcolor">
//             Our support team is available around the clock to address any
//             concerns or queries you may have.
//           </h4>

//           <Form
//             className="w-full  flex flex-col gap-4 mt-5"
//             validationBehavior="native"
//             onReset={() => setAction("reset")}
//             onSubmit={(e) => {
//               e.preventDefault();
//               let data = Object.fromEntries(new FormData(e.currentTarget));
//               setAction(`submit ${JSON.stringify(data)}`);
//               setIsLoading(true);
//               mutation.mutate(data);
//               console.log(data);
//               setAction("reset");
//             }}
//           >
//             <div className="flex w-full gap-4">
//               <Input
//                 isRequired
//                 errorMessage="Please enter your first name"
//                 label="First Name"
//                 labelPlacement="outside"
//                 name="firstName"
//                 placeholder="Enter your name"
//                 type="text"
//                 isDisabled={isLoading}
//                 className=""
//                 variant="bordered"
//                 classNames={{ label: "text-[#222222] font-bold text-sm" }}
//               />
//               <Input
//                 isRequired
//                 errorMessage="Please enter your last name"
//                 label="Last Name"
//                 labelPlacement="outside"
//                 name="lastName"
//                 placeholder="Enter your name"
//                 type="text"
//                 isDisabled={isLoading}
//                 className=""
//                 variant="bordered"
//                 classNames={{ label: "text-[#222222] font-bold text-sm" }}
//               />
//             </div>
//             <Input
//               isRequired
//               errorMessage="Please enter a valid email"
//               label="Email"
//               labelPlacement="outside"
//               name="email"
//               placeholder="Enter your email"
//               type="email"
//               isDisabled={isLoading}
//               className=""
//               variant="bordered"
//               classNames={{ label: "text-[#222222] font-bold text-sm" }}
//             />
//             <Textarea
//               isRequired
//               isClearable
//               name="message"
//               minRows={5}
//               label="Message"
//               labelPlacement="outside"
//               placeholder="Write a message..."
//               isDisabled={isLoading}
//               variant="bordered"
//               classNames={{ label: "text-[#222222] font-bold text-sm" }}
//             />
//             <div className="flex flex-col gap-2">
//               <h4 className="text-[#222222] font-bold text-sm">
//                 GDPR Agreement
//               </h4>
//               <div className="flex items-center gap-2">
//                 <Checkbox />
//                 <p className="font-normal text-sm text-customNameBlack">
//                   By sending this message, I consent to having this website
//                   store my submitted information
//                 </p>
//               </div>
//             </div>
//             <Button
//               color="primary"
//               type="submit"
//               className="w-full m-auto h-14 text-lg font-semibold"
//               isLoading={isLoading}
//             >
//               Submit Request
//             </Button>
//           </Form>
//         </div>
//         {/* Contact location */}
//         <div className="bg-white flex  flex-col items-start gap-4 lg:p-10 px-1 mt-8 lg:mt-0">
//           <h4 className="font-medium text-lg text-customdark">
//             For inquiries contact:
//           </h4>
//           <div className="flex flex-col gap-1">
//             <h4 className="font-medium text-base text-customdark">Lagos</h4>
//             <p className="font-normal text-sm text-[#666666]">
//               128 Lekki -Epe Road,{" "}
//             </p>
//             <p className="font-normal text-sm text-[#666666]">
//               Lekki Garden Phase 2, Lagos Nigeria{" "}
//             </p>
//             <p>0805-555-3655</p>
//             <p className="font-normal text-sm text-[#666666]">
//               contactwiseman@rentwise.rentals
//             </p>
//           </div>

//           <div className="flex flex-col gap-1">
//             <h4 className="font-medium text-base text-customdark">Lagos</h4>
//             <p className="font-normal text-sm text-[#666666]">
//               3 Clatus Adebu Close
//             </p>
//             <p className="font-normal text-sm text-[#666666]">
//               Fidiso Estate, Lekki-Epe road,{" "}
//             </p>
//             <p>0805-555-3655</p>
//             <p className="font-normal text-sm text-[#666666]">
//               contactwiseman@rentwise.rentals
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ContactUsPage;

import React, { useRef } from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import imageInbackground from "../../assets/interior-workspace_inspired_by_technology.jpg";
import { Button, Checkbox, Form, Input, Textarea } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { contactUs } from "../../utils/endpoint";

function ContactUsPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const mutation = useMutation({
    mutationFn: contactUs,
    onSuccess: async (data) => {
      setIsLoading(false);
      console.log(data);
      toast("Sent Successfully", { type: "success", draggable: true });

      // Clear the form
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(
        "Error sending message" ? err?.response?.data.message : err.message,
        {
          type: "error",
          draggable: true,
        }
      );
      console.log(err);
    },
  });

  return (
    <div className="bg-textcolor">
      <Header newclassName="sticky" className="bg-textcolor" />
      <div
        className={` px-4 bg-cover bg-center h-[240px] flex items-end pb-12 lg:px-24`}
        style={{
          backgroundImage: `url(${imageInbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "240px",
        }}
      >
        <h3 className="font-bold text-white text-3xl">Contact Us</h3>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[10%] lg:items-start py-12 pb-6 px-2 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-[3] flex-col  lg:gap-10 lg:py-4 lg:px-8 bg-white ">
          <h4 className="font-normal text-lg text-customStreetcolor">
            Our support team is available around the clock to address any
            concerns or queries you may have.
          </h4>

          <Form
            className="w-full  flex flex-col gap-4 mt-5"
            validationBehavior="native"
            onSubmit={(e) => {
              e.preventDefault();
              let data = Object.fromEntries(new FormData(e.currentTarget));
              setIsLoading(true);
              mutation.mutate(data);

              console.log(data);
            }}
          >
            <div className="flex w-full gap-4">
              <Input
                isRequired
                errorMessage="Please enter your first name"
                label="First Name"
                labelPlacement="outside"
                name="firstName"
                placeholder="Enter your name"
                type="text"
                isDisabled={isLoading}
                variant="bordered"
                classNames={{ label: "text-[#222222] font-bold text-sm" }}
                value={userData.firstName}
                onChange={(e) => {
                  setUserData({ ...userData, firstName: e.target.value });
                }}
              />
              <Input
                isRequired
                errorMessage="Please enter your last name"
                label="Last Name"
                labelPlacement="outside"
                name="lastName"
                placeholder="Enter your name"
                type="text"
                isDisabled={isLoading}
                variant="bordered"
                classNames={{ label: "text-[#222222] font-bold text-sm" }}
                value={userData.lastName}
                onChange={(e) => {
                  setUserData({ ...userData, lastName: e.target.value });
                }}
              />
            </div>
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              isDisabled={isLoading}
              variant="bordered"
              classNames={{ label: "text-[#222222] font-bold text-sm" }}
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
            <Textarea
              isRequired
              isClearable
              name="message"
              minRows={5}
              label="Message"
              labelPlacement="outside"
              placeholder="Write a message..."
              isDisabled={isLoading}
              variant="bordered"
              classNames={{ label: "text-[#222222] font-bold text-sm" }}
              value={userData.message}
              onChange={(e) => {
                setUserData({ ...userData, message: e.target.value });
              }}
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-[#222222] font-bold text-sm">
                GDPR Agreement
              </h4>
              <div className="flex items-center gap-2">
                <Checkbox name="GDPRAgreement" />
                <p className="font-normal text-sm text-customNameBlack">
                  By sending this message, I consent to having this website
                  store my submitted information
                </p>
              </div>
            </div>
            <Button
              color="primary"
              type="submit"
              className="w-full m-auto h-14 text-lg font-semibold"
              isLoading={isLoading}
            >
              Submit Request
            </Button>
          </Form>
        </div>
        <div className="bg-white flex  flex-col items-start gap-4 lg:p-10 px-1 mt-8 lg:mt-0">
          <h4 className="font-medium text-lg text-customdark">
            For inquiries contact:
          </h4>
          <div className="flex flex-col gap-1">
            <h4 className="font-medium text-base text-customdark">Lagos</h4>
            <p className="font-normal text-sm text-[#666666]">
              128 Lekki -Epe Road,{" "}
            </p>
            <p className="font-normal text-sm text-[#666666]">
              Lekki Garden Phase 2, Lagos Nigeria{" "}
            </p>

            <a
              href="https://wa.me/08055553655"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>0805-555-3655</p>
            </a>
            <p className="font-normal text-sm text-[#666666]">
              contactwiseman@rentwise.rentals
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-medium text-base text-customdark">Lagos</h4>
            <p className="font-normal text-sm text-[#666666]">
              3 Clatus Adebu Close
            </p>
            <p className="font-normal text-sm text-[#666666]">
              Fidiso Estate, Lekki-Epe road,{" "}
            </p>
            <a
              href="https://wa.me/08055553655"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>0805-555-3655</p>
            </a>{" "}
            <p className="font-normal text-sm text-[#666666]">
              contactwiseman@rentwise.rentals
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
