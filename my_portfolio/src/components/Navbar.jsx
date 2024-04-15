import React from "react";
import { NavLink } from "react-router-dom";

import "../../src/index.css";

export const Navbar = ({ handleThemeChange, theme }) => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-20 h-10 rounded-lg  flex font-bold  items-center justify-center "
      >
        <p className="pink-gradient_text mr-5 text-medium">Home</p>
      </NavLink>
      <nav className="flex text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "pink-gradient_text mr-4" : "pink-gradient_text mr-4"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "pink-gradient_text" : "pink-gradient_text"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
