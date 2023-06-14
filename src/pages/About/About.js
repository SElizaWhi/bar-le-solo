import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import menu from "../../assets/menu.jpg";
import AboutInfo from "./AboutInfo/AboutInfo";
import Gallery from "./Gallery/Gallery";

const About = () => {
  return (
    <div>
      <HeroImage menu={menu} heading={["À propos"]} text="Notre histoire" />
      <AboutInfo />
      <Gallery />

    </div>
  );
};

export default About;
