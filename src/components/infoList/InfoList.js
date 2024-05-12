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
        <p>This is information div. has some information in it.</p>
      </div>

      <div className="info-wrapper">
        <div className="info-number">3</div>
        <p>This is information div. has some information in it.</p>
      </div>
    </div>
  );
}

export default InfoList;
