import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className="hero-img container">
      <div className="hero-content">
        <h1 className="heading-primary">
          <span>Bienvenue chez</span> <h1 className="special-word">Le New Solo</h1>
        </h1>
        <p className="text-white">Le meilleur bar restaurant à Poulx</p>
        <p className="text-white">
          Réservez dès maintenant en-ligne ou par téléphone
          <span className="special-word"> 04 30 67 09 99</span>
        </p>
      </div>
    </div>
  );
}

export default Hero
