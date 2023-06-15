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
            <p>Véritable Rillette du Mans - <span className="special-word">7€</span></p>
            <h5>Spéciale</h5>
            <p>Faux Filet maturé 20 jours (300g) - <span className="special-word">24€</span></p>
            <h5>Plat</h5>
            <p>Andouillette Fermière 5A - <span className="special-word">16€</span></p>
            <p>Bavette Black Angus (250g) - <span className="special-word">17€</span></p>
            <p>Gambas du chef - <span className="special-word">24€</span></p>
            <p>Tartare haché minute spécial Black Angus + Frites Maison et salade - <span className="special-word">18€</span></p>
            <h5>Sauce Maison - <span className="special-word">1€</span></h5>
            <h6>Poivre ou Roquefort</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOfTheDay
