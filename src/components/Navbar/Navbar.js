import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" width={50} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {/* Additional menu items */}
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/a-propos">
                À propos
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Horaires & Coordonnées
              </NavLink>
            </li>
            {/* Reservation button */}
            <li onClick={handleClick}>
              <a
                id="booking-widget-2"
                href="https://le-new-solo-bar-restaurant.resos.com/booking"
                data-lang="fr"
                data-restaurant-id="NsKyRnPDhaYzC4kpZ"
                data-domain="le-new-solo-bar-restaurant.resos.com"
              >
                <button>Réserver</button>
              </a>
              <div
                id="booking-script-2"
              ></div>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
            const scr = document.createElement("script");
            scr.src =
              "https://le-new-solo-bar-restaurant.resos.com/embed/booking/widget.js?ts=" +
              new Date().getTime();
            document.getElementById("booking-script-2").appendChild(scr);
          `,
                }}
              />
            </li>
          </ul>
          {/* Hamburger menu button */}
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
