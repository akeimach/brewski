import React from "react";
import UserReviews from "./UserReviews";
import ReviewDisplay from "../ReviewDisplay";


const Reviews = (params) => {

  return (
    <div>
      <p>Reviews</p>
      <ReviewDisplay />
      <UserReviews />
    </div>
  );
}

export default Reviews;
