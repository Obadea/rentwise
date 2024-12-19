import React from "react";
import { Rating } from "@mui/material";
import ThumbsRating from "./ThumbsRating";
import contactphoto from "../../../assets/contact-phto.png";
import { sortMethods } from "../../../utils/constants";
import { Avatar, Button, Select, SelectItem } from "@nextui-org/react";
import { SvgSortIcon } from "../../../utils/SvgIcons";
import { timeAgo } from "../../../utils/helperFunction";

function Review({ id, propertyData }) {
  return (
    <div
      id={id}
      className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 mt-16 "
    >
      <div className="flex flex-col lg:flex-row justify-normal lg:justify-between items-start lg:items-center">
        <div className="flex gap-2">
          <h3>
            {propertyData?.property?.property?.reviews
              ? `${propertyData?.property?.property?.reviews?.length} Reviews`
              : "Loading..."}
          </h3>
          <Rating
            name="read-only"
            value={Number(propertyData?.property?.property?.ratingsAverage)}
            readOnly
          />
          <h3>({propertyData?.property?.property?.ratingsAverage} of 5)</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-6  lg:items-center">
          {/* Sort by:<span>Default order</span> */}
          <Select
            disableSelectorIconRotation
            className="max-w-40"
            // label="Sort by:"
            labelPlacement="outside-left"
            placeholder="Sort by:"
            selectorIcon={<SvgSortIcon />}
          >
            {sortMethods.map((sort) => (
              <SelectItem key={sort.key}>{sort.label}</SelectItem>
            ))}
          </Select>
          <div>
            <Button
              href="#review"
              className="px-4 text-white py-2 bg-customSearchblue rounded-lg"
            >
              Leave a Review
            </Button>
          </div>
        </div>
      </div>

      <div>
        {propertyData?.property?.property?.reviews?.map((item) => (
          <div className="mb-5">
            <div className="flex gap-4">
              <div>
                {/* <img src={contactphoto} alt="" /> */}
                <Avatar src="" size="lg" />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex gap-3">
                  <h3>
                    {item?.user?.firstName} {item?.user?.lastName}
                  </h3>
                  <Rating name="read-only" value={item?.rating} readOnly />
                </div>
                <p>{timeAgo(item?.updatedAt)}</p>
                <div className="flex items-center w-full justify-between">
                  <h4 className="text-xs max-w-[88%]">{item?.review}</h4>
                  <ThumbsRating />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
