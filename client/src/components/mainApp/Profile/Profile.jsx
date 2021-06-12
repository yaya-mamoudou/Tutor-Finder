import React, { useContext, useEffect, useState, createRef } from "react";
import AuthContext from "../../../context/auth/AuthContext";
import "../../ViewAllTutors/tutProfile.css";
import CreateReview from "../../ViewAllTutors/reviews/Review";
import AllReviews from "../../ViewAllTutors/ViewAllReviews/AllReviews";
import { useLocation } from "react-router";
import FirstBox from "../../ViewAllTutors/FirstBox";
import Box2 from "../../ViewAllTutors/Box2";
import TutorProfileHeader from "../../ViewAllTutors/TutorProfileHeader";
// import Review from "./reviews/Review";

console.log(window.screen.height);
function App(props) {
  const authContext = useContext(AuthContext);
  const [userData, setuserData] = useState();
  const [toggle, settoggle] = useState(0);
  const { ikeep, iStore, tutData, user, loadUser } = authContext;
  const [headerHight, setheaderHight] = useState(0);

  // console.log(document.getElementById("bg_learner").offsetHeight);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    console.log(headerHight + " i got it");
  }, [headerHight]);

  const setref = async (height) => {
    setheaderHight(height);
    // console.log(height);
  };
  useEffect(async () => {
    await setuserData(user);
  }, [user]);

  useEffect(async () => {
    if (userData) {
      console.log(userData);
      settoggle(1);
    }
  }, [userData]);
  return (
    toggle === 1 && (
      <div
        className=" pt-3 pl-4 pr-4 pb-4"
        style={{ backgroundColor: "#f2f2f2", height: "100vh" }}
      >
        <TutorProfileHeader setref={setref} status={userData.status} />

        {userData.status === "tutor" ? (
          <div className="d-flex justify-content-between">
            <div className="" style={{ width: "29%", height: "85vh" }}>
              <FirstBox
                username={userData.username}
                speciality={userData.speciality}
                bio={userData.bio}
                location={userData.location}
              />
              <Box2 email={userData.email} />
            </div>

            <div className="" style={{ width: "70%", height: "83vh" }}>
              <div style={{ height: "80%" }} className="bg-white  rounded p-4">
                <p className="h3 text-warning mb-4">Reviews</p>
                <div
                  className="reviewArea"
                  style={{ height: "90%", overflowY: "auto" }}
                >
                  <AllReviews tut_id={userData.id} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="bg_learner"
            style={{ height: `${window.innerHeight - headerHight}px` }}
            className={`d-flex justify-content-center ${
              userData.status === "learner" && "bg_learner"
            }`}
          >
            <div
              className="align-self-center"
              style={{ width: "30%", height: "100%" }}
            >
              <FirstBox
                status={userData.status}
                username={userData.username}
                speciality={userData.speciality}
                bio={userData.bio}
                location={userData.location}
              />
              <Box2
                status={userData.status}
                tel={userData.tel}
                email={userData.email}
              />
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default App;
