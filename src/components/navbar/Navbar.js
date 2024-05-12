import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

import "./Navbar.css";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    console.log("toggle menu called");
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  }

  return (
    <>
      <nav>
        <div
          id="nav-wrapper"
          className={`${openMenu ? "hamburger-active" : ""}`}
        >
          <CiMenuBurger
            id="nav-hamburger"
            className={`${openMenu ? "hamburger-active" : ""}`}
            onClick={toggleMenu}
          />
          <ul
            id="nav-container"
            className={`${openMenu ? "hamburger-active" : ""}`}
          >
            <li
              id="close-button"
              className={`${openMenu ? "hamburger-active" : ""}`}
              onClick={toggleMenu}
            >
              X
            </li>
            <li>
              <a href="#" className="nav-link">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
