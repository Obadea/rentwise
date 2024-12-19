import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Input,
  Skeleton,
  Chip,
} from "@nextui-org/react";

import binoculars from "../../../assets/binoculars.png";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import {
  houseHoldIncome,
  propertyRecommendation,
} from "../../../utils/endpoint";
import { toNaira } from "../../../utils/helperFunction";
import { toast } from "react-toastify";
import { SvgActiveIcon } from "../../../utils/SvgIcons";

const ModalContent1 = ({ onClose, handleContentChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image draggable={false} src={binoculars} className="mt-10" />
      <div className="text-center mt-8 text-customStreetcolor">
        <h3 className="font-bold text-2xl mb-2 px-10 text-black">
          Search better with Household Income
        </h3>
        <p>
          Max Annual Rent = 3 * Monthly household income [The household income
          rule]
        </p>
        <p>
          Household income is the total amount of money earned by all members of
          a household, typically from wages, salaries, investments, and other
          sources
        </p>
        <p className="font-bold my-2 text-black">
          How to Calculate Monthly Household Income
        </p>
        <p>Add up all sources of income, such as:</p>
        <p>1. Job Earnings (salary, wages)</p>
        <p>2. Business Income (if you own a business)</p>
        <p>3. Investment Income (like interest or dividends)</p>
      </div>
      <div className="flex gap-2 mt-9 mb-6">
        <Button
          radius="sm"
          color="primary"
          className="lg:w-[200px]"
          onPress={() => {
            handleContentChange?.("content2");
          }}
        >
          Continue Search
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          color="primary"
          className="lg:w-[200px] "
          onPress={onClose}
        >
          Exit Advanced Search
        </Button>
      </div>
    </div>
  );
};

const ModalContent2 = ({ onClose, handleContentChange, formik, amount }) => {
  const handleInomeSubmit = () => {
    formik?.handleSubmit();
  };
  return (
    <div>
      <h3 className="font-bold text-2xl mb-4 mt-14">Improve search</h3>
      <p className="text-customgray2 text-[13px] mb-9 pr-8">
        Enter requested details to help us provide better search results for
        your optimized results.
      </p>
      <div className="flex items-center justify-center mb-6">
        <Input
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">₦</span>
            </div>
          }
          label="Monthly income I"
          labelPlacement="outside"
          variant="bordered"
          className="placeholder:text-customgray2 "
          placeholder="Enter in NGN"
          type="number"
          name="monthly_income_I"
          onChange={formik.handleChange}
          value={formik.values.monthly_income_I}
        />
        <AddIcon className="text-customgray2" />
        <Input
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">₦</span>
            </div>
          }
          label="Monthly income II"
          labelPlacement="outside"
          variant="bordered"
          className="placeholder:text-customgray2"
          placeholder="Enter in NGN"
          type="number"
          name="monthly_income_II"
          onChange={formik.handleChange}
          value={formik.values.monthly_income_II}
        />
        <AddIcon className="text-customgray2" />
        <Input
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">₦</span>
            </div>
          }
          label="Others (monthly)"
          labelPlacement="outside"
          variant="bordered"
          className="placeholder:text-customgray2 placeholder:text-[15px]"
          placeholder="Enter in NGN"
          type="number"
          name="other_income"
          onChange={formik.handleChange}
          value={formik.values.other_income}
        />
      </div>
      <div className="flex gap-2 my-9 items-center justify-center">
        <Button
          radius="sm"
          color="primary"
          className="lg:w-[200px]"
          onPress={() => {
            // if (amount?.max_annual_rent) {
            handleContentChange?.("content3");
            // }
            handleInomeSubmit();
          }}
        >
          Next
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          color="primary"
          className="lg:w-[200px] "
          onPress={onClose}
        >
          Exit Advanced Search
        </Button>
      </div>
    </div>
  );
};

