import React, { useState, useEffect, useContext } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';
import Review from '../reviews/Review';
import { format } from 'timeago.js';
import DisplayRatings from './DisplayRatings';
import reviewerPic from '../../assets/img/1.jpg';

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
      {typeof tutData === 'object' &&
        tutData.map((tutDset) => (
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
        ))}
    </div>
  );
}

export default AllReviews;
