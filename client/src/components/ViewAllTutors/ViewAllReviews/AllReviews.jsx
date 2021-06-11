import React, { useState, useEffect, useContext } from "react";
import ReviewContext from "../../../context/reviews/ReviewContext";
import Review from "../reviews/Review";
import { format } from "timeago.js";
import DisplayRatings from "./DisplayRatings";

import reviewerPic from "../../assets/img/1.jpg";

function AllReviews(props) {
  const reviewContext = useContext(ReviewContext);

  const { aTutsReview, viewATutR, reviews } = reviewContext;
  const [tutData, setTutData] = useState();

  useEffect(async () => {
    let anID = await props.tut_id;
    viewATutR(anID);
  }, [reviews]);

  useEffect(async () => {
    try {
      await setTutData(aTutsReview.ViewReview);
    } catch (err) {
      console.log(err);
    }
  }, [aTutsReview]);

  return (
    <div className="">
      {typeof tutData === "object" &&
        tutData.map((tutDset) => (
          <div className=" mb-4 p-4 d-flex ">
            <img
              src={reviewerPic}
              width="40"
              height="40"
              className="rounded-circle mt-1"
              alt=""
            />
            <div className="p-3 reviewTextBox w-100 ml-2">
              <p className="font-weight-bold d-flex">
                {tutDset.reviewers_id.username}

                <DisplayRatings rating={tutDset.rating} />
              </p>
              <p>{tutDset.body}</p>
            </div>

            <p className="text-light"> {format(tutDset.date)} </p>
          </div>
        ))}
    </div>
  );
}

export default AllReviews;
