import React, { useState, useEffect, useContext } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';
import Review from '../reviews/Review';
import { format } from 'timeago.js';
import DisplayRatings from './DisplayRatings';
import reviewerPic from '../../assets/img/1.jpg';
import AuthContext from '../../../context/auth/AuthContext';
const PF = 'http://localhost:5000/images/';

function AllReviews(props) {
  const reviewContext = useContext(ReviewContext);
<<<<<<< HEAD
  const authContext = useContext(AuthContext);

  const [pathname, setpathName] = useState();

  let activePath;
  const {
    aTutsReview,
    viewATutR,
    reviews,
    myReview,
    getMyReview,
  } = reviewContext;
  const [tutData, setTutData] = useState();

  const [storeReview, setstoreReview] = useState();

  useEffect(() => {
    getMyReview();
    setpathName(window.location.pathname);
  }, [reviewContext]);
  console.log(myReview);
=======

  const { aTutsReview, viewATutR, reviews, myReview, getMyReview } =
    reviewContext;
  const [tutData, setTutData] = useState();

  useEffect(() => {
    getMyReview();
  }, []);

>>>>>>> 7023285e429e57df7b260a8a44e8d3f85f38d909
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

<<<<<<< HEAD
  useEffect(async () => {
    try {
      await setstoreReview(myReview);
    } catch (error) {}
  }, [myReview]);

  console.log(storeReview);
  return (
    <>
      {pathname === '/profile' && typeof storeReview !== 'undefined'
        ? storeReview.map((tutDset, index) => {
            console.log(tutDset);
            return (
              <div className="p-2 d-flex ">
                <img
                  src={
                    tutDset.reviewers_id.profilePic === ''
                      ? 'http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico'
                      : PF + tutDset.reviewers_id.profilePic
                  }
                  width="40"
                  height="40"
                  className="rounded-circle mt-1"
                  alt=""
                />
                <div className="p-3 reviewTextBox w-100 ml-2">
                  <p className=" d-flex">
                    <DisplayRatings rating={tutDset.rating} />
                  </p>
                  <p className="d-flex">
                    {tutDset.body}{' '}
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
        : pathname === '/tut/profile' &&
          typeof tutData === 'object' &&
          tutData.map((tutDset, index) => {
            return (
              <div className="p-2 d-flex ">
                <img
                  src={
                    tutDset.reviewers_id.profilePic === ''
                      ? 'http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico'
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
                    {tutDset.body}{' '}
                    <span
                      style={{ fontSize: 9 }}
                      className="text-secondary ml-auto"
                    >
                      {format(tutDset.date)}
                    </span>
                  </p>
                </div>
=======
  return (
    <>
      {typeof tutData === "object" &&
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
>>>>>>> 7023285e429e57df7b260a8a44e8d3f85f38d909
              </div>
            </div>
          );
        })}
    </>
  );
}

export default AllReviews;
