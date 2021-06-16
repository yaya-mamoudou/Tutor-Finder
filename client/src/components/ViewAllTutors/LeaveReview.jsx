import React, { useState, useContext } from "react";
import ReviewContext from "./../../context/reviews/ReviewContext";
import AuthContext from "./../../context/auth/AuthContext";

export default function LeaveReview(props) {
  const authContext = useContext(AuthContext);
  const reviewContext = useContext(ReviewContext);

  const { user } = authContext;
  const { createAReview, aTutsReview, viewATutR } = reviewContext;

  const [manage, setManage] = useState({
    body: "",
    rating: "1",
  });

  const { body, rating } = manage;

  const onChange = (e) =>
    setManage({ ...manage, [e.target.name]: e.target.value });

  const createReview = async (e) => {
    e.preventDefault();
    let selectedTutor_id = await props.tut_id;
    await createAReview({ body, selectedTutor_id, rating });
    setManage({
      body: "",
      rating: "1",
    });
  };

  return (
    <div className="bg-white mb-3 rounded p-4">
      <form style={{ width: "100%" }} onSubmit={createReview}>
        <span style={{ width: "100%" }} className="d-flex ">
          <textarea
            type="text"
            className="inputStyle mb-3"
            placeholder="Leave your review..."
            name="body"
            value={body}
            onChange={onChange}
          />
          <div
            style={{ width: "20%" }}
            className="d-flex ml-3 align-items-start"
          >
            <p style={{ maxWidth: "50%" }}>Rate me:</p>
            <select
              style={{ maxWidth: "50%" }}
              className="ml-2"
              defaultValue="1"
              id="cars"
              name="rating"
              value={rating}
              onChange={onChange}
            >
              {/* <option value="5">&#128519;</option>
            <option value="2.5">&#128529;</option>
            <option value="1">&#128530;</option> */}

              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
            </select>
          </div>
        </span>

        <button
          type="submit"
          className="btn  btn-warning btn-lg py-2 px-3 text-white reviewBtn"
        >
          Send{" "}
          <span>
            <i class="far fa-paper-plane"></i>
          </span>
        </button>
      </form>
    </div>
  );
}
