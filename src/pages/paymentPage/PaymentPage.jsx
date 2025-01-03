import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import {
  Button,
  Checkbox,
  Form,
  Image,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Footer from "../../components/Footer";
import SimilarListing from "../propertyPage/components/SimilarListing";
import { useLocation, useNavigate } from "react-router-dom";
import { toNaira } from "../../utils/helperFunction";
import { useAuth } from "../../utils/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { payForShortlet } from "../../utils/endpoint";

const PaymentPage = () => {
  const location = useLocation();
  const { propertyData, selectedDuration, propertyID } = location.state || {};
  const [durationNumber, setDurationNumber] = useState("1");
  const [total, setTotal] = useState(0); // State for total amount
  const navigate = useNavigate();
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const { user, token } = useAuth();
  const [defaultEmail, setDefaultEmail] = useState(user?.email);

  const durationNumberArray = Array.from({ length: 24 }, (_, i) =>
    (i + 1).toString()
  );

  useEffect(() => {
    setDefaultEmail(user?.email);
  }, [user, token]);

  useEffect(() => {
    if (!token && !propertyData) {
      navigate("/shortlet");
    }
  }, []);

  useEffect(() => {
    if (propertyData) {
      calculateTotal(); // Calculate total when propertyData is available
    }
  }, [durationNumber, selectedDuration, propertyData]);

  const calculateTotal = () => {
    let pricePerUnit = 0;
    if (selectedDuration === "Hour") {
      pricePerUnit = propertyData?.hourlyPrice || 0;
    } else if (selectedDuration === "Day") {
      pricePerUnit = propertyData?.dailyPrice || 0;
    } else if (selectedDuration === "Week") {
      pricePerUnit = propertyData?.weeklyPrice || 0;
    } else if (selectedDuration === "Month") {
      pricePerUnit = propertyData?.monthlyPrice || 0;
    }

    const calculatedTotal = pricePerUnit * Number(durationNumber);
    setTotal(calculatedTotal);
  };

  const handleSelectionChange = (e) => {
    setDurationNumber(e.target.value);
  };

  const mutation = useMutation({
    mutationFn: payForShortlet,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      // console.log(data);
      window.open(data?.paymentUrl, "_blank");
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.response?.data.message, {
        type: "error",
        draggable: true,
      });
      console.log(err);
    },
  });

  return (
    <div>
      <Header newclassName="sticky" />
      <div className="max-w-7xl mx-auto pt-10">
        <div className="px-10">
          <Breadcrumb />
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-24 gap-4 grid-rows-2 lg:grid-rows-1 lg:px-10">
          <div className="mt-10 p-6 lg:p-0">
            <p className="text-2xl font-bold mb-11">Payment Overview</p>
            <Image
              src={propertyData?.shortletsImages[6]}
              className="lg:w-[84%] w-full"
              isZoomed
            />
            <div className=" lg:w-[84%] w-full">
              <p className="text-right mt-5">
                Shortlet ID: {propertyData?.shortletId}
              </p>
              <p className="text-customStreetcolor font-bold mt-5">
                Description:
              </p>
              <p className="mt-2 text-customStreetcolor">
                {propertyData?.description}
              </p>
            </div>
          </div>
          <div className="mt-10 lg:p-0 p-6">
            <p className="text-2xl font-bold mb-11">Payment Method</p>
            <div className="grid grid-cols-2 grid-rows-5 lg:w-[84%] w-full  text-xs lg:text-sm">
              <p className="text-customStreetcolor truncate">
                Name of shortlet apartment:
              </p>
              <p className="text-customStreetcolor text-right capitalize">
                {propertyData?.name}
              </p>
              <p className="text-customStreetcolor">Duration:</p>
              <p className="text-customStreetcolor text-right ">
                {durationNumber} {selectedDuration}(s)
              </p>
              <div className="flex items-center gap-2">
                <p className="text-customStreetcolor text-nowrap">Amount x </p>
                <Select
                  aria-label="select duration num"
                  selectedKeys={[durationNumber]}
                  onChange={handleSelectionChange}
                  disallowEmptySelection={true}
                  className="max-w-20"
                  radius="none"
                  variant="bordered"
                >
                  {durationNumberArray.map((item) => (
                    <SelectItem key={item}>{item}</SelectItem>
                  ))}
                </Select>
              </div>
              <p className="text-customStreetcolor text-right">
                {toNaira(total)}
              </p>
              <p className="text-customStreetcolor">VAT</p>
              <p className="text-customStreetcolor text-right">₦0.00 </p>
              <p className="text-customStreetcolor font-bold text-lg">TOTAL</p>
              <p className="text-customStreetcolor text-right text-lg">
                {toNaira(total)}
              </p>
            </div>
            <div className=" lg:w-[84%] w-full mt-10 ">
              <Form
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));
                  setAction(`submit ${JSON.stringify(data)}`);
                  setIsLoading(true);
                  mutation.mutate({
                    shortletID: propertyID,
                    token,
                    userData: {
                      fullName: data.fullName,
                      email: data.email,
                      duration: `Per ${selectedDuration}`,
                      quantity: Number(durationNumber),
                    },
                  });

                  // console.log({
                  //   fullName: data.fullName,
                  //   email: data.email,
                  //   duration: `Per ${selectedDuration}`,
                  //   quantity: Number(durationNumber),
                  //   propertyid: propertyID,
                  // });
                }}
              >
                <Input
                  type="text"
                  variant="bordered"
                  label="Full name"
                  placeholder="enter full name"
                  labelPlacement="outside"
                  className="mb-10"
                  name="fullName"
                />
                <Input
                  type="email"
                  variant="bordered"
                  label="Email"
                  defaultValue={defaultEmail}
                  placeholder="Enter a active email"
                  labelPlacement="outside"
                  name="email"
                />
                <p className="my-6">
                  <Checkbox defaultSelected>
                    Save my details for future transactions
                  </Checkbox>
                </p>
                <Button
                  className="w-full"
                  color="primary"
                  type="submit"
                  isLoading={isLoading}
                >
                  Proceed
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <SimilarListing />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