const ModalContent3 = ({ onClose, handleContentChange, amount }) => {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-4 mt-14">Improve search</h3>
      <p className="text-customgray2 text-[13px] mb-6 pr-8">
        Total monthly household income
      </p>
      {amount?.max_annual_rent ? (
        <h1 className="text-customaccent text-3xl font-bold text-center mb-6">
          {/* {`NGN${
          amount?.max_annual_rent ? (
            toNaira(Number(amount?.max_annual_rent))
          ) : (
            <Skeleton className="h-10 w-16" />
          )
        }`} */}
          {`${toNaira(Number(amount?.max_annual_rent))}`}
        </h1>
      ) : (
        <Skeleton className="h-10 w-[60%] m-auto my-6 rounded-lg" />
      )}
      <p className="text-customgray2 text-[13px] pr-8">
        Continued search based on calculated household income. Would you love to
        continue?{" "}
      </p>
      <div className="flex gap-2 my-9 items-center justify-center">
        <Button
          radius="sm"
          color="primary"
          className="lg:w-[200px]"
          // onPress={() => {
          //   handleContentChange?.('content3');
          // }}
          onPress={onClose}
        >
          Continue Search
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          color="primary"
          className="lg:w-[200px] "
          onPress={onClose}
        >
          Ignore Household Income
        </Button>
      </div>
    </div>
  );
};

const AdvanceSearchModal = ({
  initialData,
  setRenderProperty,
  refetchInitalData,
}) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [amount, setAmount] = useState(null);
  // const [recommededValue, setRecommendedValue] = useState(null);
  const handleContentChange = (content) => {
    setCurrentContent(content);
  };

  const [currentContent, setCurrentContent] = useState(
    <ModalContent1
      onClose={onClose}
      handleContentChange={handleContentChange}
    />
  ); // State to track current content

  const mutation = useMutation({
    mutationFn: houseHoldIncome,
    onSuccess: async (data) => {
      // console.log(data, amount);
      setAmount(data);
      mutationValue.mutate(amount?.max_annual_rent);
    },
    onError: async (err) => {
      toast("Error Calulating Income");
    },
  });

  const mutationValue = useMutation({
    mutationFn: propertyRecommendation,
    onSuccess: async (data) => {
      // console.log(data, amount);
      // setAmount(data);
      setRenderProperty(data?.recommendations);
    },
    onError: async (err) => {
      console.log("error getting calulation");
      toast("Error Calulating Income");
    },
  });

  useEffect(() => {
    if (amount) {
      mutationValue.mutate(amount?.max_annual_rent);
    } else {
      handleContentChange(
        <ModalContent1
          onClose={onClose}
          handleContentChange={handleContentChange}
        />
      );
    }
  }, [amount]);

  const formik = useFormik({
    initialValues: {
      monthly_income_I: null,
      monthly_income_II: null,
      other_income: null,
    },
    onSubmit: (values, { resetForm }) => {
      if (values) {
        // console.log(values);
        mutation.mutate(values);
      }
      resetForm();
    },
  });

  return (
    <>
      <div className="flex items-end gap-3">
        <Button
          onPress={() => {
            onOpen();
          }}
          color="primary"
          className="py-[27px]"
        >
          Advance Search
        </Button>
        {amount ? (
          <Chip
            color="success"
            startContent={<SvgActiveIcon />}
            variant="faded"
            onClose={() => {
              setRenderProperty(initialData?.properties);
              refetchInitalData?.();
              setAmount(null);
              handleContentChange(
                <ModalContent1
                  onClose={onClose}
                  handleContentChange={handleContentChange}
                />
              );
            }}
          >
            Active
          </Chip>
        ) : (
          ""
        )}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {currentContent === "content2" ? (
                  <ModalContent2
                    onClose={onClose}
                    handleContentChange={handleContentChange}
                    formik={formik}
                    amount={amount}
                  />
                ) : currentContent === "content3" ? (
                  <ModalContent3
                    onClose={onClose}
                    handleContentChange={handleContentChange}
                    amount={amount}
                  />
                ) : (
                  currentContent
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdvanceSearchModal;
