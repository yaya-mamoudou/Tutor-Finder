import React, { useState, useEffect, useContext } from 'react';
import ReviewContext from '../../../context/reviews/ReviewContext';
import Review from '../reviews/Review';
import { format } from 'timeago.js';

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
  console.log('this is the data right here ' + tutData);
  return (
    <div className="">
      {typeof tutData === 'object' &&
        tutData.map((tutDset) => (
          <div className="bg-info m-3 p-3">
            <p>Review Message</p>
            <p>{tutDset.body}</p>
            <p>Rating </p>
            <p>{tutDset.rating}</p>
            <p>Reviewer</p>
            <p>{tutDset.reviewers_id.username}</p>
            <p className="text-light"> {format(tutDset.date)} </p>
          </div>
        ))}
    </div>
  );
}

export default AllReviews;
