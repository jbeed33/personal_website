import React from "react";
import Navbar from "../navbar/Navbar";

import "./Hero.css";

function Hero() {
  return (
    <div id="hero-container">
      <Navbar />

      <div id="hero-text-wrapper">
        <h1 className="hero-text">
          <span id="hero-lg-text">Hello</span>, <br />
          I'm
          <span className="hero-hilight-text"> Joshua Beed</span>
        </h1>
        <h1 className="hero-text">&</h1>
        <h1 className="hero-text ">
          {" "}
          I'm a<span className="hero-hilight-text"> Full Stack Developer</span>
        </h1>
      </div>
      <img id="hero-img" src="images/HeroImage.jpg" alt="me looking down." />
    </div>
  );
}

export default Hero;
