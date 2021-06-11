import React from "react";
import profilePic from "../assets/img/1.jpg";

export default function FirstBox() {
  const username = localStorage.getItem("username");
  const speciality = localStorage.getItem("speciality");
  const bio = localStorage.getItem("bio");
  const location = localStorage.getItem("location");
  const status = localStorage.getItem("status");

  return (
    <div className="bg-white rounded p-4" style={{ height: "65%" }}>
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
  );
}
