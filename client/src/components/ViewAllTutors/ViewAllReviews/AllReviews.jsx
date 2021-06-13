import React, { useState, useEffect, useContext } from "react";
import ReviewContext from "../../../context/reviews/ReviewContext";
import Review from "../reviews/Review";
import { format } from "timeago.js";
import DisplayRatings from "./DisplayRatings";
import reviewerPic from "../../assets/img/1.jpg";

function AllReviews(props) {
  const reviewContext = useContext(ReviewContext);
  const [pathname, setpathName] = useState();

  let activePath;

  const { aTutsReview, viewATutR, reviews, myReview, getMyReview } =
    reviewContext;
  const [tutData, setTutData] = useState();

  const [storeReview, setstoreReview] = useState();

  useEffect(() => {
    getMyReview();
    setpathName(window.location.pathname);
  }, []);

  useEffect(async () => {
    try {
      let anID = await props.tut_id;
      await viewATutR(anID);
    } catch (error) {
      console.log(error);
    }
  }, [aTutsReview]);

  useEffect(async () => {
    try {
      await setTutData(aTutsReview.ViewReview);
    } catch (err) {
      console.log(err);
    }
  }, [aTutsReview]);

  useEffect(async () => {
    try {
      await setstoreReview(myReview.ViewReview);
    } catch (error) {
      console.log(error);
    }
  }, [myReview]);

  return (
    <>
      {pathname === "/profile" && typeof storeReview === "object"
        ? storeReview.map((tutDset, index) => {
            // if (index <= 2) {
            return (
              <div className="p-2 d-flex ">
                <img
                  src={reviewerPic}
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
          })
        : pathname === "/tut/profile" &&
          typeof tutData === "object" &&
          tutData.map((tutDset, index) => {
            // if (index <= 2) {
            return (
              <div className="p-2 d-flex ">
                <img
                  src={reviewerPic}
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

export default AllReviews;
