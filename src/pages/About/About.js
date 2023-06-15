import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import propos from "../../assets/propos.jpg";
import AboutInfo from "./AboutInfo/AboutInfo";
import Gallery from "./Gallery/Gallery";

const About = () => {
  return (
    <div>
      <HeroImage menu={propos} heading={["À propos"]} text="Notre histoire" />
      <AboutInfo />
      <Gallery />

    </div>
  );
};

export default About;
