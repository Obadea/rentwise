import React from "react";
import { Rating } from "@mui/material";
import ThumbsRating from "./ThumbsRating";
import contactphoto from "../../../assets/contact-phto.png";
import { sortMethods } from "../../../utils/constants";
import { Avatar, Button, Select, SelectItem } from "@nextui-org/react";
import { SvgLinkIcon, SvgSortIcon } from "../../../utils/SvgIcons";
import { timeAgo } from "../../../utils/helperFunction";

function Review({ id, propertyData, forShortlet }) {
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
              : forShortlet
              ? propertyData?.shortlet?.reviews?.length
              : "Loading..."}
          </h3>
          <Rating
            name="read-only"
            value={Number(
              forShortlet
                ? propertyData?.shortlet?.ratingsAverage
                : propertyData?.property?.property?.ratingsAverage
            )}
            readOnly
          />
          <h3>
            (
            {forShortlet
              ? propertyData?.shortlet?.ratingsAverage
              : propertyData?.property?.property?.ratingsAverage}{" "}
            of 5)
          </h3>
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
        {forShortlet
          ? propertyData?.shortlet?.reviews?.map((item) => (
              <div className="mb-5">
                <div className="flex gap-4">
                  <div>
                    <Avatar src="" size="lg" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex gap-3">
                      <h3>
                        {item?.user?.firstName} {item?.user?.lastName}
                      </h3>
                      <Rating name="read-only" value={item?.rating} readOnly />
                    </div>
                    <p className="text-xs text-[#A6A6A6] flex  gap-2 mt-2">
                      <SvgLinkIcon />
                      {timeAgo(item?.updatedAt)}
                    </p>
                    <div className="flex items-center w-full justify-between">
                      <h4 className="text-xs max-w-[88%] text-customBlackShade">
                        {item?.review}
                      </h4>
                      <div className="mt-10">
                        <ThumbsRating />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : propertyData?.property?.property?.reviews?.map((item) => (
              <div className="mb-5">
                <div className="flex gap-4">
                  <div>
                    <Avatar src="" size="lg" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex gap-3">
                      <h3>
                        {item?.user?.firstName} {item?.user?.lastName}
                      </h3>
                      <Rating name="read-only" value={item?.rating} readOnly />
                    </div>
                    <p className="text-xs text-[#A6A6A6] flex  gap-2 mt-2">
                      <SvgLinkIcon />
                      {timeAgo(item?.updatedAt)}
                    </p>
                    <div className="flex items-center w-full justify-between">
                      <h4 className="text-xs max-w-[88%] text-customBlackShade">
                        {item?.review} Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Eaque officia reprehenderit pariatur
                        ipsa illum, cum quas asperiores vitae dolorem qui quae
                        in? Quaerat numquam aliquam, quasi vel corporis saepe.
                        Consequuntur. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Suscipit excepturi quas id, qui ipsa
                        temporibus, aspernatur et, vero vel ducimus neque quod
                        fuga assumenda sapiente! Vitae quidem modi atque
                        provident. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dicta ipsam excepturi dolor id
                        deserunt perspiciatis cupiditate omnis facere. Placeat
                        vel doloremque error animi recusandae excepturi,
                        cupiditate sed eaque? Culpa, iste!
                      </h4>
                      <div className="mt-10">
                        <ThumbsRating />
                      </div>
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
