import React, { useState, useEffect } from "react";

export default function DisplayRatings({ rating }) {
  const [ratings, setratings] = useState([]);

  useEffect(() => {
    displayRatings(rating);
  }, [rating]);

  const displayRatings = (rating) => {
    let ratingRound = Math.round(rating);
    let stars = [];
    console.log(ratingRound);
    for (let i = 0; i < ratingRound; i++) {
      stars.push("fas fa-star text-danger");
    }
    setratings(stars);
  };
  return (
    <span className="ml-auto">
      {ratings.map((e) => {
        return <i className={e}></i>;
      })}
    </span>
  );
}
