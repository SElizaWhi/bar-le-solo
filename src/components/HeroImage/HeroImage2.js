import React from "react";
import "./heroImage.css";

const HeroImage2 = (props) => {
  return (
    <div
      className="container"
      style={{
        background: `color-primary`,
        height: "40vh",
      }}
    >
      <div className="banner-content">
        <h1 className="heading-secondary">{props.heading}</h1>
        <p className="color-tertiary">{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImage2;
