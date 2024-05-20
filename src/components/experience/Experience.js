import React from "react";
import Title from "../title/Title";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <Title title="Experience" />

      <div id="experience-container">
        <div className="experience-checkpoint">
          <div>
            <h1>Bachelor's of Science, Computer Science</h1>
            <h3>Sep 2018 - June 2024</h3>
            <p>Expected to receive Bachelors of computer science in June.</p>
          </div>
        </div>
        <div className="experience-checkpoint">
          <div>
            <h1> Shop It Up</h1>
            <h3>Jan 2024 - Mar 2024</h3>
            <p>
              As a co-lead, I provided guidance to a team of five other
              developers throughout the 10 week project lifecycle. This included
              assisting with introducing developers to the MERN stack,
              collecting and analyzing requirements, facilitating collaboration
              during planning and design phases, and overseeing as well as
              documenting the architecture of the entire application. My primary
              focus was leading and collaborating with the backend team to
              implement crucial features such as Authentication, achieved
              through Passport.js and OAuth, ensuring user data encryption for
              privacy, and constructing REST APIs.
            </p>
          </div>
        </div>
        <div className="experience-checkpoint">
          <div>
            <h1>AI Port Application</h1>
            <h3>Oct 2023 - Dec 2023</h3>
            <p>
              An application that found the most cost effective way to move
              containers inside a shipping port. It was built using c# for
              frontend and c++ for backend. My group and I communicated with a
              stakeholder, our professor, to gather comprehensive project
              requirements and constraints for the system My group and I
              strategically planned, developed, and tested the application with
              the objective of optimizing cost effective methods for loading and
              unloading containers onto a ship.
            </p>
          </div>
        </div>
        <div className="experience-checkpoint">
          <div>
            <h1>Junior Frontend Developer Intern</h1>
            <h3>May 2023 - Sep 2023</h3>
            <p>
              Redesigned and enhanced the user profile page, optimizing its
              readability and user-friendliness, resulting in improvement in
              overall usability using React and TailwindCSS. Implemented and
              Tested part of a Restful API by using Typescript and Postman to
              facilitate the secure storage of workflows within an external
              database. Redesigned and collaborated with team to improve the
              accessibility of Simpfi web app to make it WCAG compliant.
              Utilized Figma to design and collaborate with my team to build out
              the billings page to increase user privacy and track their billing
              history.
            </p>
          </div>
        </div>
        <div className="experience-checkpoint">
          <div>
            <h1>RPG Text Based Game</h1>
            <h3>Apr 2021 - May 2021</h3>
            <p>
              A C++-based command-line text based adventure game was crafted,
              offering multiple endings, a dynamic plot, and engaging
              characters. I collaborated on a school group project practicing
              Agile development methodologies. We successfully applied software
              design patterns for enhancing the project structure and its
              scalability. I contributed to the implementation and design of the
              weapons system and menu functionality. This led to a more
              user-friendly experience and allowed my team to reuse components.
            </p>
          </div>
        </div>
        <div className="experience-checkpoint">
          <div>
            <h1>Mentor Collective Peer Mentor Volunteer</h1>
            <h3>Sep 2021 - June 2022</h3>
            <p>
              Offered guidance to incoming freshmen, introducing them to the
              various resources and opportunities available at the University of
              California Riverside. Conducted monthly one-on-one meetings with
              mentees to assess their experiences and provide support.
            </p>
          </div>
        </div>
        <div className="experience-checkpoint">
          <div>
            <h1>Grief To Action Deep Mentorship Program</h1>
            <h3>Jan 2020 - Jan 2021</h3>
            <p>
              Participate in a group mentorship program that includes team
              building, self-reflection exercises, and deep inquiry around life
              experiences. Develop tools and practices that allow me to be with
              other people’s emotions from a place of deep listening and
              empathy, and a focus on creating connections across identities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
