import React, {useState} from "react";
import "/Users/Ignacio/Desktop/Mis trabajos/react-proyecto/src/navbar.css"
import CartWidget from "../common/CartWidget";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img src="https://res.cloudinary.com/dfxzcxic6/image/upload/v1706968185/BBBar2_gdvirq.png"></img>
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="link">
             Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="link">
            Catalogo
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="link">
            Acerca de Nosotros
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="link">
            Contactos
          </a>
        </li>     
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;