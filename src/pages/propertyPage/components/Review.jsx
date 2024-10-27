import React from "react";
import { Rating } from "@mui/material";
import ThumbsRating from "./ThumbsRating";
import contactphoto from "../../../assets/contact-phto.png";

function Review({ id }) {
  return (
    <div
      id={id}
      className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 mt-16 "
    >
      <div className="flex flex-col lg:flex-row justify-normal lg:justify-between items-start lg:items-center">
        <div className="flex">
          <h3>6 Reviews</h3>
          <Rating name="read-only" value={3} readOnly />
          <h3>(3.33 of 5)</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-6  lg:items-center">
          Sort by:<span>Default order</span>
          <div>
            <button className="px-4 text-white py-2 bg-customSearchblue rounded-lg">
              Leave a Review
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-4">
          <div>
            <img src={contactphoto} alt="" />
          </div>
          <div className="flex flex-col">
            <h3>Ayodeji</h3>
            <Rating name="read-only" value={3} readOnly />
            <p>1 month ago</p>
            <h4>Comments are here</h4>
          </div>
        </div>
        <div>
          <ThumbsRating />
        </div>
      </div>
    </div>
  );
}

export default Review;
