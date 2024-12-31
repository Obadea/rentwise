import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SvgSuccessCheckIcon } from "../../utils/SvgIcons";
import { Button } from "@nextui-org/react";

const SuccessPage = ({ setIsSuccess }) => {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-50">
      <SvgSuccessCheckIcon className="text-green-500 w-36 h-36 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h1>
      <p className="text-gray-600 text-center mb-4">
        Your message has been successfully submitted. We’ll get back to you
        shortly!
      </p>
      <div className="space-x-4">
        <Button onPress={() => (window.location.href = "/")} color="primary">
          Back to Home
        </Button>

        <Button
          onPress={setIsSuccess(false)}
          variant="bordered"
          color="primary"
        >
          Submit another form
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
