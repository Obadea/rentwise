import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

const PropertiesCard = ({
  key,
  img,
  title,
  address,
  bedroom,
  bathroom,
  sittingroom,
  amount,
  addProperty,
  propertyData,
  compareData,
  removeProperty,
}) => {
  return (
    <div>
      <Card key={key} isPressable shadow="sm">
        <CardBody className="overflow-visible p-0">
          <Image
            alt={title}
            className="w-full object-cover h-[220px]"
            radius="lg"
            shadow="sm"
            src={img}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{title}</b>
          <p className="text-default-500">{amount}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PropertiesCard;
