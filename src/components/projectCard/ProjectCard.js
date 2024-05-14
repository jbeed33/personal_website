import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.image} />

      <div className="project-card-overlay">
        <h1 className="project-card-overlay-title">{props.title}</h1>
        <h2 className="project-card-overlay-description">
          {props.description}
        </h2>
        <a
          target="_blank"
          className="project-card-overlay-link"
          href={props.link}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
