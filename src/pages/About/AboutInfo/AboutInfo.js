import React from 'react'
import './aboutInfo.css'

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              Nous c'est Franck et Véronique
            </h2>
            <h4>Bienvenu chez nous</h4>
            <p>
              {/* Nous avons entrepris de donner un nouveau souffle à notre village
              avec notre bar-restaurant. La{" "}
              <span className="special-word">qualité</span> est une valeur
              primordiale pour nous, et nous nous efforçons de proposer des mets
              délicieux et soigneusement préparés. De plus, notre accueil{" "}
              <span className="special-word">chaleureux</span> est une
              priorité, car nous souhaitons offrir une expérience agréable à
              tous nos clients. Nous sommes ravis de contribuer à la
              revitalisation de notre village en créant un lieu convivial où
              l'on peut profiter d'une cuisine savoureuse et d'une ambiance
              chaleureuse. */}
              Le NEW SOLO se situe en plien cœur du joli village de Poulx, nous
              avons le plaisir de vous accueillir après un grand changement
              en Mars 2022. Tous les jours du mardi au dimanche.
              Notre chef <span className="special-word">saucier</span> vous
              propose une cuisine traditionnelle française 🇫🇷 soignée, avec des
              produits <span className="special-word">frais</span> de
              saison ! Notre grande terrasse vous permet de profiter de notre
              fabuleux climat provençal tout au long de l'année.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo
