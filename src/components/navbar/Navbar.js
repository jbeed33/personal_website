import React from "react";
import { CiMenuBurger } from "react-icons/ci";

import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div id="nav-wrapper">
        <CiMenuBurger id="nav-hamburger" />
        <ul id="nav-container">
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
  );
}

export default Navbar;
