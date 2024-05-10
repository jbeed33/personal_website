import React from "react";
import Navbar from "../navbar/Navbar";

import "./Hero.css";

function Hero() {
  return (
    <div id="hero-container">
      <Navbar />
      <img id="hero-img" src="images/HeroImage.jpg" alt="hero image" />
      <h1>this is the about section</h1>
    </div>
  );
}

export default Hero;
