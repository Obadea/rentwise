import React from "react";
import { Rating } from "@mui/material";

function Review() {
  return (
    <div className="px-4 py-6 lg:p-10 flex flex-col  gap-4 mt-16 ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex">
          <h3>6 Reviews</h3>
          <Rating name="read-only" value={3} readOnly />
          <h3>(3.33 of 5)</h3>
        </div>
        <div>
          Sort by: <span>Default order</span>
        </div>
        <div>
          <div>Leave a Review</div>
        </div>
      </div>
    </div>
  );
}

export default Review;
