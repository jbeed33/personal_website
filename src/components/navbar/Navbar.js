import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div id="nav-wrapper">
        <ul id="nav-container">
          <li>
            <a href="#" class="nav-link">
              About Me
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Experience
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
