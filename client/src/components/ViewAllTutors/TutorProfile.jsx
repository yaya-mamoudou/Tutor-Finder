import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/AuthContext";
// import './tutProfile.css';
import profilePic from "../assets/img/1.jpg";
import CreateReview from "./reviews/Review";
import AllReviews from "./ViewAllReviews/AllReviews";
import { useLocation } from "react-router";

function App(props) {
  const authContext = useContext(AuthContext);

  const { ikeep, iStore, tutData } = authContext;

  const username = localStorage.getItem("username");
  const bio = localStorage.getItem("bio");
  const status = localStorage.getItem("status");
  const email = localStorage.getItem("email");
  const gender = localStorage.getItem("gender");
  const speciality = localStorage.getItem("speciality");
  const location = localStorage.getItem("location");
  const id = localStorage.getItem("id");

  return (
    <div
      className="vh-100 pt-3 pl-4 pr-4"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <div className="d-flex mb-4">
        <p className="h3">Profile</p>
        <div className="ml-auto">
          <i class="far fa-edit text-warning fa-2x"></i>
          <i class="far fa-comment-dots text-info fa-2x"></i>
        </div>
      </div>

      <div className="d-flex">
        <div className="" style={{ width: "25%", minHeight: "40vh" }}>
          <div
            className="bg-white rounded p-4"
            style={{ width: "100%", minHeight: "100%" }}
          >
            <div className=" d-flex">
              <div
                style={{ width: 55, height: 55 }}
                className="bg-secondary d-flex rounded-circle justify-content-center align-items-center"
              >
                <img
                  src={profilePic}
                  width="50"
                  height="50"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p>{username}</p>
                <p className="text-danger">{speciality}</p>
              </div>
            </div>
            <div>
              <p className="text-secondary mt-4">Location</p>
              <p className="danger">{location}</p>
              <div className="mt-3">
                <p className="text-secondary">Ratings</p>
                <p>
                  4.5{" "}
                  <span className="ml-2 text-danger">
                    <i class="fas fa-star "></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-secondary">About</p>
              <p>{bio}</p>
            </div>
          </div>

          <div className="bg-white mt-3 rounded ">
            <div>
              <p>Telephone:</p>
              <p>Email:</p>
              <p>Social email Handles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
