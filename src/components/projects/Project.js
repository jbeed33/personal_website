import React from "react";
import Title from "../title/Title";
import "./Project.css";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.css";

function Project() {
  return (
    <section id="project">
      <Title title="Projects" />

      <div id="project-card-list">
        <ProjectCard
          image="images/priority.png"
          title="Priority app"
          description="An fullstack application to help a person become
          more organized."
          link="https://github.com/jbeed33/priorityApp"
          alt="my project that schedules based on priority."
        />
        <ProjectCard
          image="images/shop.png"
          title="Shop It Up"
          description="An fullstack ecommerce platform that allows users to create sharable carts."
          position={{ x: 0, y: 1 }}
          link="https://github.com/alvin-vo/Shop-It-Up"
          alt="my project that is used for shopping."
        />
        <ProjectCard
          image="images/tutors.png"
          title="UC Tutor"
          description="A fullstack application that supports higher education and the ability to easily find help from peers."
          position={{ x: 0, y: 1 }}
          link="https://github.com/jbeed33/cs110_project"
          alt="my project that is used for tutoring."
        />
      </div>
    </section>
  );
}

export default Project;
