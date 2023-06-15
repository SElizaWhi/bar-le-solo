import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import menu from "../../assets/menu.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";

const Menu = () => {
  return (
    <div>
      <HeroImage
        menu={menu}
        heading={["Notre ", <span>Menu</span>]}
        text="Notre menu évolue régulièrement pour vous offrir la meilleure qualité possible en utilisant des produits frais et locaux de première qualité."
      />
      <MenuOfTheDay />
    </div>
  );
};

export default Menu;
