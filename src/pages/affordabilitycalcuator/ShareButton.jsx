import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  useMediaQuery,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MailIcon, SvgCopyIcon, SvgCopiedIcon } from "../../utils/SvgIcons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

const ShareButton = ({ total, whatsAppFunction }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isCopied, setIsCopied] = useState(false);
  const [url, setUrl] = useState(window.location.href);
  const navigate = useNavigate();
  const { token } = useAuth();
  const [modalSize, setModalSize] = useState("xs");

  const handleCopy = () => {
    // Get the current URL
    const url = window.location.href;

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(url).then(() => {
      // Set the copied state to true
      setIsCopied(true);

      // Revert back to "Copy" after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    });
  };

  useEffect(() => {
    setUrl(window.location.href);
  }, [window.location.href, total]);

  useEffect(() => {
    const handleResize = () => {
      setModalSize(window.innerWidth <= 768 ? "md" : "xs");
    };

    handleResize(); // Initialize on first render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Button
        isIconOnly
        isDisabled={!total}
        onPress={() => {
          if (token) {
            onOpen();
          } else {
            toast("Please login to share", { type: "error" });
            navigate("/signin");
          }
        }}
      >
        <ShareIcon className="text-customStreetcolor" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={modalSize} // Change size based on the screen size
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Share</ModalHeader>
              <ModalBody>
                <p className="text-sm">Share this link via</p>

                <div className="flex gap-4  border-b border-gray-200 pb-4">
                  <div className="flex flex-col items-center">
                    <Button variant="bordered" isIconOnly size="lg">
                      <MailIcon className="text-3xl" />
                    </Button>
                    <p className="text-sm">Email</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <Button
                      variant="bordered"
                      isIconOnly
                      size="lg"
                      onPress={whatsAppFunction}
                    >
                      <WhatsAppIcon style={{ fontSize: "30px" }} />
                    </Button>
                    <p className="text-sm">WhatsApp</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-col">
                <p className="text-sm">Copy Link</p>
                <Input
                  value={url}
                  readOnly
                  classNames={{ input: "truncate" }}
                  endContent={
                    isCopied ? (
                      <Button isIconOnly size="sm" variant="light">
                        <SvgCopiedIcon />
                      </Button>
                    ) : (
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        onPress={handleCopy}
                      >
                        <SvgCopyIcon />
                      </Button>
                    )
                  }
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareButton;
