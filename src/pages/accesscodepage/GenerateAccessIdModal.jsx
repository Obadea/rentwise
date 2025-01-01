import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Form,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { wisemenWiselist } from "../../utils/endpoint";
import { useNavigate } from "react-router-dom";

const GenerateAccessIdModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);
  const [action, setAction] = React.useState(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: wisemenWiselist,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      navigate("/Rent-affordability-calculator");
      console.log(data);
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
    <>
      <Button
        onPress={onOpen}
        variant="bordered"
        startContent={<MailOutlineIcon className="text-customNameBlack" />}
        className=" flex-1 flex border justify-center px-5 items-center cursor-pointer gap-3 border-customBlackShade p-2 text-customStreetcolor font-normal text-base"
      >
        Generate Access ID
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Generate Access ID
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full space-y-8 pb-4"
                  validationBehavior="native"
                  onReset={() => setAction("reset")}
                  onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(
                      new FormData(e.currentTarget)
                    );

                    setAction(`submit ${JSON.stringify(data)}`);
                    setIsLoading(true);
                    mutation.mutate(data);
                  }}
                >
                  <Input
                    isRequired
                    errorMessage="Please enter a your name"
                    label="Name"
                    labelPlacement="outside"
                    name="fullName"
                    placeholder="Enter your name"
                    type="text"
                    isDisabled={isLoading}
                  />
                  <Select
                    label="Information"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    name="info"
                    isDisabled={isLoading}
                  >
                    <SelectItem key="Property Owner">Property Owner</SelectItem>
                    <SelectItem key="Agent">Agent</SelectItem>
                  </Select>
                  <Input
                    isRequired
                    errorMessage="Please enter a valid number"
                    label="Phone"
                    labelPlacement="outside"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    type="number"
                    isDisabled={isLoading}
                  />
                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    isDisabled={isLoading}
                  />

                  <Button
                    type="submit"
                    className=" w-full "
                    color="primary"
                    isLoading={isLoading}
                  >
                    Generate ID
                  </Button>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default GenerateAccessIdModal;
