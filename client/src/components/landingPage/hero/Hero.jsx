import React from "react";
// import HeroSvgBottom from "./HeroSvgBottom";
import Nav from "./nav/Nav";
import TrustAndExperience from "./TrustAndExperience";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroDarkLayer d-flex container-fluid">
        <Nav />
        <div className="heroText text-center w-100 h-50  d-flex flex-column text-white justify-content-center">
          <p className="font-weight-bold ">Get in touch</p>
          <TrustAndExperience />

          <p className="mb-4">
            Tailored to your career goals and busy schedule
          </p>
          <button className="btn btn-warning EnrolButton ">Enrol now</button>
        </div>
      </div>
    </div>
  );
}
