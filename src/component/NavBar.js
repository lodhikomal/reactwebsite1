import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const closeMobileMenu = () => setClick(false);

  const handleClick = () => setClick(!click);
  useEffect =
    (() => {
      showButton();
    },
    []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PRODUCT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup "
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN UP
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
