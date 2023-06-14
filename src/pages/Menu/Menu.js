import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import menu from "../../assets/menu.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";

const Menu = () => {
  return (
    <div>
      <HeroImage
        menu={menu}
        heading={["Notre", <span>Menu</span>]}
        text="Tout ce que nous avons à vous proposer en un clin d'oeil"
      />
      <MenuOfTheDay/>
    </div>
  );
};

export default Menu;
