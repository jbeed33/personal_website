import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section id="footer">
        <div id="footer-info-container">
          <h1>Get In Touch :)</h1>
          <p>What to learn more about me & What I create?</p>
          <div id="footer-icons-container">
            <a
              className="footer-icon"
              target="_blank"
              href="http://www.linkedin.com/in/joshua-beed"
            >
              <p>Linkedin</p>
            </a>
            <a target="_blank" href="https://github.com/jbeed33">
              <p>Github</p>
            </a>
            <a
              className="footer-icon"
              target="_blank"
              href="mailto: jbeed33@gmail.com"
            >
              <p>Email</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
