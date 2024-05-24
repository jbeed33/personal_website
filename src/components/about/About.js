import Title from "../title/Title";
import InfoList from "../infoList/InfoList";
import "./About.css";

function About() {
  return (
    <section id="about">
      <Title title="About Me" />
      <div id="about-quote-wrapper">
        {" "}
        <p id="about-quote">
          Developers aren't just coders. They're compassionate creators crafting
          tools for others' seeking ease.
        </p>
      </div>
      <div id="about-info-wrapper">
        <div id="about-image-wrapper">
          <img src="images/SitImage.jpg" alt="Joshua sitting and smiling" />
        </div>
        <InfoList />
      </div>
      <a id="about-resume" target="_blank" href="computer_science_resume.pdf">
        Resume
      </a>
    </section>
  );
}

export default About;
