import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
  Image,
} from "@nextui-org/react";
import { SvgFullViewIcon } from "../utils/SvgIcons";

const ViewFullImg = ({ img }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="Full Image" showArrow={true}>
        <Button
          isIconOnly
          size="sm"
          radius="full"
          className=" bg-transparent hover:bg-default "
          onPress={onOpen}
        >
          <SvgFullViewIcon />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        radius="none"
        size="4xl"
        placement="center"
        classNames={{
          closeButton: " text-black bg-black-200 z-[40] backdrop-blur-md",
        }}
      >
        <ModalContent className="bg-transparent shadow-none">
          {(onClose) => (
            <>
              <ModalBody className="p-0 bg-transparent flex items-center justify-center">
                <Image
                  src={img}
                  width="100%"
                  radius="none"
                  className="w-[90vw]"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewFullImg;
