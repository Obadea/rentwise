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
  Input,
  Textarea,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { scheduleVideoShortlet } from "../../utils/endpoint";

const VideoChatShortletModal = ({ shortletID }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);
  const [action, setAction] = React.useState(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: scheduleVideoShortlet, //to add
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      window.open(data?.calendlyLink, "_blank");
      // console.log(data);
      onOpen();
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
      <Button onPress={onOpen} variant="bordered" className="w-full">
        Video Chat Our Agent
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
                Video Chat Our Agent
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full lg:space-y-7 space-y-3 pb-4"
                  validationBehavior="native"
                  onReset={() => setAction("reset")}
                  onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(
                      new FormData(e.currentTarget)
                    );

                    setAction(`submit ${JSON.stringify(data)}`);
                    setIsLoading(true);
                    mutation.mutate({ shortletID, userData: data });
                  }}
                >
                  <Input
                    isRequired
                    errorMessage="Please enter a your name"
                    label="Name"
                    labelPlacement="outside"
                    name="userName"
                    placeholder="Enter your name"
                    type="text"
                    isDisabled={isLoading}
                    variant="bordered"
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
                    variant="bordered"
                  />
                  <Input
                    isRequired
                    errorMessage="Please enter a valid number"
                    label="Phone"
                    labelPlacement="outside"
                    name="phone"
                    placeholder="Enter your phone number"
                    type="number"
                    isDisabled={isLoading}
                    variant="bordered"
                  />

                  <Textarea
                    isRequired
                    isClearable
                    name="message"
                    minRows={5}
                    label="Review"
                    labelPlacement="outside"
                    placeholder="Write a message..."
                    isDisabled={isLoading}
                    variant="bordered"
                  />

                  <Button
                    type="submit"
                    className=" w-full "
                    color="primary"
                    isLoading={isLoading}
                  >
                    Submit a video request
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

export default VideoChatShortletModal;
