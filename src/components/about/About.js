import React, { useState, useEffect } from "react";
import Title from "../title/Title";
import InfoList from "../infoList/InfoList";
import "./About.css";

function About() {
  return (
    <>
      <Title title="About Me" />
      <div id="about-quote-wrapper">
        {" "}
        <p id="about-quote">
          Developers aren't just coders. They're compassionate creators crafting
          tools for others' seeking ease.
        </p>
      </div>
      <div id="about-info-wrapper">
        <InfoList number="1" />
        <div id="about-image-wrapper">
          <img src="images/SitImage.jpg" alt="Joshua sitting and smiling" />
        </div>
      </div>
    </>
  );
}

export default About;
