import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React from 'react';
import {
  SvgAddIcon,
  SvgBathIcon,
  SvgBedIcon,
  SvgChairIcon,
  SvgFullViewIcon,
  SvgLikeIcon,
  SvgLocationIcon,
} from '../utils/SvgIcons';
import { toNaira } from '../utils/helperFunction';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const PropertiesCard = ({
  key,
  img,
  title,
  address,
  bedroom,
  bathroom,
  sittingroom,
  amount,
  amountDate = 'annunal',
  isPressable = true,
  onPress,
  addProperty,
  propertyData,
  compareData,
  removeProperty,
}) => {
  return (
    <Card
      key={key}
      isPressable={isPressable}
      shadow="md"
      onPress={onPress}
      className="mb-6"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={title}
          className="w-full object-cover h-[226.5px]"
          radius="none"
          shadow="sm"
          src={img}
          width="100%"
        />
      </CardBody>
      <CardFooter className="block mb-4 px-3">
        <div className="flex items-center justify-between mt-3">
          <b className="truncate">{title}</b>
          <div className="flex items-center gap-1">
            <Button
              isIconOnly
              size="sm"
              radius="full"
              className=" bg-transparent hover:bg-default"
            >
              <SvgFullViewIcon />
            </Button>
            {compareData.some((item) => item.id === propertyData.id) ? (
              <Button
                isIconOnly
                size="sm"
                radius="full"
                className=" bg-transparent hover:bg-default"
                onPress={() => {
                  removeProperty(propertyData.id);
                }}
              >
                <RemoveCircleOutlineIcon
                  className="text-[17px]"
                  fontSize="17px"
                />
              </Button>
            ) : (
              <Button
                isIconOnly
                size="sm"
                radius="full"
                className=" bg-transparent hover:bg-default"
                onPress={() => {
                  addProperty(propertyData);
                }}
              >
                <SvgAddIcon />
              </Button>
            )}
            <Button
              isIconOnly
              size="sm"
              radius="full"
              className=" bg-transparent hover:bg-default"
            >
              <SvgLikeIcon />
            </Button>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <SvgLocationIcon />
          <p>{address}</p>
        </div>
        <div className="flex items-center mt-5 gap-2">
          <SvgBedIcon className="stroke-3 w-4 h-4" />
          <p className="text-[13px]">{bedroom} Bed</p>
          <SvgBathIcon />
          <p className="text-[13px]">{bathroom} Bath</p>
          <SvgChairIcon />
          <p className="text-[13px]">{sittingroom} Sitting Room</p>
        </div>
        <div className="flex mt-5 items-center justify-between">
          <p className="font-medium text-xl">
            {toNaira(amount)}
            <span className="text-sm font-light">/{amountDate}</span>
          </p>
          <p className="text-[12px] font-bold text-customProfileblue">
            DETAILS
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertiesCard;
