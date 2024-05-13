import React from "react";

import "./InfoList.css";

function InfoList(props) {
  return (
    <div id="infos-container">
      <div className="info-wrapper">
        <div className="info-number">1</div>
        <p>
          Born and raised in California. Seeking opportunities that would allow
          me to explore and learn more about web development and how AI is
          implemented. 
        </p>
      </div>

      <div className="info-wrapper">
        <div className="info-number">2</div>
        <p>
          Currently studying Computer Science at University of California
          Riverside. Expecting to graduate next year.
        </p>
      </div>

      <div className="info-wrapper">
        <div className="info-number">3</div>
        <p>
          I hold authenticity and honesty as core values in my personal life and
          as well as work. I enjoy writing poetry and having deep conversations
          with my peers and family.
        </p>
      </div>
    </div>
  );
}

export default InfoList;
