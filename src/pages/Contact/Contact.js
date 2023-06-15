import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import contact from "../../assets/contact.jpg";
import Hours from "./Hours/Hours";
import HeroImage2 from "../../components/HeroImage/HeroImage2";

const Contact = () => {
  return (
    <div>
      <HeroImage
        menu={contact}
        heading={["Coordonnées"]}
        text={
          <>
            04 30 67 09 99
            <br />
            2 Rue du Bon Puits, 30320 Poulx
            <br />
            francklenormand67@gmail.com
            <br />
          </>
        }
      />
      <HeroImage2
        heading={["Horaires"]}
        text={
          <>
            Lundi Fermé
            <br />
            Mardi 7:30 - 15:00 18:00-21:30
            <br />
            Mercredi 7:30 - 15:00 18:00-21:30
            <br />
            Jeudi 7:30 - 15:00 18:00-21:30
            <br />
            Vendredi 7:30 - 15:00 18:00-21:30
            <br />
            Samedi 7:30 - 15:00 18:00-21:30
            <br />
            Dimanche 7:30 - 14:15
            <br />
            Restauration tous les midi du mardi au samedi
          </>
        }
      />
    </div>
  );
};

export default Contact;
