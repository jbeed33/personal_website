import React from "react";
import Title from "../title/Title";
import "./Project.css";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.css";

function Project() {
  return (
    <section>
      <Title title="Projects" />

      <div id="project-card-list">
        <ProjectCard
          image="images/priority.png"
          title="Priority app"
          description="An application to help a person become
          more organized. An application to help a person become more organized."
          link="https://github.com/jbeed33/priorityApp"
        />
        <ProjectCard
          image="images/priority.png"
          title="Priority app"
          description="An application to help a person become
          more organized. An application to help a person become more organized."
        />
        <ProjectCard
          image="images/priority.png"
          title="Priority app"
          description="An application to help a person become
          more organized. An application to help a person become more organized."
        />
        <ProjectCard
          image="images/priority.png"
          title="Priority app"
          description="An application to help a person become
          more organized. An application to help a person become more organized."
        />
      </div>
    </section>
  );
}

export default Project;
