import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

function ManageRentalsCard({ img, title, description, buttonText }) {
  return (
    <Card radius="sm" className="pt-8 pb-4">
      <CardBody className="flex flex-col items-center space-y-3">
        <Image src={img} width="70%" className="m-auto" />
        <p className="font-bold text-customResultqueryGrey text-[18px] text-center">
          {title}
        </p>
        <p className="text-center text-customBlackShade text-sm font-medium">
          {description}
        </p>
      </CardBody>
      <CardFooter>
        <Button color="primary" className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ManageRentalsCard;
