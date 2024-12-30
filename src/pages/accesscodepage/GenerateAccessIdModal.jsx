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

const GenerateAccessIdModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);
  const [action, setAction] = React.useState(null);

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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
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
                  }}
                >
                  <Input
                    isRequired
                    errorMessage="Please enter a your name"
                    label="Name"
                    labelPlacement="outside"
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    isDisabled={isLoading}
                  />
                  <Select
                    label="Information"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                  >
                    <SelectItem key="Property Owner">Property Owner</SelectItem>
                    <SelectItem key="Agent">Agent</SelectItem>
                  </Select>
                  <Input
                    isRequired
                    errorMessage="Please enter a valid number"
                    label="Phone"
                    labelPlacement="outside"
                    name="phone"
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

                  <Button type="submit" className=" w-full " color="primary">
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
