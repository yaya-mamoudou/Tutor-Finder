import React from "react";
import "./landingPage.css";
import Hero from "./hero/Hero";
import ExploreTutors from "./exploreTutors/ExploreTutors";
import WhyAthena from "./whyAthena/WhyAthena";
import Footer from "./footer/Footer";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Hero />
      <ExploreTutors />
      <WhyAthena />
      <Footer />
    </div>
  );
}
