import React, { useState, useEffect, useContext } from 'react';
import './review.css';
import ReviewContext from '../../../context/reviews/ReviewContext';
import AuthContext from '../../../context/auth/AuthContext';

function Review(props) {
  const authContext = useContext(AuthContext);
  const reviewContext = useContext(ReviewContext);

  const { user } = authContext;
  const { createAReview, aTutsReview, viewATutR } = reviewContext;

  const [manage, setManage] = useState({
    body: '',
    rating: '',
  });

  const { body, rating } = manage;

  const onChange = (e) =>
    setManage({ ...manage, [e.target.name]: e.target.value });

  const createReview = async (e) => {
    e.preventDefault();
    let selectedTutor_id = await props.tut_id;
    await createAReview({ body, selectedTutor_id, rating });
    setManage({
      body: '',
      rating: '',
    });
  };

  return (
    <form onSubmit={createReview}>
      <div className="row3 row m-5">
        <div className="search-wrapper ">
          <input
            type="text"
            placeholder="Leave your review..."
            name="body"
            value={body}
            onChange={onChange}
          />
        </div>
        <div className="">
          <label>Rating</label>
          <input type="text" name="rating" value={rating} onChange={onChange} />
        </div>
        <br />
        <div className="bt pt-3">
          <input type="submit" value="Send" className="btn btn-primary p-3 " />
        </div>
      </div>
    </form>
  );
}

export default Review;
