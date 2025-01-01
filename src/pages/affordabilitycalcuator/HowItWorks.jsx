import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useDraggable,
} from "@nextui-org/react";
const HowItWorks = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const targetRef = React.useRef(null);
  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  const navigate = useNavigate();
  return (
    <>
      <Button
        className=" text-customwhite h-12"
        radius="md"
        color="primary"
        variant="bordered"
        onPress={onOpen}
      >
        How it works
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="3xl"
        ref={targetRef}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                How it works
              </ModalHeader>
              <ModalBody>
                <iframe
                  className="rounded-xl"
                  width="100%"
                  height="470"
                  src="https://www.youtube.com/embed/qJcq7HYaSwE?si=nLeBr21DirmA3nxK"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => navigate("/open-saver-account")}
                >
                  Open Rent-saver Account
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HowItWorks;
