import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-scroll";

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
              <Link
                to="about"
                smooth={true}
                duration={1000}
                offset={-50}
                className="nav-link"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={2000}
                offset={-50}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={2000}
                offset={1200}
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={3000}
                offset={1000}
                className="nav-link"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="footer"
                smooth={true}
                duration={2000}
                offset={800}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
