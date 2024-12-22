import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tooltip,
} from "@nextui-org/react";
import React from "react";
import {
  SvgAddIcon,
  SvgBathIcon,
  SvgBedIcon,
  SvgChairIcon,
  SvgFullViewIcon,
  SvgLikeIcon,
  SvgLocationIcon,
} from "../utils/SvgIcons";
import { toNaira } from "../utils/helperFunction";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ViewFullImg from "./ViewFullImg";
import { Link, useNavigate } from "react-router-dom";
import TungstenOutlinedIcon from "@mui/icons-material/TungstenOutlined";

const PropertiesCard = ({
  key,
  img,
  title,
  address,
  bedroom,
  bathroom,
  sittingroom,
  amount,
  amountDate = "annual",
  isPressable = true,
  onPress,
  addProperty,
  propertyData,
  compareData,
  removeProperty,
  className,
  containerClassName,
}) => {
  const navigate = useNavigate();

  return (
    // <Link
    //   to={`/property?id=${propertyData?.id}`}
    //   className={`flex mb-6 mt-2 ml-2 ${containerClassName}`}
    // >
    <Card
      key={key}
      isPressable={isPressable}
      shadow="none"
      onPress={() => {
        navigate(`/property?id=${propertyData?.id}`);
      }}
      className={`mb-6 mt-2 ml-2 ${containerClassName}`}
    >
      <CardBody className={`overflow-visible p-0 ${className}`}>
        <Image
          alt={title}
          className="w-full object-cover h-[226.5px]"
          radius="none"
          shadow="none"
          src={img}
          width="100%"
        />
      </CardBody>
      <CardFooter className="block mb-4 px-0 pb-1">
        <div className="flex items-center justify-between mt-3 px-3 gap-8">
          <b className="truncate">{title} </b>
          <div className="flex items-center gap-1">
            <ViewFullImg img={img} />
            {compareData?.some((item) => item?.id === propertyData?.id) ? (
              <Tooltip content="Remove from compare" showArrow={true}>
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
              </Tooltip>
            ) : (
              <Tooltip content="Add to compare" showArrow={true}>
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
              </Tooltip>
            )}
            <Tooltip content="Like" showArrow={true}>
              <Button
                isIconOnly
                size="sm"
                radius="full"
                className=" bg-transparent hover:bg-default"
              >
                <SvgLikeIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-center mt-3 px-3">
          <SvgLocationIcon />
          <p className="truncate text-nowrap w-[80%]">{address}</p>
        </div>
        <div className="flex items-center mt-5 gap-2 px-3">
          <SvgBedIcon className="stroke-3 w-4 h-4" />
          <p className="text-[13px]">{bedroom} Bed</p>
          <SvgBathIcon />
          <p className="text-[13px]">{bathroom} Bath</p>
          {/* <SvgChairIcon />
          <p className="text-[13px]">{sittingroom} Sitting Room</p> */}
          <TungstenOutlinedIcon style={{ fontSize: "16px", fill: "#FC97AF" }} />
          <p className="text-[13px]">10hrs of Light Daily</p>
        </div>
        <div className="flex mt-5 items-center justify-between border-t-1 pt-2">
          <p className="font-medium text-xl pl-3">
            {toNaira(amount)}
            <span className="text-sm font-light">/{amountDate}</span>
          </p>
          <p className="text-[12px] font-bold text-customProfileblue pr-3">
            DETAILS
          </p>
        </div>
      </CardFooter>
    </Card>
    // </Link>
  );
};

export default PropertiesCard;
