import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <div className="title-container">
      <h1 className="title-background">{props.title}</h1>
      <h3 className="title-foreground">{props.title}</h3>
    </div>
  );
}

export default Title;
