import React, { useReducer } from 'react';
import ReviewReducer from './ReviewReducer';
import ReviewContext from './ReviewContext';
import axios from 'axios';
import setAuthToken from '../../header/globalHeader';

const ReviewState = (props) => {
  const initialState = {
    reviews: null,
    myReview: [],
    aTutsReview: [],
  };
  const [state, dispatch] = useReducer(ReviewReducer, initialState);

  //view all tutors
  const createAReview = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      console.log('alice');
      console.log('form data here ' + formData.rating);
      const res = await axios.post(
        '/athena/reviews/addReview',
        formData,
        config
      );
      dispatch({
        type: 'ADD_REVIEW',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //logged in tutor get his review
  const getMyReview = async () => {
    try {
      let res = await axios.get('/athena/reviews/viewTutorsReview');
      dispatch({
        type: 'GET_MY_REVIEWS',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //all users view a tutors review
  const viewATutR = async (id) => {
    setAuthToken(localStorage.token);

    try {
      let res = await axios.get(`/athena/reviews/AllReviewsView/${id}`);
      dispatch({
        type: 'GET_A_TUTS_REVIEWS',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const clearReview = () => {
    dispatch({
      type: 'CLEAR',
    });
  };
  return (
    <ReviewContext.Provider
      value={{
        reviews: state.reviews,
        myReview: state.myReview,
        aTutsReview: state.aTutsReview,
        viewATutR,
        createAReview,
        getMyReview,
        clearReview,
      }}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;
