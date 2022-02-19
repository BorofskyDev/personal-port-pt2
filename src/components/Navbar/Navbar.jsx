import React, { useState } from "react";
import "./Navbar.scss";
import { GiAstronautHelmet } from "react-icons/gi";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#stack">Stack</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#history">History</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="Navbar">
      <div className="Navbar__links">
        <div className="Navbar__links-logo">
          <p className="Navbar__links-logo2">
            <GiAstronautHelmet className="Navbar__links_logo-icon" />
            Joel Borofsky
          </p>
        </div>
        <div className="Navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="Navbar__sign_up">
        <button type="button">Hire Me</button>
      </div>
      <div className="Navbar__menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="Navbar__menu_container scale-up-center">
            <div className="Navbar__menu_container-links">
              <Menu />
              <div className="Navbar__menu_container-links-sign">
                <button type="button">Hire Me</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
