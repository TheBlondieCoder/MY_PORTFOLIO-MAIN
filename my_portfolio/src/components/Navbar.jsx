import React from "react";
import { NavLink } from "react-router-dom";

import "../../src/index.css";

export const Navbar = ({ handleThemeChange, theme }) => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex font-bold shadow-md items-center justify-center "
      >
        <p className="text-cyan-500">AB</p>
      </NavLink>
      <nav className="flex text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-cyan-500 mr-4" : "text-black mr-4"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-cyan-500 ml-4" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
