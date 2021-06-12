import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/AuthContext";
import "./tutProfile.css";
import AllReviews from "./ViewAllReviews/AllReviews";
import FirstBox from "./FirstBox";
import Box2 from "./Box2";
import TutorProfileHeader from "./TutorProfileHeader";
import LeaveReview from "./LeaveReview";

function App(props) {
  const authContext = useContext(AuthContext);
  const { ikeep, iStore, tutData } = authContext;

  const gender = localStorage.getItem("gender");
  const id = localStorage.getItem("id");
  const email = localStorage.getItem("email");
  const tel = localStorage.getItem("tel");
  const username = localStorage.getItem("username");
  const speciality = localStorage.getItem("speciality");
  const bio = localStorage.getItem("bio");
  const location = localStorage.getItem("location");

  return (
    <div
      className=" pt-3 pl-4 pr-4 pb-4"
      style={{ backgroundColor: "#f2f2f2", height: "100vh" }}
    >
      <TutorProfileHeader />

      <div className="d-flex justify-content-between">
        <div className="" style={{ width: "29%", height: "85vh" }}>
          <FirstBox
            username={username}
            speciality={speciality}
            bio={bio}
            location={location}
          />
          <Box2 email={email} tel={tel} />
        </div>

        <div className="" style={{ width: "70%", height: "83vh" }}>
          <LeaveReview tut_id={id} />
          <div style={{ height: "80%" }} className="bg-white  rounded p-4">
            <p className="h3 text-warning mb-4">Reviews</p>
            <div
              className="reviewArea"
              style={{ height: "90%", overflowY: "auto" }}
            >
              <AllReviews tut_id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
