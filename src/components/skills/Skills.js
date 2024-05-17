import React from "react";
import Title from "../title/Title";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <Title title="Skills" />
      <div id="skills-container">
        <div className="skills-card">
          <img
            className="skills-card-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="react-icon"
          />

          <h3 className="skills-card-name">React</h3>
        </div>
        <div className="skills-card">
          <img
            className="skills-card-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="html-icon"
          />

          <h3 className="skills-card-name">HTML</h3>
        </div>
        <div className="skills-card">
          <img
            className="skills-card-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="css-icon"
          />

          <h3 className="skills-card-name">CSS</h3>
        </div>
        <div className="skills-card">
          <img
            className="skills-card-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            alt="express-icon"
          />

          <h3 className="skills-card-name">Express</h3>
        </div>
        <div className="skills-card">
          <img
            className="skills-card-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            alt="mongodb-icon"
          />

          <h3 className="skills-card-name">MongoDB</h3>
        </div>
        <div className="skills-card">
          <img
            className="skills-card-image"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="javascript-icon"
          />

          <h3 className="skills-card-name">Javascript</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
