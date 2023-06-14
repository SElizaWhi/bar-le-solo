import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import contact from "../../assets/contact.jpg";
import Hours from "./Hours/Hours";

const Contact = () => {
  return (
    <div>
      <HeroImage
        menu={contact}
        heading={["Contactez nous"]}
        text="Contactez nous aujourd'hui pour plus de renseignements ou pour réserver"
      />
      <Hours/>
    </div>
  );
};

export default Contact;
