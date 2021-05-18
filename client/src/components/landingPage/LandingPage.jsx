import React from "react";
import "./landingPage.css";
import Hero from "./hero/Hero";
import ExploreTutors from "./exploreTutors/ExploreTutors";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Hero />
      <ExploreTutors />
    </div>
  );
}
