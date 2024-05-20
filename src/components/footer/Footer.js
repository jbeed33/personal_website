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
            <div className="footer-icon">Linkedin</div>
            <div className="footer-icon">Github</div>
            <div className="footer-icon">Email</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
