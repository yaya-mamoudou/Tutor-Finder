import React from "react";
import HeroSvgBottom from "./HeroSvgBottom";
import Nav from "./nav/Nav";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroDarkLayer d-flex container-fluid">
        <Nav />
        <div className="heroText text-center w-100 h-50  d-flex flex-column text-white justify-content-center">
          <p className="font-weight-bold mt-5">Get in touch</p>
          <p className="h1 font-weight-bold mb-3">Trust and Experience</p>
          <p className="mb-4">
            Tailored to your career goals and busy schedule
          </p>
          <button className="btn btn-warning EnrolButton ">Enrol now</button>
        </div>

        <HeroSvgBottom />
      </div>
    </div>
  );
}
