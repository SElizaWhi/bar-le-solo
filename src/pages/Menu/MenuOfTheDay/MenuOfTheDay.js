import React from 'react'
import ListItem from '../../../components/ListItem/ListItem'
import './MenuOfTheDay.css'

const MenuOfTheDay = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h3>Le Menu du moment</h3>
            <h5>Entrée</h5>
            <p>Véritable Rillette du Mans - 7€</p>
            <h5>Spéciale</h5>
            <p>Faux Filet maturé 20 jours (300g) - 24€</p>
            <h5>Plat</h5>
            <p>Andouillette Fermière 5A - 16€</p>
            <p>Bavette Black Angus (250g) - 17€</p>
            <p>Gambas du chef - 24€</p>
            <p>Tartare haché minute spécial Black Angus + Frites Maison et salade - 18€</p>
            <h5>Sauce Maison - 1€</h5>
            <h6>Poivre ou Roquefort</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOfTheDay
