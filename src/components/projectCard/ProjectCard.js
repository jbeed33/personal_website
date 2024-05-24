import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const positionStyle = props.position
    ? { objectPosition: `${props.position.x}% ${props.position.y}%` }
    : {};

  console.log(props);
  return (
    <div className="project-card">
      <img style={positionStyle} src={props.image} alt={props.alt} />

      <div className="project-card-overlay">
        <h1 className="project-card-overlay-title">{props.title}</h1>
        <h2 className="project-card-overlay-description">
          {props.description}
        </h2>
        <a
          target="_blank"
          rel="noreferrer"
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
