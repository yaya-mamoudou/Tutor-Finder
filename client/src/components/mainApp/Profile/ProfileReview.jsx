import React, { useEffect, useState, useContext } from "react";
import ReviewContext from "../../../context/reviews/ReviewContext";
import Review from "../../ViewAllTutors/reviews/Review";

import { format } from "timeago.js";
import DisplayRatings from "../../ViewAllTutors/ViewAllReviews/DisplayRatings";
import reviewerPic from "../../assets/img/1.jpg";
const PF = "http://localhost:5000/images/";

export default function ProfileReview(props) {
  const reviewContext = useContext(ReviewContext);
  const { myReview, getMyReview } = reviewContext;

  const [tutData, setTutData] = useState([]);

  useEffect(() => {
    getMyReview();
  }, []);

  useEffect(() => {
    if (Object(myReview).hasOwnProperty("ViewReview")) {
      let temp = myReview.ViewReview;
      let temp2 = [...temp];
      setTutData(temp2);
    }
  }, [myReview]);

  return (
    <>
      {tutData &&
        tutData.map((tutDset, index) => {
          return (
            <div className="reviewBox p-2 d-flex ">
              <img
                src={
                  tutDset.reviewers_id.profilePic === ""
                    ? "http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"
                    : PF + tutDset.reviewers_id.profilePic
                }
                width="40"
                height="40"
                className="rounded-circle mt-1"
                alt=""
              />
              <div className="p-3 reviewTextBox w-100 ml-2">
                <p className=" d-flex">
                  <span className="font-weight-bold">
                    {tutDset.reviewers_id.username}
                  </span>

                  <DisplayRatings rating={tutDset.rating} />
                </p>
                <p className="d-flex">
                  {tutDset.body}{" "}
                  <span
                    style={{ fontSize: 9 }}
                    className="text-secondary ml-auto"
                  >
                    {format(tutDset.date)}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}
